define([
    "dojo/_base/declare",
    "dojo/parser",
    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin",
    "dojo/text!./templates/conflictPanel.txt",
    "dojo/on",
    "dojo/dom-style",
    "dojo/dom-class",
    "dojo/dom-attr",
    "dojo/dom-construct",
    "./DataBaseConfig",
    "FrameWork/MapUtil/SuperMapWFSQuery",
    "dojo/DeferredList", 
    "FrameWork/serviceUtil/graphService",
    "FrameWork/serviceUtil/workMapService",
    'FrameWork/Loading/Loading',
    'FrameWork/serviceUtil/uploadService',
    "./conflictBtn",
    "FrameWork/serviceUtil/graphService",
    "FrameWork/CustomizeShape2/CustomizeShape"

  ], function (declare, parser, _WidgetBase, _TemplatedMixin, template, on, domStyle, domClass, domAttr, domConstruct,DataBaseConfig,SuperMapWFSQuery,DeferredList,graphService,workMapService,Loading,uploadService,conflictBtn,graphService,CustomizeShape) {
      return declare([_WidgetBase, _TemplatedMixin], {
        templateString: template,
        _resultLayer:null,
        _wkt2:null,
        _exportData:null,
        _DownloadPath:null,

        _wkt1:null,
        _conflictRe:[],

        _drawLayer: null,
        _buffLayer:null,
        _confilctB:null,

        _wkt1List:[],
        _geom:[],
        _wkt1Listbuffer:[],
        _buffGeom:[],
        _remove40:null,

        _polygonStyle: new ol.style.Style({     // 默认多面形中多边形样式 style_setting为false
            fill: new ol.style.Fill({
                color: 'rgba(0,0,0,0.5)'
            }),
            stroke: new ol.style.Stroke({
                color: 'red',
                width: 2
            })
        }),

        constructor: function (args) { },
        postCreate: function () {
            this.inherited(arguments);
        },
        startup: function () {
            var me = this;
            me._exportData=[];
            if (me._started) {
                return;
            }
            parser.parse(me.domNode).then(function () {
                domStyle.set(me.download,"display","none");
                dojo.query(".sidebar-tool").forEach((dom) => {
                    domStyle.set(dom,"display","none");
                })
                domStyle.set(me.domNode,"display","block");
                me._remove40=new CustomizeShape();
                
                // buffLayer
                var ishas = false;
                for (var i = 0; i < appConfig.map.getLayers().array_.length; i++) {
                    var layer = appConfig.map.getLayers().array_[i];
                    var layer_id = layer.get("id");

                    if (layer_id === "buffLayer") { 
                        me._drawLayer = layer;
                        ishas = true;
                        break;
                    }
                }
                if (!ishas) {
                    me._drawLayer = new ol.layer.Vector({
                        id: "buffLayer",
                        layerTitle: "叠加分析-绘制图层",
                        graphicMap: true,
                        source: new ol.source.Vector({
                            features: []
                        }),
                        zIndex: appConfig.map.getLayers().getLength() + 1
                    });
                    appConfig.map.addLayer(me._drawLayer);
                }

                me._buffLayer = new ol.layer.Vector({
                    id: "buffLayer",
                    layerTitle: "缓冲图形",
                    graphicMap: true,
                    source: new ol.source.Vector({
                      features: []
                    }),
                    zIndex: appConfig.map.getLayers().getLength() + 1
                  });
                appConfig.map.addLayer(me._buffLayer);

                me._bindEvents();
            });
        },
        _bindEvents:function(){
            var me=this;
            on(me.subSidebox_close, 'click', function () {
                domStyle.set(me.domNode, 'display', 'none');
            });

            on(me.upload_txtfile, 'click', function () {
                me.txtfile.click();
            });

            on(me.txtfile, 'change', function () {
                me._buffLayer.getSource().clear();
                me._drawLayer.getSource().clear();
                domStyle.set(me.download,"display","none");
                var fdata = new FormData();
                fdata.append("file", this.files[0]);
                Loading.show(me.domNode);
                uploadService.uploadTxt(fdata).then(function (result) {                   
                    if (result.code == "200") {
                        txtAndShpRemove40(result.data);
                        me._emptyArr();
                        for(var i=0;i<result.data.length;i++){
                            var wkt=me.getWKT(result.data[i]);
                            me._wkt1List.push(wkt);
                            var _polygon = new ol.geom.Polygon(result.data[i]);
                            var geom = new ol.Feature({
                                geometry: _polygon,
                                type: "polygon"
                            });
                            geom.setStyle(me._polygonStyle);
                            me._drawLayer.getSource().addFeature(geom);
                            me._geom.push(geom);
                        }
                        
                        var r = appConfig.map.getView().getResolutionForExtent(geom.getGeometry().getExtent(), appConfig.map.getSize());
                        appConfig.map.getView().setResolution(r);
                        appConfig.map.getView().setCenter(ol.extent.getCenter(geom.getGeometry().getExtent()));
                        Loading.hide();
                    } else {
                        alert(result.msg);
                        Loading.hide();
                    }
                });
            });

            on(me.upload_shpfile, 'click', function () {
                me.shpfile.click();
            });

            on(me.shpfile, 'change', function () {
                me._buffLayer.getSource().clear();
                me._drawLayer.getSource().clear();
                domStyle.set(me.download,"display","none");

                var fdata = new FormData();
                fdata.append("file", this.files[0]);
                Loading.show(me.domNode);
                uploadService.uploadShp(fdata).then(function (result) {
                    if (result.code == "200") {
                        me._emptyArr();
                        for(var i=0;i<result.data.length;i++){
                            // 去40
                            debugger
                            var newwkt= me._remove40.ShpIndataDeal(result.data[i].wkt);
                            me._wkt1List.push();
                            var feature = new ol.format.WKT().readFeature(newwkt);
                            var geom = new ol.Feature({
                                geometry: feature.getGeometry(),
                                type: "polygon"
                            });
                            geom.setStyle(me._polygonStyle);
                            me._drawLayer.getSource().addFeature(geom);
                            me._geom.push(geom);
                        }
                        var r = appConfig.map.getView().getResolutionForExtent(geom.getGeometry().getExtent(), appConfig.map.getSize());
                        appConfig.map.getView().setResolution(r);
                        appConfig.map.getView().setCenter(ol.extent.getCenter(geom.getGeometry().getExtent()));
                        Loading.hide();
                    } else {
                        alert(result.msg);
                        Loading.hide();
                    }
                
                });
            });

            // 缓冲
            on(me.buffer, "click", function () {
                if(me._wkt1Listbuffer.length > 0){
                    me._wkt1Listbuffer=[];
                }
                if(me._buffGeom.length > 0){
                    me._buffGeom=[];
                }
                domStyle.set(me.download,"display","none");
                var unitText = me.unit.options[me.unit.selectedIndex].text;
                var distance = parseFloat(me.distance.value);
                if (unitText == "公里") {
                    distance = distance * 1000;
                } else if (unitText == "英里") {
                    distance = distance * 1000;
                }
                me._buffLayer.getSource().clear();
                me._graphBuffer(distance,me._wkt1List,0);
            })

            // 分析
            on(me.queryBtn, "click", function () {
                Loading.show(me.domNode);
                if(me._confilctB){
                    me._confilctB.destroy();
                    me._confilctB=null;
                }

                if(me._wkt1Listbuffer.length == 0){
                    if(me._wkt1List.length > 0){
                        debugger
                        domStyle.set(me.download,"display","block");
                        me._confilctB=new conflictBtn({_highlightedLayer:me._drawLayer, _wkt2Layer:me._id, geom2:me._geom ,wkt1:me._wkt1List});
                        me._confilctB.startup();
                        me._confilctB._hideLoad=me._Loading.bind(me);
                        me._confilctB._clearConflictLayer();
                    }else{
                        alert("没有分析范围");
                        Loading.hide();
                    }
                }else if(me._wkt1Listbuffer.length > 0){
                    debugger
                    domStyle.set(me.download,"display","block");
                    me._confilctB=new conflictBtn({_highlightedLayer:me._drawLayer, _wkt2Layer:me._id, geom2:me._buffGeom ,wkt1:me._wkt1Listbuffer});
                    me._confilctB.startup();
                    me._confilctB._hideLoad=me._Loading.bind(me);
                    me._confilctB._clearConflictLayer();
                }

                me._confilctB._clickFX();
            })

            // 下载
            on(me.download, "click", function () {
                if(me._confilctB == null){
                    alert("无数据下载");
                }else{
                    me._confilctB._clickXZ();
                }
            })
        },
        _graphBuffer:function(distance,wkt1List,count){
            var me=this;
            var wkt=wkt1List[count];
            graphService.graphicalBuffer(distance, wkt).then(function (result) {
                if (result.code == "200") {
                    var geom = new ol.Feature({
                        geometry: new ol.format.WKT().readFeature(result.data).getGeometry(),
                        type: "polygon"
                    });
                    me._buffLayer.getSource().addFeature(new ol.format.WKT().readFeature(result.data));
                    me._wkt1Listbuffer.push(result.data);
                    me._buffGeom.push(geom);
                } else {
                    alert("缓冲失败");
                }
                if(count+1 >= wkt1List.length){
                    var aa=me._wkt1Listbuffer;
                }else{
                    me._graphBuffer(distance,wkt1List,count+1);
                }
            });
        },
        getWKT:function(data){
            var geom = new ol.geom.Polygon(data);
            var polygonWKT = new ol.format.WKT().writeGeometry(geom, {
                dataProjection: "EPSG:4549",
                featureProjection: "EPSG:4549",
            });
            return polygonWKT;
        },
        _setConfBtn:function(){
            var me=this;
            if(me._confilctB){
                me._confilctB.destroy();
                me._confilctB=null;
            }
            debugger
            me._confilctB=new conflictBtn({_highlightedLayer:me._drawLayer, _wkt2Layer:me._id, geom2:me._geom ,wkt1:me._wkt1List}).placeAt();
            me._confilctB.startup();
            me._confilctB._clearConflictLayer();
        },
        spArray: function (n, arr) {
            var newArr = [],
              i;
            for (i = 0; i < arr.length; ) {
              newArr.push(arr.slice(i, (i += n)));
            }
            return newArr;
        },
        _Loading:function(){
            Loading.hide();
        },
        _emptyArr:function(){
            var me=this;
            if(me._wkt1List.length > 0){
                me._wkt1List=[];
            }
            if(me._geom.length > 0){
                me._geom=[];
            }
            if(me._wkt1Listbuffer.length > 0){
                me._wkt1Listbuffer=[];
            }
            if(me._buffGeom.length > 0){
                me._buffGeom=[];
            }
        }

        
      });
  });
  
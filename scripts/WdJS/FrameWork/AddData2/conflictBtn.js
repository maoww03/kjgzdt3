define([
    "dojo/_base/declare",
    "dojo/parser",
    "dijit/_WidgetBase",
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

  ], function (declare, parser, _WidgetBase, on, domStyle, domClass, domAttr, domConstruct,DataBaseConfig,SuperMapWFSQuery,DeferredList,graphService,workMapService) {
      return declare([_WidgetBase], {
        _resultLayer:null,
        _wkt2:null,
        _exportData:null,
        _DownloadPath:null,
        _geom2:null,
        _wkt1:null,
        _conflictRe:[],

        _difference2Style: new ol.style.Style({   // 默认多面形中多边形样式 style_setting为false
            fill: new ol.style.Fill({
                color: "rgba(255,169,67,1)"
            }),
            stroke: new ol.style.Stroke({
                color: "BLACK",
                width: 4,
                lineDash: [1, 2, 3, 4, 5, 6]
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
                var ishas = false;
                for (var i = 0; i < appConfig.map.getLayers().array_.length; i++) {
                    var layer = appConfig.map.getLayers().array_[i];
                    var layer_id = layer.get("id");
                    if (layer_id === "conflict-intersect") {
                        me._resultLayer = layer;
                        ishas = true;
                        break;
                    }
                }
                if (!ishas) {
                    me._resultLayer = new ol.layer.Vector({
                        id: "conflict-intersect",
                        layerTitle: "叠加分析-分析结果",
                        graphicMap: true,
                        source: new ol.source.Vector({
                            features: []
                        }),
                        zIndex: appConfig.map.getLayers().getLength() + 1
                    });
                    appConfig.map.addLayer(me._resultLayer);
                }

                 ishas = false;
            });
        },
       
        _conflictAn:function(layerid){
            var me=this;
         
            // 1-选择了的业务类型的url _deferredArray-》dataList
            var obj = DataBaseConfig.layers.find(function (obj) { return obj.id == layerid; });
            var _deferredArray = new Array();
            for(var i=0;i<me.geom2.length;i++){
                var _geom=me.geom2[i];
                var _d = SuperMapWFSQuery.SpatialQuery(obj.queryUrl, _geom);
                _deferredArray.push(_d);

            }
         
            var _deferredList = new DeferredList(_deferredArray);
            var dataList = [];
            _deferredList.then(function (result) {
                result.forEach((li) => {
                    if (li[0]) {
                        var data = [];
                        li[1].features.forEach((feature) => {
                            data.push(feature);
                        });
                        dataList.push(data);
                    }
                });
                debugger
                if (dataList.length > 0) {
                    var conflictList = [];
                    for (var i = 0; i < dataList.length; i++) {
                        var data = { id: "", data: [] };
                        var field = "";
                        // me._resultLayer.getSource().clear();
                        for (var j = 0; j < dataList[i].length; j++) {
                            // 2-dataList和配置的appconfig-》获取用途分类名称field
                            if (j === 0) {
                                data.id = dataList[i][j].id.split('.')[1];
                                for (var k = 0; k < DataBaseConfig.layers.length; k++) {
                                    var item = DataBaseConfig.layers[k];
                                    if (data.id === item.id) {
                                        field = item.field;
                                        break;
                                    }
                                }
                            }
                            //3- 构建_data的objectid
                            var _data;
                            if (field !== "") {
                                _data = { objectid: dataList[i][j].properties.data[field], geometry:null,wkt:null };
                            } else {
                                _data = { objectid: "",  geometry: null,wkt:null };
                            }
                            try {
                                // 4-被分析图层target_geom-》wkt2
                                var coor=dataList[i][j].geometry.coordinates;
                                var geom;
                                var drawType=dataList[i][j].geometry.type;
                                if (drawType == "Polygon") {
                                    geom = new ol.geom.Polygon(coor);
                                }else if (drawType == "MultiPolygon") {
                                    geom = new ol.geom.MultiPolygon(coor);
                                }
                                var wkt = new ol.format.WKT().writeGeometry(geom, {
                                    dataProjection: "EPSG:4549",
                                    featureProjection: "EPSG:4549"
                                });
                                me._wkt2=wkt;
                                //5-分析类型
                                me._wkt1=me.wkt1[i];
                                var AnalysisData={
                                    "type": 3,
                                    "wkt1": me._wkt1,
                                    "wkt2": me._wkt2
                                }
                                graphService.graphAnalysis(dojo.toJson(AnalysisData)).then(function (result){
                                    if(result.code=="200"){
                                        var wkt=result.data;
                                        if(wkt != 'GEOMETRYCOLLECTION EMPTY'){
                                            try{
                                                //  6结果显示地图
                                                var feature = new ol.format.WKT().readFeature(wkt);
                                                _data.geometry = new ol.Feature({
                                                    geometry: feature.getGeometry(),
                                                    type: "polygon"
                                                });
                                                _data.wkt=wkt;
                                            
                                                var _resultFeature = _data.geometry.clone();
                                                _resultFeature.setStyle(me._difference2Style);
                                                me._resultLayer.getSource().addFeature(_resultFeature);
                                                data.data.push(_data);
                                            }catch (ex) {
                                                console.log(ex);
                                            }
                                        }
                                    }else{
                                        alert(result.msg);
                                    }
                                })
                            
                             
                            }catch (ex) {
                                console.log(ex);
                            }
                        }
                        if (data.data.length > 0) {
                            conflictList.push(data);
                        }
                    }
                    if(conflictList.length == 0){
                        me._hideLoad();
                    }else{
                        // me._exportData =me.doExport(conflictList[0].data);
                        me._exportData =me.doExport2(conflictList);

                        me._hideLoad();
                        me._getDownloadPath();
                    }
                }else {
                    me._hideLoad();
                    alert("没有分析结果！");
                }
            })
            
        },
        doExport:function(CaptionData){
            debugger
            var me=this;
            var arr=[];
            for(var i=0;i<CaptionData.length;i++){
                var objectid=CaptionData[i].objectid;
                if(CaptionData[i].geometry!=null){
                    var wkt=CaptionData[i].wkt;
                }
                var graphical ={
                    attributes: [{
                        propertyName:'objectid',
                        value:objectid
                    }],
                    wkt: wkt,
                };
                arr.push(graphical);
               me._conflictRe.push(graphical);
            }
            return arr;
        },
        doExport2:function(re){
            debugger
            var me=this;
            var arr=[];
            re.forEach(el=>{
                var CaptionData=el.data;
                for(var i=0;i<CaptionData.length;i++){
                    var objectid=CaptionData[i].objectid;
                    if(CaptionData[i].geometry!=null){
                        var wkt=CaptionData[i].wkt;
                    }
                    var graphical ={
                        attributes: [{
                            propertyName:'objectid',
                            value:objectid
                        }],
                        wkt: wkt,
                    };
                    arr.push(graphical);
                   me._conflictRe.push(graphical);
                }
            });
            return arr;
        },
        _getDownloadPath:function(){
            var me=this;
            var a=me._exportData;
            // workMapService.fileDownloadByPath(result.data);
            workMapService.uploadZip(me._exportData).then(function (result){
            if(result.code=="200"){
                me._DownloadPath=result.data;
            }else{
                alert(result.msg);
            }
            })
            
        },
        _clearConflictLayer:function(){
            var me=this;
            me._resultLayer.getSource().clear();
        },
        _clickXZ:function(){
            var me=this;
       
            if(me._DownloadPath != null){
                workMapService.fileDownloadByPath(me._DownloadPath);
            }else{
                alert("没有结果");
            }
        },
        _clickFX:function(){
            var me=this;
            var layerid=dojo.byId("selectLayer").value;
            me._resultLayer.getSource().clear();
            me._geom2=me.geom2[0];
            me._wkt1=me.wkt1[0];
            me._conflictAn(layerid); 
        },
        _hideLoad:function(){},
      });
  });
  
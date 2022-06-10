define([
    "dojo/_base/declare",
    "dojo/parser",
    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin",
    "dojo/text!./templates/CustomizeShape.txt",
    "dojo/on",
    "dojo/dom-style",
    "dojo/dom-class",
    "dojo/dom-attr",
    "dojo/dom-construct",
    "FrameWork/MapUtil/MapToolDraw", 
    'FrameWork/MapUtil/Survey',
    'FrameWork/serviceUtil/uploadService',
    'FrameWork/Loading/Loading',
], function (declare, parser, _WidgetBase, _TemplatedMixin, template, on, domStyle, domClass, domAttr, domConstruct, MapToolDraw,Survey, uploadService, Loading) {
    return declare([_WidgetBase, _TemplatedMixin], {
        templateString: template,
        index: 0,
        _mapTool: null,
        _drawLayer: null,

        // 默认多面形中多边形样式 style_setting为false
        _polygonStyle2: new ol.style.Style({     
            fill: new ol.style.Fill({
                color: 'rgba(0,0,0,0)',
            }),
            stroke: new ol.style.Stroke({
                color: '#0022ff',
                width: 3,
            })
        }),
        _polygonStyle: new ol.style.Style({     
            fill: new ol.style.Fill({
                color: 'rgba(0,0,0,0.5)'
            }),
            stroke: new ol.style.Stroke({
                color: 'red',
                width: 2
            })
        }),
       

        _Survey: null,
        _queryLayer: null,
        constructor: function (args) { },

        postCreate: function () {
            this.inherited(arguments);
        },

        startup: function () {
            var me = this;
            dojo.query('.repeatHide').forEach((dom) => {
                domStyle.set(dom,"display",'none');
            })
            dojo.query('.sidebar-tool').forEach((dom) => {
                domStyle.set(dom,"display",'none');
            })
            domStyle.set(me.domNode,"display",'block');

            if (me._started) {
                return;
            }
            parser.parse(me.domNode).then(function () {
                domStyle.set(me.over, 'overflow-y','auto');
                var max=document.body.clientHeight-310;
                domStyle.set(me.over, 'max-height', max+'px');
                me._Survey = new Survey();
                me._mapTool = new MapToolDraw(appConfig.map, me.getGeo.bind(me));

                var ishas = false;
                for (var i = 0; i < appConfig.map.getLayers().array_.length; i++) {
                    var layer = appConfig.map.getLayers().array_[i];
                    var layer_id = layer.get("id");
                    if (layer_id === "Custom_drawLayer") {
                        me._drawLayer = layer;
                        ishas = true;
                        break;
                    }
                }
                if (!ishas) {
                    let geoJson={
                        "type": "FeatureCollection",
                        "features": []
                      }
                    me._drawLayer = new ol.layer.Vector({
                        id: "Custom_drawLayer",
                        layerTitle: "自定义-绘制图层",
                        graphicMap: true,
                        source: new ol.source.Vector({
                            features: new ol.format.GeoJSON().readFeatures(geoJson)
                        }),
                        zIndex: appConfig.map.getLayers().getLength() + 1,
                        style:new ol.style.Style({       // 默认矩形样式 
                            fill: new ol.style.Fill({
                                color: 'rgba(0,0,0,0.5)'
                            }),
                            stroke: new ol.style.Stroke({
                                color: 'red',
                                width: 2
                            })
                        }),
                    });
                    appConfig.map.addLayer(me._drawLayer);
                }

                me._bindEvents();
            });
        },
        _bindEvents: function () {
            var me = this;
            on(me.draw, "click", function (e) {
                // 清除点查
                ClearClickQuery();

                me._mapTool.deactivate();
                me._mapTool.activate("polygon");

                domStyle.set(me.draw, 'border', '1px solid #1c74bb');
                domStyle.set(me.draw, 'color', '#1c74bb');
                domStyle.set(me.draw.children[0], 'background-image', 'url(image/doConflict/drawpolygon_select.png)');

                domStyle.set(me.upload, 'border', '1px solid #dee2eb');
                domStyle.set(me.upload, 'color', '#333');
                domStyle.set(me.upload.children[0], 'background-image', 'url(image/doConflict/uploadpolygon.png)');

                domStyle.set(me.draw_clear, 'border', '1px solid #dee2eb');
                domStyle.set(me.draw_clear, 'color','#333');
                domStyle.set(me.draw_clear.children[0], 'background-image', 'url(image/sidebar/qcdt.png)');

                domStyle.set(me.upload_selectDom, 'display', 'none');
                e.preventDefault();
            });

            on(me.draw_clear,"click",function(){
                domStyle.set(me.draw_clear, 'border', '1px solid #1c74bb');
                domStyle.set(me.draw_clear, 'color', '#1c74bb');
                domStyle.set(me.draw_clear.children[0], 'background-image', 'url(image/sidebar/mouseover/qcdt.png)');

                domStyle.set(me.draw, 'border', '1px solid #dee2eb');
                domStyle.set(me.draw, 'color', '#333');
                domStyle.set(me.draw.children[0], 'background-image', 'url(image/doConflict/drawpolygon.png)');

                domStyle.set(me.upload, 'border', '1px solid #dee2eb');
                domStyle.set(me.upload, 'color', '#333');
                domStyle.set(me.upload.children[0], 'background-image', 'url(image/doConflict/uploadpolygon.png)');

                for (var i = 0; i < appConfig.map.getLayers().array_.length; i++) {
                    var layer = appConfig.map.getLayers().array_[i];
                    if (layer.values_.graphicMap && layer.getSource().getFeatures().length) {
                       var id=layer.values_.id;
                       if(id == "Custom_drawLayer"){
                            layer.getSource().clear();
                       }
                    }
                }
               

                domStyle.set(me.upload_selectDom, 'display', 'none');
                e.preventDefault();

            })

            on(me.upload_txtfile, 'click', function () {
                me.txtfile.click();
            });

            on(me.txtfile, 'change', function () {
                var fdata = new FormData();
                fdata.append("file", this.files[0]);
                uploadService.uploadTxt(fdata).then(function (result) {
                    if (result.code == "200") {
                        txtAndShpRemove40(result.data);
                        for(var i=0;i<result.data.length;i++){
                            // 显示
                            
                            var _polygon = new ol.geom.Polygon(result.data[i]);
                            var geom = new ol.Feature({
                                geometry: _polygon,
                                type: "polygon"
                            });
                            geom.setStyle(me._polygonStyle2);
                            me._drawLayer.getSource().addFeature(geom);
                          
                        }
                         var r = appConfig.map.getView().getResolutionForExtent(geom.getGeometry().getExtent(), appConfig.map.getSize());
                        appConfig.map.getView().setResolution(r);
                        appConfig.map.getView().setCenter(ol.extent.getCenter(geom.getGeometry().getExtent()));
                       
                    } else {
                        alert(result.msg);
                    }
                });
            });

            on(me.upload_cadfile, 'click', function () {
                me.cadfile.click();
            });

            on(me.cadfile, 'change', function () {
                var fdata = new FormData();
                fdata.append("CAD", this.files[0]);
                Loading.show(me.domNode);
                uploadService.uploadCAD(fdata).then(function (result) {
                    
                    Loading.hide();
                    if (result != null) {
                        try{
                            var geom;
                            result.Layers.forEach(Layer =>{
                                var geo=Layer.Geometries;
                                // 显示
                                geo.forEach(gwkt=>{

                                    // LINESTRING 变 
                                    // 去40
                                    var newwkt=me.ShpIndataDeal(gwkt);
                                    if(newwkt == "fail"){
                                        throw new error
                                    }
                                    debugger
                                    var feature = new ol.format.WKT().readFeature(newwkt);
                                    geom = new ol.Feature({
                                        geometry: feature.getGeometry(),
                                        type: "polygon"
                                    });
                                    geom.setStyle(me._polygonStyle2);
                                    me._drawLayer.getSource().addFeature(geom);
                                })
                            })
                            // 定位
                            var r = appConfig.map.getView().getResolutionForExtent(geom.getGeometry().getExtent(), appConfig.map.getSize());
                            appConfig.map.getView().setResolution(r);
                            appConfig.map.getView().setCenter(ol.extent.getCenter(geom.getGeometry().getExtent()));
                        }catch{
                            alert("坐标错误");
                            
                        }
                    } 
                },function (err) {
                    Loading.hide();
                });
            });

            on(me.upload_shpfile, 'click', function () {
                me.shpfile.click();
            });

            on(me.shpfile, 'change', function () {
                var fdata = new FormData();
                fdata.append("file", this.files[0]);
                
                uploadService.uploadShp(fdata).then(function (result) {
                    if (result.code == "200") {
                        var area=0;
                        var length=0;
                        for(var i=0;i<result.data.length;i++){
                            var newwkt=me.ShpIndataDeal(result.data[i].wkt);
                            
                            var feature = new ol.format.WKT().readFeature(newwkt);
                            var geom = new ol.Feature({
                                geometry: feature.getGeometry(),
                                type: "polygon"
                            });
                            geom.setStyle(me._polygonStyle2);
                            me._drawLayer.getSource().addFeature(geom);
                            // 面积
                            var polygonArr = me.spArray(2, geom.getGeometry().flatCoordinates);
                            polygonArr.push(polygonArr[0]);
                            area += me._Survey.surveyArea([polygonArr]);
                            length+=me._Survey.surveyCircumference([polygonArr]);
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

            on(me.upload, 'click', function () {
                domStyle.set(me.draw, 'border', '1px solid #dee2eb');
                domStyle.set(me.draw, 'color', '#333');
                domStyle.set(me.draw.children[0], 'background-image', 'url(image/doConflict/drawpolygon.png)');

                domStyle.set(me.upload, 'border', '1px solid #1c74bb');
                domStyle.set(me.upload, 'color', '#1c74bb');
                domStyle.set(me.upload.children[0], 'background-image', 'url(image/doConflict/uploadpolygon_select.png)');

                domStyle.set(me.draw_clear, 'border', '1px solid #dee2eb');
                domStyle.set(me.draw_clear, 'color','#333');
                domStyle.set(me.draw_clear.children[0], 'background-image', 'url(image/sidebar/qcdt.png)');

                domStyle.set(me.upload_selectDom, 'display', 'block');

            });

            on(me.subSidebox_close,"click",function(){
                me.destroy();
            });
        },
      
     
        getSelectGeo: function (layer, feature) {

            layer.values_.SpatialQueryFeatures(feature).then(function (result) {
             
                this._drawLayer.getSource().clear();
                //for (var i = 0; i < result.features.length; i++) {
                  
                if (result.features.length > 0) {
                    var geom = new ol.Feature({
                        geometry: new ol.geom.MultiPolygon(result.features[0].geometry.coordinates),
                        type: "polygon"
                    });
                    geom.setStyle(this._polygonStyle);
                    geom.setProperties(result.features[0].properties.attributes);
                    this._geom.push(geom);
                    this._drawLayer.getSource().addFeature(geom);

                 
                } 
               // }
            }.bind(this));
        },
        getGeo: function (_feature) {
            var me = this;
            if (this._queryLayer === null) {
                let tx=_feature;
                let sj=new ol.Feature(tx.getGeometry());
                me._drawLayer.getSource().addFeature(sj);
                console.log(me._drawLayer.getSource().getFeatures());
                var polygonArr = me.spArray(2, tx.getGeometry().flatCoordinates);
                polygonArr.push(polygonArr[0]);
                
            } else {
                this.getSelectGeo(this._queryLayer, _feature);
            }
            me._mapTool.deactivate();
           
        },
        spArray: function (n, arr) {
            var newArr = [],
                i;
            for (i = 0; i < arr.length;) {
                newArr.push(arr.slice(i, (i += n)));
            }
            return newArr;
        },
        getWKT2:function (data,type) {
            var new_wkt='';
           var me=this;
            if(type == "Polygon"){
                new_wkt += "POLYGON("+me.wktPolygon(data);
            }
            if(type == "MultiPolygon"){
                 new_wkt += "MULTIPOLYGON(";
                 for(var i=0;i<data.length;i++){
                    new_wkt += "("+me.wktPolygon(data[i])+",";
                 }
                 new_wkt=new_wkt.substring(0,new_wkt.length-1);
                new_wkt+=")";
            }
            if(type == "LineString"){
                // new_wkt += "LineString(";
                new_wkt +="POLYGON(("
                // 接口改好后删除部分
                var fisrt=data[0];
                var len=data.length;
                var last=data[len-1]
                if(fisrt[0] != last[0] || fisrt[1] != last [1]){
                    data.push(fisrt);
                }
                // 
                
                for(var i=0;i<data.length;i++){
                    var point=data[i];
                     new_wkt += point[0]+" "+point[1]+",";
                     var pd_zb=(point[0] < 0 || point[1] < 0 );
                     var pd_x=String(point[0]).split(".")[0].length;
                     var pd_y=String(point[1]).split(".")[0].length;
                     if(pd_zb || !(pd_x == 7 && pd_y == 6 || pd_x == 6 && pd_y ==7)){
                         var msg="fail";
                         return msg;
                     }
                }
                new_wkt=new_wkt.substring(0,new_wkt.length-1);
                new_wkt+="))"
            }
            return new_wkt;
        },
        wktPolygon(data){
            var new_wkt='';
            data.forEach(el =>{
                new_wkt +="(";
                el.forEach(point =>{
                    new_wkt += point[0]+" "+point[1]+",";
                })
                new_wkt=new_wkt.substring(0,new_wkt.length-1);
                new_wkt+=")"+","
            })
            new_wkt=new_wkt.substring(0,new_wkt.length-1);
            new_wkt+=")";
            return new_wkt;
        },
        ShpIndataDeal:function (shpwkt) {
             /*
             去40
            */
             // 1-获取geojson
             var geometry=new ol.format.WKT().readGeometry(shpwkt);
             var convertor = new ol.format.GeoJSON();
             var geojson=convertor.writeGeometry(geometry);
             geojson=JSON.parse(geojson);
             //2-去40
             txtAndShpRemove40(geojson.coordinates);
             //3-获取新wkt 
             var newwkt=this.getWKT2(geojson.coordinates,geojson.type);
            return newwkt
        }
    });
});

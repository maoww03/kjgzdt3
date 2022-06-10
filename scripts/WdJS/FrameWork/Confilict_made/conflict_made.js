define([
    "dojo/_base/declare",
    "dojo/parser",
    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin",
    "dojo/text!./templates/conflict_made.txt",
    "dojo/on",
    "dojo/dom-style",
    "dojo/dom-class",
    "dojo/dom-attr",
    "dojo/dom-construct",
    "FrameWork/MapUtil/MapToolDraw", 
    "dojo/DeferredList", 
    "FrameWork/MapUtil/SuperMapWFSQuery",
    'FrameWork/MapUtil/Survey',
    'FrameWork/serviceUtil/uploadService',
    'FrameWork/Loading/Loading',
    "FrameWork/serviceUtil/workMapService",
    "FrameWork/serviceUtil/graphService","FrameWork/serviceUtil/ConfigurationService","./resultTab","./layerConfig","./resultTab2","FrameWork/SetMapConfig/SetMapConfig"
], function (declare, parser, _WidgetBase, _TemplatedMixin, template, on, domStyle, domClass, domAttr, domConstruct, MapToolDraw, DeferredList, SuperMapWFSQuery, Survey,  uploadService, Loading,workMapService,graphService,ConfigurationService,resultTab,layerConfig,resultTab2,SetMapConfig) {
    return declare([_WidgetBase, _TemplatedMixin], {
        templateString: template,
        index: 0,
        _mapTool: null,
        _geom: [],
        _drawLayer: null,
        _buffGeom: null,
        _attrQueryTool: null,
        _analysisGroupList: [],
        _resultTabList: [],
        _resultDataAll:null,
        _analysisResult: null,
        _exportData:null,
        _wkt1:null,
        _wkt2:null,
        _timestop:false,

        _err:"",
        _AlayerNum:null,

        _highlightedLayer: null,

        _resultLayer: null,
      

        _difference1Style: new ol.style.Style({
            fill: new ol.style.Fill({
                color: "rgba(0,153,68,1)"
            }),
            stroke: new ol.style.Stroke({
                color: "BLACK",
                width: 4,
                lineDash: [1, 2, 3, 4, 5, 6]
            })
        }),

        _difference2Style: new ol.style.Style({
            fill: new ol.style.Fill({
                color: "rgba(255,169,67,1)"
            }),
            stroke: new ol.style.Stroke({
                color: "BLACK",
                width: 4,
                lineDash: [1, 2, 3, 4, 5, 6]
            })
        }),

        _difference3Style: new ol.style.Style({
            fill: new ol.style.Fill({
                color: "rgba(0,80,187,1)"
            }),
            stroke: new ol.style.Stroke({
                color: "BLACK",
                width: 4,
                lineDash: [1, 2, 3, 4, 5, 6]
            })
        }),

        _polygonStyle: new ol.style.Style({     
            fill: new ol.style.Fill({
                color: 'rgba(0,0,0,0.5)'
            }),
            stroke: new ol.style.Stroke({
                color: "BLACK",
                width: 4,
                lineDash: [1, 2, 3, 4, 5, 6]
            })
        }),

        _differenceType: 3,
        _Survey: null,
        _geometryItemList: null,

        _queryLayer: null,
        _wkt1List:[],
        _getConflictConfig:null,

        _analyzeLayer:layerConfig.layers,

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

                domStyle.set(me.show_result2,"display","none");
                domStyle.set(me.show_result_pa,"display","none");



                me._geometryItemList = []; //

                me._Survey = new Survey(); 

                me._emptyArr(); //清空

                me._attrQueryTool = null;

                me._mapTool = new MapToolDraw(appConfig.map, me.getGeo.bind(me));

                // --绘制图层
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
                // ---分析结果图层
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
                // --分析高亮图层
                ishas = false;
                for (var i = 0; i < appConfig.map.getLayers().array_.length; i++) {
                    var layer = appConfig.map.getLayers().array_[i];
                    var layer_id = layer.get("id");
                    if (layer_id === "conflict-highlighted") {
                        me._highlightedLayer = layer;
                        ishas = true;
                        break;
                    }
                }
                if (!ishas) {
                    me._highlightedLayer = new ol.layer.Vector({
                        id: "conflict-highlighted",
                        layerTitle: "叠加分析-分析高亮",
                        graphicMap: true,
                        source: new ol.source.Vector({
                            features: []
                        }),
                        zIndex: appConfig.map.getLayers().getLength() + 1
                    });
                    appConfig.map.addLayer(me._highlightedLayer);
                }

                me._bindEvents();
            });
        },
        _bindEvents: function () {
            var me = this;
            on(me.draw, "click", function () {
                 // 清除点查
                ClearClickQuery();
                me._queryLayer = null;
                me._emptyArr();
                me._mapTool.deactivate();
                me._drawLayer.getSource().clear();
                me._mapTool.activate("polygon");

                domStyle.set(me.draw, 'border', '1px solid #1c74bb');
                domStyle.set(me.draw, 'color', '#1c74bb');

                domStyle.set(me.upload_txtfile, 'border', '1px solid #dee2eb');
                domStyle.set(me.upload_txtfile, 'color', '#333');

                domStyle.set(me.upload_shpfile, 'border', '1px solid #dee2eb');
                domStyle.set(me.upload_shpfile, 'color', '#333');
            });

            on(me.upload_txtfile, 'click', function () {
                me._emptyArr();
                me._queryLayer = null;
                me.txtfile.click();

                domStyle.set(me.upload_txtfile, 'border', '1px solid #1c74bb');
                domStyle.set(me.upload_txtfile, 'color', '#1c74bb');

                domStyle.set(me.draw, 'border', '1px solid #dee2eb');
                domStyle.set(me.draw, 'color', '#333');

                domStyle.set(me.upload_shpfile, 'border', '1px solid #dee2eb');
                domStyle.set(me.upload_shpfile, 'color', '#333');

            });

            on(me.txtfile, 'change', function () {
                var fdata = new FormData();
                fdata.append("file", this.files[0]);
                uploadService.uploadTxt(fdata).then(function (result) {
                    if (result.code == "200") {
                        // result.data
                        txtAndShpRemove40(result.data);
                        me._emptyArr();
                        me._drawLayer.getSource().clear();
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

                    } else {
                        alert(result.msg);
                    }
                });
            });

            on(me.upload_shpfile, 'click', function () {
                me._emptyArr();
                me._queryLayer = null;
                me.shpfile.click();

                domStyle.set(me.upload_shpfile, 'border', '1px solid #1c74bb');
                domStyle.set(me.upload_shpfile, 'color', '#1c74bb');

                domStyle.set(me.draw, 'border', '1px solid #dee2eb');
                domStyle.set(me.draw, 'color', '#333');

                domStyle.set(me.upload_txtfile, 'border', '1px solid #dee2eb');
                domStyle.set(me.upload_txtfile, 'color', '#333');

            });

            on(me.shpfile, 'change', function () {
                
                var fdata = new FormData();
                fdata.append("file", this.files[0]);
                uploadService.uploadShp(fdata).then(function (result) {
                    if (result.code == "200") {
                        me._emptyArr();
                      
                        for(var i=0;i<result.data.length;i++){          
                            // 1-获取geojson
                            
                            var geometry=new ol.format.WKT().readGeometry(result.data[i].wkt);
                            var convertor = new ol.format.GeoJSON();
                            var geojson=convertor.writeGeometry(geometry);
                            geojson=JSON.parse(geojson);
                            //2-去40
                            txtAndShpRemove40(geojson.coordinates);
                         
                            //3-获取新wkt ？？？
                            var newwkt=me.getWKT2(geojson.coordinates,geojson.type);
                            me._wkt1List.push(newwkt);
                           var feature = new ol.format.WKT().readFeature(newwkt);

                            // 4-简化 ???
                            // if(result.data[i].wkt.length>20000){
                            //     if(geojson.coordinates[0][0][0][0] == undefined){
                            //         var aa=turf.polygon(geojson.coordinates);
                            //     }else{
                            //         var aa=turf.polygon(geojson.coordinates[0]);
                            //     }
                            //     var options = {tolerance: 5, highQuality: false};
                            //     var simplified = turf.simplify(aa, options);
                            //     var format = new ol.format.GeoJSON();
                            //     feature = format.readFeature(simplified);
                            // }
                            // 5-显示
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
                        me.shpfile.value="";
                    } else {
                        alert(result.msg);
                    }
                });
            });


            on(me.clear, 'click', function () {
                me._drawLayer.getSource().clear();
                me._emptyArr();
            });

            on(me.queryBtn, "click", function () {
                me._highlightedLayer.getSource().clear();
                var _deferredArray = new Array();
                // 1-选择了的业务类型的url _deferredArray-》dataList
                for (var j = 0; j < me._analyzeLayer.length; j++) {
                    me._AlayerNum=me._analyzeLayer.length;
                    for (var k = 0; k < me._geom.length; k++) {
                        var queryurl = SetMapConfig.setOneQueryurl(me._analyzeLayer[j].queryUrl);
                        var _d = SuperMapWFSQuery.longQuest(queryurl, me._geom[k]);
                        _deferredArray.push(_d);
                        // var _d = SuperMapWFSQuery.SpatialQuery(queryurl, me._geom[k]);
                        // _deferredArray.push(_d);
                    }
                }
                console.log(_deferredArray);
                console.log(me._analyzeLayer);
                var _deferredList = new DeferredList(_deferredArray);
                var dataList = [];
                var layeridList = [];
                Loading.show(me.domNode);
                _deferredList.then(function (result) {
                    result.forEach((li) => {
                        // dataList.push(li[1].data);
                        dataList.push(li[1].re);
                        layeridList.push(li[1].id);
                    });
                    if (dataList.length > 0) {
                        // 2-画的面，需要分析地块 orgin_geom-》wkt1
                        var conflictList = [];
                        me._resultLayer.getSource().clear();
                        for (var i = 0; i < dataList.length; i++) {
                            
                            var obj =  me._analyzeLayer.find(function (obj) {return obj.id == layeridList[i];});
                            var data = { id: layeridList[i], data: [] };
                            var field = obj.field;
                            var field2=obj.field2;
                            for (var j = 0; j < dataList[i].length; j++) {
                                let dataWkt=null;
                                 // 2-dataList和配置的appconfig-》获取用途分类名称field
                                //图层属性配对(根据数据差异性)——写死了
                                if(dataList[i][j].shape2!=undefined){
                                    dataWkt=dataList[i][j].shape2;
                                }
                                else if(dataList[i][j].shape41!=undefined){
                                    dataWkt=dataList[i][j].shape41;
                                }
                                else{
                                    dataWkt=dataList[i][j].shape19;
                                }
            
                                //3- 构建_data的type
                                var _data;
                                if (field !== "") {
                                    _data = { type: dataList[i][j][field],type2:dataList[i][j][field2], area: 0,geometry:null };
                                } else {
                                    _data = { type: "",type2:"", area: 0, geometry: null };
                                }

                                try {
                                    // 4-被分析图层target_geom-》wkt2
                                    // var coor=dataList[i][j].geometry.coordinates;
                                    // var geom;
                                    // var drawType=dataList[i][j].geometry.type;
                                    // if (drawType == "Polygon") {
                                    // geom = new ol.geom.Polygon(coor);
                                    // }else if (drawType == "MultiPolygon") {
                                    // geom = new ol.geom.MultiPolygon(coor);
                                    // }
                                    // var wkt = new ol.format.WKT().writeGeometry(geom, {
                                    //     dataProjection: "EPSG:4549",
                                    //     featureProjection: "EPSG:4549"
                                    // });
                                    me._wkt2=dataWkt;

                                   //5-分析类型
                                   
                                    if(me._geom.length>1){
                                        var aa=me._AlayerNum;
                                        var bb=Math.floor(i/aa);
                                        me._wkt1=me._wkt1List[bb];
                                    }else{
                                        var polygonArr = me.spArray(2, me._geom[0].getGeometry().flatCoordinates);
                                        me._wkt1=me.PolygonToWKT(polygonArr);
                                    }

                                    var AnalysisData={
                                        "type": me._differenceType,
                                        "wkt1": me._wkt1,
                                        "wkt2": [me._wkt2] //3 1
                                    }
                                    
                                    graphService.graphAnalysis(dojo.toJson(AnalysisData)).then(function (result){
                                        if(result.code=="200"){
                                            let wkt=result.data[0];
                                            if(wkt != 'GEOMETRYCOLLECTION EMPTY'){
                                                try{
                                                    let feature = new ol.format.WKT().readFeature(wkt);
                                                    
                                                    //7 获取area 或者累加 ，面积
                                                    let arr = me.spArray(2, feature.getGeometry().flatCoordinates);
                                                    let area = me._Survey.surveyArea([arr]);
                                                    _data.area = area.toFixed(2);

                                                    //  8-结果显示地图
                                                    if(wkt.indexOf("POLYGON"!=-1)){
                                                        _data.geometry = new ol.Feature({
                                                            geometry: feature.getGeometry(),
                                                            type: "polygon"
                                                        });
                                                    }
                                                    else if(wkt.indexOf("MULTIPOLYGON"!=-1)){
                                                        _data.geometry = new ol.Feature({
                                                            geometry: feature.getGeometry(),
                                                            type: "MultiPolygon"
                                                        });
                                                    }
                                                    var _resultFeature = _data.geometry.clone();
                                                    _resultFeature.setStyle(me._difference3Style);
                                                    me._resultLayer.getSource().addFeature(_resultFeature);
                                                    debugger
                                                    data.data.push(_data);
                                                }catch (ex) {
                                                    console.log(ex);
                                                }
                                            }
                                        }else{
                                            var aa=AnalysisData;
                                            var bb=me._wkt1List[i];
                                            me._err+=result.msg;
                                            if(j == dataList[i].length -1){
                                                console.log(me._err);
                                            }
                                        }
                                    })
                                } catch (ex) {
                                    console.log(ex);
                                }
                            }
                            console.log(data);
                            if (data.data.length > 0) {
                                var id=data.id;
                                var pd=false;
                                for(var ii=0 ;ii<conflictList.length;ii++){
                                    var _id=conflictList[ii].id;
                                    if(_id == id){
                                        data.data.forEach(els =>{
                                            pd=true;
                                            conflictList[ii].data.push(els);
                                        })
                                    }
                                }
                                if(pd == false){
                                    conflictList.push(data);
                                }
                            }
                        }

                        domStyle.set(me.show_result_pa,"display","block");
                       
                        // 数据分类
                        console.log(conflictList)
                        if(conflictList.length>0){
                            domStyle.set(me.show_result2,"display","block");

                             // 导出
                             me._exportData=me.doExport2(conflictList); //all
                             
                            //  show1
                             on(me.show_result,"click",function(){
                                if(me._resultDataAll != null){
                                    me._resultDataAll.destroy();
                                }

                                var _resultTab = new resultTab({ _data: conflictList,_downData:me._exportData}).placeAt(dojo.body());
                                _resultTab.doExportData=me.doExport3.bind(me);
                                _resultTab.startup();
                                me._resultDataAll=_resultTab;
                            })
                            // show2
                            if(me._resultDataAll2 != null){
                                me._resultDataAll2.destroy();
                            }

                            var _resultTab2 = new resultTab2({ _data: conflictList}).placeAt(me.show_result2);
                            _resultTab2.onClick=me.locationGeo.bind(this);
                            _resultTab2.startup();
                            me._resultDataAll2=_resultTab2;
                        }else{
                            domStyle.set(me.show_result2,"display","none");
                            domStyle.set(me.show_result,"display","none");
                            me.re_msg.innerHTML="(没有数据)"
                        }

                    } else {
                        domStyle.set(me.show_result_pa,"display","block");
                        me.re_msg.innerHTML="(没有分析结果！)"
                        domStyle.set(me.show_result,"display","none");
                        alert("没有分析结果！");
                    }
                    Loading.hide();
                }.bind(me));
            });

            on(me.subSidebox_close, 'click', function () {
                domStyle.set(me.domNode, 'display', 'none');
                _checkQuery=true;
                _attrQueryTool.activate("point");
            });

           

            
        },

      
        getWKT2:function (data,type) {
            var new_wkt='';
           var me=this;
            if(type == "Polygon"){
                //POLYGON((1 1,5 1,5 5,1 5,1 1),(2 2,2 3,3 3,3 2,2 2))
                //"coordinates": [
                //            [
                //                [-180.0, 10.0],
                //                [20.0, 90.0],
                //                [180.0, -5.0],
                //                [-30.0, -90.0]
                //            ]
                //        ]
                new_wkt += "POLYGON("+me.wktPolygon(data);
               
            }
            if(type == "MultiPolygon"){
                 //解析为多个polygon
                //多面 MULTIPOLYGON(((X Y,X Y)),((X Y,X Y)),((X Y,X Y)))
                 new_wkt += "MULTIPOLYGON((";
                 for(var i=0;i<data.length;i++){
                    new_wkt += me.wktPolygon(data[i])+",";
                 }
                 new_wkt=new_wkt.substring(0,new_wkt.length-1);
                new_wkt+=")";
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
        
        tabChange: function (id, caption,data) {

            for (var i = 0; i < this._resultTabList.length; i++) {
                domStyle.set(this._resultTabList[i].domNode, 'border', "none");
                domStyle.set(this._resultTabList[i].domNode, 'color', "#333");
            }
            if (this._analysisResult != null) {
                this._analysisResult.destroy();
                this._analysisResult = null;
            }
            
            domStyle.set(this.downLoad,"display","inline-block");
            this._exportData=this.doExport(data.data);
            this._analysisResult = new analysisResult({ data: data, caption: caption }).placeAt(this.fxjg_table_content);
            this._analysisResult.onClick = this.locationGeo.bind(this);
            this._analysisResult.startup();
        },
        locationGeo: function (feature) {
            var me=this;
            this._resultLayer.getSource().clear();
            this._highlightedLayer.getSource().clear();
            //if (feature.geometry.type == "MultiPolygon" || feature.geometry.type == "MultiLineString") {
            if(me._differenceType==3){
                feature.setStyle(me._difference3Style);
            }else if(me._differenceType==2){
                feature.setStyle(me._difference2Style);
            }else if(me._differenceType==1){
                feature.setStyle(me._difference1Style);
            }
           // var r = appConfig.map.getView().getResolutionForExtent(feature.getGeometry().getExtent(), appConfig.map.getSize());
            //appConfig.map.getView().setResolution(r);
            var aa=feature.getGeometry().getCoordinates();
            if(aa.length > 0){
                appConfig.map.getView().setCenter(ol.extent.getCenter(feature.getGeometry().getExtent()));
                this._highlightedLayer.getSource().addFeature(feature);
            }
            // }

        },
        getSelectGeo: function (layer, feature) {

            layer.values_.SpatialQueryFeatures(feature).then(function (result) {
                for (var i = 0; i < this._geometryItemList.length; i++) {
                    this._geometryItemList[i].destroy();
                }
                this._geometryItemList = [];
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

                    var area = this._Survey.surveyArea(result.features[0].geometry.coordinates[0]);
                    var length = this._Survey.surveyCircumference(result.features[0].geometry.coordinates[0]);
                    var data = { index: 1, area: area, length: length };
                    var _geometryItem = new geometryItem({ data: data }).placeAt(this.geometryList);
                    this._geometryItemList.push(_geometryItem);
                    _geometryItem.startup();
                } 
               // }
            }.bind(this));
        },
        getGeo: function (_feature) {
            var me = this;
            if (this._queryLayer === null) {
                me._geom.push(_feature);
                me._drawLayer.getSource().clear();
                me._drawLayer.getSource().addFeature(_feature);
                var polygonArr = me.spArray(2, _feature.getGeometry().flatCoordinates);
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
        PolygonToWKT:function(polygonArr){
            var me=this;
            var wkt='';
            if(polygonArr[0] != undefined && polygonArr[0] != null){
                if (polygonArr[0][0] != polygonArr[polygonArr.length - 1][0] || polygonArr[0][1] != polygonArr[polygonArr.length - 1][1]) {
                    polygonArr.push(polygonArr[0]);
                    }
            }
         
            wkt = "MULTIPOLYGON(((";
            polygonArr.forEach((p) => {
              wkt += p[0] + " " + p[1] + ",";
            });
            wkt = wkt.substring(0, wkt.length - 1);
            wkt += ")))";
            return wkt;
        },
        doExport:function(CaptionData){
            
            var me=this;
            var arr=[];
            for(var i=0;i<CaptionData.length;i++){
                var type=CaptionData[i].type;
                var area=CaptionData[i].area;
                if(CaptionData[i].geometry!=null){
                    var geometry=CaptionData[i].geometry.clone();
                    var polygonArr = me.spArray(2, geometry.getGeometry().flatCoordinates);
                    var wkt=me.PolygonToWKT(polygonArr);
                }
                
                var graphical ={
                    attributes: [{
                        propertyName:'type',
                        value:type
                    },
                    {
                        propertyName:'area',
                        value:area
                    }],
                    wkt: wkt,
                  };
                arr.push(graphical);
            }
            // console.log(dojo.toJson(arr));
            // return dojo.toJson(arr);
            Loading.hide();
            return arr;
        },
        doExport3:function(CaptionData){
            
            var me=this;
            var arr=[];
            for(var i=0;i<CaptionData.length;i++){
                var type=CaptionData[i].type;
                var type2=CaptionData[i].type2;

                var area=CaptionData[i].area;
                if(CaptionData[i].geometry!=null){
                    var geometry=CaptionData[i].geometry.clone();
                    var polygonArr = me.spArray(2, geometry.getGeometry().flatCoordinates);
                    var wkt=me.PolygonToWKT(polygonArr);
                }
                
                var graphical ={
                    attributes: [
                    {
                        propertyName:'xmmc',
                        value:type
                    },
                    {
                        propertyName:'pzwh',
                        value:type2
                    },
                    {
                        propertyName:'area',
                        value:area
                    }],
                    wkt: wkt,
                  };
                arr.push(graphical);
            }
            // console.log(dojo.toJson(arr));
            // return dojo.toJson(arr);
            Loading.hide();
            return arr;
        },
// 导出
        doExport2:function(re){
            
            var me=this;
            var arr=[];
            re.forEach(el=>{
                var CaptionData=el.data;
                for(var i=0;i<CaptionData.length;i++){
                    var type=CaptionData[i].type;
                    var area=CaptionData[i].area;
                    if(CaptionData[i].geometry!=null){
                        var geometry=CaptionData[i].geometry.clone();
                        var polygonArr = me.spArray(2, geometry.getGeometry().flatCoordinates);
                        var wkt=me.PolygonToWKT(polygonArr);
                    }
                    
                    var graphical ={
                        attributes: [{
                            propertyName:'type',
                            value:type
                        },
                        {
                            propertyName:'area',
                            value:area
                        }],
                        wkt: wkt,
                      };
                    arr.push(graphical);
                   
                }
            });
            return arr;
        },

        // 导出----------
        _emptyArr:function(){
            var me=this;
            if(me._wkt1List.length > 0){
                me._wkt1List=[];
            }
            if(me._geom.length > 0){
                me._geom =[];
            }
        },
        getWKT:function(data){
            var geom = new ol.geom.Polygon(data);
            var polygonWKT = new ol.format.WKT().writeGeometry(geom, {
                dataProjection: "EPSG:4549",
                featureProjection: "EPSG:4549",
            });
            return polygonWKT;
        },
    });
});

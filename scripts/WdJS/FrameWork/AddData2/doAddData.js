define([
  "dojo/_base/declare",
  "dojo/parser",
  "dijit/_WidgetBase",
  "dijit/_TemplatedMixin",
  "dojo/text!./templates/doAddDataTemplate.txt",
  "dojo/on",
  "dojo/dom-style",
  "dojo/dom-class",
  "dojo/dom-attr",
  "dojo/dom-construct", 
  "./DataBaseConfig", 
  "FrameWork/serviceUtil/databaseService",
   "./text", 
   "./number", 
   "./date", 
   'FrameWork/serviceUtil/uploadService',
    "FrameWork/serviceUtil/gisocnService",
    "FrameWork/serviceUtil/graphService",
    "FrameWork/Measure/GaussKruger",
    "FrameWork/Graph/Load_Layer",
    "FrameWork/serviceUtil/excelWorkService","FrameWork/CustomizeShape2/CustomizeShape"
], function (declare, parser, _WidgetBase, _TemplatedMixin, template, on, domStyle, domClass, domAttr, domConstruct, DataBaseConfig, databaseService, textDom, numberDom, dateDom, uploadService, gisocnService,graphService,GaussKruger,Load_Layer,excelWorkService,CustomizeShape) {
    return declare([_WidgetBase, _TemplatedMixin], {
        templateString: template,
        _started: false,
        _contentList: null,
        _geom: null,
        _drawLayer: null,
        _uploadData: null,
        err_arr:null,
        er_p:null,
        _errorLayer:null,
        _attrQueryTool: null,
        _confilctB:null,
        _wkt1List:[],
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
            me._geom=[];
            if (me._started) {
                return;
            }
            parser.parse(me.domNode).then(function () {
                me._contentList = [];
                me._remove40=new CustomizeShape();
                me.dataBaseSelected();
                dojo.query(".sidebar-tool").forEach((dom) => {
                    domStyle.set(dom,"display","none");
                })
                domStyle.set(me.domNode,"display","block");
                
                var option = "<option value='-1'>请选择数据库</option>";
                for (var i = 0; i < DataBaseConfig.layers.length; i++) {
                    option += "<option value='" + DataBaseConfig.layers[i].id + "'>" + DataBaseConfig.layers[i].name+"</option>";
                }
                me.databseSelect.innerHTML = option;
                // errorLayer
                var ishas = false;
                for (var i = 0; i < appConfig.map.getLayers().array_.length; i++) {
                    var layer = appConfig.map.getLayers().array_[i];
                    var layer_id = layer.get("id");
                    if (layer_id === "errorLayer") {
                        me._errorLayer = layer;
                        ishas = true;
                        break;
                    }
                }
                if (!ishas) {
                    me._errorLayer = new ol.layer.Vector({
                        id: "errorLayer",
                        layerTitle: "上图入库-错误图形",
                        graphicMap: true,
                        source: new ol.source.Vector({
                            features: []
                        }),
                        zIndex: appConfig.map.getLayers().getLength() + 1
                    });
                    appConfig.map.addLayer(me._errorLayer);
                }
                // addDataLayer
                ishas = false;
                for (var i = 0; i < appConfig.map.getLayers().array_.length; i++) {
                    var layer = appConfig.map.getLayers().array_[i];
                    var layer_id = layer.get("id");
                    if (layer_id === "addDataLayer") { 
                        me._drawLayer = layer;
                        ishas = true;
                        break;
                    }
                }
                if (!ishas) {
                    me._drawLayer = new ol.layer.Vector({
                        id: "addDataLayer",
                        layerTitle: "上图入库-上传图形",
                        graphicMap: true,
                        source: new ol.source.Vector({
                            features: []
                        }),
                        zIndex: appConfig.map.getLayers().getLength() + 1
                    });
                    appConfig.map.addLayer(me._drawLayer);
                }
                me._bindEvents();
                
            });
        },
        _bindEvents: function () {
            var me = this;
            on(me.downloadExcel, 'click', function () {
                debugger
                excelWorkService.downLoadExcelData(me._id);
            });

            on(me.uploadExcel_file, 'click', function () {
                me.uploadExcel.click();
            });

            on(me.uploadExcel, 'change', function () {
                var fdata = new FormData();
                fdata.append("file", this.files[0]);
                domStyle.set(me.loading,"display","block");
                excelWorkService.getTabInfor(fdata).then(function (result) {
                    if (result.code == "200") {
                        me._uploadData = result.data;
                        if (me._contentList.length > 0) {
                            for (var i = 0; i < me._contentList.length; i++) {
                                for (var j = 0; j < me._uploadData.length; j++) {
                                    if (me._uploadData[j].name == me._contentList[i].data.name) {
                                        me._contentList[i].fieldValue.value = me._uploadData[j].value;
                                        break;
                                    }
                                }
                            }
                        }
                    } else {
                        alert(result.msg);
                    }
                domStyle.set(me.loading,"display","none");

                });
            });

            // on(this.databseSelect, 'change', function () {
            //     for (var i = 0; i < this._contentList.length; i++) {
            //         this._contentList[i].destroy();
            //     }
            //     this._contentList = [];
            //     if (this.databseSelect.value != -1) {
            //         databaseService.getTableInformationByTableName(this.databseSelect.value).then(function (result) {
            //             if (result.code == "200") {

            //                 for (var i = 0; i < result.data.length; i++) {
                                
            //                     if (result.data[i].type != "serial" && result.data[i].name.toLowerCase().indexOf("shape") < 0) {
            //                         var _dom;
            //                         if (result.data[i].type == "float8" || result.data[i].type == "int4") {
            //                             _dom = new numberDom({ data: result.data[i] }).placeAt(this.domList);
            //                             _dom.startup();
            //                         } else if (result.data[i].type == "varchar") {
            //                             _dom = new textDom({ data: result.data[i] }).placeAt(this.domList);
            //                             _dom.startup();
            //                         } else if (result.data[i].type == "timestamp") {
            //                             _dom = new dateDom({ data: result.data[i] }).placeAt(this.domList);
            //                             _dom.startup();
            //                         }
            //                         this._contentList.push(_dom);
            //                     }
            //                 }

            //                // me._uploadData = result.data[0].attributes;

            //                 if (me._contentList.length > 0 && me._uploadData!=null) {
            //                     for (var i = 0; i < me._contentList.length; i++) {
            //                         for (var j = 0; j < me._uploadData.length; j++) {
            //                             if (me._uploadData[j].propertyName == me._contentList[i].data.name) {
            //                                 me._contentList[i].fieldValue.value = me._uploadData[j].value;
            //                                 break;
            //                             }
            //                         }
            //                     }
            //                 }

            //             } else {
            //                 alert(result.msg);
            //             }
            //         }.bind(this));
            //     }
            // }.bind(this));

            on(me.upload_txtfile, 'click', function () {
                me.txtfile.click();
            });

            on(me.txtfile, 'change', function () {
                var fdata = new FormData();
                fdata.append("file", this.files[0]);
                
                uploadService.uploadTxt(fdata).then(function (result) {                   
                    if (result.code == "200") {
                        txtAndShpRemove40(result.data);
                        domStyle.set(me.loading,"display","block");
                        if(me._wkt1List.length > 0){
                            me._wkt1List=[];
                        }
                        if(me._geom.length > 0){
                            me._geom=[];
                        }
                        me._drawLayer.getSource().clear();
                        for(var i=0;i<result.data.length;i++){
                            var wkt=me.getWKT(result.data[i]);
                            me.check_xy(wkt);
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
                    domStyle.set(me.loading,"display","none");

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
                        domStyle.set(me.loading,"display","block");
                        if(me._wkt1List.length > 0){
                            me._wkt1List=[];
                        }
                        if(me._geom.length > 0){
                            me._geom=[];
                        }
                        me._drawLayer.getSource().clear();
                        for(var i=0;i<result.data.length;i++){
                          
                            // 去40
                            var newwkt= me._remove40.ShpIndataDeal(result.data[i].wkt);
                            me.check_xy(newwkt);
                            me._wkt1List.push(newwkt);
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
                        me._uploadData = result.data[0].attributes;

                        if (me._contentList.length > 0) {
                            for (var i = 0; i < me._contentList.length; i++) {
                                for (var j = 0; j < me._uploadData.length; j++) {
                                    if (me._uploadData[j].propertyName == me._contentList[i].data.name) {
                                        me._contentList[i].fieldValue.value = me._uploadData[j].value;
                                        break;
                                    }
                                }
                            }
                        }

                    } else {
                        alert(result.msg);
                    }
                domStyle.set(me.loading,"display","none");
                });
            });
            on(me.subSidebox_close, 'click', function () {
                domStyle.set(me.domNode, 'display', 'none');
            });

            on(this.submit, 'click', function () {
                if (this._contentList.length == 0) {
                    alert("请选择源数据库");
                    return;
                }
                if (this._geom.length==0 || this._geom == null) {
                    alert("请上传图形");
                    return;
                }
                if (this._geom.length > 1 ) {
                    alert("请上传一个地块");
                    return;
                }
                var strwkt = new ol.format.WKT().writeFeature(me._geom[0], {
                    dataProjection: "EPSG:4549",//目标坐标系
                    featureProjection: "EPSG:4549"  //当前坐标系
                }); 
                //var data = {};
                //var insertTemp = { tableName: "yjjblt_temp_1_0", columnList: ["node_result", "result_detail", "file_ids", "file_name"], valueList: ["", "", "", ""] };
                var insertTemp = { tableName: "yjjblt_temp_1_0", columnList: [], valueList: [] };
                for (var i = 0; i < this._contentList.length; i++) {
                    var _data = this._contentList[i].getValue();
                    var _value;
                    if (_data.type == "float8" || _data.type == "int4") {
                        if (_data.value == "") {
                            _value = 0;
                        } else {
                            _value = _data.value;
                        }
                    } else if (_data.type == "timestamp") {
                        if (_data.value == "") {
                            _value = null;
                        } else {
                            _value = _data.value;
                        }
                    } else {
                        _value = _data.value;
                    }
                    //data[_data.field] = _value;
                    insertTemp.columnList.push(_data.field);
                    insertTemp.valueList.push(_value);
                }
                insertTemp.columnList.push("shape");
                insertTemp.valueList.push(strwkt);
                domStyle.set(me.loading,"display","block");

                gisocnService.insertTemp(dojo.toJson(insertTemp)).then(function (result) {
                    
                    if (result.code == "00000") {
                        alert("提交成功！");
                        me._uploadData = null;
                        me._geom = [];
                    } else {
                        alert(result.msg);
                    }
                domStyle.set(me.loading,"display","none");
                });

                ///调用都市圈入库接口
            }.bind(this));
        },
        check_xy:function(wkt){
            var me=this;
            domStyle.set(this.showErr,"display","block");
            domStyle.set(me.loading,"display","none");
            graphService.check_tx(wkt).then(function (result) {
                var out2=result;
                // out2.data['angle']=[{x:120.71301146881207,y:27.951635986215383}];
                if (out2.code == 200) {
                    var type=me.get_error_type(out2.data);
                    if(type!='正常'){
                        for(var i=0;i<me.er_p.length;i++){
                            var style;
                            if(me.er_p[i].type=='angle'){
                                 style=new ol.style.Style({
                                    image: new ol.style.Circle({
                                        radius: 5,
                                        fill: new ol.style.Fill({ color: "#fe9e16" })
                                    })
                                })
                            }
                            if(me.er_p[i].type=='repeat'){
                                 style=new ol.style.Style({
                                    image: new ol.style.Circle({
                                        radius: 5,
                                        fill: new ol.style.Fill({ color: "#f6d817" })
                                    })
                                })
                            }
                            if(me.er_p[i].type=='selfIntersectionPoints'){
                                 style=new ol.style.Style({
                                    image: new ol.style.Circle({
                                        radius: 5,
                                        fill: new ol.style.Fill({ color: "#e5231b" })
                                    })
                                })
                            }
                            var p=me.er_p[i];
                          
                            var ft = new ol.Feature({ geometry: new ol.geom.Point(p.point) });
                            ft.setProperties({ type: p.type });
                            ft.setStyle(style);
                            me._errorLayer.getSource().addFeature(ft);
                        }
                    }
                }
                else {
                    alert(out2.msg);
                }
                domStyle.set(me.loading,"display","none");
            });
        },
        // er_p err_arr type
        get_error_type: function (data) {
            var me = this;
            var type;
            me.er_p = [];
            me.err_arr = [];
            
            for (key in data) {
                if (data[key].length > 0) {
                    for (var i = 0; i < data[key].length; i++) {
                        var p= data[key][i];
                        me.er_p.push({type:key,point: [p.x, p.y] });
                    }
                }
            }

            var t = 0;
            if (data.angle.length > 0) {
                type = "角度";
                me.err_arr.push(type);
                t = 1;
            }
            if (data.repeat.length > 0) {
                type = "点重复";
                me.err_arr.push(type);
                t = 1;
            }
            if (data.selfIntersectionPoints.length > 0) {
                type = "自相交";
                me.err_arr.push(type);
                t = 1;
            }
            if (t == 0) {
                type = "正常";
                me.err_arr.push(type);
            }
            me.showErr_result.innerHTML='检查结果：';
            for(var i=0;i<me.err_arr.length;i++){
                me.showErr_result.innerHTML+=me.err_arr[i]+';';
            }
            return type;
        },
        getWKT:function(data){
            var geom = new ol.geom.Polygon(data);
            var polygonWKT = new ol.format.WKT().writeGeometry(geom, {
                dataProjection: "EPSG:4549",
                featureProjection: "EPSG:4549",
            });
            return polygonWKT;
        },
        dataBaseSelected:function(){
            var me=this;
            for (var i = 0; i < this._contentList.length; i++) {
                this._contentList[i].destroy();
            }
            this._contentList = [];
            if (this._id != -1) {
                domStyle.set(me.loading,"display","block");
                databaseService.getTableInformationByTableName(this._id).then(function (result) {
                    if (result.code == "200") {
                        for (var i = 0; i < result.data.length; i++) {
                            if (result.data[i].type != "serial" && result.data[i].name.toLowerCase().indexOf("shape") < 0) {
                                var _dom;
                                if (result.data[i].type == "float8" || result.data[i].type == "int4") {
                                    _dom = new numberDom({ data: result.data[i] }).placeAt(this.domList);
                                    _dom.startup();
                                } else if (result.data[i].type == "varchar") {
                                    _dom = new textDom({ data: result.data[i] }).placeAt(this.domList);
                                    _dom.startup();
                                } else if (result.data[i].type == "timestamp") {
                                    _dom = new dateDom({ data: result.data[i] }).placeAt(this.domList);
                                    _dom.startup();
                                }
                                this._contentList.push(_dom);
                            }
                        }
                        
                        if (me._contentList.length > 0 && me._uploadData!=null) {
                            for (var i = 0; i < me._contentList.length; i++) {
                                for (var j = 0; j < me._uploadData.length; j++) {
                                    if (me._uploadData[j].propertyName == me._contentList[i].data.name) {
                                        me._contentList[i].fieldValue.value = me._uploadData[j].value;
                                        break;
                                    }
                                }
                            }
                        }
                    } else {
                        alert(result.msg);
                    }
                domStyle.set(me.loading,"display","none");
                }.bind(this));
            }
        }
    });
});

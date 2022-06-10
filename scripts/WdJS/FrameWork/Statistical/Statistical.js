define([
    "dojo/_base/declare",
    "dojo/parser",
    "dojo/DeferredList",
    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin",
    "dojo/text!./templates/Statistical.txt",
    "dojo/on",
    "dojo/dom-style",
    "dojo/dom-class",
    "dojo/dom-attr",
    "dojo/dom-construct",
    "./StatisticalLayerConfig",
    "FrameWork/serviceUtil/workMapService",
    "FrameWork/MapUtil/MapToolDraw",
    "./ThematicMap", 'FrameWork/Loading/Loading',
    "FrameWork/serviceUtil/ConfigurationService","./Statistical_create","FrameWork/Setalert/Setalert"
], function (
    declare,
    parser,
    DeferredList,
    _WidgetBase,
    _TemplatedMixin,
    template,
    on,
    domStyle,
    domClass,
    domAttr,
    domConstruct,
    StatisticalLayerConfig,
    workMapService,
    MapToolDraw,
    ThematicMap, Loading,ConfigurationService,Statistical_create,Setalert
) {
    return declare([_WidgetBase, _TemplatedMixin], {
        templateString: template,
        _map: null,
        _highlightedLayer: null,
        _mapTool: null,
        _geom: null,
        _layer_now: null,
        _field_now: null,
        _regionList: [],
        _streetList: [],
        _villageList: [],
        _data: [],
        _count: 0,
        _selectFilter: [],
        _uploadShpRe: null,
        _thematicMap: null,
        _str: null,
        _opetype: null,
        _clips: false,
        _list: null,
        _zipcoorType: null,
        _wktList: null,
        _staticalLaterConfig:null,
        _moredk: [],
        _allData: null,

        _L0: 120.000000000,
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
        _polygonStyle2: new ol.style.Style({
            fill: new ol.style.Fill({
                color: 'rgba(0,0,0,0.5)'
            }),
            stroke: new ol.style.Stroke({
                color: "RED",
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
            if (me._started) {
                return;
            }
            parser.parse(me.domNode).then(function () {
                var max = document.body.clientHeight - 220;
                domStyle.set(me.over, 'max-height', max + 'px');

                var ishas = false;
                me._map = appConfig.map;
                for (var i = 0; i < me._map.getLayers().array_.length; i++) {
                    var layer = me._map.getLayers().array_[i];
                    var layer_id = layer.get("id");
                    if (layer_id == "highlighted") {
                        me._highlightedLayer = layer;
                        ishas = true;
                    }
                }
                if (!ishas) {
                    me._highlightedLayer = new ol.layer.Vector({
                        id: "highlighted",
                        layerTitle: "属性查询",
                        graphicMap: true,
                        source: new ol.source.Vector({
                            features: [],
                        }),
                        zIndex: me._map.getLayers().getLength() + 1,
                    });
                    me._map.addLayer(me._highlightedLayer);
                }
                me._highlightedLayer.getSource().clear();
                me._mapTool = new MapToolDraw(me._map, me._addFeature.bind(me));
                me._geom = null;
                // me._setLayersNameSelect();
                var regiponcode=user.depts[0].regionCode;
                if(regiponcode == "330300" || regiponcode == "330303"  || regiponcode == "330302" || regiponcode == "330304" || regiponcode == "330300000000"){
                    regiponcode="330300";
                }

                me.setLayerConfig(regiponcode);

                me._setRegion();
                me._bindEvents();
            });
        },
       
        setLayerConfig:function(regioncode){
            var me=this;
            ConfigurationService.getStaticalByCode(regioncode).then(function(result){
                if(result.code=='200'){
                    me._staticalLaterConfig=result.data;
                    me._setLayersNameSelect();

                }else{
                    console.log(result.msg);
                }
            })
          },
        _bindEvents: function () {
            var me = this;
            // searchsx
            on(this.searchsx, 'keyup', function (event) {
                var me = this;
                var value = me.searchsx.value;
                var queryArr = [];
                if (value != null) {
                    me._list.forEach((li) => {
                        if (li == null) {
                            li = 'null';
                        } else if (li == undefined) {
                            li = 'undefined';
                        }
                        if (li.indexOf(value) >= 0) {
                            queryArr.push(li);
                        }
                    });
                }
                dojo.query(".filter", me.domNode).forEach((dom) => {
                    domStyle.set(dom, "display", "none");
                    var va = domAttr.get(dom, "title");
                    queryArr.forEach((val) => {
                        if (val == va) {
                            domStyle.set(dom, "display", "block");
                        }
                    });
                });
            }.bind(this));

            on(me.checkFile, "click", function () {
                me.upload.click();
            });

            on(me.upload, "change", function () {
                me._opetype = "sc";
                me.selectType.innerHTML = '(图形上传)';
                var fd = new FormData();
                fd.append("file", me.upload.files[0]);
                var filePath = me.upload.value;
                var fileName = filePath.substring(filePath.lastIndexOf("\\") + 1); //文件名
                var extName = fileName.substring(fileName.lastIndexOf(".") + 1); //后缀名
                if (extName != "zip") {
                    Setalert.rompt("请选择zip文件","alert-warning");
                } else if (extName == "zip") {
                    workMapService.readShpToWkt(fd).then(function (result) {
                        if (result.code == '200') {
                            // 坐标处理
                            me._zipcoorType = null;
                            result.data.forEach((li) => {
                                var feature = new ol.format.WKT().readFeature(li.wkt);
                                var polygonArr = me.spArray(2, feature.getGeometry().flatCoordinates);
                                var pointX = "" + polygonArr[0][0];
                                pointX = pointX.split('.');
                                pointX = pointX[0];
                                if (pointX.length > 6) {
                                    polygonArr.forEach((coor) => {
                                        var temp = coor[0];
                                        coor[0] = coor[1];
                                        coor[1] = temp;
                                    });
                                    var afterWkt = me.PolygonToWKT(polygonArr);
                                    li.wkt = afterWkt;
                                }
                                if (pointX.length == 3 || pointX.length == 2) {
                                    me._zipcoorType = 'BL2XY';
                                }
                                if (me._zipcoorType == 'BL2XY') {
                                    workMapService.BL2XY2(li.wkt, me._L0, 0).then(function (res) {
                                        if (res.code == 200) {
                                            // xy互换
                                            var feature = new ol.format.WKT().readFeature(res.data);
                                            var polygonArr = me.spArray(2, feature.getGeometry().flatCoordinates);
                                            var pointX = "" + polygonArr[0][0];
                                            pointX = pointX.split('.');
                                            pointX = pointX[0];
                                            if (pointX.length > 6) {
                                                polygonArr.forEach((coor) => {
                                                    var temp = coor[0];
                                                    coor[0] = coor[1];
                                                    coor[1] = temp;
                                                });
                                            }
                                            var afterWkt = me.PolygonToWKT(polygonArr);

                                            li.wkt = afterWkt;
                                        } else {
                                            console.log(res.msg);
                                        }
                                    });
                                }
                            })

                            me._uploadShpRe = result.data;
                            me._highlightedLayer.getSource().clear();

                            me.shps.innerHTML = `<div class="dklist"mark='all' style='line-height:25px'>全部</div>`;
                            if (result.data.length != 0) {
                                domStyle.set(me.shps_box, "display", "block");
                                domStyle.set(me.dataBox_table, "width", "320px");

                            } else if (result.data.length == 0 && result.data.length == undefined) {
                                domStyle.set(me.shps_box, "display", "none");
                                domStyle.set(me.dataBox_table, "width", "100%");

                            }

                            //option 
                            me.sxxz.innerHTML = '';
                            var sx = result.data[0].attributes;
                            for (var i = 0; i < sx.length; i++) {
                                me.sxxz.innerHTML += `<option value="${sx[i].propertyName}">${sx[i].propertyName}</option>`;
                            }

                            var sxcon = me.sxxz.options[me.sxxz.selectedIndex].value;
                            for (var i = 0; i < result.data.length; i++) {
                                //  dklist
                                for (var j = 0; j < result.data[i].attributes.length; j++) {
                                    var attr = result.data[i].attributes[j];
                                    if (attr.propertyName == sxcon) {
                                        me.shps.innerHTML += ` <div class="dklist" mark='${i}'  style='line-height:25px'>${attr.value}</div>`;
                                        break;
                                    }
                                }
                            }
                            // 高亮地块
                            for (var i = 0; i < me._uploadShpRe.length; i++) {
                                var wkt = me._uploadShpRe[i].wkt;
                                var feature = new ol.format.WKT().readFeature(wkt);
                                var geom = new ol.Feature({
                                    geometry: feature.getGeometry(),
                                    type: "polygon"
                                });
                                geom.setStyle(me._polygonStyle2);
                                appConfig.map.getView().setCenter(ol.extent.getCenter(geom.getGeometry().getExtent()));
                                me._highlightedLayer.getSource().addFeature(geom);
                            }

                            me._clickShpList();
                            // 显示全部
                            dojo.query(".dklist", me.domNode).forEach((dom) => {
                                var num = domAttr.get(dom, "mark");
                                if (num == 'all') {
                                    domStyle.set(dom, "border", "1px solid #1c74bb");
                                    domStyle.set(dom, "color", "#1c74bb");
                                    var wktList = [];
                                    for (var i = 0; i < me._uploadShpRe.length; i++) {
                                        var wkt = me._uploadShpRe[i].wkt;
                                        wktList.push(wkt);
                                    }
                                    me._staAll(wktList);
                                }
                            })
                        }
                    })
                }

            });
            // 属性选择
            on(me.sxxz, "change", function () {
                me.shps.innerHTML = '';
                var sxcon = me.sxxz.options[me.sxxz.selectedIndex].value;
                for (var i = 0; i < me._uploadShpRe.length; i++) {
                    for (var j = 0; j < me._uploadShpRe[i].attributes.length; j++) {
                        var attr = me._uploadShpRe[i].attributes[j];
                        if (attr.propertyName == sxcon) {
                            me.shps.innerHTML += ` <div class="dklist" mark='${i}'>${attr.value}</div>`;
                            break;
                        }
                    }
                }
                me._clickShpList();
            });

            on(me.next, "click", function () {
                domStyle.set(me.pre, "display", "block");
                domStyle.set(me.next, "display", "none");
                domStyle.set(me.statisticalBtn, "display", "block");

                domStyle.set(me.page2, "display", "block");
                domStyle.set(me.page1, "display", "none");
                me._selectFilter = [];
                dojo.query(".filter", me.domNode).forEach((dom) => {
                    var isSelect = domAttr.get(dom, 'isCli');
                    if (isSelect == '1') {
                        me._selectFilter.push(domAttr.get(dom, 'title'));
                    }
                });
            });

            on(me.pre, "click", function () {
                domStyle.set(me.pre, "display", "none");
                domStyle.set(me.next, "display", "block");
                domStyle.set(me.statisticalBtn, "display", "none");
                domStyle.set(me.outputBtn, "display", "none");


                domStyle.set(me.page2, "display", "none");
                domStyle.set(me.page1, "display", "block");
            });

            on(dojo.query(".checks", me.domNode), "click", function () {
                var sl = domAttr.get(this, "select");
                if (sl == "0") {
                    domAttr.set(this, "select", "1");
                    domAttr.set(this, "class", "checks_s");
                }
                else {
                    domAttr.set(this, "select", "0");
                    domAttr.set(this, "class", "checks");
                }
            });

            on(me.close, "click", function () {
                me._destroy();
                _checkQuery = true;
                _attrQueryTool.activate("point");
            });

            on(me.layersNameSelect, "change", function () {
                var obj = me._staticalLaterConfig.find(function (obj) {
                    return obj.layerid == me.layersNameSelect.options[me.layersNameSelect.selectedIndex].value;
                });
                me._layer_now = obj;
                me._setFieldNameSelect();
            });

            on(me.fieldNameSelect, "change", function () {
                var obj = me._layer_now.PropertyShowLayerField.find(function (obj) {
                    return obj.field == me.fieldNameSelect.options[me.fieldNameSelect.selectedIndex].value;
                });
                me._field_now = obj;
                me._setFilterSelect();
            });

            on(me.regionSelect, "change", function () {
                me._opetype = "xzq";
                me.selectType.innerHTML = '(选择行政区)';
                me._highlightedLayer.getSource().clear();
                domStyle.set(me.shps_box, "display", "none");
                domStyle.set(me.dataBox_table, "width", "100%");
                me._setStreet(me.regionSelect.options[me.regionSelect.selectedIndex].value);
            });

            on(me.streetSelect, "change", function () {
                me._opetype = "xzq";
                me.selectType.innerHTML = '(选择行政区)';
                me._highlightedLayer.getSource().clear();
                domStyle.set(me.shps_box, "display", "none");
                domStyle.set(me.dataBox_table, "width", "100%");
                me._setvillage(me.streetSelect.options[me.streetSelect.selectedIndex].value);
            });

            on(me.villageSelect, "change", function () {
                me._opetype = "xzq";
                me.selectType.innerHTML = '(选择行政区)';
                me._highlightedLayer.getSource().clear();
                domStyle.set(me.shps_box, "display", "none");
                domStyle.set(me.dataBox_table, "width", "100%");

            });

            dojo.query(".opeBtn[draw-type]", me.domNode).forEach((dom) => {
                on(dom, "click", function () {
                    me._mapTool.deactivate();
                    me._geom = null;
                    me._highlightedLayer.getSource().clear();
                    var drawType = domAttr.get(dom, "draw-type");
                    me._mapTool.activate(drawType);
                    me._opetype = "draw";
                    me.selectType.innerHTML = '(绘图工具)';
                    domStyle.set(me.shps_box, "display", "none");
                    domStyle.set(me.dataBox_table, "width", "100%");
                    domStyle.set(me.dataBox_table, "width", "100%");
                });
            });

            dojo.query(".showType[show-type]", me.domNode).forEach((dom) => {
                on(dom, "click", function () {
                    if (me._thematicMap != null) {
                        me._thematicMap.destroy();
                    }
                    var type = domAttr.get(dom, "show-type");
                    var fieldName = me.fieldNameSelect.options[me.fieldNameSelect.selectedIndex].value;
                    var tableName = me.layersNameSelect.options[me.layersNameSelect.selectedIndex].value;
                    var obj = me._staticalLaterConfig.find(function (obj) {
                        return obj.layerid == tableName;
                    });
                    var type2 = obj.layer_type;

                    me._thematicMap = new ThematicMap({ _data: me._data, _fieldName: fieldName, _type: type, _type2: type2 }).placeAt(dojo.body());
                    me._thematicMap.startup();
                });
            });

            on(me.statisticalBtn, "click", function () {
                var ope = "";
                dojo.query(".opeTitle.select", me.domNode).forEach((dom) => {
                    ope = domAttr.get(dom, "ope");
                });
                ope = me._opetype;
                if (ope == "draw") {
                    var wkt = "";
                    if (me._geom != null) {
                        var polygonArr = me.spArray(2, me._geom.getGeometry().flatCoordinates);
                        if (polygonArr[0][0] != polygonArr[polygonArr.length - 1][0] || polygonArr[0][1] != polygonArr[polygonArr.length - 1][1]) {
                            polygonArr.push(polygonArr[0]);
                        }
                        wkt = "MULTIPOLYGON(((";
                        polygonArr.forEach((p) => {
                            wkt += p[0] + " " + p[1] + ",";
                        });
                        wkt = wkt.substring(0, wkt.length - 1);
                        wkt += ")))";
                    }
                    me._statistical(wkt);
                } else if (ope == 'sc') {

                    dojo.query(".dklist", me.domNode).forEach((dom) => {
                        domStyle.set(dom, "border", "1px solid #dee2eb");
                        domStyle.set(dom, "color", "black");
                    })
                    dojo.query(".dklist", me.domNode).forEach((dom) => {
                        var num = domAttr.get(dom, "mark");
                        if (num == 'all') {
                            domStyle.set(dom, "border", "1px solid #1c74bb");
                            domStyle.set(dom, "color", "#1c74bb");

                            me._showAllList(me._moredk, true);

                            me._highlightedLayer.getSource().clear();
                            for (var i = 0; i < me._uploadShpRe.length; i++) {
                                var wkt = me._uploadShpRe[i].wkt;
                                var feature = new ol.format.WKT().readFeature(wkt);
                                var geom = new ol.Feature({
                                    geometry: feature.getGeometry(),
                                    type: "polygon"
                                });
                                geom.setStyle(me._polygonStyle2);
                                me._highlightedLayer.getSource().addFeature(geom);
                                appConfig.map.getView().setCenter(ol.extent.getCenter(geom.getGeometry().getExtent()));
                            }
                        }
                    })

                } else if (ope == 'xzq') {
                    var wkt = "";
                    if (me.villageSelect.options[me.villageSelect.selectedIndex].value != "请选择社区") {
                        var obj = me._villageList.find(function (obj) {
                            return obj.code == me.villageSelect.options[me.villageSelect.selectedIndex].value;
                        });
                        wkt = obj.shape;
                        me._statistical(wkt);
                    } else if (me.streetSelect.options[me.streetSelect.selectedIndex].value != "请选择街道") {
                        var obj = me._streetList.find(function (obj) {
                            return obj.code == me.streetSelect.options[me.streetSelect.selectedIndex].value;
                        });
                        wkt = obj.shape;
                        me._statistical(wkt);
                    } else if (me.regionSelect.options[me.regionSelect.selectedIndex].value != "请选择行政区") {
                        var obj = me._regionList.find(function (obj) {
                            return obj.code == me.regionSelect.options[me.regionSelect.selectedIndex].value;
                        });
                        workMapService.selectAdministrativeRegionByCode(obj.code, true).then(function (out) {
                            if (out.code == 200) {
                                var wkt = out.data.shape;
                                me._statistical(wkt);
                            }
                        });
                    } else {
                        me._statistical("");
                    }
                } else {
                    me._statistical("");
                }
            });

            on(me.outputBtn, 'click', function () {
                var excelFile = "<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:x='urn:schemas-microsoft-com:office:excel' xmlns='http://www.w3.org/TR/REC-html40'>";
                excelFile += "<head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>导出结果</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--></head>";
                excelFile += "<body>";
                excelFile += me.dataBox_table.innerHTML;
                excelFile += "</body>";
                excelFile += "</html>";
                var link = "data:application/vnd.ms-excel;base64," + window.btoa(unescape(encodeURIComponent(excelFile)));
                var a = document.createElement("a");
                a.download = "统计结果";
                a.href = link;
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
            });

            on(me.clips, 'click', function () {
                if (me._clips == true) {
                    domStyle.set(me.clips, "background-color", "#ccc");
                    me._clips = false;
                } else if (me._clips == false) {
                    domStyle.set(me.clips, "background-color", "white");
                    me._clips = true;
                }
            });

            // create
            on(me.create, "click", function () {
                var newpanel=new Statistical_create().placeAt(dojo.body());
                newpanel.startup();
            });


        },

        _statistical: function (wkt) {
            debugger
            var me = this;
            var where = "";
            if (!wkt.match(/^[ ]*$/)) {
                where += "ST_Contains('" + wkt + "',st_astext(shape))";
            }
            var fieldName = me.fieldNameSelect.options[me.fieldNameSelect.selectedIndex].value;

            // var filter = me.filterSelect.options[me.filterSelect.selectedIndex].value;
            // if (filter != "*") {
            //   if (where != "") {
            //       where += ' and "' + fieldName + '"= \'' + filter + '\'';
            //   } else {
            //       where += '"' + fieldName + '"= \'' + filter + '\'';
            //   }
            // }

            var tableName = me.layersNameSelect.options[me.layersNameSelect.selectedIndex].value;
            var obj = me._staticalLaterConfig.find(function (obj) {
                return obj.layerid == tableName;
            });
            var type = obj.layer_type;
            // if (where == "") {
            //   where = "1=1";
            //   }
            Loading.show(this.domNode);
            var _filedWhere = "";
            if (me._selectFilter.length > 0) {
                var _filedWhere = "";
                for (var i = 0; i < me._selectFilter.length; i++) {
                    if (_filedWhere != '') {
                        _filedWhere += ' or "' + fieldName + '"= \'' + me._selectFilter[i] + '\'';
                    } else {
                        _filedWhere += '"' + fieldName + '"= \'' + me._selectFilter[i] + '\'';
                    }
                }
            }
            // _filedWhere=" ydxz = '三类工业用地' or ydxz = '二类工业用地' or ydxz = '工业用地' or ydxz = '新型工业用地' or ydxz = '一类工业用地'"
            if (where != "" && _filedWhere != "") {
                where += "and (" + _filedWhere + ")";
            } else if (where == "" && _filedWhere != "") {
                where = _filedWhere;
            }
            // me._clips=true;

            var isClipe = me._clips;
            var querydata = {
                "fieldName": fieldName,
                "isClipe": isClipe,
                "tableName": tableName,
                "type": type,
                "where": where,
                "wkt": wkt,
                "schemaName":"public"
            }
            debugger
            // code

            workMapService.statisticalByTableNameAndWhere(dojo.toJson(querydata),tableName).then(function (out) {
                if (out.code == 200) {
                    domStyle.set(me.result, "display", "block");
                    me._data = out.data;
                    me._setRestlt(me._data, type);
                    if(out.data.length>0){
                        domStyle.set(me.outputBtn,"display","block");
                    }
                }else{
                    console.log(out.msg);
                }
               
                Loading.hide();
            },function(err){ 
                Loading.hide();
                console.log(out.msg);
            });
        },
        // 上传分析
        _staAll1: function (wktList, count) {
            var me = this;
            var fieldName = me.fieldNameSelect.options[me.fieldNameSelect.selectedIndex].value;
            var tableName = me.layersNameSelect.options[me.layersNameSelect.selectedIndex].value;
            var obj = me._staticalLaterConfig.find(function (obj) { return obj.layerid == tableName; });
            var type = obj.layer_type;
            var _filedWhere = "";
            if (me._selectFilter.length > 0) {
                var _filedWhere = "";
                for (var i = 0; i < me._selectFilter.length; i++) {
                    if (_filedWhere != '') {
                        _filedWhere += ' or "' + fieldName + '"= \'' + me._selectFilter[i] + '\'';
                    } else {
                        _filedWhere += '"' + fieldName + '"= \'' + me._selectFilter[i] + '\'';
                    }
                }
            }
            if (where != "" && _filedWhere != "") {
                where += "and (" + _filedWhere + ")";
            } else if (where == "" && _filedWhere != "") {
                where = _filedWhere;
            }
            var isClipe = me._clips;
            var wkt = wktList[count];
            var where = "";
            if (!wkt.match(/^[ ]*$/)) {
                where += "ST_Contains('" + wkt + "',st_astext(shape))";
            }
            var querydata = {
                "fieldName": fieldName,
                "isClipe": isClipe,
                "tableName": tableName,
                "type": type,
                "where": where,
                "wkt": wkt,
                "schemaName":"public"
            }
            debugger
            workMapService.statisticalByTableNameAndWhere(dojo.toJson(querydata),tableName).then(function (out) {
                if (out.code == 200) {
                    me._data = out.data;
                    me._moredk.push(out.data);
                    if(out.data.length>0){
                        domStyle.set(me.outputBtn,"display","block");
                    }
                }
                if (count + 1 >= wktList.length) {
                    me._wktList = wktList;
                    me._showAllList(me._moredk, true);
                    Loading.hide();
                } else {
                    me._staAll1(wktList, count + 1);
                }
            },function(err){ 
                Loading.hide();
                console.log(out.msg);
            });
        },
        _staAll: function (wktList) {
            var me = this;
            Loading.show(this.domNode);
            this._staAll1(wktList, 0);
        },
        _showAllList: function (data, isAll) {
            var me = this;
            var tableName = me.layersNameSelect.options[me.layersNameSelect.selectedIndex].value;
            var obj = me._staticalLaterConfig.find(function (obj) { return obj.layerid == tableName; });
            var type = obj.layer_type;

            domStyle.set(me.result, "display", "block");
            var all = [];
            data.forEach((li2) => {
                if (isAll) {
                    li2.forEach((li) => {
                        for (var i = 0; i < all.length; i++) {
                            if (all[i].ydxz == li.ydxz) {
                                all[i].count += li.count;
                                all[i].area += li.area;
                                return;
                            }
                        }
                        var newSort = {
                            area: li.area,
                            count: li.count,
                            ydxz: li.ydxz
                        }
                        all.push(newSort)
                    });
                } else {
                    all.push(li2);
                }
            });
            me._data = all;
            me._setRestlt(all, type);
        },

        _setRestlt: function (data, type) {
            var me = this;
            me.dataBox_table.innerHTML = "";
            var fieldName = me.fieldNameSelect.options[me.fieldNameSelect.selectedIndex].value;
            var table = '<table class="table" border="1" width="100%">';
            table += '<thead class="thead">';
            table += '<tr class="tr">';
            table += '<th class="th">' + me.fieldNameSelect.options[me.fieldNameSelect.selectedIndex].text + "</th>";
            if (type == 1) {
                table += '<th class="th">长度(m)</th>';
            }
            if (type == 2) {
                table += '<th class="th">面积(㎡)</th>';
            }
            table += '<th class="th">数量</th>';
            table += "</tr>";
            table += "</thead>";
            if (data.length > 6) {
                table += '<tbody class="tbody" style="width: calc(100% + 8px);">';
            }

            data.forEach((d) => {
                table += '<tr class="tr">';
                table += '<td class="td">' + d[fieldName] + "</td>";
                if (type == 1) {
                    table += '<td class="td">' + d.length.toFixed(2) + "</td>";
                }
                if (type == 2) {
                    table += '<td class="td">' + d.area.toFixed(2) + "</td>";
                }
                table += '<td class="td">' + d.count + "</td>";
                table += "</tr>";
            });
            table += "</tbody>";
            table += "</table>";
            me.dataBox_table.innerHTML = table;


        },
        // 显示
        _setLayersNameSelect: function () {
            var me = this;
            me.layersNameSelect.innerHTML = "";
            var _index = 0;
            me._staticalLaterConfig.forEach(layer=>{
                if (_index == 0) {
                    me._layer_now = layer;
                }
                me.layersNameSelect.innerHTML += '<option value="' + layer.layerid + '">' + layer.layer_name + "</option>";
                _index = _index + 1;
            })
            // StatisticalLayerConfig.layers.forEach((layer, index) => {
            //     for (var i = 0; i < layer.regionCode.length; i++) {
            //         if (layer.regionCode[i] == regionCode) {
            //             if (_index == 0) {
            //                 me._layer_now = layer;
            //             }
            //             me.layersNameSelect.innerHTML += '<option value="' + layer.id + '">' + layer.name + "</option>";
            //             _index = _index + 1;
            //             continue;
            //         }
            //     }

            // });
            me._setFieldNameSelect();
        },
        _setFieldNameSelect: function () {
            var me = this;
            me.fieldNameSelect.innerHTML = "";
            me._layer_now.PropertyShowLayerField.forEach((f, index) => {
                if (index == 0) {
                    me._field_now = f;
                }
                me.fieldNameSelect.innerHTML += '<option value="' + f.field + '">' + f.alias + "</option>";
            });
            // me.fieldNameSelect.selectedIndex=1;
            me._setFilterSelect();
        },
        _setFilterSelect: function () {
            var me = this;
            me.filterSelect.innerHTML = '<option value="*">所有</option>';
            me.filterSelect2.innerHTML = ``;
            debugger
            Loading.show(this.domNode);
            workMapService.getProByTableNameAndFieldName(me._layer_now.layerid, me._field_now.field).then(function (out) {
                if (out.code == 200) {
                    Loading.hide();
                    if(out.data.length > 300){
                        Setalert.rompt("该字段数据量太大，请重新选择统计字段","alert-warning",2000)
                        return ;
                    }
                    var list= out.data;
                    me._list = list;
                    list = list.sort(function (a, b) {
                        if (a == null) {
                            a = "";
                        }
                        if (b == null) {
                            b = "";
                        }
                        return a.localeCompare(b);
                    });

                    if (list.length > 0) {

                        for (var i = 0; i < list.length; i++) {
                            // 过滤信息
                            me.filterSelect2.innerHTML += `<div class="filter" isCli=1 style="color: rgb(28, 116, 187); border-color: rgb(28, 116, 187); count=${i}"   title="${list[i]}">${list[i]}</div>`;
                            me.filterSelect.innerHTML += '<option value="' + list[i] + '">' + list[i] + "</option>";

                        }
                        // 选中
                        dojo.query(".filter", me.domNode).forEach((dom) => {
                            on(dom, "click", function () {

                                var isCli = domAttr.get(dom, 'isCli');
                                if (isCli == 0) {

                                    domStyle.set(dom, "color", "#1c74bb");
                                    domStyle.set(dom, "border-color", "#1c74bb");
                                    domAttr.set(dom, 'isCli', '1');
                                } else if (isCli == 1) {

                                    domStyle.set(dom, "color", "black");
                                    domStyle.set(dom, "border-color", "rgb(222, 226, 235)");
                                    domAttr.set(dom, 'isCli', '0');

                                }
                            });
                        });
                        // 全选 反选 取消
                        me.all.checked = true;
                        if (me._count == 0) {
                            on(me.all, "click", function () {
                                me.rever.checked = false;
                                me.cancel.checked = false;
                                if (me.all.checked == true) {
                                    dojo.query(".filter", me.domNode).forEach((dom) => {

                                        domStyle.set(dom, "color", "#1c74bb");
                                        domStyle.set(dom, "border-color", "#1c74bb");
                                        domAttr.set(dom, 'isCli', '1');
                                    });
                                }
                            });

                            on(me.cancel, "click", function () {
                                me.rever.checked = false;
                                me.all.checked = false;
                                if (me.cancel.checked == true) {
                                    dojo.query(".filter", me.domNode).forEach((dom) => {

                                        domStyle.set(dom, "color", "black");
                                        domStyle.set(dom, "border-color", "rgb(222, 226, 235)");
                                        domAttr.set(dom, 'isCli', '0');
                                    });
                                }
                            });

                            on(me.rever, "click", function () {
                                me.cancel.checked = false;
                                me.all.checked = false;
                                if (me.rever.checked == true) {
                                    dojo.query(".filter", me.domNode).forEach((dom) => {
                                        var isCli = domAttr.get(dom, 'isCli');
                                        if (isCli == 0) {

                                            domStyle.set(dom, "color", "#1c74bb");
                                            domStyle.set(dom, "border-color", "#1c74bb");
                                            domAttr.set(dom, 'isCli', '1');
                                        } else if (isCli == 1) {

                                            domStyle.set(dom, "color", "black");
                                            domStyle.set(dom, "border-color", "rgb(222, 226, 235)");
                                            domAttr.set(dom, 'isCli', '0');
                                        }
                                    });
                                }
                            });
                            me._count = -1;
                        }

                    }
                }else{
                    console.log(out.msg);
                    Loading.hide();
                }
            },function(err){
                Loading.hide();

            });
        },

        _setRegion: function () {
            var me = this;
            me.regionSelect.innerHTML = '<option style="display: none" disabled selected>请选择行政区</option>';
            workMapService.selectAdministrativeRegion().then(function (out) {
                if (out.code == 200) {
                    var list = out.data;
                    me._regionList = out.data;
                    if (list.length > 0) {
                        for (var i = 0; i < list.length; i++) {
                            me.regionSelect.innerHTML += '<option value="' + list[i].code + '">' + list[i].name + "</option>";
                        }
                    }
                }
            });
            me.streetSelect.innerHTML = '<option style="display: none" disabled selected>请选择街道</option>';
            me.villageSelect.innerHTML = '<option style="display: none" disabled selected>请选择社区</option>';
        },
        _setStreet: function (belong) {
            var me = this;
            me.streetSelect.innerHTML = '<option style="display: none" disabled selected>请选择街道</option>';
            workMapService.selectAdministrativeRegionTownByBelong(belong, true).then(function (out) {
                if (out.code == 200) {
                    var list = out.data;
                    me._streetList = out.data;
                    if (list.length > 0) {
                        for (var i = 0; i < list.length; i++) {
                            me.streetSelect.innerHTML += '<option value="' + list[i].code + '">' + list[i].name + "</option>";
                        }
                    }
                }
            });
            me.villageSelect.innerHTML = '<option style="display: none" disabled selected>请选择社区</option>';
        },
        _setvillage: function (belong) {
            var me = this;
            me.villageSelect.innerHTML = '<option style="display: none" disabled selected>请选择社区</option>';
            workMapService.selectAdministrativeRegionVillageByBelong(belong, true).then(function (out) {
                if (out.code == 200) {
                    var list = out.data;
                    me._villageList = out.data;
                    if (list.length > 0) {
                        for (var i = 0; i < list.length; i++) {
                            me.villageSelect.innerHTML += '<option value="' + list[i].code + '">' + list[i].name + "</option>";
                        }
                    }
                }
            });
        },
        _clickShpList: function () {
            var me = this;
            // 点击图形
            dojo.query(".dklist", me.domNode).forEach((dom) => {
                on(dom, "click", function (evt) {
                    evt.stopPropagation();
                    dojo.query(".dklist", me.domNode).forEach((dom) => {
                        domStyle.set(dom, "border", "1px solid #dee2eb");
                        domStyle.set(dom, "color", "black");
                    })
                    domStyle.set(dom, "border", "1px solid #1c74bb");
                    domStyle.set(dom, "color", "#1c74bb");

                    var num = domAttr.get(dom, "mark");
                    me._highlightedLayer.getSource().clear();
                    var wktList = [];
                    for (var i = 0; i < me._uploadShpRe.length; i++) {
                        var wkt = me._uploadShpRe[i].wkt;
                        wktList.push(wkt);
                        var feature = new ol.format.WKT().readFeature(wkt);
                        var geom = new ol.Feature({
                            geometry: feature.getGeometry(),
                            type: "polygon"
                        });
                        if (i == num) {
                            me._str = wkt;
                            me._showAllList(me._moredk[i], false);
                            geom.setStyle(me._polygonStyle2);
                            appConfig.map.getView().setCenter(ol.extent.getCenter(geom.getGeometry().getExtent()));
                        } else if (num == 'all') {
                            geom.setStyle(me._polygonStyle2);
                        } else {
                            geom.setStyle(me._polygonStyle);
                        }
                        me._highlightedLayer.getSource().addFeature(geom);
                    }
                    if (num == 'all') {
                        me._showAllList(me._moredk, true);
                    }
                });
            });
        },
        _addFeature: function (_feature) {
            var me = this;
            me._geom = _feature;
            me._highlightedLayer.getSource().clear();
            me._highlightedLayer.getSource().addFeature(_feature);
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
        _destroy: function () {
            var me = this;
            if (me._thematicMap != null) {
                me._thematicMap._destroy();
            }
            me.destroy();
        },
        PolygonToWKT: function (polygonArr) {
            var me = this;
            var wkt = '';
            if (polygonArr[0][0] != polygonArr[polygonArr.length - 1][0] || polygonArr[0][1] != polygonArr[polygonArr.length - 1][1]) {
                polygonArr.push(polygonArr[0]);
            }
            wkt = "MULTIPOLYGON(((";
            polygonArr.forEach((p) => {
                wkt += p[0] + " " + p[1] + ",";
            });
            wkt = wkt.substring(0, wkt.length - 1);
            wkt += ")))";
            return wkt;
        },
    });
});

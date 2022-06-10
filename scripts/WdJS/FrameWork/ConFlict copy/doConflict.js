define([
    "dojo/_base/declare",
    "dojo/parser",
    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin",
    "dojo/text!./templates/doConflictTemplates.txt",
    "dojo/on",
    "dojo/dom-style",
    "dojo/dom-class",
    "dojo/dom-attr",
    "dojo/dom-construct",
    "FrameWork/MapUtil/MapToolDraw", 
    "./analysisGroup", "dojo/DeferredList", 
    "FrameWork/MapUtil/SuperMapWFSQuery",
    "./resultTab", 
    './analysisResult', 
    'FrameWork/MapUtil/Survey',
    './geometryItem', 
    'FrameWork/serviceUtil/uploadService',
    'FrameWork/Loading/Loading',
    "FrameWork/serviceUtil/workMapService",
    "FrameWork/serviceUtil/graphService","FrameWork/serviceUtil/ConfigurationService","FrameWork/SetMapConfig/SetMapConfig"
], function (declare, parser, _WidgetBase, _TemplatedMixin, template, on, domStyle, domClass, domAttr, domConstruct, MapToolDraw, analysisGroup, DeferredList, SuperMapWFSQuery, resultTab, analysisResult, Survey, geometryItem, uploadService, Loading,workMapService,graphService,ConfigurationService,SetMapConfig) {
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
        _analysisResult: null,
        _step: 1,
        _exportData:null,
        _wkt1:null,
        _wkt2:null,
        _timestop:false,
        _AlayerNum:null,
        _highlightedLayer: null,

        _resultLayer: null,
        //高亮图层颜色
        _highlightedStyle: new ol.style.Style({
            // 默认多面形中多边形样式 style_setting为false
            fill: new ol.style.Fill({
                color: "rgba(255,0,0,0.5)"
            }),
            stroke: new ol.style.Stroke({
                color: "BLACK",
                width: 4,
                lineDash: [1, 2, 3, 4, 5, 6]
            })
        }),

        _difference1Style: new ol.style.Style({
            // 默认多面形中多边形样式 style_setting为false
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
            // 默认多面形中多边形样式 style_setting为false
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
            // 默认多面形中多边形样式 style_setting为false
            fill: new ol.style.Fill({
                color: "rgba(0,80,187,1)"
            }),
            stroke: new ol.style.Stroke({
                color: "BLACK",
                width: 4,
                lineDash: [1, 2, 3, 4, 5, 6]
            })
        }),

        _polygonStyle: new ol.style.Style({     // 默认多面形中多边形样式 style_setting为false
            fill: new ol.style.Fill({
                color: 'rgba(0,0,0,0.5)'
            }),
            stroke: new ol.style.Stroke({
                color: "BLACK",
                width: 4,
                lineDash: [1, 2, 3, 4, 5, 6]
            })
        }),

        _differenceType: 1,
        _Survey: null,
        _geometryItemList: null,

        _queryLayer: null,
        _wkt1List:[],
        _getConflictConfig:null,

        _openlayerList:[],

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

                me._geometryItemList = [];
                me._Survey = new Survey();
                me._emptyArr();
                me._attrQueryTool = null;
                me._mapTool = new MapToolDraw(appConfig.map, me.getGeo.bind(me));
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
                
                ConfigurationService.getConflictBycode(regionCode).then(function(re){
                    debugger
                        me.getOpenlayerData();
                        //2-设置me._analysisGroupList
                        var list={
                            code:regionCode,
                            groupname:"自定义",
                            id:null,
                            subGroup:[{
                                configid:null,
                                groupname:"打开图层",
                                id:null,
                                subItem:[{
                                    grouid:null,
                                    groupname:"打开图层",
                                    id:null,
                                    url:me._openlayerList
                                }]
                            }]
                        };
                    if(re.code="200"){
                        me._getConflictConfig=re.data;
                        if(me._getConflictConfig != null ){
                            me._getConflictConfig.push(list);
                        }else{
                            me._getConflictConfig=[];
                            me._getConflictConfig.push(list);
                        }
                        if(me._analysisGroupList.length>0){
                            for(var i=0;i<me._analysisGroupList.length;i++){
                                me._analysisGroupList[i].destroy();
                            }
                            me._analysisGroupList=[];
                        }
                        for(var j=0;j< me._getConflictConfig.length;j++){
                            var _analysisGroup = new analysisGroup({ data:  me._getConflictConfig[j] }).placeAt(me.fxlx);
                            me._analysisGroupList.push(_analysisGroup);
                            _analysisGroup.startup();
						}
                    }else{
                        me._getConflictConfig=[];
                        me._getConflictConfig.push(list);
                        console.log(re.msg);
                    }
                });
            

                // =========================================================

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
        getOpenlayerData:function () {
            // _allLayerZtree
            var me=this;
            var nodes=_allLayerZtree.getNodes();
            me._openlayerList=[];
            if (nodes.length > 0) {
                for (var i = 0; i < nodes.length; i++) {
                    if (nodes[i].children.length > 0) {
                        me.getChildNode(nodes[i]);
                    }
                }
            }
        },
        getChildNode: function (P_node) {
            var me = this;
            var nodes = P_node.children;
            for (var i = 0; i < nodes.length; i++) {
                if (nodes[i].children != null) {
                    me.getChildNode(nodes[i]);
                } else {
                   var pd= me._pdVisble(nodes[i].id)
                    if(pd){
                        var url={
                            caption:nodes[i].caption,
                            field:'xmmc',
                            id:null,
                            itemid:null,
                            layerid:nodes[i].id,
                            queryurl:nodes[i].queryUrl
                        }
                        me._openlayerList.push(url);
                    }

                }
            }
        },
        _pdVisble:function (layerid) {
            for (var i = 0; i < appConfig.map.getLayers().array_.length; i++) {
                var layer = appConfig.map.getLayers().array_[i];
                var layer_id = layer.get("id");
                if (layer_id === layerid) {
                    var vi=layer.getVisible();
                    return vi;
                }
            }  
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
                domStyle.set(me.draw.children[0], 'background-image', 'url(image/doConflict/drawpolygon_select.png)');

                domStyle.set(me.select, 'border', '1px solid #dee2eb');
                domStyle.set(me.select, 'color', '#333');
                domStyle.set(me.select.children[0], 'background-image', 'url(image/doConflict/selectpolygon.png)');

                domStyle.set(me.upload, 'border', '1px solid #dee2eb');
                domStyle.set(me.upload, 'color', '#333');
                domStyle.set(me.upload.children[0], 'background-image', 'url(image/doConflict/uploadpolygon.png)');

                domStyle.set(me.upload_selectDom, 'display', 'none');
            });

            on(me.select, "click", function () {
                me._emptyArr();
                domStyle.set(me.draw, 'border', '1px solid #dee2eb');
                domStyle.set(me.draw, 'color', '#333');
                domStyle.set(me.draw.children[0], 'background-image', 'url(image/doConflict/drawpolygon.png)');

                domStyle.set(me.select, 'border', '1px solid #1c74bb');
                domStyle.set(me.select, 'color', '#1c74bb');
                domStyle.set(me.select.children[0], 'background-image', 'url(image/doConflict/selectpolygon_select.png)');

                domStyle.set(me.upload, 'border', '1px solid #dee2eb');
                domStyle.set(me.upload, 'color', '#333');
                domStyle.set(me.upload.children[0], 'background-image', 'url(image/doConflict/uploadpolygon.png)');

                domStyle.set(me.upload_selectDom, 'display', 'none');

                me._queryLayer = null;
                for (var i = appConfig.map.getLayers().array_.length - 1; i >= 0; i--) {
                    var _layer = appConfig.map.getLayers().array_[i];
                    var _values = _layer.values_;

                    if (_values.thematicMap && _values.visible) {
                        me._queryLayer = _layer;
                        break;
                    }

                }
                if (me._queryLayer == null) {
                    alert("没有可选择的图层！");
                    return;
                } 
                me._mapTool.deactivate();
                me._mapTool.activate("point");
            });

            on(me.upload_txtfile, 'click', function () {
                me.txtfile.click();
            });

            on(me.txtfile, 'change', function () {
                var fdata = new FormData();
                fdata.append("file", this.files[0]);
                uploadService.uploadTxt(fdata).then(function (result) {
                    if (result.code == "200") {
                        txtAndShpRemove40(result.data);
                        me._emptyArr();
                        var area=0;
                        var length=0;
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
                            // 面积
                            area += me._Survey.surveyArea(result.data[i]);
                            length += me._Survey.surveyCircumference(result.data[i]);
                        }
                         var r = appConfig.map.getView().getResolutionForExtent(geom.getGeometry().getExtent(), appConfig.map.getSize());
                        appConfig.map.getView().setResolution(r);
                        appConfig.map.getView().setCenter(ol.extent.getCenter(geom.getGeometry().getExtent()));
                       
                        //  地块基本信息
                        for (var i = 0; i < me._geometryItemList.length; i++) {
                            me._geometryItemList[i].destroy();
                        }
                        me._geometryItemList = [];
                        var data = { index: 1, area: area, length: length };
                        var _geometryItem = new geometryItem({ data: data }).placeAt(me.geometryList);
                        me._geometryItemList.push(_geometryItem);
                        _geometryItem.startup();

                    } else {
                        alert(result.msg);
                    }
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
                        me._emptyArr();
                        var area=0;
                        var length=0;
                        for(var i=0;i<result.data.length;i++){
                            // var 
                            me._wkt1List.push(result.data[i].wkt);
                            var feature = new ol.format.WKT().readFeature(result.data[i].wkt);

                            debugger
                            var polygonArr = me.spArray(2, feature.getGeometry().getFlatCoordinates());
                            var geojson = turf.polygon([polygonArr]);
                            var options = {tolerance: 50, highQuality: false};
                            var simplified = turf.simplify(geojson, options);
                            var format = new ol.format.GeoJSON();
                            feature = format.readFeature(simplified);

                            var geom = new ol.Feature({
                                geometry: feature.getGeometry(),
                                type: "polygon"
                            });
                            geom.setStyle(me._polygonStyle);
                            me._drawLayer.getSource().addFeature(geom);

                            me._geom.push(geom);
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

                        // 地块基本信息
                        for (var i = 0; i < me._geometryItemList.length; i++) {
                            me._geometryItemList[i].destroy();
                        }
                        me._geometryItemList = [];
                        var data = { index: 1, area: area, length: length };
                        var _geometryItem = new geometryItem({ data: data }).placeAt(me.geometryList);
                        me._geometryItemList.push(_geometryItem);
                        _geometryItem.startup();

                        me.shpfile.value="";


                    } else {
                        alert(result.msg);
                    }
                });
            });

            on(me.upload, 'click', function () {
                me._emptyArr();
                me._queryLayer = null;

                domStyle.set(me.draw, 'border', '1px solid #dee2eb');
                domStyle.set(me.draw, 'color', '#333');
                domStyle.set(me.draw.children[0], 'background-image', 'url(image/doConflict/drawpolygon.png)');

                domStyle.set(me.select, 'border', '1px solid #dee2eb');
                domStyle.set(me.select, 'color', '#333');
                domStyle.set(me.select.children[0], 'background-image', 'url(image/doConflict/selectpolygon.png)');

                domStyle.set(me.upload, 'border', '1px solid #1c74bb');
                domStyle.set(me.upload, 'color', '#1c74bb');
                domStyle.set(me.upload.children[0], 'background-image', 'url(image/doConflict/uploadpolygon_select.png)');

                domStyle.set(me.upload_selectDom, 'display', 'block');

            });

            on(me.next, 'click', function () {
                if (me._geom.length==0) {
                    alert("请设置源图形！");
                    return;
                } else if (me._step == 2) {
                    var hasUrl = false;
                    for (var i = 0; i < me._analysisGroupList.length; i++) {

                        var queryData = me._analysisGroupList[i].getSelectData();
                        if (queryData.length > 0) {
                            hasUrl = true;
                            break;
                        }
                    }
                    if (!hasUrl) {
                        alert("请选择业务类型！");
                        return;
                    }
                }
                me._step++;
                me._setProgress();
            });

            on(me.pre, 'click', function () {
                me._step--;
                me._setProgress();
            });

            on(me.clear, 'click', function () {
                me._drawLayer.getSource().clear();
                me._emptyArr();
            });

            on(me.difference1, 'click', function () {
                for (var i = 0; i < me._resultTabList.length; i++) {
                    me._resultTabList[i].destroy();
                }
                if (me._analysisResult != null) {
                    me._analysisResult.destroy();
                    me._analysisResult = null;
                }
                domStyle.set(me.downLoad,"display","none");
                me._resultLayer.getSource().clear();
                me._highlightedLayer.getSource().clear();

                me._differenceType = 1;
                domStyle.set(me.difference1, 'border', '1px solid #1c74bb');
                domStyle.set(me.difference2, 'border', '1px solid #dee2eb');
                domStyle.set(me.difference3, 'border', '1px solid #dee2eb');
                domStyle.set(me.difference1, 'background-image', 'url(image/doConflict/typeselected.png)');
                domStyle.set(me.difference2, 'background-image', 'none');
                domStyle.set(me.difference3, 'background-image', 'none');
            });

            on(me.difference2, 'click', function () {
                for (var i = 0; i < me._resultTabList.length; i++) {
                    me._resultTabList[i].destroy();
                }
                if (me._analysisResult != null) {
                    me._analysisResult.destroy();
                    me._analysisResult = null;
                }
                domStyle.set(me.downLoad,"display","none");
                me._resultLayer.getSource().clear();
                me._highlightedLayer.getSource().clear();

                me._differenceType = 2;
                domStyle.set(me.difference2, 'border', '1px solid #1c74bb');
                domStyle.set(me.difference1, 'border', '1px solid #dee2eb');
                domStyle.set(me.difference3, 'border', '1px solid #dee2eb');

                domStyle.set(me.difference2, 'background-image', 'url(image/doConflict/typeselected.png)');
                domStyle.set(me.difference1, 'background-image', 'none');
                domStyle.set(me.difference3, 'background-image', 'none');
            });

            on(me.difference3, 'click', function () {
                for (var i = 0; i < me._resultTabList.length; i++) {
                    me._resultTabList[i].destroy();
                }
                if (me._analysisResult != null) {
                    me._analysisResult.destroy();
                    me._analysisResult = null;
                }
                domStyle.set(me.downLoad,"display","none");
                me._resultLayer.getSource().clear();
                me._highlightedLayer.getSource().clear();

                me._differenceType = 3;
                domStyle.set(me.difference3, 'border', '1px solid #1c74bb');
                domStyle.set(me.difference2, 'border', '1px solid #dee2eb');
                domStyle.set(me.difference1, 'border', '1px solid #dee2eb');

                domStyle.set(me.difference3, 'background-image', 'url(image/doConflict/typeselected.png)');
                domStyle.set(me.difference2, 'background-image', 'none');
                domStyle.set(me.difference1, 'background-image', 'none');
            });

            on(me.queryBtn, "click", function () {
                me._highlightedLayer.getSource().clear();
                var _deferredArray = new Array();
                debugger
                // 1-选择了的业务类型的url _deferredArray-》dataList
                me._AlayerNum=0;
                for (var i = 0; i < me._analysisGroupList.length; i++) {
                    var queryData = me._analysisGroupList[i].getSelectData();
                    for (var n = 0; n < queryData.length; n++) {
                        for (var j = 0; j < queryData[n].url.length; j++) {
                            me._AlayerNum+=1;
                            for (var k = 0; k < me._geom.length; k++) {
                                // 
                                var queryurl = SetMapConfig.setOneQueryurl(queryData[n].url[j].queryurl);
                                var _d = SuperMapWFSQuery.SpatialQuery(queryurl, me._geom[k]);
                                _deferredArray.push(_d);
                            }
                        }
                    }
                }
                var _deferredList = new DeferredList(_deferredArray);
                var dataList = [];
                Loading.show(me.domNode);
                _deferredList.then(function (result) {
                    debugger
                    result.forEach((li) => {
                        if (li[0]) {
                            var data = [];
                            li[1].features.forEach((feature) => {
                                data.push(feature);
                            });
                            dataList.push(data);
                        }
                    });
                    if (dataList.length > 0) {
                        // 2-画的面，需要分析地块 orgin_geom-》wkt1
                        var conflictList = [];
                        me._resultLayer.getSource().clear();
                        for (var i = 0; i < dataList.length; i++) {
                            var data = { id: "", data: [] };
                            var field = "";
                            
                            for (var j = 0; j < dataList[i].length; j++) {
                                 // 2-dataList和配置的appconfig-》获取用途分类名称field
                                if (j === 0) {
                                    data.id = dataList[i][j].id.split('.')[1];
                                    // ------------------------------------
                                    debugger
                                    for(var n=0;n<me._getConflictConfig.length;n++){
                                        var group = me._getConflictConfig[n];
                                        for (var m = 0; m < group.subGroup.length; m++) {
                                            var subgroup = group.subGroup[m];
                                            for (var l = 0; l < subgroup.subItem.length; l++) {
                                                var item = subgroup.subItem[l];
                                                for (var g = 0; g < item.url.length; g++) {
                                                    if (data.id === item.url[g].layerid) {
                                                        field = item.url[g].field;
                                                        break;
                                                    }
                                                }
                                            }
                                        }
                                    }
                                    // --------------------end
                                }
                                //3- 构建_data的type
                                var _data;
                                if (field !== "") {
                                    _data = { type: dataList[i][j].properties.data[field], area: 0,geometry:null };
                                } else {
                                    _data = { type: "", area: 0, geometry: null };
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
                                   debugger
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
                                        "wkt2": [me._wkt2]
                                    }
                                    graphService.graphAnalysis(dojo.toJson(AnalysisData)).then(function (result){
                                        if(result.code=="200"){
                                            var wkt=result.data[0];
                                            if(wkt != 'GEOMETRYCOLLECTION EMPTY'){
                                                try{
                                                    var feature = new ol.format.WKT().readFeature(wkt);
                                                    
                                                    //7 获取area 或者累加 ，面积
                                                    var arr = me.spArray(2, feature.getGeometry().flatCoordinates);
                                                    var area = me._Survey.surveyArea([arr]);
                                                    _data.area = area;

                                                    //  8-结果显示地图
                                                    _data.geometry = new ol.Feature({
                                                        geometry: feature.getGeometry(),
                                                        type: "polygon"
                                                    });
                                                    var _resultFeature = _data.geometry.clone();
                                                    if(me._differenceType==3){
                                                        _resultFeature.setStyle(me._difference3Style);
                                                    }else if(me._differenceType==2){
                                                        _resultFeature.setStyle(me._difference2Style);
                                                    }else if(me._differenceType==1){
                                                        _resultFeature.setStyle(me._difference1Style);
                                                    }
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
                                } catch (ex) {
                                    console.log(ex);
                                }
                            }
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
                        
                        domStyle.set(me.fxjg_title, 'display', 'block');
                        domStyle.set(me.fxjg_table, 'display', 'block');
                        domStyle.set(me.fxjg_table_content, 'display', 'block');
                        for (var i = 0; i < me._resultTabList.length; i++) {
                            me._resultTabList[i].destroy();
                        }
                        me._resultTabList = [];
                        for (var i = 0; i < conflictList.length; i++) {
                            var _resultTab;
                            if (i == 0) {
                                _resultTab = new resultTab({ data: conflictList[i], isSelect: true }).placeAt(me.fxjg_table);
                            } else {
                                _resultTab = new resultTab({ data: conflictList[i], isSelect: false }).placeAt(me.fxjg_table);
                            }
                            _resultTab.onClick = me.tabChange.bind(me);
                            me._resultTabList.push(_resultTab);
                            _resultTab.startup();
                        }
                        me._exportData=me.doExport2(conflictList);

                    } else {
                        domStyle.set(me.fxjg_title, 'display', 'none');
                        domStyle.set(me.fxjg_table, 'display', 'none');
                        domStyle.set(me.fxjg_table_content, 'display', 'none');
                        domStyle.set(me.downLoad, 'display', 'none');
                        alert("没有分析结果！");
                    }
                    Loading.hide();
                }.bind(me));
                
               
            });

            on(me.subSidebox_close, 'click', function () {
                me.destroy();
                Resumequery();
            });

            on(me.downLoad,'click',function(){
                debugger
                workMapService.uploadZip(me._exportData).then(function (result){
                if(result.code=="200"){
                    workMapService.fileDownloadByPath(result.data);
                }else{
                    alert(result.msg);
                }
                })
            });
        },
        _setProgress: function () {
            var me = this;
            if (me._step === 1) {
                me._resultLayer.getSource().clear();
                me._highlightedLayer.getSource().clear();
                me._drawLayer.getSource().clear();
                me._emptyArr();
                me.clear.click();
                
                domStyle.set(me.draw, 'border', '1px solid #dee2eb');
                domStyle.set(me.draw, 'color', '#333');
                domStyle.set(me.draw.children[0], 'background-image', 'url(image/doConflict/drawpolygon.png)');

                domStyle.set(me.select, 'border', '1px solid #dee2eb');
                domStyle.set(me.select, 'color', '#333');
                domStyle.set(me.select.children[0], 'background-image', 'url(image/doConflict/selectpolygon.png)');

                domStyle.set(me.upload, 'border', '1px solid #dee2eb');
                domStyle.set(me.upload, 'color', '#333');
                domStyle.set(me.upload.children[0], 'background-image', 'url(image/doConflict/uploadpolygon.png)');


                domStyle.set(me.progress, 'width', 'calc(calc(423px / 3) * 1)');
                domStyle.set(me.select_progress, 'left', '71.5px');
                domStyle.set(me.pre, 'display', 'none');
                domStyle.set(me.queryBtn, 'display', 'none');
                domStyle.set(me.clear, 'display', 'block');
                domStyle.set(me.next, 'display', 'block');
                domStyle.set(me.progress1_text, 'color', '#1c74bb');
                domStyle.set(me.progress2_text, 'color', '#838080');
                domStyle.set(me.progress3_text, 'color', '#838080');
                dojo.query('.group1', me.domNode).forEach(function (dom) {
                    domStyle.set(dom, 'display', 'block');
                });
                dojo.query('.group2', me.domNode).forEach(function (dom) {
                    domStyle.set(dom, 'display', 'none');
                });
                dojo.query('.group3', me.domNode).forEach(function (dom) {
                    domStyle.set(dom, 'display', 'none');
                });

                domStyle.set(me.upload_selectDom, 'display', 'none');
                me.geometryList.innerHTML='';

            } else if (me._step === 2) {
                domStyle.set(me.progress, 'width', 'calc(calc(423px / 3) * 2)');
                domStyle.set(me.select_progress, 'left', '212.5px');
                domStyle.set(me.pre, 'display', 'block');
                domStyle.set(me.clear, 'display', 'none');
                domStyle.set(me.queryBtn, 'display', 'none');
                domStyle.set(me.next, 'display', 'block');
                domStyle.set(me.progress2_text, 'color', '#1c74bb');
                domStyle.set(me.progress1_text, 'color', '#1c74bb');
                domStyle.set(me.progress3_text, 'color', '#838080');
                dojo.query('.group1', me.domNode).forEach(function (dom) {
                    domStyle.set(dom, 'display', 'none');
                });
                dojo.query('.group2', me.domNode).forEach(function (dom) {
                    domStyle.set(dom, 'display', 'block');

                });
                dojo.query('.group3', me.domNode).forEach(function (dom) {
                    domStyle.set(dom, 'display', 'none');
                });
            } else if (me._step === 3) {
                domStyle.set(me.progress, 'width', 'calc(calc(423px / 3) * 3)');
                domStyle.set(me.select_progress, 'left', '353.5px');
                domStyle.set(me.pre, 'display', 'block');
                domStyle.set(me.clear, 'display', 'none');
                domStyle.set(me.next, 'display', 'none');
                domStyle.set(me.queryBtn, 'display', 'block');
                domStyle.set(me.progress3_text, 'color', '#1c74bb');
                domStyle.set(me.progress2_text, 'color', '#1c74bb');
                domStyle.set(me.progress1_text, 'color', '#1c74bb');
                dojo.query('.group1', me.domNode).forEach(function (dom) {
                    domStyle.set(dom, 'display', 'none');
                });
                dojo.query('.group2', me.domNode).forEach(function (dom) {
                    domStyle.set(dom, 'display', 'none');
                });
                dojo.query('.group3', me.domNode).forEach(function (dom) {
                    domStyle.set(dom, 'display', 'block');
                });
            }
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
            debugger
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

            // feature.setStyle(this._highlightedStyle);
            if(me._differenceType==3){
                feature.setStyle(me._difference3Style);
            }else if(me._differenceType==2){
                feature.setStyle(me._difference2Style);
            }else if(me._differenceType==1){
                feature.setStyle(me._difference1Style);
            }

           // var r = appConfig.map.getView().getResolutionForExtent(feature.getGeometry().getExtent(), appConfig.map.getSize());
            //appConfig.map.getView().setResolution(r);
            appConfig.map.getView().setCenter(ol.extent.getCenter(feature.getGeometry().getExtent()));
            // }
            this._highlightedLayer.getSource().addFeature(feature);

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
                var area = me._Survey.surveyArea([polygonArr]);
                var length = me._Survey.surveyCircumference([polygonArr]);
                var data = { index: 1, area: area, length: length };
                for (var i = 0; i < me._geometryItemList.length; i++) {
                    me._geometryItemList[i].destroy();
                }
                me._geometryItemList = [];
                var _geometryItem = new geometryItem({ data: data }).placeAt(me.geometryList);
                me._geometryItemList.push(_geometryItem);
                _geometryItem.startup();
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
            debugger
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
        doExport2:function(re){
            debugger
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

define([
  "dojo/_base/declare",
  "dojo/parser",
  "dojo/DeferredList",
  "dijit/_WidgetBase",
  "dijit/_TemplatedMixin",
  "dojo/text!./templates/SurroundQuery.txt",
  "dojo/on",
  "dojo/dom-style",
  "dojo/dom-class",
  "dojo/dom-attr",
  "dojo/dom-construct",
  "FrameWork/MapUtil/MapToolDraw",
  "./LayerData",
  "./LayersConfig",
  "./QueryResults",
    "FrameWork/MapUtil/SuperMapWFSQuery", 'FrameWork/Loading/Loading', "FrameWork/serviceUtil/graphService","FrameWork/serviceUtil/ConfigurationService","FrameWork/SetMapConfig/SetMapConfig"
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
    MapToolDraw,
    LayerData,
    LayersConfig,
    QueryResults,
        SuperMapWFSQuery, Loading, graphService,ConfigurationService,SetMapConfig
) {
    return declare([_WidgetBase, _TemplatedMixin], {
        templateString: template,
        _map: null,
        _mapTool: null,
        _geom: null,
        _buffLayer: null,
        _buffGeom: null,
        _attrQueryTool: null,
        _typeDataClick: null,
        _checkLayerList: [],
        _queryResults: null,
        _zbcxConfig:null,

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
                me._geom = null;
                me._attrQueryTool = null;
                me._mapTool = new MapToolDraw(appConfig.map, me.getGeo.bind(me));

                me._map = appConfig.map;
                me._queryResults = null;

                var ishas = false;
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
                me.getConfigmsg(regionCode);
              
            });
        },
        getConfigmsg:function(region){
            var me=this;
            ConfigurationService.getSurroundqueryBycode(region).then(function(result){
                if(result.code == "200"){
                    me._zbcxConfig=result.data;
                }else{
                    console.log(result.msg);
                }
                me._bindEvents();
            },function(err){
                console.log(err)
            })
        },
        _bindEvents: function () {
            var me = this;
            on(me.close, "click", function () {
                me._destroy();
                _checkQuery=true;
                _attrQueryTool.activate("point");
            });
            on(me.draw, "click", function () {
                me._mapTool.deactivate();
                me._highlightedLayer.getSource().clear();
                me._mapTool.activate("point");
            });
            on(me.next, "click", function () {
                if (me.x.value.match(/^[ ]*$/) || me.y.value.match(/^[ ]*$/)) {
                    alert("请先定位或者填写坐标");
                    return false;
                }
                var unit = me.unit.options[me.unit.selectedIndex].value;
                var unitText = me.unit.options[me.unit.selectedIndex].text;
                var distance = parseFloat(me.distance.value);
                var geom = null;
                if (unitText == "公里") {
                    distance = distance * 1000;
                } else if (unitText == "英里") {
                    distance = distance * 1000;
                }
                geom = new ol.geom.Point([parseFloat(me.x.value), parseFloat(me.y.value)]);

                var wkt = new ol.format.WKT().writeGeometry(geom, {
                    dataProjection: "EPSG:4549",
                    featureProjection: "EPSG:4549"
                });


                graphService.graphicalBuffer(distance, wkt).then(function (result) {

                    if (result.code == "200") {
                        me._buffGeom = new ol.Feature({
                            geometry: new ol.format.WKT().readFeature(result.data).getGeometry(),
                            type: "polygon"
                        });



                        me._highlightedLayer.getSource().clear();
                        me._highlightedLayer.getSource().addFeature(new ol.format.WKT().readFeature(result.data));
                        me._mapTool.deactivate();

                        domStyle.set(me.drawGro, "display", "none");
                        domStyle.set(me.queryDiv, "display", "block");

                        me._checkLayerList = [];
                        me.quyerType.innerHTML = "";
                        me._zbcxConfig.forEach((layers) => {
                            me.quyerType.innerHTML +=
                                '<div class="typeData select" type="' + layers.type + '" style=" background-image: url(' + layers.icon + ');">' + layers.name + "</div>";
                        });
                        me._activeTypeDataClick();
                        me.loadLayerRefer(dojo.query(".typeData", me.domNode)[0]);
                    } else {
                        alert("缓冲失败");
                    }
                });


                //var buffered = turf.buffer(geom, distance, { units: unit });
                ////创建数据geojson对象和数据源对象
                //var format = new ol.format.GeoJSON();
                //var geom = format.readFeature(buffered);
                //me._buffGeom = new ol.Feature({
                //  geometry: geom.getGeometry(),
                //  type: "polygon",
                //});
                //将数据添加数据源的

            });

            on(dojo.query(".typeData", me.domNode), "click", function (evt) {
                me.loadLayerRefer(evt.target);
            });
            on(me.pre, "click", function () {
                domStyle.set(me.drawGro, "display", "block");
                domStyle.set(me.queryDiv, "display", "none");
                domStyle.set(me.queryResult, "display", "none");
                me._highlightedLayer.getSource().clear();
                me.x.value = "";
                me.y.value = "";
            });
            on(me.query, "click", function () {
                domStyle.set(me.queryResult, "display", "block");
                if (me._checkLayerList.length == 0) {
                    alert("请先选择图层");
                    return false;
                }
                Loading.show(me.domNode);
                var _deferredArray = new Array();
                for (var i = 0; i < me._checkLayerList.length; i++) {
                    // 
                    var queryurl = SetMapConfig.setOneQueryurl(me._checkLayerList[i].queryurl);
                    var _d = SuperMapWFSQuery.SpatialQuery(queryurl, me._buffGeom);
                    _deferredArray.push(_d);
                }
                _deferredList = new DeferredList(_deferredArray);
                _deferredList.then(function (e) {
                    var data = [];
                    e.forEach((li) => {
                        if (li[0] && li[1].features.length > 0) {
                            var l = me._checkLayerList.find(function (obj) {
                                return obj.layerid == li[1].features[0].properties.gml.featureType;
                            });
                            var d = {};
                            d.layer = l;
                            d.data = li[1].features;
                            data.push(d);
                        }
                    });
                    if (me._queryResults != null) {
                        me._queryResults._destroy();
                    }
                    if (data.length == 0) {
                        alert("无数据");
                        Loading.hide();
                        return false;
                    }
                    me._queryResults = new QueryResults({ data: data }).placeAt(me.queryResult);
                    me._queryResults.startup();
                    Loading.hide();
                });
            });
        },

        _activeTypeDataClick: function () {
            var me = this;
            me._disposeTypeDataClick();
            me.typeDataClick = on(dojo.query(".typeData", me.domNode), "click", function (evt) {
                me.loadLayerRefer(evt.target);
            });
        },
        _disposeTypeDataClick: function () {
            var me = this;
            if (me.typeDataClick != null) {
                dojo.disconnect(me.typeDataClick);
                me.typeDataClick = null;
            }
        },

        loadLayerRefer: function (dom) {
            var me = this;
            dojo.query(".typeData", me.domNode).forEach((typeData) => {
                domClass.remove(typeData, "select");
            });
            domClass.add(dom, "select");
            me.layersDataBox.innerHTML = "";
            var obj = me._zbcxConfig.find(function (obj) {
                return obj.type == domAttr.get(dom, "type");
            });

            obj.layers.forEach((layer) => {
                var isCheak = false;
                var l = me._checkLayerList.find(function (obj) {
                    return obj.id == layer.id;
                });
                if (l != undefined) {
                    isCheak = true;
                }
                var _layerData = new LayerData({ layer: layer, isCheak: isCheak }).placeAt(me.layersDataBox);
                _layerData.checkLayerListPush = me.checkLayerListPush.bind(me);
                _layerData.checkLayerListRemove = me.checkLayerListRemove.bind(me);
                _layerData.startup();
            });
        },
        checkLayerListPush(layer) {
            var me = this;
            me._checkLayerList.push(layer);
        },
        checkLayerListRemove(layer) {
            var me = this;
            me._checkLayerList = me._checkLayerList.filter(function (item) {
                return item.id != layer.id;
            });
        },
        getGeo: function (_feature) {
            var me = this;
            me._geom = _feature;
            me.x.value = me._geom.getGeometry().flatCoordinates[0].toFixed(8);
            me.y.value = me._geom.getGeometry().flatCoordinates[1].toFixed(8);
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
            me.destroy();
            me._mapTool.deactivate();
            me._highlightedLayer.getSource().clear();
            me._disposeTypeDataClick();
            if (me._queryResults != null) {
                me._queryResults._destroy();
            }
        }
    });
});

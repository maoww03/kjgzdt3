define([
  "dojo/dom-style",
  "dojo/DeferredList",
  "./MoreScreenMap",
  "./MoreScreenLayerControl",
  "FrameWork/AttrQuery/Attribute_MoreScreen",
], function (domStyle, DeferredList, MoreScreenMap, MoreScreenLayerControl, Attribute_MoreScreen) {
    var util = {
        mapArr: [],
        moreScreenMapArr: [],
        moreScreenLayerControl: null,
        eventHandlerArr: [],
        layerIds: [],
        layersConfig: [],
        _clickKeyList: [],
        _MapConfig:null,
        _highlightedStyle: new ol.style.Style({
            // 默认多面形中多边形样式 style_setting为false
            fill: new ol.style.Fill({
                color: "rgba(255,0,0,0.5)",
            }),
            stroke: new ol.style.Stroke({
                color: "red",
                width: 2,
            }),
        }),

        doubleScreen: function () {
            var me = this;
            me.exit();

            domStyle.set(dojo.byId("moreScreenControl"), "display", "block");
            me.mapArr = [];
            me.moreScreenMapArr = [];
            var _moreScreenMap = new MoreScreenMap({ index: 1 }).placeAt(dojo.byId("moreScreenControl"));
            _moreScreenMap.pushEventHandlerArr = me.pushEventHandlerArr.bind(me);
            _moreScreenMap.pushMapArr = me.pushMapArr.bind(me);
            _moreScreenMap.getMapArr = me.getMapArr.bind(me);
            _moreScreenMap.startup();
            me.moreScreenMapArr.push(_moreScreenMap);
            domStyle.set(_moreScreenMap.mapDiv2, "width", "calc((100% - 416px) / 2)");
            domStyle.set(_moreScreenMap.mapDiv2, "left", "416px");
            domStyle.set(_moreScreenMap.mapDiv2, "border-right", "1px outset #1972b9");

            var _moreScreenMap2 = new MoreScreenMap({ index: 2 }).placeAt(dojo.byId("moreScreenControl"));
            _moreScreenMap2.pushEventHandlerArr = me.pushEventHandlerArr.bind(me);
            _moreScreenMap2.pushMapArr = me.pushMapArr.bind(me);
            _moreScreenMap2.getMapArr = me.getMapArr.bind(me);
            _moreScreenMap2.startup();
            me.moreScreenMapArr.push(_moreScreenMap2);
            domStyle.set(_moreScreenMap2.mapDiv2, "width", "calc((100% - 416px) / 2)");
            domStyle.set(_moreScreenMap2.mapDiv2, "left", "calc((100% - 416px) / 2 + 416px)");
            domStyle.set(_moreScreenMap2.mapDiv2, "border-left", "1px outset #1972b9");
            me.getLayersConfig();
            me.moreScreenLayerControl = new MoreScreenLayerControl({ layersConfig: me.layersConfig, mapArr: me.mapArr }).placeAt(
                dojo.byId("moreScreenControl")
            );
            me.moreScreenLayerControl.startup();

            me.mapClickHand();

            //domStyle.set(dojo.byId("moreScreenControl"), 'background', '#0d65ad');
        },
        threeScreen: function () {
            var me = this;
            me.exit();

            domStyle.set(dojo.byId("moreScreenControl"), "display", "block");
            me.mapArr = [];
            me.moreScreenMapArr = [];
            var _moreScreenMap = new MoreScreenMap({ index: 1 }).placeAt(dojo.byId("moreScreenControl"));
            _moreScreenMap.pushEventHandlerArr = me.pushEventHandlerArr.bind(me);
            _moreScreenMap.pushMapArr = me.pushMapArr.bind(me);
            _moreScreenMap.getMapArr = me.getMapArr.bind(me);
            _moreScreenMap.startup();
            me.moreScreenMapArr.push(_moreScreenMap);
            domStyle.set(_moreScreenMap.mapDiv2, "width", "calc((100% - 416px) / 2)");
            domStyle.set(_moreScreenMap.mapDiv2, "left", "416px");
            domStyle.set(_moreScreenMap.mapDiv2, "border-right", "1px outset #1972b9");
            var _moreScreenMap2 = new MoreScreenMap({ index: 2 }).placeAt(dojo.byId("moreScreenControl"));
            _moreScreenMap2.pushEventHandlerArr = me.pushEventHandlerArr.bind(me);
            _moreScreenMap2.pushMapArr = me.pushMapArr.bind(me);
            _moreScreenMap2.getMapArr = me.getMapArr.bind(me);
            _moreScreenMap2.startup();
            me.moreScreenMapArr.push(_moreScreenMap2);
            domStyle.set(_moreScreenMap2.mapDiv2, "width", "calc((100% - 416px) / 2)");
            domStyle.set(_moreScreenMap2.mapDiv2, "height", "50%");
            domStyle.set(_moreScreenMap2.mapDiv2, "left", "calc((100% - 416px) / 2 + 416px)");
            domStyle.set(_moreScreenMap2.mapDiv2, "border-left", "1px outset #1972b9");
            domStyle.set(_moreScreenMap2.mapDiv2, "border-bottom", "1px outset #1972b9");
            var _moreScreenMap3 = new MoreScreenMap({ index: 3 }).placeAt(dojo.byId("moreScreenControl"));
            _moreScreenMap3.pushEventHandlerArr = me.pushEventHandlerArr.bind(me);
            _moreScreenMap3.pushMapArr = me.pushMapArr.bind(me);
            _moreScreenMap3.getMapArr = me.getMapArr.bind(me);
            _moreScreenMap3.startup();
            me.moreScreenMapArr.push(_moreScreenMap3);
            domStyle.set(_moreScreenMap3.mapDiv2, "width", "calc((100% - 416px) / 2)");
            domStyle.set(_moreScreenMap3.mapDiv2, "height", "50%");
            domStyle.set(_moreScreenMap3.mapDiv2, "left", "calc((100% - 416px) / 2 + 416px)");
            domStyle.set(_moreScreenMap3.mapDiv2, "top", "50%");
            domStyle.set(_moreScreenMap3.mapDiv2, "border-left", "1px outset #1972b9");
            domStyle.set(_moreScreenMap3.mapDiv2, "border-top", "1px outset #1972b9");

            me.getLayersConfig();
            me.moreScreenLayerControl = new MoreScreenLayerControl({ layersConfig: me.layersConfig, mapArr: me.mapArr }).placeAt(
                dojo.byId("moreScreenControl")
            );
            me.moreScreenLayerControl.startup();

            me.mapClickHand();
            //domStyle.set(dojo.byId("moreScreenControl"), 'background', '#0d65ad');
        },
        fourScreen: function () {
            var me = this;
            me.exit();

            domStyle.set(dojo.byId("moreScreenControl"), "display", "block");
            me.mapArr = [];
            me.moreScreenMapArr = [];
            var _moreScreenMap = new MoreScreenMap({ index: 1 }).placeAt(dojo.byId("moreScreenControl"));
            _moreScreenMap.pushEventHandlerArr = me.pushEventHandlerArr.bind(me);
            _moreScreenMap.pushMapArr = me.pushMapArr.bind(me);
            _moreScreenMap.getMapArr = me.getMapArr.bind(me);
            _moreScreenMap.startup();
            me.moreScreenMapArr.push(_moreScreenMap);
            domStyle.set(_moreScreenMap.mapDiv2, "width", "calc((100% - 416px) / 2)");
            domStyle.set(_moreScreenMap.mapDiv2, "left", "416px");
            domStyle.set(_moreScreenMap.mapDiv2, "border-right", "1px outset #1972b9");


            var _moreScreenMap2 = new MoreScreenMap({ index: 2 }).placeAt(dojo.byId("moreScreenControl"));
            _moreScreenMap2.pushEventHandlerArr = me.pushEventHandlerArr.bind(me);
            _moreScreenMap2.pushMapArr = me.pushMapArr.bind(me);
            _moreScreenMap2.getMapArr = me.getMapArr.bind(me);
            _moreScreenMap2.startup();
            me.moreScreenMapArr.push(_moreScreenMap2);
            domStyle.set(_moreScreenMap2.mapDiv2, "width", "calc((100% - 416px) / 2)");
            domStyle.set(_moreScreenMap2.mapDiv2, "height", "calc(100% / 3)");
            domStyle.set(_moreScreenMap2.mapDiv2, "left", "calc((100% - 416px) / 2 + 416px)");
            domStyle.set(_moreScreenMap2.mapDiv2, "border-left", "1px outset #1972b9");
            domStyle.set(_moreScreenMap2.mapDiv2, "border-bottom", "1px outset #1972b9");

            var _moreScreenMap3 = new MoreScreenMap({ index: 3 }).placeAt(dojo.byId("moreScreenControl"));
            _moreScreenMap3.pushEventHandlerArr = me.pushEventHandlerArr.bind(me);
            _moreScreenMap3.pushMapArr = me.pushMapArr.bind(me);
            _moreScreenMap3.getMapArr = me.getMapArr.bind(me);
            _moreScreenMap3.startup();
            me.moreScreenMapArr.push(_moreScreenMap3);
            domStyle.set(_moreScreenMap3.mapDiv2, "width", "calc((100% - 416px) / 2)");
            domStyle.set(_moreScreenMap3.mapDiv2, "height", "calc(100% / 3)");
            domStyle.set(_moreScreenMap3.mapDiv2, "left", "calc((100% - 416px) / 2 + 416px)");
            domStyle.set(_moreScreenMap3.mapDiv2, "top", "calc(100% / 3)");
            domStyle.set(_moreScreenMap3.mapDiv2, "border-left", "1px outset #1972b9");
            domStyle.set(_moreScreenMap3.mapDiv2, "border-bottom", "1px outset #1972b9");
            domStyle.set(_moreScreenMap3.mapDiv2, "border-top", "1px outset #1972b9");

            var _moreScreenMap4 = new MoreScreenMap({ index: 4 }).placeAt(dojo.byId("moreScreenControl"));
            _moreScreenMap4.pushEventHandlerArr = me.pushEventHandlerArr.bind(me);
            _moreScreenMap4.pushMapArr = me.pushMapArr.bind(me);
            _moreScreenMap4.getMapArr = me.getMapArr.bind(me);
            _moreScreenMap4.startup();
            me.moreScreenMapArr.push(_moreScreenMap4);
            domStyle.set(_moreScreenMap4.mapDiv2, "width", "calc((100% - 416px) / 2)");
            domStyle.set(_moreScreenMap4.mapDiv2, "height", "calc(100% / 3)");
            domStyle.set(_moreScreenMap4.mapDiv2, "left", "calc((100% - 416px) / 2 + 416px)");
            domStyle.set(_moreScreenMap4.mapDiv2, "top", "calc((100% / 3) * 2)");
            domStyle.set(_moreScreenMap4.mapDiv2, "border-left", "1px outset #1972b9");
            domStyle.set(_moreScreenMap4.mapDiv2, "border-top", "1px outset #1972b9");
            me.getLayersConfig();
            me.moreScreenLayerControl = new MoreScreenLayerControl({ layersConfig: me.layersConfig, mapArr: me.mapArr }).placeAt(
                dojo.byId("moreScreenControl")
            );
            me.moreScreenLayerControl.startup();

            me.mapClickHand();

            //domStyle.set(dojo.byId("moreScreenControl"), 'background', '#0d65ad');
        },

        fiveScreen: function () {
            var me = this;
            me.exit();

            domStyle.set(dojo.byId("moreScreenControl"), "display", "block");
            me.mapArr = [];
            me.moreScreenMapArr = [];
            var _moreScreenMap = new MoreScreenMap({ index: 1 }).placeAt(dojo.byId("moreScreenControl"));
            _moreScreenMap.pushEventHandlerArr = me.pushEventHandlerArr.bind(me);
            _moreScreenMap.pushMapArr = me.pushMapArr.bind(me);
            _moreScreenMap.getMapArr = me.getMapArr.bind(me);
            _moreScreenMap.startup();
            me.moreScreenMapArr.push(_moreScreenMap);
            domStyle.set(_moreScreenMap.mapDiv2, "width", "calc((100% - 416px) / 2)");
            domStyle.set(_moreScreenMap.mapDiv2, "height", "50%");
            domStyle.set(_moreScreenMap.mapDiv2, "left", "416px");

            domStyle.set(_moreScreenMap.mapDiv2, "border-bottom", "1px outset #1972b9");
            domStyle.set(_moreScreenMap.mapDiv2, "border-right", "1px outset #1972b9");


            var _moreScreenMap2 = new MoreScreenMap({ index: 2 }).placeAt(dojo.byId("moreScreenControl"));
            _moreScreenMap2.pushEventHandlerArr = me.pushEventHandlerArr.bind(me);
            _moreScreenMap2.pushMapArr = me.pushMapArr.bind(me);
            _moreScreenMap2.getMapArr = me.getMapArr.bind(me);
            _moreScreenMap2.startup();
            me.moreScreenMapArr.push(_moreScreenMap2);
            domStyle.set(_moreScreenMap2.mapDiv2, "width", "calc((100% - 416px) / 2)");
            domStyle.set(_moreScreenMap2.mapDiv2, "height", "calc(100% / 3)");
            domStyle.set(_moreScreenMap2.mapDiv2, "left", "calc((100% - 416px) / 2 + 416px)");

            domStyle.set(_moreScreenMap2.mapDiv2, "border-left", "1px outset #1972b9");
            domStyle.set(_moreScreenMap2.mapDiv2, "border-bottom", "1px outset #1972b9");

            var _moreScreenMap3 = new MoreScreenMap({ index: 3 }).placeAt(dojo.byId("moreScreenControl"));
            _moreScreenMap3.pushEventHandlerArr = me.pushEventHandlerArr.bind(me);
            _moreScreenMap3.pushMapArr = me.pushMapArr.bind(me);
            _moreScreenMap3.getMapArr = me.getMapArr.bind(me);
            _moreScreenMap3.startup();
            me.moreScreenMapArr.push(_moreScreenMap3);
            domStyle.set(_moreScreenMap3.mapDiv2, "width", "calc((100% - 416px) / 2)");
            domStyle.set(_moreScreenMap3.mapDiv2, "height", "calc(100% / 3)");
            domStyle.set(_moreScreenMap3.mapDiv2, "left", "calc((100% - 416px) / 2 + 416px)");
            domStyle.set(_moreScreenMap3.mapDiv2, "top", "calc(100% / 3)");

            domStyle.set(_moreScreenMap3.mapDiv2, "border-left", "1px outset #1972b9");
            domStyle.set(_moreScreenMap3.mapDiv2, "border-bottom", "1px outset #1972b9");
            domStyle.set(_moreScreenMap3.mapDiv2, "border-top", "1px outset #1972b9");

            var _moreScreenMap4 = new MoreScreenMap({ index: 4 }).placeAt(dojo.byId("moreScreenControl"));
            _moreScreenMap4.pushEventHandlerArr = me.pushEventHandlerArr.bind(me);
            _moreScreenMap4.pushMapArr = me.pushMapArr.bind(me);
            _moreScreenMap4.getMapArr = me.getMapArr.bind(me);
            _moreScreenMap4.startup();
            me.moreScreenMapArr.push(_moreScreenMap4);
            domStyle.set(_moreScreenMap4.mapDiv2, "width", "calc((100% - 416px) / 2)");
            domStyle.set(_moreScreenMap4.mapDiv2, "height", "calc(100% / 3)");
            domStyle.set(_moreScreenMap4.mapDiv2, "left", "calc((100% - 416px) / 2 + 416px)");
            domStyle.set(_moreScreenMap4.mapDiv2, "top", "calc(100% / 3 * 2)");

            domStyle.set(_moreScreenMap4.mapDiv2, "border-left", "1px outset #1972b9");
            domStyle.set(_moreScreenMap4.mapDiv2, "border-top", "1px outset #1972b9");

            var _moreScreenMap5 = new MoreScreenMap({ index: 5 }).placeAt(dojo.byId("moreScreenControl"));
            _moreScreenMap5.pushEventHandlerArr = me.pushEventHandlerArr.bind(me);
            _moreScreenMap5.pushMapArr = me.pushMapArr.bind(me);
            _moreScreenMap5.getMapArr = me.getMapArr.bind(me);
            _moreScreenMap5.startup();
            me.moreScreenMapArr.push(_moreScreenMap5);
            domStyle.set(_moreScreenMap5.mapDiv2, "width", "calc((100% - 416px) / 2)");
            domStyle.set(_moreScreenMap5.mapDiv2, "height", "50%");
            domStyle.set(_moreScreenMap5.mapDiv2, "left", "416px");
            domStyle.set(_moreScreenMap5.mapDiv2, "top", "50%");

            domStyle.set(_moreScreenMap5.mapDiv2, "border-right", "1px outset #1972b9");
            domStyle.set(_moreScreenMap5.mapDiv2, "border-top", "1px outset #1972b9");

            me.getLayersConfig();
            me.moreScreenLayerControl = new MoreScreenLayerControl({ layersConfig: me.layersConfig, mapArr: me.mapArr }).placeAt(
                dojo.byId("moreScreenControl")
            );
            me.moreScreenLayerControl.startup();

            me.mapClickHand();

            //domStyle.set(dojo.byId("moreScreenControl"), 'background', '#0d65ad');
        },

        fixScreen: function () {
            var me = this;
            me.exit();

            domStyle.set(dojo.byId("moreScreenControl"), "display", "block");
            me.mapArr = [];
            me.moreScreenMapArr = [];
            var _moreScreenMap = new MoreScreenMap({ index: 1 }).placeAt(dojo.byId("moreScreenControl"));
            _moreScreenMap.pushEventHandlerArr = me.pushEventHandlerArr.bind(me);
            _moreScreenMap.pushMapArr = me.pushMapArr.bind(me);
            _moreScreenMap.getMapArr = me.getMapArr.bind(me);
            _moreScreenMap.startup();
            me.moreScreenMapArr.push(_moreScreenMap);
            domStyle.set(_moreScreenMap.mapDiv2, "width", "calc((100% - 416px) / 3)");
            domStyle.set(_moreScreenMap.mapDiv2, "height", "50%");
            domStyle.set(_moreScreenMap.mapDiv2, "left", "416px");

            domStyle.set(_moreScreenMap.mapDiv2, "border-right", "1px outset #1972b9");
            domStyle.set(_moreScreenMap.mapDiv2, "border-bottom", "1px outset #1972b9");

            var _moreScreenMap2 = new MoreScreenMap({ index: 2 }).placeAt(dojo.byId("moreScreenControl"));
            _moreScreenMap2.pushEventHandlerArr = me.pushEventHandlerArr.bind(me);
            _moreScreenMap2.pushMapArr = me.pushMapArr.bind(me);
            _moreScreenMap2.getMapArr = me.getMapArr.bind(me);
            _moreScreenMap2.startup();
            me.moreScreenMapArr.push(_moreScreenMap2);
            domStyle.set(_moreScreenMap2.mapDiv2, "width", "calc((100% - 416px) / 3)");
            domStyle.set(_moreScreenMap2.mapDiv2, "height", "50%");
            domStyle.set(_moreScreenMap2.mapDiv2, "left", "calc((100% - 416px) / 3 + 416px)");

            domStyle.set(_moreScreenMap2.mapDiv2, "border-right", "1px outset #1972b9");
            domStyle.set(_moreScreenMap2.mapDiv2, "border-left", "1px outset #1972b9");
            domStyle.set(_moreScreenMap2.mapDiv2, "border-bottom", "1px outset #1972b9");

            var _moreScreenMap3 = new MoreScreenMap({ index: 3 }).placeAt(dojo.byId("moreScreenControl"));
            _moreScreenMap3.pushEventHandlerArr = me.pushEventHandlerArr.bind(me);
            _moreScreenMap3.pushMapArr = me.pushMapArr.bind(me);
            _moreScreenMap3.getMapArr = me.getMapArr.bind(me);
            _moreScreenMap3.startup();
            me.moreScreenMapArr.push(_moreScreenMap3);
            domStyle.set(_moreScreenMap3.mapDiv2, "width", "calc((100% - 416px) / 3)");
            domStyle.set(_moreScreenMap3.mapDiv2, "height", "50%");
            domStyle.set(_moreScreenMap3.mapDiv2, "left", "calc((100% - 416px) / 3 * 2 + 416px)");

            domStyle.set(_moreScreenMap3.mapDiv2, "border-left", "1px outset #1972b9");
            domStyle.set(_moreScreenMap3.mapDiv2, "border-bottom", "1px outset #1972b9");

            var _moreScreenMap4 = new MoreScreenMap({ index: 4 }).placeAt(dojo.byId("moreScreenControl"));
            _moreScreenMap4.pushEventHandlerArr = me.pushEventHandlerArr.bind(me);
            _moreScreenMap4.pushMapArr = me.pushMapArr.bind(me);
            _moreScreenMap4.getMapArr = me.getMapArr.bind(me);
            _moreScreenMap4.startup();
            me.moreScreenMapArr.push(_moreScreenMap4);
            domStyle.set(_moreScreenMap4.mapDiv2, "width", "calc((100% - 416px) / 3)");
            domStyle.set(_moreScreenMap4.mapDiv2, "height", "50%");
            domStyle.set(_moreScreenMap4.mapDiv2, "left", "calc((100% - 416px) / 3 * 2 + 416px)");
            domStyle.set(_moreScreenMap4.mapDiv2, "top", "50%");

            domStyle.set(_moreScreenMap4.mapDiv2, "border-left", "1px outset #1972b9");
            domStyle.set(_moreScreenMap4.mapDiv2, "border-top", "1px outset #1972b9");

            var _moreScreenMap5 = new MoreScreenMap({ index: 5 }).placeAt(dojo.byId("moreScreenControl"));
            _moreScreenMap5.pushEventHandlerArr = me.pushEventHandlerArr.bind(me);
            _moreScreenMap5.pushMapArr = me.pushMapArr.bind(me);
            _moreScreenMap5.getMapArr = me.getMapArr.bind(me);
            _moreScreenMap5.startup();
            me.moreScreenMapArr.push(_moreScreenMap5);
            domStyle.set(_moreScreenMap5.mapDiv2, "width", "calc((100% - 416px) / 3)");
            domStyle.set(_moreScreenMap5.mapDiv2, "height", "50%");
            domStyle.set(_moreScreenMap5.mapDiv2, "left", "calc((100% - 416px) / 3 + 416px)");
            domStyle.set(_moreScreenMap5.mapDiv2, "top", "50%");

            domStyle.set(_moreScreenMap5.mapDiv2, "border-right", "1px outset #1972b9");
            domStyle.set(_moreScreenMap5.mapDiv2, "border-left", "1px outset #1972b9");
            domStyle.set(_moreScreenMap5.mapDiv2, "border-top", "1px outset #1972b9");

            var _moreScreenMap6 = new MoreScreenMap({ index: 6 }).placeAt(dojo.byId("moreScreenControl"));
            _moreScreenMap6.pushEventHandlerArr = me.pushEventHandlerArr.bind(me);
            _moreScreenMap6.pushMapArr = me.pushMapArr.bind(me);
            _moreScreenMap6.getMapArr = me.getMapArr.bind(me);
            _moreScreenMap6.startup();
            me.moreScreenMapArr.push(_moreScreenMap6);
            domStyle.set(_moreScreenMap6.mapDiv2, "width", "calc((100% - 416px) / 3)");
            domStyle.set(_moreScreenMap6.mapDiv2, "height", "50%");
            domStyle.set(_moreScreenMap6.mapDiv2, "left", "416px");
            domStyle.set(_moreScreenMap6.mapDiv2, "top", "50%");

            domStyle.set(_moreScreenMap6.mapDiv2, "border-right", "1px outset #1972b9");

            domStyle.set(_moreScreenMap6.mapDiv2, "border-top", "1px outset #1972b9");

            me.getLayersConfig();
            me.moreScreenLayerControl = new MoreScreenLayerControl({ layersConfig: me.layersConfig, mapArr: me.mapArr }).placeAt(
                dojo.byId("moreScreenControl")
            );
            me.moreScreenLayerControl.startup();

            me.mapClickHand();

            //domStyle.set(dojo.byId("moreScreenControl"), 'background', '#0d65ad');
        },

        mapClickHand: function () {
            var me = this;
            me.mapArr.forEach((map) => {
                var clickKey = map.on("click", this.mapclick.bind(this));
                me._clickKeyList.push(clickKey);
            });
        },

        disMapClickHand: function () {
            var me = this;
            if (me._clickKeyList.length !== 0) {
                me._clickKeyList.forEach((clickKey) => {
                    ol.Observable.unByKey(clickKey);
                });
                me._clickKeyList = [];
            }
        },

        mapclick: function (evt) {
            var me = this;
            var _feature = new ol.Feature({
                geometry: new ol.geom.Point(evt.coordinate),
                type: "point",
            });

            var dataList = [];
            var performCount = 0;
            me.mapArr.forEach((map, index) => {
                var _deferredArray = new Array();
                var layers = map.getLayers().array_;
                for (var i = layers.length - 1; i >= 0; i--) {
                    var layer = layers[i].values_;
                    if ((layer.layerType === "VectorTileSuperMapRest" || layer.layerType === "SuperMapWMTS") && layer.visible && layer.thematicMap && layer.queryUrl != undefined) {
                        ///用deferredList
                        var d1 = layer.SpatialQueryFeatures(_feature);
                        _deferredArray.push(d1);
                    }
                }

                _deferredList = new DeferredList(_deferredArray);
                _deferredList.then(function (e) {
                    performCount++;
                    var data = { index: index, data: [] };
                    e.forEach((li) => {
                        if (li[0]) {
                            li[1].features.forEach((feature) => {
                                data.data.push(feature);
                            });
                        }
                    });
                    if (data.data.length > 0) {
                        dataList.push(data);
                    }

                    var ishas = false;
                    for (var i = 0; i < map.getLayers().array_.length; i++) {
                        var layer = map.getLayers().array_[i];
                        var layer_id = layer.get("id");
                        if (layer_id == "highlighted") {
                            layer.getSource().clear();
                            ishas = true;
                        }
                    }
                    if (!ishas) {
                        var highlightedLayer = new ol.layer.Vector({
                            id: "highlighted",
                            layerTitle: "属性查询",
                            graphicMap: true,
                            source: new ol.source.Vector({
                                features: [],
                            }),
                            zIndex: map.getLayers().getLength() + 1,
                        });
                        map.addLayer(highlightedLayer);
                    }

                    if (performCount == me.mapArr.length) {
                        if (dataList.length > 0) {
                            if (me._attribute != null) {
                                me._attribute._destroy();
                            }
                            dataList = dataList.sort(me.sortRule);
                            debugger
                            // me.moreScreenMapArr.forEach((m) => {
                            //     m.showqueryResult(_dataList,me._highlightedStyle,me.mapArr);
                            // });
                            for(var n=0;n<dataList.length;n++){
                                var onedata=me.moreScreenMapArr[n];
                                onedata.showqueryResult(dataList[n],me._highlightedStyle,me.mapArr[n]);
                            }

                            // me._attribute = new Attribute_MoreScreen({
                            //     _dataList: dataList,
                            //     _highlightedStyle: me._highlightedStyle,
                            //     mapArr: me.mapArr,
                            // }).placeAt(dojo.byId("moreScreenControl"));
                            // me._attribute.startup();

                        }
                    }
                });
            });
            return false;
        },
        sortRule: function (a, b) {
            return a.index - b.index;
        },

        pushEventHandlerArr: function (event) {
            var me = this;
            me.eventHandlerArr.push(event);
        },
        disEventHandlerArr: function () {
            var me = this;
            if (me.eventHandlerArr.length != 0) {
                me.eventHandlerArr.forEach((h) => {
                    ol.Observable.unByKey(h);
                });
                me.eventHandlerArr = [];
            }
        },
        destroyMoreScreenMapArr: function () {
            var me = this;
            me.moreScreenMapArr.forEach((m) => {
                m.destroy();
            });
            me.moreScreenMapArr = [];
        },
        pushMapArr: function (map) {
            var me = this;
            me.mapArr.push(map);
        },
        getMapArr: function () {
            var me = this;
            return me.mapArr;
        },
        exit: function () {
            var me = this;
            me.mapArr = [];
            me.disEventHandlerArr();
            me.destroyMoreScreenMapArr();
            if (me.moreScreenLayerControl != null) {
                me.moreScreenLayerControl.destroy();
                me.moreScreenLayerControl = null;
            }
            setTimeout(
                function () {
                    appConfig.map.updateSize();
                }.bind(this),
                500
            );
            me.disMapClickHand();
            dojo.byId("moreScreenControl").innerHTML = "";
            domStyle.set(dojo.byId("moreScreenControl"), "display", "none");

            //domStyle.set(dojo.byId("moreScreenControl"), 'background', 'none');
        },

        getLayersConfig2: function (layerIds, config) {
            var me = this;
            var subLayers = config.subLayers;
            for (var i = 0; i < subLayers.length; i++) {
                var _layer = subLayers[i];
                if (_layer.layerType === "GroupLayer" && _layer.subLayers instanceof Array && _layer.subLayers.length > 0 && _layer.thematicMap) {
                    me.getLayersConfig2(layerIds, _layer);
                } else {
                    if (layerIds.indexOf(_layer.id) != -1) {
                        if (typeof config.name === "string") {
                            _layer.groupName = config.name;
                        }
                        if (typeof config.caption === "string") {
                            _layer.groupCaption = config.caption;
                        }
                        if (typeof config.baseMap === "boolean") {
                            _layer.baseMap = config.baseMap;
                        }
                        if (typeof config.logo === "string") {
                            _layer.logo = config.logo;
                        }
                        if (typeof config.visible === "boolean") {
                            _layer.visible = config.visible;
                        }
                        if (typeof config.opacity === "number") {
                            _layer.opacity = config.opacity;
                        }
                        if (typeof config.thematicMap === "boolean") {
                            _layer.thematicMap = config.thematicMap;
                        }
                        _layer.visible = true;
                        me.layersConfig.push(_layer);
                    }
                }
            }
        },
        getLayersConfig: function () {
            var me = this;
            me._MapConfig=_otherRegion();
            var layerIds = [];
            me.layersConfig = [];
            var layers = appConfig.map.getLayers().array_;
            for (var i = layers.length - 1; i >= 0; i--) {
                var layer = layers[i].values_;
                if (layer.visible && layer.thematicMap) {
                    layerIds.push(layer.id);
                }
            }
            for (var i = 0; i <  me._MapConfig.layers.length; i++) {
                var _layer =  me._MapConfig.layers[i];
                if (_layer.layerType === "GroupLayer" && _layer.subLayers instanceof Array && _layer.subLayers.length > 0 && _layer.thematicMap) {
                    me.getLayersConfig2(layerIds,  me._MapConfig.layers[i]);
                }
            }
        }
    };
    return util;
});

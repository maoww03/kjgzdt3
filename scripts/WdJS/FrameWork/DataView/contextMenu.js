define(["dojo/_base/declare", "dojo/text!./templates/contextMenu.txt", "dijit/_TemplatedMixin", "dijit/_WidgetBase", "dojo/on", "dojo/dom-style", 'dojo/parser', "dojo/dom-class", "dojo/query", "dojo/dom-attr", 'FrameWork/MapUtil/ArcGISFeatureLayer', 'FrameWork/MapUtil/GeoWFSLayer'],
    function (declare, template, TemplatedMixin, WidgetBase, on, domStyle, parser, domClass, query, domAttr, ArcGISFeatureLayer, GeoWFSLayer) {
        return declare([WidgetBase, TemplatedMixin], {
            templateString: template, 
            isShow: false,
            titleString: null,
            left: null,
            top: null,
            data: null,
            _layer: null,
            _MapConfig:null,

            constructor: function (args) {

            },
            postCreate: function () {
                this.inherited(arguments);
                this.onCreate();
            },
            onCreate: function () {
                var me = this;
            },
            // ------startup
            startup: function () {
                var me = this;
                if (this._started) {
                    return;
                }
                parser.parse(this.domNode).then(function () {
                    me._MapConfig=_otherRegion();
                    this.setPosiion(this.left, this.top); //传入当前元素的left 设置left和top
                    this._setStyle(); //设置样式
                    this.bindEvent();
                    
                }.bind(this));

                this._started = true;
            },
            //------bindEvent
            bindEvent: function () {
                var me = this;
                query("[data-value]", this.domNode).on("click", function (e) {

                    var dom = e.target;
                    if (domAttr.get(dom, 'data-isadd') === "true") {
                        domStyle.set(dom, 'background-image', "url('image/addLayer.png')");
                        dom.innerHTML = dom.innerHTML.replace('移除', '添加');
                        domAttr.set(dom, 'data-isadd', 'false');
                        appConfig.map2.removeLayer(me._layer);
                        alert(me.id);
                    } else {
                        alert(me.id);
                        domStyle.set(dom, 'background-image', "url('image/removeLayer.png')");
                        dom.innerHTML = dom.innerHTML.replace('添加', '移除');
                        domAttr.set(dom, 'data-isadd', 'true');
                       
                        for (var i = 0; i < me._MapConfig.layers.length; i++) {
                            var _layer = me._MapConfig.layers[i];
                            if (_layer.layerType === "GroupLayer" && _layer.subLayers instanceof Array && _layer.subLayers.length > 0) {
                                me._getsubLayers(_layer.subLayers);
                            } else {
                                if (_layer.id === me.data.id)
                                    me._createLayer(_layer, true);
                            }
                        }
                        // }
                    }

                });
            },
            show: function () {
                var me = this;
                domStyle.set(me.domNode, "display", "block");
                
            },
            hide: function () {
                var me = this;
                domStyle.set(me.domNode, "display", "none");
            },
            setPosiion: function (left, top) {
                domStyle.set(this.domNode, 'left', left + 'px');
                domStyle.set(this.domNode, 'top', (top - 14) + 'px');
            },
            _getsubLayers: function (subLayers) {
                for (var i = 0; i < subLayers.length; i++) {
                    var _layer = subLayers[i];
                    if (_layer.layerType === "GroupLayer" && _layer.subLayers instanceof Array && _layer.subLayers.length > 0) {
                        this._getsubLayers(_layer.subLayers);
                    } else {
                        if (_layer.id === this.data.id)
                            
                            this._createLayer(_layer, true);
                    }
                    //this._createLayer(subLayers[i]);
                }
            },
            _createLayer: function (layer, visible) {
                var me=this;
                var _layer;
                if (layer.layerType === "TileArcGISRest") {
                    _layer = new ol.layer.Tile({
                        id: layer.id,
                        source: new ol.source.TileArcGISRest({
                            url: layer.url,
                            crossOrigin: 'anonymous'
                        }),
                        visible: visible,
                        name: layer.caption,

                        groupCaption: layer.groupCaption,
                        baseMap: layer.baseMap,
                        thematicMap: layer.thematicMap
                    });

                    appConfig.map2.addLayer(_layer);
                }
                else if (layer.layerType === "TileXYZ") {
                    //设置切片的原点

                    var origin = layer.origin;

                    //切片的方案
                    var tileGrid = new ol.tilegrid.TileGrid({
                        tileSize: 256,
                        origin: origin,
                        resolutions: me._MapConfig.resolutions
                    });

                    _layer = new ol.layer.Tile({
                        id: layer.id,
                        source: new ol.source.TileImage({
                            url: layer.url,
                            crossOrigin: 'anonymous',
                            tileGrid: tileGrid
                        }),

                        visible: visible,
                        name: layer.caption,
                        groupCaption: layer.groupCaption,
                        baseMap: layer.baseMap,
                        thematicMap: layer.thematicMap
                        //opacity: layer.opacity
                    });
                    //if (layer.opacity != undefined && typeof (layer.opacity) === "number") {
                    //    _layer.setOpacity(layer.opacity);
                    //}
                    appConfig.map2.addLayer(_layer);
                } else if (layer.layerType === "ArcGISFeatureLayer") {
                    _layer = new ArcGISFeatureLayer();
                    _layer.createLayer(appConfig.map2, layer, visible);
                }
                else if (layer.layerType === "GeoWFSLayer") {
                    _layer = new GeoWFSLayer();
                    _layer.createLayer(appConfig.map2, layer, visible);
                }
            },
            _setStyle: function () {
                var me = this;
                
                for (var i = 0; i < appConfig.map2.getLayers().array_.length; i++) {
                    var layer = appConfig.map2.getLayers().array_[i];
                    var layer_id = layer.get("id");
                    if (layer_id === this.data.id) {
                        query("[data-value]", this.domNode).forEach(function (dom) {

                            domStyle.set(dom, 'background-image', "url('image/removeLayer.png')");
                            dom.innerHTML = dom.innerHTML.replace('添加', '移除');
                            domAttr.set(dom, 'data-isadd', 'true');
                            me._layer = layer;

                        });
                    }
                }
            }
        });
    });

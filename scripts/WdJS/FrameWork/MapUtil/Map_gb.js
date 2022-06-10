define(['./MapConfig', './ArcGISFeatureLayer', './GeoWFSLayer', 'dojo/on', 'dojo/query', 'dojo/dom-attr', "./GaussKruger", 'FrameWork/BaseMapChange/BaseMapChange', './SuperMapWMTS', './MapFactory', './MapConfig2',"./SuperMapWMS"],
    function (MapConfig, ArcGISFeatureLayer, GeoWFSLayer, on, query, domAttr, GaussKruger, BaseMapChange, SuperMapWMTS, MapFactory, MapConfig2,SuperMapWMS) {
        var util = {
            map: null,
            map2: null,

            _selectSingleClick: null,
            _measureTool: null,
            _locationVector: null,
            _baseMapCount: 0,
            _baseMapArr: [],
            _attr: null,

            _Ellipsoid: {
                name: "CGCS2000",
                semiMajorAxis: 6378137,
                semiMinorAxis: 6356752.3141403561,
                flatRate: 0.00335281068118232
            },
            _L0: 120.666666667,
            _g: null,

            init: function (target, projection) {
                this._createLayers = [];
               
                if (projection !== undefined && projection !== null && projection !== "") {

                    MapConfig.option.view.projection = projection;

                }
                this._g = new GaussKruger();
                
                var _view = new ol.View(MapConfig.option.view);
               
                this.map = new ol.Map({
                    controls: ol.control.defaults({ attribution: false, zoom: false, rotate: false }).extend([  
                    ]),
                    view: _view,
                    target: target

                });

                this.map2 = new ol.Map({
                    controls: ol.control.defaults({ attribution: false, zoom: false, rotate: false }).extend([
                    ]),
                    view: _view,
                    target: "mapDiv2"

                });

                appConfig.map2 = this.map2;

                this.map.addControl(new ol.control.Zoom());

                var mousePosition = new ol.control.MousePosition({
                    coordinateFormat: function (coordinate) {
                        return ol.coordinate.format(coordinate, '{x}&nbsp;&nbsp;{y}', 3);
                    },
                    projection: projection,
                    className: 'custom-mouse-position',
                    target: dojo.byId('coordinateDom'),
                    undefinedHTML: '&nbsp;'

                });

                this.map.addControl(mousePosition);

                //this._selectSingleClick = new ol.interaction.Select();
                //this.map.addInteraction(this._selectSingleClick);
               
                _dragZoom = new ol.interaction.DragZoom({
                    condition: ol.events.condition.always,
                    out: false
                });
                this.map.addInteraction(_dragZoom);
                _dragZoom.setActive(false);

                appConfig.map = this.map;
                setTimeout(function () {
                    this.map.updateSize();
                   
                }.bind(this), 800);
               
                this._bindEvents();

                //this.map.on('precompose', function (evt) {
                //    let ctx = evt.context;
                //    ctx.filter = "grayscale(100%)";
                //}.bind(this));

                //this._loadLayers();
                MapFactory.loadLayers(this.map, MapConfig);
                MapFactory.loadLayers(this.map2, MapConfig2);
                //this._getLocation();
                this._initBaseMapChage();
                //this._initthematicMapTree();
                
            },
            _initBaseMapChage: function () {
                //for (var i = 0; i < MapConfig.layers.length; i++) {
                //    if (MapConfig.layers[i].baseMap && MapConfig.layers[i].logo != undefined && MapConfig.layers[i].logo != null && MapConfig.layers[i].logo!="") {
                //        var _BaseMapChange = new BaseMapChange({ layer: MapConfig.layers[i], index: i, domName: "baseMapChangeSelect",map: this.map2 }).placeAt(dojo.byId('baseMapChange-container'));
                //        _BaseMapChange.startup();
                        
                //        this._baseMapArr.push(_BaseMapChange);
                //    }
                //}
                
                for (var i = 0; i < MapConfig2.layers.length; i++) {
                    if (MapConfig2.layers[i].baseMap && MapConfig2.layers[i].logo != undefined && MapConfig2.layers[i].logo != null && MapConfig2.layers[i].logo != "") {
                        var _BaseMapChange = new BaseMapChange({ layer: MapConfig2.layers[i], index: i, domName: "baseMapChangeSelect", map: this.map2 }).placeAt(dojo.byId('baseMapChange-container'));
                        _BaseMapChange.startup();

                        this._baseMapArr.push(_BaseMapChange);
                    }
                }
            },
            _bindEvents: function () {

                //this.map2.on('precompose', function (evt) {
              
                //});

                on(dojo.byId('isgreyBtn'), 'click', function () {
                    appConfig.isGrey = !appConfig.isGrey;
                    if (this.map2 != null) {
                        for (var i = 0; i < this.map2.getLayers().array_.length; i++) {
                            var _layer = this.map2.getLayers().array_[i];
                            
                            _layer.getSource().refresh()
                         
                        }
                        //this.map2.render();
                    }
                }.bind(this));

                on(dojo.byId('baseMapChange'), 'mouseover', function () {
                   
                    dojo.byId('baseMapChangeContent').style.width = 100 * this._baseMapArr.length + 10 * (this._baseMapArr.length - 1) + "px";
                    dojo.byId('baseMapChangeContent').style.right = '110px';
                    for (var i = 0; i < this._baseMapArr.length; i++) {
                        this._baseMapArr[i].domNode.style.right = (this._baseMapArr.length - 1 - i) * 110 + "px";
                    }
                }.bind(this));

                on(dojo.byId('baseMapChange'), 'mouseout', function () {
                    
                    dojo.byId('baseMapChangeContent').style.width = "100px";
                    dojo.byId('baseMapChangeContent').style.right = '0px';
                    for (var i = 0; i < this._baseMapArr.length; i++) {
                        this._baseMapArr[i].domNode.style.right = "0px";
                    }
                }.bind(this));

                on(dojo.byId("mapDiv"), "click", function (evt) {

                    var isFixed = true;
                    for (var i = 0; i < _catalogs.length; i++) {
                        if (_catalogs[i]._isFixed != undefined) {
                            if (!_catalogs[i]._isFixed) {
                                _catalogs[i].Selected(false);
                                isFixed = false;
                            }
                        }else if(_catalogs[i]._isFixed == undefined){
                            _catalogs[i].Selected(false);
                        }
                    }
                    if (!isFixed) {
                        dojo.byId("legend-siderbar").style.left = '10px';
                        dojo.byId("showTable").style.width = '100%';
                    }



                    //if (this._isFixed == false) {
                    //    evt.stopPropagation();
                    //    domStyle.set(dojo.byId("legend-siderbar"), 'left', '10px');
                    //    this.Selected(false);

                    //} else if (this._isFixed == true) {

                    //    evt.stopPropagation();
                    //    return;
                    //}
                }.bind(this));

                //this._selectSingleClick.on('select', function (evt) {//要素选中事件 
                //    //var features = evt.target.getFeatures().getArray();  
                //    //if (features.length > 0) {
                //    //    var feature = features[0];
                //    //    if (this._attr !== null) {
                //    //        this._attr.destroy();
                //    //        this._attr = null;
                //    //    }
                //    //    this._attr = new Attr({ data: feature }).placeAt(dojo.byId('mapDiv'));
                //    //    this._attr.startup();
                //    //    //var isExist = false;
                //    //    //for (var i = 0; i < AttrConfig.layers.length; i++) {
                //    //    //    if (feature.id_.indexOf(AttrConfig.layers[i].id) >= 0) {
                //    //    //        //this._showAttr(feature, AttrConfig.layers[i]);
                //    //    //        isExist = true;
                //    //    //        break;
                //    //    //    }
                //    //    //}
                //    //    //if (!isExist) {
                //    //    //    //this._showAttr(feature);
                //    //    //}
                       
                //    //}
                //}.bind(this));

                _dragZoom.on('boxend', function (evt) {
                    _dragZoom.setActive(false);
                });

                on(dojo.body(), 'click', function () {
                    query(".menuItemBar").forEach(function (dom) {
                        dom.style.display = 'none';
                    });
                });

                //this.map.on('click', function (evt) {
                //    var _feature = new ol.Feature({
                //        geometry: new ol.geom.Point(evt.coordinate),
                //        type: "point"
                //    });
                //    var layers = this.map.getLayers().array_;
                //    for (var i = layers.length - 1; i >= 0; i--) {
                //        var layer = layers[i].values_;
                //        if (layer.layerType === "SuperMapWMTS" && layer.visible && layer.thematicMap) {
                //            ///用deferredList
                //            layer.SpatialQueryFeatures(_feature).then(function () {

                //            });
                //            break;
                //        }
                //    }

                //}.bind(this));

            },
            _showAttr: function (feature, attrconfig) {
                dojo.byId('attrDiv').innerHTML = "";
                dojo.byId('attrDiv').style.display = 'block';
               
               
                var property = feature.getProperties();
                var _item;
                if (attrconfig) {
                    for (var i = 0; i < attrconfig.field.length; i++) {

                        _item = new AttrItem({ titleString: attrconfig.field[i].alias, type: attrconfig.field[i].type, contentString: property[attrconfig.field[i].name] }).placeAt(dojo.byId('attrDiv'));
                        _item.startup();
                    }
                } else {
                    for (var key in property) {
                        if (key !== 'geometry') {
                            _item = new AttrItem({ titleString: key, contentString: property[key] }).placeAt(dojo.byId('attrDiv'));
                            _item.startup();
                        }
                    }
                }
            },
            _loadLayers: function () {
                for (var i = 0; i < MapConfig.layers.length; i++) {
                    var _layer = MapConfig.layers[i];
                    if (_layer.layerType === "GroupLayer" && _layer.subLayers instanceof Array && _layer.subLayers.length > 0) {
                        this._getsubLayers(_layer.subLayers, _layer);
                    } else {
                        this._createLayer(_layer);
                    }
                }
            },
            _getsubLayers: function (subLayers, config) {
                for (var i = 0; i < subLayers.length; i++) {
                    if (typeof (config.name) === "string") {
                        subLayers[i].groupName = config.name;
                    }
                    if (typeof (config.caption) === "string") {
                        subLayers[i].groupCaption = config.caption;
                    }
                    if (typeof (config.baseMap) === "boolean") {
                        subLayers[i].baseMap = config.baseMap;
                    }
                    if (typeof (config.logo) === "string") {
                        subLayers[i].logo = config.logo;
                    }
                    if (typeof (config.visible) === "boolean") {
                        subLayers[i].visible = config.visible;
                    }
                    if (typeof (config.opacity) === "number") {
                        subLayers[i].opacity = config.opacity;
                    }
                    if (typeof (config.thematicMap) === "boolean") {
                        subLayers[i].thematicMap = config.thematicMap;
                    }
                    this._createLayer(subLayers[i]);
                }
            },
            _createLayer: function (layer) {
                var _layer;
                if (layer.layerType === "TileArcGISRest") {
                    _layer = new ol.layer.Tile({
                        id: layer.id,
                        source: new ol.source.TileArcGISRest({
                            url: layer.url,
                            crossOrigin: 'anonymous'
                        }),
                        visible: layer.visible,
                        name: layer.caption,
                        
                        groupCaption: layer.groupCaption,
                        baseMap: layer.baseMap,
                        thematicMap: layer.thematicMap
                    });
                    
                    this.map.addLayer(_layer);
                }
                else if (layer.layerType === "TileXYZ") {
                    //设置切片的原点

                    var origin = layer.origin;

                    //切片的方案
                    var tileGrid = new ol.tilegrid.TileGrid({
                        tileSize: 256,
                        origin: origin,
                        resolutions: MapConfig.resolutions
                    });

                    _layer = new ol.layer.Tile({
                        id: layer.id,
                        source: new ol.source.TileImage({
                            url: layer.url,
                            crossOrigin: 'anonymous',
                            tileGrid: tileGrid
                        }),
                        
                        visible: layer.visible,
                        name: layer.caption,
                        groupCaption: layer.groupCaption,
                        baseMap: layer.baseMap,
                        thematicMap: layer.thematicMap
                        //opacity: layer.opacity
                    });
                    //if (layer.opacity != undefined && typeof (layer.opacity) === "number") {
                    //    _layer.setOpacity(layer.opacity);
                    //}
                    this.map.addLayer(_layer);
                } else if (layer.layerType === "ArcGISFeatureLayer") {
                    _layer = new ArcGISFeatureLayer();
                    _layer.createLayer(this.map, layer);
                }
                else if (layer.layerType === "GeoWFSLayer") {
                    _layer = new GeoWFSLayer();
                    _layer.createLayer(this.map, layer);
                }
                else if (layer.layerType === "SuperMapWMTS") {
                    _layer = new SuperMapWMTS();
                    _layer.createLayer(this.map, layer);
                }
                else if(layer.layerType === "SuperMapWMS"){
                    debugger
                    _layer = new SuperMapWMS();
                    _layer.createLayer(this.map, layer);
                }
            }
        };
        return util;
    });
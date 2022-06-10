
define(['./ArcGISFeatureLayer', './GeoWFSLayer', './SuperMapWMTS', './ArcgisWMTS',"./SuperMapWMS","./VectorTileSuperMapRest"],
    function (ArcGISFeatureLayer, GeoWFSLayer, SuperMapWMTS, ArcgisWMTS,SuperMapWMS,VectorTileSuperMapRest) {
        var result = {
            
            loadLayers: function (Map,MapConfig) {
                for (var i = 0; i < MapConfig.layers.length; i++) {
                    var _layer = MapConfig.layers[i];
                    if (_layer.layerType === "GroupLayer" && _layer.subLayers instanceof Array && _layer.subLayers.length > 0) {
                        this._getsubLayers(_layer.subLayers, _layer, MapConfig, Map);
                    } else {
                        this._createLayer(_layer, MapConfig, Map);
                    }
                }
            },
            _getsubLayers: function (subLayers, config, MapConfig, Map) {
                
                for (var i = 0; i < subLayers.length; i++) {
                    var _layer = subLayers[i];
                    if (_layer.layerType === "GroupLayer" && _layer.subLayers instanceof Array && _layer.subLayers.length > 0) {
                        this._getsubLayers(_layer.subLayers, _layer, MapConfig, Map);
                    } else {

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
                        this._createLayer(subLayers[i], MapConfig, Map);
                    }
                }
                
            },
            _createLayer: function (layer, MapConfig, Map) {
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

                    Map.addLayer(_layer);
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
                    Map.addLayer(_layer);
                } else if (layer.layerType === "ArcgisXYZ") {
                    //设置切片的原点
                    debugger
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
                            url: layer.mapUrl,
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
                    Map.addLayer(_layer);
                }else if (layer.layerType === "ArcGISFeatureLayer") {
                    _layer = new ArcGISFeatureLayer();
                    _layer.createLayer(Map, layer);
                }
                else if (layer.layerType === "GeoWFSLayer") {
                    _layer = new GeoWFSLayer();
                    _layer.createLayer(Map, layer);
                }
                else if (layer.layerType === "SuperMapWMTS") {
                    _layer = new SuperMapWMTS();
                    _layer.createLayer(Map, layer);
                } else if (layer.layerType === "ArcgisWMTS") {
                    _layer = new ArcgisWMTS();
                    _layer.createLayer(Map, layer);
                }else if(layer.layerType === "SuperMapWMS"){
                    _layer = new SuperMapWMS();
                    _layer.createLayer(Map, layer);
                }else if(layer.layerType === "VectorTileSuperMapRest"){
                    _layer= new VectorTileSuperMapRest();
                    _layer.createLayer(Map, layer);

                }
            }
        };
        return result;
    });

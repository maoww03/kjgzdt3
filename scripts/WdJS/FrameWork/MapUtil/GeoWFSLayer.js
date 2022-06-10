define(["dojo/_base/declare", "dojo/Deferred",'./Symbol'],
    function (declare, Deferred, Symbol) {
        return declare("MapUtil.GeoWFSLayer", null, {
            _map: null,
            _layer: null,
            _styleFunction: null,
            _style: null,
            _url: null,
            _defaultFillStyle: {
                fill: {
                    color: "rgba(255, 255, 255, 0.6)"
                },//填充色使用英文颜色或者rgba
                outline: {
                    color: "rgba(110, 110, 110, 1)",//线的填充色 可以使用英文颜色或者rgba
                    width: "0.4"
                }
            },
            createLayer: function (map, config) {
                this._map = map;
                this._url = config.url;
                var vectorSource = new ol.source.Vector({
                    format: new ol.format.GeoJSON(),
                    url: function (extent) {
                        return config.url +'&srsname=EPSG:200000&' +
                            'bbox=' + extent.join(',') + ',EPSG:200000';
                    },
                    strategy: ol.loadingstrategy.tile(ol.tilegrid.createXYZ({
                        tileSize: 256
                    }))
                });
                this._layer = new ol.layer.Vector({
                    source: vectorSource,
                    visible: config.visible,
                    id: config.id,
                    name: config.caption,
                    SpatialQueryFeatures: this._SpatialQueryFeatures.bind(this),
                    SqlQueryFeatures: this._SqlQueryFeatures.bind(this),
                    groupCaption: config.groupCaption,
                    baseMap: config.baseMap,
                    thematicMap: config.thematicMap
                });
                if (config.opacity != undefined && typeof (config.opacity) === "number") {
                    this._layer.setOpacity(config.opacity);
                }
                if (visible) {
                    this._layer.setVisible(visible);
                }
                if (config.rendererType === "Simplerenderer") {//简单渲染
                    if (config.style.type === "Icon") {
                        this._style = Symbol.setIconSymbol(config.style);
                        this._layer.setStyle(this._style);
                    }
                    else if (config.style.type === "Fill") {
                        this._style = Symbol.setFillSymbol(config.style);
                        this._layer.setStyle(this._style);
                    }
                } else if (config.rendererType === "Complexrenderer") {//复杂渲染
                    this._styleFunction = function (feature) {
                        var _attr = feature.get(config.style.filed);
                        var bool = false;
                        for (var i = 0; i < config.style.styles.length; i++) {
                            if (config.style.styles[i].value === _attr) {
                                if (config.style.styles[i].type == "Icon") {
                                    return Symbol.setIconSymbol(config.style.styles[i]);
                                }
                                else if (config.style.styles[i].type === "Fill") {
                                    return Symbol.setFillSymbol(config.style.styles[i], feature); 
                                }
                            }
                        }
                        if (!bool) {
                            return Symbol.setFillSymbol(this._defaultFillStyle);
                        }
                    }.bind(this);
                    this._layer.setStyle(this._styleFunction);
                }

                this._map.addLayer(this._layer);
            },
            _SpatialQueryFeatures: function (feature,filter) {//空间相交查询
                var _this = this;
                var def = new Deferred();
                
                var _filter = "intersects(shape,";
                if (feature.get("type") === "polygon") {

                    var coordinates = feature.get("geometry").flatCoordinates;
                    _filter += "POLYGON((";
                    for (var i = 0; i < coordinates.length; i = i + 2) {

                        if (i !== 0) {
                            _filter += "," + coordinates[i] + " " + coordinates[i + 1];
                        } else {
                            _filter += coordinates[i] + " " + coordinates[i + 1];
                        }
                    }
                    
                        _filter += "," + coordinates[0] + " " + coordinates[1];
                    
                    _filter += ")))";
                }
                else if (feature.get("type") === "rectangle") {

                    var coordinates = feature.get("geometry").flatCoordinates;
                    _filter += "POLYGON((";
                    for (var i = 0; i < coordinates.length; i = i + 2) {

                        if (i !== 0) {
                            _filter += "," + coordinates[i] + " " + coordinates[i + 1];
                        } else {
                            _filter += coordinates[i] + " " + coordinates[i + 1];
                        }
                    }

                    _filter += "," + coordinates[0] + " " + coordinates[1];

                    _filter += ")))";
                }
                else if (feature.get("type") === "polyline") {  //待验证  
                    _filter += "LINESTRING(";
                    for (var i = 0; i < coordinates.length; i = i + 2) {
                        if (i !== 0) {
                            _filter += "," + coordinates[i] + " " + coordinates[i + 1];
                        } else {
                            _filter += coordinates[i] + " " + coordinates[i + 1];
                        }
                    }
                    _filter += "))";
                }
                else if (feature.get("type") === "point") {//待验证  
                    _filter += "POINT(" + coordinates[0] + " " + coordinates[1] + ")";
                }  
                var url = this._url;
                $.ajax({
                    url: url,
                    dataType: "json",
                    method: "POST",
                    data: "cql_filter=" + _filter,
                    success: function (data) {
                        def.resolve(data);
                    }
                });
                return def.promise;
            },
            _SqlQueryFeatures: function (where) {
                //详见https://blog.csdn.net/gisshixisheng/article/details/52159277;
                var def = new Deferred();
                var url = this._url;
                url = url + "&cql_filter=" + where;
                $.ajax({
                    url: url,
                    contentType: 'application/json; charset=UTF-8',
                    dataType: "json",
                    method: "GET",
                    success: function (data) {
                        def.resolve(data);
                    }
                });
                return def.promise;
            }

        });
    });
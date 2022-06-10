define(["dojo/_base/declare", "dojo/Deferred", "dojo/json", "./Symbol"],
    function (declare, Deferred, JSON, Symbol) {
        return declare("MapUtil.ArcGISFeatureLayer", null, {
            _map: null,
            _layer: null,
            _styleFunction: null,
            _style: null,
            _url: null,
            _definitionExpression: null,
            _id: null,

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
                var _this = this;
                this._map = map;
                var esrijsonFormat = new ol.format.EsriJSON();
                this._url = config.mapUrl;
                this._definitionExpression = config.definitionExpression;
                this._id = config.id;
                var vectorSource = new ol.source.Vector({
                    loader: function (extent, resolution, projection) {
                        var url = config.mapUrl + '/query/?f=json&' +
                            'returnGeometry=true&spatialRel=esriSpatialRelIntersects&geometry=' +
                            encodeURIComponent('{"xmin":' + extent[0] + ',"ymin":' +
                                extent[1] + ',"xmax":' + extent[2] + ',"ymax":' + extent[3] +
                                ',"spatialReference":{' + appConfig.arcgis_wkt + '}}') +
                            '&geometryType=esriGeometryEnvelope&inSR=4549&outFields=*' +
                            '&outSR=4549&where=' + encodeURIComponent((config.definitionExpression || "1>0"));
                        if (config.token != undefined && config.token != null && config.token != "") {

                            url += "&token=" + config.token;
                        }
                        $.ajax({
                            url: url, dataType: 'jsonp', success: function (response) {
                                if (response.error) {
                                    //alert(response.error.message + '\n' +
                                    //    response.error.details.join('\n'));
                                } else {  
                                    var features = esrijsonFormat.readFeatures(response, {
                                        featureProjection: projection
                                    });
                                    if (features.length > 0) {  
                                        for (var i = 0; i < features.length; i++) {
                                            features[i].setId(_this._id + "." + features[i].ol_uid);
                                        }
                                        vectorSource.addFeatures(features);
                                    }
                                }
                            }
                        });
                    },
                    strategy: ol.loadingstrategy.tile(ol.tilegrid.createXYZ({
                        tileSize: 512
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
                $.ajax({
                    url: config.mapUrl+"?f=json", dataType: 'jsonp', success: function (response) {
                        if (response.error) {
                            //alert(response.error.message + '\n' +
                            //    response.error.details.join('\n'));
                        } else {
                            
                            if (response.maxScale !== response.minScale) {
                                
                                if (response.maxScale != 0) {
                                    this._layer.setMinResolution(96 / (1 / response.maxScale * 1.0));
                                }
                                if (response.minScale != 0) {
                                    this._layer.setMaxResolution(96 / (1 / response.minScale * 1.0));
                                }
                               
                            }
                            if (response.geometryType === "esriGeometryPolyline") {
                                if (response.drawingInfo.renderer.type === "uniqueValue") {
                                    this.setLineUniqueValue(response.drawingInfo.renderer);
                                } else if (response.drawingInfo.renderer.type === "simple") {
                                    this._layer.setStyle(Symbol.setArcGisLineSymbol(response.drawingInfo.renderer.symbol));
                                }
                            } else if (response.geometryType === "esriGeometryPoint") {
                                if (response.drawingInfo.renderer.type === "uniqueValue") {
                                    this.setPointUniqueValue(config.mapUrl, response.drawingInfo.renderer);
                                } else if (response.drawingInfo.renderer.type === "simple") {
                                    this._layer.setStyle(Symbol.setArcGisPointSymbol(config.mapUrl, response.drawingInfo.renderer.symbol));
                                }
                            }
                            else if (response.geometryType === "esriGeometryPolygon") {
                                if (response.drawingInfo.renderer.type === "uniqueValue") {
                                    this.setPolygonUniqueValue(response.drawingInfo.renderer);
                                } else if (response.drawingInfo.renderer.type === "simple") {
                                    this._layer.setStyle(Symbol.setArcGisPolygonSymbol(response.drawingInfo.renderer.symbol));
                                }
                            }
                        }
                    }.bind(this)
                });
                //if (config.rendererType === "Simplerenderer") {//简单渲染
                //    if (config.style.type === "Icon") {
                //        this._style = Symbol.setIconSymbol(config.style);
                //        this._layer.setStyle(this._style);
                //    }
                //    else if (config.style.type === "Fill") {
                //        this._style = Symbol.setFillSymbol(config.style);
                //        this._layer.setStyle(this._style);
                //    }
                //}
                //else if (config.rendererType === "Complexrenderer") {//复杂渲染
                //    this._styleFunction = function (feature) {
                //        var _attr = feature.get(config.style.filed);
                //        var bool = false;
                //        for (var i = 0; i < config.style.styles.length; i++) {
                //            if (config.style.styles[i].value === _attr) {
                //                if (config.style.styles[i].type == "Icon") {
                //                    return Symbol.setIconSymbol(config.style.styles[i]);
                //                }
                //                else if (config.style.styles[i].type === "Fill") {
                //                    return Symbol.setFillSymbol(config.style.styles[i], feature);
                //                }
                //            }
                //        }
                //        if (!bool) {
                //            return Symbol.setFillSymbol(this._defaultFillStyle);
                //        }
                //    }.bind(this);
                //    this._layer.setStyle(this._styleFunction);
                //}
                this._map.addLayer(this._layer);
            },
            setLineUniqueValue: function (renderer) {
                this._styleFunction = function (feature) {
                   
                    var _attr = feature.get(renderer.field1);
                    var bool = false;
                    for (var i = 0; i < renderer.uniqueValueInfos.length; i++) {
                        if (renderer.uniqueValueInfos[i].value === _attr) {
                            bool = true;
                            return Symbol.setArcGisLineSymbol(renderer.uniqueValueInfos[i].symbol);
                            
                        }
                    }
                    if (!bool) {
                        return Symbol.setArcGisLineSymbol(renderer.defaultSymbol);
                    }
                }.bind(this);
                this._layer.setStyle(this._styleFunction);
            }, 
            setPointUniqueValue: function (url,renderer) {
                this._styleFunction = function (feature) {

                    var _attr = feature.get(renderer.field1);
                    var bool = false;
                    for (var i = 0; i < renderer.uniqueValueInfos.length; i++) {
                        if (renderer.uniqueValueInfos[i].value === _attr) {
                            bool = true;
                            return Symbol.setArcGisPointSymbol(url,renderer.uniqueValueInfos[i].symbol);

                        }
                    }
                    if (!bool) {
                        return Symbol.setArcGisPointSymbol(url,renderer.defaultSymbol);
                    }
                }.bind(this);
                this._layer.setStyle(this._styleFunction);
            },
            setPolygonUniqueValue: function (renderer) {
                this._styleFunction = function (feature) {

                    var _attr = feature.get(renderer.field1);
                    var bool = false;
                    for (var i = 0; i < renderer.uniqueValueInfos.length; i++) {
                        if (renderer.uniqueValueInfos[i].value === _attr) {
                            bool = true;
                            return Symbol.setArcGisPolygonSymbol(renderer.uniqueValueInfos[i].symbol);

                        }
                    }
                    if (!bool) {
                        return Symbol.setArcGisPolygonSymbol(renderer.defaultSymbol);
                    }
                }.bind(this);
                this._layer.setStyle(this._styleFunction);
            },
            _SpatialQueryFeatures: function (feature, filter) {//空间相交查询
                var _this = this;
                var def = new Deferred();
                var _geometry = null;
                var url = this._url;
                if (feature.get("type") === "polygon" || feature.get("type") === "rectangle") {
                    var coordinates = feature.get("geometry").flatCoordinates;
                    _geometry = {
                        "rings": [[]], "spatialReference": { "wkt": appConfig.arcgis_wkt }
                    };
                    for (var i = 0; i < coordinates.length; i = i + 2) {
                        _geometry.rings[0].push([coordinates[i], coordinates[i + 1]]);
                    }
                    _geometry.rings[0].push([coordinates[0], coordinates[1]]);
                    _geometry = JSON.stringify(_geometry);

                } else if (feature.get("type") === "polyline") {  //待验证   
                    var coordinates = feature.get("geometry").flatCoordinates;
                    _geometry = { "paths": [[]], "spatialReference": { "wkt": appConfig.arcgis_wkt } };
                    for (var i = 0; i < coordinates.length; i = i + 2) {
                        _geometry.paths[0].push([coordinates[i], coordinates[i + 1]]);
                    }
                    _geometry = JSON.stringify(_geometry);

                } else if (feature.get("type") === "point") {//待验证 
                    var coordinates = feature.get("geometry").flatCoordinates;
                    _geometry = { "x": coordinates[0], "y": coordinates[1], "spatialReference": { "wkt": appConfig.arcgis_wkt } };
                }
                
                if (_geometry != null) {
                    url = url + "/query/";
                    var _data = {
                        geometry: _geometry, f: "json", returnGeometry: true, spatialRel: "esriSpatialRelIntersects",
                        geometryType: "esriGeometryPolygon", inSR: appConfig.arcgis_wkt, outFields: '*', outSR: appConfig.arcgis_wkt
                    }
                    if (filter != undefined && filter != null && filter != "") {
                        if (this._definitionExpression != undefined && this._definitionExpression != null && this._definitionExpression != "") {
                            _data.where = this._definitionExpression + " and (" + encodeURIComponent(filter) + ")";
                           
                        } else {
                            _data.where = encodeURIComponent(filter);
                           
                        }
                    }
                    $.ajax({
                        url: url, method: "POST",
                        dataType: "json",
                        data: _data,
                        success: function (response) {
                            if (!response.error) {

                                def.resolve(response);
                            }
                        }
                    });
                }
                else {
                    def.resolve("请检查传递的图形是否正确");  
                }
                return def.promise;
            },
            _SqlQueryFeatures: function (where) {
                var def = new Deferred();
                var url = this._url;
                if (where != undefined && where != null && where != "") {
                    if (this._definitionExpression != undefined && this._definitionExpression != null && this._definitionExpression != "") {
                        url = url + '/query/?f=json&where=' + this._definitionExpression + " and (" + encodeURIComponent(where) + ")" + '&outFields=*';
                    } else {
                        url = url + '/query/?f=json&where=' + encodeURIComponent(where) + '&outFields=*';
                    }
                }
                
                $.ajax({
                    url: url, dataType: 'jsonp', success: function (response) {
                        if (response.error) {
                            alert(response.error.message + '\n' +
                                response.error.details.join('\n'));
                        } else {
                            def.resolve(response);
                        }
                    }
                });
                return def.promise;
            }
        });
    });
define(["dojo/_base/declare", "dojo/Deferred"],
    function (declare, Deferred) {
        return declare("MapUtil.SuperMapWMTS", null, {
            _map: null,
            _layer: null,
            _query: null,

            createLayer: function (map, config) {
                this._map = map;
                this._url = config.mapUrl;
                this._query = config.queryUrl;

                //var vectorSource = new ol.source.WMTS({
                //    url: this._url,
                //    layer: config.layer,
                //    matrixSet: config.matrixSet,
                //    format: 'image/png',
                //    tileGrid: new ol.tilegrid.WMTS({
                //        origin: config.origin,
                //        extent: config.extent,
                //        resolutions: config.resolutions,
                //        matrixIds: config.matrixIds
                //    }),
                //    style: 'default'
                //});
                //this._layer = new ol.layer.Tile({
                //    source: vectorSource,
                //    visible: config.visible,
                //    id: config.id,
                //    name: config.caption,
                //    SpatialQueryFeatures: this._SpatialQueryFeatures.bind(this),
                //    groupCaption: config.groupCaption,
                //    baseMap: config.baseMap,
                //    thematicMap: true,
                //    layerType: "SuperMapWMTS",
                //    queryUrl: config.queryUrl
                //});
                //if (config.opacity != undefined && typeof (config.opacity) === "number") {
                //    this._layer.setOpacity(config.opacity);
                //}

                //if (config.opacity != undefined && typeof (config.opacity) === "number") {
                //    this._layer.setOpacity(config.opacity);
                //}
                //if (config.minResolution !== undefined && typeof (config.minResolution) === "number") {

                //    this._layer.setMinResolution(config.minResolution);
                //}
                //if (config.maxResolution !== undefined && typeof (config.maxResolution) === "number") {

                //    this._layer.setMaxResolution(config.maxResolution);
                //}

                //this._map.addLayer(this._layer);

                this._getXmlNode(config);

            },
            _SpatialQueryFeatures: function (feature) {//空间相交查询

                var _this = this;

                var coordinates = feature.get("geometry").flatCoordinates;
                var def = new Deferred();




                var _filter = ' (<Filter xmlns="http://www.opengis.net/ogc" xmlns:gml="http://www.opengis.net/gml"><ogc:Intersects xmlns:ogc="http://www.opengis.net/ogc"> <ogc:PropertyName>the_geom</ogc:PropertyName>';

                if (feature.get("type") === "polygon") {
                    _filter += "<gml:Polygon>";
                    _filter += "<gml:outerBoundaryIs>";
                    _filter += "<gml:LinearRing>";
                    _filter += "<gml:coordinates>";
                    for (var i = 0; i < coordinates.length; i = i + 2) {

                        if (i !== 0) {
                            _filter += " " + coordinates[i] + "," + coordinates[i + 1];
                        } else {
                            _filter += coordinates[i] + "," + coordinates[i + 1];
                        }
                    }
                    _filter += " " + coordinates[0] + "," + coordinates[1];
                    _filter += "</gml:coordinates>";
                    _filter += "</gml:LinearRing>";
                    _filter += "</gml:outerBoundaryIs>";

                    _filter += "</gml:Polygon>";
                }
                else if (feature.get("type") === "rectangle") {
                    _filter += "<gml:Polygon>";
                    _filter += "<gml:outerBoundaryIs>";
                    _filter += "<gml:LinearRing>";
                    _filter += "<gml:coordinates>";
                    for (var i = 0; i < coordinates.length; i = i + 2) {

                        if (i !== 0) {
                            _filter += " " + coordinates[i] + "," + coordinates[i + 1];
                        } else {
                            _filter += coordinates[i] + "," + coordinates[i + 1];
                        }
                    }
                    _filter += " " + coordinates[0] + "," + coordinates[1];
                    _filter += "</gml:coordinates>";
                    _filter += "</gml:LinearRing>";
                    _filter += "</gml:outerBoundaryIs>";

                    _filter += "</gml:Polygon>";
                }
                else if (feature.get("type") === "polyline") {  //待验证  

                    _filter += "<gml:LineString>";
                    _filter += "<gml:coordinates>";
                    for (var i = 0; i < coordinates.length; i = i + 2) {
                        if (i !== 0) {
                            _filter += " " + coordinates[i] + "," + coordinates[i + 1];
                        } else {
                            _filter += coordinates[i] + "," + coordinates[i + 1];
                        }
                    }
                    _filter += "</gml:coordinates>";
                    _filter += "</gml:LineString>";
                }
                else if (feature.get("type") === "point" || feature.get("type") === "Point") {//待验证  
                    
                    // 2021-11-12
                    var  aa=this._map.getView().getZoom()
                    var buff=10;
                    if(aa>=7){
                        buff=90/(aa*aa);
                    }else if(aa>=3 && aa<7){
                        buff=130/aa;
                    }else if(aa>=3 && aa<5){
                        buff=200/aa;
                    }else if(aa>=0 && aa<3){
                        buff=500;
                    }
                    // 2021-11-12
                    // if(aa>=0  && aa <= 1.8 ){
                    //     buff=800;
                    // } else if(aa > 1.8  && aa <= 4 ){
                    //     buff=400;
                    // }else if(aa > 4  && aa <= 6 ){
                    //     buff=100;
                    // }

                    var x1 = buff + coordinates[0];
                    var x2 = coordinates[0] - buff;
                    var y1 = buff + coordinates[1];
                    var y2 = coordinates[1] - buff;

                    _filter += "<gml:Polygon>";
                    _filter += "<gml:outerBoundaryIs>";
                    _filter += "<gml:LinearRing>";
                    _filter += "<gml:coordinates>";

                    _filter += " " + x1 + "," + y1;
                    _filter += " " + x2 + "," + y1;
                    _filter += " " + x2 + "," + y2;
                    _filter += " " + x1 + "," + y2;
                    _filter += " " + x1 + "," + y1;
                    _filter += "</gml:coordinates>";
                    _filter += "</gml:LinearRing>";
                    _filter += "</gml:outerBoundaryIs>";

                    _filter += "</gml:Polygon>";
                }

                _filter += '</ogc:Intersects ></Filter>)';


                $.ajax({
                    url: this._query + "&Filter=" + _filter,
                    method: "GET",
					// beforeSend: function (XMLHttpRequest) {
                        // XMLHttpRequest.setRequestHeader("Authorization", appConfig.access_token);
                    // },
                    //data: { Filter: __filter },
                    //contentType: 'text/plain;charset=UTF-8',
                    //traditional: true, 
                    success: function (data) {

                        var gml = new SuperMap.Format.GML().read(data);
                        var geoJsonString = new SuperMap.Format.GeoJSON().write(gml, false);
                        data = JSON.parse(geoJsonString);
                        def.resolve(data);
                    },
                    error:function (err) {
                        showLoading(false);
                    },
                    timeout: function (t) {
                        showLoading(false);
                    },
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
            },
            _getXmlNode: function (config) {
                var me = this;
                //var xmlUrl = "http://192.168.1.131:8090/iserver/services/map-jgch/wmts100";

                var xmlhttp = null;
                if (window.ActiveXObject) {
                    xmlhttp = new ActiveXObject('Msxml2.DOMDocument');
                }
                else if (document.implementation && document.implementation.createDocument) {
                    xmlhttp = new window.XMLHttpRequest();
                }
                else { console.log("加载" + config.caption + "服务失败！"); return; }

                xmlhttp.open('GET', config.mapUrl, true);
                xmlhttp.send(null);
                xmlhttp.onreadystatechange = function () {
                    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                        me._processXML(xmlhttp.responseXML.documentElement, config);
                    }
                    //else {
                    //    console.log("加载" + config.caption + "服务失败！");
                    //}
                }


            },
            _processXML: function (xmlDoc, config) {
                if (xmlDoc != null) {
                    try {
                        var Layer = xmlDoc.getElementsByTagName("Contents")[0].getElementsByTagName("Layer");
                        var _layer = Layer[0].getElementsByTagName("ows:Title")[0].textContent;
                        var _matrixSet = "Custom_" + _layer;
                        var BoundingBox = Layer[0].getElementsByTagName("ows:BoundingBox")[0];
                        var LowerCorner = BoundingBox.getElementsByTagName("ows:LowerCorner")[0].textContent;
                        var UpperCorner = BoundingBox.getElementsByTagName("ows:UpperCorner")[0].textContent;
                        var extent = [LowerCorner.split(' ')[0] * 1, LowerCorner.split(' ')[1] * 1, UpperCorner.split(' ')[0] * 1, UpperCorner.split(' ')[1] * 1];
                        var origin = [LowerCorner.split(' ')[0] * 1, UpperCorner.split(' ')[1] * 1];
                        var TileMatrixSet = xmlDoc.getElementsByTagName("Contents")[0].getElementsByTagName("TileMatrixSet")[xmlDoc.getElementsByTagName("Contents")[0].getElementsByTagName("TileMatrixSetLink").length];
                        var TileMatrix = TileMatrixSet.getElementsByTagName("TileMatrix");
                        var resolutions = [];
                        var matrixIds = [];
                        var dpi = TileMatrixSet.innerHTML.split("is ")[1].split(',')[0] * 1;
                        for (var i = 0; i < TileMatrix.length; i++) {
                            matrixIds.push(TileMatrix[i].getElementsByTagName("ows:Identifier")[0].textContent * 1);
                            var scale = TileMatrix[i].getElementsByTagName("ScaleDenominator")[0].textContent * 1;
                            resolutions.push(0.0254 / dpi * scale);
                        }

                        
                        // wgs84坐标系
                        // var Layer = xmlDoc.getElementsByTagName("Contents")[0].getElementsByTagName("Layer");
                        // var _layer = Layer[0].getElementsByTagName("ows:Title")[0].textContent;
                        // var _matrixSet = "Custom_" + _layer;
                        // var BoundingBox = Layer[0].getElementsByTagName("ows:WGS84BoundingBox")[0];
                        // var LowerCorner = BoundingBox.getElementsByTagName("ows:LowerCorner")[0].textContent;
                        // var UpperCorner = BoundingBox.getElementsByTagName("ows:UpperCorner")[0].textContent;
                        // var extent = [LowerCorner.split(' ')[0] * 1, LowerCorner.split(' ')[1] * 1, UpperCorner.split(' ')[0] * 1, UpperCorner.split(' ')[1] * 1];
                        // var origin = [LowerCorner.split(' ')[0] * 1, UpperCorner.split(' ')[1] * 1];
                        // var TileMatrixSet = xmlDoc.getElementsByTagName("Contents")[0].getElementsByTagName("TileMatrixSet")[xmlDoc.getElementsByTagName("Contents")[0].getElementsByTagName("TileMatrixSetLink").length+1];
                        // var TileMatrix = TileMatrixSet.getElementsByTagName("TileMatrix");
                        // var resolutions = [];
                        // var matrixIds = [];
                        // var dpi = TileMatrixSet.innerHTML.split("assumes ")[1].split('mm')[0] * 1;
                        // for (var i = 0; i < TileMatrix.length; i++) {
                        //     matrixIds.push(TileMatrix[i].getElementsByTagName("ows:Identifier")[0].textContent * 1);
                        //     var scale = TileMatrix[i].getElementsByTagName("ScaleDenominator")[0].textContent * 1;
                        //     resolutions.push(0.0254 / dpi * scale);
                        // }

                        var vectorSource = new ol.source.WMTS({
                            url: this._url,
                            layer: _layer,
                            matrixSet: _matrixSet,
                            format: 'image/png',
							crossOrigin:"anonymous",
                            tileGrid: new ol.tilegrid.WMTS({
                                origin: origin,
                                extent: extent,
                                resolutions: resolutions,
                                matrixIds: matrixIds
                            }),
                            style: 'default'
                        });
                        this._layer = new ol.layer.Tile({
                            source: vectorSource,
                            visible: config.visible,
                            id: config.id,
                            name: config.caption,
                            SpatialQueryFeatures: this._SpatialQueryFeatures.bind(this),
                            groupCaption: config.groupCaption,
                            baseMap: config.baseMap,
                            thematicMap: true,
                            layerType: "SuperMapWMTS",
                            queryUrl: config.queryUrl
                        });
                        if (config.opacity != undefined && typeof (config.opacity) === "number") {
                            this._layer.setOpacity(config.opacity);
                        }

                        if (config.opacity != undefined && typeof (config.opacity) === "number") {
                            this._layer.setOpacity(config.opacity);
                        }
                        if (config.minResolution !== undefined && typeof (config.minResolution) === "number") {

                            this._layer.setMinResolution(config.minResolution);
                        }
                        if (config.maxResolution !== undefined && typeof (config.maxResolution) === "number") {

                            this._layer.setMaxResolution(config.maxResolution);
                        }

                        this._map.addLayer(this._layer);
                    } catch (ex) {
                        console.log("加载" + config.caption + "服务失败！" + ex);
                    }
                } else {
                    console.log("加载" + config.caption + "服务失败！");
                }

            }

        });
    });
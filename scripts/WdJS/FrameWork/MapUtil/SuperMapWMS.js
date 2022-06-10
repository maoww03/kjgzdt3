define(["dojo/_base/declare", "dojo/Deferred"],
    function (declare, Deferred) {
        return declare("MapUtil.SuperMapWMS", null, {
            _map: null,
            _layer: null,
            _query: null,

            createLayer: function (map, config) {
                debugger
                this._map = map;
                this._url = config.mapUrl;
                this._query = config.queryUrl;
                this._getXmlNode(config);
            },
            _SpatialQueryFeatures: function (feature) {//空间相交查询

                var _this = this;
                debugger
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
                    debugger
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
            },
            // 1-加载成功
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
            // 2-加载图层
            _processXML: function (xmlDoc, config) {
                if (xmlDoc != null) {
                    try {
                        debugger
                        var Layer = xmlDoc.getElementsByTagName("Capability")[0].getElementsByTagName("Layer");
                        var _layer = Layer[0].getElementsByTagName("Title")[0].textContent;
                        var params_LAYERS = "" + _layer;
                        var BoundingBox = Layer[0].getElementsByTagName("BoundingBox")[0];
                        var LowerCorner=BoundingBox.getAttribute("minx");
                        var UpperCorner=BoundingBox.getAttribute("maxx");
                        var extent = [LowerCorner.split(' ')[0] * 1, LowerCorner.split(' ')[1] * 1, UpperCorner.split(' ')[0] * 1, UpperCorner.split(' ')[1] * 1];
                        var origin = [LowerCorner.split(' ')[0] * 1, UpperCorner.split(' ')[1] * 1];
                        // var TileMatrixSet = Layer.getElementsByTagName("TileMatrixSet")[Layer.getElementsByTagName("TileMatrixSetLink").length];


                        this._layer = new ol.layer.Tile({
                            id: config.id,
                            source: new ol.source.TileWMS({
                                crossOrigin: 'anonymous',
                                url: config.mapUrl,
                                params: {
                                    'LAYERS': params_LAYERS,
                                    'FORMAT': 'image/png'
                                }
                            }),
                            name: config.caption,
                            groupCaption: config.groupCaption,
                            baseMap: config.baseMap,
                            thematicMap: config.thematicMap,
                            layerType: "SuperMapWMS",
                            visible: config.visible,
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
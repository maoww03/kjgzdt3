define(["dojo/_base/declare", "dojo/Deferred"],
    function (declare, Deferred) {
        return declare("MapUtil.VectorTileSuperMapRest", null, {
            _map: null,
            _layer: null,
            _query: null,

            createLayer: function (map, config) {
                var me = this;
                this._map = map;
                this._url = config.mapUrl;
                this._query = config.queryUrl;
                //var format = new ;
                var style = new ol.supermap.MapboxStyles({
                    style: config.mapUrl,
                     //map: this._map
                });
                style.on('styleloaded', function () {
                    this._layer = new ol.layer.VectorTile({
                        //declutter: true,
                        layerType: "VectorTileSuperMapRest",
                        visible: config.visible,
                        
                        id: config.id,
                        name: config.caption,
                        //renderBuffer: 16,
                        renderMode: 'hybrid',
                        SpatialQueryFeatures: this._SpatialQueryFeatures.bind(this),
                        groupCaption: config.groupCaption,
                        baseMap: config.baseMap,
                        thematicMap: true,
                        queryUrl: config.queryUrl,
                        //preload:1,
                        source: new ol.source.VectorTileSuperMapRest({
                            style: config.mapUrl,
                            projection: projection_4549,
                            format: new ol.format.MVT()
                        }),
                        style: style.getStyleFunction()
                    });
                    this._map.addLayer(this._layer);
                    
                    if (config.minZoom != undefined && typeof (config.minZoom) === "number") {
                        this._layer.setMinZoom(config.minZoom);
                    }
                    if (config.maxZoom != undefined && typeof (config.maxZoom) === "number") {
                        this._layer.setMaxZoom(config.maxZoom);
                    }
                    if (config.minResolution !== undefined && typeof (config.minResolution) === "number") {

                        this._layer.setMinResolution(config.minResolution);
                    }
                    if (config.maxResolution !== undefined && typeof (config.maxResolution) === "number") {

                        this._layer.setMaxResolution(config.maxResolution);
                    }
                    

                }.bind(this));
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
            }

        });
    });
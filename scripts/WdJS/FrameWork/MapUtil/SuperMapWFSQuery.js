define(["dojo/Deferred"],
    function (Deferred) {
        var util = {
            SpatialQuery: function (url, feature) {
                var def = new Deferred();
                var coordinates = feature.get("geometry").flatCoordinates;
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
                else if (feature.get("type") === "polyline") {  //?????????  
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
                else if (feature.get("type") === "point" || feature.get("type") === "Point") {//?????????  
                    //_filter += "<gml:Point>";
                    //_filter += "<gml:coordinates>" + coordinates[0] + "," + coordinates[1] + "</gml:coordinates>";
                    //_filter += "</gml:Point>";
                    var  aa=this._map.getView().getZoom()
                    var buff=20;
                    
                    if(aa>=0  && aa <= 1.8 ){
                        buff=800;
                    } else if(aa > 1.8  && aa <= 4 ){
                        buff=400;
                    }else if(aa > 4  && aa <= 6 ){
                        buff=100;
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
                    url: url + "&Filter=" + _filter,
                    method: "GET",
                    success: function (data) {

                        var gml = new SuperMap.Format.GML().read(data);
                        var geoJsonString = new SuperMap.Format.GeoJSON().write(gml, false);
                        data = JSON.parse(geoJsonString);
                        def.resolve(data);
                    },
                    error: function (err) {
                        def.reject(err);
                    }
                });
                return def.promise;
            },
            FilterQuery: function (url, filter) {//????????????
                var def = new Deferred();
                var _filter = "<Filter>" + this._generate(filter) + "</Filter>";
                $.ajax({
                    url: url + "&filter=" + _filter,
                    method: "GET",
                    //data: "filter=" + _filter,
                    success: function (data) {

                        var gml = new SuperMap.Format.GML().read(data);
                        var geoJsonString = new SuperMap.Format.GeoJSON().write(gml, false);
                        data = JSON.parse(geoJsonString);
                        def.resolve(data);
                    },
                    error: function (err) {
                        def.reject(err);
                    }
                });
                return def.promise;
               

            }, 
            GetAll: function (url) {//????????????
                var def = new Deferred();
                $.ajax({
                    url: url,
                    method: "GET",
                    success: function (data) {

                        var gml = new SuperMap.Format.GML().read(data);
                        var geoJsonString = new SuperMap.Format.GeoJSON().write(gml, false);
                        data = JSON.parse(geoJsonString);
                        def.resolve(data);
                    },
                    error: function (err) {
                        def.reject(err);
                    }
                });
                return def.promise;
            },
            SpatialAndFilterQuery: function (url, feature, filter) {//???????????? 
                var def = new Deferred();
                var coordinates = feature.get("geometry").flatCoordinates;
                var _filter = '<Filter xmlns="http://www.opengis.net/ogc" xmlns:gml="http://www.opengis.net/gml">';
                _filter += "<And>";
                _filter += "<Intersects>";
                _filter += "<PropertyName>shape</PropertyName>";
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
                    _filter += "</gml:outerBoundaryIs>";
                    _filter += "</gml:LinearRing>";
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
                    _filter += "</gml:outerBoundaryIs>";
                    _filter += "</gml:LinearRing>";
                    _filter += "</gml:Polygon>";
                }
                else if (feature.get("type") === "polyline") {  //?????????  

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
                else if (feature.get("type") === "point") {//?????????  
                    //_filter += "<gml:Point>";
                    //_filter += "<gml:coordinates>" + coordinates[0] + "," + coordinates[1] + "</gml:coordinates>";
                    //_filter += "</gml:Point>";
                    debugger
                    var  aa=this._map.getView().getZoom()
                    var buff=20;
                    
                    if(aa>=0  && aa <= 1.8 ){
                        buff=800;
                    } else if(aa > 1.8  && aa <= 4 ){
                        buff=400;
                    }else if(aa > 4  && aa <= 6 ){
                        buff=100;
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
                _filter += "</Intersects>";
                _filter += this._generate(filter);
                _filter += "</And>";
                _filter += "</Filter>";
                $.ajax({
                    url: url,
                    method: "POST",
                    data: "filter=" + _filter,
                    success: function (data) {

                        var gml = new SuperMap.Format.GML().read(data);
                        var geoJsonString = new SuperMap.Format.GeoJSON().write(gml, false);
                        data = JSON.parse(geoJsonString);
                        def.resolve(data);
                    },
                    error: function (err) {
                        def.reject(err);
                    }
                });
                return def.promise;

            },
            _generate: function (filter) {
                var _filter = "";
                if (filter.getTagName() == "Or") {
                    _filter += "<Or>";
                    for (var i = 0; i < filter.conditions.length; i++) {
                        _filter += this._generate(filter.conditions[i]);
                    }
                    _filter +="</Or>";
                }
                else if (filter.getTagName() == "And") {
                    _filter += "<And>";
                    for (var i = 0; i < filter.conditions.length; i++) {
                        _filter += this._generate(filter.conditions[i]);
                    }
                    _filter += "</And>";
                }
                else if (filter.getTagName() == "PropertyIsEqualTo") {
                    _filter += "<PropertyIsEqualTo>" +
                        "<PropertyName>" + filter.propertyName + "</PropertyName>" +
                        "<Literal>" + filter.expression + "</Literal>"
                        + "</PropertyIsEqualTo>";
                }
                else if (filter.getTagName() == "PropertyIsNotEqualTo") {
                    _filter += "<PropertyIsNotEqualTo>" +
                        "<PropertyName>" + filter.propertyName + "</PropertyName>" +
                        "<Literal>" + filter.expression + "</Literal>"
                        + "</PropertyIsNotEqualTo>";
                }
                else if (filter.getTagName() == "PropertyIsLessThan") {
                    _filter += "<PropertyIsLessThan>" +
                        "<PropertyName>" + filter.propertyName + "</PropertyName>" +
                        "<Literal>" + filter.expression + "</Literal>"
                        + "</PropertyIsLessThan>";
                } 
                else if (filter.getTagName() == "PropertyIsGreaterThan") {
                    _filter += "<PropertyIsGreaterThan>" +
                        "<PropertyName>" + filter.propertyName + "</PropertyName>" +
                        "<Literal>" + filter.expression + "</Literal>"
                        + "</PropertyIsGreaterThan>";
                }
                else if (filter.getTagName() == "PropertyIsLessThanOrEqualTo") {
                    _filter += "<PropertyIsLessThanOrEqualTo>" +
                        "<PropertyName>" + filter.propertyName + "</PropertyName>" +
                        "<Literal>" + filter.expression + "</Literal>"
                        + "</PropertyIsLessThanOrEqualTo>";
                }
                else if (filter.getTagName() == "PropertyIsGreaterThanOrEqualTo") {
                    _filter += "<PropertyIsGreaterThanOrEqualTo>" +
                        "<PropertyName>" + filter.propertyName + "</PropertyName>" +
                        "<Literal>" + filter.expression + "</Literal>"
                        + "</PropertyIsGreaterThanOrEqualTo>";
                }
                else if (filter.getTagName() == "PropertyIsLike") {
                    _filter += "<PropertyIsLike>" +
                        "<PropertyName>" + filter.propertyName + "</PropertyName>" +
                        "<Literal>" + filter.expression + "</Literal>"
                        + "</PropertyIsLike>";
                }
                else if (filter.getTagName() == "PropertyIsNull") {
                    _filter += "<PropertyIsNull>" +
                        "<PropertyName>" + filter.propertyName + "</PropertyName>" +
                        "<Literal>" + filter.expression + "</Literal>"
                        + "</PropertyIsNull>";
                }
                else if (filter.getTagName() == "PropertyIsBetween") {
                    _filter += "<PropertyIsBetween>" +
                        "<PropertyName>" + filter.propertyName + "</PropertyName>" +
                        "<Literal>" + filter.expression + "</Literal>"
                        + "</PropertyIsBetween>";
                }
                return _filter;
            },
            getUrlArg(url,key){
                var arr = url.split('?');
                var argStr = arr.length >1 ? arr[1]:"";
                if(!argStr){
                    return "";
                }
                var arr2 = argStr.split('&').map(item=>item.split('='));
                var res = arr2.find(item=>item[0] == key);
                if(res){
                    return res.length > 1 ? res[1] :"";
                }else{
                    return "";
                }
            },
            longQuest(url,feature){
               var me=this;
               var def = new Deferred();
               let type=feature.values_.type;
               let cor=feature.getGeometry().getCoordinates();
               console.log(cor);
               if(type=="polygon"){
                   if(cor.length<2 && cor[0][0]!=cor[0][cor[0].length-1]){
                        cor[0].push(cor[0][0]);
                   }
                   feature.getGeometry().setCoordinates(cor);
               }
               var wkt=new ol.format.WKT().writeFeature(feature);
                let typeName,firstName,lastName;
                typeName=me.getUrlArg(url,"TYPENAME");
                firstName=typeName.split(":")[0];
                lastName=typeName.split(":")[1];
               $.ajax({
                    url:`../gisQuery/gis-query/intersects?db=${firstName}&schema=public&table=${lastName}&srid=4549&wkt=${wkt}`,
                    method: "Get",
                    success: function (data) {
                        // def.resolve(data);
                        def.resolve({id:lastName,re:data.data||[],wkt1:wkt});
                        
                    },
                    error: function (err) {
                        def.reject(err);
                    }
                });
                return def.promise;
            }

        };
        return util;
    });
define(function () {
    var util = {
        
        uploadTxt:function(fdata){
            var me=this;
            var area=0;
            var length=0;
            var shape=[]; 
            var wktList=[];
            var geomList=[];
            var sucess=null;
            var txtuploadResult=[];
            var checkdata={"angle": [],"repeat": [], "selfIntersectionPoints": []};
            require(["FrameWork/serviceUtil/uploadService","FrameWork/MapUtil/Survey"], function (uploadService,Survey) {
               var _Survey = new Survey();
                uploadService.uploadTxt_tb(fdata).then(function (result) {
                    if (result.code == "200") {
                        sucess=true;
                        txtAndShpRemove40(result.data);
                        for(var i=0;i<result.data.length;i++){
                            var wktstr=me.getWKT(result.data[i]);

                            var _polygon = new ol.geom.Polygon(result.data[i]);
                            var geomone = new ol.Feature({
                                geometry: _polygon,
                                type: "polygon"
                            });
                            area += _Survey.surveyArea(result.data[i]);
                            length += _Survey.surveyCircumference(result.data[i]);
                            shape.push({wkt:wktstr,geom:geomone});
                            wktList.push(wktstr);
                            geomList.push(geomone);

                            // 坐标检查
                            uploadService.check_tx(wktstr).then(function (out2) {
                                if (out2.code == 200) {
                                    out2.data.angle.forEach(el=>{checkdata.angle.push(el)});
                                    out2.data.repeat.forEach(el=>{checkdata.repeat.push(el)});
                                    out2.data.selfIntersectionPoints.forEach(el=>{checkdata.selfIntersectionPoints.push(el)});
                                }
                            });

                        }
                        // 定位
                        var r = appConfig.map.getView().getResolutionForExtent(geomone.getGeometry().getExtent(), appConfig.map.getSize());
                        appConfig.map.getView().setResolution(r);
                        appConfig.map.getView().setCenter(ol.extent.getCenter(geomone.getGeometry().getExtent()));

                       

                    } else {
                        sucess=false;
                        console.log(result.msg);
                    }
                },function(){
                    sucess=false;
                });
            });
            txtuploadResult={
                msg:sucess ,
                data: {
                    "area":area,
                    "length":length,
                    "shape":shape,
                    "wktList":wktList,
                    "geomList":geomList,
                    "checkdata":checkdata
                }
            };
            // me._datacheck(wktList);
            console.log(txtuploadResult);
            return txtuploadResult;
        },
        uploadShp:function(fdata){
            var me=this;
            var area=0;
            var length=0;
            var shape=[]; 
            var wktList=[];
            var geomList=[];
            var sucess=null;
            var txtuploadResult=[];
            var checkdata={"angle": [],"repeat": [], "selfIntersectionPoints": []};
            require(["FrameWork/serviceUtil/uploadService","FrameWork/MapUtil/Survey"], function (uploadService,Survey) {
               var _Survey = new Survey();
                uploadService.uploadShp_tb(fdata).then(function (result) {
                    if (result.code == "200") {
                        sucess=true;
                        for(var i=0;i<result.data.length;i++){
                            var wkt=result.data[i].wkt;
                            var  wkt=me.ShpIndataDeal(result.data[i].wkt);
                            wktList.push(wkt);

                            var feature = new ol.format.WKT().readFeature( wkt);
                            var geom = new ol.Feature({
                                geometry: feature.getGeometry(),
                                type: "polygon"
                            });
                            geomList.push(geom);
                            shape.push({wkt:wkt,geom:geom});

                            // 面积
                            var polygonArr = me.spArray(2, geom.getGeometry().flatCoordinates);
                            polygonArr.push(polygonArr[0]);
                            area += _Survey.surveyArea([polygonArr]);
                            length+=_Survey.surveyCircumference([polygonArr]);

                             // 坐标检查
                             uploadService.check_tx(wkt).then(function (out2) {
                                if (out2.code == 200) {
                                    out2.data.angle.forEach(el=>{checkdata.angle.push(el)});
                                    out2.data.repeat.forEach(el=>{checkdata.repeat.push(el)});
                                    out2.data.selfIntersectionPoints.forEach(el=>{checkdata.selfIntersectionPoints.push(el)});
                                }
                            });
                        }
                        // 定位
                        var r = appConfig.map.getView().getResolutionForExtent(geom.getGeometry().getExtent(), appConfig.map.getSize());
                        appConfig.map.getView().setResolution(r);
                        appConfig.map.getView().setCenter(ol.extent.getCenter(geom.getGeometry().getExtent()));
                    } else {
                        sucess=false;
                        console.log(result.msg);
                    }
                });
            },function(err){
                sucess=false;
                 console.log(err);
            });
            txtuploadResult={
                msg:sucess ,
                data: {
                    "area":area,
                    "length":length,
                    "shape":shape,
                    "wktList":wktList,
                    "geomList":geomList,
                    "checkdata":checkdata
                }
            };
            console.log(txtuploadResult);
            return txtuploadResult;
        },
        calArea:function(wkt){
            var area=0;
            require(["FrameWork/serviceUtil/uploadService"], function (uploadService) {
                uploadService.area_tb(wkt).then(function(re){
                    if(re.code == "200"){
                        area=Number(re.data||0);
                    }else{
                        area=0;
                    }
                },function(){
                    area=0;
                })
            })
           
            return area
        },
        calArea2:function(wkt){
            var me=this;
            var area=null;
            require(["FrameWork/MapUtil/Survey"], function (Survey) {
                var _Survey = new Survey();
                var feature = new ol.format.WKT().readFeature(wkt);
                var arr = me.spArray(2, feature.getGeometry().flatCoordinates);
                area = _Survey.surveyArea([arr]);
            })
           
            return area
        },

        getWktFun:function(Geometry){
            var me=this;
            var geojson=new ol.format.GeoJSON().writeGeometry(Geometry);
            geojson=JSON.parse(geojson);
            var wkt= me.getWKT2(geojson.coordinates,geojson.type,"shp");
            return wkt;
        },

        checkShp:function(wkt){
            var checkdata={"angle": [],"repeat": [], "selfIntersectionPoints": []};
            require(["FrameWork/serviceUtil/uploadService"], function (uploadService) {
                // 坐标检查
                uploadService.check_tx(wkt).then(function (out2) {
                    if (out2.code == 200) {
                        out2.data.angle.forEach(el=>{checkdata.angle.push(el)});
                        out2.data.repeat.forEach(el=>{checkdata.repeat.push(el)});
                        out2.data.selfIntersectionPoints.forEach(el=>{checkdata.selfIntersectionPoints.push(el)});
                    }
                });
            })
            return checkdata;
        },

        bufferShape:function(geom,distance,buffLayer){
            //   wkt
            let type=geom.values_.type;
            let cor=geom.getGeometry().getCoordinates();
            if(type=="polygon"){
                if(cor.length<2 && cor[0][0]!=cor[0][cor[0].length-1]){
                     cor[0].push(cor[0][0]);
                }
                geom.getGeometry().setCoordinates(cor);
            }
            var wkt=new ol.format.WKT().writeFeature(geom);
            var newgeom=null;
            require(["FrameWork/serviceUtil/graphService"], function (graphService) {
                graphService.graphicalBuffer_tb(distance, wkt).then(function (result) {
                    if (result.code == "200") {
                        var bufferwkt= result.data;
                        var feature = new ol.format.WKT().readFeature( bufferwkt);
                        newgeom = new ol.Feature({
                            geometry: feature.getGeometry(),
                            type: "polygon"
                        });
                        buffLayer.getSource().clear();
                        buffLayer.getSource().addFeature(new ol.format.WKT().readFeature(result.data));
                    } else {
                        alert("缓冲失败");
                    }
                });
            })
            return newgeom;
        },


        // 
        getWKT2:function (data,type,filetype) {
            var new_wkt='';
           var me=this;
            if(type == "Polygon"){
                for(var i=0;i<data.length;i++){
                    var data2=data[i];
                    // data [[x,y] [] []] data2[] [] [] 
                    if(data2[0][0] != data2[data2.length - 1][0] || data2[0][1] != data2[data2.length - 1][1])
                    {
                        data[i].push(data2[0]);
                    }

                }
                new_wkt += "POLYGON("+me.wktPolygon(data,filetype);
            }
            if(type == "MultiPolygon"){
                 new_wkt += "MULTIPOLYGON(";
                 for(var i=0;i<data.length;i++){
                    new_wkt += "("+me.wktPolygon(data[i],filetype)+",";
                 }
                 new_wkt=new_wkt.substring(0,new_wkt.length-1);
                new_wkt+=")";
            }
            if(type == "LineString"){
                new_wkt += "LineString(";
                for(var i=0;i<data.length;i++){
                    var point=data[i];
                     new_wkt += point[0]+" "+point[1]+",";
                }
                new_wkt=new_wkt.substring(0,new_wkt.length-1);
                new_wkt+=")"
            }

            return new_wkt;
        },
        wktPolygon(data,filetype){
            var new_wkt='';
            data.forEach(el =>{
                new_wkt +="(";
                el.forEach(point =>{
                    var x=String(point[0]);
                    var pd=x.split(".");
                    if(filetype == "txt"){
                        if(pd[0].length == 7){
                            new_wkt += point[0] + " " + point[1] + ",";
                        }else if(pd[0].length == 6){
                            new_wkt += point[1] + " " + point[0] + ",";
                        }
                    }else {
                    new_wkt += point[0]+" "+point[1]+",";
                    }
                })
                new_wkt=new_wkt.substring(0,new_wkt.length-1);
                new_wkt+=")"+","
            })
            new_wkt=new_wkt.substring(0,new_wkt.length-1);
            new_wkt+=")";
            return new_wkt;
        },

        checkWkt:function(wkt){
            var checkdata={"angle": [],"repeat": [], "selfIntersectionPoints": []};
            require(["FrameWork/serviceUtil/uploadService"], function (uploadService) {
                 // 坐标检查
                 uploadService.check_tx(wkt).then(function (out2) {
                    if (out2.code == 200) {
                        out2.data.angle.forEach(el=>{checkdata.angle.push(el)});
                        out2.data.repeat.forEach(el=>{checkdata.repeat.push(el)});
                        out2.data.selfIntersectionPoints.forEach(el=>{checkdata.selfIntersectionPoints.push(el)});
                    }
                });
            })
        },

        // subfun
        getWKT:function(data){
                var geom = new ol.geom.Polygon(data);
                var polygonWKT = new ol.format.WKT().writeGeometry(geom, {
                    dataProjection: "EPSG:4549",
                    featureProjection: "EPSG:4549",
                });
                return polygonWKT;
        },
        spArray: function (n, arr) {
                var newArr = [],
                    i;
                
            try{
                for (i = 0; i < arr.length;) {
                    newArr.push(arr.slice(i, (i += n)));
                }
            }catch(err){
                console.log(arr);
                console.log(n);
                console.log(err);
            }
                
                
                return newArr;
        },
        ShpIndataDeal:function (shpwkt) {
                // 1-获取geojson
                var geometry=new ol.format.WKT().readGeometry(shpwkt);
                var convertor = new ol.format.GeoJSON();
                var geojson=convertor.writeGeometry(geometry);
                geojson=JSON.parse(geojson);
                //2-去40
                txtAndShpRemove40(geojson.coordinates);
                //3-获取新wkt 
                var newwkt=this.getWKT2(geojson.coordinates,geojson.type);
            return newwkt
        },
        getWKT2:function (data,type) {
            var new_wkt='';
            var me=this;
            if(type == "Polygon"){
                new_wkt += "POLYGON("+me.wktPolygon(data);
            }
            if(type == "MultiPolygon"){
                new_wkt += "MULTIPOLYGON(";
                for(var i=0;i<data.length;i++){
                    new_wkt += "("+me.wktPolygon(data[i])+",";
                }
                new_wkt=new_wkt.substring(0,new_wkt.length-1);
                new_wkt+=")";
            }
            if(type == "LineString"){
                // new_wkt += "LineString(";
                new_wkt +="POLYGON(("
                // 接口改好后删除部分
                var fisrt=data[0];
                var len=data.length;
                var last=data[len-1]
                if(fisrt[0] != last[0] || fisrt[1] != last [1]){
                    data.push(fisrt);
                }
                // 
                for(var i=0;i<data.length;i++){
                    var point=data[i];
                    new_wkt += point[0]+" "+point[1]+",";
                    var pd_zb=(point[0] < 0 || point[1] < 0 );
                    var pd_x=String(point[0]).split(".")[0].length;
                    var pd_y=String(point[1]).split(".")[0].length;
                    if(pd_zb || !(pd_x == 7 && pd_y == 6 || pd_x == 6 && pd_y ==7)){
                        var msg="fail";
                        return msg;
                    }
                }
                new_wkt=new_wkt.substring(0,new_wkt.length-1);
                new_wkt+="))"
            }
            return new_wkt;
        },
        wktPolygon(data){
            var new_wkt='';
            data.forEach(el =>{
                new_wkt +="(";
                el.forEach(point =>{
                    new_wkt += point[0]+" "+point[1]+",";
                })
                new_wkt=new_wkt.substring(0,new_wkt.length-1);
                new_wkt+=")"+","
            })
            new_wkt=new_wkt.substring(0,new_wkt.length-1);
            new_wkt+=")";
            return new_wkt;
        },
        _datacheck:function(wktList){
            require(["FrameWork/serviceUtil/uploadService"], function (uploadService) {
                wktList.forEach(wkt=>{
                    uploadService.check_tx(wkt).then(function (out2) {
                        if (out2.code == 200) {
                          
                        }else {
                            console(out2.msg);
                        }
                    },function(err){
                        console.log(err.msg);
                    });
                })
            })
        }
    }
    return util
});
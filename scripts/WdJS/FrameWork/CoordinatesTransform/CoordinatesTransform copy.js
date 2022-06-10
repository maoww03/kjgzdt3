define([
  "dojo/_base/declare",
  "dojo/parser",
  "dojo/DeferredList",
  "dijit/_WidgetBase",
  "dijit/_TemplatedMixin",
  "dojo/text!./templates/CoordinatesTransform.txt",
  "dojo/on",
  "dojo/dom-style",
  "dojo/dom-class",
  "dojo/dom-attr",
  "dojo/dom-construct",
  "FrameWork/serviceUtil/workMapService","FrameWork/Measure/GaussKruger"
], function (declare, parser, DeferredList, _WidgetBase, _TemplatedMixin, template, on, domStyle, domClass, domAttr, domConstruct, workMapService, GaussKruger) {
    return declare([_WidgetBase, _TemplatedMixin], {
        templateString: template,
        _change: 'XY2BL',
        _filePath: null,
        _txtFileWkt:null,
        _fd:null,
        _extName:null,

        _Ellipsoid: {
            name: "CGCS2000",
            semiMajorAxis: 6378137,
            semiMinorAxis: 6356752.3141403561,
            flatRate: 0.00335281068118232
        },
        _g: null,
        _L0: 120.000000000,//XY2BL
        // _L1: 120.666666667,//BL2XY


        constructor: function (args) { },
        postCreate: function () {
            this.inherited(arguments);
        },
        startup: function () {
            var me = this;
            if (me._started) {
                return;
            }
            parser.parse(me.domNode).then(function () {
                me._g = new GaussKruger();
                me._bindEvents();
            });
        },
        _bindEvents: function () {
            var me = this;
            on(me.close, "click", function () {
                me._destroy();
                _checkQuery=true;
                _attrQueryTool.activate("point");
            });
            on(me.change, "click", function () {
                if (me._change == 'XY2BL') {
                    domStyle.set(me.change, "background-image", 'url(image/Transfor/jiaohuan2.png)');
                    me._change = 'BL2XY';
                } else if (me._change == 'BL2XY') {
                    domStyle.set(me.change, "background-image", 'url(image/Transfor/jiaohuan1.png)');
                    me._change = 'XY2BL';
                }
            });

            // 1-upload_txtfile
            on(me.upload_txtfile, "click", function () {
                domStyle.set(me.downloadBtn, 'display', 'none');
                domStyle.set(me.labelnote,"display","none");
                domStyle.set(me.result_input,"display","none");
                me.txtfile.click();
            });
            on(me.txtfile, "change", function () {
                domStyle.set(me.downloadBtn, 'display', 'none');
                
                var fd = new FormData();
                fd.append("file", me.txtfile.files[0]);
                var filePath = me.txtfile.value;
                var fileName = filePath.substring(filePath.lastIndexOf("\\") + 1); //文件名
                var extName = fileName.substring(fileName.lastIndexOf(".") + 1); 
                me._extName=extName;
                //后缀名
                if (extName == "txt") {
                    domStyle.set(me.file_box,"display","block");
                    domStyle.set(me.upload_filename,"background-image","url(image/doConflict/txt2.png)");
                    me.upload_filename.innerHTML = fileName;
                    me._getChangeTypeWkt(fd,extName);
                }else {
                    domStyle.set(me.file_box,"display","block");
                    domStyle.set(me.upload_filename,"background-image","none");
                    me.upload_filename.innerHTML = "未选择任何文件";
                }
            });
            // 2-upload_shpfile
            on(me.upload_shpfile, "click", function () {
                domStyle.set(me.downloadBtn, 'display', 'none');
                domStyle.set(me.labelnote,"display","none");
                domStyle.set(me.result_input,"display","none");

                me.shpfile.click();
            });
            on(me.shpfile, "change", function () {
                var fd = new FormData();
                fd.append("file", me.shpfile.files[0]);
                var filePath = me.shpfile.value;
                var fileName = filePath.substring(filePath.lastIndexOf("\\") + 1); //文件名
                var extName = fileName.substring(fileName.lastIndexOf(".") + 1); //后缀名
                me._extName=extName;
                
                if (extName == "zip") {
                    domStyle.set(me.file_box,"display","block");
                    domStyle.set(me.upload_filename,"background-image","url(image/doConflict/zip2.png)");
                    me.upload_filename.innerHTML = fileName;
                    me._getChangeTypeWkt(fd,extName);
                }else {
                    domStyle.set(me.file_box,"display","block");
                    domStyle.set(me.upload_filename,"background-image","none");
                    me.upload_filename.innerHTML = "未选择任何文件";
                }
            });
            // 3-upload_input
            on(me.upload_input, "click", function () {
                domStyle.set(me.file_box,"display","none");
                domStyle.set(me.labelnote,"display","block");
                domStyle.set(me.result_input,"display","none");

                me._extName='input';
            });

            on(me.downloadBtn, 'click', function () {
                workMapService.fileDownloadByPath(me._filePath);
            })
            on(me.transformBtn, "click", function () {
                domStyle.set(me.loading, "display", "block");
                var typeSelect = me._change;
                var remove40 = me.remove40check.checked;
                var extName=me._extName;
                var fd = new FormData();
                
                if (extName != "txt" && extName != "zip" && extName !='input') {
                    alert("请选择txt文件或者zip文件");
                    domStyle.set(me.loading, "display", "none");
                } else if (extName == "txt") {
                    fd.append("file", me.txtfile.files[0]);
                    var wkt=me._txtFileWkt;
                    if (typeSelect == "XY2BL") {
                        workMapService.XY2BL(wkt, me._L0, 0).then(function (res) {
                            if (res.code == 200) {
                                workMapService.WktToTxt(res.data).then(function (result) {
                                    if (result.code == "200") {
                                        me._filePath = result.data;
                                        domStyle.set(me.loading, "display", "none");
                                        domStyle.set(me.downloadBtn, 'display', 'block');
                                    } else {
                                        me._filePath = null;
                                        domStyle.set(me.loading, "display", "none");
                                        domStyle.set(me.downloadBtn, 'display', 'none');
                                        alert(result.msg);
                                    }
                                });
                            } else {
                                domStyle.set(me.loading, "display", "none");
                                domStyle.set(me.downloadBtn, 'display', 'none');
                                alert(res.msg);
                            }
                        });
                    } else if (typeSelect == "BL2XY") {
                        workMapService.BL2XY(wkt, me._L0, 3).then(function (res) {
                            if (res.code == 200) {
                                workMapService.WktToTxt(res.data).then(function (result) {
                                    if (result.code == "200") {
                                        me._filePath = result.data;
                                        domStyle.set(me.loading, "display", "none");
                                        domStyle.set(me.downloadBtn, 'display', 'block');
                                    } else {
                                        domStyle.set(me.downloadBtn, 'display', 'none');
                                        domStyle.set(me.loading, "display", "none");
                                        me._filePath = null;
                                        alert(result.msg);
                                    }
                                });

                            } else {
                                alert(res.msg);
                            }
                        });
                    }
                } else if (extName == "zip") {
                    fd.append("file", me.shpfile.files[0]);
                    workMapService.readShpToWkt(fd).then(function (out) {
                        if (out.code == 200) {
                            if (remove40) {
                                out.data.forEach((d, index) => {
                                    out.data[index].wkt = me._remove40Bywkt(d.wkt);
                                });
                            }
                            if (typeSelect == "XY2BL") {
                                var performCount = 0;
                                var uploadData=[];
                                out.data.forEach((d, index) => {
                                    workMapService.XY2BL(d.wkt, me._L0, 0).then(function (res) {
                                        performCount++;
                                        if (res.code == 200) {
                                            var attributes=[];
                                            for(var i=0;i<out.data[index].attributes.length;i++){
                                                var con={
                                                    "propertyName": out.data[index].attributes[i]["propertyName"],
                                                    "type": out.data[index].attributes[i]["type"],
                                                    "value": out.data[index].attributes[i]["value"],
                                                };
                                                attributes.push(con);
                                            }
                                            var transData={
                                                  "attributes":attributes,
                                                  "wkt": res.data
                                                };
                                            uploadData.push(transData);
                                            if (performCount == out.data.length) {
                                                workMapService.uploadZip(uploadData).then(function(result){
                                                    if(result.code=='200'){
                                                        me._filePath = result.data;
                                                        domStyle.set(me.loading, "display", "none");
                                                        domStyle.set(me.downloadBtn, 'display', 'block');
                                                    }else{
                                                        me._filePath = null;
                                                        domStyle.set(me.loading, "display", "none");
                                                        domStyle.set(me.downloadBtn, 'display', 'none');
                                                        alert(result.msg);
                                                    }
                                                })
                                            }
                                        } else {
                                            domStyle.set(me.loading, "display", "none");
                                            domStyle.set(me.downloadBtn, 'display', 'none');
                                            alert(res.msg);
                                        }
                                    });
                                });
                            } else if (typeSelect == "BL2XY") {
                                var performCount = 0;
                                var uploadData=[];
                                out.data.forEach((d, index) => {
                                    workMapService.BL2XY(d.wkt, me._L0, 3).then(function (res) {
                                        performCount++;
                                        if (res.code == 200) {
                                            var attributes=[];
                                            for(var i=0;i<out.data[index].attributes.length;i++){
                                                var con={
                                                    "propertyName": out.data[index].attributes[i]["propertyName"],
                                                    "type": out.data[index].attributes[i]["type"],
                                                    "value": out.data[index].attributes[i]["value"],
                                                };
                                                attributes.push(con);
                                            }
                                            var transData={
                                                  "attributes":attributes,
                                                  "wkt": res.data
                                                };
                                            uploadData.push(transData);
                                            if (performCount == out.data.length) {
                                                workMapService.uploadZip(uploadData).then(function(result){
                                                    if(result.code=='200'){
                                                        me._filePath = result.data;
                                                        domStyle.set(me.loading, "display", "none");
                                                        domStyle.set(me.downloadBtn, 'display', 'block');
                                                    }else{
                                                        me._filePath = null;
                                                        domStyle.set(me.loading, "display", "none");
                                                        domStyle.set(me.downloadBtn, 'display', 'none');
                                                        alert(result.msg);
                                                    }
    
                                                })
                                            }
                                        } else {
                                            domStyle.set(me.loading, "display", "none");
                                            domStyle.set(me.downloadBtn, 'display', 'none');
                                            alert(res.msg);
                                        }
                                        
                                    });
                                });
                            }
                        } else {
                            alert(out.msg);
                        }
                    });
                } else if (extName == 'input'){
                    var coor=me.labelnote.value;
                    if(coor==''){
                        domStyle.set(me.loading, "display", "none");
                        alert("请输入坐标");
                    }else{
                        var points=[];
                        var arr=[];
                        
                        arr=coor.split(',');
                        for(var i=0;i<arr.length;i++){
                            var a=arr[i].split(" ");
                            a[0]=Number(a[0]);
                            a[1]=Number(a[1]);
                            debugger
                            if(a[0]>100 && a[1]>10 || a[1]>100 && a[0]>10 || a[0]>100000 && a[1]>1000000 ||a[1]>100000 && a[0]>1000000){
                                points.push({x:a[0],y:a[1]});
                                domStyle.set(me.result_input,"color",'black');
                            }else{
                                domStyle.set(me.result_input,"display","block");
                                domStyle.set(me.loading,"display","none");
                                me.result_input.innerHTML='请输入正确的数据格式如:</br>单个坐标 : x y</br>多个坐标 : x1 y1,x2 y2';
                                domStyle.set(me.result_input,"color",'red');
                                return ;
                            }
                        }      
                        me._pdType(points[0]);
                        typeSelect=me._change;
                        var result=[];                 
                        if (typeSelect == "XY2BL"){
                            for(var i=0;i<points.length;i++){
                                var point=points[i];
                                point=me._correct(point);
                                var re=me._g.XY2BL(me._Ellipsoid,me._L0,point);
                                result.push(re);
                            }
                        }else if(typeSelect == "BL2XY"){
                            for(var i=0;i<points.length;i++){
                                var point=points[i];
                                point=me._correct(point);
                                var re=me._g.BL2XY(me._Ellipsoid,me._L0,point);
                                result.push(re);
                            }
                        }
                        domStyle.set(me.result_input,"display","block");
                        domStyle.set(me.loading,"display","none");
                        var innerHTML=''
                        for(var i=0;i<result.length;i++){
                            var aa=result[i];
                            if(typeSelect== "BL2XY"){
                                innerHTML+=`${aa.y} ${aa.x},`;
                            }else{
                                innerHTML+=`${aa.y} ${aa.x},`;
                            }

                        }
                        me.result_input.innerHTML=innerHTML.substring(0,innerHTML.length-1);


                    }
                }
            });
        },

        _correct:function(point){
            var pointX=``+point.x;
            var pointY=``+point.y;
            pointX=pointX.split('.');
            pointX=pointX[0];
            pointY=pointY.split('.');
            pointY=pointY[0];
            if(pointX.length==2 && pointY.length==3){
                var temp=point.x;
                point.x=point.y;
                point.y=temp;
            }
            if(pointX.length==6 && pointY.length==7){
                var temp=point.x;
                point.x=point.y;
                point.y=temp;
            }
            
            return point;
        },
        _pdType:function(point){
            var me=this;
            var pointX=``+point.x;
            var pointY=``+point.y;
            pointX=pointX.split('.');
            pointX=pointX[0];
            pointY=pointY.split('.');
            pointY=pointY[0];
            if(pointX.length==2 && pointY.length==3 || pointX.length==3 && pointY.length==2 ){
                domStyle.set(me.change, "background-image", 'url(image/Transfor/jiaohuan2.png)');
                me._change='BL2XY';
            }
            if(pointX.length==6 && pointY.length==7 || pointX.length==7  && pointY.length==6){
                domStyle.set(me.change, "background-image", 'url(image/Transfor/jiaohuan1.png)');
                me._change='XY2BL';
                
            }
        },
        //都当做多面处理,MULTIPOLYGON(((1 1,5 1,5 5,1 5,1 1)),((6 3,9 2,9 4,6 3)))
        _dataListToWkt: function (data, remove40) {
            var me = this;
            var wkt = "MULTIPOLYGON(";
            data.forEach((d) => {
                wkt += "((";
                d.forEach((p) => {
                    if (!remove40) {
                        wkt += p[0] + " " + p[1] + ",";
                    } else {
                        if (p[1].toString().substring(0, 2) == "40") {
                            wkt += p[0] + " " + p[1].toString().substring(2, p[1].toString().length) + ",";
                        } else {
                            wkt += p[0] + " " + p[1] + ",";
                        }
                    }
                });
                wkt = wkt.substring(0, wkt.length - 1);
                wkt += ")),";
            });
            wkt = wkt.substring(0, wkt.length - 1);
            wkt += ")";
            return wkt;
        },

        _remove40Bywkt: function (wkt) {
            var wkt_new = "";
            //点 POINT(0 0) ——点
            if (wkt.indexOf("POINT") != -1) {
                wkt = wkt.substring(6, wkt.length - 1);
                var point = wkt.split(" ");
                var point2 = point.split(" ");
                if (point2[1].toString().substring(0, 2) == "40") {
                    wkt_new = "POINT(" + point2[0] + " " + point2[1].toString().substring(2, point2[1].toString().length) + ")";
                } else {
                    wkt_new += point2[0] + " " + point2[1] + ",";
                }
            }
            //线 LINESTRING(0 0,1 1,1 2) ——线
            else if (wkt.indexOf("LINESTRING") != -1) {
                wkt = wkt.substring(11, wkt.length - 1);
                var points = wkt.split(",");
                wkt_new = "LINESTRING(";
                points.forEach((point) => {
                    var point2 = point.split(" ");
                    if (point2[1].toString().substring(0, 2) == "40") {
                        wkt_new += point2[0] + " " + point2[1].toString().substring(2, point2[1].toString().length) + ",";
                    } else {
                        wkt_new += point2[0] + " " + point2[1] + ",";
                    }
                });
                wkt_new = wkt_new.substring(0, wkt_new.length - 1);
                wkt_new += ")";
            }
            //多面 MULTIPOLYGON(((X Y,X Y)),((X Y,X Y)),((X Y,X Y)))
            else if (wkt.indexOf("MULTIPOLYGON") != -1) {
                wkt = wkt.substring(13, wkt.length - 1);
                wkt_new = "MULTIPOLYGON(";
                while (true) {
                    var substring = wkt.substring(wkt.indexOf("((") + 2, wkt.indexOf("))"));
                    var points = substring.split(",");
                    wkt_new += "((";
                    points.forEach((point) => {
                        var point2 = point.split(" ");
                        if (point2[1].toString().substring(0, 2) == "40") {
                            wkt_new += point2[0] + " " + point2[1].toString().substring(2, point2[1].toString().length) + ",";
                        } else {
                            wkt_new += point2[0] + " " + point2[1] + ",";
                        }
                    });
                    wkt_new = wkt_new.substring(0, wkt_new.length - 1);
                    wkt_new += ")),";
                    wkt = wkt.replace("((" + substring + "))", "");
                    if (wkt.match(/^[ ]*$/)) {
                        break;
                    }
                    wkt = wkt.substring(1);
                }
                wkt_new = wkt_new.substring(0, wkt_new.length - 1);
                wkt_new += ")";
            }
            //面 POLYGON((0 0,4 0,4 4,0 4,0 0),(1 1, 2 1, 2 2, 1 2,1 1)) ——面
            else if (wkt.indexOf("POLYGON") != -1) {
                wkt = wkt.substring(8, wkt.length - 1);
                wkt_new = "POLYGON(";
                while (true) {
                    var substring = wkt.substring(wkt.indexOf("(") + 1, wkt.indexOf(")"));
                    var points = substring.split(",");
                    wkt_new += "(";
                    points.forEach((point) => {
                        var point2 = point.split(" ");
                        if (point2[1].toString().substring(0, 2) == "40") {
                            wkt_new += point2[0] + " " + point2[1].toString().substring(2, point2[1].toString().length) + ",";
                        } else {
                            wkt_new += point2[0] + " " + point2[1] + ",";
                        }
                    });
                    wkt_new = wkt_new.substring(0, wkt_new.length - 1);
                    wkt_new += "),";
                    wkt = wkt.replace("(" + substring + ")", "");
                    if (wkt.match(/^[ ]*$/)) {
                        break;
                    }
                    wkt = wkt.substring(1);
                }
                wkt_new = wkt_new.substring(0, wkt_new.length - 1);
                wkt_new += ")";
            }
            return wkt_new;
        },

        _destroy: function () {
            var me = this;
            me.destroy();
        },
        getWKT: function (data) {
            var geom = new ol.geom.MultiPolygon(data);
            var polygonWKT = new ol.format.WKT().writeGeometry(geom, {
                dataProjection: "EPSG:4549",
                featureProjection: "EPSG:4549"
            });
            return polygonWKT;
        },
        _getChangeTypeWkt:function(fd,extName){
            var me=this;
            if(extName == "txt"){
                workMapService.uploadsheng(fd).then(function (out) {
                    if (out.code == 200) {
                        me._txtFileWkt = me.getWKT(out.data);
                        if(out.data.length>0){
                            var a=out.data[0][0][0];
                            var pointX=``+a[0];
                            var pointY=``+a[1];
                            pointX=pointX.split('.');
                            pointX=pointX[0];
                            pointY=pointY.split('.');
                            pointY=pointY[0];
                            if(pointX.length==3 && pointY.length==2 || pointX.length==2 && pointY.length==3){
                                
                                domStyle.set(me.change, "background-image", 'url(image/Transfor/jiaohuan2.png)');
                                me._change='BL2XY';

                            }else if(pointX.length==7 && pointY.length==6 || pointX.length==6 && pointY.length==7){
                                domStyle.set(me.change, "background-image", 'url(image/Transfor/jiaohuan1.png)');
                                me._change='XY2BL';

                            }
                        }
                    }else{
                        alert(out.msg);
                    }
                })
            }else if(extName == "zip"){
                workMapService.readShpToWkt(fd).then(function (out) {
                    if (out.code == 200) {
                        var feature = new ol.format.WKT().readFeature(out.data[0].wkt);
                        var list=feature.getGeometry().flatCoordinates;
                        var pointX=``+list[0];
                        var pointY=``+list[1];
                        pointX=pointX.split('.');
                        pointX=pointX[0];
                        pointY=pointY.split('.');
                        pointY=pointY[0];
                        if(pointX.length==3 && pointY.length==2 || pointX.length==3 && pointY.length==2){
                            domStyle.set(me.change, "background-image", 'url(image/Transfor/jiaohuan2.png)');
                            me._change='BL2XY';

                        }else {
                            domStyle.set(me.change, "background-image", 'url(image/Transfor/jiaohuan1.png)');
                            me._change='XY2BL';

                        }
                    }else{
                        alert(out.msg);
                    }
                })


            }
        },
        
    });
});

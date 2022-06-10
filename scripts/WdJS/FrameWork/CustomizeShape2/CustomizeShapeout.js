define([
    "dojo/_base/declare",
    "dojo/parser",
    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin",
    "dojo/text!./templates/CustomizeShapeout.txt",
    "dojo/on",
    "dojo/dom-style",
    "dojo/dom-class",
    "dojo/dom-attr",
    "dojo/dom-construct",
    'FrameWork/serviceUtil/uploadService',
    'FrameWork/Loading/Loading',"FrameWork/serviceUtil/workMapService"
], function (declare, parser, _WidgetBase, _TemplatedMixin, template, on, domStyle, domClass, domAttr, domConstruct, uploadService, Loading,workMapService) {
    return declare([_WidgetBase, _TemplatedMixin], {
        templateString: template,
        index: 0,
        _mapTool: null,
        _drawLayer: null,
        _choseDk:[],
        _exportArr:[],

        // 默认多面形中多边形样式 style_setting为false
        _polygonStyle: new ol.style.Style({     
            fill: new ol.style.Fill({
                color: 'rgba(0,0,0,0.5)'
            }),
            stroke: new ol.style.Stroke({
                color: 'red',
                width: 2
            })
        }),

        highlightStyle :  new ol.style.Style({
            fill: new ol.style.Fill({
                color: 'rgba(0,0,0,0.5)'
            }),
            stroke: new ol.style.Stroke({
                color: 'red',
                width: 4
            })
          }),

        _Survey: null,
        _geometryItemList: null,
        _queryLayer: null,
        _wkt1List:[],

        constructor: function (args) { },

        postCreate: function () {
            this.inherited(arguments);
        },

        startup: function () {
            var me = this;
            dojo.query('.repeatHide').forEach((dom) => {
                domStyle.set(dom,"display",'none');
            })
            dojo.query('.sidebar-tool').forEach((dom) => {
                domStyle.set(dom,"display",'none');
            })
            domStyle.set(me.domNode,"display",'block');

            if (me._started) {
                return;
            }
            parser.parse(me.domNode).then(function () {
                 // 清除点查
                ClearClickQuery();
                me._bindEvents();
            });
        },
        _bindEvents: function () {
            var me = this;
            on(me.subSidebox_close,"click",function(){
                // 恢复点差
                Resumequery();
                me.setDomVisble(false);
                // me.destroy();
                
            })

            on(me.downLoad,"click",function(){
                debugger
                var type=me.downLoadtype.value;
                var layerID=me.layersNameSelect.value;
                var ishas = false;
                var exportLayer;
                for (var i = 0; i < appConfig.map.getLayers().array_.length; i++) {
                    var layer = appConfig.map.getLayers().array_[i];
                    var layer_id = layer.get("id");
                    if (layer_id === layerID) {
                        exportLayer = layer;
                        ishas = true;
                        break;
                    }
                }
                if(!ishas){
                    alert("无目标图层");
                    return
                }
                var layers=exportLayer.getSource().getFeatures();
                if(type == "shp"){
                    var arr2=[];
                    var pd=false;
                    if(exportLayer.getSource().getFeatures().length > 0){
                        layers.forEach(el=>{
                            var feaID=el.id_;
                            if(feaID == "1"){
                                pd=true;
                                // var polygonArr = me.spArray(2, zb);
                                var aa=el.getGeometry();
                                var geojson=new ol.format.GeoJSON().writeGeometry(aa);
                                geojson=JSON.parse(geojson);
                                var wkt= me.getWKT2(geojson.coordinates,geojson.type,"shp");
                                var graphical ={
                                    attributes: [],
                                    wkt: wkt };
                                arr2.push(graphical);
                            }
                        })
                    }
                    if(!pd){
                        alert("请点击地块，选择要导出的图形，或者无导入图形");
                        return;
                    }
                    Loading.show(me.domNode);
                    workMapService.uploadZip(arr2).then(function (result){
                        if(result.code=="200"){
                            workMapService.fileDownloadByPath(result.data);
                            Loading.hide();
                        }else{
                            Loading.hide();
                            alert(result.msg);
                        }
                    })
                }else {
                    var ctype=type.split("_")[1];
                    var zbx=type.split("_")[2];
                    if(exportLayer.getSource().getFeatures().length > 0){
                        var pd=false;
                        var wkt="MULTIPOLYGON(";
                        layers.forEach(el=>{
                            var feaID=el.id_;
                            if(feaID == "1"){
                                pd=true;
                                // var zb=el.getGeometry().flatCoordinates;
                                // var polygonArr = me.spArray(2, zb);
                                // var aa=me.PolygonToWKT2(polygonArr);
                                debugger
                                var aa=el.getGeometry();
                                var geojson=new ol.format.GeoJSON().writeGeometry(aa);
                                geojson=JSON.parse(geojson);
                                wkt= me.getWKT2(geojson.coordinates,geojson.type,"txt");

                                // wkt=wkt  + aa +",";
                            }
                        })
                        // wkt = wkt.substring(0, wkt.length - 1);
                        // wkt += ")";
                    }
                    if(!pd){
                        alert("请点击地块，选择要导出的图形，或者无导入图形");
                        return;
                    }
                    
                    Loading.show(me.domNode);
                    workMapService.WktToTxt(wkt,ctype,zbx).then(function(re){
                        if(re.code=="200"){
                            workMapService.fileDownloadByPath(re.data);
                            Loading.hide();
                        }else{
                            Loading.hide();
                            alert(re.msg);
                        }
                    })

                }
            })

            appConfig.map.on('singleclick', function (e) {
                debugger
                var a=domStyle.get(me.domNode,"display");
                 if(a == "block"){
                    appConfig.map.forEachFeatureAtPixel(e.pixel, function (f,layer) {
                        var aa=layer.get("id");
                        if(aa== "Custom_drawLayer"){
                          debugger
                          var fea_id=f.getId();
                          if(fea_id == "0" || fea_id == undefined || fea_id == null){
                              f.setStyle(me.highlightStyle);
                              f.setId("1");
                              me._exportArr.push(f);
                          }else if(fea_id == "1"){
                              f.setStyle(me._polygonStyle);
                              f.setId("0");
                          }
                        }
                        return true;
                      });
                }
                // e.preventDefault();
              });

        },
        spArray: function (n, arr) {
            var newArr = [],
                i;
            for (i = 0; i < arr.length;) {
                newArr.push(arr.slice(i, (i += n)));
            }
            
            return newArr;
        },
       
        PolygonToWKT2:function(polygonArr){
            var me=this;
            var wkt='';
            if (polygonArr[0][0] != polygonArr[polygonArr.length - 1][0] || polygonArr[0][1] != polygonArr[polygonArr.length - 1][1]) {
                polygonArr.push(polygonArr[0]);
                }
            wkt = "((";
            polygonArr.forEach((p) => {
                debugger
                var x=String(p[0]);
                var pd=x.split(".");
               if(pd[0].length == 7){
                    wkt += p[0] + " " + p[1] + ",";
               }else if(pd[0].length == 6){
                    wkt += p[1] + " " + p[0] + ",";
               }
            });
            wkt = wkt.substring(0, wkt.length - 1);
            wkt += "))";
            return wkt;
        },

        setDomVisble:function(visible){
            var me=this;
            if(visible){
                domStyle.set(me.domNode,"display","block");
            }else{
                domStyle.set(me.domNode,"display","none");
            }
        },
        getWKT2:function (data,type,filetype) {
            var new_wkt='';
           var me=this;
            if(type == "Polygon"){
                debugger
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

      
    });
});

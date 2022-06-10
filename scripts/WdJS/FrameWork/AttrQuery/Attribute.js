define([
  "dojo/_base/declare",
  "dojo/parser",
  "dijit/_WidgetBase",
  "dijit/_TemplatedMixin",
  "dojo/text!./templates/Attribute.txt",
  "dojo/on",
  "dojo/dom-style",
  "dojo/dom-class",
  "dojo/dom-attr",
  "dojo/dom-construct", 
  "FrameWork/AttrConfig",
  "FrameWork/MapUtil/TransformUtil",
  './Attrshrink',
  './AttrDetail',
  "FrameWork/serviceUtil/workMapService",
  './specialLayerConfig',
  'FrameWork/serviceUtil/layerService',
  './Atrribute_sortTwo',"./Attrbute_enlarge","./Attribute_nzy","./Atrribute_sortTwo2","./Attribute_tdzz"
], function (declare, parser, _WidgetBase, _TemplatedMixin, template, on, domStyle, domClass, domAttr, domConstruct, AttrConfig, TransformUtil, Attrshrink, AttrDetail, workMapService,specialLayerConfig,layerService,Atrribute_sortTwo,Attrbute_enlarge,Attribute_nzy,Atrribute_sortTwo2,Attribute_tdzz) {
    return declare([_WidgetBase, _TemplatedMixin], {
        templateString: template,
        index: 0,
        _details: false,
        _allfiled:false,
        _sort: null,
        count: 0,
        showNum: 4,
        _attributeList: null,
        _showResult:null,
        btnStatus3:true,
        _qp:null,
        _nzypannellist:null,
        _tdzzpannellist:null,
        _setxmfw:null,
        _setydgh:null,
        _enlargedata:null,

        constructor: function (args) {
            
         },
        postCreate: function () {
            this.inherited(arguments);
        },
        startup: function () {
            
            var me = this;
            var Regionpd=user.depts[0].regionCode;
            if(Regionpd == "330324"){
                domStyle.set(me.exportBtn,"display","block");
            }
            // var max_height=document.clientHeight;
            // domStyle.set(me.domNode,"max-height",max_height-200+"px");

            if(_Attrshrink){
                _Attrshrink.destroy();
                _Attrshrink=null;
            }
            if(me._siderbar==undefined){
                dojo.query('.repeatHide').forEach((dom) => {
                    domStyle.set(dom,"display",'none');
                })
                dojo.query('.sidebar-tool').forEach((dom) => {
                    domStyle.set(dom,"display",'none');
                })
            }
         
            domStyle.set(me.domNode,"display",'block');
            
            if (me._started) {
                return;
            }
            parser.parse(me.domNode).then(function () {
                var max=document.body.clientHeight;
                domStyle.set(me.domNode,'max-height',`${max-130}px`);
                me._attributeList = [];
                me._sort = [];
                me.dkCount.innerHTML=``+me._data.length;
                if (me._data.length == 0) {
                    domStyle.set(me.layerBtn, "display", "none");
                    domStyle.set(me.plotsBox2, "display", "none");
                    domStyle.set(me.xqBtn, "display", "none");
                    domStyle.set(me.Btns, "display", "none");
                    domStyle.set(me.content_sort1, "width", "100%");
                    me.content_sort1.innerHTML=`<div style="width: 100%;height: 30px; text-align: center;">查询不到结果！！！</div>`;
                    domStyle.set(me.con,"height","auto");

                } else if(me._data.length == 1){
                    for (var i = 0; i < me._data.length; i++) {
                        me.classification(me._data[i]);
                    }

                    domStyle.set(me.layerBtn, "display", "none");
                    domStyle.set(me.plotsBox2, "display", "none");
                    domStyle.set(me.Btns, "display", "block");
                    domStyle.set(me.content_sort1, "width", "100%");
                    domStyle.set(me.content_sort1, "border-left", "none");
                    var re=me.setFeature(me._data[0]);
                    // sort2
                    if(re == 1000){
                        domStyle.set(me.xqBtn, "display", "none");
                        domStyle.set(me.Btns, "display", "none");
                        me.content_sort1.innerHTML=`<div style="width: 100%;height: 30px; text-align: center;">查询不到结果！！！</div>`;
                        domStyle.set(me.con,"height","auto");
                    }else if(re == 1100){
                        domStyle.set(dojo.byId('content_sort2'), "width", "100%");
                        domStyle.set(dojo.byId('sort2_layer_list'), "width", "100%");
                    }else if(re == 1110){
                        domStyle.set(dojo.byId('content_sort3'), "width", "100%");
                        domStyle.set(dojo.byId('sort3_layer_list'), "width", "100%");
                    }
                }else if(me._data.length > 1){
                    for (var i = 0; i < me._data.length; i++) {
                        me.classification(me._data[i]);
                    }
                    if(me._sort.length == 0){
                        domStyle.set(me.layerBtn, "display", "none");
                        domStyle.set(me.plotsBox2, "display", "none");
                        domStyle.set(me.xqBtn, "display", "none");
                        domStyle.set(me.Btns, "display", "none");
                        me.content_sort1.innerHTML=`<div style="width: 70%;height: 30px; text-align: center;">图层配置未找到</div>`;
                        domStyle.set(me.con,"height","auto");

                    }else{
                        me._data = me._sort[0]._layerData;
                        var layer=me._sort[0].layerid;
                        me.showList(layer);
                        me.showNavItem();
                        domStyle.set(me.Btns, "display", "block");
                        me.index = 0;
                        me.setFeature(me._data[me.index]);
                    }
                }
                let pbd=domStyle.get(me.plotsBox2, "display");
                if(pbd=="block"){
                    if(me._nzypannellist == null || me._nzypannellist == undefined){
                        domStyle.set(me.content_sort1, "width", "77%");
                    }
                }

                me._bindEvents();
            });
        },
        _bindEvents: function () {
            var me = this;
            on(me.close, "click", function () {
                me.destroy();
                me._highlightedLayer.getSource().clear();
            });

            on(me.shrink, "click", function () {
                domStyle.set(me.domNode, 'display', 'none');
                if(_Attrshrink){
                    _Attrshrink.setWidgetVisible(true);
                }else{
                    _Attrshrink = new Attrshrink().placeAt(dojo.body());
                    _Attrshrink.onClick = me.shrinkClick.bind(me);
                    _Attrshrink.startup();
                }
               
            });

            on(me.detail, "click", function (event) {
                if (me._details == false) {
                    domClass.replace(me.detail, "litlleBtn_Active", "litlleBtn");
                    me._details = true;
                } else {
                    domClass.replace(me.detail,  "litlleBtn","litlleBtn_Active");

                    me._details = false;
                }
                me.setFeature(me._data[me.index]);
                if(!me.btnStatus3){
                    me.xqBtn.click();
                    me.btnStatus3=true;
                }
                event.stopPropagation();
            });
            on(me.allfiled, "click", function (event) {
                
                if (me._allfiled == false) {
                    domClass.replace(me.allfiled, "litlleBtn_Active", "litlleBtn");
                    me._allfiled = true;
                } else {
                    domClass.replace(me.allfiled,  "litlleBtn","litlleBtn_Active");
                    me._allfiled = false;
                }
                me.setFeature(me._data[me.index]);
                event.stopPropagation();
            });

            on(me.quanp, "click", function (event) {

                if(me._qp != null){
                    me._qp.destroy();
                }else{
                    var showdata=me._sort;
                    var _qp=new Attrbute_enlarge({"_data":showdata}).placeAt(dojo.body());
                    _qp.startup();
                }
                
               
                
                event.stopPropagation();
            });


            on(me.exportBtn, "click", function () {
               
                var data = me._data[me.index];
                var attributes = me._data[me.index].properties.attributes;
                var getAttrConfig = getAttr();
                var layer = getAttrConfig.layers.find(function (obj) {
                    return obj.id == data.properties.gml.featureType;
                });
                var graphicalAttributes = [];
                for (var key in attributes) {
                    if (key.indexOf("shape") == -1) {
                        var type = "";
                        var value = attributes[key];
                        var field = layer.field.find(function (obj) {
                            return obj.name == key;
                        });
                        if (field == undefined) {
                            type = "string";
                        } else {
                            type = field.type;
                        }
                        if (type == "date") {
                            graphicalAttributes.push({
                                propertyName: key,
                                type: type,
                                value: value.split("T")[0]
                            });
                        } else {
                            graphicalAttributes.push({
                                propertyName: key,
                                type: "string",
                                value: value
                            });
                        }
                    }
                }
                var geom = null;
                if (data.geometry.type == "MultiPolygon") {
                    geom = new ol.geom.MultiPolygon(data.geometry.coordinates);
                } else if (geometry.type == "Polygon") {
                    geom = new ol.geom.Polygon(data.geometry.coordinates);
                } else if (geometry.type == "LineString") {
                    geom = new ol.geom.LineString(data.geometry.coordinates);
                } else if (geometry.type == "MultiLineString") {
                    geom = new ol.geom.MultiLineString(data.geometry.coordinates);
                } else if (geometry.type == "Point") {
                    geom = new ol.geom.Point(data.geometry.coordinates);
                }
                var polygonWKT = new ol.format.WKT().writeGeometry(geom, {
                    dataProjection: "EPSG:4549",
                    featureProjection: "EPSG:4549"
                });

                var graphical = {
                    attributes: graphicalAttributes,
                    wkt: polygonWKT,
                };
                me.graphicalsToZip([graphical], "文件导出.zip");
            });
        },
        setFeature: function (feature) {
            var me = this;
            domStyle.set(me.content_sort1,'display',"block");
            domStyle.set(me.content_sort2,'display',"none");
            //   view.setCenter(ol.extent.getCenter(feature.getGeometry().getExtent()));
            var getAttrConfig = getAttr();
            var obj = getAttrConfig.layers.find(function (obj) {
                // return obj.id == feature.properties.gml.featureType||feature.properties.gml;
                return obj.id == feature.properties.gml.featureType;
            });
           
            if (obj == undefined) {
                alert("AttrConfig中id为'"+feature.properties.gml.featureType+"'的图层配置未找到");
                return 1000;
            }
            me._highlightedLayer.getSource().clear();
            var geom = null;
            
            if (feature.geometry) {
                if (feature.geometry.type == "MultiPolygon" || feature.geometry.type == "MultiLineString"|| feature.geometry.type=="Polygon" ||feature.geometry.type=="LineString") {
                    if (feature.geometry.type == "MultiPolygon") {
                        geom = new ol.Feature({ geometry: new ol.geom.MultiPolygon(feature.geometry.coordinates) });

                        geom.setStyle(me._highlightedStyle);
                    } else if (feature.geometry.type == "MultiLineString") {
                        geom = new ol.Feature({ geometry: new ol.geom.MultiLineString(feature.geometry.coordinates) });
                        geom.setStyle(me._highlightedStyle);
                    }else if ( feature.geometry.type== "Polygon") {
                        geom = new ol.Feature({ geometry: new ol.geom.Polygon(feature.getGeometry().getCoordinates()) });
                        geom.setStyle(me._highlightedStyle);
                    }else if (feature.geometry.type== "LineString") {
                        geom = new ol.Feature({ geometry: new ol.geom.LineString(feature.getGeometry().getCoordinates()) });
                        geom.setStyle(me._highlightedStyle);
                    }
                    if(me._dw != undefined && me._dw ){
                        var r = appConfig.map.getView().getResolutionForExtent(geom.getGeometry().getExtent(), appConfig.map.getSize());
                        appConfig.map.getView().setResolution(r);
                        appConfig.map.getView().setCenter(ol.extent.getCenter(geom.getGeometry().getExtent()));
                    }
               
                } else if (feature.geometry.type == "Point") {
                    geom = new ol.Feature({ geometry: new ol.geom.Point(feature.geometry.coordinates) });
                }
            } else if (feature.getGeometry()) {
                var geoType=feature.getGeometry().getType();
                if (geoType == "MultiPolygon" || geoType== "MultiLineString"||geoType=="Polygon"||geoType=="LineString") {
                    if (geoType == "MultiPolygon") {
                        geom = new ol.Feature({ geometry: new ol.geom.MultiPolygon(feature.getGeometry().getCoordinates()) });
                        geom.setStyle(me._highlightedStyle);
                    } else if (geoType== "MultiLineString") {
                        geom = new ol.Feature({ geometry: new ol.geom.MultiLineString(feature.getGeometry().getCoordinates()) });
                        geom.setStyle(me._highlightedStyle);
                    }else if (geoType== "Polygon") {
                        geom = new ol.Feature({ geometry: new ol.geom.Polygon(feature.getGeometry().getCoordinates()) });
                        geom.setStyle(me._highlightedStyle);
                    }else if (geoType== "LineString") {
                        geom = new ol.Feature({ geometry: new ol.geom.LineString(feature.getGeometry().getCoordinates()) });
                        geom.setStyle(me._highlightedStyle);
                    }


                    if(me._dw != undefined && me._dw ){
                        var r = appConfig.map.getView().getResolutionForExtent(geom.getGeometry().getExtent(), appConfig.map.getSize());
                        appConfig.map.getView().setResolution(r);
                        appConfig.map.getView().setCenter(ol.extent.getCenter(geom.getGeometry().getExtent()));
                    }
                } else if (feature.getGeometry().getType() == "Point") {
                    geom = new ol.Feature({ geometry: new ol.geom.Point(feature.getGeometry().getCoordinates()) });
                }
            }
            try{
                me._highlightedLayer.getSource().addFeature(geom);
            }catch(e){
                console.log(e);
            }
           
              // 内容
              var innerHTML = ``;
              var attributes = feature.properties.attributes || feature.properties;
  
              me._enlargedata={
                  "id":obj.id,
                  "data":attributes,
                  "pd":true
              }


            // pd
            var specialLayer = specialLayerConfig.layers.find(function (specialLayer) { return specialLayer.id == feature.properties.gml.featureType; });
            if(specialLayer!=undefined &&  specialLayer.type=='content_sort2'){
                me._queryShowSort2(feature);
                if(me._data.length == 1){
                    domStyle.set(me.plotsBox2, "display", "none");
                    domStyle.set(dojo.byId('content_sort2'), "width", "100%");
                    domStyle.set(dojo.byId('sort2_layer_list'), "width", "100%");
                }
                return 1100;
            }else if(specialLayer!=undefined &&  specialLayer.type=='content_sort_nzy'){
                me._queryShowSort3(feature,specialLayer.sorce);
                if(me._data.length == 1){
                    domStyle.set(dojo.byId('content_sort3'), "width", "100%");
                    domStyle.set(dojo.byId('sort3_layer_list'), "width", "100%");
                }
                if(me._sort.length > 1){
                    domStyle.set(dojo.byId('content_sort3'), "width", "79%");
                    domStyle.set(dojo.byId('sort3_layer_list'), "width", "79%");
                }
                return 1110;
            }else if(specialLayer!=undefined &&  specialLayer.type=='content_sort_xmfw'){
                
                if(me._setxmfw != null){
                    me._setxmfw.destroy();
                }
                domStyle.set(me.ftp_contain,"display","block");
                var _xmfw = new Atrribute_sortTwo2({_type:"XMFW",_data:feature}).placeAt(me.ftp_contain);
                _xmfw.startup();
                me._setxmfw=_xmfw;
            }else if(specialLayer!=undefined &&  specialLayer.type=='content_sort_ydgh'){
                if(me._setxmfw != null){
                    me._setxmfw.destroy();
                }
                domStyle.set(me.ftp_contain,"display","block");
                var _ydgh = new Atrribute_sortTwo2({_type:"YDGH",_data:feature}).placeAt(me.ftp_contain);
                _ydgh.startup();
                me._setxmfw=_ydgh;
            }else if(specialLayer!=undefined &&  specialLayer.type=='content_tdzz'){
                me._queryShowSort4(feature);
                if(me._data.length == 1){
                    domStyle.set(dojo.byId('content_sort3'), "width", "100%");
                    domStyle.set(dojo.byId('sort3_layer_list'), "width", "100%");
                }
                if(me._sort.length > 1){
                    domStyle.set(dojo.byId('content_sort3'), "width", "79%");
                    domStyle.set(dojo.byId('sort3_layer_list'), "width", "79%");
                }
                return 1110;
            }

          
            
            obj.field.forEach((f) => {
                if (me._details == true) {
                    
                    if(!me._allfiled){
                        var aa=attributes[f.name];
                        if(aa == null || aa == ""){
                            return;
                        }
                    }
                    if (f.name.toLowerCase().indexOf("objectid") < 0 && f.name.toLowerCase().indexOf("shape") < 0 && f.name.toLowerCase().indexOf("st_area_sh") < 0  &&f.name.toLowerCase().indexOf("st_length_") < 0  ) {
                        // alias
                            innerHTML += `<tr> <td>${f.alias||f.name}</td>`;

                        // value
                        if (f.type == "numeric" || f.type == "number" && String(attributes[f.name]).indexOf(".") > 0) {
                            // innerHTML += `<td> ${Number(attributes[f.name])}</td></tr>`;
                            var num = Number(attributes[f.name]);
                            if(f.name == "djqzh"){
                                num = (Array(5).join('0')+num).slice(-5);
                            }
                            innerHTML += `<td> ${num}</td></tr>`;
                        } else if (f.type == "date" && String(attributes[f.name]).indexOf("T") > 0) {
                            innerHTML += `<td> ${attributes[f.name].split("T")[0]}</td></tr>`;
                        }else if(f.type == "timestamp"){
                            var id=feature.properties.gml.featureType;
                            if(id == "BZY_YDGH_PY"){
                                let date=attributes[f.name].split("T");
                                if(date[0]){
                                    innerHTML += `<td>${date[0]}</td>`;
                                }
                            }else{
                                innerHTML += `<td> ${(attributes[f.name] || "")}</td></tr>`;
                            }
                        }else {
                            innerHTML += `<td> ${(attributes[f.name] || "")}</td></tr>`;
                        }
                    }
                } else {
                    
                    if(!me._allfiled){
                        var aa=attributes[f.name];
                        if(aa == null || aa == ""){
                            return;
                        }
                    }
                    if (f.name.toLowerCase().indexOf("objectid") < 0 && f.name.toLowerCase().indexOf("shape") < 0 && f.show != undefined && f.show == 0 && f.name.toLowerCase().indexOf("st_area_sh") < 0  &&f.name.toLowerCase().indexOf("st_length_") < 0) {
                        // f.alias 
                        innerHTML += `<tr> <td>${f.alias||f.name}</td>`;

                        
                        // value
                        if (f.type == "numeric" || f.type == "number" && String(attributes[f.name]).indexOf(".") > 0) {
                            var num = Number(attributes[f.name]);
                            if(f.name == "djqzh"){
                                num = (Array(5).join('0')+num).slice(-5);
                            }
                            innerHTML += `<td> ${num}</td></tr>`;

                        } else if (f.type == "date" && String(attributes[f.name]).indexOf("T") > 0) {
                            innerHTML += `<td> ${attributes[f.name].split("T")[0]}</td></tr>`;
                        }else if(f.type == "timestamp"){
                            var id=feature.properties.gml.featureType;
                            if( f.name=="pzsj"){
                                let date=attributes[f.name].split("T");
                                if(date[0]){
                                    innerHTML += `<td>${date[0]}</td>`;
                                }
                            }else{
                                innerHTML += `<td> ${(attributes[f.name] || "")}</td></tr>`;
                            }
                        }else{
                            innerHTML += `<td> ${(attributes[f.name] || "")}</td></tr>`;
                        }
                    }
                }
            });
            me.content_table.innerHTML = innerHTML;
        },

        classification: function (feature) {
            var me = this;
            // var obj = AttrConfig.layers.find(function (obj) {return obj.id == feature.properties.gml.featureType||feature.properties.gml; });
            var getAttrConfig = getAttr();
            var obj = getAttrConfig.layers.find(function (obj) { return obj.id == feature.properties.gml.featureType; });
            if (obj == undefined) {
                return;
            }
            for (var i = 0; i < me._sort.length; i++) {
                if (me._sort[i].layername == obj.name) {
                    me._sort[i]._layerData.push(feature);
                    return;
                }
            }
            var newSort = {
                layername: obj.name,
                layerid:obj.id,
                _layerData: [feature]
            }
            me._sort.push(newSort)
        },
        // 1-图层
        showNavItem: function () {
            var me = this;
            me.nav.innerHTML = "";
            
            for (var i = 0; i < me._sort.length; i++) {
                var navitem = '';
                if (me._sort[i].layername.length > 7) {
                    navitem = me._sort[i].layername.substring(0, 7) + "...";
                } else {
                    navitem = me._sort[i].layername;
                }
                if (i == 0) {
                    me.nav.innerHTML += `<div count=${i} class="layerNav" style="border: 1px solid #1c74bb;color: #1c74bb;" title="${me._sort[i].layername}">${navitem} </div>`;
                    me.layerSelect.innerHTML = `(${me._sort[i].layername})`;
                } else {
                    me.nav.innerHTML += `<div count=${i} class="layerNav"  title="${me._sort[i].layername}">${navitem} </div>`;
                }
            }

            dojo.query(".layerNav", me.domNode).forEach((dom) => {
                on(dom, "click", function (event) {
                    dojo.query(".layerNav", me.domNode).forEach((dom) => {
                        domStyle.set(dom, 'border', '1px solid #ccc');
                        domStyle.set(dom, 'color', '#a0a0a0');
                    })
                    domStyle.set(dom, 'border', '1px solid #1c74bb');
                    domStyle.set(dom, 'color', '#1c74bb');
                    var domname = domAttr.get(dom, 'title');
                    me.layerSelect.innerHTML = `(${domname})`;
                    for (var i = 0; i < me._sort.length; i++) {
                        if (me._sort[i].layername == domname) {
                            me._data = me._sort[i]._layerData;
                            var layer=me._sort[i].layerid;
                            me.showList(layer);
                            me.index = 0;
                        }
                    }
                    me.setFeature(me._data[me.index]);
                    if(!me.btnStatus3){
                        me.xqBtn.click();
                        me.btnStatus3=true;
                    }
                    event.stopPropagation();
                });
            });
        },
        arrSortByKey :function (arr, givKey) {
            const listArr =arr;
            listArr.sort((data1, data2) => {
                var val1=data1.properties.data;
                var val2=data2.properties.data;

              const val1KeyVal = val1[givKey] || '';
              const app2KeyVal = val2[givKey] || '';
              if (val1KeyVal > app2KeyVal) {
                return 1;
              } else if (val1KeyVal === app2KeyVal) {
                return 0;
              } else {
                return -1;
              }
            })
            return listArr;
          },
        // 2-地块
        showList: function (layer) {
            var me = this;
            me.plotsBox2.innerHTML = '';
            var innerStr = '';
            var getAttrConfig = getAttr();
            var showzd = '项目名称'
            if(layer == 'gh_kg_xmfw_py_latest_3_0'){
                showzd='批准时间'
                me.arrSortByKey(me._data,'pzsj');
            }
            for (var i = 0; i < me._data.length; i++) {
                var dataValue = me._data[i].properties.data;

                var obj = getAttrConfig.layers.find(function (obj) { return obj.id == me._data[i].properties.gml.featureType; });
                var _pd=false;
                obj.field.forEach((el)=>{

                    if(el.alias== showzd){
                        var pd=dataValue[el.name];
                        if(pd== null){
                            _pd=false;
                            return 
                        }
                        if(i==0){
                            innerStr +=`<div class="plot" style="color:#1c74bb;border:1px solid #1c74bb" data_num="${i}" title="${dataValue[el.name]}" >${dataValue[el.name]||"0"}</div>`;
                        }else{
                            innerStr +=`<div class="plot" data_num="${i}" title="${dataValue[el.name]}" >${dataValue[el.name]||"0"}</div>`;
                        }
                        _pd=true;
                    }
                });
                if(!_pd){
                    if(i==0){
                        innerStr +=`<div class="plot" style="color:#1c74bb;border:1px solid #1c74bb" data_num="${i}" title="${dataValue[obj.field[0].name]}" >${dataValue[obj.field[0].name]}</div>`;
                    }else{
                        innerStr +=`<div class="plot" data_num="${i}" title=${dataValue[obj.field[0].name]} >${dataValue[obj.field[0].name]}</div>`;
                    }
                }
            }

            me.plotsBox2.innerHTML = innerStr;

            dojo.query(".plot", me.domNode).forEach((dom) => {
                on(dom, "click", function (event) {
                    dojo.query(".plot", me.domNode).forEach((dom) => {
                        domStyle.set(dom, 'color', '#a0a0a0');
                        domStyle.set(dom, 'border', '1px solid #ccc');})
                    domStyle.set(dom, 'color', '#1c74bb');
                    domStyle.set(dom, 'border', '1px solid #1c74bb');
                    var innreVal=domAttr.get(dom,"title");
                    // me.plotSelect.innerHTML=  `(${innreVal})`;
                    var domname = domAttr.get(dom, 'data_num');
                    me.index = domname;
                    me.setFeature(me._data[ me.index]);
                    if(!me.btnStatus3){
                        me.xqBtn.click();
                        me.btnStatus3=true;}
                    event.stopPropagation();
                });
            });
        },
        shrinkClick: function () {
            var me = this;
            domStyle.set(me.domNode, "display", "block");
        },
        _destroy: function () {
            var me = this;
            me.destroy();
        },
        graphicalsToZip: function (graphicals) {
            workMapService.uploadZip(graphicals).then(function (result) {
                if (result.code == '200') {
                    workMapService.fileDownloadByPath(result.data);
                } else {
                    alert(result.msg);
                }
            })
        },
        _pdData:function(feature){
            var id=feature.properties.gml.featureType;
            var re=false;
            for(var i=0;i<specialLayerConfig.layers.length;i++){
                var layer=specialLayerConfig.layers[i];
                if(id==layer.id){
                    re=true;
                    return re;
                }
            }
        },
        _queryShowSort2:function(feature){
            var me=this;
            var obj = specialLayerConfig.layers.find(function (obj) { return obj.id == feature.properties.gml.featureType; });
            var data1=null;
            if(feature.properties.data != undefined){
                data1=feature.properties.data[`${obj.data[0]}`];
            }else{
                data1=feature.properties[`${obj.data[0]}`];
            }
            // bdcbh为空
            if(data1 == undefined){
                data1=null;
            }
            if(data1==null){
                me._showSort2(obj,[feature.properties.attributes||feature.properties],null);
                return;
            }else{
                layerService.getLayersMsg(obj,data1,null).then(function(result){
                    if(result.code=='200'){
                        if(result.data.length != 0){
                            me._showSort2(obj,result.data,data1);
                        }else{
                            me._showSort2(obj,[feature.properties.attributes||feature.properties],null);
                        }
                    }else{
                        me._showSort2(obj,[feature.properties.attributes||feature.properties],null);
                        console.log(result.msg+"_getLayersMsg");
                        // alert(result.msg);
                    }
                })
            }
            
        },
        _queryShowSort3:function (feature,sorce) {
            var me=this;
            domStyle.set(me.content_sort1,'display',"none");
            domStyle.set(me.content_sort2,'display',"block");
            if(me._nzypannellist != null){
                me._nzypannellist.destroy();
            }
            var obj = specialLayerConfig.layers.find(function (obj) { return obj.id == feature.properties.gml.featureType; });
            var _nzypannel=new Attribute_nzy({_obj :obj , _data :feature,_details:me._details,_allfiled:me._allfiled,_sorce:sorce }).placeAt(me.content_sort2);
            _nzypannel.updataenlarge=me.updataenlarge.bind(me);
            _nzypannel.startup(); 
            me._nzypannellist=_nzypannel
        },
        _queryShowSort4:function (feature) {
            var me=this;
            domStyle.set(me.content_sort1,'display',"none");
            domStyle.set(me.content_sort2,'display',"block");
            if(me._tdzzpannellist != null){
                me._tdzzpannellist.destroy();
            }
            var obj = specialLayerConfig.layers.find(function (obj) { return obj.id == feature.properties.gml.featureType; });
            var _tdzzpannel=new Attribute_tdzz({_obj :obj , _data :feature,_details:me._details,_allfiled:me._allfiled}).placeAt(me.content_sort2);
            _tdzzpannel.startup();
            _tdzzpannel.updataenlarge=me.updataenlarge.bind(me);
            me._tdzzpannellist=_tdzzpannel
        },

        _showSort2:function(obj,sort2_result,data1){
            var me=this;
            domStyle.set(me.content_sort1,'display',"none");
            domStyle.set(me.content_sort2,'display',"block");
            var id=obj.id;
            if(me._showResult!=null){
                me._showResult.destroy();
                me._showResult=null;
            }
            let pbd=domStyle.get(me.plotsBox2,"display");
            let width="100%";
            if(pbd=="block"){
                width="77%";
            }
            console.log(width);
            me._showResult=new Atrribute_sortTwo({contentW:width,_id:id , _data:sort2_result , _data1:data1,_details:me._details,_allfiled:me._allfiled, _highlightLayer:me._highlightedLayer,_style:me._highlightedStyle}).placeAt(me.content_sort2);
            me._showResult.startup();
        },
        updataenlarge:function(data){
            this._enlargedata=data;
        }
    });
});

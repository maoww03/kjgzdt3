define([
  "dojo/_base/declare",
  "dojo/parser",
  "dijit/_WidgetBase",
  "dijit/_TemplatedMixin",
  "dojo/text!./templates/serviceSearchTemplate.txt",
  "dojo/on",
  "dojo/dom-style",
  "dojo/dom-class",
  "dojo/dom-attr",
  "dojo/dom-construct",
  "FrameWork/MapUtil/SuperMapWFSQuery",
  "FrameWork/AttrConfig", 
  "./resultList",
  "FrameWork/serviceUtil/searchService",
    "FrameWork/serviceUtil/collectService",
    "FrameWork/AttrQuery/Attribute",
    "./searchTable","FrameWork/Setalert/Setalert","./LayerConfig"
], function (declare, parser, _WidgetBase, _TemplatedMixin, template, on, domStyle,
    domClass, domAttr, domConstruct, SuperMapWFSQuery, AttrConfig, resultList, searchService, collectService, Attribute,searchTable,Setalert,LayerConfig) {
    return declare([_WidgetBase, _TemplatedMixin], {
        templateString: template,
        index: 0,
        isExpand: false,
        showFilters:null,
        _type:null,
        _result:null,
        _userid:1,
        _count:0,
        _time:null,
        _timestamp: null,
        _highlightedLayer: null,
        _attrLisy: null,
        _isShow:1,
        _tableSaerch:[], //显示表格 {layerid name where }
        _searchValue:null,
        //高亮图层颜色
        _highlightedStyle: new ol.style.Style({
            // 默认点样式
            text: new ol.style.Text({
                font: "13px Microsoft YaHei",
                offsetY: -15,
                fill: new ol.style.Fill({
                    color: "#000"
                }),
                stroke: new ol.style.Stroke({
                    color: "#fff",
                    width: 2
                })
            }),
            image: new ol.style.Circle({
                radius: 6,
                fill: new ol.style.Fill({
                    color: "red"
                })
            }),
            // 默认多面形中多边形样式 style_setting为false
            fill: new ol.style.Fill({
                color: "rgba(255,0,0,0.5)"
            }),
            stroke: new ol.style.Stroke({
                color: "BLACK",
                width: 4,
                lineDash: [1, 2, 3, 4, 5, 6]
            })
        }),
        queryData:[],
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
                me._bindEvents();
                me._type='dktc';
            });
        },
        _bindEvents: function () {
            var me=this;
            on(this.close, "click", function () {
                if (me._attrLisy) {
                    me._attrLisy._highlightedLayer.getSource().clear();
                    me._attrLisy.destroy();
                }
                domStyle.set(dojo.byId('search_result'),'display','none');
            }.bind(this));
            on(this.layerType,"change",function(){
                me._type=this.layerType.value;
            }.bind(this));
            
           on(me.tableList,"click",function(){
                if(me._tableSaerch.length<1){
                    return alert("请先选择图层查询结果");
                }
                if(me._count != 0){
                    return alert("加载完后点击");
                }
                let table = new searchTable({_data:me._tableSaerch,data:me.queryData}).placeAt(document.body);
                table.startup();
                table.showAttr = me.showAttr.bind(me);
           });
           
            on(me.searchTextDom,"keyup",function(){
                me.queryData=[];
                me._tableSaerch=[];
                if(me._isShow==0){
                    domStyle.set(me.more, "background-image", 'url(image/serviceseach/up.png)');
                    me._isShow=1;
                }

                var str=me.searchTextDom.value;
                str=str.trim();
                if (str != null && str != '') {
                    me._count = 0;
                    me.searchBtn.click();
                } else {
                    domStyle.set(dojo.byId('search_result'), 'display', 'none');
                    me._timestamp = new Date().getTime();
                    domStyle.set(me.loading, "display", 'none');
                    domStyle.set(me.more, "display", 'block');
                    me.stopTime();
                }
            }.bind(this));

            on(me.more,"click",function(){
                if(me._isShow==1){
                    domStyle.set(me.content, "display", 'none');
                    domStyle.set(me.more, "background-image", 'url(image/serviceseach/down.png)');
                    me._isShow=0;
                }else if(me._isShow==0){
                    domStyle.set(me.content, "display", 'block');
                    domStyle.set(me.more, "background-image", 'url(image/serviceseach/up.png)');
                    me._isShow=1;
                }
            }.bind(this));

            on(this.searchBtn, 'click', function () {
                if(me._isShow==0){
                    domStyle.set(me.more, "background-image", 'url(image/serviceseach/up.png)');
                    me._isShow=1;
                }
                me.queryData=[];
                me._tableSaerch=[];
                me.content.innerHTML='';
                if(me._result){
                    for(var i=0;i<me._result.length;i++){
                        me._result[i].destroy();
                    }
                    me._result=[];
                }
                if(me._type==null){
                    alert("请选择图层");
                }else{
                    domStyle.set(dojo.byId('content'),'display','block');
                    domStyle.set(dojo.byId('search_result'),'display','block');
                    domStyle.set(me.loading, "display", 'block');
                    domStyle.set(me.more, "display", 'none');
                   
                    var _timestamp = new Date().getTime();
                    me._timestamp = _timestamp;
                    me._time=setInterval(()=>{
                        if(me._count==0 && me._type=='dktc'){
                            domStyle.set(me.loading,"display",'none');
                            domStyle.set(me.more, "display", 'block');
                            me.stopTime();
                        }else if(me._count==1 && me._type=='sctc'){
                            domStyle.set(me.loading,"display",'none');
                            domStyle.set(me.more, "display", 'block');
                            me._count=0;
                            me.stopTime();
                        }
                    },1000);

                    if(me._type=='dktc'){
                        var allvals=me.searchTextDom.value;
                        allvals=allvals.trim().split(/\s+/);
                        var layers = appConfig.map.getLayers().array_;
                        var _pd=false;
                        for (var i = layers.length - 1; i >= 0; i--) {
                            var layer = layers[i].values_;
                            if (layer.layerType === "SuperMapWMTS" && layer.visible && layer.thematicMap) {
                               
                                me.getQueryState(allvals, layer, _timestamp);  
                               me._count++; 
                               _pd=true;
                            }
                        }
                        if(!_pd){
                            Setalert.rompt("请先打开图层，才能查询","alert-danger");
                        }
                    }else if(me._type=='sctc'){
                        var allvals=me.searchTextDom.value;
                        allvals=allvals.trim().split(/\s+/);
                        me._userid=user.id;
                        collectService.get_collectLayer(me._userid).then(function (result) {
                            if (result.code == 200) {
                                me._count++;
                                for (var j = 0; j < result.data.length; j++) {
                                    var layers = appConfig.map.getLayers().array_;
                                    for (var i = 0; i< layers.length ; i++){
                                        if(layers[i].values_.id==result.data[j].layerid){
                                            me.getQueryState(allvals, layers[i].values_, _timestamp);   
                                            me._count++;
                                        }
                                    }
                                    
                                }
                            }

                        })
                    }
                }
                
            }.bind(this));

        },
        getQueryState: function (valArray, layer, timestamp){
            debugger
            var getAttrConfig = getAttr();
            var me=this;
            me._searchValue=valArray[0];
            var where='';
            var layerid= layer.id

            debugger
            var _changeLayer=LayerConfig.layers.find(function(obj){
                return obj.id ==layerid;
            })
            if(_changeLayer!=undefined && _changeLayer!= null){
                layerid=_changeLayer.querytable;
            }

            var obj =  getAttrConfig.layers.find(function (obj) {
                return obj.id == layerid;
            });
            if(obj == undefined && obj == null ){
                me._count -= 1;
                return null;
            }
            for(var i=0;i<valArray.length;i++){
                var val=valArray[i];
                if (!isNaN(val)) { 
                    for(var j=0;j<obj.field.length;j++){
                        if(obj.field[j].type=='number' ||obj.field[j].type=='numeric'){
                            if(where==''){
                                where+=`${obj.field[j].name}='${val}'`;
                            }else{
                                where+=` and ${obj.field[j].name}='${val}'`;
                            }
                        }
                        if(obj.field[j].type=='string'){
                            if(where==''){
                                where+=`${obj.field[j].name} like '%${val}%'`;
                            }else{
                                where+=` or ${obj.field[j].name} like '%${val}%'`;
                            }
                        }

                    }
                }else {
                    for(var k=0;k<obj.field.length;k++){
                        if(obj.field[k].type=='string'){
                            if(where==''){
                                where+=`${obj.field[k].name} like '%${val}%'`;
                            }else{
                                where+=` or ${obj.field[k].name} like '%${val}%'`;
                            }
                        }
                    }
                } 
            }
            
            me._tableSaerch.push({name:obj.name,layerid: obj.id,where:where});
            me.getQueryResult(obj.name, obj.id, where, timestamp);
        },
        getQueryResult: function (name, layerID, where,timestamp) {
            var me = this;
            me._result = [];
            searchService.querty_Feature(layerID, where,1,30).then(function (result) {
                if (timestamp == me._timestamp) {
                    if (result.code == 200) {
                        me.queryData.push({name:name,layerId:layerID,data:result.data});
                        for (var i = 0; i < result.data.length; i++) {
                            var featuresList = new resultList({ _data: result.data[i], layername: name, layerid: layerID ,_Value:me._searchValue}).placeAt(me.content);
                            featuresList.showAttr = me.showAttr.bind(me);
                            featuresList.startup();
                            me._result.push(featuresList);
                        }
                    }
                    me._count -= 1;
                }
            })
        },
        stopTime: function () {
            var me = this;
            clearInterval(me._time);
        },
        showAttr: function (data, layerid) {
            var me = this;
            if (me._attrLisy) {
                me._attrLisy._highlightedLayer.getSource().clear();
                me._attrLisy.destroy();
            }
            me._attrLisy = null;


            me._highlightedLayer = new ol.layer.Vector({
                id: "highlighted",
                layerTitle: "属性查询",
                graphicMap: true,
                source: new ol.source.Vector({
                    features: []
                }),
                //style:me._highlightedStyle,
                zIndex: appConfig.map.getLayers().getLength() + 1
            });
            appConfig.map.addLayer(this._highlightedLayer);

            var feature;
            if (data.shape) {
                var wkt = data.shape;
                var format = new ol.format.WKT();
                feature = format.readFeature(wkt);
                // 定位
                var pd=feature.getGeometry().getType();
                me._highlightedLayer.getSource().clear();
                if(pd=="Point"){
                    r=1;
                    appConfig.map.getView().setZoom(16);
                    appConfig.map.getView().setCenter(feature.getGeometry().flatCoordinates);
                }else{
                     var r = appConfig.map.getView().getResolutionForExtent(feature.getGeometry().getExtent(), appConfig.map.getSize());
                     appConfig.map.getView().setResolution(r);
                     appConfig.map.getView().setCenter(ol.extent.getCenter(feature.getGeometry().getExtent()));
                }
                me._highlightedLayer.getSource().addFeature(feature);   
                me._highlightedLayer.getSource().refresh();
            }
            // else {
            //     feature={}
            // }
            feature.properties = data;
            // feature.properties.gml=me.layerid;
            feature.properties.gml = { featureType: layerid };

            var attr = new Attribute({
                _data: [feature],
                _highlightedLayer: me._highlightedLayer,
                _highlightedStyle: me._highlightedStyle
            }).placeAt(dojo.byId("mapDiv"));
            attr.startup();
            me._attrLisy = attr;
        }      
    });
});


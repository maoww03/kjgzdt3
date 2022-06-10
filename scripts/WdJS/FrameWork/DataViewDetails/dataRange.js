define(["dojo/_base/declare", 
    "dojo/text!./templates/dataRange.txt", 
    "dijit/_TemplatedMixin", 
    "dijit/_WidgetBase", 
    "dojo/on", 
    "dojo/dom-style", 
    'dojo/parser', 
    "dojo/dom-class", 
    "dojo/dom-attr", 
    "dojo/_base/lang", 
    'dojo/_base/array',
    "FrameWork/MapUtil/Map",
    "FrameWork/MapUtil/MapConfig2", "FrameWork/MapUtil/MapFactory",'FrameWork/serviceUtil/gisocnService','FrameWork/Loading/Loading'],
    function (declare, template, TemplatedMixin, WidgetBase, on, domStyle, parser, domClass, domAttr, lang, array,Map,MapConfig2,MapFactory,gisocnService,Loading) {
        return declare([WidgetBase, TemplatedMixin], {
            templateString: template,
          
            _started: false,
            mapData:null,
            _MapConfig:null,
            mapData2:null,

            rangeName:null,
            rangeShape:null,



            constructor: function (args) {},
            postCreate: function () {
                this.inherited(arguments);
                this.onCreate();
            },
            onCreate: function () {
                var me = this;
            },
            startup: function () {
                var me = this;
                if (this._started) {
                    return;
                }
                parser.parse(this.domNode).then(function () {
                    me.getRangeData();
                   
                    this.bindEvent();
                }.bind(this));
                this._started = true;
            },
            bindEvent: function () {
               var me=this;
                on(this.domNode, 'click', function () {
                
                }.bind(this));
            },
            getRangeData:function(){
                var me=this;
                debugger
                Loading.show(me.domNode);
                gisocnService.getDataRange(me._serviceId).then(function(re){
                   Loading.hide();
                    if(re){
                        let data=JSON.parse(re);
                        me.rangeName=data.dataList[0].fname;
                        me.rangeShape=data.dataList[0].shape;
                        me.setMap();
                    }
                },function(){
                   Loading.hide();
                    
                });
            },
            setMap(){
                var me=this;
                me._MapConfig=_otherRegion();
                me.visibleDiv = [];
                me._waterMarkList = [];
                me._MapConfig.option.view.projection = projection_4549;
                var _view = new ol.View(me._MapConfig.option.view);
                me.mapData2 = new ol.Map({
                    controls: ol.control.defaults({ attribution: false, zoom: false, rotate: false }).extend([]),
                    view: _view,
                    target: "mapContent",
                    renderer: "canvas",
                });
                me._initMap2Layers();
                me._setBaseMapSelected();

                me.contentName.innerHTML=me.rangeName;
                me.contentName.title=me.rangeName;
                if(me.rangeShape){
                    debugger
                    let wkt=me.rangeShape;
                    let geometry=new ol.format.WKT();
                    let tx=geometry.readFeature(wkt);
                    let style=new ol.style.Style({
                        stroke:new ol.style.Stroke({
                            color:"red",
                            width:2
                        })
                    });
                    let sur=new ol.source.Vector();
                    sur.addFeature(tx);
                    var vectorLayer=new ol.layer.Vector({
                        source:sur,
                        style:style,
                        zIndex:me.mapData2.getLayers().array_.length+1
                    });
                    me.mapData2.addLayer(vectorLayer);
                }
            },
            _initMap2Layers: function () {
                debugger
                var me = this;
                for (var i = 0; i < MapConfig2.layers.length; i++) {
                    var _layer = MapConfig2.layers[i];
                    if (_layer.layerType === "GroupLayer" && _layer.subLayers instanceof Array && _layer.subLayers.length > 0 && _layer.baseMap) {
                        if(_layer.visible==true){
                            
                            MapFactory._getsubLayers(_layer.subLayers, _layer, MapConfig2, me.mapData2);
                        }
                    }
                }
            },
            _setBaseMapSelected: function () {
                var me = this;
                var caption = dojo.byId("baseMapChangeSelect-caption").innerHTML;
                var _mapLayers = me.mapData2.getLayers().array_;
                for (var i = 0; i < _mapLayers.length; i++) {
                    var _layer = _mapLayers[i];
                    var _values = _layer.values_;
                    if (_values.baseMap) {
                        _layer.setVisible(_values.groupCaption === caption);
                    }
                }
            },
            LoadingCtrl:function(pd){},
        });
    });


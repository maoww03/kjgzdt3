define(["dojo/_base/declare", "dojo/text!./templates/regionTemplate.txt", "dijit/_TemplatedMixin", "dijit/_WidgetBase", "dojo/on", "dojo/dom-style", 'dojo/parser', "dojo/dom-class", "dojo/dom-attr", "dojo/_base/lang", 'dojo/_base/array','FrameWork/serviceUtil/regionService',"./regionList","./regionNav"],
    function (declare, template, TemplatedMixin, WidgetBase, on, domStyle, parser, domClass, domAttr, lang, array,regionService,regionList,regionNav) {
        return declare([WidgetBase, TemplatedMixin], {
            templateString: template,
            data: null,
            type: null,

            _started: false,
            _isOver: false,

            _regionListArray:[],
            _regionNavRegion: null,
            _regionNavStreet: null,
            _highlightedLayer: null,
            _highlightedStyle: new ol.style.Style({
                // 默认多面形中多边形样式 style_setting为false

                stroke: new ol.style.Stroke({
                    color: "red",
                    width: 2
                })

            }),

            _type:'region',

            constructor: function (args) {

            },
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
                    this.getData();
                    this.bindEvent();

                }.bind(this));

                this._started = true;
            },
       

            getData: function (code){
                var me=this;
                if (this._type === "region") {
                    
                    for (var i = 0; i < this._regionListArray.length; i++) {
                        this._regionListArray[i].destroy();//销毁
                    }
                    this._regionListArray = [];
                    domStyle.set(me.loading,"display","block");
                    regionService.get_region().then(function (result) {
                        if (result.code == 200) {
                            for (var i = 0; i < result.data.length; i++) {
                                var _regionList = new regionList({ data: result.data[i], type: "street" }).placeAt(me.Region_con);
                                _regionList.onClick = me.onClick.bind(me);
                                _regionList.startup();
                                me._regionListArray.push(_regionList);
                            }
                            domStyle.set(me.loading,"display","none");
                        }else{
                            domStyle.set(me.loading,"display","none");
                        }
                    })
                }else if (this._type === "street") {
                    for (var i = 0; i < this._regionListArray.length; i++) {
                        this._regionListArray[i].destroy();//销毁
                    }
                    this._regionListArray = [];
                    domStyle.set(me.loading,"display","block");
                    regionService.get_street(code,true).then(function (result) {
                        if (result.code == 200) {
                           for (var i = 0; i < result.data.length; i++) {
                                if(result.data[i].name!==' '){
                                    var _regionList = new regionList({ data: result.data[i], type: "village" }).placeAt(me.Region_con);
                                    _regionList.onClick = me.onClick.bind(me);
                                    _regionList.startup();
                                    me._regionListArray.push(_regionList);
                                }
                            }
                            domStyle.set(me.loading,"display","none");
                        }else{
                            alert(result.msg);
                            domStyle.set(me.loading,"display","none");
                        }
                    })
                }else  if (this._type === "village") {
                    for (var i = 0; i < this._regionListArray.length; i++) {
                        this._regionListArray[i].destroy();//销毁
                    }
                    this._regionListArray = [];
                    domStyle.set(me.loading,"display","block");
                    regionService.get_villige(code,true).then(function (result) {
                        if (result.code == 200) {
                           for (var i = 0; i < result.data.length; i++) {
                                var _regionList = new regionList({ data: result.data[i] }).placeAt(me.Region_con);
                                _regionList.onClick = me.onClick.bind(me);
                                _regionList.startup();
                                me._regionListArray.push(_regionList);
                            }
                            domStyle.set(me.loading,"display","none");
                        }else{
                            alert(result.msg);
                            domStyle.set(me.loading,"display","none");
                        }
                    })
                  
                }
            },

            onClick:function(name,code,extent,shape,type){
                var me=this;
                this._type = type;
                //this.targetDom.innerHTML = name;
                //1regionNav
                // domStyle.set(me.loading,"display","block");
                if (type == "street") {
                    var me=this;
                    domStyle.set(me.loading,"display","block");
                    regionService.get_RegionbyCode(code,true).then(function (result) {
                        if (result.code == 200) {
                            me.getData(code);
                            me.locationData(result.data.extent,result.data.shape);
                            domStyle.set(me.loading,"display","none");
                        }else{
                            alert(result.msg);
                            domStyle.set(me.loading,"display","none");
                        }
                    })

                    this._regionNavRegion = new regionNav({ data: name, code: code, type: type }).placeAt(this.RegionName);
                    this._regionNavRegion.onClick = this.navClick.bind(this);
                    this._regionNavRegion.startup();
                }  else if (type == "village") {
                
                    this._regionNavStreet = new regionNav({ data: name, code: code, type: type }).placeAt(this.RegionName);
                    this._regionNavStreet.onClick = this.navClick.bind(this);
                    this._regionNavStreet.startup();
            
                    this.getData(code);
                    this.locationData(extent,shape);

                }else{

                    this.getData(code);
                    this.locationData(extent,shape);

                }

            },
        
            navClick: function (name,code, type) {
                var me=this;
                // me.targetDom.innerHTML = name;
                me._type = type;

                // 1.清空nav
                if (type == "street") {
                    if (this._regionNavRegion != null) {
                        this._regionNavRegion.destroy();
                        this._regionNavRegion = null;
                    }
                    if (this._regionNavStreet != null) {
                        this._regionNavStreet.destroy();
                        this._regionNavStreet = null;
                    }
                }
                else if (type == "village") {
                    if (this._regionNavStreet != null) {
                        this._regionNavStreet.destroy();
                        this._regionNavStreet = null;
                    }
                }

                // 2.设置nav
                if (type == "street") {
                    this._regionNavRegion = new regionNav({ data: name, code: code, type: type }).placeAt(this.RegionName);
                    this._regionNavRegion.onClick = this.navClick.bind(this);
                    this._regionNavRegion.startup();
                } else if (type == "village") {
                    this._regionNavStreet = new regionNav({ data: name, code: code, type: type }).placeAt(this.RegionName);
                    this._regionNavStreet.onClick = this.navClick.bind(this);
                    this._regionNavStreet.startup();
                }

                // 3 region_con
                this.getData(code);
            },
            locationData: function (extent,shape) {

                //1.extent
                //if(extent){
                //    var a=JSON.parse(extent);
                //    extent=[a.xmin,a.ymin,a.xmax,a.ymax];

                    
                //}


                if (this._highlightedLayer == null) {
                    this._highlightedLayer = new ol.layer.Vector({
                        id: "region-highlighted",
                        layerTitle: "行政区划",
                        graphicMap: true,
                        source: new ol.source.Vector({
                            features: []
                        }),
                        zIndex: appConfig.map.getLayers().getLength() + 1
                    });
                    appConfig.map.addLayer(this._highlightedLayer);
                }


                //2.shape
                if(shape){
                    var wkt=shape;
                    var format = new ol.format.WKT();
                    feature = format.readFeature(wkt);
                    feature.setStyle(this._highlightedStyle);

                    var r = appConfig.map.getView().getResolutionForExtent(feature.getGeometry().getExtent(), appConfig.map.getSize());
                    appConfig.map.getView().setResolution(r);
                    appConfig.map.getView().setCenter(ol.extent.getCenter(feature.getGeometry().getExtent()));

                }


                //3清空 添加
                this._highlightedLayer.getSource().clear();
                this._highlightedLayer.getSource().addFeature(feature);

            },
           
            bindEvent: function () {
                
                /**close**/ 
                on(this.close, 'click', function () {
                    this.setWidgetVisible(false);
                }.bind(this));

                /**nowCity**/ 
                on(this.nowCity, 'click', function () {
                    this._type = "region";
                    if (this._regionNavStreet != null) {
                        this._regionNavStreet.destroy();
                        this._regionNavStreet = null;
                    }

                    if (this._regionNavRegion != null) {
                        this._regionNavRegion.destroy();
                        this._regionNavRegion = null;
                    }
                   
                    this.getData();
                }.bind(this));

            },
          
            setWidgetVisible:function(visible){
                if (visible) {
                    domStyle.set(this.domNode, 'display', 'block');
                    // dojo.byId('siderbar-container').style.display = "block";
                } else {
                    domStyle.set(this.domNode, 'display', 'none');
                    // dojo.byId('siderbar-container').style.display = "none";
                }
            }
        });
    });
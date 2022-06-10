define(["dojo/_base/declare", "dojo/text!./templates/regionToolTemplate.txt", "dijit/_TemplatedMixin", "dijit/_WidgetBase", "dojo/on", "dojo/dom-style", 'dojo/parser', "dojo/dom-class", "dojo/dom-attr", "dojo/_base/lang", 'dojo/_base/array', 'FrameWork/serviceUtil/regionService', './regionList', 'FrameWork/MapUtil/MapFactory'],
    function (declare, template, TemplatedMixin, WidgetBase, on, domStyle, parser, domClass, domAttr, lang, array, regionService, regionList,MapFactory) {
        // sideboxConfig   menuTemplate.html
        return declare([WidgetBase, TemplatedMixin], {
            templateString: template,
            data: null,
            isLast: null,

            _started: false,
            // _isOver: false,
            _highlightedLayer: null,
            _highlightedStyle: new ol.style.Style({
                stroke: new ol.style.Stroke({
                    color: "red",
                    width: 2
                })

            }),

            constructor: function (args) {

            },
            postCreate: function () {
                this.inherited(arguments);
                this.onCreate();
            },
            onCreate: function () {
                var me = this;
            },
            // 11
            startup: function () {
                var me = this;
                if (this._started) {
                    return;
                }
                parser.parse(this.domNode).then(function () {
                    this._setposition();
                    this._settext();
                    this.getData();
                    this.bindEvent();

                }.bind(this));

                this._started = true;
            },

            // 事件绑定
            bindEvent: function () {


                on(this.domNode, 'mouseover', function () {
                    var aa=user.depts[0].regionCode;
                    var b=aa.indexOf("330300");
                    if(b >= 0){
                        domStyle.set(this.subItem, 'display', 'block');
                    }
                }.bind(this));

                on(this.domNode, 'mouseout', function () {
                    domStyle.set(this.subItem, 'display', 'none');
                }.bind(this));

                on(this.city, 'click', function (evt) {
                    debugger
                    evt.stopPropagation();
                    this.text.innerHTML = this.city.innerHTML;
              
                    regionCode="330300";
                    // 1-清除
                    if(this._highlightedLayer){
                        this._highlightedLayer.getSource().clear();
                    }
                    // 2-updataztree
                    this._changeViewBar();

                    // 3-全图
                    this._MapConfig=_otherRegion();
					
                    var cirNum=appConfig.map.getLayers().array_.length;
                    for (var i = 0; i < cirNum; i++) {
                            var layer = appConfig.map.getLayers().array_[0];
                            appConfig.map.removeLayer(layer);
                    }
					
					MapFactory.loadLayers(appConfig.map, this._MapConfig);
					
                    var r = appConfig.map.getView().getResolutionForExtent(this._MapConfig.extent, appConfig.map.getSize());
                    appConfig.map.getView().setResolution(r);
                    appConfig.map.getView().setCenter(ol.extent.getCenter(this._MapConfig.extent));
                    domStyle.set(this.subItem, 'display', 'none');
                }.bind(this));
            },
            getData: function () {
                var me=this;
                regionService.get_region2().then(function (result) {
                    if (result.code == "200") {
                        result.data.sort(function (a, b) {
                            return a.code - b.code;
                        });
                        for (var i = 0; i < result.data.length; i++) {
                            var _regionList = new regionList({ data: result.data[i] }).placeAt(this.regionItem);
                            _regionList.locationData=me.locationData.bind(me);
                            _regionList._settext=me._settext.bind(me);
                            _regionList.startup();
                        }
                    } else {
                        //alert(result.msg);
                    }
                }.bind(this));
            },
            locationData: function (extent,shape) {
                //1.extent
                if(extent){
                   var a=JSON.parse(extent);
                   extent=[a.xmin,a.ymin,a.xmax,a.ymax];
                }
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

                    //3清空 添加
                    this._highlightedLayer.getSource().clear();
                    this._highlightedLayer.getSource().addFeature(feature);
                }
             
            },
            _changeViewBar:function(){
                // _initZtree
                array.forEach(appConfig.btns, function (btn) {
                    if (btn.id === "qml") {
                        btn.fun._widget._initZtree()
                    }
                }.bind(this));

            },
            _settext:function(){
                var me=this;
                me.text.innerHTML=region_Name;
            },
            _setposition:function(){
                var code=regionCode;
                if(code == "330305"){
                    code = "330322";
                }
                var me=this;
                regionService.get_RegionbyCode(code,true).then(function(re){
                    if(re.code=='200' ){
                        if(re.data != null){
                        me.locationData(re.data.extent,re.data.shape);

                        }
                    }else{
                        alert(re.msg);
                    }
                })
            }

        });
    });


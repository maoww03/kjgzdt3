define(["dojo/_base/declare", "dojo/text!./templates/regionListTemplate.txt", "dijit/_TemplatedMixin", "dijit/_WidgetBase", "dojo/on", "dojo/dom-style", 'dojo/parser', "dojo/dom-class", "dojo/dom-attr", "dojo/_base/lang", 'dojo/_base/array','FrameWork/serviceUtil/regionService', 'FrameWork/MapUtil/MapFactory'],
    function (declare, template, TemplatedMixin, WidgetBase, on, domStyle, parser, domClass, domAttr, lang, array,regionService,MapFactory) {
        return declare([WidgetBase, TemplatedMixin], {
            templateString: template,
            data: null,

            _staus:false,
            _started: false,
            _widget:null,
     

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
                    this.domNode.innerHTML= this.data.name; 
                    this.bindEvent();
                }.bind(this));

                this._started = true;
            },

            
            bindEvent: function () {
              
                on(this.domNode, 'mouseover', function (evt) {
                    domStyle.set(this.domNode, 'background-color', '#0d65ad');
                    domStyle.set(this.domNode, 'color', 'white');
                }.bind(this));

                on(this.domNode, 'mouseout', function (evt) {
                    domStyle.set(this.domNode, 'background-color', 'transparent');
                    domStyle.set(this.domNode, 'color', 'rgb(53, 70, 100)');
                }.bind(this));

                on(this.domNode, 'click', function (evt) {
                   
                     // 1-定位
                    var code=this.data.code;
                    this._GetPosition(code);
                    // 2-更换regioncoede
                    regionCode=code;
					
                    // 3-更新ztree
                    this._changeViewBar();
					
					this._MapConfig=_otherRegion();
                    
                    var cirNum=appConfig.map.getLayers().array_.length;
                    for (var i = 0; i < cirNum; i++) {
                            var layer = appConfig.map.getLayers().array_[0];
                            appConfig.map.removeLayer(layer);
                    }
				
                    MapFactory.loadLayers(appConfig.map, this._MapConfig);
                     
					
					this._settext();
                   
                }.bind(this));
            },


            // 1-定位
            _GetPosition:function(code){
                var me=this;
                if(code == "330305"){
                    code = "330322";
                }
                regionService.get_RegionbyCode(code,true).then(function(re){
                    if(re.code=='200'){
                        me.locationData(re.data.extent,re.data.shape);
                    }else{
                        alert(re.msg);
                    }
                })
            },
            locationData: function (extent,shape) {},

            //  3-viewBar 更换
            _changeViewBar:function(){
                // _initZtree
                array.forEach(appConfig.btns, function (btn) {
                    if (btn.id === "qml") {
                        btn.fun._widget._initZtree()
                    }
                }.bind(this));

            },
            _settext:function(){},
            
            

        });
    });


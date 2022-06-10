define(["dojo/_base/declare", "dojo/text!./templates/helptemplate.txt", "dijit/_TemplatedMixin", "dijit/_WidgetBase", "dojo/on", "dojo/dom-style", 'dojo/parser', "dojo/dom-class", "dojo/dom-attr", "dojo/_base/lang", 'dojo/_base/array'],
    function (declare, template, TemplatedMixin, WidgetBase, on, domStyle, parser, domClass, domAttr, lang, array) {
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
                    //this.getData();
                    this.bindEvent();

                }.bind(this));

                this._started = true;
            },
       
           
            bindEvent: function () {
                
                /**close**/ 
                on(this.close, 'click', function () {
                    this.setWidgetVisible(false);
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
define(["dojo/_base/declare", 
    "dojo/text!./templates/Layermanage.txt", 
    "dijit/_TemplatedMixin", 
    "dijit/_WidgetBase", 
    "dojo/on", 
    "dojo/dom-style", 
    'dojo/parser', 
    "dojo/dom-class", 
    "dojo/dom-attr", 
    "dojo/_base/lang", 
    'dojo/_base/array',
    "./LayerList"],
    function (declare, template, TemplatedMixin, WidgetBase, on, domStyle, parser, domClass, domAttr, lang, array,LayerList) {
        return declare([WidgetBase, TemplatedMixin], {
            templateString: template,

            _started: false,
            _layerList:[],

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
                    this.bindEvent();
                }.bind(this));

                this._started = true;
            },
            // ---add remove
            addlayerlist:function(layer){
                var me=this;
                var layerItem=new LayerList({_layer:layer}).placeAt(me.layerList);
                layerItem.startup();
                me._layerList.push(layerItem);
            },
            removelayerlist:function(layer){
                for (var i = 0; i < this._layerList.length; i++) {
                    var id=this._layerList[i]._layer.get("id");
                    if (id == layer.get("id")) {
                        this._layerList[i].destroy();
                        break;
                    }
                }
                this._layerList.splice(this._layerList.findIndex(e => e._layer.get("id") === layer.get("id")), 1);
            },

            // ---
            bindEvent: function () {
               var me=this;
                on(me.close, 'click', function () {
                    domStyle.set(me.domNode,"display",'none');
                }.bind(this));

            },
            setWidgetVisible: function (visible) {
                if (visible) {
                    domStyle.set(this.domNode, "display", "block");
                } else {
                    domStyle.set(this.domNode, "display", "none");
                }
            }
          
        });
    });


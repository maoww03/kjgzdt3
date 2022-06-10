define(["dojo/_base/declare", 
    "dojo/text!./templates/LayerList.txt", 
    "dijit/_TemplatedMixin", 
    "dijit/_WidgetBase", 
    "dojo/on", 
    "dojo/dom-style", 
    'dojo/parser', 
    "dojo/dom-class", 
    "dojo/dom-attr", 
    "dojo/_base/lang", 
    'dojo/_base/array'],
    function (declare, template, TemplatedMixin, WidgetBase, on, domStyle, parser, domClass, domAttr, lang, array) {
        return declare([WidgetBase, TemplatedMixin], {
            templateString: template,

            _started: false,
            _select:[],

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
                    debugger
                    var name=me._layer.values_.name;
                    me.layername.innerHTML=name;
                    domAttr.set( me.layername , "title",name);
                    this.bindEvent();

                }.bind(this));

                this._started = true;
            },
            bindEvent: function () {
               var me=this;
                on(me.close, 'click', function () {
                    me.destroy();
                }.bind(this));

                on(me.check, 'click', function () {
                    var aa=me._layer.getVisible();
                    if(aa){
                        me._layer.setVisible(false);
                        domStyle.set(me.check,"background-image"," url(image/layermanage/yc.png)");
                    }else{
                        domStyle.set(me.check,"background-image"," url(image/layermanage/xs.png)");
                        me._layer.setVisible(true);
                    }
                    me._refresh();
                }.bind(this));

                on(me.close, 'click', function () {
                    me.destroy();
                }.bind(this));


            },
            // _collectionLayerZtree
            // _allLayerZtree
            setWidgetVisible: function (visible) {
                if (visible) {
                    domStyle.set(this.domNode, "display", "block");
                } else {
                    domStyle.set(this.domNode, "display", "none");
                }
            }
          
        });
    });


define(["dojo/_base/declare", "dojo/text!./templates/metadataItem.txt", "dijit/_TemplatedMixin", "dijit/_WidgetBase", "dojo/on", "dojo/dom-style", 'dojo/parser', "dojo/dom-class", "dojo/dom-attr", "dojo/_base/lang", 'dojo/_base/array'],
    function (declare, template, TemplatedMixin, WidgetBase, on, domStyle, parser, domClass, domAttr, lang, array) {
        return declare([WidgetBase, TemplatedMixin], {
            templateString: template,
            data: null,

            _started: false,
            _isOver: false,
            _userid:null,
            _layerName:null,
         

            _collectLayer: null,

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
                parser.parse(this.domNode).then(function () {
                    var me=this;
                    me.name.innerHTML = me.data.name||" ";
                    me.remark.innerHTML = me.data.remark|| me.data.alias||" ";
                    me.type.innerHTML = me.data.type||" ";
                    me.explain.innerHTML=me.data.case || "";
                    this.bindEvent();
                }.bind(this));  
            },
            bindEvent:function(){               
            },     
            setWidgetVisible: function (visible) {
                var me = this;
                if (visible) {
                    domStyle.set(this.domNode, "display", "block");
                    
                } else {
                    domStyle.set(this.domNode, "display", "none");
                   
                }
            },
        });
    });


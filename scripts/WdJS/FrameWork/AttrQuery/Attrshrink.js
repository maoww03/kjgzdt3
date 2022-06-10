define(["dojo/_base/declare", "dojo/text!./templates/Attrshrink.txt", "dijit/_TemplatedMixin", "dijit/_WidgetBase", "dojo/on", "dojo/dom-style", 'dojo/parser', "dojo/dom-class", "dojo/dom-attr", "dojo/_base/lang", 'dojo/_base/array'],
    function (declare, template, TemplatedMixin, WidgetBase, on, domStyle, parser, domClass, domAttr, lang, array) {
        return declare([WidgetBase, TemplatedMixin], {
            templateString: template,
            data: null,
            type: null,

            _started: false,
            _isOver: false,

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

            bindEvent: function () {
                var me=this;
                on(me.domNode, 'click', function () {
                    domStyle.set(me.domNode,"display",'none');
                    me.onClick();
                });

            },

            onClick: function (){

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


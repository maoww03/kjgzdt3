define(["dojo/_base/declare", "dojo/text!./templates/inputCataName.txt", "dijit/_TemplatedMixin", "dijit/_WidgetBase", "dojo/on", "dojo/dom-style", 'dojo/parser', "dojo/dom-class", "dojo/dom-attr", "dojo/_base/lang", 'dojo/_base/array'],
    function (declare, template, TemplatedMixin, WidgetBase, on, domStyle, parser, domClass, domAttr, lang, array) {
        return declare([WidgetBase, TemplatedMixin], {
            templateString: template,
            data: null,
            type: null,
            code: null,

            _started: false,

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
                // 绑定节点增加事件
                parser.parse(this.domNode).then(function () {
                  
                    // alert(this);
                    this.bindEvent();
                }.bind(this));

                this._started = true;
            },

            // 事件绑定
            bindEvent: function () {
                on(this.qxplus, 'click', function () {
                    $("#"+this.domNode.id).remove();
                 
                }.bind(this));

                on(this.saveplus, 'click', function () {
                    // fromid,name,addNode
                    this.addSubCata(this.fromid,this.plusname.value,this.addNode);
                    $("#"+this.domNode.id).remove();
                }.bind(this));


            },

            addSubCata: function (fromid,name,addNode) {

            },
            setWidgetVisible:function(visible){
                if (visible) {
                    domStyle.set(this.domNode, 'display', 'block');
                } else {
                    domStyle.set(this.domNode, 'display', 'none');
                }
            }
        });
    });


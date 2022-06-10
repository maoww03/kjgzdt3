define(["dojo/_base/declare", "dojo/text!./templates/regionNavTemplate.txt", "dijit/_TemplatedMixin", "dijit/_WidgetBase", "dojo/on", "dojo/dom-style", 'dojo/parser', "dojo/dom-class", "dojo/dom-attr", "dojo/_base/lang", 'dojo/_base/array'],
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
                    this.nowCity.innerHTML= this.data; 
                    // alert(this);
                    this.bindEvent();
                }.bind(this));

                this._started = true;
            },

            // 事件绑定
            bindEvent: function () {
                on(this.domNode, 'mouseover', function () {
                  
                }.bind(this));

                on(this.domNode, 'mouseout', function () {
                  
                }.bind(this));

                on(this.domNode, 'click', function () {
                    
                    this.onClick(this.data,this.code, this.type);
                    //图形定位
                   

                }.bind(this));

            },

            onClick: function (text,code, type) {

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


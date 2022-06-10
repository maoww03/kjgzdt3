define(["dojo/_base/declare", "dojo/text!./templates/toolBarContainerTemplate.txt", "dijit/_TemplatedMixin", "dijit/_WidgetBase", "dojo/on", "dojo/dom-style", 'dojo/parser', "dojo/dom-class", "dojo/dom-attr", "dojo/_base/lang", 'dojo/_base/array', './toolBarItem'],
    function (declare, template, TemplatedMixin, WidgetBase, on, domStyle, parser, domClass, domAttr, lang, array, toolBarItem) {
        // sideboxConfig   menuTemplate.html
        return declare([WidgetBase, TemplatedMixin], {
            templateString: template,
            data: null,
            

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
            
            // 11
            startup: function () {
                var me = this;
                if (this._started) {
                    return;
                }
                parser.parse(this.domNode).then(function () {
                    var _toolBarItem;
                    for (var i = 0; i < this.data.subItem.length; i++) {
                        _toolBarItem = new toolBarItem({ data: this.data.subItem[i], index: (i % 3) }).placeAt(this.domNode);
                        _toolBarItem.startup();
                    }
                    _toolBarItem = new toolBarItem({ data: null }).placeAt(this.domNode);
                    _toolBarItem.startup();
                    //this.domNode.innerHTML += '<div style="clear: both;"></div>';
                   
                }.bind(this));

                this._started = true;
            },
            setWidgetVisible: function (flag) {
                if (flag) {
                    domStyle.set(this.domNode, 'display', 'block');
                } else {
                    domStyle.set(this.domNode, 'display', 'none');
                } 
            }
 
            
        });
    });


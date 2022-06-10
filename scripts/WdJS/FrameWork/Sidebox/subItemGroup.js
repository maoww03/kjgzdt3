define(["dojo/_base/declare", "dojo/text!./templates/subItemGroupTemplate.txt", "dijit/_TemplatedMixin", "dijit/_WidgetBase", "dojo/on", "dojo/dom-style", 'dojo/parser', "dojo/dom-class", "dojo/dom-attr", "dojo/_base/lang", 'dojo/_base/array', './subItem'],
    function (declare, template, TemplatedMixin, WidgetBase, on, domStyle, parser, domClass, domAttr, lang, array, subItem) {
        // sideboxConfig   menuTemplate.html
        return declare([WidgetBase, TemplatedMixin], {
            templateString: template,
            data: null,
            isLast: null,

            _started: false,
            // _isOver: false,

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
                    
                    this.text.innerHTML = this.data.groupName;
                    if (this.data.subItem != undefined && this.data.subItem.length > 0) {
                       
                        for (var i = 0; i < this.data.subItem.length; i = i + 3) {


                            var _subItem = new subItem({ data: this.data.subItem[i],index:1 }).placeAt(this.items);
                            _subItem.startup();

                            if (i + 1 < this.data.subItem.length) {
                                _subItem = new subItem({ data: this.data.subItem[i + 1], index: 2 }).placeAt(this.items);
                                _subItem.startup();
                            }

                            if (i + 2 < this.data.subItem.length) {
                                _subItem = new subItem({ data: this.data.subItem[i + 2], index: 3 }).placeAt(this.items);
                                _subItem.startup();
                            }
                        }
                    }

                }.bind(this));

                this._started = true;
            }
        });
    });


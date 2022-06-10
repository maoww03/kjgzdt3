define(["dojo/_base/declare", "dojo/text!./templates/Attr.txt", "dijit/_TemplatedMixin", "dijit/_WidgetBase", "dojo/on", "dojo/dom-style", 'dojo/parser', "dojo/dom-class", "dojo/dom-attr",
    "dojo/_base/lang", 'dojo/_base/array', "./AttrItem", "./AttrConfig"],
    function (declare, template, TemplatedMixin, WidgetBase, on, domStyle, parser, domClass, domAttr, lang, array, AttrItem, AttrConfig) {
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
            startup: function () {
                var me = this;
                if (this._started) {

                    return;
                }
                parser.parse(this.domNode).then(function () {

                   var isExist = false;
                        for (var i = 0; i < AttrConfig.layers.length; i++) {
                            if (this.data.id_.indexOf(AttrConfig.layers[i].id) >= 0) {
                                this._showAttr(this.data, AttrConfig.layers[i]);
                                isExist = true;
                                break;
                            }
                        }
                        if (!isExist) {
                            this._showAttr(this.data);
                        }
                    this.bindEvent();
                }.bind(this));

                this._started = true;
            },
            bindEvent: function () {

                on(this.close, 'click', function () {
                    this.destroy();
                }.bind(this));
            },
            _showAttr: function (feature, attrconfig) {
                this.content.innerHTML = "";
                var property = feature.getProperties();
                var _item;
                var max = 0;
                if (attrconfig) {
                    
                    for (var i = 0; i < attrconfig.field.length; i++) {
                        if (attrconfig.field[i].alias.length > max) {
                            max = attrconfig.field[i].alias.length;
                        }
                    }
                    for (var i = 0; i < attrconfig.field.length; i++) {

                        _item = new AttrItem({ titleString: attrconfig.field[i].alias, type: attrconfig.field[i].type, contentString: property[attrconfig.field[i].name], maxlength: max }).placeAt(this.content);
                        _item.startup();
                    }
                } else {
                    for (var key in property) {
                        if (key !== 'geometry' && key.toLowerCase().indexOf("shape")<0) {
                            if (key.length > max) {
                                max = key.length;
                            }
                        }
                    }
                    for (var key in property) {
                        if (key !== 'geometry') {
                            _item = new AttrItem({ titleString: key, contentString: property[key], maxlength: max }).placeAt(this.content);
                            _item.startup();
                        }
                    }
                }
            }
        });
    });

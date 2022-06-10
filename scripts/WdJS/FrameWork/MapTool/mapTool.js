define(["dojo/_base/declare", "dojo/text!./templates/mapToolTemplate.txt", "dijit/_TemplatedMixin", "dijit/_WidgetBase", "dojo/on", "dojo/dom-style", 'dojo/parser', "dojo/dom-class", "dojo/dom-attr", "dojo/_base/lang", 'dojo/_base/array'],
    function (declare, template, TemplatedMixin, WidgetBase, on, domStyle, parser, domClass, domAttr, lang, array) {
        // sideboxConfig   menuTemplate.html
        return declare([WidgetBase, TemplatedMixin], {
            templateString: template,
            data: null,
            
            index: null,

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

                    domStyle.set(this.domNode, 'background-image', 'url(' + this.data.icon + ')');

                    if (this.index !== 0) {
                        domStyle.set(this.domNode, 'margin-top', '5px');
                    }

                    if (this.data.tooltip != undefined && this.data.tooltip != null) {
                        domAttr.set(this.domNode, 'title', this.data.tooltip);
                    }

                    this.bindEvents();

                }.bind(this));

                this._started = true;
            },
            bindEvents: function () {
                
                on(this.domNode, 'click', function (evt) {
                    evt.stopPropagation();
                    if (this.data.modular !== undefined && this.data.modular !== null && this.data.modular !== "") {
                        var flag = false;
                        array.forEach(appConfig.btns, function (btn) {
                            if (btn.id === this.data.id) {
                                flag = !flag;
                                if (lang.isFunction(btn.fun.onClick)) {

                                    btn.fun.onClick(this.text);

                                }
                            }
                        }.bind(this));
                        if (!flag) {
                            try {
                                require([this.data.modular], function (btn) {

                                    var b = new btn({ enabled: true, frame: _frame, name: this.data.id });
                                    appConfig.btns.push({ id: this.data.id, fun: b });
                                    b.onClick(this.text);
                                }.bind(this));
                            }
                            catch (e) {
                                alert(e);
                            }
                        }


                    }
                    else {
                        console.log("请配置对应的模块！");
                    }
                }.bind(this))
                on(this.domNode,"mouseover",function(){
                    domStyle.set(this.domNode, 'background-image', 'url(' + this.data.activeIcon + ')');
                }.bind(this))
                on(this.domNode,"mouseout",function(){
                    domStyle.set(this.domNode, 'background-image', 'url(' + this.data.icon + ')');
                }.bind(this))
            }
 
            
        });
    });


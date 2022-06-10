define(["dojo/_base/declare", "dojo/text!./templates/toolBarItemTemplate.txt", "dijit/_TemplatedMixin", "dijit/_WidgetBase", "dojo/on", "dojo/dom-style", 'dojo/parser', "dojo/dom-class", "dojo/dom-attr", "dojo/_base/lang", 'dojo/_base/array'],
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
                    if (this.data !== null) {
                        domStyle.set(this.icon, 'background-image', 'url(' + this.data.icon + ')');
                        this.text.innerHTML = this.data.text;
                        if (this.index === 0) {
                            domStyle.set(this.domNode, 'margin-left', '20px');
                        } else if (this.index === 1) {
                            domStyle.set(this.domNode, 'margin-left', '40px');
                        } else if (this.index === 2) {
                            domStyle.set(this.domNode, 'margin-left', '40px');
                        }
                        if (this.data.tooltip != undefined && this.data.tooltip != null) {
                            domAttr.set(this.domNode, 'title', this.data.tooltip);
                        }
                        this.bindEvents();
                    } else {
                        domStyle.set(this.domNode, 'clear', 'both');
                        domStyle.set(this.domNode, 'width', '0px');
                        domStyle.set(this.domNode, 'height', '20px');
                    }
                }.bind(this));

                this._started = true;
            },
            bindEvents: function () {
                
                on(this.domNode, 'click', function () {
                   
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
                    } else {
                        console.log("请配置对应的模块！");
                    }
                    for(var i=0;i<_catalogs.length;i++){
                        _catalogs[i].Selected(false);

                    }

                }.bind(this));
                on(this.domNode, 'mouseover', function () {
                    domStyle.set(this.domNode,"color","rgb(13, 101, 173)");
                    domStyle.set(this.icon, 'background-image', 'url(' + this.data.activeIcon + ')');
                    
                }.bind(this));
                on(this.domNode, 'mouseout', function () {
                    domStyle.set(this.domNode,"color","black");
                    domStyle.set(this.icon, 'background-image', 'url(' + this.data.icon + ')');
                }.bind(this));

            }
 
            
        });
    });


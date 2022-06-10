define(["dojo/_base/declare", "dojo/text!./templates/sideboxTemplate.txt", "dijit/_TemplatedMixin", "dijit/_WidgetBase", "dojo/on", "dojo/dom-style", 'dojo/parser', "dojo/dom-class", "dojo/dom-attr", "./sideboxConfig", "dojo/_base/lang", 'dojo/_base/array', "./subItemGroup"],
    function (declare, template, TemplatedMixin, WidgetBase, on, domStyle, parser, domClass, domAttr, sideboxConfig, lang, array, subItemGroup) {
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
         
            startup: function () {
                var me = this;
                if (this._started) {
                    return;
                }
                parser.parse(this.domNode).then(function () {
                    dojo.query('.repeatHide').forEach((dom) => {
                        domStyle.set(dom,"display",'none');
                    })
                    dojo.query('.sidebar-tool').forEach((dom) => {
                        domStyle.set(dom,"display",'none');
                    })
                    domStyle.set(me.domNode,"display",'block');

                    //if (this.data.id == 'xzqh') {
                    //    domStyle.set(this.domNode, 'width', '90px');
                    //    domStyle.set(this.icon, 'float', 'right');
                    //    domStyle.set(this.icon, 'background-image', 'url(' + this.data.icon + ')');
                    //}
                    var max=document.body.clientHeight-130;
                    domStyle.set(this.subSidebox, 'max-height', max+'px');

                    if (this.data.icon !== undefined && this.data.icon !== null && this.data.icon !== "") {
                        domStyle.set(this.icon, 'background-image', 'url(image/top/' + this.data.icon + ')');
                    }
                   
                    if (this.data.text != undefined) {
                        this.text.innerHTML = this.data.text;
                    }
                    if (this.data.height != undefined) {
                        domStyle.set(this.subSidebox, 'height', this.data.height+ 'px');
                    }
                    if (this.data.width != undefined) {
                        domStyle.set(this.subSidebox, 'width', this.data.width + 'px');
                    }
                    if (this.data.right != undefined) {
                        domStyle.set(this.subSidebox, 'right', this.data.right + 'px');
                    }
                    if (this.data.subMenus != undefined && this.data.subMenus.length > 0) {
                        domStyle.set(this.more, 'display', 'block');
                        domStyle.set(this.subSidebox_icon, 'background-image', 'url(image/sidebar/' + this.data.icon + ')');
                        if (this.data.text != undefined) {
                            this.subSidebox_text.innerHTML = this.data.text;
                        }
                        for (var i = 0; i < this.data.subMenus.length; i++) {
                            var _subItemGroup = new subItemGroup({ data: this.data.subMenus[i] }).placeAt(this.subSidebox);
                            _subItemGroup.startup();
                        }
                    }
                    this.bindEvent();

                }.bind(this));

                this._started = true;
            },

            // 事件绑定
            bindEvent: function () {

                on(this.subSidebox_close, 'click', function (evt) {
                    evt.stopPropagation();
                    dojo.query('.subSidebox_menu',dojo.body()).forEach(function (dom) {
                        domStyle.set(dom, 'opacity', '100%');
                    });
                    domStyle.set(this.subSidebox, 'display', 'none');
                    _checkQuery=true;
                    _attrQueryTool.activate("point");
                }.bind(this));

                on(this.icon, 'mouseover', function () {
                    domStyle.set(this.icon, 'background-color', 'rgba(169,169,169,0.1)');
                }.bind(this));

                on(this.icon, 'mouseout', function () {
                    domStyle.set(this.icon, 'background-color', 'transparent');
                }.bind(this));

                on(this.menu, 'mouseover', function (evt) {
                    domStyle.set(this.menu, 'opacity', '50%');
                }.bind(this));

                on(this.menu, 'mouseout', function (evt) {
                    domStyle.set(this.menu, 'opacity', '100%');
                }.bind(this));

                on(this.domNode, 'click', function (evt) {
                    evt.stopPropagation();
                    // dojo.query('.subSidebox_menu',dojo.body()).forEach(function (dom) {
                    //     domStyle.set(dom, 'opacity', '100%');
                    // });
                    // dojo.query('.subSidebox_menu',this.domNode).forEach(function (dom) {
                    //     domStyle.set(dom, 'opacity', '50%');
                    // });
                    dojo.query('.subSidebox', dojo.byId('sidebox')).forEach(function (dom) {
                        domStyle.set(dom, 'display', 'none');
                    });
                    dojo.query('.sidebar-tool', dojo.body()).forEach(function (dom) {
                        domStyle.set(dom, 'display', 'none');
                    });
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
                    else if (this.data.subMenus !== undefined && this.data.subMenus.length > 0) {
                        domStyle.set(this.subSidebox, 'display', 'block');
                    } else {
                        console.log("请配置对应的模块！");
                    }
                }.bind(this));

                 
            }
        });
    });


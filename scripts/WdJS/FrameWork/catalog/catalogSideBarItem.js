define(["dojo/_base/declare", "dojo/text!./templates/catalogSideBarItemTemplate.txt", "dijit/_TemplatedMixin", "dijit/_WidgetBase", "dojo/on", "dojo/dom-style", 'dojo/parser', "dojo/dom-class", "dojo/dom-attr", "dojo/_base/lang", 'dojo/_base/array'],
    function (declare, template, TemplatedMixin, WidgetBase, on, domStyle, parser, domClass, domAttr, lang, array) {
        // sideboxConfig   menuTemplate.html
        return declare([WidgetBase, TemplatedMixin], {
            templateString: template,
            data: null,
            isSelected: false,

            _started: false,
            // _isOver: false,
            target: null,

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
                   
                    this.domNode.innerHTML = this.data.text;
                    
                    this.bindEvent();
                    if (this.isSelected) {

                        this.domNode.click();
                    } 
                }.bind(this));

                this._started = true;
            },
            // 事件绑定
            bindEvent: function () {
                on(this.domNode, 'click', function (evt) {
                    evt.stopPropagation();
                    this.onClick();
                    this.setSelected(true);
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

                                var b = new btn({ enabled: true, frame: _frame, name: this.data.id, target: this.target });
                                appConfig.btns.push({ id: this.data.id, fun: b });
                                b.onClick(this.text);
                            }.bind(this));
                        }
                        catch (e) {
                            alert(e);
                        }
                    }

                }.bind(this)); 
            },
            setSelected: function (flag) {
                if (flag) {
                    domStyle.set(this.domNode, 'border-bottom', '2px solid #0d65ad');
                    domStyle.set(this.domNode, 'color', '#0d65ad');
                } else {
                    domStyle.set(this.domNode, 'border-bottom', 'none');
                    domStyle.set(this.domNode, 'color', '#333');
                }
            },
            onClick: function () {

            }
 
            
        });
    });


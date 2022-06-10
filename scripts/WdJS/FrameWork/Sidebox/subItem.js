define(["dojo/_base/declare", "dojo/text!./templates/subItemTemplate.txt", "dijit/_TemplatedMixin", "dijit/_WidgetBase", "dojo/on", "dojo/dom-style", 'dojo/parser', "dojo/dom-class", "dojo/dom-attr", "dojo/_base/lang", 'dojo/_base/array',"FrameWork/Setalert/Setalert"],
    function (declare, template, TemplatedMixin, WidgetBase, on, domStyle, parser, domClass, domAttr, lang, array,Setalert) {
        // sideboxConfig   menuTemplate.html
        return declare([WidgetBase, TemplatedMixin], {
            templateString: template,
            data: null,
            isLast: null,
            index: null,

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
                    if (this.data.icon !== undefined && this.data.icon !== null && this.data.icon !== "") {
                        domStyle.set(this.icon, 'background-image', 'url(image/sidebar/' + this.data.icon + ')');
                    }
                    this.text.innerHTML = this.data.text;

                    if (this.index == 1) {
                        domStyle.set(this.domNode, 'margin-left', '21.5px');
                    }
                    else if (this.index == 2 || this.index == 3) {
                        domStyle.set(this.domNode, 'margin-left', '20px');
                    }

                    if (this.data.tooltip != undefined && this.data.tooltip != null) {
                        domAttr.set(this.domNode, 'title', this.data.tooltip);
                    }

                    if(this.data.unable){
                        domStyle.set(this.text,"color","#cccc");
                    }
                    this.bindEvent();
                    

                }.bind(this));

                this._started = true;
            },

            // 事件绑定
            bindEvent: function () {
                var me=this;
               

                on(this.domNode, 'click', function (evt) {
                    evt.stopPropagation();
                    if(!this.data.unable){
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
                        else {
                            console.log("请配置对应的模块！");
                        }
                    }else{
                        // Setalert.rompt("该模块已关闭","alert-danger");
                    }
                    
                }.bind(this));

                on(this.domNode, 'mouseover', function (evt) {
                   var pd = me.data.unable;
                   if(!pd){
                    domStyle.set(this.text,"color","#0d65ad");
                    domStyle.set(this.icon,'background-image', 'url(image/sidebar/mouseover/' + this.data.icon + ')')
                   }
                   
                }.bind(this));
                
                on(this.domNode, 'mouseout', function (evt) {
                    var pd = me.data.unable;
                    if(!pd){
                        domStyle.set(this.text,"color","rgb(53, 70, 100)");
                        domStyle.set(this.icon,'background-image', 'url(image/sidebar/' + this.data.icon + ')')
                    }
                }.bind(this))
                 
            }
        });
    });


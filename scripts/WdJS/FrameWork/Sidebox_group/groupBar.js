define(["dojo/_base/declare", "dojo/text!./templates/groupBar.txt", "dijit/_TemplatedMixin", "dijit/_WidgetBase", "dojo/on", "dojo/dom-style", 'dojo/parser', "dojo/dom-class", "dojo/dom-attr", "dojo/_base/lang", 'dojo/_base/array'],
    function (declare, template, TemplatedMixin, WidgetBase, on, domStyle, parser, domClass, domAttr, lang, array) {
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
                    me.group_name.innerHTML=me.data.groupname;
                    me._listgroupCon(me.data.subItem);
                    this.bindEvent();

                }.bind(this));

                this._started = true;
            },
            _listgroupCon:function(data){
                var me=this;
                var innerHTML=``;
                data.forEach((li)=>{
                        innerHTML+=` <div class="groupList" style="background-image:url(image/gruopbar/mouseout/${li.icon}" modular=${li.modular} title=${li.tooltip} icon=${li.icon} group_id=${li.id} text=${li.text} clk="0"></div>`;
                });
                me.group_icon.innerHTML=innerHTML;
            },

            bindEvent: function () {
                var me=this;
                dojo.query('.groupList', me.domNode).forEach(function (dom) {
                    var modular=domAttr.get(dom,"modular");
                    var id=domAttr.get(dom,"group_id");
                    var text=domAttr.get(dom,"text");
                    var clk=domAttr.get(dom,"clk");

                    if(text== "点击查询"){
                        domStyle.set(dom,"background-color","#e4e4e4");
                        domAttr.set(dom,"clk",'1');
                    }
                    on(dom, 'mouseover', function () {
                        domStyle.set(dom,"background-color","#e4e4e4");
                    })
                    on(dom, 'mouseout', function () {
                        var aa=domAttr.get(dom,"clk");
                        if(aa=="0"){
                            domStyle.set(dom,"background-color","white");
                        }
                    })

                    on(dom, 'click', function () {

                        dojo.query('.groupList').forEach(function (dom2) {
                            domStyle.set(dom2,"background-color","white");
                            domAttr.set(dom2,"clk",'0');

                        })
                        domStyle.set(dom,"background-color","#e4e4e4");
                        domAttr.set(dom,"clk",'1');

						dojo.query('.subSidebox', dojo.byId('sidebox')).forEach(function (dom) {
                            domStyle.set(dom, 'display', 'none');
                        });
                        dojo.query('.sidebar-tool', dojo.body()).forEach(function (dom) {
                            domStyle.set(dom, 'display', 'none');
                        });
                        if (modular!== undefined && modular !== null && modular !== "") {
                            var flag = false;
                            array.forEach(appConfig.btns, function (btn) {
                                if (btn.id === id) {
                                    flag = !flag;
                                    if (lang.isFunction(btn.fun.onClick)) {
                                        btn.fun.onClick(this.text);
                                    }
                                }
                            }.bind(this));
                            if (!flag) {
                                try {
                                    require([modular], function (btn) {
                                        var b = new btn({ enabled: true, frame: _frame, name: id });
                                        appConfig.btns.push({ id: id, fun: b });
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
                    })
                });
            }
        });
    });


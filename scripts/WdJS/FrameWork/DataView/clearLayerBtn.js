define(["dojo/_base/declare", 
    "dojo/text!./templates/clearLayerBtn.txt", 
    "dijit/_TemplatedMixin", 
    "dijit/_WidgetBase", 
    "dojo/on", 
    "dojo/dom-style", 
    'dojo/parser', 
    "dojo/dom-class", 
    "dojo/dom-attr", 
    "dojo/_base/lang", 
    'dojo/_base/array'],
    function (declare, template, TemplatedMixin, WidgetBase, on, domStyle, parser, domClass, domAttr, lang, array) {
        return declare([WidgetBase, TemplatedMixin], {
            templateString: template,
            _btnStatus:false,
            

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
                    this.bindEvent();
                }.bind(this));

                this._started = true;
            },

            bindEvent: function () {
               var me=this;
                on(this.domNode, 'click', function () {
                    me._clearLayer();

                }.bind(this));

            },
            _clearLayer:function(){
                // 清除地图
                var me=this;
                var flag = false;
                array.forEach(appConfig.btns, function (btn) {
                    if (btn.id === 'gbtc') {
                        flag = !flag;
                        if (lang.isFunction(btn.fun.onClick)) {
                            btn.fun.onClick('clear');
                        }
                    }
                }.bind(this));
                if (!flag) {
                    try {
                        require(["FrameWork/Clear/closeAllLayer"], function (btn) {
                            var b = new btn({ enabled: true, frame: _frame, name: 'gbtc' });
                            appConfig.btns.push({ id: 'gbtc', fun: b });
                            b.onClick('clear');
                        }.bind(this));
                    }
                    catch (e) {
                        alert(e);
                    }
                }

                // 更换样式
                if(me._btnStatus==true){
                    me._btnStatus=false;
                }else if(me._btnStatus==false){
                    domClass.replace(me.domNode, "clockbtn", "clockbtn_Active");
                    me._btnStatus=true;
                }
            }
            
        });
    });


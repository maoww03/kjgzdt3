define(["dojo/_base/declare", "dojo/text!./templates/titleTemplate.txt", "dijit/_TemplatedMixin", "dijit/_WidgetBase", "dojo/on", "dojo/dom-style", 'dojo/parser', "dojo/dom-class", "dojo/dom-attr","./menuConfig", "dojo/_base/lang", 'dojo/_base/array'],
    function (declare, template, TemplatedMixin, WidgetBase, on, domStyle, parser, domClass, domAttr, menuConfig, lang, array) {
        return declare([WidgetBase, TemplatedMixin], {
            templateString: template,
            data: null,

            _started: false,
            _isOver: false,

            constructor: function (args) {

            },
            postCreate: function () {
                this.inherited(arguments);
                this.onCreate();
            },
            onCreate: function () {
                var me = this;
            },
            // start
            startup: function () {
                var me = this;
                if (this._started) {
                    return;
                }
                // 绑定节点增加事件
                parser.parse(this.domNode).then(function () {
                    this.domNode.innerHTML = this.data.text;

                    this.bindEvent();
                    $(this.domNode).attr('id',this.data.id); 
                    
                    if(this.data.id=='sjzs'){
                    dojo.byId('sjzs').style.borderRight='none';
                    dojo.byId('sjzs').style.borderTopLeftRadius=3+'px';
                    dojo.byId('sjzs').style.borderBottomLeftRadius=3+'px';
                    }else if(this.data.id=='tckz'){
                         dojo.byId('tckz').style.borderLeft='none';
                        dojo.byId('tckz').style.borderTopRightRadius=3+'px';
                        dojo.byId('tckz').style.borderBottomRightRadius=3+'px';
                        // dojo.byId('tckz').style.color='#097bc1';
                        // dojo.byId('tckz').style.backgroundColor='#eff4f8';
                        dojo.byId('tckz').style.borderBottom='2px solid #097bc1';
                    }
                }.bind(this));

                this._started = true;
            },
 
            // 事件绑定
            bindEvent: function () {
                // on(this.domNode, 'mouseover', function () {
                    
                //     if (!this._isOver) {
                      
                //         domStyle.set(this.domNode, 'color', '#097bc1');   
                //         domStyle.set(this.domNode, 'backgroundColor', '#eff4f8');   
                //         domStyle.set(this.domNode, 'border', '1px solid #097bc1');   

                //         this._isOver = true;
                //     }
                // }.bind(this));

                // on(this.domNode, 'mouseout', function () {
         
                //     domStyle.set(this.domNode, 'color', '#374663');   
                //     domStyle.set(this.domNode, 'backgroundColor', '#fcfcfc');   
                //     domStyle.set(this.domNode, 'border', '1px solid #e4e8eb');   

                //     this._isOver = false;
                    
                // }.bind(this));

                on(this.domNode, 'click', function () { 
                    $("#ControlBar li").css("background",'white');
                    $("#ViewBar li").css("background",'white');


                    dojo.byId('sjzs').style.color='#374663';
                    dojo.byId('sjzs').style.backgroundColor='#fcfcfc';
                    dojo.byId('sjzs').style.border='1px solid #e4e8eb';
                    dojo.byId('sjzs').style.borderRight='none';


                    dojo.byId('tckz').style.color='#374663';
                    dojo.byId('tckz').style.backgroundColor='#fcfcfc';
                    dojo.byId('tckz').style.border='1px solid #e4e8eb';
                    dojo.byId('tckz').style.borderLeft='none';

                   

                    // domStyle.set(this.domNode, 'background', 'blue');
                        // domStyle.set(this.domNode, 'color', '#097bc1');   
                        // domStyle.set(this.domNode, 'backgroundColor', '#eff4f8');   
                        domStyle.set(this.domNode, 'borderBottom', '2px solid #097bc1');   

                    if (this.data.subMenus === undefined || this.data.subMenus === null || this.data.subMenus.length === 0) {
                        if (this.data.modular !== undefined && this.data.modular !== null && this.data.modular !== "") {
                            var flag = false;
                            array.forEach(appConfig.btns, function (btn) {
                                if (btn.id === this.data.id) {
                                    flag = !flag;
                                    if (lang.isFunction(btn.fun.onClick)) {

                                        // btn.fun.onClick(this.text);
                                        btn.fun.onClick(this);


                                    } 
                                }
                            }.bind(this));
                            if (!flag) {
                                try {
                                    require([this.data.modular], function (btn) {

                                        var b = new btn({ enabled: true, frame: _frame, name: this.data.id });
                                        appConfig.btns.push({ id: this.data.id, fun: b });
                                        // b.onClick(this.text);
                                        b.onClick(this);
                                    }.bind(this));
                                }
                                catch (e) {
                                    alert(e);
                                }
                            }
                        } else {
                            console.log("请配置对应的模块！");
                        }
                    } 
                    
                }.bind(this));

                
            }
        });
    });


define(["dojo/_base/declare", "dojo/text!./templates/catalogTemplate.txt", "dijit/_TemplatedMixin", "dijit/_WidgetBase", "dojo/on", "dojo/dom-style", 'dojo/parser', "dojo/dom-class", "dojo/dom-attr", "dojo/_base/lang", 'dojo/_base/array', './catalogSideBarItem', './catalogToolBarItem','./siderbarFixed'],
    function (declare, template, TemplatedMixin, WidgetBase, on, domStyle, parser, domClass, domAttr, lang, array, catalogSideBarItem, catalogToolBarItem,siderbarFixed) {
        // sideboxConfig   menuTemplate.html
        return declare([WidgetBase, TemplatedMixin], {
            templateString: template,
            data: null,
            isLast: null,
            _catalogSideBarItemList: null,
            _catalogToolBarItemList: null,
            _isFixed: undefined,

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
                    domStyle.set(this.icon, 'background-image', 'url(' + this.data.icon + ')');
                    this.text.innerHTML = this.data.text;
                    if (this.index !== 0) {
                        domStyle.set(this.domNode, 'margin-top', '10px');
                    }
                    if (this.data.type === "siderbar") {
                        this._isFixed = false;
                        this._catalogSideBarItemList = [];

           
                        _siderbarFixed= new siderbarFixed().placeAt(this.siderbar_subItem);
                        _siderbarFixed.startup();
                        _siderbarFixed.onclick = this.siderbarFixedClick.bind(this);

                        for (var i = 0; i < this.data.subItem.length; i++) {
                            var _catalogSideBarItem;
                            if (i === 0) {
                                _catalogSideBarItem = new catalogSideBarItem({ data: this.data.subItem[i], isSelected: true, target: this.siderbar_subItemContent }).placeAt(this.siderbar_subItem);

                            } else {
                                _catalogSideBarItem = new catalogSideBarItem({ data: this.data.subItem[i], target: this.siderbar_subItemContent }).placeAt(this.siderbar_subItem);
                            }
                            _catalogSideBarItem.startup();
                            _catalogSideBarItem.onClick = this.catalogSideBarClick.bind(this);
                            this._catalogSideBarItemList.push(_catalogSideBarItem);
                        }
                    } else if (this.data.type === "toolbar") {
                        domStyle.set(this.toolbar, 'top', this.domNode.offsetTop + "px");
                        this._catalogToolBarItemList = [];
                        for (var i = 0; i < this.data.subItem.length; i++) {
                            var _catalogToolBarItem;
                            if (i === 0) {
                                _catalogToolBarItem = new catalogToolBarItem({ data: this.data.subItem[i], isSelected: true, target: this.toolbar_subItemContent, toolbarBtn: this.toolbarBtn }).placeAt(this.toolbar_subItem);

                            } else {
                                _catalogToolBarItem = new catalogToolBarItem({ data: this.data.subItem[i], target: this.toolbar_subItemContent, toolbarBtn: this.toolbarBtn }).placeAt(this.toolbar_subItem);
                            }
                            _catalogToolBarItem.startup();
                            _catalogToolBarItem.onClick = this.catalogToolBarClick.bind(this);
                            this._catalogToolBarItemList.push(_catalogToolBarItem);
                        }
                    }


                    this.bindEvent();
                }.bind(this));

                this._started = true;
            },
            catalogSideBarClick: function () {
                for (var i = 0; i < this._catalogSideBarItemList.length; i++) {
                    this._catalogSideBarItemList[i].setSelected(false);
                }
            },
            catalogToolBarClick: function () {
                for (var i = 0; i < this._catalogToolBarItemList.length; i++) {
                    this._catalogToolBarItemList[i].setSelected(false);
                }
            },
            Selected: function (flag) {
                if (flag) {
                    domStyle.set(this.icon, 'background-image', 'url(' + this.data.activeIcon + ')');
                    domStyle.set(this.text, 'color', '#156db5');
                    domStyle.set(this.catalogBtn, 'background', 'white');
                } else {

                    domStyle.set(this.icon, 'background-image', 'url(' + this.data.icon + ')');
                    domStyle.set(this.text, 'color', 'white');
                    domStyle.set(this.catalogBtn, 'background', 'none');
                    domStyle.set(this.siderbar, 'display', 'none');
                    domStyle.set(dojo.byId("zbx"), 'left', '10px');
                    domStyle.set(this.siderbarBtn, 'display', 'none');
                    domStyle.set(this.toolbar, 'display', 'none');
                    domStyle.set(this.toolbarBtn, 'display', 'none');
                }
                
            },
            // 事件绑定
            bindEvent: function () {
                on(this.catalogBtn, 'click', function () {
                    
                    this.onClick();
                    this.Selected(true);
                    if (this.data.type === "siderbar") {
                        domStyle.set(this.siderbar, 'display', 'block');
                        domStyle.set(dojo.byId("zbx"), 'left', '360px');
                        // domStyle.set(dojo.byId("legend-siderbar"), 'left', '360px');
                        domStyle.set(dojo.byId("showTable"), 'width', 'calc(100% - 351px)');
                        // domStyle.set(this.siderbarBtn, 'display', 'block');
                    } else if (this.data.type === "toolbar") {
                        domStyle.set(this.toolbar, 'display', 'block');
                        domStyle.set(this.toolbarBtn, 'display', 'none');
                        
                        domStyle.set(this.toolbarBtn, 'top', (this.domNode.offsetTop + this.toolbar.clientHeight / 2) + "px");
                    }

                }.bind(this));

                on(this.siderbarBtn, 'click', function (evt) {
                    evt.stopPropagation();
                    this.Selected(false);

                }.bind(this));
               

                 
            },
            siderbarFixedClick:function(fixed){
                var me=this;
                if(fixed==true){
                    me._isFixed=true;
                }else{
                   me._isFixed=false;
                }
                // close
                // domStyle.set(me.siderbar,"display","none");
                // this.Selected(false);
            },
            onClick: function () {

            }
 
            
        });
    });


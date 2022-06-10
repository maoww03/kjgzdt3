define(["dojo/_base/declare", "dojo/text!./templates/catalogToolBarItemTemplate.txt", "dijit/_TemplatedMixin", "dijit/_WidgetBase", "dojo/on", "dojo/dom-style", 'dojo/parser', "dojo/dom-class", "dojo/dom-attr", "dojo/_base/lang", 'dojo/_base/array', './toolBarContainer'],
    function (declare, template, TemplatedMixin, WidgetBase, on, domStyle, parser, domClass, domAttr, lang, array, toolBarContainer) {
        // sideboxConfig   menuTemplate.html
        return declare([WidgetBase, TemplatedMixin], {
            templateString: template,
            data: null,
            isSelected: false,
            toolbarBtn: null,

            _started: false,
            // _isOver: false,
            target: null,
            _toolBarContainer: null,

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
                    this._toolBarContainer = new toolBarContainer({ data: this.data }).placeAt(this.target);
                    this._toolBarContainer.startup();
                    this.bindEvent();
                    if (this.isSelected) {
                        this.setSelected(true);
                        //domStyle.set(this.domNode, 'border-bottom', '2px solid #0d65ad');
                        //domStyle.set(this.domNode, 'color', '#0d65ad');
                        //this._toolBarContainer.setWidgetVisible(true);
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
                if (this._toolBarContainer !== null) {
                    this._toolBarContainer.setWidgetVisible(flag);
                }
                if (flag) {
                    
                    domStyle.set(this.toolbarBtn, 'top', (this.target.parentNode.offsetTop + this.target.parentNode.clientHeight / 2) + "px");
                }
            },
            onClick: function () {

            }
 
            
        });
    });


define(["dojo/_base/declare", "dojo/text!./templates/siderbarFixed.txt", "dijit/_TemplatedMixin", "dijit/_WidgetBase", "dojo/on", "dojo/dom-style", 'dojo/parser', "dojo/dom-class", "dojo/dom-attr", "dojo/_base/lang", 'dojo/_base/array'],
    function (declare, template, TemplatedMixin, WidgetBase, on, domStyle, parser, domClass, domAttr, lang, array) {
        // sideboxConfig   menuTemplate.html
        return declare([WidgetBase, TemplatedMixin], {
            templateString: template,
            data: null,
            _fixed:false,
            
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
            
            startup: function () {
                var me = this;
                if (this._started) {
                    return;
                }
                parser.parse(this.domNode).then(function () {
                    this.bindEvents();

                }.bind(this));

                this._started = true;
              
            },
            bindEvents:function () {
                var me=this;
                on(this.domNode, 'click', function () {
                    if(this._fixed==false){
                        domStyle.set(this.domNode, 'background-image', 'url(image/sidebar/fixed_fill.png)');
                        this._fixed=true;
                    }else if(this._fixed==true){
                        domStyle.set(this.domNode, 'background-image', 'url(image/sidebar/fixed_line.png)');
                        this._fixed=false;
                    }
                    this.onclick(this._fixed);
                }.bind(this))
            },
            onclick:function(_fixed){

            }

 
            
        });
    });


define(["dojo/_base/declare", 
    "dojo/text!./templates/filterLayerPanel.txt", 
    "dijit/_TemplatedMixin", 
    "dijit/_WidgetBase", 
    "dojo/on", 
    "dojo/dom-style", 
    'dojo/parser', 
    "dojo/dom-class", 
    "dojo/dom-attr", 
    "dojo/_base/lang", 
    'dojo/_base/array',
    "./filterLayerConfig"],
    function (declare, template, TemplatedMixin, WidgetBase, on, domStyle, parser, domClass, domAttr, lang, array,filterLayerConfig) {
        return declare([WidgetBase, TemplatedMixin], {
            templateString: template,

            _started: false,
            _select:[],

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
                    var aa=filterLayerConfig.subMenus;
                    this._showFilterLable(aa);
                    this.bindEvent();

                }.bind(this));

                this._started = true;
            },
            // 显示
            _showFilterLable:function(data){
                var innerHTML="";
                this.filterSelect.innerHTML=``;
                data.forEach(el => {
                    innerHTML+=`<div class="filterTitle" > ${el.groupName}</div> <div  style="overflow: hidden;">`
                    if(el.subItem){
                        el.subItem.forEach(lable=>{
                            innerHTML += `<div class="filterLable" title="${lable.text}" id="${lable.id}" selectStatus="no_select">${lable.text}</div>`;
                        });
                    }
                    innerHTML += '</div>';
                });
                this.filterSelect.innerHTML=innerHTML;
            },
            bindEvent: function () {
               var me=this;
                on(me.close, 'click', function () {
                    domStyle.set(me.domNode,"display",'none');
                }.bind(this));

                dojo.query(".filterLable").forEach(dom=>{
                    on(dom, 'click', function () {
                        var select=domAttr.get(dom,"selectStatus");
                        if(select == 'select'){
                            domStyle.set(dom,"border",'none');
                            domStyle.set(dom,"color",'#9c9c9c');
                            domAttr.set(dom,"selectStatus","no_select");
                            domStyle.set(dom,"background-image","none");

                        }else if(select == 'no_select'){
                            domStyle.set(dom,"border",'1px solid #276099');
                            domStyle.set(dom,"color",'#276099');
                            domAttr.set(dom,"selectStatus","select");
                            domStyle.set(dom,"background-image","url(image/doConflict/typeselected.png)");

                        }
                    })
                });

                on(me.reset, 'click', function () {
                    me._select=[];
                    dojo.query(".filterLable").forEach(dom=>{
                        domStyle.set(dom,"border",'none');
                        domStyle.set(dom,"color",'#9c9c9c');
                        domAttr.set(dom,"selectStatus","no_select");
                        domStyle.set(dom,"background-image","none");

                    });
                }.bind(this));

                on(me.finish, 'click', function () {
                    me._select=[];
                    dojo.query(".filterLable").forEach(dom=>{
                        var select=domAttr.get(dom,"selectStatus");
                        if(select == 'select'){
                            var lable=domAttr.get(dom,"title");
                            me._select.push(lable);
                        }
                    });
                    me._filterDir(me._select);
                    me.setWidgetVisible(false);
                }.bind(this));
            },
            setWidgetVisible: function (visible) {
                if (visible) {
                    domStyle.set(this.domNode, "display", "block");
                } else {
                    domStyle.set(this.domNode, "display", "none");
                }
            },
            // 过滤目录
            _filterDir(data){
                
                data.forEach(el=>{

                });
            }
          
        });
    });


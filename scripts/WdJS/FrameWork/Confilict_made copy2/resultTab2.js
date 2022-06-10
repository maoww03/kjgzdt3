define([
  "dojo/_base/declare",
  "dojo/parser",
  "dijit/_WidgetBase",
  "dijit/_TemplatedMixin",
  "dojo/text!./templates/resultTab2.txt",
  "dojo/on",
  "dojo/dom-style",
  "dojo/dom-class",
  "dojo/dom-attr",
  "dojo/dom-construct","FrameWork/serviceUtil/ConfigurationService","./layerConfig","./resultTab2_item"
], function (declare, parser, _WidgetBase, _TemplatedMixin, template, on, domStyle, domClass, domAttr, domConstruct,ConfigurationService,layerConfig,resultTab2_item) {
    return declare([_WidgetBase, _TemplatedMixin], {
        templateString: template,
        data: null,
        _getConflictConfig:null,
        _items:[],

        isSelect: false,

        constructor: function (args) { },
        postCreate: function () {
            this.inherited(arguments);
        },
        startup: function () {
            var me = this;
            if (me._started) {
                return;
            }
            parser.parse(me.domNode).then(function () {
                me._showTab();
                me._bindEvents();
            }.bind(this));
        },
        _showTab:function(){
            var me=this;
            var aa=me._data;
            var innerhtml='';
            var coun=0;

            aa.forEach(el => {
                var layerid=el.id;
                layerConfig.layers.forEach(el => {
                    if(layerid == el.id ){
                        if(coun == 0){
                            innerhtml += `<div class="nzyResultTab2" style="background-color:#f5f1f1" value="${el.id}"> ${el.caption}</div>`;
                            coun =1;
                            me._showTableList(el.id);
                        }else{
                            innerhtml += `<div class="nzyResultTab2" style="background-color:#ffffff"  value="${el.id}"> ${el.caption}</div>`;

                        }
                    }
                });
            });
            me.nzy_Tab.innerHTML=innerhtml;
        },
        
        _showTableList:function(layerid){
            var me=this;
            var allData=me._data;
            allData.forEach(el => {
                var id=el.id;
                if(id == layerid){
                    if(me._items.length>0){
                        for(var i=0 ; i<me._items.length;i++){
                            me._items[i].destroy();
                        }
                    }
                    for(var j=0;j<=el.data.length;j++){
                        var num=j+1;
                        var _aa=new resultTab2_item({ _num :num, _data : el.data[j]}).placeAt(me.result_items);
                        _aa.onClick=me.onClick.bind(me);

                        _aa.startup();
                        me._items.push(_aa);
                    }
                }
            });
        },

        onClick:function(feature){},
        _bindEvents: function () {
            var me = this;
            dojo.query('.nzyResultTab2').forEach((dom) => {
                on(dom,"click",function(){
                    dojo.query('.nzyResultTab2').forEach((dom2) => {
                        domStyle.set(dom2 ,"background-color","#ffffff");
                    })
                   var layerid=domAttr.get(dom,"value");
                   me._showTableList(layerid);
                   domStyle.set(dom ,"background-color","#f5f1f1");
                })
            })

        },
        
    });
});

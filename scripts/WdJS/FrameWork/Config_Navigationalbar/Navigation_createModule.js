define([
    "dojo/_base/declare",
    "dojo/parser",
    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin",
    "dojo/text!./templates/Navigation_createModule.txt",
    "dojo/on",
    "dojo/dom-style",
    "dojo/dom-class", 
    "dojo/dom-attr",
    "dojo/_base/lang",
    "dojo/dom-construct",
    "FrameWork/serviceUtil/ConfigurationService","./Navigation_itemModule"
  ], function (
      declare,
      parser,
      _WidgetBase,
      _TemplatedMixin,
      template,
      on,
      domStyle,
      domClass,
      domAttr,
      lang,
      domConstruct,
      ConfigurationService,
      Navigation_itemModule
  ) {
      return declare([_WidgetBase, _TemplatedMixin], {
        templateString: template,
        _items:[],
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
                // me._menuId
                var aa=me._ModuleIdArr;
                me._getAllModule();
                me._bindEvents();
            });
        },
        _getAllModule:function(){
            
            var me=this;
            ConfigurationService.getAllModule().then(function(re){
                if(re.code == '200'){
                    if(re.data != null){
                        var data=re.data;
                        if(me._items.length > 0){
                            for(var i=0;i<me._items.length;i++){
                                me._items[i].destroy();
                            }
                        }
                        me._items=[];
                        for( var i=0;i<data.length;i++){
                            debugger
                            var nowId=data[i].id;

                            var aa=me._ModuleIdArr.indexOf(nowId);
                            if(aa == -1){
                                var items=new Navigation_itemModule({_data:data[i],_num:i,_add:true,_menuid:me._menuId}).placeAt(me.items_module);
                                items._table3Fresh=me._table3Fresh.bind(me);
                                items.startup();
                                me._items.push(items);
                            }else{
                                var items=new Navigation_itemModule({_data:data[i],_num:i,_add:false,_menuid:me._menuId}).placeAt(me.items_module);
                                items.startup();
                                me._items.push(items);
                            }
                           
                        }
                    }
                }else{
                    alert(re.msg);
                }
               

            })
        },

        _bindEvents:function(){
        var me=this;
        on(me.close, "click", function () {
            me.destroy();
        });  
        },
        _table3Fresh:function(){},
        
      });
  });
  
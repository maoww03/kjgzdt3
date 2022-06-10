define([
    "dojo/_base/declare",
    "dojo/parser",
    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin",
    "dojo/text!./templates/Statical_create2.txt",
    "dojo/on",
    "dojo/dom-style",
    "dojo/dom-class", 
    "dojo/dom-attr",
    "dojo/_base/lang",
    "dojo/dom-construct",
    "FrameWork/serviceUtil/ConfigurationService",
    "./Sattical_createitem"
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
      Sattical_createitem
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
                me._getAllModule();
                me._bindEvents();
            });
        },
        _getAllModule:function(){
            var me=this;
            debugger
            ConfigurationService.getLayerfield(me._Layerid).then(function(re){
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
                            var filed=data[i].name;
                            var cannotselect=["xmmc"]
                            var ids=filed.indexOf("id");
                            var shapes=filed.indexOf("shape");
                            var aa=me._filedArr.indexOf(filed);
                            var notshow=cannotselect.indexOf(filed);
                            

                            if(ids >= 0  || shapes >= 0 || notshow >=0){
                                var items=new Sattical_createitem({_data:data[i],_num:i,_add:false,_navId:me._navId,btntext:"禁止"}).placeAt(me.items_module);
                                items.startup();
                                me._items.push(items);
                            }else if(aa == -1 ){
                                var items=new Sattical_createitem({_data:data[i],_num:i,_add:true,_navId:me._navId,btntext:"添加"}).placeAt(me.items_module);
                                items._table2Fresh=me._table2Fresh.bind(me);
                                items.startup();
                                me._items.push(items);
                            }else {
                                var items=new Sattical_createitem({_data:data[i],_num:i,_add:false,_navId:me._navId,btntext:"已添加"}).placeAt(me.items_module);
                                items.startup();
                                me._items.push(items);
                            }
                           
                        }
                    }
                }else{
                    console.log(re.msg);
                }
               

            })
        },

        _bindEvents:function(){
        var me=this;
        on(me.close, "click", function () {
            me.destroy();
        });  
        },
        _table2Fresh:function(){},
        
      });
  });
  
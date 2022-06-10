define([
    "dojo/_base/declare",
    "dojo/parser",
    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin",
    "dojo/text!./templates/SurroundQuery_item.txt",
    "dojo/on",
    "dojo/dom-style",
    "dojo/dom-class", 
    "dojo/dom-attr",
    "dojo/_base/lang",
     "FrameWork/serviceUtil/ConfigurationService",
     "./SurroundQuery_create",
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
      lang,ConfigurationService,
      SurroundQuery_create
  ) {
      return declare([_WidgetBase, _TemplatedMixin], {
          templateString: template,
          
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
                me.num.innerHTML=me._num+1 || "--";
                me.text.innerHTML=me._data.name || "--";
                me.code.innerHTML=me._data.code || "--";
                me.icon.innerHTML=me._data.icon || "--";
                me.type.innerHTML=me._data.type || "--";
                me._bindEvents();
              });
          },
          _bindEvents:function(){
            var me=this;
            on(me.change, "click", function () {
                var _change=new SurroundQuery_create({_data : me._data,_style:"change"}).placeAt(dojo.body());
                _change.startup();
                _change._createRefresh=me._itemRefresh;
            });

            on(me.delete, "click", function (e) {
                e.stopPropagation();
                var id=me._data.id;
                if(confirm("请确认是否删除该标记")){
                    ConfigurationService.deleteSurroundquery(id).then(function(re){
                        if(re.code=="200"){
                            debugger
                            alert("删除成功");
                            me._itemRefresh();
                        }else{
                            alert(re.msg);
                        }
                    })
                }
            });
           
            on(me.navSub, "click", function () {
                me._setItems2(me._data);
            });
            

          },
        //   bar
        _itemRefresh:function(){},

        _setItems2:function(data){}
      });
  });
  
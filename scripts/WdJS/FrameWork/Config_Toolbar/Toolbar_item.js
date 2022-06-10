define([
    "dojo/_base/declare",
    "dojo/parser",
    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin",
    "dojo/text!./templates/Toolbar_item.txt",
    "dojo/on",
    "dojo/dom-style",
    "dojo/dom-class", 
    "dojo/dom-attr",
    "dojo/_base/lang",
     "FrameWork/serviceUtil/ConfigurationService",
     "./Toolbar_create"
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
      lang,ConfigurationService,Toolbar_create
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
                debugger
                me.num.innerHTML=me._num+1 || "--";
                me.text.innerHTML=me._data.text || "--";
                me.type.innerHTML=me._data.type || "--";
                me.icon.innerHTML=me._data.icon || "--";
                me.active_icon.innerHTML=me._data.activeicon || "--";

                if(me._data.type == "siderbar"){
                    me.navSub.innerHTML="模块";
                }else if(me._data.type == "toolbar"){
                    me.navSub.innerHTML="下级";
                }

                me._bindEvents();
              });
          },
          _bindEvents:function(){
            var me=this;

            on(me.navSub, "click", function (e) {
                
                if(me._data.type == "siderbar"){
                    // 模块
                    me._setItems4(me._data);
                }else if(me._data.type == "toolbar"){
                    // 下级
                    me._setItems2(me._data);

                }
            });
            on(me.delete, "click", function (e) {
                e.stopPropagation();
                var id=me._data.id;
                if(confirm("请确认是否删除该标记")){
                    ConfigurationService.deleteToolbar(id).then(function(re){
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

            on(me.change, "click", function () {
                var _change=new Toolbar_create({_data : me._data,_style:"change"}).placeAt(dojo.body());
                _change.startup();
                _change._createRefresh=me._itemRefresh;

            });


          },

         _itemRefresh:function(){},
         _setItems2:function(data){},
         _setItems4:function(data){},
         _setMouleItems2:function(){},

      });
  });
  
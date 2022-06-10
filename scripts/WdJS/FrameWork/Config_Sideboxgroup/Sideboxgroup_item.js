define([
    "dojo/_base/declare",
    "dojo/parser",
    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin",
    "dojo/text!./templates/Sideboxgroup_item.txt",
    "dojo/on",
    "dojo/dom-style",
    "dojo/dom-class", 
    "dojo/dom-attr",
    "dojo/_base/lang",
     "FrameWork/serviceUtil/ConfigurationService",
     "./Sideboxgroup_create"
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
      lang,ConfigurationService,Sideboxgroup_create
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
                me.text.innerHTML=me._data.groupname || "--";
                me.sum.innerHTML=me._data.subItem.length || "0";
                me.user_mark.innerHTML=me._data.userid || "null";
                me._bindEvents();
              });
          },
          _bindEvents:function(){
            var me=this;
            // 
            on(me.change, "click", function () {
                var _change=new Sideboxgroup_create({_data : me._data,_style:"change"}).placeAt(dojo.body());
                _change.startup();
                _change._createRefresh=me._itemRefresh;
            });

            on(me.delete, "click", function (e) {
                e.stopPropagation();
                var id=me._data.id;
                if(confirm("请确认是否删除该标记")){
                    ConfigurationService.deleteSideboxgroup(id).then(function(re){
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
  
define([
    "dojo/_base/declare",
    "dojo/parser",
    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin",
    "dojo/text!./templates/Conflict_item3.txt",
    "dojo/on",
    "dojo/dom-style",
    "dojo/dom-class", 
    "dojo/dom-attr",
    "dojo/_base/lang",
     "FrameWork/serviceUtil/ConfigurationService",
     "./Conflict_create3"
  ], function ( declare, parser,  _WidgetBase, _TemplatedMixin, template, on, domStyle, domClass, domAttr, lang,ConfigurationService,Conflict_create3) {
      return declare([_WidgetBase, _TemplatedMixin], {
          templateString: template,
           _subitems:[],
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
                me.nav1name.innerHTML=me._nav1text || "--";
                me.nav2name.innerHTML=me._nav2text || "--";
                me._bindEvents();
              });
          },
          _bindEvents:function(){
            var me=this;
            on(me.delete, "click", function (e) {
                e.stopPropagation();
                var id=me._data.id;
                if(confirm("请确认是否删除该标记")){
                    ConfigurationService.deleteConflict3(id).then(function(re){
                        if(re.code=="200"){
                            debugger
                            alert("删除成功");
                            me._table3Fresh();
                        }else{
                            alert(re.msg);
                        }
                    })
                }
            });
            on(me.change, "click", function (e) {
                var _change=new Conflict_create3({_data : me._data,_style:"change",_nav2Id:me._nav2Id}).placeAt(dojo.body());
                _change.startup();
                _change._createRefresh=me._table3Fresh;
            });

            on(me.subItem, "click", function (e) {
                me._setItems4(me._data);
            });
          },
          _table3Fresh:function(){},
          _setItems4:function(){},
       
      });
  });
  
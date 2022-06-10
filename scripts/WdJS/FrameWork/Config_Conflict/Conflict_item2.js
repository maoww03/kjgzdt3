define([
    "dojo/_base/declare",
    "dojo/parser",
    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin",
    "dojo/text!./templates/Conflict_item2.txt",
    "dojo/on",
    "dojo/dom-style",
    "dojo/dom-class", 
    "dojo/dom-attr",
    "dojo/_base/lang",
     "FrameWork/serviceUtil/ConfigurationService",
     "./Conflict_create2"
  ], function ( declare, parser,  _WidgetBase, _TemplatedMixin, template, on, domStyle, domClass, domAttr, lang,ConfigurationService,Conflict_create2
    ) {
      return declare([_WidgetBase, _TemplatedMixin], {
          templateString: template,
           _subitems:[],
           _naviArr:[],
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
                me.supertext.innerHTML=me._super.groupname || "--";
                me._bindEvents();
              });
          },
          _bindEvents:function(){
            var me=this;
            on(me.delete, "click", function (e) {
                e.stopPropagation();
                var id=me._data.id;
                if(confirm("请确认是否删除该标记")){
                    ConfigurationService.deleteConflict2(id).then(function(re){
                        if(re.code=="200"){
                            debugger
                            alert("删除成功");
                            me._table2Fresh();
                        }else{
                            alert(re.msg);
                        }
                    })
                }
            });
            // change
            on(me.change, "click", function (e) {
                var _change=new Conflict_create2({_data : me._data,_style:"change",_naviArr:me._naviArr,_super:me._super}).placeAt(dojo.body());
                _change.startup();
                _change._createRefresh=me._table2Fresh;
            });

            on(me.subItem, "click", function (e) {
                me._setItems3(me._data);
            });
          },
          _table2Fresh:function(){},
          _setItems3:function(){},
      
       
      });
  });
  
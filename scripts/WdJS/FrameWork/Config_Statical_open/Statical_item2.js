define([
    "dojo/_base/declare",
    "dojo/parser",
    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin",
    "dojo/text!./templates/Statical_item2.txt",
    "dojo/on",
    "dojo/dom-style",
    "dojo/dom-class", 
    "dojo/dom-attr",
    "dojo/_base/lang",
     "FrameWork/serviceUtil/ConfigurationService",
     "./Statical_create3"
  ], function ( declare, parser,  _WidgetBase, _TemplatedMixin, template, on, domStyle, domClass, domAttr, lang,ConfigurationService,Statical_create3) {
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
                me.field.innerHTML=me._data.field || "--";
                me.alias.innerHTML=me._data.alias || "--";
                me.super.innerHTML=me._supertext || "--";
                me._bindEvents();
              });
          },
          _bindEvents:function(){
            var me=this;
            on(me.delete, "click", function (e) {
                e.stopPropagation();
                if(confirm("请确认是否删除该标记")){
                    ConfigurationService.deStaticalfield(me._data.id).then(function(re){
                        if(re.code=="200"){
                            debugger
                            alert("删除成功");
                            me._table2Fresh();
                        }else{
                            console.log(re.msg);
                        }
                    })
                }
            });
            // change
            on(me.change, "click", function (e) {
                var _change=new Statical_create3({_data : me._data,_page:me._nowPage}).placeAt(dojo.body());
                _change.startup();
                _change._table2Fresh=me._table2Fresh.bind(me);

            });
          },
          _table2Fresh:function(){},
      
       
      });
  });
  
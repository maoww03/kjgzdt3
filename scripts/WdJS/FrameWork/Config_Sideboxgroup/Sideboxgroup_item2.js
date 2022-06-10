define([
    "dojo/_base/declare",
    "dojo/parser",
    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin",
    "dojo/text!./templates/Sideboxgroup_item2.txt",
    "dojo/on",
    "dojo/dom-style",
    "dojo/dom-class", 
    "dojo/dom-attr",
    "dojo/_base/lang",
     "FrameWork/serviceUtil/ConfigurationService"
  ], function ( declare, parser,  _WidgetBase, _TemplatedMixin, template, on, domStyle, domClass, domAttr, lang,ConfigurationService) {
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
                me.text.innerHTML=me._data.text || "--";
                me.modular.innerHTML=me._data.modular || "--";
                me.icon.innerHTML=me._data.icon || "--";
                me.active_icon.innerHTML=me._data.active_icon || "--";
                me.tooltip.innerHTML=me._data.tooltip || "--";
                me.nav.innerHTML=me._navtext || "--";
                me._bindEvents();
              });
          },
          _bindEvents:function(){
            var me=this;
            on(me.delete, "click", function (e) {
                e.stopPropagation();
                if(confirm("请确认是否删除该标记")){
                    debugger
                    ConfigurationService.deleteSideboxgroupModule(me._data.moduleId,me._navid).then(function(re){
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
          },
          _table2Fresh:function(){},
      
       
      });
  });
  
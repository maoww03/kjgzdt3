define([
    "dojo/_base/declare",
    "dojo/parser",
    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin",
    "dojo/text!./templates/Toolbar_itemModule.txt",
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
           _alow:true,
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
                me.text.innerHTML=me._data.text || "--";
                me.modular.innerHTML=me._data.modular || "--";
                if(me._add == false){
                    domStyle.set(me.add,"background","#ccc");
                    me.add.innerHTML="已添加";
                    me._alow=false;
                }
                me._bindEvents();
              });
          },
          _bindEvents:function(){
            var me=this;
            on(me.add, "click", function (e) {
                debugger
                if(me._type == "toolbar"){
                    if(me._alow){
                        var ModuleId=me._data.id;
                        var menuId=me._menuid
                        var aaa={
                            "moduleId": ModuleId,
                            "submenuId": menuId
                        }
                        
                        ConfigurationService.addtoolbarMoudle(JSON.stringify(aaa)).then(function(re){
                            if(re.code == '200'){
                                debugger
                                alert("添加成功！");
                                domStyle.set(me.add,"background","#ccc");
                                me.add.innerHTML="已添加";
                                me._alow=false;
                                me._table3Fresh();
                            }else{
                                alert(re.msg);
                            }
                        });
    
                    }
                }else if(me._type == "siderbar"){
                    if(me._alow){
                        var ModuleId=me._data.id;
                        var menuId=me._menuid;
                        ConfigurationService.addSiderbarModule(ModuleId,menuId).then(function(re){
                            if(re.code == '200'){
                                debugger
                                alert("添加成功！");
                                domStyle.set(me.add,"background","#ccc");
                                me.add.innerHTML="已添加";
                                me._alow=false;
                                me._table4Fresh();
                            }else{
                                alert(re.msg);
                            }
                        });
    
                    }
                }
               
                
            });
          },
          _table3Fresh:function(){},
          _table4Fresh:function(){},
      
       
      });
  });
  
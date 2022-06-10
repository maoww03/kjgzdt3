define([
    "dojo/_base/declare",
    "dojo/parser",
    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin",
    "dojo/text!./templates/Sattical_createitem.txt",
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
                me.name.innerHTML=me._data.name || "--";
                me.remarks.innerHTML=me._data.remarks || "--";
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
                if(me._alow){
                    debugger
                    var _navId=me._navId;
                    var data={
                        "alias": me._data.remarks,
                        "field":  me._data.name,
                        "statisticalAnalysisLayerId": _navId
                      };
                    ConfigurationService.addStaticalfield(JSON.stringify(data)).then(function(re){
                        if(re.code == '200'){
                            debugger
                            alert("添加成功！");
                            domStyle.set(me.add,"background","#ccc");
                            me.add.innerHTML="已添加";
                            me._alow=false;
                            me._table2Fresh();
                        }else{
                            alert(re.msg);
                        }
                    });

                }
                
            });
          },
          _table2Fresh:function(){},
      
       
      });
  });
  
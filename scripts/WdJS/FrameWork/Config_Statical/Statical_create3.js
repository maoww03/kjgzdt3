define([
    "dojo/_base/declare",
    "dojo/parser",
    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin",
    "dojo/text!./templates/Statical_create3.txt",
    "dojo/on",
    "dojo/dom-style",
    "dojo/dom-class", 
    "dojo/dom-attr",
    "dojo/_base/lang",
    "dojo/dom-construct",
    "FrameWork/serviceUtil/ConfigurationService"
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
      ConfigurationService
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
                me.type_name.innerHTML="修改";
                me.alias.value=me._data.alias;
                me._bindEvents();
        });
        },
        

        _bindEvents:function(){
        var me=this;
        on(me.close, "click", function () {
            me.destroy();
        });  
        // qx
        on(me.qx, "click", function () {
            me.destroy();
        });
        // save
        on(me.save, "click", function () {
            var data={
                "alias":me.alias.value,
                "id": me._data.id
              }
            me._changeSave(data);
        });
       
        },
        _changeSave:function(data){
            var me=this;
            ConfigurationService.changeStaticalfield(JSON.stringify(data) ).then(function(re){
                if(re.code=='200'){
                    debugger
                    alert("修改成功");
                    var pageNum=me._page;
                    me._table2Fresh(pageNum);
                    me.destroy();
                }else{
                    alert(re.msg);
                }
            })
        },
     
        _table2Fresh:function(pageNum){},
        
      });
  });
  
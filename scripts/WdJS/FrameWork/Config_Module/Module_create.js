define([
    "dojo/_base/declare",
    "dojo/parser",
    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin",
    "dojo/text!./templates/Module_create.txt",
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
            if(me._style=="create"){
                me.type_name.innerHTML="新建";
            }else if(me._style=="change"){
                me.type_name.innerHTML="修改";
                me.text.value=me._data.text;
                me.modular.value=me._data.modular;
                me.icon.value=me._data.icon;
                me.active_icon.value=me._data.active_icon;
            }
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
            debugger
            var text=me.text.value;

            if(text==''){
                alert("输入名称！");
                return;
            }
            if(me._style=="create"){
                var data={
                    "active_icon": me.active_icon.value,
                    "icon": me.icon.value,
                    "modular": me.modular.value,
                    "text": me.text.value,
                    "tooltip":me.tooltip.value,
                } 
                me._createSave(data);
            }else if(me._style=="change"){
                var data={
                    "active_icon": me.active_icon.value,
                    "icon": me.icon.value,
                    "modular": me.modular.value,
                    "text": me.text.value,
                    "id":me._data.id,
                    "tooltip":me.tooltip.value,
                } 
                me._changeSave(data);
            }
        });
       
        },
        _changeSave:function(data){
            var me=this;
            ConfigurationService.updateModule(JSON.stringify(data) ).then(function(re){
                if(re.code=='200'){
                    debugger
                    alert("修改成功");
                    var pageNum=me._page;
                    me.changeRefresh(pageNum);
                    me.destroy();
                }else{
                    alert(re.msg);
                }
            })
        },
        _createSave:function(data){
            var me=this;
            ConfigurationService.createModule(JSON.stringify(data) ).then(function(re){
                if(re.code=='200'){
                    debugger
                    alert("新建成功");
                    var pageNum=me._page;
                    me.changeRefresh(pageNum);
                    me.destroy();
                }else{
                    alert(re.msg);
                }
            })
        },
        addrefresh:function(pageNum){},
        changeRefresh:function(pageNum){},
        
      });
  });
  
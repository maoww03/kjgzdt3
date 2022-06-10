define([
    "dojo/_base/declare",
    "dojo/parser",
    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin",
    "dojo/text!./templates/Toolbar_create.txt",
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
        _userid:0,
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
            if(me._style=="create"){
                me.type_name.innerHTML="新建";
            }else if(me._style=="change"){
                debugger
                me.type_name.innerHTML="修改";
                me.text.value=me._data.text;
                me.icon.value=me._data.icon;
                me.active_icon.value=me._data.activeicon;
                me.toolbartype.value=me._data.type 
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
            var text=me.text.value;
            if(text==''){
                alert("输入名称！");
                return;
            }
            if(me._style=="create"){
                var data={
                    "activeicon": me.active_icon.value,
                    "icon": me.icon.value,
                    "modular": null,
                    "type": me.toolbartype.value,
                    "text": me.text.value,
                    "userid":me._userid
                } 
                me._createSave(data);
            }else if(me._style=="change"){
                var data={
                    "activeicon": me.active_icon.value,
                    "icon": me.icon.value,
                    "text": me.text.value,
                    "id":me._data.id,
                    "type": me.toolbartype.value
                } 
                me._changeSave(data);
            }
        });
       
        },
        _changeSave:function(data){
            var me=this;
            ConfigurationService.updateToolbar(JSON.stringify(data) ).then(function(re){
                if(re.code=='200'){
                    debugger
                    alert("修改成功");
                    me._createRefresh();
                    me.destroy();
                }else{
                    alert(re.msg);
                }
            })
        },
        _createSave:function(data){
            var me=this;
            ConfigurationService.addToolBar(JSON.stringify(data) ).then(function(re){
                if(re.code=='200'){
                    debugger
                    alert("新建成功");
                    me._createRefresh();
                    me.destroy();
                }else{
                    alert(re.msg);
                }
            })
        },
        _createRefresh:function(){},
        
      });
  });
  
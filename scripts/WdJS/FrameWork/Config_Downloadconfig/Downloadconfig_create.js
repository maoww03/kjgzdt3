define([
    "dojo/_base/declare",
    "dojo/parser",
    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin",
    "dojo/text!./templates/Downloadconfig_create.txt",
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

            if(me._style=="create"){
                me.type_name.innerHTML="新建";
            }else if(me._style=="change"){
                me.type_name.innerHTML="修改";
                me.code.value=me._data.code;
                me.text.value=me._data.name;
                me.show.value=me._data.show;
                me.url.value=me._data.url;
            }else if(me._style == "check"){
                me.type_name.innerHTML="查看";
                me.code.value=me._data.code;
                me.text.value=me._data.name;
                me.show.value=me._data.show;
                me.url.value=me._data.url;

                domAttr.set(me.code,"readonly","readonly");
                domStyle.set(me.code,"background","#f5f5f5");
                domAttr.set(me.text,"readonly","readonly");
                domStyle.set(me.text,"background","#f5f5f5");
                domAttr.set(me.url,"readonly","readonly");
                domStyle.set(me.url,"background","#f5f5f5");
                domAttr.set(me.show,"readonly","readonly");
                domStyle.set(me.show,"background","#f5f5f5");
                domStyle.set(me.save,"display","none");

                
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
                debugger
                var data={
                    "code": me.code.value,
                    "name": me.text.value,
                    "show": me.show.value,
                    "url": me.url.value,
                  }
                me._createSave(data);
            }else if(me._style=="change"){
                debugger
                var data={
                    "code": me.code.value,
                    "name": me.text.value,
                    "show": me.show.value,
                    "url": me.url.value,
                    "id":me._data.id
                } 
                me._changeSave(data);
            }
        });
       
        },
        _changeSave:function(data){
            var me=this;
            ConfigurationService.updataDownloadconfig(JSON.stringify(data) ).then(function(re){
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
            debugger
            ConfigurationService.addDownloadconfig(JSON.stringify(data) ).then(function(re){
                if(re.code=='200'){
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
  
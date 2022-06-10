define([
    "dojo/_base/declare",
    "dojo/parser",
    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin",
    "dojo/text!./templates/SurroundQuery_create2.txt",
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
                me.layerid.value=me._data.layerid;
                me.caption.value=me._data.caption;
                me.queryurl.value=me._data.queryurl;
                me.displayfield.value=me._data.displayfield;
                me.alias.value=me._data.alias;
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
            
            var text=me.caption.value;
            if(text==''){
                alert("输入名称！");
                return;
            }
            if(me._style=="create"){
                debugger
                var data={
                   "layerid": me.layerid.value,
                    "caption":me.caption.value,
                    "queryurl":me.queryurl.value,
                    "displayfield": me.displayfield.value,
                    "alias": me.alias.value,
                    "config_id":me._navId,
                } 
                me._createSave(data);
            }else if(me._style=="change"){
                debugger
                var data={
                    "layerid": me.layerid.value,
                    "caption":me.caption.value,
                    "queryurl":me.queryurl.value,
                    "displayfield": me.displayfield.value,
                    "alias": me.alias.value,
                    "config_id":me._navId,
                    "id":me._data.id
                } 
                me._changeSave(data);
            }
        });
       
        },
        _changeSave:function(data){
            var me=this;
            ConfigurationService.updataSurroundquery2(JSON.stringify(data) ).then(function(re){
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
            ConfigurationService.addSurroundquery2(JSON.stringify(data) ).then(function(re){
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
  
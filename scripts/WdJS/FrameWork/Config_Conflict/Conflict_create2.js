define([
    "dojo/_base/declare",
    "dojo/parser",
    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin",
    "dojo/text!./templates/Conflict_create2.txt",
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
                    // domStyle.set(me.changePart,"display","none");
                    me.type_name.innerHTML="新建";
                }else if(me._style=="change"){
                    // domStyle.set(me.changePart,"display","block");
                    me.type_name.innerHTML="修改";
                    me.text.value=me._data.groupname;
                   
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
                    "configid": me._navId,
                    "groupname": me.text.value,
                    "subItem": null
                  }
                me._createSave(data);
            }else if(me._style=="change"){
                var data={
                    "groupname": me.text.value,
                    "id": me._data.id,
                    "subItem":null
                  }
                me._changeSave(data);
            }

           
        });
       
        },
        _createSave:function(data){
            var me=this;
            ConfigurationService.addConflict2(JSON.stringify(data) ).then(function(re){
                if(re.code=='200'){
                    alert("新建成功");
                    me._createRefresh();
                    me.destroy();
                }else{
                    alert(re.msg);
                }
            })
        },
        _changeSave:function(data){ 
            var me=this;
            ConfigurationService.changeConflict2(JSON.stringify(data) ).then(function(re){
                if(re.code=='200'){
                    alert("修改成功");
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
  
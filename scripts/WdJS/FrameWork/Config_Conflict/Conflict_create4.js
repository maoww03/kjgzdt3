define([
    "dojo/_base/declare",
    "dojo/parser",
    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin",
    "dojo/text!./templates/Conflict_create4.txt",
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
                    me.caption.value=me._data.caption;
                    me.layerid.value=me._data.layerid;
                    me.queryurl.value=me._data.queryurl;
                    me.field.value=me._data.field;
                } else if(me._style=="check"){
                    // domStyle.set(me.changePart,"display","block");
                    me.type_name.innerHTML="查看";
                    me.caption.value=me._data.caption;
                    me.layerid.value=me._data.layerid;
                    me.queryurl.value=me._data.queryurl;
                    me.field.value=me._data.field;

                    //     outline: none;// background: #f7f7f7;

                    domStyle.set(me.save,"display","none");

                    domAttr.set(me.caption,"readonly","readonly");
                    domStyle.set(me.caption,"outline","none");
                    domStyle.set(me.caption,"background","#f7f7f7");

                    domAttr.set(me.layerid,"readonly","readonly");
                    domStyle.set(me.layerid,"outline","none");
                    domStyle.set(me.layerid,"background","#f7f7f7");

                    domAttr.set(me.queryurl,"readonly","readonly");
                    domStyle.set(me.queryurl,"background","#f7f7f7");

                    domAttr.set(me.field,"readonly","readonly");
                    domStyle.set(me.field,"outline","none");
                    domStyle.set(me.field,"background","#f7f7f7");


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
                var data={
                    "caption":  me.caption.value,
                    "field": me.field.value,
                    "itemid": me._nav3Id,
                    "layerid": me.layerid.value,
                    "queryurl": me.queryurl.value
                }
                me._createSave(data);

            }else if(me._style=="change"){
                var data={
                    "caption": me.caption.value,
                    "field": me.field.value,
                    "id":me._data.id,
                    "layerid": me.layerid.value,
                    "queryurl":  me.queryurl.value
                  }
                me._changeSave(data);
            }

           
        });
       
        },
        _createSave:function(data){
            var me=this;
            ConfigurationService.addConflict4(JSON.stringify(data) ).then(function(re){
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
            ConfigurationService.changeConflict4(JSON.stringify(data) ).then(function(re){
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
  
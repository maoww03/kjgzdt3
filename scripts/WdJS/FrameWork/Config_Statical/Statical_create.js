define([
    "dojo/_base/declare",
    "dojo/parser",
    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin",
    "dojo/text!./templates/Statical_create.txt",
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
                me.layerName.value=me._data.layerName;
                me.layerType.value=me._data.layerType;
                me.layerid.value=me._data.layerid;
                me.regionCode.value=me._data.regionCode;
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
            var text=me.layerName.value;

            if(text==''){
                alert("输入名称！");
                return;
            }
            if(me._style=="create"){
                var data={
                    "layerName": me.layerName.value,
                    "layerType":  me.layerType.value,
                    "layerid":  me.layerid.value,
                    "regionCode":  me.regionCode.value
                  };
                me._createSave(data);
            }else if(me._style=="change"){
                var data={
                    "regionCode": me.regionCode.value,
                    "layerid": me.layerid.value,
                    "layerType": me.layerType.value,
                    "layerName": me.layerName.value,
                    "id":me._data.id
                } 
                me._changeSave(data);
            }
        });
       
        },
        _changeSave:function(data){
            var me=this;
            ConfigurationService.changeStatical(JSON.stringify(data) ).then(function(re){
                if(re.code=='200'){
                    debugger
                    alert("修改成功");
                    var pageNum=me._page;
                    me._createRefresh(pageNum);
                    me.destroy();
                }else{
                    alert(re.msg);
                }
            })
        },
        _createSave:function(data){
            var me=this;
            ConfigurationService.addStatical(JSON.stringify(data) ).then(function(re){
                if(re.code=='200'){
                    debugger
                    alert("新建成功");
                    var pageNum=me._page;
                    me._createRefresh(pageNum);
                    me.destroy();
                }else{
                    alert(re.msg);
                }
            })
        },
        _createRefresh:function(pageNum){},
        
      });
  });
  
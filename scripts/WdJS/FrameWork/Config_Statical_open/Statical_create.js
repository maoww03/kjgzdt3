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
            me.layerType.value="2";
            me.regionCode.value=regionCode;
            domAttr.set(me.layerType,"readonly","readonly");
            domAttr.set(me.regionCode,"readonly","readonly");
            if(me._style=="create"){
                me.type_name.innerHTML="新建";
                var innerHTML='';
                var layers = appConfig.map.getLayers().array_;
                innerHTML+='<option value="null">' + "请选择图层" + "</option>"
                for (var i = layers.length - 1; i >= 0; i--) {
                    var layer = layers[i].values_;
                    if (layer.layerType === "SuperMapWMTS" && layer.visible && layer.thematicMap) {
                        innerHTML+='<option value="' +layer.id+ '">' + layer.name + "</option>"
                    }
                }
                me.layerName.innerHTML=innerHTML;

            }else if(me._style=="change"){
                me.type_name.innerHTML="修改";
                // me.layerName.value=me._data.layerName;
                me.layerType.value=me._data.layerType;
                me.layerid.value=me._data.layerid;
                me.regionCode.value=me._data.regionCode;
                me.layerName.innerHTML='<option value="' +me._data.layerid+ '">' +me._data.layerName + "</option>";
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
            // var text=me.layerName.value;
            var text=me.layerName.options[me.layerName.selectedIndex].innerHTML;
          
            if(text==''){
                alert("输入名称！");
                return;
            }
            if(me._style=="create"){
                var data={
                    "layerName":text,
                    "layerType":  me.layerType.value,
                    "layerid":  me.layerid.value,
                    "regionCode":  me.regionCode.value
                  };
                  if(text=="null" || me.layerid.value==" "  ){
                    alert("请填打开图层");
                  }else{
                        me._createSave(data);
                  }
            }else if(me._style=="change"){
                var data={
                    "regionCode": me.regionCode.value,
                    "layerid": me.layerid.value,
                    "layerType": me.layerType.value,
                    "layerName": text,
                    "id":me._data.id
                } 
                if(text=="null" || me.layerid.value==" "  ){
                    alert("请填新建信息");
                  }else{
                        me._createSave(data);
                  }
            }
        });

        on(me.layerName, "change", function () {
            var layertable=me.layerName.options[me.layerName.selectedIndex].value;
            if(layertable != "null"){
                 me.layerid.value=layertable;
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
                    console.log(re.msg);
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
                    console.log(re.msg);
                }
            })
        },
        _createRefresh:function(pageNum){},
        
      });
  });
  
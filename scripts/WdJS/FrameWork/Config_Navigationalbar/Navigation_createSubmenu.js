define([
    "dojo/_base/declare",
    "dojo/parser",
    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin",
    "dojo/text!./templates/Navigation_createSubmenu.txt",
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
                    domStyle.set(me.changePart,"display","none");
                    me.type_name.innerHTML="新建";
                }else if(me._style=="change"){
                    domStyle.set(me.changePart,"display","block");
                    me.type_name.innerHTML="修改";
                    me.text.value=me._data.text;
                    me._setnaviDir(me._naviArr);
                   
                }

                me._bindEvents();
            });
        },
        _setnaviDir:function(navi){
            var me=this;
            var innerHTML='';
            navi.forEach(el=>{
                if(el.id == me._super.id){
                    innerHTML +=  `<option value="${el.id}">${el.text}</option> `
                }
            })
            navi.forEach(el => { 
                if(el.id != me._super.id){
                    innerHTML +=  `<option value="${el.id}">${el.text}</option> `
                }
            });
            me.navDir.innerHTML= innerHTML;
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
                    "modular": null,
                    "text": me.text.value,
                    "navigationalbarId": me._navId
                } 
                me._createSave(data);
            }else if(me._style=="change"){
                var data={
                    "id":me._data.id,
                    "navigationalbarId":  me.navDir.value,
                    "text": me.text.value,
                  }
                me._changeSave(data);
            }

           
        });
       
        },
        _createSave:function(data){
            var me=this;
            ConfigurationService.addsubMenu(JSON.stringify(data) ).then(function(re){
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
            ConfigurationService.updatesubMenu(JSON.stringify(data) ).then(function(re){
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
  
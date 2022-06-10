define([
    "dojo/_base/declare",
    "dojo/parser",
    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin",
    "dojo/text!./templates/Customquery_create.txt",
    "dojo/on",
    "dojo/dom-style",
    "dojo/dom-class", 
    "dojo/dom-attr",
    "dojo/_base/lang",
    "dojo/dom-construct",
    "FrameWork/serviceUtil/ConfigurationService",
    "./Customquery_create_where"
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
      ConfigurationService,
      Customquery_create_where
  ) {
      return declare([_WidgetBase, _TemplatedMixin], {
        templateString: template,
        Sql_btnList:["=",">","<","<>",">=","<=","_","%","()","like","And","Or","Not","ls"],
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
                    me.customName.value=me._data.customName;
                    me.tableName.value=me._data.tableName;
                    me.userid.value=me._data.userid;
                    me.sqlvalue.value=me._data.sql;
                }else if(me._style=="check"){
                    me.type_name.innerHTML="查看";
                    me.customName.value=me._data.customName;
                    me.tableName.value=me._data.tableName;
                    me.userid.value=me._data.userid;
                    me.sqlvalue.value=me._data.sql;

                    domAttr.set(me.customName,"readonly","readonly");
                    domAttr.set(me.tableName,"readonly","readonly");
                    domAttr.set(me.userid,"readonly","readonly");
                    domAttr.set(me.sqlvalue,"readonly","readonly");


                    domStyle.set(me.customName,"background","#f3f1f1");
                    domStyle.set(me.tableName,"background","#f3f1f1");
                    domStyle.set(me.userid,"background","#f3f1f1");
                    domStyle.set(me.sqlvalue,"background","#f3f1f1");

                    domStyle.set(me.where,"display","none");
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
            debugger
            var text=me.customName.value;

            if(text==''){
                alert("输入名称！");
                return;
            }
            if(me._style=="create"){
                var data={
                    "customName":  me.customName.value,
                    "tableName":  me.tableName.value,
                    "userid":  me.userid.value,
                    "sql":  me.sqlvalue.value
                  };
                me._createSave(data);
            }else if(me._style=="change"){
                var data={
                    "customName":  me.customName.value,
                    "tableName":  me.tableName.value,
                    "userid":  me.userid.value,
                    "sql":  me.sqlvalue.value,
                    "id":me._data.id
                } 
                me._changeSave(data);
            }
        });

        on(me.where, "click", function () {
            debugger
            var tableid=me.tableName.value;
            if(tableid == null || tableid == ''){
                alert("请输入表名");
            }else{
                var _where=new Customquery_create_where({_data : tableid}).placeAt(dojo.body());
                _where._whereInner=me._whereInner.bind(me);
                _where.startup();
            }
           
        });
        
       
        },
        _changeSave:function(data){
            var me=this;
            ConfigurationService.changeCustomquery(JSON.stringify(data) ).then(function(re){
                if(re.code=='200'){
                    alert("修改成功");
                    debugger
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
            debugger
            ConfigurationService.addCustomquery(JSON.stringify(data) ).then(function(re){
                if(re.code=='200'){
                    alert("新建成功");
                    debugger
                    var pageNum=me._page;
                    me._createRefresh(pageNum);
                    me.destroy();
                }else{
                    alert(re.msg);
                }
            })
        },
        _createRefresh:function(pageNum){},
        _whereInner:function(where){
            var me=this;
            me.sqlvalue.value += where;
        }
      });

  });
  
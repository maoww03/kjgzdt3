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
                me.userid.value=user.id;
                if(me._style=="create"){
                    me.type_name.innerHTML="新建";
                    me.xzms.value="public";

                    var innerHTML='';
                    var layers = appConfig.map.getLayers().array_;
                    innerHTML+='<option value="null">' + "请选择图层" + "</option>"
                    for (var i = layers.length - 1; i >= 0; i--) {
                        var layer = layers[i].values_;
                        if (layer.layerType === "SuperMapWMTS" && layer.visible && layer.thematicMap) {
                            innerHTML+='<option value="' +layer.id+ '">' + layer.name + "</option>"
                        }
                    }
                    me.layersNameSelect.innerHTML=innerHTML;
                    
                    
                }else if(me._style=="change"){
                    me.type_name.innerHTML="修改";
                    me.customName.value=me._data.customName;
                    me.tableName.value=me._data.tableName;
                    me.userid.value=me._data.userid;
                    me.sqlvalue.value=me._data.sql;
                    me.setLayerName(me._data.tableName);
                    me.xzms.value=me._data.schemaName;

                }else if(me._style=="check"){
                    me.type_name.innerHTML="查看";
                    me.customName.value=me._data.customName;
                    me.tableName.value=me._data.tableName;
                    me.userid.value=me._data.userid;
                    me.sqlvalue.value=me._data.sql;
                    me.setLayerName(me._data.tableName);
                    me.xzms.value=me._data.schemaName;


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
        setLayerName:function(layerId){
            var me=this;
            var layers = appConfig.map.getLayers().array_;
            for (var i = layers.length - 1; i >= 0; i--) {
                var layer = layers[i].values_;
                if (layer.id === layerId) {
                     var innerHTML='<option value="' +layer.id+ '">' + layer.name + "</option>";
                    break
                }
            }
            me.layersNameSelect.innerHTML=innerHTML;
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
                    "sql":  me.sqlvalue.value,
                    "schemaName":me.xzms.value
                  };
                me._createSave(data);
            }else if(me._style=="change"){
                var data={
                    "customName":  me.customName.value,
                    "tableName":  me.tableName.value,
                    "userid":  me.userid.value,
                    "sql":  me.sqlvalue.value,
                    "id":me._data.id,
                    "schemaName":me.xzms.value
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
        //  me.layersNameSelect
        on(me.layersNameSelect, "change", function () {
           var layertable=me.layersNameSelect.options[me.layersNameSelect.selectedIndex].value;
           if(layertable != "null"){
                me.tableName.value=layertable
                me.sqlvalue.value=`select * from "${layertable}" where `;
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
  
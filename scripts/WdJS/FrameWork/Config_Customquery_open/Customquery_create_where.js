define([
    "dojo/_base/declare",
    "dojo/parser",
    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin",
    "dojo/text!./templates/Customquery_create_where.txt",
    "dojo/on",
    "dojo/dom-style",
    "dojo/dom-class", 
    "dojo/dom-attr",
    "dojo/_base/lang",
    "dojo/dom-construct",
    "FrameWork/serviceUtil/ConfigurationService",
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
                // set btnList
                var btnList=``;
                for(var i=0;i<me.Sql_btnList.length;i++){
                    btnList+=`<div class="Sqlbtn" value="${me.Sql_btnList[i]}">${me.Sql_btnList[i]}</div>`;
                }
                me.sql_btn.innerHTML=btnList;

                //set filedselect
                var id=me._data;
                ConfigurationService.getLayerfield(id).then(function(re){
                    if(re.code == '200'){
                        var innerHTML=``;
                        // name: "id"  remarks: "主键"   type: "serial"
                        re.data.forEach(filed=>{
                            innerHTML += ` <div class="CustomQuertList" value="${filed.name}">${filed.name}（${filed.remarks}）</div>`;
                        })
                        me.selectfiled.innerHTML=innerHTML;
                        me._bindEvents();
                    }else{
                        alert(re.msg);
                    }
                });
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
            var where=me.sqlvalue.value;
            me._whereInner(where);
            me.destroy();
        });

        dojo.query(".Sqlbtn", me.domNode).forEach((dom) => {
            on(dom, "click", function () {
                var aa=domAttr.get(dom,"value");
                me.sqlvalue.value+=" "+aa;
                debugger
                me.sqlvalue.focus();
            }); 
        });
        // CustomQuertList
        dojo.query(".CustomQuertList", me.domNode).forEach((dom) => {
            on(dom, "dblclick", function () {
                var aa=domAttr.get(dom,"value");
                me.sqlvalue.value+=aa;
            }); 
        });
        },
        _whereInner:function(where){}
        
      });
  });
  
define([
    "dojo/_base/declare",
    "dojo/parser",
    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin",
    "dojo/text!./templates/Customquery_item.txt",
    "dojo/on",
    "dojo/dom-style",
    "dojo/dom-class", 
    "dojo/dom-attr",
    "dojo/_base/lang",
     "FrameWork/serviceUtil/ConfigurationService",
     "./Customquery_create",
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
      lang,ConfigurationService,
      Customquery_create
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
                me.num.innerHTML=me._num || "--";
                me.customName.innerHTML=me._data.customName || "--";
                me.tableName.innerHTML=me._data.tableName || "--";
                me.username.innerHTML=me._data.userid || "--";
                me._bindEvents();
              });
          },
          _bindEvents:function(){
            var me=this;

            on(me.check, "click", function () {
                var _change=new Customquery_create({_data : me._data,_style:"check",_page:me._nowPage}).placeAt(dojo.body());
                _change.startup();
                _change._createRefresh=me._table1fresh;
            });

            on(me.change, "click", function () {
                debugger
                var _change=new Customquery_create({_data : me._data,_style:"change",_page:me._nowPage}).placeAt(dojo.body());
                _change.startup();
                _change._createRefresh=me._table1fresh;
            });

            on(me.delete, "click", function (e) {
                e.stopPropagation();
                var id=me._data.id;
                if(confirm("请确认是否删除该标记")){
                    ConfigurationService.deleteCustomquery(id).then(function(re){
                        if(re.code=="200"){
                            debugger
                            alert("删除成功");
                            me._table1fresh(me._nowPage,me._num);
                        }else{
                            alert(re.msg);
                        }
                    })
                }
            });
           
           
            

          },
        //   bar
        _table1fresh:function(delpage,delnum){},

        _setItems2:function(data){}
      });
  });
  
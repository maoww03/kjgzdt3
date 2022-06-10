define([
    "dojo/_base/declare",
    "dojo/parser",
    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin",
    "dojo/text!./templates/Downloadconfig_item.txt",
    "dojo/on",
    "dojo/dom-style",
    "dojo/dom-class", 
    "dojo/dom-attr",
    "dojo/_base/lang",
     "FrameWork/serviceUtil/ConfigurationService",
     "./Downloadconfig_create",
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
      Downloadconfig_create
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
                me.num.innerHTML=me._num+1 || "--";
                me.name.innerHTML=me._data.name || "--";
                me.code.innerHTML=me._data.code || "--";
                me.url.innerHTML=me._data.url || "--";
                me.show.innerHTML=me._data.show || "--";
                me._bindEvents();
              });
          },
          _bindEvents:function(){
            var me=this;

            on(me.check, "click", function () {
                var _change=new Downloadconfig_create({_data : me._data,_style:"check"}).placeAt(dojo.body());
                _change.startup();
                _change._createRefresh=me._table1fresh;
            });

            on(me.updata, "click", function () {
                var _change=new Downloadconfig_create({_data : me._data,_style:"change"}).placeAt(dojo.body());
                _change.startup();
                _change._createRefresh=me._table1fresh;
            });

            on(me.delete, "click", function (e) {
                e.stopPropagation();
                var id=me._data.id;
                if(confirm("请确认是否删除该标记")){
                    ConfigurationService.deleteDownloadconfig(id).then(function(re){
                        if(re.code=="200"){
                            debugger
                            alert("删除成功");
                            me._table1fresh();
                        }else{
                            alert(re.msg);
                        }
                    })
                }
            });

          },
          
        _table1fresh:function(){},
      });
  });
  
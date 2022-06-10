define([
    "dojo/_base/declare",
    "dojo/parser",
    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin",
    "dojo/text!./templates/Module_item.txt",
    "dojo/on",
    "dojo/dom-style",
    "dojo/dom-class", 
    "dojo/dom-attr",
    "dojo/_base/lang",
     "FrameWork/serviceUtil/ConfigurationService",
     "./Module_create"
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
      lang,ConfigurationService,Module_create
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
                me.num.innerHTML=me._num || "--";
                me.text.innerHTML=me._data.text || "--";
                me.modular.innerHTML=me._data.modular || "--";
                me.icon.innerHTML=me._data.icon || "--";
                me.active_icon.innerHTML=me._data.active_icon || "--";
                me.tooltip.innerHTML=me._data.tooltip || '--';
                me._bindEvents();
              });
          },
          _bindEvents:function(){
            var me=this;
            on(me.change, "click", function () {
                var _change=new Module_create({_data : me._data,_style:"change",_page:me._nowPage}).placeAt(dojo.body());
                _change.startup();
                _change.changeRefresh=me.changeRefresh.bind(me);

            });

            on(me.delete, "click", function (e) {
                e.stopPropagation();
                var id=me._data.id;
                if(confirm("请确认是否删除该标记")){
                    ConfigurationService.deleteModule(id).then(function(re){
                        if(re.code=="200"){
                            debugger
                            alert("删除成功");
                            me.refresh(me._nowPage,me._num);
                        }else{
                            alert(re.msg);
                        }
                    })
                }
            });

          },
        refresh:function(delpage,delnum){},
        changeRefresh:function(page){
            this.refresh(page,null);
        }
      });
  });
  
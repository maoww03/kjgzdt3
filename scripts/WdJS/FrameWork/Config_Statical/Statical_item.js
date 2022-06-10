define([
    "dojo/_base/declare",
    "dojo/parser",
    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin",
    "dojo/text!./templates/Statical_item.txt",
    "dojo/on",
    "dojo/dom-style",
    "dojo/dom-class", 
    "dojo/dom-attr",
    "dojo/_base/lang",
     "FrameWork/serviceUtil/ConfigurationService",
     "./Statical_create"
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
      Statical_create
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
                me.layerName.innerHTML=me._data.layerName || "--";
                me.layerid.innerHTML=me._data.layerid || "--";
                me.layerType.innerHTML=me._data.layerType || "--";
                me.regionCode.innerHTML=me._data.regionCode || "--";
                me._bindEvents();
              });
          },
          _bindEvents:function(){
            var me=this;
            on(me.change, "click", function () {
                var _change=new Statical_create({_data : me._data,_style:"change",_page:me._nowPage}).placeAt(dojo.body());
                _change.startup();
                _change._createRefresh=me._table1fresh.bind(me);

            });

            on(me.delete, "click", function (e) {
                e.stopPropagation();
                var id=me._data.id;
                if(confirm("请确认是否删除该标记")){
                    ConfigurationService.deleteStatical(id).then(function(re){
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
            
            on(me.addFiled, "click", function () {
                me._setItems2(me._data);
            });



          },
        _setItems2:function(data){},
        _table1fresh:function(delpage,delnum){}
      });
  });
  
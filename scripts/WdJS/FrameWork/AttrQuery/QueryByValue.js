define([
  "dojo/_base/declare",
  "dojo/parser",
  "dojo/DeferredList",
  "dijit/_WidgetBase",
  "dijit/_TemplatedMixin",
  "dojo/text!./templates/QueryByValue.txt",
  "dojo/on",
  "dojo/dom-style",
  "dojo/dom-class",
  "dojo/dom-attr",
  "dojo/dom-construct",
  "FrameWork/serviceUtil/workMapService",
  "./QueryByValueTable",
    "./QueryByValue_create"
], function (
  declare,
  parser,
  DeferredList,
  _WidgetBase,
  _TemplatedMixin,
  template,
  on,
  domStyle,
  domClass,
  domAttr,
  domConstruct,
  workMapService,
  QueryByValueTable,
  QueryByValue_create
) {
  return declare([_WidgetBase, _TemplatedMixin], {
    templateString: template,
    _layer_now: null,
    _conflictAnalysisTable: null,
    _userid: user.id,
    _layerList: [],
    _queryByValueTable: null,

    constructor: function (args) {},
    postCreate: function () {
      this.inherited(arguments);
    },
    startup: function () {
      var me = this;
      if (me._started) {
        return;
      }
      parser.parse(me.domNode).then(function () {
        me._setLayerList(me._userid);
        me._bindEvents();
      });
    },
      _bindEvents: function () {
          var me = this;
          on(me.close, "click", function () {
              domStyle.set(dojo.byId("showTable"),"display","none");
              me._destroy();
              _checkQuery=true;
              _attrQueryTool.activate("point");
          });
          on(me.queryBtn, "click", function () {
              if (me._queryByValueTable != null) {
                  me._queryByValueTable._destroy();
              }
              
              var query=me.layersNameSelect.options[me.layersNameSelect.selectedIndex].value;
              var query_L=query.split(".");
              me._queryByValueTable = new QueryByValueTable({ _queryid: query_L[0],_layername:query_L[1] ,querymsg:me._layerList}).placeAt(dojo.body());
              me._queryByValueTable.startup();
          });
          // newquery
          on(me.addquery, "click", function () {
             var newpanel=new QueryByValue_create().placeAt(dojo.body());
             newpanel.startup();
          
          });
          // restore
          on(me.restore, "click", function () {
            me._setLayerList(me._userid);
          });
         


      },

    _setLayerList: function (userid) {
      var me = this;
      me.layersNameSelect.innerHTML=``;
        workMapService.selectCustomQueryByUserId(userid).then(function (out) {
        if (out.code == 200) {
          if (out.data.length != 0) {
            me._layerList = out.data;
            out.data.forEach((layer) => {
              debugger
                me.layersNameSelect.innerHTML += '<option value="' + layer.id +'.'+layer.tableName+ '">' + layer.customName + "</option>";
            });
          } else {
            console.log("未配置查询图层");
          }
        } else {
          console.log(out.msg);
        }
      });
    },

    _isDateTime: function (data) {
      var flag = false;
      if (isNaN(data) && !isNaN(Date.parse(data))) {
        flag = true;
      }
      return flag;
    },

    _destroy: function () {
      var me = this;
      if (me._queryByValueTable != null) {
        me._queryByValueTable._destroy();
      }
      me.destroy();
    },
  });
});

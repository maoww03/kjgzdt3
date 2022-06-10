define([
  "dojo/_base/declare",
  "dojo/parser",
  "dijit/_WidgetBase",
  "dijit/_TemplatedMixin",
  "dojo/text!./templates/MapVisibleBar.txt",
  "dojo/on",
  "dojo/dom-style",
  "dojo/dom-class",
  "dojo/dom-attr",
  "dojo/dom-construct",
  "FrameWork/View/MoreScreen",
  "FrameWork/MapUtil/MapFactory"
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
  domConstruct,
  MoreScreen,
  MapFactory
) {
  return declare([_WidgetBase, _TemplatedMixin], {
    templateString: template,
    index: 0,
    _handler: null,

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
        me._data.visible = true;
        domStyle.set(me.domNode, "top", me._top + "px");
        dojo.query(".map").forEach((dom, i) => {
          if (MoreScreen.mapArr[i] == undefined) {
            domStyle.set(dom, "background-color", "red");
            domAttr.set(dom, "states", "disable");
          }
        });
        MoreScreen.mapArr.forEach((map, index) => {
          for (var i = 0; i < map.getLayers().array_.length; i++) {
            var layer = map.getLayers().array_[i];
            var layer_id = layer.get("id");
            if (layer_id == me._data.id) {
              domStyle.set(dojo.query(".map")[index], "background-color", "#357efe");
              domAttr.set(dojo.query(".map")[index], "states", "on");
            }
          }
        });
        me._bindEvents();

        setTimeout(
          function () {
            me._activeHandler();
          }.bind(this),
          500
        );
      });
    },
    _bindEvents: function () {
      var me = this;
      me._MapConfig=_otherRegion();
      dojo.query(".map").forEach((dom, index) => {
        on(dom, "click", function () {
          var map = MoreScreen.mapArr[index];
          var states = domAttr.get(dom, "states");
          if (states == "off") {
            domStyle.set(dom, "background-color", "#357efe");
            domAttr.set(dom, "states", "on");
            MapFactory._createLayer(me._data,  me._MapConfig, map);
          } else if (states == "on") {
            domStyle.set(dom, "background-color", "#c6c8c3");
            domAttr.set(dom, "states", "off");

            for (var i = 0; i < map.getLayers().array_.length; i++) {
              var layer = map.getLayers().array_[i];
              var layer_id = layer.get("id");
              if (layer_id == me._data.id) {
                map.removeLayer(layer);
              }
            }
          }
        });
      });
    },
    _destroyMe: function () {
      var me = this;
      if (me._handler != null) {
        dojo.disconnect(me._handler);
        me._handler = null;
      }
      me.destroy();
    },
    _activeHandler: function () {
      var me = this;
      me._handler = on(document, "click", function (evt) {
        var x = evt.clientX;
        var y = evt.clientY;
        var divx1 = me.domNode.offsetLeft;
        var divy1 = me.domNode.offsetTop;
        var divx2 = me.domNode.offsetLeft + me.domNode.offsetWidth;
        var divy2 = me.domNode.offsetTop + me.domNode.offsetHeight;
        if (x < divx1 || x > divx2 || y < divy1 || y > divy2) {
          dojo.query(".moreScreenMapVisibleIcon").forEach((dom) => {
            domClass.replace(dom, "add", "add2");
          });
          me._destroyMe();
        }
      });
    },
  });
});

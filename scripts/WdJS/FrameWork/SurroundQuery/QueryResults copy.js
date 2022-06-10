define([
  "dojo/_base/declare",
  "dojo/parser",
  "dijit/_WidgetBase",
  "dijit/_TemplatedMixin",
  "dojo/text!./templates/QueryResults.txt",
  "dojo/on",
  "dojo/dom-style",
  "dojo/dom-class",
  "dojo/dom-attr",
  "dojo/dom-construct",
  "FrameWork/AttrQuery/Attribute",
], function (declare, parser, _WidgetBase, _TemplatedMixin, template, on, domStyle, domClass, domAttr, domConstruct, Attribute) {
  return declare([_WidgetBase, _TemplatedMixin], {
    templateString: template,
    _map: null,
    _page: 0,
    _rows: 4,
    _pageCount: 0,
    _layerListClickList: [],
    _featuresClickList: [],
    _layerIdNow: "",
    _highlightedLayer: null,
    //高亮图层颜色
    _highlightedStyle: new ol.style.Style({
      // 默认多面形中多边形样式 style_setting为false
      fill: new ol.style.Fill({
        color: "rgba(255,0,0,0.5)",
      }),
      stroke: new ol.style.Stroke({
        color: "red",
        width: 2,
      }),
    }),
    _attribute: null,

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
        debugger
        var aa=me.data;
        var ishas = false;
        for (var i = 0; i < appConfig.map.getLayers().array_.length; i++) {
          var layer = appConfig.map.getLayers().array_[i];
          var layer_id = layer.get("id");
          if (layer_id == "highlighted") {
            me._highlightedLayer = layer;
            ishas = true;
          }
        }
        if (!ishas) {
          me._highlightedLayer = new ol.layer.Vector({
            id: "highlighted",
            layerTitle: "属性查询",
            graphicMap: true,
            source: new ol.source.Vector({
              features: [],
            }),
            zIndex: appConfig.map.getLayers().getLength() + 1,
          });
          appConfig.map.addLayer(me._highlightedLayer);
        }
        me._highlightedLayer.getSource().clear();

        me._pageCount = Math.ceil(me.data.length / me._rows);

        if (me._pageCount > 1) {
          domStyle.set(me.page, "display", "block");
          domStyle.set(me.next, "display", "block");
          me.page.innerHTML = me._page + 1 + "/" + me._pageCount;
        }
        if (me.data.length > 1) {
          me._layerIdNow = me.data[0].layer.layerid;
          me.layerListRefresh();
          me.featuresRefresh(me._layerIdNow);
          domStyle.set(me.layerList, "display", "block");
        } else {
          me._layerIdNow = me.data[0].layer.layerid;
          me.featuresRefresh(me.data[0].layer.layerid);
          domStyle.set(me.layerList, "display", "none");
        }

        me._bindEvents();
      });
    },
    _bindEvents: function () {
      var me = this;
      on(me.close, "click", function () {
        me._destroy();
      });
      on(me.next, "click", function () {
        if (me._page != me._pageCount - 1) {
          me._page++;
          me.page.innerHTML = me._page + 1 + "/" + me._pageCount;
          domStyle.set(me.pre, "display", "block");
          if (me._page == me._pageCount.length - 1) {
            domStyle.set(me.next, "background-image", "none");
          }
          me.layerListRefresh();
        }
      });
      on(me.pre, "click", function () {
        if (me._page != 0) {
          me._page--;
          me.page.innerHTML = me._page + 1 + "/" + me._pageCount;
          domStyle.set(me.next, "background-image", " url(image/popup.png)");
          if (me._page == 0) {
            domStyle.set(me.pre, "display", "none");
          }
          me.layerListRefresh();
        }
      });
    },
    layerListRefresh: function () {
      var me = this;
      me.layerList.innerHTML = "";
      for (var i = me._page * me._rows; i < (me._page + 1) * me._rows; i++) {
        var d = me.data[i];
        if (d != undefined) {
          if (me._layerIdNow == d.layer.layerid) {
            me.layerList.innerHTML +=
              '<div class="layerLi select" title="' + d.layer.caption + '" layerId="' + d.layer.layerid + '">' + d.layer.caption + "</div>";
          } else {
            me.layerList.innerHTML +=
              '<div class="layerLi" title="' + d.layer.caption + '" layerId="' + d.layer.layerid + '">' + d.layer.caption + "</div>";
          }
        }
      }
      me.layerListClickBind();
    },
    layerListClickBind: function () {
      var me = this;
      me.layerListClickDis();
      var clickKey = on(dojo.query(".layerLi", me.domNode), "click", function (evt) {
        dojo.query(".layerLi", me.domNode).forEach((layerLi) => {
          domClass.remove(layerLi, "select");
        });
        domClass.add(evt.target, "select");
        me._layerIdNow = domAttr.get(evt.target, "layerId");
        me.featuresRefresh(me._layerIdNow);
      });
      me._layerListClickList.push(clickKey);
    },
    layerListClickDis: function () {
      var me = this;
      if (me._layerListClickList.length != 0) {
        me._layerListClickList.forEach((h) => {
          dojo.disconnect(h);
        });
        me._layerListClickList = [];
      }
    },
    featuresRefresh: function (id) {
      var me = this;
      me.contentColumn.innerHTML = "";
      var obj = me.data.find(function (obj) {
        return obj.layer.layerid == id;
      });
      me.chineseDisplayField.innerHTML = obj.layer.alias;
      me.contentColumn.innerHTML = "";
      obj.data.forEach((d, index) => {
        me.contentColumn.innerHTML +=
          '<div class="datali" data-id="' +
          index +
          '"><div style="float: left; width: 30%; text-align: center">' +
          (index + 1) +
          '</div><div style="float: left; width: 70%; text-align: center">' +
          d.properties.attributes[obj.layer.displayfield] +
          "</div></div></div>";
      });
      me.featuresClickBind();
    },
    featuresClickBind: function () {
      var me = this;
      me.featuresListClickDis();
      dojo.query(".datali", me.contentColumn).forEach((dom) => {
        var clickKey = on(dom, "click", function (evt) {
          dojo.query(".datali", me.contentColumn).forEach((datali) => {
            domClass.remove(datali, "select");
          });
          domClass.add(dom, "select");
          var obj = me.data.find(function (obj) {
            return obj.layer.layerid == me._layerIdNow;
          });
          var dataId = domAttr.get(dom, "data-id");
          var data = obj.data[dataId];
          if (me._attribute != null) {
            me._attribute._destroy();
          }
          me._attribute = new Attribute({
            _data: [data],
            _highlightedLayer: me._highlightedLayer,
            _highlightedStyle: me._highlightedStyle,
          }).placeAt(dojo.query("body")[0]);
          
          domStyle.set(me._attribute.domNode, "right", "inherit");
          domStyle.set(me._attribute.domNode, "left", "780px");
          domStyle.set(me._attribute.domNode, "top", "90px");
          me._attribute.startup();
        });
        me._featuresClickList.push(clickKey);
      });
    },
    featuresListClickDis: function () {
      var me = this;
      if (me._featuresClickList.length != 0) {
        me._featuresClickList.forEach((h) => {
          dojo.disconnect(h);
        });
        me._featuresClickList = [];
      }
    },
    _destroy: function () {
      var me = this;
      me.layerListClickDis();
      me.featuresListClickDis();
      if (me._attribute != null) {
        me._attribute._destroy();
      }
      me.destroy();
    },
  });
});

define([
  "dojo/_base/declare",
  "dojo/parser",
  "dijit/_WidgetBase",
  "dijit/_TemplatedMixin",
  "dojo/text!./templates/Attribute_MoreScreen.txt",
  "dojo/on",
  "dojo/dom-style",
  "dojo/dom-class",
  "dojo/dom-attr",
  "dojo/dom-construct",
  "FrameWork/AttrConfig",
], function (declare, parser, _WidgetBase, _TemplatedMixin, template, on, domStyle, domClass, domAttr, domConstruct, AttrConfig) {
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
        debugger
        me.index = 0;
        if (me._dataList[me.index].data.length > 0) {
          me.setFeature(me._dataList[me.index].data[0]);
          me.setLayer(me._dataList[me.index].data);
        } else {
          me.layerList.innerHTML = "";
          me.content.innerHTML = "";
        }
        if (me._dataList.length <= 1) {
          domStyle.set(me.next, "background-image", "none");
        }

        // me.page.innerHTML = me.index + 1 + "/" + me._dataList.length;
        domStyle.set(me.content, "max-height", parseFloat(me.attrDiv.offsetHeight) - 40 + "px");
        me._bindEvents();
      });
    },
    _bindEvents: function () {
      var me = this;
      on(me.close, "click", function () {
        me.destroy();
        me.layerClickDis();
        me.mapArr.forEach((map, index) => {
          for (var i = 0; i < map.getLayers().array_.length; i++) {
            var layer = map.getLayers().array_[i];
            var layer_id = layer.get("id");
            if (layer_id == "highlighted") {
              layer.getSource().clear();
            }
          }
        });
      });
      on(me.next, "click", function () {
        if (me.index != me._dataList.length - 1) {
          me.index++;
          // me.page.innerHTML = me.index + 1 + "/" + me._dataList.length;
          domStyle.set(me.pre, "display", "block");
          if (me.index == me._dataList.length - 1) {
              domStyle.set(me.next, "background-image", "none");
          }
          if (me._dataList[me.index].data.length > 0) {
            me.setFeature(me._dataList[me.index].data[0]);
            me.setLayer(me._dataList[me.index].data);
          } else {
            me.layerList.innerHTML = "";
            me.content.innerHTML = "";
          }
        }
      });
      on(me.pre, "click", function () {
        if (me.index != 0) {
          me.index--;
          // me.page.innerHTML = me.index + 1 + "/" + me._dataList.length;
            domStyle.set(me.next, "background-image", " url(image/attr/next.png)");
          if (me.index == 0) {
            domStyle.set(me.pre, "display", "none");
          }
          if (me._dataList[me.index].data.length > 0) {
            me.setFeature(me._dataList[me.index].data[0]);
            me.setLayer(me._dataList[me.index].data);
          } else {
            me.layerList.innerHTML = "";
            me.content.innerHTML = "";
          }
        }
      });
    },
    setLayer: function (data) {
      var me = this;
      me.layerList.innerHTML = "";
      data.forEach((li, index) => {
        var obj = AttrConfig.layers.find(function (obj) {
          return obj.id == li.properties.gml.featureType;
        });
        if (index == 0) {
          me.layerList.innerHTML += "<div class='layerName select' data-id='" + index + "'>" + obj.name + "</div>";
        } else {
          me.layerList.innerHTML += "<div class='layerName' data-id='" + index + "'>" + obj.name + "</div>";
        }
      });
      me.layerClickBind();
    },

    layerClickBind: function () {
      var me = this;
      me.layerClickDis();
      me._handler = on(dojo.query(".layerName", me.domNode), "click", function (evt) {
        dojo.query(".layerName", me.domNode).forEach((dom) => {
          domClass.remove(dom, "select");
        });
        domClass.add(evt.target, "select");
        var id = parseInt(domAttr.get(evt.target, "data-id"));
        me.setFeature(me._dataList[me.index].data[id]);
      });
    },
    layerClickDis: function () {
      var me = this;
      if (me._handler != null) {
        dojo.disconnect(me._handler);
        me._handler = null;
      }
    },
    _destroy: function () {
      var me = this;
      me.destroy();
      me.layerClickDis();
    },

    setFeature: function (feature) {
      var me = this;

      //   view.setCenter(ol.extent.getCenter(feature.getGeometry().getExtent()));
      var obj = AttrConfig.layers.find(function (obj) {
        return obj.id == feature.properties.gml.featureType;
      });
      if (obj == undefined) {
        alert("AttrConfig中该图层配置未找到");
        return;
      }

      me.mapArr.forEach((map2) => {
        for (var i = 0; i < map2.getLayers().array_.length; i++) {
          var layer = map2.getLayers().array_[i];
          var layer_id = layer.get("id");
          if (layer_id == "highlighted") {
            layer.getSource().clear();
          }
        }
      });

      var map = me.mapArr[me._dataList[me.index].index];
      var _highlightedLayer = null;
      for (var i = 0; i < map.getLayers().array_.length; i++) {
        var layer = map.getLayers().array_[i];
        var layer_id = layer.get("id");
        if (layer_id == "highlighted") {
          _highlightedLayer = layer;
        }
      }

      var geom = null;
      if (feature.geometry.type == "MultiPolygon" || feature.geometry.type == "MultiLineString"|| feature.geometry.type=="Polygon") {
        if (feature.geometry.type == "MultiPolygon") {
          geom = new ol.Feature({ geometry: new ol.geom.MultiPolygon(feature.geometry.coordinates) });
          geom.setStyle(me._highlightedStyle);
        } else if (feature.geometry.type == "MultiLineString") {
          geom = new ol.Feature({ geometry: new ol.geom.MultiLineString(feature.geometry.coordinates) });
          geom.setStyle(me._highlightedStyle);
        }else if ( feature.geometry.type== "Polygon") {
          geom = new ol.Feature({ geometry: new ol.geom.Polygon(feature.getGeometry().getCoordinates()) });
          geom.setStyle(me._highlightedStyle);
      }
        var r = map.getView().getResolutionForExtent(geom.getGeometry().getExtent(), map.getSize());
        map.getView().setResolution(r);
        map.getView().setCenter(ol.extent.getCenter(geom.getGeometry().getExtent()));
      } else if (feature.geometry.type == "Point") {
        geom = new ol.Feature({ geometry: new ol.geom.Point(feature.geometry.coordinates) });
        map.getView().setCenter(ol.extent.getCenter(geom.getGeometry().getExtent()));
      }
      _highlightedLayer.getSource().addFeature(geom);

      var innerHTML = "";
      var attributes = feature.properties.attributes;
      obj.field.forEach((f) => {
        if (f.name != "objectid") {
          innerHTML += "<div class='field'>" + f.alias + "：</div><div class='value'>" + attributes[f.name] + "</div>";
        }
      });
      me.title.innerHTML = "分屏" + (parseInt(me._dataList[me.index].index) + 1);
      me.content.innerHTML = innerHTML;
    },
  });
});

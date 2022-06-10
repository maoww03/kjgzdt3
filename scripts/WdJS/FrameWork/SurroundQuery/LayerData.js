define([
  "dojo/_base/declare",
  "dojo/parser",
  "dijit/_WidgetBase",
  "dijit/_TemplatedMixin",
  "dojo/text!./templates/LayerData.txt",
  "dojo/on",
  "dojo/dom-style",
  "dojo/dom-class",
  "dojo/dom-attr",
  "dojo/dom-construct",
], function (declare, parser, _WidgetBase, _TemplatedMixin, template, on, domStyle, domClass, domAttr, domConstruct) {
  return declare([_WidgetBase, _TemplatedMixin], {
    templateString: template,

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
        me.layerName.innerHTML = me.layer.caption;
        domAttr.set(me.layerName, "title", me.layer.caption);
        domAttr.set(me.checkInput, "layerId", me.layer.id);
        domAttr.set(me.checkInput, "layerUrl", me.layer.url);
        domAttr.set(me.checkInput, "displayField", me.layer.displayField);
        if (me.isCheak) {
          me.checkInput.checked = true;
        }
        me._bindEvents();
      });
    },
    _bindEvents: function () {
      var me = this;
      on(me.checkInput, "change", function (evt) {
        if (me.checkInput.checked) {
          me.checkLayerListPush(me.layer);
        } else {
          me.checkLayerListRemove(me.layer);
        }
      });
    },

    checkLayerListPush(layer) {},
    checkLayerListRemove(layer) {},
  });
});

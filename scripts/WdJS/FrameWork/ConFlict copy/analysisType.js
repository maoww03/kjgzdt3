define([
  "dojo/_base/declare",
  "dojo/parser",
  "dijit/_WidgetBase",
  "dijit/_TemplatedMixin",
  "dojo/text!./templates/analysisTypeTemplate.txt",
  "dojo/on",
  "dojo/dom-style",
  "dojo/dom-class",
  "dojo/dom-attr",
  "dojo/dom-construct"
], function (declare, parser, _WidgetBase, _TemplatedMixin, template, on, domStyle, domClass, domAttr, domConstruct) {
    return declare([_WidgetBase, _TemplatedMixin], {
        templateString: template,
        data: null,
        isSelect: false,

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
                me.domNode.innerHTML = me.data.groupname;
                me._bindEvents();
            });
        },
        _bindEvents: function () {
            var me = this;
            on(this.domNode, 'click', function () {
                if (this.isSelect) {
                    // 取消图层
                    var layerUrl=me.data.url;
                    for(var i=0;i<layerUrl.length;i++){
                        var data_id=layerUrl[i].layerid;
                        for (var j = 0; j < appConfig.map.getLayers().array_.length; j++) {
                            var layer = appConfig.map.getLayers().array_[j];
                            var layer_id = layer.get("id");
                            if (layer_id === data_id) {
                                layer.setVisible(false);
                            }
                        }
                    }
                    domStyle.set(this.domNode, 'border', "1px solid #e9edee");
                    domStyle.set(this.domNode, 'background-image', "none");
                } else {
                    // 加载图层
                    var layerUrl=me.data.url;
                    for(var i=0;i<layerUrl.length;i++){
                        var data_id=layerUrl[i].layerid;
                        for (var j = 0; j < appConfig.map.getLayers().array_.length; j++) {
                            var layer = appConfig.map.getLayers().array_[j];
                            var layer_id = layer.get("id");
                            if (layer_id === data_id) {
                                layer.setVisible(true);
                            }
                        }
                    }
                    domStyle.set(this.domNode, 'border', "1px solid #1c74bb");
                    domStyle.set(this.domNode, 'background-image', "url(image/doConflict/typeselected.png)");
                }
                this.isSelect = !this.isSelect;
            }.bind(this));
        }
    });
});

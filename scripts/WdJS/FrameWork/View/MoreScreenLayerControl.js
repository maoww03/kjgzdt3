define([
  "dojo/_base/declare",
  "dojo/parser",
  "dijit/_WidgetBase",
  "dijit/_TemplatedMixin",
  "dojo/text!./templates/MoreScreenLayerControl.txt",
  "dojo/on",
  "dojo/dom-style",
  "dojo/dom-class",
  "dojo/dom-attr",
  "dojo/dom-construct",
  "./MoreScreenLayer",
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
    MoreScreenLayer,
) {
    return declare([_WidgetBase, _TemplatedMixin], {
        templateString: template,
        _moreScreenLayerList: null,

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
                me._moreScreenLayerList = [];
                me.layersConfig.forEach((layer) => {
                    var _moreScreenLayer = new MoreScreenLayer({ layer: layer, mapArr: me.mapArr }).placeAt(me.content);
                    _moreScreenLayer.startup();
                    me._moreScreenLayerList.push(_moreScreenLayer);
                });

                me._bindEvents();
            });
        },
        _bindEvents: function () {
            var me = this;
            on(me.close, "click", function () {
                domStyle.set(dojo.byId("legend-siderbar"),"display","block");
                dojo.byId("moreScreenControl").innerHTML = "";
                domStyle.set(dojo.byId("moreScreenControl"), "display", "none");
                _checkQuery=true;
                _attrQueryTool.activate("point");
            });

            for (var i = 0; i < me.mapArr.length; i++) {
                on(me.mapArr[i].values_.target, 'mouseover', function (evt) {
                    var index = domAttr.get(this, "index");
                    for (var j = 0; j < me._moreScreenLayerList.length; j++) {
                        me._moreScreenLayerList[j].setHighLight(index);
                    }
                })
            }
        }
    });
});

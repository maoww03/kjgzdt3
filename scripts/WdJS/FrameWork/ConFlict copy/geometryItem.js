define([
  "dojo/_base/declare",
  "dojo/parser",
  "dijit/_WidgetBase",
  "dijit/_TemplatedMixin",
  "dojo/text!./templates/geometryItemTemplate.txt",
  "dojo/on",
  "dojo/dom-style",
  "dojo/dom-class",
  "dojo/dom-attr",
  "dojo/dom-construct"
], function (declare, parser, _WidgetBase, _TemplatedMixin, template, on, domStyle, domClass, domAttr, domConstruct) {
    return declare([_WidgetBase, _TemplatedMixin], {
        templateString: template,
        data: null,


        caption: null,

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

                me.xh.innerHTML = this.data.index;


                me.area.innerHTML = this.data.area.toFixed(2);

                me.length.innerHTML = this.data.length.toFixed(2);

            }.bind(this));
        }
        
    });
});

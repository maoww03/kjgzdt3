define([
  "dojo/_base/declare",
  "dojo/parser",
  "dijit/_WidgetBase",
  "dijit/_TemplatedMixin",
  "dojo/text!./templates/analysisResultItemTemplate.txt",
  "dojo/on",
  "dojo/dom-style",
  "dojo/dom-class",
  "dojo/dom-attr",
  "dojo/dom-construct"
], function (declare, parser, _WidgetBase, _TemplatedMixin, template, on, domStyle, domClass, domAttr, domConstruct) {
    return declare([_WidgetBase, _TemplatedMixin], {
        templateString: template,
        data: null,
        index: null,

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

                me.xh.innerHTML = this.index;
                if (this.data.type == "") {
                    me.lx.innerHTML = this.caption;
                } else {
                    me.lx.innerHTML = this.data.type;
                }
                
                me.mj.innerHTML = this.data.area.toFixed(2);
                me._bindEvents();
               
                
            }.bind(this));
        },
        _bindEvents: function () {
            var me = this;
            on(this.domNode, 'click', function () {
                this.onClick(this.data.geometry.clone());
            }.bind(this));
        },
        onClick: function (geometry) {

        }
        
    });
});

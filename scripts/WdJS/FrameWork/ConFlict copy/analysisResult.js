define([
  "dojo/_base/declare",
  "dojo/parser",
  "dijit/_WidgetBase",
  "dijit/_TemplatedMixin",
  "dojo/text!./templates/analysisResultTemplate.txt",
  "dojo/on",
  "dojo/dom-style",
  "dojo/dom-class",
  "dojo/dom-attr",
    "dojo/dom-construct",'./analysisResultItem'
], function (declare, parser, _WidgetBase, _TemplatedMixin, template, on, domStyle, domClass, domAttr, domConstruct, analysisResultItem) {
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
               
                for (var i = 0; i < me.data.data.length; i++) {
                    var _analysisResultItem = new analysisResultItem({ data: me.data.data[i], index: (i + 1), caption: me.caption }).placeAt(me.content);
                    _analysisResultItem.onClick = this.onClick.bind(this);
                    _analysisResultItem.startup();
                }
                me._bindEvents();
               
                
            }.bind(this));
        },
        _bindEvents: function () {
            var me = this;
            //on(this.domNode, 'click', function () {
              
            //}.bind(this));
        },
        onClick: function (geometry) {

        }
        
    });
});

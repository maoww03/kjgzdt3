define([
  "dojo/_base/declare",
  "dojo/parser",
  "dijit/_WidgetBase",
  "dijit/_TemplatedMixin",
  "dojo/text!./templates/numberTemplate.txt",
  "dojo/on",
  "dojo/dom-style",
  "dojo/dom-class",
  "dojo/dom-attr",
    "dojo/dom-construct", "./DataBaseConfig", "FrameWork/serviceUtil/databaseService"
], function (declare, parser, _WidgetBase, _TemplatedMixin, template, on, domStyle, domClass, domAttr, domConstruct, DataBaseConfig, databaseService) {
    return declare([_WidgetBase, _TemplatedMixin], {
        templateString: template,
        _started: false,

        data: null,


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
                me.filedName.innerHTML = (me.data.remarks || me.data.name) + "：";
                me._bindEvents();
            });
        },
        _bindEvents: function () {
            var me = this;
           
        },
        getValue: function () {
            return { field: this.data.name, value: this.fieldValue.value, type: this.data.type };
        },
        setDisable:function(){
            domAttr.set(this.fieldValue,'disabled','disabled')
        },
        removeDisable:function(){
            domAttr.remove(this.fieldValue,'disabled','disabled')
        }
    });
});

define([
  "dojo/_base/declare",
  "dojo/parser",
  "dijit/_WidgetBase",
  "dijit/_TemplatedMixin",
  "dojo/text!./templates/analysisSubGroupTemplate.txt",
  "dojo/on",
  "dojo/dom-style",
  "dojo/dom-class",
  "dojo/dom-attr",
    "dojo/dom-construct", './analysisSubGroup', './analysisType'
], function (declare, parser, _WidgetBase, _TemplatedMixin, template, on, domStyle, domClass, domAttr, domConstruct, analysisSubGroup, analysisType) {
    return declare([_WidgetBase, _TemplatedMixin], {
        templateString: template,
        data: null,

        analysisTypeList: null,

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
                if (me.data.groupname == undefined || me.data.groupname == null || me.data.groupname == "") {
                    domStyle.set(me.groupName, 'display', 'none');
                } else {
                    me.groupName.innerHTML = me.data.groupname;
                }
                me.analysisTypeList = [];
                for (var i = 0; i < me.data.subItem.length; i++) {
                    var _analysisType = new analysisType({ data: me.data.subItem[i] }).placeAt(me.domNode);
                    _analysisType.startup();
                    me.analysisTypeList.push(_analysisType);
                }
               
            });
        },
        getSelectData: function () {
            var data = [];
            for (var i = 0; i < this.analysisTypeList.length; i++) {
                if (this.analysisTypeList[i].isSelect) {
                    data.push(this.analysisTypeList[i].data);
                }
                
            }
            return data;
        }
        
    });
});

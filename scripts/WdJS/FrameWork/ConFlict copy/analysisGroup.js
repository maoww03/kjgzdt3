define([
  "dojo/_base/declare",
  "dojo/parser",
  "dijit/_WidgetBase",
  "dijit/_TemplatedMixin",
  "dojo/text!./templates/analysisGroupTemplate.txt",
  "dojo/on",
  "dojo/dom-style",
  "dojo/dom-class",
  "dojo/dom-attr",
    "dojo/dom-construct",'./analysisSubGroup'
], function (declare, parser, _WidgetBase, _TemplatedMixin, template, on, domStyle, domClass, domAttr, domConstruct, analysisSubGroup) {
    return declare([_WidgetBase, _TemplatedMixin], {
        templateString: template,
        data: null,

        subGroupList: null,

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
                me.groupName.innerHTML = me.data.groupname;
                me.subGroupList = [];
                for (var i = 0; i < me.data.subGroup.length; i++) {
                    var _analysisSubGroup = new analysisSubGroup({ data: me.data.subGroup[i] }).placeAt(me.items);
                    me.subGroupList.push(_analysisSubGroup);
                    _analysisSubGroup.startup();
                }
                //me._bindEvents();
            });
        },
        _bindEvents: function () {
            var me = this;
            on(this.domNode, 'click', function () {
                if (this.isSelect) {
                    domStyle.set(this.domNode, 'border', "1px solid #e9edee");
                } else {
                    domStyle.set(this.domNode, 'border', "1px solid #0051bc");
                }
                this.isSelect = !this.isSelect;
            }.bind(this));
        },
        getSelectData: function () {
            var data = [];
            for (var i = 0; i < this.subGroupList.length; i++) {
                var _data = this.subGroupList[i].getSelectData();
                if (_data.length > 0) {
                    data = data.concat(_data);
                }
            }
            return data;
        }
        
    });
});

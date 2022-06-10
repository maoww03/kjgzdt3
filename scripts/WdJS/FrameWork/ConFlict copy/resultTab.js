define([
  "dojo/_base/declare",
  "dojo/parser",
  "dijit/_WidgetBase",
  "dijit/_TemplatedMixin",
  "dojo/text!./templates/resultTabTemplate.txt",
  "dojo/on",
  "dojo/dom-style",
  "dojo/dom-class",
  "dojo/dom-attr",
  "dojo/dom-construct","FrameWork/serviceUtil/ConfigurationService"
], function (declare, parser, _WidgetBase, _TemplatedMixin, template, on, domStyle, domClass, domAttr, domConstruct,ConfigurationService) {
    return declare([_WidgetBase, _TemplatedMixin], {
        templateString: template,
        data: null,
        _getConflictConfig:null,


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
               
            // ConfigurationService

                debugger
                var layerid=me.data.id;
                for (var i = 0; i < appConfig.map.getLayers().array_.length; i++) {
                    var layer = appConfig.map.getLayers().array_[i];
                    var layer_id = layer.get("id");
                    if (layer_id === layerid) {
                        debugger
                        me.domNode.innerHTML = layer.values_.name;
                        domAttr.set(me.domNode, 'title', layer.values_.name);
                    }
                }  

                    
                me._bindEvents();
                if (this.isSelect) {
                    this.domNode.click();
                }
                
            }.bind(this));
        },
        _bindEvents: function () {
            var me = this;
            on(this.domNode, 'click', function () {
                this.onClick(me.data.id, me.domNode.innerHTML,me.data);
                domStyle.set(this.domNode, 'border-bottom', "2px solid #1c74bb");
                domStyle.set(this.domNode, 'color', "2px solid #1c74bb");
                //if (this.isSelect) {

                //    domStyle.set(this.domNode, 'border', "1px solid #e9edee");
                    
                //} else {
                //    domStyle.set(this.domNode, 'border', "1px solid #0051bc");
                //}
                //this.isSelect = !this.isSelect;
            }.bind(this));
        },
        onClick: function (id, caption, data) {

        }
        
    });
});

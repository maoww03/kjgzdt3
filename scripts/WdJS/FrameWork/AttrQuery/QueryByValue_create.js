define([
    "dojo/_base/declare",
    "dojo/parser",
    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin",
    "dojo/text!./templates/QueryByValue_create.txt",
    "dojo/on",
    "dojo/dom-style",
    "dojo/dom-class",
    "dojo/dom-attr",
    "dojo/dom-construct",
    "FrameWork/serviceUtil/workMapService",
    'FrameWork/Loading/Loading',
    "FrameWork/Config_Customquery_open/CustomqueryBar"
  ], function (declare, parser, _WidgetBase, _TemplatedMixin, template, on, domStyle, domClass, domAttr, domConstruct,workMapService,Loading,CustomqueryBar) {
      return declare([_WidgetBase, _TemplatedMixin], {
          templateString: template,

         
          constructor: function (args) { 
            this.layerArr=[]
          },
          postCreate: function () {
              this.inherited(arguments);
          },
          startup: function () {
              var me = this;
              if (me._started) {
                  return;
              }
              parser.parse(me.domNode).then(function () {
                  debugger
                var _Module=new CustomqueryBar().placeAt(this.content);
                _Module.startup();
             
                me._bindEvents();     
              }.bind(this));
          },
          _bindEvents:function(){
              var me=this;
            on(me.close, "click", function () {
                me.destroy();
            });
          }
       
      });
  });
  
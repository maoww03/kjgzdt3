define([
    "dojo/_base/declare",
    "dojo/parser",
    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin",
    "dojo/text!./templates/Evaluate_item.txt",
    "dojo/on",
    "dojo/dom-style",
    "dojo/dom-class", 
    "dojo/dom-attr",
    "dojo/_base/lang",
     "FrameWork/serviceUtil/ConfigurationService"
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
      lang,ConfigurationService
  ) {
      return declare([_WidgetBase, _TemplatedMixin], {
          templateString: template,

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
                debugger
                me.num.innerHTML=me._num || "--";
                me.username.innerHTML=me._data.username || "--";
                me.score.innerHTML=me._data.score || "--";
                me.content.innerHTML=me._data.content || "--";
                me._bindEvents();
              });
          },
          _bindEvents:function(){
          },
      });
  });
  
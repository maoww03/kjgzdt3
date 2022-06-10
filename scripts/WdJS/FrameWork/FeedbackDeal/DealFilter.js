define([
    "dojo/_base/declare",
    "dojo/parser",
    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin",
    "dojo/text!./templates/DealFilter.txt",
    "dojo/on",
    "dojo/dom-style",
    "dojo/dom-class", 
    "dojo/dom-attr",
    "dojo/_base/lang",
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
      lang,
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
                me._bindEvents();
              });
          },
          _bindEvents:function(){
            var me=this;
            on(me.search, "click", function () {
              var content=me.content.value;
              var reply=me.replycontent.value;
              if(content == ''){
                content=null;
              }
              if(reply == ''){
                reply=null;
              }
              me._filterValue(content,reply);
            });
          },
          _filterValue:function(content,reply){}

       
      });
  });
  
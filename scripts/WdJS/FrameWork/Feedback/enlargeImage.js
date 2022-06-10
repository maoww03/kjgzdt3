define([
    "dojo/_base/declare",
    "dojo/parser",
    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin",
    "dojo/text!./templates/enlargeImage.txt",
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
                domAttr.set(me.enlarge,"src",me._src);
                me._bindEvents();
              });
          },
          _bindEvents:function(){
            var me=this;
            on(me.enlarge, "click", function () {
               me.destroy();
            });
            // close
            on(me.close, "click", function () {
                me.destroy();
             });
          },
          deletepic:function(path){}
       
      });
  });
  
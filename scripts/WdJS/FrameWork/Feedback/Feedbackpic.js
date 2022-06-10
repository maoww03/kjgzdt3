define([
    "dojo/_base/declare",
    "dojo/parser",
    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin",
    "dojo/text!./templates/Feedbackpic.txt",
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
                debugger
                var h=me.domNode.offsetWidth;
                domStyle.set(me.domNode,"height",h+'px');
                var src=appConfig.url+ `/feedback/getFile?path=${me._path}`;
                domAttr.set(me.pic,"src",src);
                me._bindEvents();
              });
          },
          _bindEvents:function(){
            var me=this;
            on(me.delete, "click", function () {
               me.deletepic(me._path);
               me.destroy();
            });

          },
          deletepic:function(path){}
       
      });
  });
  
define([
    "dojo/_base/declare",
    "dojo/parser",
    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin",
    "dojo/text!./templates/ViewThemeLayer_items.txt",
    "dojo/on",
    "dojo/dom-style",
    "dojo/dom-class",
    "dojo/dom-attr"
  ], function (declare, parser, _WidgetBase, _TemplatedMixin, template, on, domStyle, domClass, domAttr) {
      return declare([_WidgetBase, _TemplatedMixin], {
          templateString: template,
          _subItem:[],
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
                var  aa=me._data;
                me.domNode.innerHTML=me._data.groupname;//永久基本农田
                
                me._bindevent()
              }.bind(this));
          },
          
          _bindevent:function(){
              var me=this;
            on(me.domNode, 'click', function (evt) {
                debugger
                me._userThemeSelect=[];
                // css
                domClass.remove(me.domNode,"selectLayer-cancle");
                domClass.add(me.domNode,"selectLayer-choice");
                me.setThemeSelect(me._data.url);
            })
          },
          setThemeSelect:function(urllist){}
       
          
      });
  });
  
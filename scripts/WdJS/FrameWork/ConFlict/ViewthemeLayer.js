define([
    "dojo/_base/declare",
    "dojo/parser",
    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin",
    "dojo/text!./templates/ViewthemeLayer.txt",
    "dojo/on",
    "dojo/dom-style",
    "dojo/dom-class",
    "dojo/dom-attr",
    './ConflictConfig'
  ], function (declare, parser, _WidgetBase, _TemplatedMixin, template, on, domStyle, domClass, domAttr,ConflictConfig) {
      return declare([_WidgetBase, _TemplatedMixin], {
          templateString: template,
          _satus:0,
          _userThemeSelect:[],
  
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
                  me._setThemBtn();
                me._bindEvents();
                
              }.bind(this));
          },
          _setThemBtn:function(){
            var me=this;
            var getTheme = ConflictConfig.layers;
            var innerHTML='';
            getTheme.forEach(element => {
                innerHTML += `<div class="selectLayer-cancle themBtn" themeId="${element.themeId}">${element.themeName}</div>`
            });
            me.thembox.innerHTML=innerHTML;

          },
        _bindEvents:function(){
            var me=this;
            dojo.query('.themBtn').forEach((dom)=>{
                on(dom, 'click', function (evt) {
                    debugger
                    me._userThemeSelect=[];
                    // css
                    dojo.query('.themBtn').forEach((dom2)=>{
                        domClass.add(dom2,"selectLayer-cancle");
                        domClass.remove(dom2,"selectLayer-choice");
                    })
                    domClass.remove(dom,"selectLayer-cancle");
                    domClass.add(dom,"selectLayer-choice");

                    var themeId=domAttr.get(dom,"themeId");
                    var obj = ConflictConfig.layers.find(function(el){
                        return el.themeId == themeId;
                    })

                    me._userThemeSelect=obj.url;
                    me.setThemeSelect(me._userThemeSelect);
                })
            })
        },
        setThemeSelect:function(data){}
          
      });
  });
  
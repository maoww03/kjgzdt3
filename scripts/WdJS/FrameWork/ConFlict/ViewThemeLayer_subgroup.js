define([
    "dojo/_base/declare",
    "dojo/parser",
    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin",
    "dojo/text!./templates/ViewThemeLayer_subgroup.txt",
    "dojo/on",
    "dojo/dom-style",
    "dojo/dom-class",
    "dojo/dom-attr","./ViewThemeLayer_items"
  ], function (declare, parser, _WidgetBase, _TemplatedMixin, template, on, domStyle, domClass, domAttr,ViewThemeLayer_items) {
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
                me.subgruoname.innerHTML=me._data.groupname;//土地现状
                me._setitems();
                me.bindevent();
              }.bind(this));
          },
          
          _setitems:function(){
            var me=this;
            if(me._subItem.length>0){
                for(var i=0;i<me._subItem.length;i++){
                    me._subItem[i].destroy();
                }
                me._subItem=[];
            }
            var subItems= me._data.subItem;
            // for(var j=0;j<subItems.length;j++){
            //     var _subItem = new ViewThemeLayer_items({ _data:  subItems[j] }).placeAt(me.thembox);
            //     _subItem.setThemeSelect=me.setThemeSelect.bind(me);
            //     me._subItem.push(_subItem);
            //     _subItem.startup();
            // }
            var innerHTML=``;
            for(var j=0;j<subItems.length;j++){
                var themeName = subItems[j].groupname
                innerHTML += `<div class="selectLayer-cancle themBtn" themeId="${themeName}">${themeName}</div>`
            }
            me.thembox.innerHTML=innerHTML;


          },
          bindevent:function(){
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
                    var obj = me._data.subItem.find(function(el){
                        return el.groupname == themeId;
                    })
                    if(obj!=undefined || obj != null){
                        me._userThemeSelect=obj.url;
                        me.setThemeSelect(me._userThemeSelect);
                    }
                    
                })
            })
          },
          setThemeSelect:function(data){}
          
      });
  });
  
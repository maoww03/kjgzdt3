define([
    "dojo/_base/declare",
    "dojo/parser",
    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin",
    "dojo/text!./templates/ViewThemeLayer_group.txt",
    "dojo/on",
    "dojo/dom-style",
    "dojo/dom-class",
    "dojo/dom-attr","./ViewThemeLayer_subgroup"
  ], function (declare, parser, _WidgetBase, _TemplatedMixin, template, on, domStyle, domClass, domAttr,ViewThemeLayer_subgroup) {
      return declare([_WidgetBase, _TemplatedMixin], {
          templateString: template,
          _subgroup:[],
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
                me.group1name.innerHTML=me._data.groupname; //现状类分析
                me._setsubgroup()
              }.bind(this));
          },
          
          _setsubgroup:function(){
            var me=this;
            if(me._subgroup.length>0){
                for(var i=0;i<me._subgroup.length;i++){
                    me._subgroup[i].destroy();
                }
                me._subgroup=[];
            }
            var subGroup= me._data.subGroup;
            for(var j=0;j<subGroup.length;j++){
                var _subgroup = new ViewThemeLayer_subgroup({ _data:  subGroup[j] }).placeAt(me.subgruop);
                _subgroup.setThemeSelect=me.setThemeSelect.bind(me);
                me._subgroup.push(_subgroup);
                _subgroup.startup();
            }
          },
          setThemeSelect:function(data){},
       
          
      });
  });
  
define([
    "dojo/_base/declare",
    "dojo/parser",
    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin",
    "dojo/text!./templates/Conflict_navi.txt",
    "dojo/on",
    "dojo/dom-style",
    "dojo/dom-class", 
    "dojo/dom-attr",
    "dojo/_base/lang"
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
      lang
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
                  if(me._type == "table1"){
                    var aa="/"+me._msg.groupname+"("+me._msg.name+')';
                    me.nav_name.innerHTML=aa;
                  }else if(me._type == "table2"){
                    var aa="/"+me._msg.groupname;
                    me.nav_name.innerHTML=aa;
                  } else if(me._type == "table3"){
                    var aa="/"+me._msg.groupname+'';
                    me.nav_name.innerHTML=aa;
                  }
              });
          },
          _bindEvents:function(){

          },
          setWidgetVisible:function(visible){
            if (visible) {
                domStyle.set(this.domNode, 'display', 'block');
                // dojo.byId('siderbar-container').style.display = "block";
            } else {
                domStyle.set(this.domNode, 'display', 'none');
                // dojo.byId('siderbar-container').style.display = "none";
            }
        }
      });
  });
  
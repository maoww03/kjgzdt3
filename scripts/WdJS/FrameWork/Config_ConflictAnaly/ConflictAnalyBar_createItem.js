define([
    "dojo/_base/declare",
    "dojo/parser",
    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin",
    "dojo/text!./templates/ConflictAnalyBar_createItem.txt",
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
                me.zd1.innerHTML=me._data1 ;
                var innerHTML=``;
                me._data2.forEach(el => {
                    if(el != null){
                        innerHTML+=`<input type="checkbox" name="sx1" value = ${el}>${el} &nbsp;`;
                    }
                });
                me.sx1.innerHTML=innerHTML;

                if(me._select){
                    var sx1obj=dojo.query("[name='sx1']",me.domNode);
                    sx1obj.forEach(dom=>{
                        dom.checked = true;
                    });
                }
                
                me._bindEvents();
              });
          },
          _bindEvents:function(){
            var me=this;

            on(me.all, "click", function () {
                var sx1obj=dojo.query("[name='sx1']",me.domNode);
                sx1obj.forEach(dom=>{
                    dom.checked = true;
                });
            });
            on(me.cancel, "click", function () {
                var sx1obj=dojo.query("[name='sx1']",me.domNode);
                sx1obj.forEach(dom=>{
                    dom.checked = false;
                });
            });
            on(me.rever, "click", function () {
                var sx1obj=dojo.query("[name='sx1']",me.domNode);
                sx1obj.forEach(dom=>{
                    if(dom.checked == true){
                        dom.checked = false;
                    }else {
                        dom.checked = true;
                    }
                });
            });

          },
          _getSelectFiled:function(){
            var me=this;
            var sx1objArr=[];
            var sx1obj=dojo.query("[name='sx1']",me.domNode);
            sx1obj.forEach(dom=>{
                if(dom.checked == true){
                    sx1objArr.push(``+dom.value);
                }
            });
            return sx1objArr
          },
        //   bar
        _table1fresh:function(delpage,delnum){}

      });
  });
  
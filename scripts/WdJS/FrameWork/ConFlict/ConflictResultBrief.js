define([
    "dojo/_base/declare",
    "dojo/parser",
    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin",
    "dojo/text!./templates/ConflictResultBrief.txt",
    "dojo/on",
    "dojo/dom-style",
    "dojo/dom-class",
    "dojo/dom-attr",
  ], function (declare, parser, _WidgetBase, _TemplatedMixin, template, on, domStyle, domClass, domAttr) {
      return declare([_WidgetBase, _TemplatedMixin], {
          templateString: template,
          _openlayerList:[],
          _selectedList:[],
  
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
                var htmlStr=``;
              
                me._data.forEach(element => {
                    var sumArea=element.sumAera;
                    if(element.pd == false){
                        sumArea='';
                    }
                    htmlStr+=` <tr>
                        <td>${element.type}</td>
                        <td>${element.value}</td>
                        <td>${sumArea||""}</td>
                    </tr>`
                });
                me.setLayers.innerHTML= htmlStr;
                
                me._bindEvents();

              }.bind(this));
          },
        _bindEvents:function(){
            var me=this;
            on(me.close, 'click', function (evt) {
                me.destroy();
            })
        },
          
      });
  });
  
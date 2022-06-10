define([
    "dojo/_base/declare",
    "dojo/parser",
    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin",
    "dojo/text!./templates/PrintLabel.txt",
    "dojo/on",
    "dojo/dom-style",
    "dojo/dom-class", 
    "dojo/dom-attr",
    "dojo/_base/lang","./Draw_Layer"
  ], function ( declare, parser,  _WidgetBase, _TemplatedMixin, template, on, domStyle, domClass, domAttr, lang,Draw_Layer) {
      return declare([_WidgetBase, _TemplatedMixin], {
          templateString: template,
          _tmp:false,

          _printMarkLayer:null,

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
            on(me.selectBj, "click", function (e) {
                if(me._tmp){
                    domStyle.set(me.show,"display","none");
                    me._tmp=false;
                    domClass.replace(me.selectBj,"printlable","printlableClk");
                }else{
                    domStyle.set(me.show,"display","block");
                    me._tmp=true;
                    domClass.replace(me.selectBj,"printlableClk","printlable");
                }
            });
            // printlable
            on(me.point, "click", function (e) {
                Draw_Layer.draw_type="Point";
                Draw_Layer.add_draw_Interaction("Point",false);
            });
            on(me.line, "click", function (e) {
                Draw_Layer.draw_type="LineString";
                Draw_Layer.add_draw_Interaction("LineString",false);
            });
            on(me.area, "click", function (e) {
                Draw_Layer.draw_type="Polygon";
                Draw_Layer.add_draw_Interaction("Polygon",false);
            });
            on(me.text, "click", function (e) {
                Draw_Layer.draw_type="Text";
                Draw_Layer.add_draw_Interaction("Point",false);
            });


          }
      
       
      });
  });
  
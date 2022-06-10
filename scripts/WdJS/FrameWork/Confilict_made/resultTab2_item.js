define([
    "dojo/_base/declare",
    "dojo/parser",
    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin",
    "dojo/text!./templates/resultTab2_item.txt",
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
               if(!me._data){
                 me.destroy();
                 return;
               }
                me.num.innerHTML=me._num ;
                me.type.innerHTML=me._data.type|| " ";
                me.type2.innerHTML=me._data.type2|| " ";
                me.area.innerHTML=me._data.area || " ";
                me._bindEvents();
              });
          },
          _bindEvents:function(){
            var me=this;
            // 
            on(me.domNode, "click", function () {
              debugger
              var aa=me._data.geometry.clone();
              me.onClick(aa);
            })
         
            

          },
          onClick:function(feature){}

        //   locationGeo: function (feature) {
        //     var me=this;
        //     this._resultLayer.getSource().clear();
        //     this._highlightedLayer.getSource().clear();

        //     //if (feature.geometry.type == "MultiPolygon" || feature.geometry.type == "MultiLineString") {

        //     // feature.setStyle(this._highlightedStyle);
        //     if(me._differenceType==3){
        //         feature.setStyle(me._difference3Style);
        //     }else if(me._differenceType==2){
        //         feature.setStyle(me._difference2Style);
        //     }else if(me._differenceType==1){
        //         feature.setStyle(me._difference1Style);
        //     }

        //    // var r = appConfig.map.getView().getResolutionForExtent(feature.getGeometry().getExtent(), appConfig.map.getSize());
        //     //appConfig.map.getView().setResolution(r);
        //     appConfig.map.getView().setCenter(ol.extent.getCenter(feature.getGeometry().getExtent()));
        //     // }
        //     this._highlightedLayer.getSource().addFeature(feature);

        // },

      });
  });
  
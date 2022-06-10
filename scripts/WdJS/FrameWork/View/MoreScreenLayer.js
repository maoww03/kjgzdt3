define([
  "dojo/_base/declare",
  "dojo/parser",
  "dijit/_WidgetBase",
  "dijit/_TemplatedMixin",
  "dojo/text!./templates/MoreScreenLayer.txt",
  "dojo/on",
  "dojo/dom-style",
  "dojo/dom-class",
  "dojo/dom-attr",
  "dojo/dom-construct",
  "FrameWork/MapUtil/MapFactory",
  "FrameWork/MapUtil/MapConfig",
  "./MoreScreen","./MoreScreenConfig"
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
  domConstruct,
  MapFactory,
  MapConfig,
  MoreScreen,MoreScreenConfig
) {
  return declare([_WidgetBase, _TemplatedMixin], {
    templateString: template,
    _tag: false,

    constructor: function (args) {},
    postCreate: function () {
      this.inherited(arguments);
    },

    startup: function () {
      var me = this;
      if (me._started) {
        return;
      }
      parser.parse(me.domNode).then(function () {
       

        me._tag = false;
        me.title.innerHTML = me.layer.name;
        domStyle.set(me.layerControl, "margin-left", width + "px");
        domStyle.set(me.layerControl, "margin-right", width + "px");
        

        dojo.query(".layerLi", me.domNode).forEach((layerLi, index) => {
          if (me.mapArr[index] == undefined) {
            domAttr.set(layerLi, "states", "disable");
            domStyle.set(layerLi, "display", "none");
          }
        });
        var width = 0;
        dojo.query(".layerLi", me.domNode).forEach((layerLi) => {
          if (domAttr.get(layerLi, "states") != "disable") {
            width += 32;
          }
        });
        domStyle.set(me.layerControl, "margin-left", (376 - width) / 2 + "px");
        /***slider***/ 
        me._setSlider();
        me._bindEvents();
        me._ydfw();

      });
    },
    _ydfw:function(){
      
      var me =this;
      var obj =MoreScreenConfig.layers.find(function(obj){
        return obj.id == me.layer.id;
      })
      if(obj != undefined && obj!= null && obj.type=='showAll'){
        me.mapArr.forEach((map) => {
          me.ctllayers(true,map);
        });
        
        dojo.query(".layerLi", me.domNode).forEach((dom, index) => {
          domStyle.set(dom, "background-color", "#357efe");
          domAttr.set(dom, "states", "on");
        })
      }
    
    },

    ctllayers:function(pd,map){
      var me=this;
      debugger
      if(pd){
        if(me.layer.layerids != undefined  && me.layer.layerids != null && me.layer.layerids.length > 0 ){
          var subobj =  MapConfig.layers.find(function(obj){
            return obj.name == me.layer.id
          })
          subobj=subobj.subLayers;
          for (var k = 0; k < me.layer.layerids.length; k++) {
            var layerindex = me.layer.layerids[k];
            var sublayer=subobj.find(function(obj){
              return obj.id == layerindex;
            })
            sublayer.visible=true;
            MapFactory._createLayer(sublayer, MapConfig, map);

          }
        }else{
          MapFactory._createLayer(me.layer, MapConfig, map);

        }
      }else {
        if(me.layer.layerids != undefined  && me.layer.layerids != null && me.layer.layerids.length > 0 ){
          for (var k = 0; k < me.layer.layerids.length; k++) {
            var layerindex = me.layer.layerids[k];
            for (var i = 0; i < map.getLayers().array_.length; i++) {
              var layer = map.getLayers().array_[i];
              var layer_id = layer.get("id");
              if (layer_id ==layerindex) {
                map.removeLayer(layer);
              }
            }

          }
        }else{
          for (var i = 0; i < map.getLayers().array_.length; i++) {
            var layer = map.getLayers().array_[i];
            var layer_id = layer.get("id");
            if (layer_id == me.layer.id) {
              map.removeLayer(layer);
            }
          }
        }
      }
    },
    _bindEvents: function () {
      var me = this;
      on(me.close, "click", function (evt) {
        me.mapArr.forEach((map) => {
          me.ctllayers(false,map);
          // for (var i = 0; i < map.getLayers().array_.length; i++) {
          //   var layer = map.getLayers().array_[i];
          //   var layer_id = layer.get("id");
          //   if (layer_id == me.layer.id) {
          //     map.removeLayer(layer);
          //   }
          // }
        });
        me.destroy();
      });
      dojo.query(".layerLi", me.domNode).forEach((dom, index) => {
        
        on(dom, "click", function (evt) {
          
          var map = me.mapArr[index];
          var states = domAttr.get(dom, "states");
          if (states == "off") {
            dojo.query(".layerLi", me.domNode).forEach((layerLi, index2) => {
              var map = me.mapArr[index2];
              var states2 = domAttr.get(layerLi, "states");
              if (states2 == "on") {
                domStyle.set(layerLi, "background-color", "#c6c8c3");
                domAttr.set(layerLi, "states", "off");
                me.ctllayers(false,map);
                // for (var i = 0; i < map.getLayers().array_.length; i++) {
                //   var layer = map.getLayers().array_[i];
                //   var layer_id = layer.get("id");
                //   if (layer_id == me.layer.id) {
                //     map.removeLayer(layer);
                //   }
                // }
              }
            });

            domStyle.set(dom, "background-color", "#357efe");
            domAttr.set(dom, "states", "on");
            me.ctllayers(true,map);
          } else if (states == "on") {
            domStyle.set(dom, "background-color", "#c6c8c3");
            domAttr.set(dom, "states", "off");
            me.ctllayers(false,map);
            // for (var i = 0; i < map.getLayers().array_.length; i++) {
            //   var layer = map.getLayers().array_[i];
            //   var layer_id = layer.get("id");
            //   if (layer_id == me.layer.id) {
            //     map.removeLayer(layer);
            //   }
            // }
          }
        });
      });

      // on(me.opacityDiv, "click", function (e) {
      //   domStyle.set(me.roundPiece, "left", parseFloat(e.offsetX) - 7.5 + "px");
      //   me.mapArr.forEach((map) => {
      //     for (var i = 0; i < map.getLayers().array_.length; i++) {
      //       var layer = map.getLayers().array_[i];
      //       var layer_id = layer.get("id");
      //       if (layer_id == me.layer.id) {
      //         layer.setOpacity((parseFloat(e.offsetX) - 7.5) / 376);
      //       }
      //     }
      //   });
      // });
    },
    /***slider***/ 
    _setSlider:function(){
      var me=this;
      var aObj = $("#"+me.domNode.id).children(".slider");
      var sliderId = me.domNode.id + "_slider";
      var sliderStr = '<div id="' + sliderId + '" class="toc-slider" style="width:100%;margin-left:0;left:0"></div>';
      aObj.append(sliderStr);
      var slider = $("#" + sliderId);
      slider.noUiSlider({
          start: 1,
          connect: "lower",
          range: 
          {
          min: 0,
          max: 1
          }
      });
      slider.on("slide", function (arr, val) {
        val = parseFloat(val);
        // console.log(val);
        me.mapArr.forEach((map) => {
          for (var i = 0; i < map.getLayers().array_.length; i++) {
            var layer = map.getLayers().array_[i];
            var layer_id = layer.get("id");
            if (layer_id == me.layer.id) {
              layer.setOpacity(val);
            }
          }
        });
      });
      },
      setHighLight: function (index) {
          dojo.query(".layerLi", this.domNode).forEach((layerLi, _index) => {
              if (_index == index - 1 && domAttr.get(layerLi, "states") == "on") {
                  domStyle.set(layerLi, "background-color", "red");
              } else {
                  if (domAttr.get(layerLi, "states") == "on") {
                      domStyle.set(layerLi, "background-color", "#357efe");
                  } else {
                      domStyle.set(layerLi, "background-color", "#c6c8c3");
                  }
              }
          });
      }
  });
});

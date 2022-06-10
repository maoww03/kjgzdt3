define([
  "dojo/_base/declare",
  "dojo/text!./templates/BaseMapChange.txt",
  "dijit/_TemplatedMixin",
  "dijit/_WidgetBase",
  "dojo/on",
  "dojo/dom-style",
  "dojo/parser",
  "dojo/dom-class",
  "dojo/dom-attr",
  "dojo/_base/array",
  "FrameWork/MapUtil/MapConfig",
  "FrameWork/MapUtil/MapConfig2",
  "FrameWork/View/MoreScreen",
], function (declare, template, TemplatedMixin, WidgetBase, on, domStyle, parser, domClass, domAttr, array, MapConfig,MapConfig2, MoreScreen) {
  return declare([WidgetBase, TemplatedMixin], {
    templateString: template,
    layer: null,
    _mapLayers: null,
    index: null,
    domName: null,
    map: null,
    _layers: null,

    constructor: function (args) {},
    postCreate: function () {
      this.inherited(arguments);
      this.onCreate();
    },
    onCreate: function () {
      var me = this;
    },
      startup: function () {
          var me = this;
          if (this._started) {
              return;
          }
          parser.parse(this.domNode).then(
              function () {
                 
                  /*************20210407************ */
                  domAttr.set(this.domNode, "caption", this.layer.caption);
                  /*************20210407end************ */
                  domAttr.set(this.logo, "src", this.layer.logo);
                  this.caption.innerHTML = this.layer.caption;
                  this._mapLayers = this.map.getLayers().array_;
                  domAttr.set(this.domNode, "data-index", this.index);
                  if (this.layer.visible) {
                      domStyle.set(this.logo, "border-color", "#5ba7fb");
                      domAttr.set(this.domNode, "selected", "selected");
                      domAttr.set(dojo.byId(this.domName + "-logo"), "src", this.layer.logo);
                      dojo.byId(this.domName + "-caption").innerHTML = this.layer.caption;
                  }
                  this._layers = [];
                  for (var i = 0; i < this._mapLayers.length; i++) {
                      var _layer = this._mapLayers[i];
                      var _values = _layer.values_;
                      for (var j = 0; j < this.layer.subLayers.length; j++) {
                          if (_values.baseMap && _values.id == this.layer.subLayers[j].id) {
                              this._layers.push(_layer);
                          }
                      }
                  }
                  
                  if (this.index != 0) {
                      domStyle.set(this.domNode, "margin-left", "10px");
                  }
                  this.bindEvent();
              }.bind(this)
          );

          this._started = true;
      },
    bindEvent: function () {
      on(
        this.domNode,
        "click",
        function () {
          
          dojo.query(".logo_border").forEach(function (dom) {
            domStyle.set(dom, "border-color", "white");
            domAttr.set(dom, "selected", "un");
          });
          dojo.query(".BaseMapChange").forEach(function (dom) {
            domAttr.set(dom, "selected", "un");
          });
          domStyle.set(this.logo, "border-color", "#5ba7fb");
          domAttr.set(this.domNode, "selected", "selected");
          domAttr.set(dojo.byId(this.domName + "-logo"), "src", this.layer.logo);
          dojo.byId(this.domName + "-caption").innerHTML = this.layer.caption;

          for (var i = 0; i < this._mapLayers.length; i++) {
            debugger
            var _layer = this._mapLayers[i];
            var _values = _layer.values_;
            if (_values.baseMap) {
              // MapConfig2
              _layer.setVisible(_values.groupCaption === this.layer.caption);
              MapConfig2.layers.forEach(el=>{
                if(el.caption ==this.layer.caption){
                    el.visible=true
                }else{   
                  el.visible=false;  
                }
               });

            }
          }
          
        }.bind(this)
        );

        //for (var i = 0; i < this._layers.length; i++) {
        //    var _layer = this._layers[i];
           
        //    //_layer.render();
        //}
    }
  });
});

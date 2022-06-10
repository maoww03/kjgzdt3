define([
  "dojo/_base/declare",
  "dojo/DeferredList",
  "./Attribute",
  "FrameWork/MapUtil/MapToolDraw",
  "FrameWork/View/MoreScreen",
  "dojo/dom-style",
], function (declare, DeferredList, Attribute, MapToolDraw, MoreScreen,domStyle) {
  return declare("MapTool.DrawTool", null, {
    _map: null,
    _callback: null,
    _drawType: null,
    _feature: null,
    _buffGeom: null,

    /********后面添加的属性***********/
    _clickKey: null,
    // _clickKeyList: [],
    _highlightedLayer: null,
    //高亮图层颜色
    _highlightedStyle: new ol.style.Style({
      // 默认点样式
      text: new ol.style.Text({
        font: "13px Microsoft YaHei",
        offsetY: -15,
        fill: new ol.style.Fill({
          color: "#000"
        }),
        stroke: new ol.style.Stroke({
          color: "#fff",
          width: 2
        })
      }),
      image: new ol.style.Circle({
        radius: 6,
        fill: new ol.style.Fill({
          color: "red"
        })
      }),
      // 默认多面形中多边形样式 style_setting为false
      fill: new ol.style.Fill({
        color: "rgba(255,0,0,0.5)"
      }),

      stroke: new ol.style.Stroke({
          color: "BLACK",
          width: 4,
          lineDash: [1, 2, 3, 4, 5, 6]
      })
    }),
    _attribute: null,
    _mapTool: null,
    _loading: null,
    _id:null,
    //构造函数
    constructor: function (map, buffGeom, callback,loading) {
      this._map = map;
      this._buffGeom = buffGeom;
        this._callback = callback;
        this._loading = loading; 
    },
    activate: function (drawType) {
      this._drawType = drawType;
      this._clearKey();
      if (drawType === "point") {
        this._clickKey = this._map.on("click", this._mapclick.bind(this));
      }
    },
    _clearKey: function () {
      var me = this;
      if (me._clickKey !== null) {
        ol.Observable.unByKey(me._clickKey);
        me._clickKey = null;
      }
      if (me._mapTool != null) {
        me._mapTool.deactivate();
        me._mapTool = null;
      }
    },
    deactivate: function () {
      this._clearKey();
      this._drawType = null;
      if (this._attribute != null) {
        this._attribute.destroy();
      }
      if (this._highlightedLayer != null) {
        this._highlightedLayer.getSource().clear();
      }
      MoreScreen.mapArr.forEach((map, index) => {
        for (var i = 0; i < map.getLayers().array_.length; i++) {
          var layer = map.getLayers().array_[i];
          var layer_id = layer.get("id");
          if (layer_id == "highlighted") {
            layer.getSource().clear();
          }
        }
      });
      return false;
    },
    _deactivate: function () {
      this._clearKey();
      if (this._callback) {
        this._drawType = null;
        this._callback(this._feature);
      }
      return false;
    },
    _mapclick: function (evt) {
      var _this = this;
      if (_this._drawType === "point") {
        var _feature = new ol.Feature({
          geometry: new ol.geom.Point(evt.coordinate),
          type: "point",
        });
        var layers = _this._map.getLayers().array_;
        var _deferredArray = new Array();
        for (var i = layers.length - 1; i >= 0; i--) {
          var layer = layers[i].values_;
          if ((layer.layerType === "VectorTileSuperMapRest" || layer.layerType === "SuperMapWMTS") && layer.visible && layer.thematicMap) {
            ///用deferredList
              if (layer.maxResolution != Infinity) {
                  var resoultuion = appConfig.map.getView().getResolution();
                  if (layer.maxResolution > resoultuion && layer.minResolution < resoultuion) {
                      var d1 = layer.SpatialQueryFeatures(_feature);
                      _deferredArray.push(d1);
                  }

              } else {

                  var d1 = layer.SpatialQueryFeatures(_feature);
                  _deferredArray.push(d1);
              }
           
          }
        }

        _deferredList = new DeferredList(_deferredArray);
        _deferredList.then(function (e) {
          var data = [];
          e.forEach((li) => {
            if (li[0]) {
              li[1].features.forEach((feature) => {
                data.push(feature);
              });
            }
          });

          var ishas = false;
          for (var i = 0; i < _this._map.getLayers().array_.length; i++) {
            var layer = _this._map.getLayers().array_[i];
            var layer_id = layer.get("id");
            if (layer_id == "highlighted") {
              _this._highlightedLayer = layer;
              ishas = true;
            }
          }
          if (!ishas) {
            _this._highlightedLayer = new ol.layer.Vector({
              id: "highlighted",
              layerTitle: "属性查询",
              graphicMap: true,
              source: new ol.source.Vector({
                features: [],
              }),
              zIndex: _this._map.getLayers().getLength() + 1,
            });
            _this._map.addLayer(_this._highlightedLayer);
          }
          _this._highlightedLayer.getSource().clear();

          if (_this._attribute != null) {
            _this._attribute.destroy();
          }
          

          var aa=data;
          if(aa.length!=0){
            domStyle.set(dojo.byId("addview"),"display","none");
            domStyle.set(dojo.byId("changeview"),"display","block");

            _this._attribute = new Attribute({
              _data: data,
              _highlightedLayer: _this._highlightedLayer,
              _highlightedStyle: _this._highlightedStyle,
            }).placeAt(dojo.byId(changeview));
            _this._attribute.startup();
          }
        
            if (_this._loading) {
                _this._loading.hide();
            }
        });
        _this._deactivate();
        return false;
      }
    },
  });
});

define([
  "dojo/_base/declare",
  "dojo/DeferredList",
  "dojo/on",
  "./Attribute",
  "./Attribute_MoreScreen",
  "FrameWork/MapUtil/MapToolDraw",
  "FrameWork/View/MoreScreen","FrameWork/Setalert/Setalert"
], function (declare, DeferredList,on, Attribute, Attribute_MoreScreen, MapToolDraw, MoreScreen,Setalert) {
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
        buffdata:null,

        //构造函数
        constructor: function (map, buffGeom, callback, loading) {
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
                this._CancleDraw();
            } else if (drawType === "rectangle") {
                this._mapTool = new MapToolDraw(appConfig.map, this.queryData.bind(this));
                this._mapTool.activate("rectangle");
                this._CancleDraw();
            } else if (drawType === "buff") {
                showLoading(false);
                this.queryData(this._buffGeom,"buff");

            } else if (drawType === "polygon") {
                this._mapTool = new MapToolDraw(appConfig.map, this.queryData.bind(this));
                this._mapTool.activate("polygon");
                this._CancleDraw();
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
            // if (me._clickKeyList.length !== 0) {
            //   me._clickKeyList.forEach((clickKey) => {
            //     ol.Observable.unByKey(clickKey);
            //   });
            //   me._clickKeyList = [];
            // }
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
            debugger
            var _this = this;
            evt.stopPropagation();
          
            if (_this._drawType === "point") {
                if(_checkQuery==false){
                    _this._deactivate();
                    return;
                }
                var _feature = new ol.Feature({
                    geometry: new ol.geom.Point(evt.coordinate),
                    type: "point"
                });
                var layers = _this._map.getLayers().array_;

                var _deferredArray = new Array();
                for (var i = layers.length - 1; i >= 0; i--) {
                    var layer = layers[i].values_;
                    if (layer.visible && layer.thematicMap) {
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

                
                showLoading(true);
                _deferredList = new DeferredList(_deferredArray);
                _deferredList.then(function (e) {
                    showLoading(false);
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
                        _this._attribute._destroy();
                    }
                    _this._attribute = new Attribute({
                        _data: data,
                        _highlightedLayer: _this._highlightedLayer,
                        _highlightedStyle: _this._highlightedStyle,
                    }).placeAt(dojo.byId("mapDiv"));
                    _this._attribute.startup();

                    if (_this._loading) {
                        _this._loading.hide();
                    }
                });
               
                return false;
            }
        },
        // sortRule: function (a, b) {
        //   return a.index - b.index;
        // },
        queryData: function (_feature,type) {
          
            var _this = this;
            var layers = this._map.getLayers().array_;
            var _deferredArray = new Array();
            for (var i = layers.length - 1; i >= 0; i--) {
                var layer = layers[i].values_;
                if ( layer.visible && layer.thematicMap) {
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
                    //var d1 = layer.SpatialQueryFeatures(_feature);
                    //_deferredArray.push(d1);
                }
            }

            
            showLoading(true);
            _deferredList = new DeferredList(_deferredArray);
            _deferredList.then(function (e) {
                showLoading(false);
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
                    _this._attribute._destroy();
                }
                if(type == 'buff'){
                    if(data.length == 0){
                        Setalert.rompt("请重新绘制图形,没有查询到信息","alert-danger");
                        return 0000;
                    }
                }

                _this._attribute = new Attribute({
                    _data: data,
                    _highlightedLayer: _this._highlightedLayer,
                    _highlightedStyle: _this._highlightedStyle
                }).placeAt(dojo.byId("mapDiv"));
                _this._attribute.startup();
                if (_this._loading) {
                    _this._loading.hide();
                }
            });
            _this._deactivate();
            return false;
        },
        // 点 拉框 多边形
        _CancleDraw:function(){
            // catalog-目录
            var me=this;
            // on(dojo.byId("catalog"),"click",function(){
            //   me._deactivate();
            // })
            // class=drawCancle-图层搜索-切换
            on(dojo.query(".drawCancle"),"click",function(){
                me._deactivate();
            })

            // top?-标题
            // on(dojo.byId("top"),"click",function(){
            //     me._deactivate();
            // })
            // baseMapChangeContent?-底图切换
            on(dojo.byId("baseMapChangeContent"),"click",function(){
              me._deactivate();
            })
            
          }
    });
});

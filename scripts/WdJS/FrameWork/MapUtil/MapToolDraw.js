define(["dojo/_base/declare","dojo/on"],
    function (declare,on) {
        return declare("MapTool.DrawTool", null, {
            _map: null,
            _callback: null,
            _drawType: null,
            _vetorLayer: null,
            _strokeLayer: null,
            _selectInteraction: null,
            _point: null,
            _pointsArray: [],
            _pointsTransformArray: [],
            _feature: null,
            _line: null,
            _polygon: null,
            _circleDistance: null,
            _pointStyle: new ol.style.Style({       // 默认点样式
                text: new ol.style.Text({
                    font: '13px Microsoft YaHei',
                    offsetY: -15,
                    fill: new ol.style.Fill({
                       color: '#000'
                    }),
                    stroke: new ol.style.Stroke({
                       color: '#fff',
                       width: 2
                    })
                }),
                image: new ol.style.Circle({
                    radius: 6,
                    fill: new ol.style.Fill({
                        color: 'red'
                    })
                })
            }),
            _polygonStyle: new ol.style.Style({     // 默认多面形中多边形样式 style_setting为false
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,0.5)'
                }),
                stroke: new ol.style.Stroke({
                    color: 'red',
                    width: 2
                })
            }),
           
            _lineStyle: new ol.style.Style({        // 默认多线段中线段样式 style_setting为false
                stroke: new ol.style.Stroke({
                    color: 'red',
                    width: 2
                })
            }),
            distance_sum: 0,


            _singleclickKey: null,
            _dblclickKey: null,
            _pointermoveKey: null,
            _pointerdownKey: null,
            _pointerupKey: null,
            _rectangleStyle: new ol.style.Style({       // 默认矩形样式 
                fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,0.5)'
                }),
                stroke: new ol.style.Stroke({
                    color: 'red',
                    width: 2
                })
            }),
            //构造函数
            constructor: function (map, callback) {
                this._map = map;
                this._callback = callback;
            },
            activate: function (drawType) {
                this._drawType = drawType;
                this._clearKey();
                if (drawType === "point" || drawType === "polyline" || drawType === "polygon") {
                    this._singleclickKey = this._map.on('singleclick', this._singleclick.bind(this));
                    this._CancleDraw();
                }
                if (drawType === "polyline" || drawType === "polygon" || drawType === "rectangle") {
                    this._dblclickKey = this._map.on('dblclick', this._dblclick.bind(this));
                    this._pointermoveKey = this._map.on('pointermove', this._pointermove.bind(this));
                    this._CancleDraw();
                }
                if (this._drawType === "rectangle") {
                    this._pointerdownKey = this._map.on('pointerdown', this._pointerdown.bind(this));
                    this._CancleDraw();
                }
                if (this._drawType === "rectangle") {
                    this._pointerupKey = this._map.on('pointerup', this._pointerup.bind(this));
                    this._CancleDraw();
                }
            },
            _clearKey: function () {
                if (this._singleclickKey !== null) {
                    ol.Observable.unByKey(this._singleclickKey);
                    this._singleclickKey = null;
                }
                if (this._dblclickKey !== null) {
                    ol.Observable.unByKey(this._dblclickKey);
                    this._dblclickKey = null;
                }
                if (this._pointermoveKey !== null) {
                    ol.Observable.unByKey(this._pointermoveKey);
                    this._pointermoveKey = null;
                }
                if (this._pointerdownKey !== null) {
                    ol.Observable.unByKey(this._pointerdownKey);
                    this._pointerdownKey = null;
                }
                if (this._pointerupKey !== null) {
                    ol.Observable.unByKey(this._pointerupKey);
                    this._pointerupKey = null;
                }
            },
            deactivate: function () {
                this._point = null;
                this._pointsArray = [];
                this.distance_sum = 0;
                if (this._strokeLayer !== null) {
                    this._map.removeLayer(this._strokeLayer);
                    this._strokeLayer = null;
                }

                if (this._vetorLayer !== null) {
                    this._map.removeLayer(this._vetorLayer);
                    this._vetorLayer = null;
                }

                //var removeLayers = [];
                //var layers = appConfig.map.getLayers().array_;
                //for(var i=0;i<layers.length;i++){
                //    var layer = layers[i];
                //    var layer_id = layer.get("id");
                //    if(layer_id == "MapTool"){
                //        removeLayers.push(layer);
                //    }
                //}
                //for(var i=0;i<removeLayers.length;i++){
                //    appConfig.map.removeLayer(removeLayers[i]);
                //}

                this._clearKey();

                this._drawType = null;

                this._feature = null;
                this._polygon = null;
                this._circleDistance = null;
                this._line = null;

                return false;
            },
            _deactivate: function () { 
                this._point = null;
                this._pointsArray = [];
                if (this._strokeLayer !== null) {
                    this._map.removeLayer(this._strokeLayer);
                    this._strokeLayer = null;
                }          
               
                this._clearKey();

                if (this._callback) {
                    this._drawType = null;
                    this._callback(this._feature);
                    this._feature = null;
                    this._polygon = null;
                    this._circleDistance = null;
                    this._line = null;
                }
                return false;
            },
            _singleclick: function (evt) {
                var _this = this;
                if (_this._drawType === "point") {
                    _this._feature = new ol.Feature({
                        geometry: new ol.geom.Point(evt.coordinate),
                        type: "Point"
                    });
                    //_this._pointStyle.getText().setText("X："+evt.coordinate[0].toFixed(2)+" , Y："+evt.coordinate[1].toFixed(2));
                    _this._feature.setStyle(_this._pointStyle);
                    _this._vetorLayer = new ol.layer.Vector({
                        id: "MapTool-point",
                        layerTitle: "绘制图形",
                        graphicMap: true,
                        source: new ol.source.Vector({
                            features: [_this._feature]
                        }),
                        zIndex: _this._map.getLayers().getLength() + 1
                    });
                    _this._map.addLayer(_this._vetorLayer);
                    _this._deactivate();
                    return false;
                }
                else if (_this._drawType === "polyline") {
                    if (_this._point === null) {
                        _this._point = evt.coordinate;
                        var feature = new ol.Feature({
                            geometry: new ol.geom.Point(_this._point)
                        });
                       
                        feature.setStyle(_this._pointStyle);
                        _this._vetorLayer = new ol.layer.Vector({
                            id: "MapTool-polyline",
                            layerTitle: "绘制图形",
                            graphicMap: true,
                            source: new ol.source.Vector({
                                features: [feature]
                            }),
                            style: _this._lineStyle,
                            zIndex: _this._map.getLayers().getLength() + 1
                        });
                        _this._map.addLayer(_this._vetorLayer);
                    }
                    else {
                        var pFeature = new ol.Feature({
                            geometry: new ol.geom.Point(evt.coordinate)
                        });
                       
                        pFeature.setStyle(new ol.style.Style({       // 默认点样式
                           
                            image: new ol.style.Circle({
                                radius: 6,
                                fill: new ol.style.Fill({
                                    color: 'red'
                                })
                            })
                        }));
                        _this._vetorLayer.getSource().addFeature(pFeature);

                        if (_this._line === null) {
                            _this._line = new ol.geom.LineString([_this._point, evt.coordinate]);
                        } else {
                            _this._line.appendCoordinate(evt.coordinate);
                        }
                        var lFeature = new ol.Feature({
                            geometry: new ol.geom.LineString([_this._point, evt.coordinate])
                        });
                        _this._vetorLayer.getSource().addFeature(lFeature);
                        _this._point = evt.coordinate;
                    }
                    return false;
                }
                else if (_this._drawType === "polygon") {
                    if (_this._point === null) {
                        _this._pointsArray = [];
                        _this._pointsTransformArray = [];
                        _this._point = evt.coordinate;
                        _this._pointsArray.push(_this._point);

                        _this._vetorLayer = new ol.layer.Vector({
                            id: "MapTool-polygon",
                            layerTitle: "绘制图形",
                            graphicMap: true,
                            source: new ol.source.Vector({
                                features: []
                            }),
                            zIndex: _this._map.getLayers().getLength() + 1
                        });
                        _this._map.addLayer(_this._vetorLayer);
                    }
                    else {
                        _this._pointsArray.push(evt.coordinate);
                        var coordinatesPolygon = new Array();
                        coordinatesPolygon[0] = _this._pointsArray;
                        var pFeature = new ol.Feature({
                            geometry: new ol.geom.Polygon(coordinatesPolygon)
                        });
                        pFeature.setStyle(_this._polygonStyle);
                        _this._vetorLayer.getSource().clear();

                        _this._point = evt.coordinate;
                    }
                    return false;
                }                
            },
            _dblclick: function (evt) {
                // 恢复点查
                Resumequery();

                var _this = this;
                if (this._drawType == "polyline") {
                    var pFeature = new ol.Feature({
                        geometry: new ol.geom.Point(evt.coordinate)
                    });
                   
                    pFeature.setStyle(new ol.style.Style({       // 默认点样式
                        
                        image: new ol.style.Circle({
                            radius: 6,
                            fill: new ol.style.Fill({
                                color: 'red'
                            })
                        })
                    }));
                    _this._vetorLayer.getSource().addFeature(pFeature);

                    if (_this._line === null) {
                        _this._line = new ol.geom.LineString([_this._point, evt.coordinate]);
                    } else {
                        _this._line.appendCoordinate(evt.coordinate);
                    }

                    _this._line.appendCoordinate(evt.coordinate);
                    
                    var lFeature = new ol.Feature({
                        geometry: new ol.geom.LineString([_this._point, evt.coordinate])
                    });
                    _this._feature = new ol.Feature({
                        geometry: _this._line,
                        type: "polyline"
                    });
                    _this._vetorLayer.getSource().addFeature(lFeature);
                    _this._deactivate();
                    return false;
                }
                else if (this._drawType === "polygon") {
                    _this._pointsArray.push(evt.coordinate);
                    //var data = _this._getArea(_this._pointsArray);
                    //var area = data.toFixed(2) + "平方米";
                    //if(data > 1000000){
                    //    area = (data/1000000).toFixed(3) + "平方公里";
                    //}
                    
                    var coordinatesPolygon = new Array();
                    coordinatesPolygon[0] = this._pointsArray;
                    _this._feature = new ol.Feature({
                        geometry: new ol.geom.Polygon(coordinatesPolygon),
                        type:"polygon"
                    });
                    _this._feature.setStyle(new ol.style.Style({     // 默认多面形中多边形样式 style_setting为false
                        fill: new ol.style.Fill({
                            color: 'rgba(0,0,0,0.5)'
                        }),
                        stroke: new ol.style.Stroke({
                            color: 'red',
                            width: 2
                        })
                    }));
                    _this._vetorLayer.getSource().clear();
                    _this._vetorLayer.getSource().addFeature(_this._feature);
                    _this._deactivate();
                  
                   
                    return false;
                }
                
            },
            _pointermove: function (evt) {
                if (this._drawType === "polyline" && this._point !== null) {
                    var feature = new ol.Feature({
                        geometry: new ol.geom.LineString([this._point, evt.coordinate])
                    });
                    feature.setStyle(this._lineStyle);
                    if (this._strokeLayer != null) {
                        this._strokeLayer.getSource().clear();
                        this._strokeLayer.getSource().addFeature(feature);
                    }
                    else {
                        this._strokeLayer = new ol.layer.Vector({
                            id:"DrawTool_stroke",
                            source: new ol.source.Vector({
                                features: [feature]
                            }),
                            zIndex: this._map.getLayers().getLength() + 1
                        });
                        this._map.addLayer(this._strokeLayer);
                    }
                }
                else if (this._drawType === "polygon" && this._point !== null) {

                    var data_polygon = [];
                    for (var i = 0; i < this._pointsArray.length; i++) {
                        data_polygon.push(this._pointsArray[i]);
                    }
                    data_polygon.push(evt.coordinate);
                    var coordinatesPolygona = new Array();
                    var coordinatesPolygon = data_polygon;
                    coordinatesPolygona[0] = coordinatesPolygon;
                    var pFeature = new ol.Feature({
                        geometry: new ol.geom.Polygon(coordinatesPolygona)
                    });
                    pFeature.setStyle(this._polygonStyle);
                    if (this._strokeLayer !== null) {
                        this._strokeLayer.getSource().clear();
                        this._strokeLayer.getSource().addFeature(pFeature);
                    }
                    else {
                        this._strokeLayer = new ol.layer.Vector({
                            id: "DrawTool_stroke",
                            source: new ol.source.Vector({
                                features: [pFeature]
                            }),
                            zIndex: this._map.getLayers().getLength() + 1
                        });
                        this._map.addLayer(this._strokeLayer);
                    }
                }
                else if (this._drawType === "rectangle" && this._point !== null) {
                    var coordinatesPolygon = new Array();
                        coordinatesPolygon[0] = this._pushCoordinates([this._point, [this._point[0], evt.coordinate[1]], evt.coordinate, [evt.coordinate[0], this._point[1]]]);;
                    var pFeature = new ol.Feature({
                        geometry: new ol.geom.Polygon(coordinatesPolygon)
                    });
                    pFeature.setStyle(this._rectangleStyle);
                    if (this._strokeLayer !== null) {
                        this._strokeLayer.getSource().clear();
                        this._strokeLayer.getSource().addFeature(pFeature);
                    } else {
                        this._strokeLayer = new ol.layer.Vector({
                            id: "DrawTool_stroke",
                            source: new ol.source.Vector({
                                features: [pFeature]
                            }),
                            zIndex: this._map.getLayers().getLength() + 1
                        });
                        this._map.addLayer(this._strokeLayer);
                    }
                }
            },
            _pointerdown: function (evt) {
                if (this._drawType === "rectangle") {
                      // 恢复点查
                    Resumequery();
                    this._point = evt.coordinate;
                    return false;
                }
            },
            _pointerup: function (evt) {
                if (this._drawType === "rectangle") {
                    if (this._strokeLayer != null) {
                        this._strokeLayer.getSource().clear();
                    }
                    var coordinatesPolygon = new Array();
                    coordinatesPolygon[0] = this._pushCoordinates([this._point, [this._point[0], evt.coordinate[1]], evt.coordinate, [evt.coordinate[0], this._point[1]]]);;
                    this._feature = new ol.Feature({
                        geometry: new ol.geom.Polygon(coordinatesPolygon),
                        type: "rectangle"
                    });

                    this._feature.setStyle(this._rectangleStyle);

                    // this._vetorLayer = new ol.layer.Vector({
                    //     id: "DrawTool",
                    //     source: new ol.source.Vector({
                    //         features: [this._feature]
                    //     }),
                    //     zIndex: this._map.getLayers().getLength() + 1
                    // });
                    //this._map.addLayer(this._vetorLayer);
                    this._deactivate();
                }     
            },
            _pushCoordinates: function (coordinates) {
                var me = this;
                var coordinatesPolygon = new Array();
                for (var i = 0; i < coordinates.length; i++) {
                    var pointTransform = [coordinates[i][0], coordinates[i][1]];
                    coordinatesPolygon.push(pointTransform);
                }
                return coordinatesPolygon;
            },
            _getDistance: function (point1, point2) {
                var dis = Math.sqrt(Math.pow(point1[0] - point2[0], 2) + Math.pow(point1[1] - point2[1], 2));
                return dis;
            },
            _getArea: function (polygon) {
                var area = 0;
                //先进行坐标转换
                var polygon2 = [];
                var pointList = [];
                for (var i = 0; i < polygon.length; i++) {
                    var point = {};
                    point.x = polygon[i][0];
                    point.y = polygon[i][1];
                    pointList[i] = point;
                }
                polygon2[0] = pointList;

                //再将其拼成一个面
                var pointList = polygon2[0];
                //第一个多边形的最后一个点
                var point = pointList[pointList.length - 1];
                for (var i = 1; i < polygon2.length; i++) {
                    for (var j = 0; j < polygon2[i].length; j++) {
                        pointList[pointList.length] = polygon2[i][j];
                    }
                    pointList[pointList.length] = point;
                }
                //计算面积
                var s = 0;
                for (var i = 0; i < pointList.length; i++) {
                    var point1 = pointList[i];
                    var point2;
                    if (i < pointList.length - 1) {
                        point2 = pointList[i + 1];
                    }
                    else {
                        point2 = pointList[0];
                    }
                    s += point1.y * point2.x - point2.y * point1.x;
                }
                area = Math.abs(s / 2);
                return area;
            },
            _CancleDraw:function(){
                // catalog-目录
                var me=this;
                // on(dojo.byId("catalog"),"click",function(){
                //   me._clearKey();
                // })

                // class=drawCancle-图层搜索-切换
                on(dojo.query(".drawCancle"),"click",function(){
                    me._clearKey();
                })
    
                // top?-标题
                // on(dojo.byId("top"),"click",function(){
                //     me._clearKey();
                // })

                // baseMapChangeContent?-底图切换
                on(dojo.byId("baseMapChangeContent"),"click",function(){
                  me._clearKey();
                })
                
                
              },
        })
    });

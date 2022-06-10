

define([],
function () {

    var util = {
        _difference1Style: new ol.style.Style({
            // 默认多面形中多边形样式 style_setting为false
            fill: new ol.style.Fill({
                color: "rgba(0,153,68,1)"
            }),
            stroke: new ol.style.Stroke({
                color: "RED",
                width: 4,
                lineDash: [1, 2, 3, 4, 5, 6]
            })
        }),
    
        _difference2Style: new ol.style.Style({
            // 默认多面形中多边形样式 style_setting为false
            fill: new ol.style.Fill({
                color: "rgba(255,169,67,1)"
            }),
            stroke: new ol.style.Stroke({
                color: "RED",
                width: 4,
                lineDash: [1, 2, 3, 4, 5, 6]
            })
        }),
    
        _difference3Style: new ol.style.Style({
            // 默认多面形中多边形样式 style_setting为false
            fill: new ol.style.Fill({
                color: "rgba(0,80,187,1)"
            }),
            stroke: new ol.style.Stroke({
                color: "RED",
                width: 4,
                lineDash: [1, 2, 3, 4, 5, 6]
            })
        }),
    
        _resultLayer:null,
        _highlightedLayer: null,
        _alldata:null,

        addNeedLayer:function(){
            var me=this;
            // _resultLayer
            var ishas = false;
            for (var i = 0; i < appConfig.map.getLayers().array_.length; i++) {
                var layer = appConfig.map.getLayers().array_[i];
                var layer_id = layer.get("id");
                if (layer_id === "conflict-intersect") {
                    me._resultLayer = layer;
                    ishas = true;
                    break;
                }
            }
            if (!ishas) {
                me._resultLayer = new ol.layer.Vector({
                    id: "conflict-intersect",
                    layerTitle: "叠加分析-分析结果",
                    graphicMap: true,
                    source: new ol.source.Vector({
                        features: []
                    }),
                    zIndex: appConfig.map.getLayers().getLength() + 1
                });
                appConfig.map.addLayer(me._resultLayer);
            }

             // _highlightedLayer
             ishas = false;
             for (var i = 0; i < appConfig.map.getLayers().array_.length; i++) {
                 var layer = appConfig.map.getLayers().array_[i];
                 var layer_id = layer.get("id");
                 if (layer_id === "conflict-highlighted") {
                     me._highlightedLayer = layer;
                     ishas = true;
                     break;
                 }
             }
             if (!ishas) {
                 me._highlightedLayer = new ol.layer.Vector({
                     id: "conflict-highlighted",
                     layerTitle: "叠加分析-分析高亮",
                     graphicMap: true,
                     source: new ol.source.Vector({
                         features: []
                     }),
                     zIndex: appConfig.map.getLayers().getLength() + 1
                 });
                 appConfig.map.addLayer(me._highlightedLayer);
             }



        },

        

        showInmap:function(alldata,differtype){
            debugger
            var me=this;
            me.addNeedLayer();
            me._alldata=alldata;
            alldata.forEach(groups => {
                groups.group.forEach(onedata=>{
                    onedata.forEach(_data=>{
                        var shapwkt= _data.conflictwkt;

                        var feature = new ol.format.WKT().readFeature(shapwkt);
                        _data.geometry = new ol.Feature({
                            geometry: feature.getGeometry(),
                            type: "polygon"
                        });

                        var _resultFeature = _data.geometry.clone();
                        if(differtype==3){
                            _resultFeature.setStyle(me._difference3Style);
                        }else if(differtype==2){
                            _resultFeature.setStyle(me._difference2Style);
                        }else if(differtype==1){
                            _resultFeature.setStyle(me._difference1Style);
                        }
                        me._resultLayer.getSource().addFeature(_resultFeature);

                    })
                })
            });
        },
        locationItem: function (newwkt,differtype) {
            var me=this;
            me.addNeedLayer();
            me._resultLayer.getSource().clear();
            me._highlightedLayer.getSource().clear();
            var feature=new ol.format.WKT().readFeature(newwkt);
            var feature = new ol.Feature({
                geometry: feature.getGeometry(),
                type: "polygon"
            });

            if(differtype==3){
                feature.setStyle(me._difference3Style);
            }else if(differtype==2){
                feature.setStyle(me._difference2Style);
            }else if(differtype==1){
                feature.setStyle(me._difference1Style);
            }

            appConfig.map.getView().setCenter(ol.extent.getCenter(feature.getGeometry().getExtent()));
            me._highlightedLayer.getSource().addFeature(feature);
        },
    };
    return util;
});


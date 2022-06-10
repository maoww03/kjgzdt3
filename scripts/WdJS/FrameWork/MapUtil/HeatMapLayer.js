define(["dojo/_base/declare", "dojo/Deferred",'./Symbol'],
    function (declare, Deferred, Symbol) {
        return declare("MapUtil.HeatMapLayer", null, {
            _map: null,
            _layer: null,
            _styleFunction: null,
            _style: null,
            _url: null,
            _defaultFillStyle: {
                fill: {
                    color: "rgba(255, 255, 255, 0.6)"
                },//填充色使用英文颜色或者rgba
                outline: {
                    color: "rgba(110, 110, 110, 1)",//线的填充色 可以使用英文颜色或者rgba
                    width: "0.4"
                }
            },
            createLayer: function (map, config) {
                this._map = map;
                this._url = config.url;
                var vectorSource = new ol.source.Vector({
                    format: new ol.format.GeoJSON(),
                    url: function (extent) {
                        return config.url +'&srsname=EPSG:200000&' +
                            'bbox=' + extent.join(',') + ',EPSG:200000';
                    },
                    strategy: ol.loadingstrategy.tile(ol.tilegrid.createXYZ({
                        tileSize: 256
                    }))
                });
                this._layer = new ol.layer.Heatmap ({
                    source: vectorSource,
                    visible: config.visible,
                    id: config.id,
                    name: config.caption,
                    blur: parseInt(config.blur, 10),
                    radius: parseInt(config.radius, 10),
                    weight: function (feature) {
                      
                        var weight = parseFloat(feature.get(config.weight) || 0);
                        return weight;
                    }
                });
               

                this._map.addLayer(this._layer);
            }
        });
    });
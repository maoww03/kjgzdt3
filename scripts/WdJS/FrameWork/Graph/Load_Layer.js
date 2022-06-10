define(['dojo/on', 'dojo/query', 'dojo/dom-attr',"FrameWork/MapUtil/Map"],
    function ( on, query, domAttr,Map){
        var util = {
            data: null,
            layer_config: {
                id: "Load_Layer",
                caption: "图形图层",
                visible: true,
                style: {
                    "angle": new ol.style.Style({
                        image: new ol.style.Circle({
                            radius: 5,
                            fill: new ol.style.Fill({ color: "#fe9e16" })
                        })
                    }),
                    "selfIntersectionPoints": new ol.style.Style({
                        image: new ol.style.Circle({
                            radius: 5,
                            fill: new ol.style.Fill({ color: "#e5231b" })
                        })
                    }),
                    "repeat": new ol.style.Style({
                        image: new ol.style.Circle({
                            radius: 5,
                            fill: new ol.style.Fill({ color: "#f6d817" })
                        })
                    }),
                    "Polygon": new ol.style.Style({
                        stroke: new ol.style.Stroke({
                            color: "#4f7dff",
                            width: 1
                        }),
                        fill: new ol.style.Fill({
                            color: "#4f7dff"
                        })
                    }),
                    "MultiPolygon": new ol.style.Style({
                        stroke: new ol.style.Stroke({
                            color: "#4f7dff",
                            width: 1
                        }),
                        fill: new ol.style.Fill({
                            color: "#4f7dff"
                        })
                    })
                }
            },
            load_layer: function () {
                var me = this;
                var layer_state = me.exist_layer();
                // 图层判断是否生成_防止重复
                if (layer_state == false) {
                    var vectorSource = new ol.source.Vector();
                    var layer = new ol.layer.Vector({
                        source: vectorSource,
                        visible: me.layer_config.visible,
                        id: me.layer_config.id,
                        name: me.layer_config.caption,
                        style: function (feature) {
                            var geometry = feature.getGeometry();
                            var type = geometry.getType();
                            var pp = feature.getProperties();
                            var color = "#a1e24d";
                            var ls = me.layer_config.style;
                            if (type == "Point") {

                                //if (pp.type == "angle") {
                                //    color = "#7c7147";
                                //} else if (pp.type == "selfIntersectionPoints") {
                                //    color = "#f9e287";
                                //}
                                //else if (pp.type == "repeat") {
                                //    color = "#4d5281";
                                //}
                                //ls[type].getImage().getFill().setColor(color);
                                return ls[pp.type];
                            }
                            else {
                                //if (pp.type == "自相交") {
                                //    color = "#f9e287";
                                //}
                                //else if (pp.type == "角度") {
                                //    color = "#7c7147";
                                //}
                                //else if (pp.type == "点重复") {
                                //    color = "#4d5281";
                                //}
                                //ls[type].getFill().setColor(color);
                                return ls[type];
                            }
                        }
                    }
                    );
                    layer.setProperties({ graphicMap: true, layerTitle: "坐标" });
                    Map.map.addLayer(layer);
                }
            },
            //判断绘制图层是否存在
            exist_layer: function () {
                var me = this;
                var layer_arr = Map.map.getLayers().array_;
                var layer;
                for (var i = 0; i < layer_arr.length; i++) {
                    var obj_id = layer_arr[i].values_["id"];
                    if (obj_id == "Load_Layer") {
                        layer = Map.map.getLayers().item(i);
                    }
                }
                if (layer != null && layer != undefined && layer != "") {
                    return true;
                }
                else {
                    return false;
                }
            },
            // =======
            load_geo: function (data) {
                var me = this;
                me.load_layer();
                var layer_arr = Map.map.getLayers().array_;
                var layer;
                for (var i = 0; i < layer_arr.length; i++) {
                    var obj_id = layer_arr[i].values_["id"];
                    if (obj_id == "Load_Layer") {
                        layer = Map.map.getLayers().item(i);
                    }
                }
                //加载面数据

                var ft = new ol.Feature({ geometry: new ol.geom.MultiPolygon([data.geo]) });
                ft.setProperties({ type: data.type });
                Map.map.getView().setCenter(data.geo[0][0]);
                // layer.getSource().clear();
                layer.getSource().addFeature(ft);
                //加载点数据
                var er_ps = data.e_p;
                if (er_ps.length > 0) {
                    
                    for (var i = 0; i < er_ps.length; i++) {
                        var ft = new ol.Feature({ geometry: new ol.geom.Point(er_ps[i].point) });
                        ft.setProperties({ type: er_ps[i].type });
                        layer.getSource().addFeature(ft);
                    }
                }
            },

            clearLayer:function() {
                var layer_arr = Map.map.getLayers().array_;
                var layer;
                var pd=false;
                for (var i = 0; i < layer_arr.length; i++) {
                    var obj_id = layer_arr[i].values_["id"];
                    if (obj_id == "Load_Layer") {
                        layer = Map.map.getLayers().item(i);
                        pd=true;
                    }
                }
                if(pd){
                    layer.getSource().clear();
                }
            }
        }
        return util;
});
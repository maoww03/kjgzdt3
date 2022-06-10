define([],
    function () {
        var util = {
            setIconSymbol: function (config) {
                return new ol.style.Style({
                    image: new ol.style.Icon({
                        src: config.url,
                        imgSize: config.size
                    })
                });
            },
            setFillSymbol: function (config, feature) {
                var style = new ol.style.Style({
                    fill: new ol.style.Fill({
                        color: config.fill.color
                    }),
                    stroke: new ol.style.Stroke({
                        color: config.outline.color,
                        width: config.outline.width,
                        lineDash: config.outline.lineDash || []
                    })
                });
                if (config.label !== undefined) {
                    var text = new ol.style.Text({
                        textAlign: config.label.textAlign,            //位置
                        textBaseline: config.label.textBaseline,         //基准线
                        font: config.label.font,    //文字样式
                        text: feature.get(config.label.textFiled),      //文本内容
                        fill: new ol.style.Fill({       //文本填充样式（即文字颜色)
                            color: config.label.fill.color
                        }),
                        stroke: new ol.style.Stroke({
                            color: config.label.stroke.color,
                            width: config.label.stroke.width
                        })
                    });
                    style.setText(text);
                }
                return style;
            },
            setArcGisLineSymbol: function (config) {
                var color = "rgba(" + config.color[0] + "," + config.color[1] + "," + config.color[2] + "," + config.color[3] / 255.0 + ")";
                var style = new ol.style.Style({
                    stroke: new ol.style.Stroke({
                        color: color,
                        width: color.width
                    })
                });
                return style;
            },
            setArcGisPolygonSymbol: function (config) {
                var style;
                var color = "rgba(" + config.color[0] + "," + config.color[1] + "," + config.color[2] + "," + config.color[3] / 255.0 + ")";
                if (config.outline !== undefined && config.outline !== null) {
                    var outLineColor = "rgba(" + config.outline.color[0] + "," + config.outline.color[1] + "," + config.outline.color[2] + "," + config.outline.color[3] / 255.0 + ")";
                    style = new ol.style.Style({
                        fill: new ol.style.Fill({
                            color: color
                        }),
                        stroke: new ol.style.Stroke({
                            color: outLineColor,
                            width: config.outline.width
                        })
                    });
                }
                else {
                    style = new ol.style.Style({
                        fill: new ol.style.Fill({
                            color: color
                        })
                    });
                }
                return style;
            },
            setArcGisPointSymbol: function (url,config) {
                var style;
                if (config.type === "esriPMS") {
                   
                    style = new ol.style.Style({
                        image: new ol.style.Icon({
                            src: url + "/images/" + config.url,
                            imgSize: [config.width, config.height],
                            offset: [config.xoffset, config.yoffset]
                        })
                    });
                  
                } else if (config.type === "esriSMS") {
                    var color = "rgba(" + config.color[0] + "," + config.color[1] + "," + config.color[2] + "," + config.color[3] / 255.0 + ")";
                    var outLineColor = "rgba(" + config.outline.color[0] + "," + config.outline.color[1] + "," + config.outline.color[2] + "," + config.outline.color[3] / 255.0 + ")";
                    style = new ol.style.Style({
                        image: new ol.style.Circle({
                            radius: config.size,
                            fill: new ol.style.Fill({
                                color: color
                            })
                        }),
                        stroke: new ol.style.Stroke({//圆边线样式
                            color: outLineColor,
                            width: config.outline.width
                        })
                    });
                   
                }
                return style;
            },
            base64ToBlob: function (config) {
                var image = new Image();
                image.src = "data:" + config.contentType + ";base64," + config.imageData;
                image.onload = function () {

                    var canvas = document.createElement("canvas");
                    canvas.width = image.width;
                    canvas.height = image.height;
                    canvas.getContext("2d").drawImage(image, 0, 0);
                    return new ol.style.Style({
                        image: new ol.style.Icon({
                            src: canvas.toDataURL(config.contentType),
                            imgSize: [config.width, config.height],
                            offset: [config.xoffset, config.yoffset]
                        })
                    });
                }
            }
        };
        return util;
    });
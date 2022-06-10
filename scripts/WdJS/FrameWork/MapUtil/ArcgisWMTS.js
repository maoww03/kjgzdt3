define(["dojo/_base/declare", "dojo/Deferred","FrameWork/SetMapConfig/SetMapConfig"],
    function (declare, Deferred,SetMapConfig) {
        return declare("MapUtil.SuperMapWMTS", null, {
            _map: null,
            _layer: null,
            _query: null,

            createLayer: function (map, config) {
                this._map = map;
                // config.mapUrl = SetMapConfig.setOneMapurl(config.mapUrl);
                this._url = config.mapUrl;
               

            //    $.ajax({
            //        url:config.mapUrl

            //    })

                this._getXmlNode(config);
                
            },
            _getXmlNode: function (config) {
                //debugger
                var me = this;
                //var xmlUrl = "http://192.168.1.131:8090/iserver/services/map-jgch/wmts100";
              
                var xmlhttp = null;
                if (window.ActiveXObject) {
                    xmlhttp = new ActiveXObject('Msxml2.DOMDocument');
                    //xmlDoc.async = false;
                    //xmlDoc.load(xmlUrl);
                }
                else if (document.implementation && document.implementation.createDocument) {
                    xmlhttp = new window.XMLHttpRequest();
                    //xmlhttp.open("GET", xmlUrl, false);
                    //xmlhttp.send(null);
                    //xmlDoc = xmlhttp.responseXML.documentElement;
                }
                else { console.log("加载" + config.caption + "服务失败！"); return; }
                xmlhttp.open('GET', config.mapUrl, true);
                xmlhttp.send(null);
                xmlhttp.onreadystatechange = function () {
                   
                   
                    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                        if (xmlhttp.responseXML != undefined && xmlhttp.responseXML != null) {
                            me._processXML(xmlhttp.responseXML.documentElement, config);
                        } else {
                            me._processXML(me._string2XML(xmlhttp.response), config);
                        }
                    }
                    //else {
                    //    console.log("加载" + config.caption + "服务失败！");
                    //}
                }

                
            },
            _string2XML: function (xmlString) {
                //所有浏览器统一用这种方式处理(因为高版本的浏览器都支持)
                var parser = new DOMParser();
                var xmlObject = parser.parseFromString(xmlString, "text/xml");
                return xmlObject;
            },
            _processXML: function (xmlDoc, config) {
                if (xmlDoc != null) {
                    try {
                        var Layer = xmlDoc.getElementsByTagName("Contents")[0].getElementsByTagName("Layer");
                        var _layer = Layer[0].getElementsByTagName("ows:Title")[0].textContent;

                        var BoundingBox = Layer[0].getElementsByTagName("ows:BoundingBox")[0];
                        var LowerCorner = BoundingBox.getElementsByTagName("ows:LowerCorner")[0].textContent;
                        var UpperCorner = BoundingBox.getElementsByTagName("ows:UpperCorner")[0].textContent;
                        var extent = [LowerCorner.split(' ')[1] * 1, LowerCorner.split(' ')[0] * 1, UpperCorner.split(' ')[1] * 1, UpperCorner.split(' ')[0] * 1];
                        // var origin = [LowerCorner.split(' ')[0] * 1, UpperCorner.split(' ')[1] * 1];
                        var TileMatrixSet = xmlDoc.getElementsByTagName("Contents")[0].getElementsByTagName("TileMatrixSet")[1];
                        var TileMatrix = TileMatrixSet.getElementsByTagName("TileMatrix");
                        var _matrixSet = TileMatrixSet.getElementsByTagName("ows:Identifier")[0].textContent;
                        var resolutions = [];
                        var matrixIds = [];
                        var dpi = 90.71428571429;
                        for (var i = 0; i < TileMatrix.length; i++) {
                            matrixIds.push(TileMatrix[i].getElementsByTagName("ows:Identifier")[0].textContent * 1);
                            var scale = TileMatrix[i].getElementsByTagName("ScaleDenominator")[0].textContent * 1;
                            resolutions.push(0.0254 / dpi * scale);
                        }
                        var origin = [TileMatrix[0].getElementsByTagName("TopLeftCorner")[0].textContent.split(' ')[1] * 1, TileMatrix[0].getElementsByTagName("TopLeftCorner")[0].textContent.split(' ')[0] * 1];
                        // var resolutions=[156367.79197931726,
                        // 78183.89598965863,
                        // 39091.947994829316,
                        // 19545.973997414658,
                        // 9772.986998707329,
                        // 4886.493499353664,
                        // 2443.246749676832,
                        // 1221.623374838416,
                        // 610.811687419208,
                        // 305.405843709604,
                        // 152.702921854802,
                        // 76.351460927401,
                        // 38.1757304637005,
                        // 19.08786523185025,
                        // 9.543932615925126,
                        // 4.771966307962563,
                        // 2.3859831539812815,
                        // 1.1929915769906407,
                        // 0.5964957884953204,
                        // 0.2982478942476602,
                        // 0.1491239471238301];
                        var vectorSource = new ol.source.WMTS({
                            url: this._url,
                            layer: _layer,
                            matrixSet: _matrixSet,
                            format: 'image/png',
                            projection: ol.proj.get('ESPG:4549'),
							crossOrigin:"anonymous",
                            tileGrid: new ol.tilegrid.WMTS({
                                tileSize: 256,
                                origin: origin,
                                extent: extent,
                                resolutions: resolutions,
                                matrixIds: matrixIds
                            }),
                            style: 'default'
                        });
                        this._layer = new ol.layer.Tile({
                            source: vectorSource,
                            visible: config.visible,
                            id: config.id,
                            name: config.caption,
                            groupCaption: config.groupCaption,
                            baseMap: config.baseMap,
                            thematicMap: config.thematicMap,
                            layerType: "ArcgisWMTS"
                        });
                        this._map.addLayer(this._layer);
                        this._layer.on('prerender', evt => {

                            if (appConfig.isGrey) {
                                evt.context.filter = 'grayscale(100%)';
                                //evt.context.filter = 'sepia(100%)'
                            } else {
                                evt.context.filter = 'none';
                            }
                        });
                    } catch (ex) {
                        console.log("加载" + config.caption + "服务失败！" + ex);
                    }
                } else {
                    console.log("加载" + config.caption + "服务失败！");
                }
            }

        });
    });
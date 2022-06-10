define([
  "dojo/_base/declare",
  "dojo/parser",
  "dijit/_WidgetBase",
  "dijit/_TemplatedMixin",
  "dojo/text!./templates/PrintWeb.txt",
  "dojo/on",
  "dojo/dom-style",
  "dojo/dom-class", 
  "dojo/dom-attr",
  "dojo/_base/lang",
  "dojo/dom-construct",
  "FrameWork/MapUtil/MapConfig2",
    "FrameWork/MapUtil/MapFactory", "./waterMark",'FrameWork/MapUtil/Map',"./legendList","./PrintLabel",
    "FrameWork/DataView/ViewBar"
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
    lang,
    domConstruct,
    MapConfig2,
    MapFactory, waterMark,Map,legendList,PrintLabel,ViewBar
) {
    return declare([_WidgetBase, _TemplatedMixin], {
        templateString: template,
        _MapConfig:null,
        mapData: null,
        mapData2: null,
        type: null,
        angle: null,
        _showsy:false,
        
        // A4横  1120 * 792 ; A4纵  792 * 1120 ; A3横  1580 * 1118 ; A3纵  1118 * 1580
        baseMapArray: [],
        visibleDiv: [],
        layersConfig: [],
        otherlayer:[],
        fontF_arr: ["auto", "cursive", "方正正大黑简体", "emoji", "fangsong", "fantasy", "inherit", "monospace"],
        font_Size: 21,
        font_Family: 'cursive',
        font_Color: "black",
        lods: [
            { level: 0, resolution: 0.6614598312642429, scale: 2500 },
            { level: 1, resolution: 1.322919662528486, scale: 5000 },
            { level: 2, resolution: 2.645839325056972, scale: 10000 },
            { level: 3, resolution: 5.291678650113943, scale: 20000 },
            { level: 4, resolution: 6.614598312642429, scale: 25000 },
            { level: 5, resolution: 13.22919662528486, scale: 50000 },
            { level: 6, resolution: 26.45839325056972, scale: 100000 },
        ],
        temp_width: 0,
        temp_height: 0,
        dims: {
            A0: [1189, 841],
            A1: [841, 594],
            A2: [594, 420],
            A3: [420, 297],
            A4: [297, 210],
            A5: [210, 148],
        },

        _waterMarkList: null,
        _legendItem:[],
        _outtype:"print",
        layer_config: {
            id: "Mark_Draw_Layer",
            caption: "标记图层",
            visible: true,
            style: {
                "Point":new ol.style.Style({
                    image:new ol.style.Circle({
                        radius:6,
                        fill:new ol.style.Fill({color:"#0b54b5"})
                    })
                }),
                "LineString":new ol.style.Style({
                    stroke:new ol.style.Stroke({
                        color:"#0b54b5",
                        width:2
                    })
                }),
                "Polygon":new ol.style.Style({
                    stroke:new ol.style.Stroke({
                        color:"#4f7dff",
                        width:1
                    }),
                    fill:new ol.style.Fill({
                        color:"#4f7dff"
                    })
                }),
                "Text":new ol.style.Style({
                    text:new ol.style.Text({
                        font: '16px Microsoft YaHei',
                        //文字填充色
                        fill: new ol.style.Fill({
                            color: '#666'
                        }),
                        text:"",
                        offsetY: 14
                    })
                })
            }
        },
        constructor: function (args) { },
        postCreate: function () {
            this.inherited(arguments);
        },
        startup: function () {
            var me = this;
            if (me._started) {
                return;
            }
            parser.parse(me.domNode).then(function () {
                var oData = new Date();
                var str = '' + oData.getFullYear() + '-' + Number(oData.getMonth() + 1) + '-'+oData.getDate();
                me.showtime2.value = str;

                var w=document.body.clientWidth;
                var h=document.body.clientHeight;
                domStyle.set(me.water,"width",w+'px');
                domStyle.set(me.water,"height",h+"px");

                me._MapConfig=_otherRegion();
                me.setColor();
                me.setFont();
                me.visibleDiv = [];
                me._waterMarkList = [];
                me._MapConfig.option.view.projection = projection_4549;

                var _view = new ol.View(me._MapConfig.option.view);
                me.mapData2 = new ol.Map({
                    controls: ol.control.defaults({ attribution: false, zoom: false, rotate: false }).extend([]),
                    view: _view,
                    target: "mapDivPrint2",
                    renderer: "canvas",
                });
                me.mapData = new ol.Map({
                    controls: ol.control.defaults({ attribution: false, zoom: false, rotate: false }).extend([]),
                    view: _view,
                    target: "mapDivPrint",
                    renderer: "canvas",
                });
                _printMap=me.mapData;
                var view = me.mapData.getView();
                view.setZoom(appConfig.map.getView().getZoom());
                view.setCenter(appConfig.map.getView().getCenter());
                me.mapData.setView(view);
                setTimeout(
                    function () {
                        me.mapData.updateSize();
                    }.bind(this),
                    500
                );
                
                me._initMap2Layers();
                me._setBaseMapSelected();

                me.getLayersConfig();
                
                me.layersConfig.forEach((layer) => {
                    MapFactory._createLayer(layer, me._MapConfig, me.mapData);
                });
                me.otherlayer.forEach((layer) => {
                    MapFactory._createLayer(layer, Map, me.mapData);
                });
                me.lodsRefresh();
               

                var layers = me.mapData2.getLayers().array_;
                for (var i = 0; i < layers.length; i++) {
                    var _layer = layers[i];
                    _layer.on("prerender", (evt) => {
                        if (appConfig.isGrey) {
                            evt.context.filter = "grayscale(100%)";
                        } else {
                            evt.context.filter = "none";
                        }
                        _layer.getSource().refresh();
                    });
                }
                me.namevalue.value=me.showname.innerHTML;
                me._bindEvents();

                me.tl.click();
                me.zbz.click();
                me.time.click();
                me.dw.click();

                var _PrintLabel=new PrintLabel().placeAt(me.addBj);
                _PrintLabel.startup();
                //绘制图层
                let layerArr=appConfig.map.getLayers();
                let mapLayer=layerArr.array_.filter(e=>{
                    return e.values_.id=="Custom_drawLayer"
                })
                if(mapLayer.length>0){
                    let drawLayer = new ol.layer.Vector({
                        id: "Custom_drawLayer",
                        layerTitle: "自定义-绘制图层",
                        graphicMap: true,
                        source: mapLayer[0].getSource(),
                        zIndex: me.mapData.getLayers().getLength() + 100,
                        style:new ol.style.Style({       // 默认矩形样式 
                            fill: new ol.style.Fill({
                                color: 'rgba(0,0,0,0.5)'
                            }),
                            stroke: new ol.style.Stroke({
                                color: 'red',
                                width: 2
                            })
                        }),
                    });
                    me.mapData2.addLayer(drawLayer);
                    me.mapData.addLayer(drawLayer);
                    let csLayer=me.mapData.getLayers().array_;
                    // let sj=csLayer.filter(e=>{
                    //     return e.values_.id=="Custom_drawLayer"
                    // });
                    // sj[0].getSource().changed();
                    // console.log(sj[0].getFeatures());
                }
            });
        },
        _bindEvents: function () {
            var me = this;
            on(me.exitBtn, "click", function () {
                for (var i = 0; i < me._waterMarkList.length; i++) {
                    me._waterMarkList[i].destroy();
                }
                me.destroy();
            });
            on(me.close, "click", function () {
                for (var i = 0; i < me._waterMarkList.length; i++) {
                    me._waterMarkList[i].destroy();
                }
                me.destroy();
                Resumequery();
            });

            on(me.printBtn, "click", function () {
                if(me._outtype=="print"){
                    if (domStyle.get(dojo.byId("moreScreenControl"), "display") == "block") {
                        me.visibleDiv.push("moreScreenControl");
                        domStyle.set(dojo.byId("moreScreenControl"), "display", "none");
                    }
                    if (domStyle.get(dojo.byId("siderbar-container"), "display") == "block") {
                        me.visibleDiv.push("siderbar-container");
                        domStyle.set(dojo.byId("siderbar-container"), "display", "none");
                    }
                    if (domStyle.get(dojo.byId("sidebox"), "display") == "block") {
                        me.visibleDiv.push("sidebox");
                        domStyle.set(dojo.byId("sidebox"), "display", "none");
                    }
    
                    if (domStyle.get(dojo.byId("catalog"), "display") == "block") {
                        me.visibleDiv.push("catalog");
                        domStyle.set(dojo.byId("catalog"), "display", "none");
                    }
                    
                    // domStyle.set(me.mapContainer, "width", me.width.value + "px");
                    // domStyle.set(me.mapContainer, "height", me.height.value + "px");

                    domStyle.set(me.down, "margin", "20px");
    
                    domStyle.set(me.MapBox, "top", "0");
                    domStyle.set(me.MapBox, "left", "0");
    
                    domStyle.set(dojo.byId("mapDiv"), "display", "none");
                    domStyle.set(dojo.byId("mapDiv2"), "display", "none");
                    domStyle.set(dojo.byId("top"), "display", "none");
                    domStyle.set(me.BtnBox, "display", "none");
                    domStyle.set(me.BoxTitle, "display", "none");
                    domStyle.set(me.MapBox, "border", "1px solid white");
                    domStyle.set(me.close, "display", "none");
                    domStyle.set(dojo.byId("groupbar"), "display", "none");
                    domStyle.set(dojo.byId("openGroup"), "display", "none");
                    
                    domStyle.set(me.water,"display","block")
                    me.mapData.updateSize();
                    me.mapData2.updateSize();
                    if(me._showsy){
                        me.watermarkWord(); 
                    }

                    // 居中
                   var cc=me.paperType.value;
                   var fx=me.paperAngle.value
                   var pheight=me.MapBox.clientWidth;
                    

                    // "A4""横向"
                    if(me.mbxz.value == "tdlyxz"){
                        
                        domStyle.set(me.showbox,"display","block");
                        me.showbox_mb.innerHTML="土地利用现状";
                        if( fx == "横向"){
                            if(cc=="A4" ){
                                if(pheight < 1000){
                                var _showbox=[1000,700];
                                }
                            }else if(cc=="A3"){
                                if(pheight < 1500){
                                    var _showbox=[1460,1020];
                                }
                            }
                        }else if( fx == "纵向"){
                            if(cc=="A4" ){
                                if(pheight < 700){
                                var _showbox=[700,1000];
                                }
                            }else if(cc=="A3"){
                                if(pheight < 1020){
                                    var _showbox=[1020,1460];
                                }
                            }
                        }
                        
                        // 模板宽高
                        domStyle.set(me.showbox,"width", _showbox[0]+"px");
                        domStyle.set(me.showbox,"height",_showbox[1]+"px");

                        //4line
                        var t=(me.showbox_boxT.clientHeight-me.mapContainer.clientHeight)/2;
                        domStyle.set(me.top_line,"top",t+"px");
                        domStyle.set(me.bottom_line,"bottom",t+"px");
                        var r=Math.round((me.showbox_boxT.clientWidth-me.mapContainer.clientWidth)/2);
                        domStyle.set(me.left_line,"left",r+"px");
                        domStyle.set(me.right_line,"right",r+"px");

                         //  居中
                         var rl=(_showbox[0]-me.mapContainer.clientWidth)/2;
                         domStyle.set(me.mapContainer,"margin-left",rl+"px");
                         
                         var tb=Math.round((_showbox[1]-me.mapContainer.clientHeight)/2);
                         domStyle.set(me.mapContainer,"margin-top",tb+"px");

                        // showdw
                        var msg_bottom=(t+30)*-1;
                        domStyle.set(me.showdw,"bottom",msg_bottom+"px");
                        domStyle.set(me.showdw,"left","-"+r+"px");
                        domStyle.set(me.showtime,"bottom",msg_bottom+"px");
                        domStyle.set(me.showtime,"right","-"+r+"px");
                        domStyle.set(me.showblc,"bottom",msg_bottom+"px");
                    }else{
                        if(cc=="A4" && fx == "横向"){
                        if(pheight < 1000){
                            var left= Math.round((1000-pheight)/2);
                            domStyle.set(me.MapBox,"left",left+"px");
                        }
                    }else if(cc=="A3" && fx == "横向"){
                        if(pheight < 1500){
                            var left= Math.round((1500-pheight)/2);
                            domStyle.set(me.MapBox,"left",left+"px");
                        }
                    }
                    }

                    setTimeout(function () {
                        window.print();
                    }, 500);
                    
                }else if(me._outtype=="out"){
                    html2canvas(document.getElementById("down"),{background:"#fcfdff"}).then(canvas=>{
                        if(me.outType.value=="PNG"){
                            let url=canvas.toDataURL("image/png");
                            var filedown=document.createElement("a");
                            filedown.href=url;
                            filedown.download="地图.png";
                            filedown.click();
                        }
                        else if(me.outType.value=="JPG"){
                            var wd=domStyle.get(me.down,"width");
                            var hd=domStyle.get(me.down,"height");

                            let url=canvas.toDataURL("image/jpeg");
                            var filedown=document.createElement("a");
                            filedown.href=url;
                            filedown.download="地图.jpg";
                            filedown.click();
                        }
                    })
                }
            });


            on(window, "afterprint", function () {
                
                // domStyle.set(me.showbox,"display","none");
                // domStyle.set(me.showdw,"bottom","-24px");
                // domStyle.set(me.showdw,"left","0px");
                // domStyle.set(me.showtime,"bottom","-24px");
                // domStyle.set(me.showtime,"right","0px");
                // domStyle.set(me.showblc,"bottom","-24px");
                // domStyle.set(me.mapContainer,"border","1px solid black");
                // domStyle.set(me.down, "margin", "0");

                // if (me.visibleDiv.indexOf("moreScreenControl") != -1) {
                //     domStyle.set(dojo.byId("moreScreenControl"), "display", "block");
                // }
                // if (me.visibleDiv.indexOf("siderbar-container") != -1) {
                //     domStyle.set(dojo.byId("siderbar-container"), "display", "block");
                // }
                // if (me.visibleDiv.indexOf("sidebox") != -1) {
                //     domStyle.set(dojo.byId("sidebox"), "display", "block");
                // }

                // if (me.visibleDiv.indexOf("catalog") != -1) {
                //     domStyle.set(dojo.byId("catalog"), "display", "block");
                // }
                // me.visibleDiv = [];

                // domStyle.set(me.mapContainer, "width", (me.width.value * 2) / 3 + "px");
                // domStyle.set(me.mapContainer, "height", (me.height.value * 2) / 3 + "px");
                // domStyle.set(me.mapContainer, "margin", "40px");

                // var mapBpxHeight = (me.height.value * 2) / 3;
                // if (mapBpxHeight < 580) {
                //     mapBpxHeight = 580;
                // }
                // domStyle.set(me.MapBox, "left", "calc((100% - " + ((me.width.value * 2) / 3 + 40 * 2 + 260) + "px) / 2)");
                // domStyle.set(me.MapBox, "top", "calc((100% - " + (mapBpxHeight + 40 * 3) + "px) / 2)");

                // domStyle.set(dojo.byId("mapDiv"), "display", "block");
                // domStyle.set(dojo.byId("mapDiv2"), "display", "block");
                // domStyle.set(dojo.byId("groupbar"), "display", "block");
                // domStyle.set(dojo.byId("openGroup"), "display", "block");

                // domStyle.set(dojo.byId("top"), "display", "block");
                // domStyle.set(me.BtnBox, "display", "block");
                // domStyle.set(me.BoxTitle, "display", "block");
                // domStyle.set(me.MapBox, "border", "1px solid #b7b7b7");
                // domStyle.set(me.close, "display", "block");

                // domStyle.set(me.water,"display","none")
                // for (var i = 0; i < me._waterMarkList.length; i++) {
                //     me._waterMarkList[i].destroy();
                // }

                // setTimeout(function () {
                //     me.mapData.updateSize();
                //     me.mapData2.updateSize();
                // }, 100);
                me.backpanel();
            });

            on(me.width, "change", function () {
                var type = me.paperType.value;
                var angle = me.paperAngle.value;
                if (!me.width.value.match(/^[ ]*$/)) {
                    var width = parseInt((me.dims[type][0] * 96) / 25.4);
                    var height = parseInt((me.dims[type][1] * 96) / 25.4);
                    if (angle == "横向") {
                        if (me.width.value >= width) {
                            me.width.value = width;
                        }
                    } else if (angle == "纵向") {
                        if (me.width.value >= height) {
                            me.width.value = height;
                        }
                    }

                    domStyle.set(me.mapContainer, "width", (me.width.value * 2) / 3 + "px");
                    domStyle.set(me.mapContainer, "height", (me.height.value * 2) / 3 + "px");

                    var mapBpxHeight = (me.height.value * 2) / 3;
                    if (mapBpxHeight < 580) {
                        mapBpxHeight = 580;
                    }
                    domStyle.set(me.MapBox, "left", "calc((100% - " + ((me.width.value * 2) / 3 + 40 * 2 + 260) + "px) / 2)");
                    domStyle.set(me.MapBox, "top", "calc((100% - " + (mapBpxHeight + 40 * 3) + "px) / 2)");
                    setTimeout(function () {
                        me.mapData.updateSize();
                        me.mapData2.updateSize();
                    }, 100);
                }
            });
            on(me.height, "change", function () {
                var type = me.paperType.value;
                var angle = me.paperAngle.value;
                if (!me.height.value.match(/^[ ]*$/)) {
                    var width = parseInt((me.dims[type][0] * 96) / 25.4);
                    var height = parseInt((me.dims[type][1] * 96) / 25.4);
                    if (angle == "横向") {
                        if (me.height.value >= height) {
                            me.height.value = height;
                        }
                    } else if (angle == "纵向") {
                        if (me.height.value >= width) {
                            me.width.value = width;
                        }
                    }
                    domStyle.set(me.mapContainer, "width", (me.width.value * 2) / 3 + "px");
                    domStyle.set(me.mapContainer, "height", (me.height.value * 2) / 3 + "px");

                    var mapBpxHeight = (me.height.value * 2) / 3;
                    if (mapBpxHeight < 580) {
                        mapBpxHeight = 580;
                    }
                    domStyle.set(me.MapBox, "left", "calc((100% - " + ((me.width.value * 2) / 3 + 40 * 2 + 260) + "px) / 2)");
                    domStyle.set(me.MapBox, "top", "calc((100% - " + (mapBpxHeight + 40 * 3) + "px) / 2)");
                    setTimeout(function () {
                        me.mapData.updateSize();
                        me.mapData2.updateSize();
                    }, 100);
                }
            });

            on(me.namevalue, "input", function () {
                domStyle.set(me.showname, "font-size", me.font_Size + 'px');
                me.showname.innerHTML = me.namevalue.value;
                if (me.namevalue.value == '') {
                    domStyle.set(me.showname, "display", 'none');
                } else {
                    domStyle.set(me.showname, "display", 'block');
                }
            }.bind(this));
            on(me.paperAngle, "change", function () {
                var type = me.paperType.value;
                var angle = me.paperAngle.value;
                if (!me.width.value.match(/^[ ]*$/)) {
                    if (angle == "横向") {
                        me.width.value = parseInt((me.dims[type][0] * 96) / 25.4);
                        me.height.value = parseInt((me.dims[type][1] * 96) / 25.4);
                    } else {
                        me.width.value = parseInt((me.dims[type][1] * 96) / 25.4);
                        me.height.value = parseInt((me.dims[type][0] * 96) / 25.4);
                    }
                    domStyle.set(me.mapContainer, "width", (me.width.value * 2) / 3 + "px");
                    domStyle.set(me.mapContainer, "height", (me.height.value * 2) / 3 + "px");

                    var mapBpxHeight = (me.height.value * 2) / 3;
                    if (mapBpxHeight < 580) {
                        mapBpxHeight = 580;
                    }
                    domStyle.set(me.MapBox, "left", "calc((100% - " + ((me.width.value * 2) / 3 + 40 * 2 + 260) + "px) / 2)");
                    domStyle.set(me.MapBox, "top", "calc((100% - " + (mapBpxHeight + 40 * 3) + "px) / 2)");
                    setTimeout(function () {
                        me.mapData.updateSize();
                        me.mapData2.updateSize();
                    }, 100);
                }
            });
            on(me.paperType, "change", function () {
                var type = me.paperType.value;
                var angle = me.paperAngle.value;
                if (!me.width.value.match(/^[ ]*$/)) {
                    if (angle == "横向") {
                        me.width.value = parseInt((me.dims[type][0] * 96) / 25.4);
                        me.height.value = parseInt((me.dims[type][1] * 96) / 25.4);
                    } else {
                        me.width.value = parseInt((me.dims[type][1] * 96) / 25.4);
                        me.height.value = parseInt((me.dims[type][0] * 96) / 25.4);
                    }
                    domStyle.set(me.mapContainer, "width", (me.width.value * 2) / 3 + "px");
                    domStyle.set(me.mapContainer, "height", (me.height.value * 2) / 3 + "px");

                    var mapBpxHeight = (me.height.value * 2) / 3;
                    if (mapBpxHeight < 580) {
                        mapBpxHeight = 580;
                    }
                    domStyle.set(me.MapBox, "left", "calc((100% - " + ((me.width.value * 2) / 3 + 40 * 2 + 260) + "px) / 2)");
                    domStyle.set(me.MapBox, "top", "calc((100% - " + (mapBpxHeight + 40 * 3) + "px) / 2)");
                    setTimeout(function () {
                        me.mapData.updateSize();
                        me.mapData2.updateSize();
                    }, 100);
                }
            });
            on(me.lodsSelect, "change", function (evt) {
                var index = me.lodsSelect.selectedIndex;
                if (me.lodsSelect.options[index].value != "请选择") {
                    me.mapData.getView().setResolution(me.lodsSelect.options[index].value);
                    me.mapData2.getView().setResolution(me.lodsSelect.options[index].value);
                }
            });

            on(me.zbz, "click", function (evt) {
                if (this.checked == true) {
                    domStyle.set(me.showzbz, 'display', 'block');
                } else if (this.checked == false) {
                    domStyle.set(me.showzbz, 'display', 'none');
                }
            });

            on(me.sy, "click", function (evt) {
                if(this.checked == true){
                    me._showsy=true;
                }else if(this.checked == false){
                    me._showsy=false;
                }
            });

            on(me.dw, "click", function (evt) {
                if(this.checked == true){
                    me.showdw.innerHTML=user.depts[0].name;
                    domStyle.set(me.showdw,"display","block");
                }else if(this.checked == false){
                    domStyle.set(me.showdw,"display","none");
                   
                }
            });

            on(me.blc, "click", function (evt) {
                if (this.checked == true) {
                    var blcstr = me.lodsSelect.options[me.lodsSelect.selectedIndex].innerHTML;
                    if (blcstr != '请选择') {
                        me.showblc.innerHTML = "比例尺：" + blcstr;
                        domStyle.set(me.showblc, 'display', 'block');
                    } else {
                        alert(blcstr);
                        this.checked = false;
                    }
                } else if (this.checked == false) {
                    domStyle.set(me.showblc, 'display', 'none');
                }
                // var pos = blcstr.indexOf(":");
                // var res = blcstr.slice(pos+1,blcstr.length);
                // var aaa=Number(res);
                // var aa=aaa/100000;
                // me.showblc.innerHTML=aa+'km';
            });
            on(me.time, "click", function (evt) {
                
                if (this.checked == true) {
                    // var oData = new Date();
                    // var str = '' + oData.getFullYear() + '-' + Number(oData.getMonth() + 1) + '-'+oData.getDate();
                    // me.showtime2.value = oData;
                    domStyle.set(me.showtime, 'display', 'block');
                } else if (this.checked == false) {
                    domStyle.set(me.showtime, 'display', 'none');
                }
            });

            on(me.size, "change", function () {
                me.font_Size = me.size.value;
                domStyle.set(me.showname, "font-size", me.font_Size + 'px');
            });
            on(me.family, "change", function () {
                me.font_Family = me.family.value;
                domStyle.set(me.showname, "font-family", me.font_Family);
            });
            on(me.color, "click", function () {
                me.color2.click();
            });

            // tl
            on(me.tl, "click", function (evt) {
                if (this.checked == true) {
                    domStyle.set(me.showtl, 'display', 'block');
                    me.showtl.style.cssText = me.showtl.style.cssText + 'background-color:'+'white'+' !important';
                    me._getlegendList();
                } else if (this.checked == false) {
                    domStyle.set(me.showtl, 'display', 'none');
                }
            });
            // outType
            on(me.outType, "change", function () {
                var type = me.outType.value;
                if(type =="PNG" || type=="JPG"){
                    me.printBtn.innerHTML="导出";
                    me._outtype="out";
                }else{
                    me.printBtn.innerHTML="打印";
                    me._outtype="print";
                }
                domStyle.set(me.showname, "font-size", me.font_Size + 'px');
            });
        },
        _getlegendList:function(){
            var me=this;
            var TlItem=[];
            var aa=legend._list;
            //过滤图例
            aa.forEach(el=>{
                let filter=appConfig.filterLegent.find(e=>{
                   return e.id==el.id;
                })
                if(filter!=null && filter!=undefined){
                    let legends=filter.legend.map(e=>{
                        return e.value;
                    })
                    let rs=el.legend.filter(e=>{
                       return legends.indexOf(e.value)<0;
                    });
                    rs.forEach(item=>{
                        TlItem.push(item);
                    });
                }
                else {
                    if(el.legend instanceof Array){
                        el.legend.forEach(item=>{
                            TlItem.push(item);
                        });
                    }
                }
            });

            if(me._legendItem.length>0){
                for(var i=0;i<me._legendItem.length;i++){
                    me._legendItem[i].destroy();
                }
            }
            me._legendItem=[];

            // legendList
            if(TlItem.length>0){
                // domStyle.set(me.showtl, 'background-color', 'white !important');
                me.showtl.style.cssText = me.showtl.style.cssText + 'background-color:'+'white'+' !important';
                domStyle.set(me.showtl, 'opacity', '1');

                var count = Math.ceil(TlItem.length/17);
                if(count <= 5){
                    var setwidth = count * 18 ;
                }else {
                    var setwidth = 90;
                }
                domStyle.set(me.tlList,"width",setwidth+"%");
            }
            
            TlItem.forEach(item=>{
               var _legendList=new legendList({data:item}).placeAt(me.showtl);
               _legendList.startup();
               me._legendItem.push(_legendList);
            });

        },

        _initMap2Layers: function () {
            
            var me = this;
            for (var i = 0; i < MapConfig2.layers.length; i++) {
                var _layer = MapConfig2.layers[i];
                if (_layer.layerType === "GroupLayer" && _layer.subLayers instanceof Array && _layer.subLayers.length > 0 && _layer.baseMap) {
                    if(_layer.visible==true){
                        MapFactory._getsubLayers(_layer.subLayers, _layer, MapConfig2, me.mapData2);
                    }
                }
            }
        },
        _setBaseMapSelected: function () {
            var me = this;
            var caption = dojo.byId("baseMapChangeSelect-caption").innerHTML;
            var _mapLayers = me.mapData2.getLayers().array_;
            for (var i = 0; i < _mapLayers.length; i++) {
                var _layer = _mapLayers[i];
                var _values = _layer.values_;
                if (_values.baseMap) {
                    _layer.setVisible(_values.groupCaption === caption);
                }
            }
        },
        getLayersConfig2: function (layerIds, config) {
            
            var me = this;
            var subLayers = config.subLayers;
            for (var i = 0; i < subLayers.length; i++) {
                var _layer = subLayers[i];
                if (_layer.layerType === "GroupLayer" && _layer.subLayers instanceof Array && _layer.subLayers.length > 0 && _layer.thematicMap) {
                    me.getLayersConfig2(layerIds, _layer);
                } else {
                    debugger
                    var op=me.getOpacity(_layer.id);
                    if (layerIds.indexOf(_layer.id) != -1) {
                        if (typeof config.name === "string") {
                            _layer.groupName = config.name;
                        }
                        if (typeof config.caption === "string") {
                            _layer.groupCaption = config.caption;
                        }
                        if (typeof config.baseMap === "boolean") {
                            _layer.baseMap = config.baseMap;
                        }
                        if (typeof config.logo === "string") {
                            _layer.logo = config.logo;
                        }
                        if (typeof config.visible === "boolean") {
                            _layer.visible = config.visible;
                        }
                        // if (typeof config.opacity === "number") {
                        //     _layer.opacity = config.opacity;
                        // }
                        _layer.opacity = op;
                        
                        if (typeof config.thematicMap === "boolean") {
                            _layer.thematicMap = config.thematicMap;
                        }
                        _layer.visible = true;
                        me.layersConfig.push(_layer);
                    }
                }
            }
        },

        // -==================================
        getLayersConfig: function () {
            var me = this;
            var layerIds = [];
            me.layersConfig = [];
            var layers = appConfig.map.getLayers().array_;
            for (var i = layers.length - 1; i >= 0; i--) {
                var layer = layers[i].values_;
                if (layer.visible && layer.thematicMap) {
                    layerIds.push(layer.id);
                }
            }

            var layers2 = Map.map.getLayers().array_;
            for (var i = layers2.length - 1; i >= 0; i--) {
                var layer = layers2[i].values_;
                var source=layers2[i].getSource(); 
                if (layer.visible && layer.id=="Mark_Draw_Layer") {
                    var _layer = new ol.layer.Vector({
                        id: layer.id,
                        source: source,
                        visible: layer.visible,
                        name: layer.name,
                        groupCaption: layer.groupCaption,
                        baseMap: layer.baseMap,
                        thematicMap: layer.thematicMap,
                        style:function (feature) {
                            var geometry=feature.getGeometry();
                            var type=geometry.getType();
                            var pp=feature.getProperties();
                            //选中颜色
                            var s_c="#3fd7f2";
                            var ls=me.layer_config.style;
                            var css;
                            if(pp.labeltype!=undefined){
                                var xx=pp.labeltype.split(";")[0];
                                if(xx=="Text"){
                                    var bz=pp.labeltype.split(";")[1];  
                                    ls[xx].getText().setText(bz);
                                    css=ls[xx];
                                }
                                else{
                                    css=ls[type];
                                }
                                return css;
                            }
                            else{
                               return ls[type];
                            }
                        },
                        
                    });
                    me.mapData.addLayer(_layer);
                }
            }

            for (var i = 0; i < me._MapConfig.layers.length; i++) {
                var _layer = me._MapConfig.layers[i];
                if (_layer.layerType === "GroupLayer" && _layer.subLayers instanceof Array && _layer.subLayers.length > 0) {
                    me.getLayersConfig2(layerIds, me._MapConfig.layers[i]);
                }
            }
        },

        lodsRefresh: function () {
            var me = this;
            me.lodsSelect.innerHTML = "";
            var html = "<option value ='请选择' style='display:none'>请选择</option>";
            me.lods.forEach((lod) => {
                html += " <option  value ='" + lod.resolution + "'>1:" + lod.scale + "</option>";
            });
            me.lodsSelect.innerHTML = html;
        },
        watermarkWord: function () {
            var screenHeight = window.screen.height;
            var watermarkImg = watermarkImg;
            var watermarkText = watermarkText;

            var step = 180 / 480 * screenHeight;
            for (var i = 0; i <= parseInt($("body").height() / step); i++) {
                //$('body').append('');
                var _waterMark = new waterMark({ top: step * (i) }).placeAt(this.water);
                _waterMark.startup();
                this._waterMarkList.push(_waterMark);
            }

        },

        setFont: function () {
            var me = this;

            me.size.innerHTML = '';
            var html = `<option value =${me.font_Size} style='display:none'>${me.font_Size}</option>`;
            for (var i = 18; i < 32; i++) {
                html += `<option value =${i} >${i}</option>`;
            }
            me.size.innerHTML = html;

            me.family.innerHTML = '';
            var html2 = `<option value =${me.font_Family} style='display:none' >${me.font_Family}</option>`;
            for (var i = 0; i < me.fontF_arr.length; i++) {
                html2 += `<option value =${me.fontF_arr[i]} >${me.fontF_arr[i]}</option>`;
            }
            me.family.innerHTML = html2;

        },
        setColor: function () {
            var me = this;
            var obj = dojo.byId("picker");
            var a = Colorpicker.create({
                el: "color-picker",
                color: "#000000",
                change: function (elem, hex) {
                    elem.style.backgroundColor = hex;
                    me.font_Color=hex;
					me.showname.style.cssText = me.showname.style.cssText + 'color:'+me.font_Color+' !important';

					//me.showname.style.setProperty("color", me.font_Color, " !important");;
					
                    //domStyle.set(me.showname, "color",  me.font_Color+" !important");
                }
            })
        },
        backpanel:function(){
            var me=this;
            domStyle.set(me.showbox,"display","none");
            domStyle.set(me.showdw,"bottom","-24px");
            domStyle.set(me.showdw,"left","0px");
            domStyle.set(me.showtime,"bottom","-24px");
            domStyle.set(me.showtime,"right","0px");
            domStyle.set(me.showblc,"bottom","-24px");
            domStyle.set(me.mapContainer,"border","1px solid black");
            domStyle.set(me.down, "margin", "0");

            if (me.visibleDiv.indexOf("moreScreenControl") != -1) {
                domStyle.set(dojo.byId("moreScreenControl"), "display", "block");
            }
            if (me.visibleDiv.indexOf("siderbar-container") != -1) {
                domStyle.set(dojo.byId("siderbar-container"), "display", "block");
            }
            if (me.visibleDiv.indexOf("sidebox") != -1) {
                domStyle.set(dojo.byId("sidebox"), "display", "block");
            }

            if (me.visibleDiv.indexOf("catalog") != -1) {
                domStyle.set(dojo.byId("catalog"), "display", "block");
            }
            me.visibleDiv = [];

            domStyle.set(me.mapContainer, "width", (me.width.value * 2) / 3 + "px");
            domStyle.set(me.mapContainer, "height", (me.height.value * 2) / 3 + "px");
            domStyle.set(me.mapContainer, "margin", "40px");

            var mapBpxHeight = (me.height.value * 2) / 3;
            if (mapBpxHeight < 580) {
                mapBpxHeight = 580;
            }
            domStyle.set(me.MapBox, "left", "calc((100% - " + ((me.width.value * 2) / 3 + 40 * 2 + 260) + "px) / 2)");
            domStyle.set(me.MapBox, "top", "calc((100% - " + (mapBpxHeight + 40 * 3) + "px) / 2)");

            domStyle.set(dojo.byId("mapDiv"), "display", "block");
            domStyle.set(dojo.byId("mapDiv2"), "display", "block");
            domStyle.set(dojo.byId("groupbar"), "display", "block");
            domStyle.set(dojo.byId("openGroup"), "display", "block");

            domStyle.set(dojo.byId("top"), "display", "block");
            domStyle.set(me.BtnBox, "display", "block");
            domStyle.set(me.BoxTitle, "display", "block");
            domStyle.set(me.MapBox, "border", "1px solid #b7b7b7");
            domStyle.set(me.close, "display", "block");

            domStyle.set(me.water,"display","none")

            for (var i = 0; i < me._waterMarkList.length; i++) {
                me._waterMarkList[i].destroy();
            }

            setTimeout(function () {
                me.mapData.updateSize();
                me.mapData2.updateSize();
            }, 100);
        },
        
        getOpacity:function(layerId){
            var op=1;
            for (var i = 0; i < appConfig.map.getLayers().array_.length; i++) {
                var layer = appConfig.map.getLayers().array_[i];
                if (layer.values_.id === layerId) {
                   op =layer.getOpacity();
                   break;  
                }
            }
            return op;
        }

    });
});

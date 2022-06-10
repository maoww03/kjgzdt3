define([
    "dojo/_base/declare",
    "dojo/parser",
    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin",
    "dojo/text!./templates/doConflictTemplates.txt",
    "dojo/on",
    "dojo/dom-style",
    "dojo/dom-class",
    "dojo/dom-attr",
    "FrameWork/MapUtil/MapToolDraw", 
    'FrameWork/MapUtil/Survey',
    './geometryItem', 
    "FrameWork/serviceUtil/workMapService",
    "FrameWork/Setalert/DealFileload",
    "./ViewopenLayer",
    "./ConflictOpera",
    'FrameWork/Loading/Loading',"FrameWork/serviceUtil/ConfigurationService","./ViewThemeLayer_group"
], function (declare, parser, _WidgetBase, _TemplatedMixin, template, on, domStyle, domClass, domAttr, MapToolDraw, Survey, geometryItem,workMapService,DealFileload,ViewopenLayer,ConflictOpera,Loading,ConfigurationService,ViewThemeLayer_group) {
    return declare([_WidgetBase, _TemplatedMixin], {

        templateString: template,
        index: 0,
        _mapTool: null,
        _geom: [],
        _drawLayer: null,
        _resultTabList: [],
        _analysisResult: null,
        _step: 1,
        _exportData:null,
        _highlightedLayer: null,
        _appConfigLAyer:appConfig.map.getLayers().array_,
        _resultLayer: null,
        _differenceType: 3,
        _Survey: null,
        _geometryItemList: [],
        _queryLayer: null,
        _wkt1List:[],
        _userChoiceLayer:[],
        _userThemeLayer:[],
        _userAppend:[],
        _ConflictOpera:null,
        _brief:null,
        _buffergeom:[],
        _buffLayer:null,
        _ThemeLayeritem:[],

        _polygonStyle: new ol.style.Style({     // 原图层 默认多面形中多边形样式 style_setting为false
            fill: new ol.style.Fill({
                color: 'rgba(0,0,0,0.5)'
            }),
            stroke: new ol.style.Stroke({
                color: "BLACK",
                width: 4,
                lineDash: [1, 2, 3, 4, 5, 6]
            })
        }),

        

        constructor: function (args) { },
        postCreate: function () {
            this.inherited(arguments);
        },
        startup: function () {
            var me = this;
            
            dojo.query('.repeatHide').forEach((dom) => {
                domStyle.set(dom,"display",'none');
            })
            dojo.query('.sidebar-tool').forEach((dom) => {
                domStyle.set(dom,"display",'none');
            })
            domStyle.set(me.domNode,"display",'block');

            if (me._started) {
                return;
            }
            parser.parse(me.domNode).then(function () {
                domStyle.set(me.over, 'overflow-y','auto');
                var max=document.body.clientHeight-310;
                domStyle.set(me.over, 'max-height', max+'px');
                me._Survey = new Survey();
                me._emptyArr();

                me._mapTool = new MapToolDraw(appConfig.map, me.getGeo.bind(me));
                me._drawLayer = new ol.layer.Vector({
                    id: "buffLayer",
                    layerTitle: "叠加分析-绘制图层",
                    graphicMap: true,
                    source: new ol.source.Vector({
                        features: []
                    }),
                    zIndex: appConfig.map.getLayers().getLength() + 1
                });
                appConfig.map.addLayer(me._drawLayer);

                // set
                me._setThemLayer();
                me._setThemLayer();



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

                ishas = false;
                for (var i = 0; i < appConfig.map.getLayers().array_.length; i++) {
                    var layer = appConfig.map.getLayers().array_[i];
                    var layer_id = layer.get("id");
                    if (layer_id === "buffLayer") {
                        me._buffLayer = layer;
                        ishas = true;
                        break;
                    }
                }
                if (!ishas) {
                    me._buffLayer = new ol.layer.Vector({
                        id: "buffLayer",
                        layerTitle: "缓冲图形",
                        graphicMap: true,
                        source: new ol.source.Vector({
                            features: []
                        }),
                        zIndex: appConfig.map.getLayers().getLength() + 1
                    });
                    appConfig.map.addLayer(me._buffLayer);
                }


                me._bindEvents();
            });
        },
        _setThemLayer:function(){
            var me=this;
             ConfigurationService.getConflictBycode(regionCode).then(function(re){
                 if(re.code="200"){
                     if(me._ThemeLayeritem.length>0){
                         for(var i=0;i<me._ThemeLayeritem.length;i++){
                             me._ThemeLayeritem[i].destroy();
                         }
                         me._ThemeLayeritem=[];
                     }
                     for(var j=0;j< re.data.length;j++){
                         var _Themeitem = new ViewThemeLayer_group({ _data:  re.data[j] }).placeAt(me.fxlx);
                         _Themeitem.setThemeSelect=me.setThemeSelect.bind(me);
                         me._ThemeLayeritem.push(_Themeitem);
                         _Themeitem.startup();
                     }
                 }else{
                     console.log(re.msg);
                 }
             });
        },
        setThemeSelect:function(data){
           this._userThemeLayer=data;
        },
        _setDrawBtnStyle:function(clickdom,type){
            var me=this;
            dojo.query('.drawbtn').forEach((dom)=>{
                domStyle.set(dom, 'border', '1px solid #dee2eb');
                domStyle.set(dom, 'color', '#333');
            })
            if(clickdom){
                domStyle.set(clickdom, 'border', '1px solid #1c74bb');
                domStyle.set(clickdom, 'color', '#1c74bb');
            }
            domStyle.set(me.upload_selectDom, 'display', 'none');
            domStyle.set(me.layer_selectDom, 'display', 'none');
            domStyle.set(me.buffer_selectDom, 'display', 'none');

           if(type == "upload"){
                domStyle.set(me.upload_selectDom, 'display', 'block');
           }

           if(type == "select"){
            domStyle.set(me.layer_selectDom, 'display', 'block');
           }

           if(type == "draw"){
            domStyle.set(me.buffer_selectDom, 'display', 'block');

           }
        },
        _dealFile:function(re){
            var me=this;
            if(re.msg){
                // renew
                var shpdata=re.data;
                me._emptyArr();
                me._drawLayer.getSource().clear();
                me._buffLayer.getSource().clear();

                me._wkt1List=shpdata.wktList;
                
                // show in map
                shpdata.geomList.forEach(el =>{
                    el.setStyle(me._polygonStyle);
                    me._drawLayer.getSource().addFeature(el);

                });
                me._geom=shpdata.geomList;

                //  show shape msg
                var _checkdata=shpdata.checkdata;
                var checkreStr='';
                for(key in _checkdata){
                    var pd = _checkdata[key].length > 0 ? "是" :"否";
                    if(key == "angle"){
                        checkreStr+=`角度:${pd}; `;
                    }else if(key == "repeat"){
                        checkreStr+=`点重复:${pd}; `
                    }else if(key == "selfIntersectionPoints"){
                        checkreStr+=`自相交:${pd}; `
                    }
                }
                var shapedata = [
                    {type:"面积",value: `${shpdata.area.toFixed(2)}㎡`},
                    {type:"周长", value: `${shpdata.length.toFixed(2)}m`},
                    {type:"图形检查",value:checkreStr }
                ];
                me.showShapeData(shapedata);
            }else{
                alert("txt导入失败");
            }
        },
        getUserChoice:function(data){
            this._userChoiceLayer=[];
            this.layerbox.innerHTML='';
            
            this._userChoiceLayer=data;
            this.showInBox(data);
        },
        showInBox:function(data,clear){
            var me=this;
            if(!clear){
                var innerHTML=``;
            }
            data.forEach(el=>{
                innerHTML+=`<div class="selectLayer-choice choiceAct" layerid="${el.layerid}">${el.caption}</div>`
            })
            me.layerbox.innerHTML=innerHTML;
        },

        _changeDifferStyle:function(type){
            var me=this;
            for (var i = 0; i < me._resultTabList.length; i++) {
                me._resultTabList[i].destroy();
            }
            if (me._analysisResult != null) {
                me._analysisResult.destroy();
                me._analysisResult = null;
            }
            domStyle.set(me.downLoad,"display","none");
            me._resultLayer.getSource().clear();
            me._highlightedLayer.getSource().clear();
            me._differenceType = type;
            domStyle.set(me.difference1, 'border', '1px solid #dee2eb');
            domStyle.set(me.difference2, 'border', '1px solid #dee2eb');
            domStyle.set(me.difference3, 'border', '1px solid #dee2eb');
            domStyle.set(me.difference1, 'background-image', 'none');
            domStyle.set(me.difference2, 'background-image', 'none');
            domStyle.set(me.difference3, 'background-image', 'none');
            if(type==1){
                domStyle.set(me.difference1, 'border', '1px solid #1c74bb');
                domStyle.set(me.difference1, 'background-image', 'url(image/doConflict/typeselected.png)');
            }else if(type==2){
                domStyle.set(me.difference2, 'border', '1px solid #1c74bb');
                domStyle.set(me.difference2, 'background-image', 'url(image/doConflict/typeselected.png)');
            }else if(type==3){
                domStyle.set(me.difference3, 'border', '1px solid #1c74bb');
                domStyle.set(me.difference3, 'background-image', 'url(image/doConflict/typeselected.png)');
            }

           
        },
        _bindEvents: function () {
            var me = this;
            on(me.choseLayer, "click", function () {
                var _View=new  ViewopenLayer({choised:me._userChoiceLayer}).placeAt(dojo.body());
                _View.startup();
                _View.getUserChoice=me.getUserChoice.bind(me);
            });
            on(me.buffer, "click", function () {
                var distance=me.distance.value;
                var geom=me._geom;
                var _buffergeom =  DealFileload.bufferShape(geom[0],distance,me._buffLayer);
                me._buffergeom=[_buffergeom];
                me.getGeo(_buffergeom);
            });

            on(me.draw, "click", function () {
                ClearClickQuery(); // 清除点查
                me._queryLayer = null;
                me._emptyArr();
                me._mapTool.deactivate();
                me._drawLayer.getSource().clear();
                me._buffLayer.getSource().clear();

                me._mapTool.activate("polygon");
                me._setDrawBtnStyle(me.draw,"draw");
            });
            on(me.layerselect, "change", function () {
               var layerid=me.layerselect.value;
               for (var i = me._appConfigLAyer.length - 1; i >= 0; i--) {
                   var _layer = me._appConfigLAyer[i];
                   if (_layer.values_.id == layerid) {
                       me._queryLayer = _layer;
                   }
               }
               me._mapTool.deactivate();
               me._mapTool.activate("point");
            });

            on(me.restore, "click", function () {
                me.select.click();
            });
            on(me.cxxz, "click", function () {
               me._mapTool.activate("point");
            });

            on(me.select, "click", function () {
                me._emptyArr();
                me._setDrawBtnStyle(me.select,"select");
                me._queryLayer = null;

                // setLayerSelect
                var innerHTML=``;
                for (var i = me._appConfigLAyer.length - 1; i >= 0; i--) {
                    var _layer = me._appConfigLAyer[i];
                    if (_layer.values_.thematicMap && _layer.values_.visible) {
                        debugger
                        innerHTML+=`<option value="${_layer.values_.id}">${_layer.values_.name}</option>`;
                        if(me._queryLayer == null){
                            me._queryLayer = _layer;
                        }
                    }
                }

                me.layerselect.innerHTML=innerHTML;

                if (me._queryLayer == null) {
                    alert("没有可选择的图层！");
                    domStyle.set(me.layer_selectDom, 'display', 'none');
                    return;
                } 

                me._mapTool.deactivate();
                me._mapTool.activate("point");
            });

            on(me.upload_txtfile, 'click', function () {
                me.txtfile.click();
            });

            on(me.txtfile, 'change', function () {
                var fdata = new FormData();
                fdata.append("file", this.files[0]);
                var re = DealFileload.uploadTxt(fdata);
                me._dealFile(re);
                me.txtfile.value="";

            });

            on(me.upload_shpfile, 'click', function () {
                me.shpfile.click();
            });

            on(me.shpfile, 'change', function () {
               
                var fdata = new FormData();
                fdata.append("file", this.files[0]);
                var re = DealFileload.uploadShp(fdata);
                me._dealFile(re);
                me.shpfile.value="";
            });

            on(me.upload, 'click', function () {
                me._emptyArr();
                me._queryLayer = null;
                me._setDrawBtnStyle(me.upload,"upload");

            });

            on(me.next, 'click', function () {
                if (me._geom.length==0) {
                    alert("请设置源图形！");
                    return;
                } else if (me._step == 2) {
                    me._userAppend=me._userChoiceLayer.concat(me._userThemeLayer);
                    if (me._userAppend.length == undefined || me._userAppend.length == null || me._userAppend.length==0) {
                        alert("请选择业务类型！");
                        return;
                    }
                }
                me._step++;
                me._setProgress(me._step);
            });

            on(me.pre, 'click', function () {
                me._step--;
                me._setProgress(me._step);
                if(me._ConflictOpera != null){
                    me._ConflictOpera.destroy();
                    me._ConflictOpera=null;
                }

            });

            on(me.clear, 'click', function () {
                me._drawLayer.getSource().clear();
                me._buffLayer.getSource().clear();

                me._emptyArr();
                me._resultLayer.getSource().clear();
                me._buffLayer.getSource().clear();
                me._highlightedLayer.getSource().clear();
                me.showShapeData([]);
            });

            on(me.difference1, 'click', function () {
               me._changeDifferStyle(1);
            });

            on(me.difference2, 'click', function () {
                me._changeDifferStyle(2);
            });

            on(me.difference3, 'click', function () {
                me._changeDifferStyle(3);
            });

            on(me.queryBtn, "click", function () {
                me._highlightedLayer.getSource().clear();
                var analyseLayer=me._userAppend;
                var analyseWltList=me._wkt1List;
                var analyseGeomList=me._geom;
                if(me._buffergeom.length>0){
                    analyseGeomList=me._buffergeom;
                }
                if (me._ConflictOpera != null){
                    me._ConflictOpera.destroy();
                }
                me._ConflictOpera=null;
                me._ConflictOpera=new ConflictOpera({fxtc:analyseLayer,wkt:analyseWltList,geom:analyseGeomList,type:me._differenceType,brief1:me._brief}).placeAt(dojo.body());
                me._ConflictOpera.LoadingCtr=me.LoadingCtr.bind(me);
                me._ConflictOpera.startup();

            });

            on(me.subSidebox_close, 'click', function () {
                me.destroy();
                Resumequery();
            });

            on(me.downLoad,'click',function(){
                workMapService.uploadZip(me._exportData).then(function (result){
                if(result.code=="200"){
                    workMapService.fileDownloadByPath(result.data);
                }else{
                    alert(result.msg);
                }
                })
            });
        },

        _setProgress:function(stepnum){
            var me=this;
            domStyle.set(me.progress, 'width', `calc(calc(423px / 3) * ${stepnum})`);
            domStyle.set(me.pre, 'display', 'none');
            domStyle.set(me.clear, 'display', 'none');
            domStyle.set(me.next, 'display', 'none');
            domStyle.set(me.queryBtn, 'display', 'none');
            domStyle.set(me.progress3_text, 'color', '#1c74bb');
            domStyle.set(me.progress2_text, 'color', '#1c74bb');
            domStyle.set(me.progress1_text, 'color', '#1c74bb');
            dojo.query('.strpCtrl', me.domNode).forEach(function (dom) {
                domStyle.set(dom, 'display', 'none');
            });
            if(stepnum == 1){
                domStyle.set(me.select_progress, 'left', '71.5px');
                domStyle.set(me.clear, 'display', 'block');
                domStyle.set(me.next, 'display', 'block');
                domStyle.set(me.progress2_text, 'color', '#838080');
                domStyle.set(me.progress3_text, 'color', '#838080');
                dojo.query('.group1', me.domNode).forEach(function (dom) {
                    domStyle.set(dom, 'display', 'block');
                });
                me._setDrawBtnStyle();

            }else if(stepnum == 2){
                domStyle.set(me.select_progress, 'left', '212.5px');
                domStyle.set(me.pre, 'display', 'block');
                domStyle.set(me.next, 'display', 'block');
                domStyle.set(me.progress3_text, 'color', '#838080');
                dojo.query('.group2', me.domNode).forEach(function (dom) {
                    domStyle.set(dom, 'display', 'block');
                });
            }else if(stepnum == 3){
                domStyle.set(me.select_progress, 'left', '353.5px');
                domStyle.set(me.pre, 'display', 'block');
                domStyle.set(me.queryBtn, 'display', 'block');
                dojo.query('.group3', me.domNode).forEach(function (dom) {
                    domStyle.set(dom, 'display', 'block');
                });
            }
        },

        getSelectGeo: function (layer, feature) {
            var me=this;
            layer.values_.SpatialQueryFeatures(feature).then(function (result) {
               
                this._drawLayer.getSource().clear();
                me._buffLayer.getSource().clear();

                //for (var i = 0; i < result.features.length; i++) {
                  
                if (result.features.length > 0) {
                    var geom = new ol.Feature({
                        geometry: new ol.geom.MultiPolygon(result.features[0].geometry.coordinates),
                        type: "polygon"
                    });
                    geom.setStyle(this._polygonStyle);
                    geom.setProperties(result.features[0].properties.attributes);
                    this._geom.push(geom);
                    this._drawLayer.getSource().addFeature(geom);

                    var area = this._Survey.surveyArea(result.features[0].geometry.coordinates[0]);
                    var length = this._Survey.surveyCircumference(result.features[0].geometry.coordinates[0]);
                    
                    var shapedata = [
                        {type:"面积",value: `${area.toFixed(2)}㎡`},
                        {type:"周长", value: `${length.toFixed(2)}m`}
                    ];

                    me.showShapeData(shapedata);
                } 
               // }
            }.bind(this));
        },
        showShapeData:function(shapedata){
            var me=this;
            me._brief=shapedata
            for (var i = 0; i < me._geometryItemList.length; i++) {
                me._geometryItemList[i].destroy();
            }
            this._geometryItemList = [];
            shapedata.forEach(el=>{
                var _geometryItem = new geometryItem({ data: el }).placeAt(me.geometryList);
                me._geometryItemList.push(_geometryItem);
                _geometryItem.startup();
            })
        },
        getGeo: function (_feature) {
            var me = this;
            if (this._queryLayer === null) {
                me._geom.push(_feature);
                me._drawLayer.getSource().clear();
                me._buffLayer.getSource().clear();

                me._drawLayer.getSource().addFeature(_feature);
                var polygonArr = me.spArray(2, _feature.getGeometry().flatCoordinates);
                polygonArr.push(polygonArr[0]);
                var area = me._Survey.surveyArea([polygonArr]);
                var length = me._Survey.surveyCircumference([polygonArr]);

                var  wkt=DealFileload.getWktFun(_feature.getGeometry());
                var check=DealFileload.checkShp(wkt);
                var checkreStr='';
                for(key in check){
                    var pd = check[key].length > 0 ? "是" :"否";
                    if(key == "angle"){
                        checkreStr+=`角度:${pd}; `;
                    }else if(key == "repeat"){
                        checkreStr+=`点重复:${pd}; `
                    }else if(key == "selfIntersectionPoints"){
                        checkreStr+=`自相交:${pd}; `
                    }
                }
                var shapedata=[
                    {type :"面积",value:`${area.toFixed(2)}㎡`},
                    {type :"周长",value:`${length.toFixed(2)}m`},
                    {type:"图形检查",value:checkreStr }
                ]

                me.showShapeData(shapedata);
            } else {
                this.getSelectGeo(this._queryLayer, _feature);
            }
            me._mapTool.deactivate();
           
        },
        spArray: function (n, arr) {
            var newArr = [],
                i;
            for (i = 0; i < arr.length;) {
                newArr.push(arr.slice(i, (i += n)));
            }
            
            return newArr;
        },
        _emptyArr:function(){
            var me=this;
            if(me._wkt1List.length > 0){
                me._wkt1List=[];
            }
            if(me._geom.length > 0){
                me._geom =[];
            }
            if(me._buffergeom.length>0){
                me._buffergeom =[];
            }
        },
        LoadingCtr:function(pd){
            if(pd){
                Loading.show(this.domNode);
            }else{
                Loading.hide();
            }
        },
    });
});

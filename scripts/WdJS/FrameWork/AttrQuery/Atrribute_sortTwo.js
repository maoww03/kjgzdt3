define(["dojo/_base/declare",
    "dojo/text!./templates/Atrribute_sortTwo.txt", 
    "dijit/_TemplatedMixin", 
    "dijit/_WidgetBase",
    "dojo/on", 
    "dojo/dom-style", 
    'dojo/parser', 
    "dojo/dom-class", 
    "dojo/dom-attr", 
    "dojo/_base/lang", 
    'dojo/_base/array',
    './specialLayerConfig',
    "FrameWork/AttrConfig",
    'FrameWork/serviceUtil/layerService','./Attribute'],
    function (declare, template, TemplatedMixin, WidgetBase, on, domStyle, parser, domClass, domAttr, lang, array,specialLayerConfig,AttrConfig,layerService,Attribute) {
        return declare([WidgetBase, TemplatedMixin], {
            templateString: template,
            data: null,
            type: null,
            _started: false,
            _annexFileData1:null,
            _annexFileData2:null,
            num:null,
            contentW:null,
            constructor: function (args) {

            },
            postCreate: function () {
                this.inherited(arguments); 
                this.onCreate();
            },
            onCreate: function () {
                var me = this;
            },
            startup: function () {
                var me = this;
                if (this._started) {
                    return;
                }

                parser.parse(this.domNode).then(function () {
                    // me._showSide();
                    me._setlatyerNav();
                    var obj = specialLayerConfig.layers.find(function (obj) { return obj.id == me._id; });
                    me.num=obj.order;
                    
                    if(me.contentW!=null){
                        domStyle.set(me.content,"width",me.contentW);
                    }

                    me.setFeature3(me._data[0]);
                    me._clickSideBtn();
                    me._bindEvent();
                    

                }.bind(this));
                this._started = true;
            },
            _showCon:function(pd){
                var me=this;
                if(pd){
                    domStyle.set(me.sort2_layer_list,"display","block");
                    domStyle.set(me.content,"display","block");
                }else{
                    domStyle.set(me.sort2_layer_list,"display","none");
                    domStyle.set(me.content,"display","none");
                }
            },
            _bindEvent:function(){
                var me=this;
                var btnStatus=false;
                on(me.open_annex, "click", function () {
                    var attrWindow=document.getElementById("attrDiv");
                    var hh=attrWindow.parentNode.clientHeight;
                    domStyle.set(attrWindow.parentNode,"max-height","none");
                    if(btnStatus){
                        btnStatus=false;
                        domStyle.set(me.annex_list,"display","none");
                        domStyle.set(me.annexCon,"display","none");
                        domStyle.set(me.annex_btn,"background-image","url(image/attr/group.png)");
                        domStyle.set(me.open_annex,"background-image","url(image/attr/dakai.png)");
                        domAttr.set(me.open_annex,"title","打开附件");
                        var hh2=attrWindow.clientHeight;
                        domStyle.set(attrWindow.parentNode,"height",hh2+"px");
                       
                    }else{
                        btnStatus=true;
                        domStyle.set(me.annex_list,"display","block");
                        domStyle.set(me.annexCon,"display","block");
                        domStyle.set(me.annex_btn,"background-image","url(image/attr/open.png)");
                        domStyle.set(me.open_annex,"background-image","url(image/attr/guanbi.png)");
                        domAttr.set(me.open_annex,"title","关闭附件");
                        domStyle.set(attrWindow.parentNode,"height",(hh+120)+"px");
                    }
                })
             
            },
            _showSide:function(){
                var me=this;
                var obj = specialLayerConfig.layers.find(function (obj) { return obj.id == me._id; });
                var num=obj.order;
                me.sort2_layer_list.innerHTML='';
                for(var i=0;i<specialLayerConfig.layers.length;i++){
                    var layer=specialLayerConfig.layers[i];
                    if(layer.type == "content_sort2"){
                        if(num ==layer.order){
                            me.sort2_layer_list.innerHTML += `<div  class="sort2_layer" num=${layer.order}  style="border-bottom: 2px solid #1972b9;color: #1972b9;">${layer.text}</div>`
    
                        }else{
                            // me.contentBtn.innerHTML+=`<div class="contentSideBtn" num=${layer.order} > ${layer.text}</div>`;
                            me.sort2_layer_list.innerHTML += `<div  class="sort2_layer" num=${layer.order}>${layer.text}</div>`;
                        }
                    }
                }
            },
            _setlatyerNav:function(){
                
                var me=this;
                var obj = specialLayerConfig.layers.find(function (obj) { return obj.id == me._id; });
                var num=obj.order;
                var innerHTML='';
                for(var i=0;i<specialLayerConfig.layers.length;i++){
                    var layer=specialLayerConfig.layers[i];
                    if(layer.type == "content_sort2"){
                        layerService.getLayersMsg(layer,me._data1,null).then(function(result){
                            if(result.code=='200'){
                                if(result.data.length != 0){
                                    if(num ==layer.order){
                                        innerHTML += `<div  class="sort2_layer" num=${layer.order}  style="border-bottom: 2px solid #1972b9;color: #1972b9;">${layer.text}</div>`
                                    }else{
                                        innerHTML += `<div  class="sort2_layer" num=${layer.order}>${layer.text}</div>`;
                                    }
                                }else{
                                    innerHTML +=`<div  class="sort2_layer_none" >${layer.text}</div>`;
                                }
                            }else{
                                if(num ==layer.order){
                                    innerHTML += `<div  class="sort2_layer_fake" num=${layer.order}  style="border-bottom: 2px solid #1972b9;color: #1972b9;">${layer.text}</div>`
                                }else{
                                    innerHTML +=`<div  class="sort2_layer_none" >${layer.text}</div>`;
                                }
                                console.log(result.msg+"_getData");
                            }
                        })
                    }
                   
                }
                me.sort2_layer_list.innerHTML=innerHTML;
            },
            // ------------content
            setFeature3:function(feature){
                var me = this;
                if(feature==undefined){
                    me.content.innerHTML = '暂无数据';
                    domStyle.set(me.annex_btn,'display','none');
                    return;
                }

                var slbh=feature.slbh;
                if(slbh == null || slbh == undefined || slbh == ' '){
                    domStyle.set(me.annex_btn,'display','none');
                }else{
                    domStyle.set(me.annex_btn,'display','block');
                    slbh='GHSGC20120007';
                    me._setAnnexFolder(slbh);
                }

                var obj = AttrConfig.layers.find(function (obj) {return obj.id == me._id;});
                if (obj == undefined) {
                    alert("AttrConfig中该图层配置未找到");
                    return;
                }
                var innerHTML = "";

                obj.field.forEach((f) => {
                    if (me._details == true) {

                        if (f.name.toLowerCase().indexOf("objectid") < 0 && f.name.toLowerCase().indexOf("shape") < 0&& f.name.toLowerCase().indexOf("st_area_sh") < 0  &&f.name.toLowerCase().indexOf("st_length_") < 0) {
                            
                            if(!me._allfiled){
                                var aa=feature[f.name];
                                if(aa == null || aa == ""){
                                    return;
                                }
                            }
                            // alias
                            innerHTML += `<tr> <td>${f.alias||f.name}</td>`;
                            
                            // value
                            if (f.type == "numeric" || f.type == "number" && String(feature[f.name]).indexOf(".") > 0) {
                                innerHTML += `<td> ${Number(feature[f.name])}</td></tr>`;
                            }else if (f.type == "date" && String(feature[f.name]).indexOf("T") > 0) {
                                innerHTML += `<td> ${feature[f.name].split("T")[0]}</td></tr>`;
                            }else {
                                innerHTML += `<td> ${(feature[f.name] || "")}</td></tr>`;
                            }
                        }
                    } else {
                        if (f.name.toLowerCase().indexOf("objectid") < 0 && f.name.toLowerCase().indexOf("shape") < 0 && f.show != undefined && f.show == 0&& f.name.toLowerCase().indexOf("st_area_sh") < 0  &&f.name.toLowerCase().indexOf("st_length_") < 0) {
                            
                            if(!me._allfiled){
                                var aa=feature[f.name];
                                if(aa == null || aa == ""){
                                    return;
                                }
                            }

                            // alias
                            innerHTML += `<tr> <td>${f.alias||f.name}</td>`;
                            // value
                            if (f.type == "numeric" || f.type == "number" && String(feature[f.name]).indexOf(".") > 0) {
                                innerHTML += `<td> ${Number(feature[f.name])}</td></tr>`;
                            }else if (f.type == "date" && String(feature[f.name]).indexOf("T") > 0) {
                                innerHTML += `<td> ${feature[f.name].split("T")[0]}</td></tr>`;
                            }else {
                                innerHTML += `<td> ${(feature[f.name] || "")}</td></tr>`;
                            }
                        }
                    }
    
                });
                me.content_table2.innerHTML = innerHTML;
            },
            _clickSideBtn:function(){
                var me=this;
                dojo.query(".sort2_layer", me.domNode).forEach((dom) => {
                    on(dom, "click", function () {
                        // annex_list annexCon
                        domStyle.set(me.annex_list,"display","none");
                        domStyle.set(me.annexCon,"display","none");
                        dojo.query(".sort2_layer", me.domNode).forEach((dom) => {
                            domStyle.set(dom,"color","black");
                            domStyle.set(dom,"border-bottom","none");
                        })
                        domStyle.set(dom,"color","#1972b9");
                        domStyle.set(dom,"border-bottom","2px solid #1972b9");

                        var mark=domAttr.get(dom,'num');
                        mark=Number(mark);
                        
                        for(var i=0;i<specialLayerConfig.layers.length;i++){
                            var obj=specialLayerConfig.layers[i];
                            if(obj.type == "content_sort2"){
                                if(obj.order==mark){
                                    me._getData(obj,me._data1);
                                 }
                            } 
                        }
                    });
                });
            },
            
            _getData:function(obj,data1){
                var me=this;
                
                layerService.getLayersMsg(obj,data1,null).then(function(result){
                    if(result.code=='200'){
                        // 定位
                        var wkt = result.data[0].shape;
                        me._highlightLayer.getSource().clear();
                        var feature =new ol.format.WKT().readFeature(wkt);
                        var geom = new ol.Feature({geometry: feature.getGeometry(),type: "polygon"  });
                        geom.setStyle(me._style);
                        // appConfig.map.getView().setCenter(ol.extent.getCenter(geom.getGeometry().getExtent()));
                        me._highlightLayer.getSource().addFeature(geom);

                        me.setFeature3(result.data[0]);
                    }else{
                        me.content.innerHTML = '暂无数据';
                        console.log(result.msg+"_getData");
                    }
                })
            },

            // ---------Annex
            _clickAnnexFolderBtn:function(slbh){
                var me=this;
                dojo.query(".annexList", me.domNode).forEach((dom) => {
                    on(dom, "click", function () {
                        dojo.query(".annexList", me.domNode).forEach((dom) => {
                            // color: white; background-color: rgb(25,117,187);border-radius: 2px;
                            domStyle.set(dom,"color","black");
                            domStyle.set(dom,"border-bottom","none");
                        })
                        domStyle.set(dom,"color","#1972b9");
                        domStyle.set(dom,"border-bottom","2px solid #1972b9");
                        var fileName=domAttr.get(dom,'title');
                        me._getAnnexFolderFile(slbh,fileName);
                    });
                });
            },
            _clickDownload:function(slbh,fileName){
                var me=this;
                dojo.query(".downloadBtn", me.domNode).forEach((dom) => {
                    on(dom, "click", function () {
                        var name=domAttr.get(dom,'title');
                        // name=encodeURI(name);
                        layerService.AnnexDownload(slbh,fileName,name);
                    });
                });
            },
            _setAnnexFolder:function(slbh){
                var me=this;
                var innerHTML='';
                layerService.getFolder(slbh).then(function(result){
                    if(result.code=='200'){
                        if(result.data.length != 0){
                            me._annexFileData1=result.data;
                            var count=0;
                            for(var i=0;i<result.data.length;i++){
                                var folderName=result.data[i].fileName;
                                var folderName_val=folderName.substring(2,folderName.length);
                                var isHave=result.data[i].isHaveFile;
                                if(isHave == true && count==0){
                                    innerHTML+=`<div  class="annexList"  style="border-bottom: 2px solid #1972b9;color: #1972b9;" title='${folderName}' >${folderName_val}</div>`;

                                    count=1;
                                    me._getAnnexFolderFile(slbh,folderName);
                                }else if(isHave == true){
                                    innerHTML+=`<div  class="annexList" title='${folderName}' >${folderName_val}</div>`;

                                }
                            }
                            me.annex_list.innerHTML=innerHTML;
                            me._clickAnnexFolderBtn(slbh);
                        }else{
                            domStyle.set(me.annex_btn,'display','none');
                        }
                    }else{
                        domStyle.set(me.annex_btn,'display','none');
                        console.log(result.msg+'_setAnnexFolder');
                    }
                })
            },
            _getAnnexFolderFile:function(slbh,fileName){
                var me=this;
                var innerHTML='';
                layerService.getFolderFile(slbh,fileName).then(function(result){
                    if(result.code=='200'){
                        
                        me._annexFileData2=result.data;
                        for(var i=0;i<result.data.length;i++){
                            var name=result.data[i].fileName;
                            innerHTML += `<div class="downloadBtn"  title='${name}'>${name}</div>`;
                        }
                        me.annexCon.innerHTML=innerHTML;
                        me._clickDownload(slbh,fileName);

                    }else{
                        console.log(result.msg+'_getAnnexFolderFile');
                    }
                })
            },
            
        });
    });


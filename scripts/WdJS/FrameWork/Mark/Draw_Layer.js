define(['dojo/on', 'dojo/query', 'dojo/dom-attr', "./mark", "FrameWork/MapUtil/Map","FrameWork/serviceUtil/markService"],
    function ( on, query, domAttr,mark,Map,markService){
        var util = {
            user_id:user.id,
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
            load_layer:function(){
                var me=this;
                var layer_state=me.exist_layer();
                // 图层判断是否生成_防止重复
                if(layer_state==false){
                    var vectorSource = new ol.source.Vector();
                    var layer=new ol.layer.Vector({
                        source: vectorSource,
                        visible: me.layer_config.visible,
                        id: me.layer_config.id,
                        name: me.layer_config.caption,
                        style:function (feature) {
                            var geometry=feature.getGeometry();
                            var type=geometry.getType();
                            var pp=feature.getProperties();
                            //选中颜色
                            var s_c="#3fd7f2";
                            var ls=me.layer_config.style;
                            var css;
                            //定位绘图功能
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
                            //画图用
                            else{
                               return ls[type];
                            }
                        },
                    }
                    );
                    layer.setProperties({graphicMap: true,layerTitle: "坐标"});
                    Map.map.addLayer(layer);
                }
            },
            //判断绘制图层是否存在
            exist_layer:function(){
                var me=this;
                var layer_arr=Map.map.getLayers().array_;
                var layer;
                for(var i=0;i<layer_arr.length;i++){
                    var obj_id=layer_arr[i].values_["id"];
                    if(obj_id=="Mark_Draw_Layer"){
                        layer=Map.map.getLayers().item(i);
                    }
                }
                if(layer!=null && layer!=undefined && layer!=""){
                    return true;
                }
                else{
                    return false;
                }
            },
            //draw_type
            draw_type:null,
            //选择事件交互方式
            select:null,
            //画图工具
            add_draw_Interaction:function(draw_type,free){
                var me=this;
                var layer_state=me.exist_layer();
                // 图层判断是否生成
                if(layer_state==false){
                    me.load_layer();
                }
                //图形绘制
                if(draw_type!==null && draw_type!==undefined){
                    me.clear_draw();
                    me.clear_select();
                    var layer_arr=Map.map.getLayers().array_;
                    var layer;
                    for(var i=0;i<layer_arr.length;i++){
                        var obj_id=layer_arr[i].values_["id"];
                        if(obj_id=="Mark_Draw_Layer"){
                            layer=Map.map.getLayers().item(i);
                        }
                    }
                    var source=layer.getSource();
                    //添加画图的功能
                    me.draw_obj=new ol.interaction.Draw({
                        source:source,
                        type:draw_type,
                        freehand:free,
                        style:new ol.style.Style({
                            stroke:new ol.style.Stroke({
                                color:"#0099ff",
                                width:2
                            }),
                            fill:new ol.style.Fill({
                                color:"rgba(72,39,240,0.7)"
                            }),
                        }),
                    });
                    Map.map.addInteraction(me.draw_obj);
                    // on(me.draw_obj,"drawstart",function(e){
                    //     // source.clear();
                    //     // buffer_source.clear();
                    // });
                    //用于图形造缓冲
                    on(me.draw_obj,"drawend",function(e){
                        var tx=e.feature.getGeometry();
                        // e.feature.setProperties({layerTitle: "坐标",graphicMap: true});
                        //对象图形重新绘制
                        var dx=dojo.query("div[dx_lx='mark']");
                        if(dx.length>0){
                            dx[0].remove();
                        }
                        function rm_ft(){
                            me.remove_ft(e.feature);
                        }
                        var box=new mark({tx:tx,draw_type:me.draw_type,handle:"add",Map:me}).placeAt(document.body);
                        box.remove_feature=rm_ft.bind(me);
                        box.resh_mark=me.resh_mark.bind(me);
                        box.startup();
                        //事件设置
                        me.clear_draw();
                        me.start_select();
                    });
                    me._CancleDraw();
                    
                }
            },
            clear_draw:function(){
                var me=this;
                if(me.draw_obj!==null && me.draw_obj!==undefined){
                    Map.map.removeInteraction(me.draw_obj);
                    // var layer_arr=Map.map.getLayers().array_;
                    // for(var i=0;i<layer_arr.length;i++){
                    //     var obj_id=layer_arr[i].values_["id"];
                    //     if(obj_id=="Mark_Draw_Layer"){
                    //         Map.map.getLayers().item(i).getSource().clear();
                    //     }
                    // }
                }
            },
            //点击工具事件
            clear_select:function(){
                var me=this;
                if(Map._selectSingleClick!=null && Map._selectSingleClick!=undefined){
                    Map.map.removeInteraction(Map._selectSingleClick);
                }
            },
            start_select:function(){
                var me=this;
                me.clear_select();
                Map._selectSingleClick = new ol.interaction.Select();
                Map.map.addInteraction(Map._selectSingleClick);
                me.select=Map._selectSingleClick;
            },
            //加载所有的标记
            load_all_mark:function(id){
                var me=this;
                var layer_arr=Map.map.getLayers().array_;
                for(var i=0;i<layer_arr.length;i++){
                    var obj_id=layer_arr[i].values_["id"];
                    if(obj_id=="Mark_Draw_Layer"){
                        var cl=Map.map.getLayers().item(i).getSource().getFeatures();
                        if(cl!=null && cl!=undefined){
                            if(cl.length>0){
                                return;
                            }
                        }
                    }
                }
                markService.get_all_mark(id).then(function(out){
                    if(out.code==200){
                        var list=out.data;
                        if(list.length>0){
                            for(var i=0;i<list.length;i++){
                                me.set_geometry(list[i]);
                            }
                        }
                    }
                    me.start_select();
                });
            },
            //加载图形
            get_geometry_coordinates:function(strings,type) {
                var arr =[];
                var sj_arr=strings.split(",");
                if (type=="Point" || type=="Text") {
                    for(var i=0;i<sj_arr.length;i++){
                        arr.push(parseFloat(sj_arr[i]));
                    }
                } 
                else if (type=="LineString"){
                    for(var i=0;i<sj_arr.length;i=i+2){
                        var data=[parseFloat(sj_arr[i]),parseFloat(sj_arr[i+1])];
                        arr.push(data);
                    }
                }
                else if(type=="Polygon"){
                    var sj=[];
                    for(var i=0;i<sj_arr.length;i=i+2){
                        var zj_i=[parseFloat(sj_arr[i]),parseFloat(sj_arr[i+1])];
                        sj.push(zj_i);
                    }
                    arr.push(sj);
                }
                return arr;
            },
            set_geometry:function(data){
                var me=this;
                if(data!=null){
                    var type=data.labeltype.split(";")[0];
                    var arr=me.get_geometry_coordinates(data.labelgeometry,type);
                    var feature=new ol.Feature();
                    data.select_zt=0;
                    feature.setId(data.id);
                    data.layerTitle="坐标";
                    data.graphicMap=true;
                    // e.feature.setProperties({layerTitle: "坐标",graphicMap: true});
                    if(type=="Point"){
                        var point=new ol.geom.Point(arr);
                        center=arr;
                        feature.setGeometry(point);
                        feature.setProperties(data);
                    }
                    else if(type=="LineString"){
                        center=arr[0];
                        var line=new ol.geom.LineString(arr);
                        feature.setGeometry(line);
                        feature.setProperties(data);
                    }
                    else if(type=="Polygon"){
                        center=arr[0][0];
                        var pg=new ol.geom.Polygon(arr);
                        feature.setGeometry(pg);
                        feature.setProperties(data);
                    }
                    else if(type=="Text"){
                        var point=new ol.geom.Point(arr);
                        center=arr;
                        feature.setGeometry(point);
                        feature.setProperties(data);
                    }
                    var layer_arr=Map.map.getLayers().array_;
                    for(var i=0;i<layer_arr.length;i++){
                        var obj_id=layer_arr[i].values_["id"];
                        if(obj_id=="Mark_Draw_Layer"){
                            Map.map.getLayers().item(i).getSource().addFeature(feature);
                        }
                    }
                }
            },
            //设置点击事件
            // add_select:function(){
            //     var me=this;
            //     if(me.select!=null && me.select!=undefined && me.select!=""){
            //         Map.map.removeInteraction(me.select);
            //     }
            //     // var css=new ol.style.Style({
            //     //     image:new ol.style.Circle({
            //     //         radius:9,
            //     //         // fill:new ol.style.Fill({color:"#0099ff"}),
            //     //         fill:new ol.style.Fill({color:"#00ffff"}),
            //     //         stroke:new ol.style.Stroke({color:"white",width:"1"})
            //     //     })
            //     // });
            //     var Layers_name=["Mark_Draw_Layer"];
            //     var Layers_arr=[];
            //     var layer_arr=Map.map.getLayers().array_;
            //     for(var i=0;i<layer_arr.length;i++){
            //         var obj_id=layer_arr[i].values_["id"];
            //         for(var t=0;t<Layers_name.length;t++){
            //             if(obj_id==Layers_name[t]){
            //                 Layers_arr.push(Map.map.getLayers().item(i));
            //             }
            //         }
            //     }
            //     me.select=new ol.interaction.Select({
            //         condition: ol.events.condition.click,
            //         // style:function(feature){
            //         //     // console.log(feature.style_.getImage().getRadius());
            //         //     return [css];
            //         // },
            //         layers:Layers_arr
            //     });
            //     Map.map.addInteraction(me.select);
            //     me.select.on("select",function(e){
            //         var obj=e.target.getFeatures().getArray();
            //         if(obj.length>0){
            //         //     var yy=dojo.byId("property_box");
            //         //     yy.innerHTML="";
            //         //     var zhi=obj[0].values_;
            //         //     // var dx=new browse_box({ck_id:id,data:zhi}).placeAt(yy);
            //         //     // dx.startup();
            //         }
            //         //清除在该元素内所有feature
            //         // me.select.getFeatures().clear();
            //     });
            // },
            //暂时用不到
            add_select_feature:function(ft){
                var me=this;
                if(me.select!=null && me.select!=undefined && ft!=null && ft!=undefined){
                    var sz=me.select.getFeatures();
                    sz.clear();
                    sz.insertAt(0,ft);
                }
            },
            // remove_select:function(){
            //     var me=this;
            //     if(me.select!=null && me.select!=undefined && me.select!=""){
            //         Map.map.removeInteraction(me.select);
            //     }
            // },
            //删除图形
            remove_feature:function(id){
                var me=this;
                var layer_arr=Map.map.getLayers().array_;
                for(var i=0;i<layer_arr.length;i++){
                    var obj_id=layer_arr[i].values_["id"];
                    if(obj_id=="Mark_Draw_Layer"){
                        var sc=Map.map.getLayers().item(i).getSource();
                        var ft=sc.getFeatureById(id);
                        if(ft!=null && ft!=undefined){
                            sc.removeFeature(ft);
                        }
                    }
                }
            },
            remove_ft:function(ft){
                var me=this;
                var layer_arr=Map.map.getLayers().array_;
                for(var i=0;i<layer_arr.length;i++){
                    var obj_id=layer_arr[i].values_["id"];
                    if(obj_id=="Mark_Draw_Layer"){
                        var sc=Map.map.getLayers().item(i).getSource();
                        if(ft!=null && ft!=undefined){
                            sc.removeFeature(ft);
                        }
                    }
                }
            },
            //刷新标记图层
            resh_mark:function(){
                var me=this;
                var layer_arr=Map.map.getLayers().array_;
                for(var i=0;i<layer_arr.length;i++){
                    var obj_id=layer_arr[i].values_["id"];
                    if(obj_id=="Mark_Draw_Layer"){
                        var sc=Map.map.getLayers().item(i).getSource();
                        sc.clear();
                    }
                }
                me.load_all_mark(me.user_id);
            },
            _CancleDraw:function(){
                // catalog-目录
                var me=this;
                // on(dojo.byId("catalog"),"click",function(){
                //     me.clear_draw();
                //     me.clear_select();
                // })

                // class=drawCancle-图层搜索-切换
                on(dojo.query(".drawCancle"),"click",function(){
                    me.clear_draw();
                    me.clear_select();
                })
    
                // top?-标题
                // on(dojo.byId("top"),"click",function(){
                //     me.clear_draw();
                //     me.clear_select();
                // })

                // baseMapChangeContent?-底图切换
                on(dojo.byId("baseMapChangeContent"),"click",function(){
                    me.clear_draw();
                    me.clear_select();
                })
                
              },
        }
        return util;
    });
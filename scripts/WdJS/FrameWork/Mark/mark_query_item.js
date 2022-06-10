define(["dojo/_base/declare", "dojo/text!./templates/mark_query_item.txt", "dijit/_TemplatedMixin",
"dijit/_WidgetBase", "dojo/on", "dojo/dom-style", 'dojo/parser', "dojo/dom-class", "dojo/dom-attr",
    "dojo/_base/lang", 'dojo/_base/array', 'FrameWork/MapUtil/Map','FrameWork/serviceUtil/markService',"./mark","./Draw_Layer"],
    function (declare, template, TemplatedMixin, WidgetBase, on, domStyle, parser, domClass, domAttr,
        lang, array,Map,markService,mark,Draw_Layer){
        return declare([WidgetBase, TemplatedMixin], {
            templateString: template,
            data: null,
            user_id:1,
            constructor: function (args) {
                var me=this;
            },
            postCreate: function () {
                this.inherited(arguments);
                this.onCreate();
            },
            onCreate: function () {
                var me = this;
            },
            startup: function (){
                var me = this;
                if (this._started){
                    return;
                }
                parser.parse(this.domNode).then(function () {
                    this.bindEvent();
                    me.print_data();
                }.bind(this));             
                this._started = true;
            },
            bindEvent:function(){
                var me=this;   
                on(me.domNode,"click",function(){
                    var s=dojo.query("div[class='click_line M_select']");
                    if(s.length>0){
                        domAttr.set(s[0],"class","click_line");
                    }
                    domAttr.set(this,"class","click_line M_select");
                    me.get_feature();
                    // me.set_geometry();
                    // var xx=new mark({data:me.data,handle:"browse"}).placeAt(contain);
                    // xx.resh_data=me.resh_data.bind(me);
                    // xx.startup();
                });
                on(me.delete,"click",function(e){
                    e.stopPropagation();
                    if(confirm("请确认是否删除该标记")){
                        markService.deleteMark(me.data.id).then(function(result){
                            if(result.code==200){
                                Draw_Layer.remove_feature(me.data.id);
                                me.destroy();
                                me.resh_data();
                                alert("删除成功");
                            }
                        });
                    }
                });
                on(me.edite,"click",function(e){
                     var dx=dojo.query("div[dx_lx='mark']");
                     if(dx.length>0){
                         dx[0].remove();
                     }
                     var box=new mark({handle:"modify",data:me.data,Map:Draw_Layer}).placeAt(document.body);
                     box.resh_data=me.resh_data.bind(me);
                     box.modify_feature=me.modify_feature.bind(me);
                     box.startup();
                }); 
            }, 
            //修改对象的属性，可能点击时候用到
            modify_feature:function(data){
                var me=this;
                var layer_arr=Map.map.getLayers().array_;
                for(var i=0;i<layer_arr.length;i++){
                    var obj_id=layer_arr[i].values_["id"];
                    if(obj_id=="Mark_Draw_Layer"){
                        var sc=Map.map.getLayers().item(i).getSource();
                        var ft=sc.getFeatureById(me.data.id);
                        ft.setProperties(data);
                    }
                }
            } ,
            print_data:function(){
                var me=this;
                if(me.data!=null){
                    for(key in me.data){
                        if(me[key]){
                            domAttr.set(me[key],"title",me.data[key]);
                            me[key].innerHTML=me.data[key];
                        }
                        if(key=="labeltype"){
                            var labeltype=me.data[key].split(";")[0];
                            if(labeltype=="Point"){
                                me.m_type.innerHTML="点";
                            }
                            else if(labeltype=="LineString"){
                                me.m_type.innerHTML="线";
                            }
                            else if(labeltype=="Polygon"){
                                me.m_type.innerHTML="面";
                            }
                            else if(labeltype=="Text"){
                                me.m_type.innerHTML="文本";
                            }
                        }
                    }
                }
            },
            resh_data:function(){
            },
            get_feature:function(){
                var me=this;
                //标记被删除的情况下——执行加载数据
                Draw_Layer.load_all_mark(me.user_id);
                var layer_arr=Map.map.getLayers().array_;
                var source;
                for(var i=0;i<layer_arr.length;i++){
                    var obj_id=layer_arr[i].values_["id"];
                    if(obj_id=="Mark_Draw_Layer"){
                        source=Map.map.getLayers().item(i).getSource();
                    }
                }
                var ft=source.getFeatureById(me.data.id);
                if(ft==null || ft==undefined){
                   return alert("数据已重新加载,请重新点击");
                }
                Draw_Layer.add_select_feature(ft);
                var type=ft.getGeometry().getType();
                var arr=ft.getGeometry().getCoordinates();
                if(type=="Point"){
                    center=arr;
                }
                else if(type=="LineString"){
                    center=arr[0];
                }
                else if(type=="Polygon"){
                    center=arr[0][0];
                }
                Map.map.getView().setCenter(center);
            }
        });
    });
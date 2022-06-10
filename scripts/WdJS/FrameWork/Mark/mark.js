define(["dojo/_base/declare", "dojo/text!./templates/mark.txt", "dijit/_TemplatedMixin",
"dijit/_WidgetBase", "dojo/on", "dojo/dom-style", 'dojo/parser', "dojo/dom-class", "dojo/dom-attr",
    "dojo/_base/lang", 'dojo/_base/array','FrameWork/serviceUtil/markService'],
    function (declare, template, TemplatedMixin, WidgetBase, on, domStyle, parser, domClass, domAttr,
        lang, array,markService) {
        return declare([WidgetBase, TemplatedMixin], {
            templateString: template,
            data: null,
            data_frame:{
                "labelgeometry": "",
                "labelname": "",
                "labelnote": "",
                "labeltype": "",
                "userid": user.id
            },
            //geometry图形_用于设置图形参数
            draw_type:null,
            //操作状态
            handle:null,

            Map:null,
            constructor: function (args) {
                var me=this;
                me.tx=null;
                me.data=null;
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
                if (this._started) {
                    return;
                }
                parser.parse(this.domNode).then(function (){
                    if(me.handle!="add" && me.handle!="modify"){
                        domStyle.set(me.qx,"display","none");
                        domStyle.set(me.save,"display","none");
                        domStyle.set(me.delete,"display","block");
                    }
                    if(me.draw_type=="Text"){
                        domStyle.set(me.bz_box,"display","block");
                    }
                    this.bindEvent();
                    me.print_data();
                }.bind(this));             
                this._started = true;
            },
            bindEvent:function(){
                var me=this;
                on(me.qx,"click",function(){
                    me.remove_feature();
                    me.destroy();
                    _checkQuery=true;
                    _attrQueryTool.activate("point");
                });
                on(me.cancel,"click",function(){
                    me.remove_feature();
                    me.destroy();
                    _checkQuery=true;
                    _attrQueryTool.activate("point");
                });
                on(me.save,"click",function(){
                    if(me.handle=="add"){
                        me.add_mark();
                    }
                    if(me.handle=="modify"){
                        me.modify_mark();
                    }
                });
                on(me.delete,"click",function(){
                    if(confirm("请确认是否删除该标记")){
                        markService.deleteMark(me.data.id).then(function(result){
                            if(result.code==200){
                                me.destroy();
                                me.resh_data();
                                alert("删除成功");
                            }
                        });
                    }
                });
            },
            //取消绘制的图形
            remove_feature:function(){},
            //修改图形数据——用于修改时更改属性
            modify_feature:function(){},
            //刷新绘制图形_用于添加时刷新数据
            resh_mark:function(){},
            add_mark:function(){
                var me=this;
                if(me.tx!=null){
                    for(key in me.data_frame){
                        if(me[key]){
                            if(key=="labelname" && (me[key].value==null || me[key].value==undefined || me[key].value=="")){
                                return alert("请输入名称");
                            }
                            if(me[key].value!=null && me[key].value!=undefined && me[key].value!=""){
                                me.data_frame[key]=me[key].value;
                            }
                        }
                    }
                    if(me.draw_type=="Text" && (me.bz.value==null || me.bz.value==undefined || me.bz.value=="")){
                        return alert("请输入标注");
                    }
                    me.data_frame["labelgeometry"]=""+me.tx.getCoordinates()+"";
                    if(me.draw_type=="Text"){
                        me.data_frame["labeltype"]=me.draw_type+";"+me.bz.value;
                    }
                    else{
                        me.data_frame["labeltype"]=me.draw_type;
                    }
                    markService.add_mark(dojo.toJson(me.data_frame)).then(function(result){
                        if(result.code==200){   
                            me.resh_mark();
                            me.destroy();
                            return alert("添加成功");
                        }
                    });
                }
            },
            modify_mark:function(){
                var me=this;
                if(me.data!=null){
                    for(key in me.data){
                        if(me[key]){
                            if(key=="labelname" && (me[key].value==null || me[key].value==undefined || me[key].value=="")){
                                return alert("请输入名称");
                            }
                            if(me[key].value!=null && me[key].value!=undefined && me[key].value!=""){
                                me.data[key]=me[key].value;
                            }
                        }
                    }
                    var type=me.data.labeltype.split(";")[0];
                    if(type=="Text"){
                        me.data["labeltype"]=type+";"+me.bz.value;
                    }
                    markService.modify_mark(dojo.toJson(me.data)).then(function(result){
                        if(result.code==200){
                            me.destroy();
                            me.modify_feature(me.data);
                            me.resh_data();
                            return alert("修改成功");
                        }
                    });
                }
            },
            print_data:function(){
                var me=this;
                if(me.data!=null){
                    for(key in me.data){
                        if(me[key]){
                            me[key].value=me.data[key];
                        }
                        if(key=="labeltype"){
                            var type=me.data.labeltype.split(";")[0];
                            if(type=="Text"){
                                domStyle.set(me.bz_box,"display","block");
                                var v=me.data.labeltype.split(";")[1];
                                me.bz.value=v;
                            }
                        }
                    }
                }
            },
            resh_data:function(){},
        });
    });
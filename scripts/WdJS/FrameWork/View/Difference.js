define([
    'dojo/_base/declare',
    'FrameWork/Command',
    'dojo/_base/lang',
    "./Difference_Manage",
    "FrameWork/MapUtil/Map",
    "dojo/on"
],
    function (declare, Command, lang, Difference_Manage,Map,on) {
        return declare('FrameWork.View.Difference', [Command],{
            frame: null,
            enabled: false,
            constructor: function (args) {
                lang.mixin(this, args);
                this.inherited('constructor', arguments);
                this.creat_stick();
            },
            onCreate: function (e) {
                this.inherited('onCreate', arguments);
            },
            onClick: function (target) {
                var me=this;
                if (this.enabled) {
                    this.inherited('onClick', arguments);
                    if (this.enabled) {
                        this.inherited('onClick', arguments);
                        var gn=dojo.query("div[obj_id='single_difference']");
                        if(gn.length>0){
                            return alert("单屏差异工具已开启");
                        }
                        else{
                            dojo.byId("dpcy").display="block";
                            var xx=new Difference_Manage().placeAt(document.body);
                            xx.startup();
                        }
                    }
                }
            },
            creat_stick:function(){
                var me=this;
                var dx_sate=dojo.byId("dpcy");
                if(dx_sate==undefined || dx_sate==null){
                    var stick_move=0;
                    var div=document.createElement("div");
                    div.setAttribute("class","difference_stick");
                    div.setAttribute("onselectstart","return false");
                    div.setAttribute("id","dpcy");
                    div.innerHTML='<div class="top"></div><div class="center"></div><div class="bottom"></div>';
                    document.body.appendChild(div);
                    //卷屏移动事件
                    var dx=document.getElementById("dpcy");
                    //样式事件
                    on(dx,"mousemove",function(){
                        var cls=dojo.query("div",this);
                        if(cls.length>0){
                            for(var i=0;i<cls.length;i++){
                                cls[i].style.background="rgba(218,218,218,0.5)";
                            }
                        }
                    });
                    on(dx,"mouseout",function(){
                        var cls=dojo.query("div",this);
                        if(cls.length>0){
                            for(var i=0;i<cls.length;i++){
                                cls[i].style.background="#dadada";
                            }
                        }
                    });
                    //移动事件
                    on(dx,"mousedown",function(e){
                        console.log("2");
                        stick_move=1;
                    }); 
                    on(document.body,"mousemove",function(e){
                        if(stick_move=="1"){
                            var max_w=document.body.clientWidth;
                            var offsetX=e.pageX;
                            if(e.pageX>(max_w-20)){
                                offsetX=max_w-20;
                            }
                            dx.style.left=offsetX+"px";
                            document.body.style.cursor="cursor:ew-resize;";
                            Map.map.render();  
                        }
                    });
                    on(document.body,"mouseup",function(e){
                        stick_move=0;
                        document.body.style.cursor="default";
                    });
                }
            }
        });
    });
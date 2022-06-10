define(["dojo/_base/declare", "dojo/text!./templates/mark_query.txt", "dijit/_TemplatedMixin",
"dijit/_WidgetBase", "dojo/on", "dojo/dom-style", 'dojo/parser', "dojo/dom-class", "dojo/dom-attr", "dojo/_base/lang", 'dojo/_base/array', './Draw_Layer','FrameWork/serviceUtil/markService',"./mark_query_item","./paginationTool", "FrameWork/serviceUtil/workMapService",'FrameWork/Loading/Loading',],
    function (declare, template, TemplatedMixin, WidgetBase, on, domStyle, parser, domClass, domAttr,lang, array,Draw_Layer,markService,mark_query_item,paginationTool,workMapService,Loading){
        return declare([WidgetBase, TemplatedMixin], {
            templateString: template,
            data: null,
            page:1,
            rows:5,
            user_id:user.id,
            search_name:null,
            //0为禁止，1位开启
            scroll_stop:0,
            _paginationTool:null,
            _tmp:false,
            _showLoading:false,
            _time:null,
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
                if (this._started) {
                    return;
                }
                parser.parse(this.domNode).then(function () {
                    this.bindEvent();
                    //加载画图工具
                    Draw_Layer.load_layer();
                    me.get_query(me.page,me.rows,me.user_id,me.search_name);
                }.bind(this));             
                this._started = true;
            },
            bindEvent:function(){
                var me=this;
                on(me.cancel,"click",function(){
                    me.destroy();
                    _checkQuery=true;
                    _attrQueryTool.activate("point");
                    
                });
                on(me.query,"click",function(){
                    me.page=1;
                    me.search_name=me.query_input.value;
                    me.get_query(me.page,me.rows,me.user_id,me.search_name);
                });
                on(me.query_input,"keydown",function(e){
                    if(e.keyCode=="13"){
                        me.page=1;
                        me.search_name=me.query_input.value;
                        me.get_query(me.page,me.rows,me.user_id,me.search_name);
                    }
                });
                on(me.selectBj, "click", function (e) {
                    if(me._tmp){
                        domStyle.set(me.show,"display","none");
                        me._tmp=false;
                    }else{
                        domStyle.set(me.show,"display","block");
                        me._tmp=true;
                    }
                });
                // outshp
                on(me.outshp, "click", function (e) {
                    // 导出
                    debugger
                    Loading.show(me.domNode);
                    me._time=setInterval(()=>{
                        if(me._showLoading == false){
                            me._showLoading == true;
                            Loading.hide();
                            domStyle.set(me.show,"display","none");
                            me.stopTime();
                        }
                    },1000);
                    markService.get_all_mark(me.user_id).then(function(out){
                        if(out.code==200){
                            var list=out.data;
                            if(list.length>0){
                                var exportData=me.doExport2(list);
                                workMapService.uploadZip(exportData).then(function (result){
                                    if(result.code=="200"){
                                        workMapService.fileDownloadByPath(result.data);
                                        me._hideLoading=true;
                                    }else{
                                        alert(result.msg);
                                    }
                                    })
                            }else{
                                alert("无标记导出");
                            }
                        }
                    });
                  

                    
                });
                on(me.outimg, "click", function (e) {
                    // 跳到地图打印
                    var flag = false;
                    array.forEach(appConfig.btns, function (btn) {
                        if (btn.id === "dtdy") {
                            flag = !flag;
                            if (lang.isFunction(btn.fun.onClick)) {
                                btn.fun.onClick("地图打印");
                                domStyle.set(me.show,"display","none");
                            }
                        }
                    }.bind(this));
                    if (!flag) {
                        try {
                            require([ "FrameWork/Print/Print"], function (btn) {
                                var b = new btn({ enabled: true, frame: _frame, name: "dtdy" });
                                appConfig.btns.push({ id: "dtdy", fun: b });
                                b.onClick("地图打印");
                                domStyle.set(me.show,"display","none");
                            }.bind(this));
                        }
                        catch (e) {
                            alert(e);
                        }
                    }
                });
                

                //滚动事件_滚动起码要到整个高度的中间
                // on(me.content,"scroll",function(e){
                //     var max_h=this.offsetHeight;
                //     var top=this.offsetTop;
                //     var bl=top/max_h;
                //     if(me.scroll_stop=="0"){
                //         if(bl>0.5){
                //             me.page+=1;
                //             me.get_query();
                //         }
                //     }
                // });
            },
            stopTime: function () {
                var me = this;
                clearInterval(me._time);
            },
            doExport2:function(re){
                var me=this;
                var arr2=[];
                re.forEach(el=>{
                    var labeltype=el.labeltype;
                    var feature=new ol.Feature();
                    if(el.labelgeometry!=null){
                       var type=labeltype.split(";")[0];
                       var arr=me.get_geometry_coordinates(el.labelgeometry,type);
                        if(type=="Point" || type=="Text"){
                           var geom=new ol.geom.Point(arr);
                        }else if(type=="LineString"){
                            var geom=new ol.geom.LineString(arr);
                        }else if(type=="Polygon"){
                            var geom=new ol.geom.Polygon(arr);
                        }
                        var wkt = new ol.format.WKT().writeGeometry(geom, {
                            dataProjection: "EPSG:4549",
                            featureProjection: "EPSG:4549"
                        });
                    }
                    
                    var graphical ={
                        attributes: [
                        {
                            propertyName:'id',
                            value:el.id
                        },
                        {
                            propertyName:'labelname',
                            value:el.labelname
                        },
                        {
                            propertyName:'labelnote',
                            value:el.labelnote
                        },
                        {
                            propertyName:'labeltype',
                            value:el.labeltype
                        },
                        {
                            propertyName:'userid',
                            value:el.userid
                        }],
                        wkt: wkt,
                        };
                    arr2.push(graphical);
                });
                return arr2;
            },
            get_geometry_coordinates:function(strings,type) {
                var arr =[];
                var sj_arr=strings.split(",");
                if (type=="Point" || type=="Text") {
                    for(var i=0;i<sj_arr.length;i++){
                        arr.push(parseFloat(sj_arr[i]));
                    }
                } else if (type=="LineString"){
                    for(var i=0;i<sj_arr.length;i=i+2){
                        var data=[parseFloat(sj_arr[i]),parseFloat(sj_arr[i+1])];
                        arr.push(data);
                    }
                } else if(type=="Polygon"){
                    var sj=[];
                    for(var i=0;i<sj_arr.length;i=i+2){
                        var zj_i=[parseFloat(sj_arr[i]),parseFloat(sj_arr[i+1])];
                        sj.push(zj_i);
                    }
                    arr.push(sj);
                }
                return arr;
            },
          
            get_query:function(page,rows,id,name){
                var me=this;   
                me.page=page;
                var pageD={
                    "pageNum":me.page,
                    "pageSize": rows
                  };
                me.content.innerHTML="";
                markService.mark_page(dojo.toJson(pageD),id,name).then(function(out){
                    if(out.code==200){
                        var list=out.data;
                        if(list.length>0){
                            for(var i=0;i<list.length;i++){
                                var item=new mark_query_item({data:list[i]}).placeAt(me.content);
                                item.resh_data=me.resh_data.bind(me);
                                item.startup();
                            }
                            if (me._paginationTool == null) {
                                me._paginationTool = new paginationTool({ now: me.page, total:out.total, user_id:me.user_id,rows: me.rows, where: me.search_name}).placeAt(me.pagination);
                                me._paginationTool.getData = me.get_query.bind(me);
                                me._paginationTool.startup();
                            }
                            else {
								me._paginationTool.now=me.page;
                                me._paginationTool.page_init(out.total);
                            }
                        }
                        else{
                            if (me._paginationTool != null) {
                                me._paginationTool.page_init(0);
                            }       
                        }
                    }
                    else{
                        if (me._paginationTool != null) {
                            me._paginationTool.page_init(0);
                        }       
                    }
                });
            },
            resh_data:function(){
                var me=this;
                me.get_query(me.page,me.rows,me.user_id,me.search_name);
            }
        });
    });
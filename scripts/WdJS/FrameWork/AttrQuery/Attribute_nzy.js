define(["dojo/_base/declare",
    "dojo/text!./templates/Attribute_nzy.txt", 
    "dijit/_TemplatedMixin", 
    "dijit/_WidgetBase",
    "dojo/on", 
    "dojo/dom-style", 
    'dojo/parser', 
    "dojo/dom-class", 
    "dojo/dom-attr", 
    "dojo/_base/lang", 
    'dojo/_base/array',
    "FrameWork/AttrConfig",
    'FrameWork/serviceUtil/layerService',
    "FrameWork/serviceUtil/AttrbutesxkService"

],
    function (declare, template, TemplatedMixin, WidgetBase, on, domStyle, parser, domClass, domAttr, lang, array,AttrConfig,layerService,AttrbutesxkService) {
        return declare([WidgetBase, TemplatedMixin], {
            templateString: template,
            data: null,
            type: null,
            _started: false,
            _annexFileData1:null,
            _annexFileData2:null,
            num:null,

            // 
            _getTableDatal:[],
            

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
                    // 获取数据
                    // me._gettableData();
                    // me._shownzyData();
                    var aa=me._obj;
                    var bb=me._data;
                    var cxjg=me._data.properties.attributes||me._data.properties;
                    var xmtable,pctable;
                    if(me._sorce == "l"){
                        xmtable="gl_jsydbp_nzyxm_l_qs_t_latest_1_0";
                        pctable="gl_jsydbp_nzypcxm_l_qs_t_latest_1_0";
                    }else if(me._sorce == "x"){
                        xmtable="gl_jsydbp_nzyxm_qs_t2_x";
                        pctable="gl_jsydbp_nzypcxm_qs_t2_x";

                    }

                    var dataArr=[
                        {
                            id:me._obj.id,
                            tablename:"查询结果",
                            data:[cxjg],
                        },
                        {
                            id:xmtable,
                            tablename:"项目信息",
                            data:null
                        },
                        {
                            id:pctable,
                            tablename:"批次信息",
                            data:null
                        }]
                    

                    me._getTableDatal=dataArr;

                    me._showntableName(me._getTableDatal); //显示tab
                    me.setFeature3(me._getTableDatal[0].data[0],me._obj.id); //显示查询结果
                    me._gettableDatafun( me._sorce); //获取表数据 新地政


                    // var feature=me._data;
                }.bind(this));
                this._started = true;
            },
            _gettableDatafun:function(sorce){
                var me=this;
                var xmsy=me._data.properties.data.nzyxmbs || "null"; //nzyxmbs
               

                if(sorce == "l"){
                    debugger
                    var dodata={
                        "nzyxmbh":xmsy,
                        "isCheckAuth":0
                    };
                    dodata=dojo.toJson(dodata);
                    AttrbutesxkService.getTable_XM4(dodata ).then(function(re){
                        if( re.code == "000000"){
                            if(re.data.data.length > 0){
                                me._getTableDatal[1].data=re.data.data;
                                var dodata2={
                                    "xmbh":re.data.data[0].dabh,
                                    "isCheckAuth":0
                                }
                                AttrbutesxkService.getTable_PC4(dojo.toJson(dodata2)).then(function (result) {
                                    if(result.code == "000000"){
                                        if(result.data.data.length > 0){
                                            me._getTableDatal[2].data=result.data.data;
                                        }else{
                                            me._getTableDatal[2].data=[{"xmmc":"无数据"}];
                                        }
                                        // me._getTableDatal[2].data=result.data.data;
                                        me._bindEvent();
                                    }else{
                                        console.log(result.msg);
                                    }
                                })
                            }else{
                                me._getTableDatal[1].data=[{"xmmc":"无数据"}];
                                me._getTableDatal[2].data=[{"xmmc":"无数据"}];
                            }
                        }else{
                            console.log(re.msg);
                        }
                    })
                }else if(sorce == "x"){
                    var dodata={
                        "xm_guid":xmsy,
                        "isCheckAuth":0
                    };
                    dodata=dojo.toJson(dodata);
                    AttrbutesxkService.getTable_XM3(dodata ).then(function(re){
                        if( re.code == "000000"){
                            if(re.data.data.length > 0){
                                me._getTableDatal[1].data=re.data.data;
                            }else{
                                me._getTableDatal[1].data=[{"xmmc":"无数据"}];
                            }
                            AttrbutesxkService.getTable_PC3(dodata).then(function (result) {
                                if(result.code == "000000"){
                                    if(result.data.data.length > 0){
                                        me._getTableDatal[2].data=result.data.data;
                                    }else{
                                        me._getTableDatal[2].data=[{"xmmc":"无数据"}];
                                    }
                                    // me._getTableDatal[2].data=result.data.data;
                                    me._bindEvent();
                                }else{
                                    console.log(result.msg);
                                }
                            })
    
                        }else{
                            console.log(re.msg);
                        }
                    })
                    
                }
                
               
            },

            _showntableName:function (dataArr) {
                var me=this;
                var conn=0;
                var innerHTML=''; 
                domStyle.set(me.sort3_layer_list,"display","block");
                domStyle.set(me.content,"display","block");
                dataArr.forEach(el =>{
                    if(conn == 0){
                       innerHTML += `<div  class="sort3_layer" value=${el.tablename}  style="border-bottom: 2px solid #1972b9;color: #1972b9;">${el.tablename}</div>`
                        conn =1;
                    }else {
                        innerHTML += `<div  class="sort3_layer" value=${el.tablename}  >${el.tablename}</div>`;
                    }
                });
                me.sort3_layer_list.innerHTML=innerHTML;
            },

           
            _bindEvent:function(){
                var me=this;
                var btnStatus=false;
                dojo.query(".sort3_layer", me.domNode).forEach((dom) => {
                    on(dom, "click", function () {
                        dojo.query(".sort3_layer", me.domNode).forEach((dom) => {
                            domStyle.set(dom,"color","black");
                            domStyle.set(dom,"border-bottom","none");
                        })
                        domStyle.set(dom,"color","#1972b9");
                        domStyle.set(dom,"border-bottom","2px solid #1972b9");

                        var tablename=domAttr.get(dom,'value');
                        me._getTableDatal.forEach(el =>{
                            if(el.tablename == tablename){
                                me.setFeature3(el.data[0],el.id);
                            }
                        })

                    });
                });
            },
           
         
            // ------------content
            setFeature3:function(feature,id){
                var me = this;
                var showmsg={
                    "id":id,
                    "data":feature,
                    "pd":true
                }
                me.updataenlarge(showmsg);
                
                if(feature==undefined){
                    me.content.innerHTML = '暂无数据';
                    domStyle.set(me.annex_btn,'display','none');
                    return;
                }

                var obj = AttrConfig.layers.find(function (obj) {return obj.id == id;});
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
            updataenlarge:function(data){

            }
            
        });
    });


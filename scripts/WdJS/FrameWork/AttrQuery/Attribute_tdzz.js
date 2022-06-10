define(["dojo/_base/declare",
    "dojo/text!./templates/Attribute_tdzz.txt", 
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
    "FrameWork/serviceUtil/queryService",
    "FrameWork/Setalert/Setalert",
    'FrameWork/Loading/Loading',
],
    function (declare, template, TemplatedMixin, WidgetBase, on, domStyle, parser, domClass, domAttr, lang, array,AttrConfig,queryService,Setalert,Loading) {
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

            _querydata:null,
            

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
                    
                    // 1-构造要查询的表
                    me._querydata= me._getQueryMsg();
                 
                    // 2-显示
                    me._showntableName( me._querydata); //显示tab
                    me.setFeature3( me._querydata[0].data[0],me._obj.id); //显示查询结果
                    // 3-切换时候查询查询数据
                    me._bindEvent2();
                 

                }.bind(this));
                this._started = true;
            },
            _getQueryMsg:function(){
                var me=this;
                var tablemsg=me._obj.tablemsg;
                var cxjg=me._data.properties.attributes||me._data.properties;
                var  dataArr=[
                    {
                        id:me._obj.id,
                        tablename:"查询结果",
                        data:[cxjg],
                        querydata:null,
                    },
                ]
                tablemsg.forEach(el=>{
                    var search_value=me._data.properties.data[el.glzd] || "null"; //关联字段
                    var onedata={
                        id:el.table,
                        tablename:el.text,
                        data:null,
                        querydata:{
                            "database":el.database,
                            "schema":el.schema,
                            "table":el.table,
                            "search_field":el.search_field,
                            "search_value":search_value
                        }
                    }
                    dataArr.push(onedata);
                })
                return dataArr;
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

            _bindEvent2:function(){
                var me=this;
                dojo.query(".sort3_layer", me.domNode).forEach((dom) => {
                    on(dom, "click", function () {
                        dojo.query(".sort3_layer", me.domNode).forEach((dom) => {
                            domStyle.set(dom,"color","black");
                            domStyle.set(dom,"border-bottom","none");
                        })
                        domStyle.set(dom,"color","#1972b9");
                        domStyle.set(dom,"border-bottom","2px solid #1972b9");

                        var tablename=domAttr.get(dom,'value');

                        me._querydata.forEach(el =>{
                            if(el.tablename == tablename){
                                me._querytable2(tablename);
                            }
                        })

                    });
                });
            },

            _querytable2:function(tablename){
                var me=this;
                var obj=me._querydata.find(function(obj){
                    return obj.tablename == tablename;
                })
                var quermsg= obj.querydata;
                var data=obj.data;
                if(data == null ){
                    if(quermsg!=null || quermsg != undefined ){
                        Loading.show(me.domNode);
                        queryService.tyquery(quermsg.database,quermsg.schema,quermsg.table,quermsg.search_field,quermsg.search_value).then(function(re){
                            if(re.code == 200){
                                debugger
                                if(re.data.length > 0){
                                    obj.data=re.data;
                                }else{
                                    obj.data=[{"xmmc":"无数据"}];
                                }
                                me.setFeature3(obj.data[0],obj.id);
                                Loading.hide();
                            }
                        },function(err){
                            Loading.hide();
                            console.log("AttrQuery/Attribute_tdzz.js"+err);
                            Setalert.rompt("查询失败","alert-danger");
                        })
                    }else{

                    }
                }else{
                    me.setFeature3(obj.data[0],obj.id);
                }
                
            },

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
                    // domStyle.set(me.annex_btn,'display','none');
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


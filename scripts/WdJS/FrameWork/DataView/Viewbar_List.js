define(["dojo/_base/declare", "dojo/text!./templates/Viewbar_List.txt", "dijit/_TemplatedMixin", "dijit/_WidgetBase", 
"dojo/on", "dojo/dom-style", 'dojo/parser', "dojo/dom-class", "dojo/dom-attr", "dojo/_base/lang", 'dojo/_base/array',
 'FrameWork/serviceUtil/queryService',"./ViewbarList_config",'FrameWork/Loading/Loading',"FrameWork/ServiceSearch/LayerConfig"],
    function (declare, template, TemplatedMixin, WidgetBase, on, domStyle, parser, domClass, domAttr, lang, array,
        queryService,ViewbarList_config,Loading,LayerConfig) {
        return declare([WidgetBase, TemplatedMixin], {
            templateString: template,
            _pagesize:9,
            _title:null,
            _order:[],
            _dbmsg:null,
            _nowpage:1,
            _totalnum:null,
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
                var me=this;
                if (this._started) {
                    return;
                }
                parser.parse(this.domNode).then(function () {
                    var data=me._data;
                    var query=data.queryUrl.split("=");
                    var dbname=query[query.length-1];
                    dbname=dbname.split(":");
                    dbname=dbname[0];
                    var obj2 =LayerConfig.layers.find(function(obj2){ return obj2.id == data.id; })
                    var _layer=data.id;
                    if(obj2){
                        _layer=obj2.querytable;
                    }
                    me._dbmsg={
                        layername:data.caption,
                        table:_layer,
                        dbname:dbname,
                        schema:"public",
                    }
                    me._nowpage=1;
                    me.getData(me._nowpage,true)
                    me.bindEvent();
                }.bind(this));
                this._started = true;
            },

            bindEvent:function(){
                // close
                var me=this;
                on(me.close, "click",  function () {
                    me.destroy();
                }.bind(this));

                on(me.first,"click",function(){
                    me._nowpage=1;
                    me.getData(me._nowpage,false);
                })
                on(me.pre,"click",function(){
                    if(me._nowpage > 1){
                        me._nowpage=me._nowpage-1;
                        me.getData(me._nowpage,false);

                    }
                })
                on(me.next,"click",function(){
                    if(me._nowpage < me._totalnum){
                        me._nowpage=me._nowpage+1;
                        me.getData(me._nowpage,false);

                    }
                })
                on(me.last,"click",function(){
                    if(me._nowpage!=me._totalnum){
                        me._nowpage=me._totalnum;
                        me.getData(me._nowpage,false);
                    }
                })
            }, 

            getData:function(pagenum,first){
                var me=this;
                var dbmsg=me._dbmsg;
                Loading.show(me.domNode);
                var limit=me._pagesize;
                var orderdata={
                    "order":me._order
                }
                var offset=(pagenum-1)*me._pagesize;
                debugger
                queryService.queryTable(dbmsg.dbname, dbmsg.schema,dbmsg.table,limit,offset,orderdata).then(function (result) {
                    if (result.code == 200) {
                        // 页数
                        me.now_page.innerHTML=pagenum
                        // 表格
                        if(first){
                            me.setpage(); //页数
                            me._showfiled(dbmsg.table); //表头
                            me.clickpx(); //排序
                        }
                        me._showList(result.data,me._title,dbmsg.table);
                    }
                    Loading.hide();
                },function(){Loading.hide();})
          },
            // 显示表头
            _showfiled:function(layerid){
                
                var me=this;
                var getAttrConfig = getAttr();
                var obj = getAttrConfig.layers.find(function (obj) {
                    return obj.id == layerid;
                });
                 // table-head
                var titleNames='<tr style="color: #515761;">';
                titleNames+=`<th style='width:100px;'>序号</th>`;
                for(var i=0;i<obj.field.length;i++){
                    var fields=obj.field[i].alias;
                    if(fields!="" && fields!=null && fields!=undefined){
                        var setwidth= obj.field[i].width;
                        titleNames+=`<th class="Listorder" style="text-align: center;width:${setwidth};" fieldname="${obj.field[i].name}" order="order"> ${fields} </th>`;
                    }
                }
                titleNames+="</tr>";
                me.head_table.innerHTML=titleNames;
                me._title=obj.field;
                var setwidth=me._title.length*90;
                domStyle.set(me.content,"width",setwidth+"px");
                // content_table
            },
            // 显示表内容
            _showList:function(data,titles,layerid){
                var me=this;
                // obj.field
                let listIndex=1;
                me.content_table.innerHTML="";

                data.forEach(e =>{
                    var list="<tr>";
                    list+="<td >"+listIndex+"</td>";
                    titles.forEach(t=>{
                        var color = me._colorpd(t.name,layerid,e);
                        if(t.alias!="" && t.alias!=null && t.alias!=undefined){
                            if(e[t.name]){
                                list+=`<td style="background: ${color};" >${e[t.name]}</th>`;
                            }
                            else{
                                list+=`<td  style="background: ${color};"> </th>`;
                            }
                        }
                    })
                    list+="</tr>";
                    me.content_table.innerHTML+=list;
                    listIndex++;
                })
            },

            // 颜色判断
            _colorpd:function(filedname,layerid,data){
                var color = "#efefef"
                var obj2=null;
                var obj=null;
                obj=ViewbarList_config.Layers.find(function(obj){
                    return obj.id==layerid;
                })
                if(obj != undefined && obj != null){
                    obj2=obj.colorfiled.find(function(obj2){
                        return obj2.filed==filedname;
                    });
                }
                
               
                if(obj2 != undefined && obj2 != null){
                    var pd = data[obj2.filed2];
                    if(pd == "是"){
                        color = "#70f670";
                    }else if(pd == "否"){//red
                        color = "#fc5d5d";
                    }
                }
                return color;
               
            },
            // 排序
            clickpx:function(){
                 // 点击排序
                 var me=this;
                 dojo.query(".Listorder").forEach((dom) => {
                    on(dom, "click", function () {
                        var fieldname = domAttr.get(dom, 'fieldname');
                        var px = domAttr.get(dom, 'order');
                        var neworder=[];
                        for(var i=0;i<me._order.length;i++){
                            if(me._order[i][0] != fieldname){
                                neworder.push(me._order[i]);
                            }
                        }

                        if(px== "order"){
                            var px = domAttr.set(dom, 'order','ASC');
                            domStyle.set(dom, 'background', 'url(image/catalog/sx.png) right bottom no-repeat');
                            var neworder2=[fieldname,"ASC"];
                            neworder.push(neworder2);
                        }else if(px== "ASC"){
                            var px = domAttr.set(dom, 'order','DESC');
                            domStyle.set(dom, 'background', 'url(image/catalog/jx.png) right bottom no-repeat');
                            var neworder2=[fieldname,"DESC"];
                            neworder.push(neworder2);
                        }else if(px== "DESC"){
                            var px = domAttr.set(dom, 'order','order');
                            domStyle.set(dom, 'background', 'url(image/catalog/px.png) right bottom no-repeat');
                        }
                        // neworder
                        me._order=neworder;
                        me._nowpage=1;
                        me.getData(me._nowpage,false);
                    });
                });
            },
            setpage:function(){
                var me=this;
                var dbmsg=me._dbmsg;
                queryService.queryTableCount(dbmsg.dbname, dbmsg.schema,dbmsg.table).then(function(re){
                    if (re.code == 200) {
                        var total=re.data[0].count;
                        me._totalnum=Math.ceil(total/me._pagesize);
                        me.total_page.innerHTML=`共  ${ me._totalnum}  页`;
                    }
                })
            }
                
              
        });
    });


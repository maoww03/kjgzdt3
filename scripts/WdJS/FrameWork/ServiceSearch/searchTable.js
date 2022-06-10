define([
    "dojo/_base/declare",
    "dojo/parser",
    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin",
    "dojo/text!./templates/searchTable.txt",
    "dojo/on",
    "dojo/dom-style",
    "dojo/dom-class",
    "dojo/dom-attr",
    "dojo/dom-construct",
    "FrameWork/serviceUtil/ConfigurationService",
    "FrameWork/serviceUtil/workMapService",
    "../AttrConfig",
    'FrameWork/Loading/Loading',
    "FrameWork/serviceUtil/searchService",
    "FrameWork/serviceUtil/collectService"

  ], function (declare, parser, _WidgetBase, _TemplatedMixin, template, on, domStyle, domClass, domAttr, domConstruct,
    ConfigurationService,workMapService,AttrConfig,Loading,searchService, collectService) {
      return declare([_WidgetBase, _TemplatedMixin], {
          templateString: template,

          data: null,
          selectTable:null,

          _getConflictConfig:null,
          _tabCon:[],
          _nowTab:[],
          _nowpage:1,
          _totalnum:null,
          _exportsTab:null,
          isSelect: false,
          searchTextDom:null,
          _type:null,
          layerArr:[],
          tableAttr:[],
          _pagesize:20,
          _result:null,
          _total:null,

          _title:null,
          _body:null,
          _titles:null,
          constructor: function (args) { 
            this.layerArr=[]
         
          },
          postCreate: function () {
              this.inherited(arguments);
          },
          startup: function () {
              var me = this;
              if (me._started) {
                  return;
              }
              parser.parse(me.domNode).then(function () {
                  
                //   {name:obj.name,layerid: obj.id,where:where}
                me._showTab();

                var fistLayer=me._data[0];
                me._layerId=fistLayer.layerid;
                this._getTabTable(fistLayer,me._nowpage);
                me._nowTab=fistLayer;
                me._bindEvents();     
              }.bind(this));
          },
          //1-显示需要查询的图层
          _showTab:function(){
            var me=this;
          
            var innerhtml=' <div  class="nzyResultTab_img" id="kzTab" status="open"> </div>';
            var coun=0;
            me._data.forEach(el => {
                if(coun == 0){
                    innerhtml += `<div class="nzyResultTab" style="background-color:#f5f1f1" value="${el.layerid}"> ${el.name}</div>`;
                    coun =1;
                }else{
                    innerhtml += `<div class="nzyResultTab" style="background-color:#ffffff"  value="${el.layerid}"> ${el.name}</div>`;
                }
            });
            me.nzy_Tab.innerHTML=innerhtml;
          },

        //2-显示当前tab的具体页数数据
          _getTabTable(layerdata,pagenum){
            var me=this;
            var layerid=layerdata.layerid;
            var getAttrConfig = getAttr();
            var obj = getAttrConfig.layers.find(function (obj) {
                return obj.id == layerid;
            });
            // table-head
            var titleNames='<tr style="color: #515761;">';
            titleNames+='<th>序号</th>';
            for(var i=0;i<obj.field.length;i++){
                var fields=obj.field[i].alias;
                if(fields!="" && fields!=null && fields!=undefined){
                    titleNames+='<th style="width:150px;height:35px;">'+fields+'</th>';
                }
            }
            titleNames+="</tr>";
            me.head_table.innerHTML=titleNames;
            me._title=titleNames;
            var setwidth=obj.field.length*90;
            domStyle.set(me.content,"width",setwidth+"px");
            me.getData(layerdata,pagenum,obj.field);
            me._titles=obj.field

          },
           getData:function(layerdata,pagenum,titles){
                var me=this;
                Loading.show(me.domNode);
                searchService.querty_Feature(layerdata.layerid, layerdata.where,pagenum,me._pagesize).then(function (result) {
                    if (result.code == 200) {
                        me._result=result.data;
                        me._total=result.total;
                        // 页数
                        me._totalnum=Math.ceil(result.total/me._pagesize);
                        me.total_page.innerHTML=`共  ${ me._totalnum}  页`;
                        me.total_sum.innerHTML=`共${me._total}条数据`
                        me.now_page.innerHTML=pagenum
                        // 表格content_table
                        let listIndex=1;
                        me.content_table.innerHTML="";
                        debugger
                        result.data.forEach((e,index) =>{
                            var list=`<tr class="onemsg" location=${index}>`;
                            list+=`<td style="width:100px;" >${listIndex}</td>`
                            titles.forEach(t=>{
                                if(t.alias!="" && t.alias!=null && t.alias!=undefined){
                                    if(e[t.name]){
                                        list+='<td style="width:150px;">'+e[t.name]+'</th>';
                                    }
                                    else{
                                        list+='<td style="width:150px;"> </th>';
                                    }
                                }
                            })
                            list+="</tr>";
                            me.content_table.innerHTML+=list;
                            listIndex++;
                        })
                    }
                    Loading.hide();
                    me._tableclick();
                },function(){Loading.hide();})
          },
          _tableclick:function(){
            var me=this;
            dojo.query(".onemsg",me.domNode).forEach((dom) => {
                on(dom, "click", function () {
                    debugger
                    var location=domAttr.get(dom, 'location');
                    var data=me._result[location];
                    me.showAttr(data,me._layerId);
                })
                on(dom, "mouseover", function () {
                  domStyle.set(dom,"background","#f5f1f1");
                })
                on(dom, "mouseout", function () {
                    domStyle.set(dom,"background","#ffffff");

                })
            })
          
            
          },
          _bindEvents: function () {
              var me = this;
              on(me.close, "click", function () {
                  me.destroy();
              });

              dojo.query('.nzyResultTab').forEach((dom) => {
                  on(dom, "click", function () {

                      dojo.query('.nzyResultTab').forEach((dom2) => {
                          domStyle.set(dom2, "background-color", "#ffffff");
                      });
                      var lid = domAttr.get(dom, "value");
                      var layerdata = me._data.find(function (obj) {
                          return obj.layerid == lid;
                      });
                      me._layerId = layerdata.layerid;
                      me._getTabTable(layerdata, me._nowpage);
                      domStyle.set(dom, "background-color", "#f5f1f1");
                      me._nowTab = layerdata;
                  });
              });
              on(dojo.byId('kzTab'), "click", function () {
                  debugger;
                  var dom = dojo.byId('kzTab');
                  var status = domAttr.get(dom, "status");
                  if (status == "open") {
                      domAttr.set(dom, "status", "close");
                      domStyle.set(dom, "background", "url(image/view/open.png) no-repeat center center");
                      domStyle.set(me.nzy_Tab, "width", "3%");
                      domStyle.set(me.show, "width", "95%");
               
                  } else if (status == "close") {
                      domAttr.set(dom, "status", "open");
                      domStyle.set(dom, "background", "url(image/view/close.png) no-repeat center center");
                      domStyle.set(me.nzy_Tab, "width", "15%");
                      domStyle.set(me.show, "width", "85%");
                  }
              });

              on(me.first, "click", function () {
                  me._nowpage = 1;
                  me._getTabTable(me._nowTab, me._nowpage);
              });
              on(me.pre, "click", function () {
                  if (me._nowpage > 1) {
                      me._nowpage = me._nowpage - 1;
                      me._getTabTable(me._nowTab, me._nowpage);
                  }
              });
              on(me.next, "click", function () {
                  if (me._nowpage < me._totalnum) {
                      me._nowpage = me._nowpage + 1;
                      me._getTabTable(me._nowTab, me._nowpage);
                  }
              });
              on(me.last, "click", function () {
                  if (me._nowpage != me._totalnum) {
                      me._nowpage = me._totalnum;
                      me._getTabTable(me._nowTab, me._nowpage);
                  }
              });
              on(me.download, "click", function () {
                me.getalldata(me._data[0],me._titles);
               
            });

          },
          get bindEvents() {
              return this._bindEvents;
          },
          set bindEvents(value) {
              this._bindEvents = value;
          },
          showAttr:function(data){},

          getalldata:function(layerdata,titles){
              var me=this;
              debugger
              var t=me._total;
              console.log(t);
              if(t>10000){
                t=10000;
              }
              var _body="";
              Loading.show(me.domNode);
            searchService.querty_Feature(layerdata.layerid, layerdata.where,1,t).then(function (result) {
                if (result.code == 200) {
                    let listIndex=1;
                    result.data.forEach((e,index) =>{
                        var list=`<tr class="onemsg" location=${index}>`;
                        list+=`<td style="width:100px;" >${listIndex}</td>`
                        titles.forEach(t=>{
                            if(t.alias!="" && t.alias!=null && t.alias!=undefined){
                                if(e[t.name]){
                                    list+='<td style="width:150px;">'+e[t.name]+'</th>';
                                }
                                else{
                                    list+='<td style="width:150px;"> </th>';
                                }
                            }
                        })
                        list+="</tr>";
                        _body+=list;
                        listIndex++;
                    })
                    var settable="<table><thead>"+me._title+"</thead><tbody>"+_body+"<tbody></table>";
                    me.loadexcel(settable);
                }
                Loading.hide();
            },function(){Loading.hide();})
          },

          loadexcel:function(str){
            var excelFile = "<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:x='urn:schemas-microsoft-com:office:excel' xmlns='http://www.w3.org/TR/REC-html40'>";
            excelFile += "<head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>导出结果</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--></head>";
            excelFile += "<body>";
         
            excelFile += str;
           
            excelFile += "</body>";
            excelFile += "</html>";
            var link = "data:application/vnd.ms-excel;base64," + window.btoa(unescape(encodeURIComponent(excelFile)));
            var a = document.createElement("a");
            a.download ="导出结果";
            a.href = link;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
          }
      });
  });
  
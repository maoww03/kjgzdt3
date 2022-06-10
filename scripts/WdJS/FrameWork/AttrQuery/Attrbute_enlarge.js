define(["dojo/_base/declare", "dojo/text!FrameWork/ServiceSearch/templates/searchTable.txt", "dijit/_TemplatedMixin", "dijit/_WidgetBase", "dojo/on", "dojo/dom-style", 'dojo/parser', "dojo/dom-class", "dojo/dom-attr", "dojo/_base/lang", 'dojo/_base/array',"FrameWork/AttrConfig",'FrameWork/Loading/Loading'],
    function (declare, template, TemplatedMixin, WidgetBase, on, domStyle, parser, domClass, domAttr, lang, array,AttrConfig,Loading) {
        return declare([WidgetBase, TemplatedMixin], {
            templateString: template,
            _title:null,
            _started: false,

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
                   
                   this.bindEvent();
                    me._showTab();
                    me._getTabTable(me._data[0]);
                   domStyle.set(me.pageset,"display","none");
                   this.tableEvent();
                }.bind(this));

                this._started = true;
            },
            //1-显示图层
            _showTab:function(){
                var me=this;
                var innerhtml=' <div  class="nzyResultTab_img" id="kzTab" status="open"> </div>';
                var coun=0;
                me._data.forEach(el => {
                    debugger
                    if(coun == 0){
                        innerhtml += `<div class="nzyResultTab" style="background-color:#f5f1f1" value="${el.layerid}"> ${el.layername}</div>`;
                        coun =1;
                    }else{
                        innerhtml += `<div class="nzyResultTab" style="background-color:#ffffff"  value="${el.layerid}"> ${el.layername}</div>`;
                    }
                });
                me.nzy_Tab.innerHTML=innerhtml;


            },
              //2-显示当前tab的具体页数数据
            _getTabTable(layerdata){
                var me=this;
                var layerid=layerdata.layerid;
                var obj = AttrConfig.layers.find(function (obj) {
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
                me.getData(layerdata,obj.field);
                me._titles=obj.field
    
              },

              getData:function(layerdata,titles){
                var me=this;
                me.content_table.innerHTML=``;
                layerdata._layerData.forEach((e,index)=>{
                    debugger
                    var list=`<tr class="onemsg" layer='${layerdata.layerid}' location=${index}>`;
                    list+=`<td style="width:100px;" >${index+1}</td>`;
                    var sxdata= e.data ||e.properties.attributes || e.feature.properties|| e.properties ;

                    titles.forEach(t=>{
                        if(t.alias!="" && t.alias!=null && t.alias!=undefined){
                            if(sxdata[t.name]){
                                list+='<td style="width:150px;">'+sxdata[t.name]+'</th>';
                            }
                            else{
                                list+='<td style="width:150px;"> </th>';
                            }
                        }
                    })
                    list+="</tr>";
                    me.content_table.innerHTML+=list;
                })

            },

            tableEvent:function(){
                var me=this;
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
                        me._getTabTable(layerdata);
                        domStyle.set(dom, "background-color", "#f5f1f1");
                    });
                });
                on(dojo.byId('kzTab'), "click", function () {
                    var dom = dojo.byId('kzTab');
                    var status = domAttr.get(dom, "status");
                    if (status == "open") {
                        domAttr.set(dom, "status", "close");
                        domStyle.set(dom, "background", "url(image/view/open.png) no-repeat center center");
                        domStyle.set(me.nzy_Tab, "width", "3%");
                        domStyle.set(me.show, "width", "97%");
                 
                    } else if (status == "close") {
                        domAttr.set(dom, "status", "open");
                        domStyle.set(dom, "background", "url(image/view/close.png) no-repeat center center");
                        domStyle.set(me.nzy_Tab, "width", "15%");
                        domStyle.set(me.show, "width", "85%");
                    }
                });
            },

            bindEvent: function () {
                var me=this;
                on(me.close, 'click', function () { 
                    me.destroy();
                });

                on(me.download, "click", function () {
                    var settable = me.content.innerHTML;
                    me.loadexcel(settable);
                   
                })
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
              },
        });
    });


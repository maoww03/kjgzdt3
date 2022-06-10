define([
    "dojo/_base/declare",
    "dojo/parser",
    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin",
    "dojo/text!./templates/ConflictResut.txt",
    "dojo/on",
    "dojo/dom-style",
    "dojo/dom-class",
    "dojo/dom-attr",
    "FrameWork/AttrConfig",
    "./ConflictResultMap",
     'FrameWork/Loading/Loading',"./ConflictResultBrief","FrameWork/serviceUtil/workMapService"
  ], function (declare, parser, _WidgetBase, _TemplatedMixin, template, on, domStyle, domClass, domAttr,AttrConfig,ConflictResultMap,Loading,ConflictResultBrief,workMapService) {
      return declare([_WidgetBase, _TemplatedMixin], {
          templateString: template,
          _showAllInMap:null,
          _nowLayerData:null,

          constructor: function (args) { },
          postCreate: function () {
              this.inherited(arguments);
          },
          startup: function () {
            // domStyle.set(dojo.byId("showTable"),"display","block");
              var me = this;
              if (me._started) {
                  return;
              }  
              parser.parse(me.domNode).then(function () {
                    Loading.show(me.content);
                    me._setTab(me.redata);
                    me._showTable(me.redata[0].id);
                    ConflictResultMap.showInmap(me.redata,me._type);
                    me._bindEvents();
                    Loading.hide();
              });
          },
          _setTab:function(data){
              var me=this;
                var innerStr=``;
                var dic=me._fxtc;
                data.forEach((el,index)=>{
                    var layerid=el.id;
                    var obj=dic.find(function(la){
                        return la.layerid == layerid
                    }) 
                    if(index == 0){
                        innerStr+=`<div class="resulttab-choice tab_click" layerid="${obj.layerid}">${obj.caption}</div>`
                    }else{
                        innerStr+=`<div class="resulttab tab_click" layerid="${obj.layerid}">${obj.caption}</div>`

                    }
                })   

                me.retab.innerHTML=innerStr;
                dojo.query('.tab_click', me.domNode).forEach(function (dom) {
                    on(dom, "click", function () {
                        dojo.query('.tab_click', me.domNode).forEach(function (dom2) {
                            domClass.add(dom2,"resulttab");
                            domClass.remove(dom2,"resulttab-choice");
                        })
                        domClass.remove(dom,"resulttab");
                        domClass.add(dom,"resulttab-choice");
                        var layer=domAttr.get(dom,"layerid");
                        me._showTable(layer);
                    });
                   
                });
          },
          _showTable:function(layer){
            var me=this;
            var data = this.redata.find(function(el){
                 return el.id == layer
             })
            me._nowLayerData=data;
             var obj = AttrConfig.layers.find(function (obj) {
                return obj.id == layer;
            });
            var titleNames='<tr style="color: #515761;">';
            titleNames+='<th>序号</th><th>源图形</th><th>叠加面积</th>';
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
            me.getData(data,obj.field);
            me._titles=obj.field

          },
          getData:function(data,titles){
              var me=this;
              me.content_table.innerHTML='';
              var num=0;
            data.group.forEach((oneGroup,index) =>{
                var groupData=oneGroup;
                for(index2 in groupData ){
                    num++;
                    var list=`<tr class="onemsg" group
                    =${index} item=${index2} layerid="${data.id}">`;
                    list+=`<td style="width:100px;" >${num}</td>
                    <td style="width:100px;" >地块${index+1}</td>
                    <td style="width:100px;" >${groupData[index2].area}㎡</td>`;
                    titles.forEach(t=>{
                        if(t.alias!="" && t.alias!=null && t.alias!=undefined){
                            if(groupData[index2][t.name]){
                                list+='<td style="width:150px;">'+groupData[index2][t.name]+'</th>';
                            }
                            else{
                                list+='<td style="width:150px;"> </th>';
                            }
                        }
                    })
                    list+="</tr>";
                    me.content_table.innerHTML+=list;
                }
            })

            me._tableclick();
          },
          _tableclick:function(){
            var me=this;
            dojo.query(".onemsg",me.domNode).forEach((dom) => {
                on(dom, "click", function () {
                    var group=domAttr.get(dom, 'group');
                    var item=domAttr.get(dom, 'item');
                    var newwkt=me._nowLayerData.group[group][item].conflictwkt;
                    ConflictResultMap.locationItem(newwkt,me._type)
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
              on(me.subSidebox_close, "click", function () {
                me.destroy();
              });
            on(me.intro, "click", function () {
                var briefData=[];
                me.redata.forEach(ConflictRe=>{
                    
                    var sum=0;
                    ConflictRe.group.forEach(da=>{
                        sum+=da.length;
                    })
                    var obj = me._fxtc.find(function(obj){
                        return obj.layerid == ConflictRe.id;
                    })
                    var layername=obj.caption;
                    var sumAera=ConflictRe.sumAera;
                    if(sum > 0){
                        var msgStr = `与"${layername}"存在压盖情况`;
                        var pd=true;
                    }else {
                        var msgStr = `与"${layername}"不存在压盖情况`;
                        var pd=false;
                    }
                    var _brief={
                        "type":layername,
                        "value":msgStr,
                        "sumAera":sumAera,
                        "pd":pd
                    }
                    briefData.push(_brief);
                })
                debugger
                var pri=me._brief;
                var _briefList=pri.concat(briefData);
                var ViewBrief = new  ConflictResultBrief({_data:_briefList}).placeAt(dojo.body());
                ViewBrief.startup();
            });
            // down
            on(me.down, "click", function () {
                var settable=me.content.innerHTML;
                me.loadexcel(settable,"结果下载");
            });

            // 图形下载\
            on(me.downshp, "click", function () {
               var outdata=[];
               if(me._nowLayerData.group.length>0 && me._nowLayerData.group.length != undefined){
                   var group=me._nowLayerData.group;
                   group.forEach(dk => {
                        if(dk.length>0){
                            outdata = outdata.concat(dk)
                        }
                    });
               }
               var outshape = me.doExport(outdata);
               debugger
               workMapService.uploadZip(outshape).then(function (result){
                if(result.code=="200"){
                    workMapService.fileDownloadByPath(result.data);
                }else{
                    alert(result.msg);
                }
                })


            });


          },

          doExport:function(outdata){
            var arr=[];
            var wkt=null;
            for(var i=0;i<outdata.length;i++){
                var onedata=outdata[i];
                var _attributes=[];
                for(key in onedata){
                    if(key != "conflictwkt"  &&  key != "geometry"){
                        var data =  {
                            propertyName:key,
                            value:onedata[key]
                        }
                        _attributes.push(data);
                    }else if(key == "conflictwkt"){
                        wkt=onedata[key];
                    }
                }
                // _attributes
                var graphical ={
                    attributes:[],
                    wkt: wkt
                  };
                arr.push(graphical);
            }
            return arr;
        },

          loadexcel:function(str,filename ){
            var excelFile = "<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:x='urn:schemas-microsoft-com:office:excel' xmlns='http://www.w3.org/TR/REC-html40'>";
            excelFile += "<head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>导出结果</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--></head>";
            excelFile += "<body>";
         
            excelFile += str;
           
            excelFile += "</body>";
            excelFile += "</html>";
            var link = "data:application/vnd.ms-excel;base64," + window.btoa(unescape(encodeURIComponent(excelFile)));
            var a = document.createElement("a");
            a.download =`${filename}`;
            a.href = link;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
          }

          
      });
  });
  
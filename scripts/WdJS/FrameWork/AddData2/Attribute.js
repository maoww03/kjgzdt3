define([
    "dojo/_base/declare",
    "dojo/parser",
    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin",
    "dojo/text!./templates/outherModule.txt",
    "dojo/on",
    "dojo/dom-style",
    "dojo/dom-class",
    "dojo/dom-attr",
    "dojo/dom-construct", 
    "FrameWork/serviceUtil/databaseService",
    "./DataBaseConfig", 
    // "FrameWork/AddData/doAddData",
    "./doAddData",
    "FrameWork/AttrQuery/AttrQueryTool",
    "./text", 
   "./number", 
   "./date", 
   "FrameWork/serviceUtil/excelWorkService"
  ], function (declare, parser, _WidgetBase, _TemplatedMixin, template, on, domStyle, domClass, domAttr, domConstruct, databaseService,DataBaseConfig,doAddData,AttrQueryTool, textDom, numberDom, dateDom,excelWorkService) {
      return declare([_WidgetBase, _TemplatedMixin], {
          templateString: template,
          _started: false,
          data: null,
          _selectLayer:null,
          _addBtn:null,
          _changeBtn:null,
          _doAddData:null,
          _attrQueryTool:null,
          _view:null,
          _contentList:null,
          layer_id:null,
          _uploadData:null,
          constructor: function (args) { },
          
          postCreate: function () {
              this.inherited(arguments);
          },
          startup: function () {
              var me = this;
              if (me._started) {
                  return;
              }
              parser.parse(me.domNode).then(function () {
                me._contentList = [];
                me.dataBaseSelected();
                var aa=me._data;
                me._bindEvents();
              });
          },
          
          _bindEvents: function () {
                var me=this;
                on(me.downloadExcel, 'click', function () {
                    
                    var id=dojo.byId("selectLayer").value;
                    excelWorkService.downLoadExcelData(id);
                });
    
                on(me.uploadExcel_file, 'click', function () {
                    me.uploadExcel.click();
                });
    
                on(me.uploadExcel, 'change', function () {
                    var fdata = new FormData();
                    fdata.append("file", this.files[0]);
                    domStyle.set(me.loading,"display","block");
                    excelWorkService.getTabInfor(fdata).then(function (result) {
                        if (result.code == "200") {
                            me._uploadData = result.data;
                            if (me._contentList.length > 0) {
                                for (var i = 0; i < me._contentList.length; i++) {
                                    for (var j = 0; j < me._uploadData.length; j++) {
                                        if (me._uploadData[j].name == me._contentList[i].data.name) {
                                            me._contentList[i].fieldValue.value = me._uploadData[j].value;
                                            break;
                                        }
                                    }
                                }
                            }
                        } else {
                            alert(result.msg);
                        }
                    domStyle.set(me.loading,"display","none");
                    });
                });

                on(me.change,"click",function(){
                    domStyle.set(me.submit,"display","block");
                    for(var i=0;i<me._contentList.length;i++){
                        me._contentList[i].removeDisable();
                        me._contentList[i].startup();
                    }
                    // 修改

                })

                on(me.delete,"click",function(e){
                    e.stopPropagation();
                    if(confirm("请确认是否删除该数据")){
                        domStyle.set(me.domNode,"display","none");
                        alert("删除成功");
                    }
                })

                on(me.close,"click",function(){
                    me.destroy();
                })
          },

          dataBaseSelected:function(){
            var me=this;
            for (var i = 0; i < this._contentList.length; i++) {
                this._contentList[i].destroy();
            }
            this._contentList = [];
            me.layer_id=dojo.byId("selectLayer").value;
            if (this.layer_id != null) {
                domStyle.set(me.loading,"display","block");
                databaseService.getTableInformationByTableName(this.layer_id).then(function (result) {
                    if (result.code == "200") {
                        for (var i = 0; i < result.data.length; i++) {
                            if (result.data[i].type != "serial" && result.data[i].name.toLowerCase().indexOf("shape") < 0) {
                                var _dom;
                                if (result.data[i].type == "float8" || result.data[i].type == "int4") {
                                    _dom = new numberDom({ data: result.data[i] }).placeAt(me.domList2);
                                    _dom.setDisable();
                                    _dom.startup();
                                } else if (result.data[i].type == "varchar") {
                                    _dom = new textDom({ data: result.data[i] }).placeAt(me.domList2);
                                    _dom.setDisable();
                                    _dom.startup();
                                } else if (result.data[i].type == "timestamp") {
                                    _dom = new dateDom({ data: result.data[i] }).placeAt(me.domList2);
                                    _dom.setDisable();
                                    _dom.startup();
                                }
                                this._contentList.push(_dom);
                            }
                        }
                        if(me._data[0]!=undefined){
                            me._uploadData=me._data[0].properties.data;
                        }

                        if (me._contentList.length > 0 && me._uploadData!=null) {
                            for (var i = 0; i < me._contentList.length; i++) {
                                if(me._contentList[i].data.type=="timestamp"){
                                    var str=me._uploadData[me._contentList[i].data.name];
                                    var arr=str.split("T");
                                    str=arr[0];
                                    me._contentList[i].fieldValue.value =str;
                                }else{
                                    me._contentList[i].fieldValue.value = me._uploadData[me._contentList[i].data.name];
                                }

                            }
                        }
                    } else {
                        alert(result.msg);
                    }
                    domStyle.set(me.loading,"display","none");
                }.bind(this));
                var feature=me._data[0];

                if(feature != undefined && feature.geometry!=undefined){
                    if (feature.geometry.type == "MultiPolygon" || feature.geometry.type == "MultiLineString") {
                      if (feature.geometry.type == "MultiPolygon") {
                        geom = new ol.Feature({ geometry: new ol.geom.MultiPolygon(feature.geometry.coordinates) });
                     
                        geom.setStyle(me._highlightedStyle);
                      } else if (feature.geometry.type == "MultiLineString") {
                        geom = new ol.Feature({ geometry: new ol.geom.MultiLineString(feature.geometry.coordinates) });
                        geom.setStyle(me._highlightedStyle);
                      }
                      appConfig.map.getView().setCenter(ol.extent.getCenter(geom.getGeometry().getExtent()));
                    } else if (feature.geometry.type == "Point") {
                      geom = new ol.Feature({ geometry: new ol.geom.Point(feature.geometry.coordinates) });
                      appConfig.map.getView().setCenter(ol.extent.getCenter(geom.getGeometry().getExtent()));
                    }
                    me._highlightedLayer.getSource().addFeature(geom);
                  }

            }
        },
        
      });
  });
  
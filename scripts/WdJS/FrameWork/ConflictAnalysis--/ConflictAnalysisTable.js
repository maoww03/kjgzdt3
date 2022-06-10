define([
    "dojo/_base/declare",
    "dojo/parser",
    "dojo/DeferredList",
    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin",
    "dojo/text!./templates/ConflictAnalysisTable.txt",
    "dojo/on",
    "dojo/dom-style",
    "dojo/dom-class",
    "dojo/dom-attr",
    "dojo/dom-construct",
    "FrameWork/MapUtil/TransformUtil",
    "FrameWork/AttrConfig","FrameWork/serviceUtil/workMapService"
  ], function (declare, parser, DeferredList, _WidgetBase, _TemplatedMixin, template, on, domStyle, domClass, domAttr, domConstruct, TransformUtil,AttrConfig,workMapService) {
      return declare([_WidgetBase, _TemplatedMixin], {
          templateString: template,
          _map: null,
          _highlightedLayer: null,
          _data: null,
          _layer: null,
          _layer2: null,
          _filePath:null,
          _highlightedStyle: new ol.style.Style({
              // 默认点样式
              text: new ol.style.Text({
                  font: "13px Microsoft YaHei",
                  offsetY: -15,
                  fill: new ol.style.Fill({
                      color: "#000",
                  }),
                  stroke: new ol.style.Stroke({
                      color: "#fff",
                      width: 2,
                  }),
              }),
              image: new ol.style.Circle({
                  radius: 6,
                  fill: new ol.style.Fill({
                      color: "red",
                  }),
              }),
              // 默认多面形中多边形样式 style_setting为false
              fill: new ol.style.Fill({
                  color: "rgba(255,0,0,0.5)",
              }),
              stroke: new ol.style.Stroke({
                  color: "red",
                  width: 2,
              }),
          }),
  
          _attribute: null,
  
          constructor: function (args) { },
          postCreate: function () {
              this.inherited(arguments);
          },
          startup: function () {
            domStyle.set(dojo.byId("showTable"),"display","block");
              var me = this;
              if (me._started) {
                  return;
              }  
              parser.parse(me.domNode).then(function () {
                  me._map = appConfig.map;
                  var ishas = false;
                  for (var i = 0; i < me._map.getLayers().array_.length; i++) {
                      var layer = me._map.getLayers().array_[i];
                      var layer_id = layer.get("id");
                      if (layer_id == "highlighted") {
                          me._highlightedLayer = layer;
                          ishas = true;
                      }
                  }
                  if (!ishas) {
                      me._highlightedLayer = new ol.layer.Vector({
                          id: "highlighted",
                          layerTitle: "属性查询",
                          graphicMap: true,
                          source: new ol.source.Vector({
                              features: [],
                          }),
                          zIndex: me._map.getLayers().getLength() + 1,
                      });
                      me._map.addLayer(me._highlightedLayer);
                  }
                  me._highlightedLayer.getSource().clear();
                  me._setData();
                  me._bindEvents();
              });
          },
          _bindEvents: function () {
              var me = this;
              on(me.close, "click", function () {
                  domStyle.set(dojo.byId("showTable"),"display","none");
                  me._destroy();
                  _checkQuery=true;
                _attrQueryTool.activate("point");
              });
  
              dojo.query(".tr2").forEach((dom) => {
                  on(dom, "click", function () {
                      var dataId = domAttr.get(dom, "data-id");
                      me._positioning(dataId);
                  });
              });

              on(me.download,'click',function(){
                workMapService.fileDownloadByPath(me._filePath);
              })  
              on(me.export, "click", function () {
                domStyle.set(me.loading,'display','block');
                  var graphicals = [];
                  me._data.forEach((d) => {
                        var attributes=[];
                        for(var i=0;i<me._layer.showFields.length;i++){
                            var feature = {
                                propertyName:me._layer.showFields[i].field,
                                type:me._layer.showFields[i].type,
                                value:null,
                            };
                            attributes.push(feature);
                        }
                      var graphical = {
                          attributes: attributes,
                          wkt: d.wkt
                      };
                      for (var key in d) {
                          for(var i=0;i<graphical.attributes.length;i++){
                            var list=graphical.attributes[i];
                            if(key==list.propertyName){
                                list.value=d[key];
                            }
                          }
                      }
                      graphicals.push(graphical);
                  });
                //   debugger
                  me.graphicalsToZip(dojo.toJson(graphicals), "文件导出.zip");
                //   workMapService.fileDownloadByPath(me._filePath);
                
              });
          },

          _setData: function () {
              var me = this;
              me.dataBox_table.innerHTML = "";
              var obj = AttrConfig.layers.find(function (obj) {
                return obj.id == me._layer.content[0];
              });
              var table = '<table class="table" border="1" style="width: calc(100% - 8px)">';
              table += '<thead class="thead2">';
              table += '<tr class="tr2">';
              table += `<th class="th2" style="font-weight: normal;">序号</th>`;
              for (var i = 0; i < me._layer.showFields.length; i++) {
                  table += '<th class="th2" style="font-weight: normal;" >' + me._layer.showFields[i].alias + "</th>";
              }
  
  
              table += "</tr>";
              table += "</thead>";
              table += '<tbody class="tbody" style="width: calc(100% + 8px); height: 200px">';
              me._data.forEach((d, index) => {
                  table += '<tr class="tr2" data-id="' + index + '">';
                  table += ' <td class="td2">' + (index + 1) + "</td>";
                  for (var i = 0; i < me._layer.showFields.length; i++) {
                      var _value;
                      if (me._layer.showFields[i].type != undefined && me._layer.showFields[i].type == "number") {
                          _value = (d[me._layer.showFields[i].field] || "");
                      } else {
                          _value = d[me._layer.showFields[i].field] || ""
                      }
                      table += '<th class="th2" style="font-weight: normal;">' + _value + (me._layer.showFields[i].unit || "") + "</th>";
                  }
                  table += "</tr>";
              });
              table += "</tbody>";
              table += "</table>";
              me.dataBox_table.innerHTML = table;
          },

          _positioning: function (dataId) {
              
              var me = this;
              var data = me._data[dataId];
              var feature = new ol.format.WKT().readFeature(data.wkt, {
                  dataProjection: "EPSG:4549", //目标坐标系
                  featureProjection: "EPSG:4549" //当前坐标系
              });
              feature.setStyle(me._highlightedStyle);
              me._highlightedLayer.getSource().clear();
              appConfig.map.getView().setCenter(ol.extent.getCenter(feature.getGeometry().getExtent()));
              me._highlightedLayer.getSource().addFeature(feature);
  
              var content = document.getElementById("popup-content");
              var html = '<p class="ol-popup-content-p">序号:' + (dataId + 1) + '</p>';
              for (var i = 0; i < me._layer.showFields.length; i++) {
                  var _value;
                  if (me._layer.showFields[i].type != undefined && me._layer.showFields[i].type == "number") {
                      _value = (data[me._layer.showFields[i].field] || "");
                  } else {
                      _value = data[me._layer.showFields[i].field] || "";
                  }
                  html += '<p class="ol-popup-content-p">' + me._layer.showFields[i].alias + ':' + _value + (me._layer.showFields[i].unit || "") + '</p>';
              }
  
              content.innerHTML = html;
  
  
              popup.setPosition(ol.extent.getCenter(feature.getGeometry().getExtent()));
          },  
  
          _destroy: function () {
              var me = this;
              me._highlightedLayer.getSource().clear();
              popup.setPosition(undefined);
              closer.blur();
              me.destroy();
          },
          graphicalsToZip: function (graphicals, fileName) {
                var me=this;
                workMapService.uploadZip(graphicals).then(function (result) {
                    if(result.code=='200'){
                        domStyle.set(me.download,'display','block');
                        domStyle.set(me.loading,'display','none');
                        me._filePath=result.data;
                    }else{
                        domStyle.set(me.download,'display','none');
                        domStyle.set(me.loading,'display','none');
                        me._filePath=null;
                        alert(result.msg);
                    }
                });
          },
          
      });
  });
  
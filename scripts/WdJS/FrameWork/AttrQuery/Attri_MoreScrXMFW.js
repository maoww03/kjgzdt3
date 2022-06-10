define(["dojo/_base/declare",
    "dojo/text!./templates/Attri_MoreScrXMFW.html", 
    "dijit/_TemplatedMixin", 
    "dijit/_WidgetBase",
    "dojo/on", 
    "dojo/dom-style", 
    'dojo/parser', 
    "dojo/dom-class", 
    "dojo/dom-attr", 
    "dojo/_base/lang", 
    'dojo/_base/array',
    "FrameWork/AttrConfig_GLB",
    "FrameWork/Setalert/Setalert",
    'FrameWork/Loading/Loading',"FrameWork/Setalert/DealFileload"
],
    function (declare, template, TemplatedMixin, WidgetBase, on, domStyle, parser, domClass, domAttr, lang, array,AttrConfig_GLB,Setalert,Loading,DealFileload) {
        return declare([WidgetBase, TemplatedMixin], {
            templateString: template,
            _started: false,
            _alias:null,

            _showzd:'xmmc',
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
                    debugger
                   var table=me._type.gctable;
                   me._alias = AttrConfig_GLB.layers.find(function(obj){
                       return obj.id==table;
                   })
                   me._setList(me._data,me._alias);
                   me.setFeature(me._data[0])

                }.bind(this));
                this._started = true;
            },
            _setList: function (data,layer) {
                var me = this;
                debugger
                me.layerList.innerHTML = "";
                data.forEach((li, index) => {
                var text =li[me._showzd];
                if (index == 0) {
                      me.layerList.innerHTML += `<div class='layerName select' title="${text}" data-id='${index}'>${text}</div>`;
                } else {
                     me.layerList.innerHTML += `<div class='layerName' title="${text}" data-id='${index}'>${text}</div>`;
                  }
                });
                me.layerClickBind();
              },
         
              layerClickBind: function () {
                var me = this;
                me.layerClickDis();
                me._handler = on(dojo.query(".layerName", me.domNode), "click", function (evt) {
                  dojo.query(".layerName", me.domNode).forEach((dom) => {
                    domClass.remove(dom, "select");
                  });
                  domClass.add(evt.target, "select");
                  var id = parseInt(domAttr.get(evt.target, "data-id"));
                  me.setFeature(me._data[id]);
                });
              },
              layerClickDis: function () {
                var me = this;
                if (me._handler != null) {
                  dojo.disconnect(me._handler);
                  me._handler = null;
                }
              },

              setFeature: function (data) {
                  debugger
                var me = this;
                var obj =me._alias;
                if (obj == undefined ||obj ===null ) {
                  alert("AttrConfig中该图层配置未找到");
                  return;
                }
                // shape
                for (var i = 0; i < me.mapArr.getLayers().array_.length; i++) {
                  var layer = me.mapArr.getLayers().array_[i];
                  var layer_id = layer.get("id");
                  if (layer_id == "highlighted") {
                    layer.getSource().clear();
                  }
                }
                var map = me.mapArr;
                var _highlightedLayer = null;
                for (var i = 0; i < map.getLayers().array_.length; i++) {
                  var layer = map.getLayers().array_[i];
                  var layer_id = layer.get("id");
                  if (layer_id == "highlighted") {
                    _highlightedLayer = layer;
                  }
                }
                var geom = null;
                var  wkt=DealFileload.ShpIndataDeal(data["shape39"]);
                var feature = new ol.format.WKT().readFeature( wkt);
                var geom = new ol.Feature({
                    geometry: feature.getGeometry(),
                    type: "polygon"
                });
                geom.setStyle(me._highlightedStyle);
                var r = map.getView().getResolutionForExtent(geom.getGeometry().getExtent(), map.getSize());
                map.getView().setResolution(r);
                map.getView().setCenter(ol.extent.getCenter(geom.getGeometry().getExtent()));

                _highlightedLayer.getSource().addFeature(geom);

                // value
                var innerHTML = "";
                obj.field.forEach((f) => {
                  if (f.name.toLowerCase().indexOf("objectid") < 0 && f.name.toLowerCase().indexOf("shape") < 0) {
                    innerHTML += `<tr> <td>${f.alias||f.name}</td>`;
                    if (f.type == "numeric" || f.type == "number" && String(data[f.name]).indexOf(".") > 0) {
                        // var num = Number(data[f.name]);
                        innerHTML += `<td> ${data[f.name] || ""}</td></tr>`;
          
                    } 
                    else if ((f.type == "date"|| f.type == "timestamp") && String(data[f.name]).indexOf("T") > 0) {
                        innerHTML += `<td> ${data[f.name].split("T")[0]}</td></tr>`;
                    }else{
                        innerHTML += `<td> ${(data[f.name] || "")}</td></tr>`;
                    }
                }
              })
                me.content_table.innerHTML = innerHTML;
              },

            _bindEvent2:function(){
              
            },

        });
    });


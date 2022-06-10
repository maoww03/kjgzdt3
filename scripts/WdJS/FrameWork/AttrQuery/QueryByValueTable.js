define([
  "dojo/_base/declare",
  "dojo/parser",
  "dojo/DeferredList",
  "dijit/_WidgetBase",
  "dijit/_TemplatedMixin",
  "dojo/text!./templates/QueryByValueTable.txt",
  "dojo/on",
  "dojo/dom-style",
  "dojo/dom-class",
  "dojo/dom-attr",
  "dojo/dom-construct",
  "FrameWork/serviceUtil/workMapService",
  "FrameWork/AttrConfig",'FrameWork/Loading/Loading'
], function (
  declare,
  parser,
  DeferredList,
  _WidgetBase,
  _TemplatedMixin,
  template,
  on,
  domStyle,
  domClass,
  domAttr,
  domConstruct,
  workMapService,
  AttrConfig,Loading
) {
  return declare([_WidgetBase, _TemplatedMixin], {
    templateString: template,
    _map: null,
    _highlightedLayer: null,
    _data: null,
    _highlightedStyle: new ol.style.Style({
      // 默认点样式
      text: new ol.style.Text({
        font: "13px Microsoft YaHei",
        offsetY: -15,
        fill: new ol.style.Fill({
          color: "#000"
        }),
        stroke: new ol.style.Stroke({
          color: "#fff",
          width: 2
        })
      }),
      image: new ol.style.Circle({
        radius: 6,
        fill: new ol.style.Fill({
          color: "red"
        })
      }),
      // 默认多面形中多边形样式 style_setting为false
      fill: new ol.style.Fill({
        color: "rgba(255,0,0,0.5)"
      }),
      stroke: new ol.style.Stroke({
        color: "red",
        width: 2
      })
    }),
    _postitionHandler: null,
    _showStatus:"down",

      _queryid: null,

    constructor: function (args) {},
    postCreate: function () {
      this.inherited(arguments);
    },
    startup: function () {
      var me = this;
      if (me._started) {
        return;
      }
      parser.parse(me.domNode).then(function () {
        domStyle.set(dojo.byId("showTable"), 'display', 'block');
        me._map = appConfig.map;
        var ishas = false;
        if (!ishas) {
          me._highlightedLayer = new ol.layer.Vector({
            id: "highlighted",
            layerTitle: "属性查询",
            graphicMap: true,
            source: new ol.source.Vector({
              features: []
            }),
            zIndex: me._map.getLayers().getLength() + 1
          });
          me._map.addLayer(me._highlightedLayer);
        }
        me._highlightedLayer.getSource().clear();
          me._setData(me._queryid);
        me._bindEvents();
      });
    },
    _bindEvents: function () {
      var me = this;
      on(me.downLoad, 'click', function () {
        var excelFile = "<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:x='urn:schemas-microsoft-com:office:excel' xmlns='http://www.w3.org/TR/REC-html40'>";
        excelFile += "<head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>导出结果</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--></head>";
        excelFile += "<body>";
        excelFile += me.content.innerHTML;
        excelFile += "</body>";
        excelFile += "</html>";
        var link = "data:application/vnd.ms-excel;base64," + window.btoa(unescape(encodeURIComponent(excelFile)));
        var a = document.createElement("a");
        a.download ="文件导出";
        a.href = link;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      });
      on(me.close, "click", function () {
        domStyle.set(dojo.byId("showTable"), 'display', 'none');
        me._destroy();
      });
      // show-up
      on(me.showup, "click", function () {
        if(me._showStatus== 'down'){
          me._showStatus= 'up';
          domStyle.set(me.showup, 'background-image', 'url(image/attr/down.png)');
          domStyle.set(me.domNode, 'height', '60%');
        }else if(me._showStatus== 'up'){
          me._showStatus= 'down';
          domStyle.set(me.showup, 'background-image', 'url(image/attr/up.png)');
          domStyle.set(me.domNode, 'height', '40%');
        }
      });

    },
      _setData: function (queryid) {
        var me = this;
        Loading.show(me.domNode);
        workMapService.selectResultsById(queryid).then(function (out) {
        if (out.code == 200) {
          if (out.data.length > 0) {
            me._data = out;
            var data = out.data;
            var sum = data.length;
            me.datanum.innerHTML = `共${sum}条数据`;
            // head
            var obj = AttrConfig.layers.find(function (obj) {
              return obj.id == me._layername;
            });
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

            // setwidth 
            var setwidth=obj.field.length*90;
            domStyle.set(me.content,"width",setwidth+"px");

            // body
            var list;
            data.forEach((d, index) => { 
              list= '<tr class="onemsg" data-id="' + index + '">';
              list+=`<td style="width:100px;" >${index+1}</td>`;
              obj.field.forEach(t=>{
                if(t.alias!="" && t.alias!=null && t.alias!=undefined){
                    if(d[t.name]){
                      list += ' <td style="width:150px;">' + d[t.name] + "</td>";
                    }
                    else{
                      list += ' <td style="width:150px;">' + " " + "</td>";
                    }
                }
              })
              list += "</tr>";
              me.content_table.innerHTML+=list;
            });
            me._tableclick(obj);
             
          } else {
              me._destroy();
              alert("查询无数据");
          }
        } else {
          alert(out.msg);
          }
          Loading.hide();
      },function(err){
        console.log(err);
        Loading.hide();

        
      });
    },
    _tableclick: function (obj) {
      var me = this;
      me._disposePostitionHandler();
      me._postitionHandler = dojo.query(".onemsg",me.domNode).forEach((dom) => {
        on(dom, "click", function () {
          var dataId = domAttr.get(dom, "data-id");
          me._positioning(obj,dataId);
        });
      });
    },
    _disposePostitionHandler: function () {
      var me = this;
      if (me._postitionHandler != null) {
        dojo.disconnect(me._postitionHandler);
        me._postitionHandler = null;
      }
    },
    _positioning: function (layer, dataId) {
      var me = this;
      var data = me._data.data[dataId];
      var feature = new ol.format.WKT().readFeature(data.shape, {
          dataProjection: "EPSG:4549", //目标坐标系
          featureProjection: "EPSG:4549", //当前坐标系
      });
      feature.setStyle(me._highlightedStyle);
      me._highlightedLayer.getSource().clear();
      appConfig.map.getView().setCenter(ol.extent.getCenter(feature.getGeometry().getExtent()));
      me._highlightedLayer.getSource().addFeature(feature);

      // dojo.byId("popup-title").innerHTML = "查询结果";
      // var content = dojo.byId("popup-content");
      // content.innerHTML = "";
      // layer.field.forEach((f) => {
      //   if (f.type == "date") {
      //     var date = data[f.name].replace("T", " ");
      //     date = date.substring(0, date.indexOf(".000"));
      //     content.innerHTML += '<p class="ol-popup-content-p">' + f.alias + ":" + date + "</p>";
      //   } else {
      //     content.innerHTML += '<p class="ol-popup-content-p">' + f.alias + ":" + data[f.name] + "</p>";
      //   }
      // });
      // popup.setPosition(ol.extent.getCenter(feature.getGeometry().getExtent()));
    },

    _destroy: function () {
      var me = this;
      me._highlightedLayer.getSource().clear();
      // popup.setPosition(undefined);
      closer.blur();
      me._disposePostitionHandler();
      me.destroy();
    }
  
  });
});

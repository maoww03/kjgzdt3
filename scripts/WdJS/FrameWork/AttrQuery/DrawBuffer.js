define([
  "dojo/_base/declare",
  "dojo/parser",
  "dijit/_WidgetBase",
  "dijit/_TemplatedMixin",
  "dojo/text!./templates/DrawBuffer.txt",
  "dojo/on",
  "dojo/dom-style",
  "dojo/dom-class",
  "dojo/dom-attr",
  "dojo/dom-construct",
  "FrameWork/MapUtil/MapToolDraw",
    "./AttrQueryTool", 'FrameWork/Loading/Loading', "FrameWork/serviceUtil/graphService"
], function (declare, parser, _WidgetBase, _TemplatedMixin, template, on, domStyle, domClass, domAttr, domConstruct, MapToolDraw, AttrQueryTool, Loading, graphService) {
  return declare([_WidgetBase, _TemplatedMixin], {
    templateString: template,
    index: 0,
    _mapTool: null,
    _geom: null,
    _buffLayer: null,
    _buffGeom: null,
    _attrQueryTool: null,
    _drawType:null,

    constructor: function (args) {},
    postCreate: function () {
      this.inherited(arguments);
    },
    startup: function () {
      var me = this;
      dojo.query('.repeatHide').forEach((dom) => {
          domStyle.set(dom,"display",'none');
      })
      dojo.query('.sidebar-tool').forEach((dom) => {
          domStyle.set(dom,"display",'none');
      })
      domStyle.set(me.domNode,"display",'block');
      if (me._started) {
        return;
      }
      parser.parse(me.domNode).then(function () {
        me._geom = null;
        me._attrQueryTool = null;
        me._mapTool = new MapToolDraw(appConfig.map, me.getGeo.bind(me));
        me._buffLayer = new ol.layer.Vector({
          id: "buffLayer",
          layerTitle: "缓冲图形",
          graphicMap: true,
          source: new ol.source.Vector({
            features: []
          }),
          zIndex: appConfig.map.getLayers().getLength() + 1
        });
        appConfig.map.addLayer(me._buffLayer);
        me._bindEvents();
      });
    },
    _bindEvents: function () {
      var me = this;
      on(me.draw, "click", function () {
        me._mapTool.deactivate();
        me._buffLayer.getSource().clear();
        // var drawType = me.drawType.options[me.drawType.selectedIndex].value;
        var drawType=me._drawType;

        me._mapTool.activate(drawType);
      });

      on(me.buffer, "click", function () {
        var unit = me.unit.options[me.unit.selectedIndex].value;
        var unitText = me.unit.options[me.unit.selectedIndex].text;
        var distance = parseFloat(me.distance.value)||1000;
        // var drawType = me.drawType.options[me.drawType.selectedIndex].value;
        var drawType=me._drawType;
        var geom = null;
          if (unitText == "公里") {
              distance = distance * 1000;
          } else if (unitText == "英里") {
              distance = distance * 1000;
          }
        if (drawType == "point") {
          geom = new ol.geom.Point(me._geom.getGeometry().flatCoordinates);
        } else if (drawType == "polyline") {
          //geom = turf.lineString(me.spArray(2, me._geom.getGeometry().flatCoordinates));
            geom = new ol.geom.LineString(me.spArray(2, me._geom.getGeometry().flatCoordinates));
        } else if (drawType == "polygon") {
          var polygonArr = me.spArray(2, me._geom.getGeometry().flatCoordinates);
          polygonArr.push(polygonArr[0]);
            geom = new ol.geom.Polygon([polygonArr]);
        }
          var wkt = new ol.format.WKT().writeGeometry(geom, {
              dataProjection: "EPSG:4549",
              featureProjection: "EPSG:4549"
          });
          
          
          graphService.graphicalBuffer(distance, wkt).then(function (result) {
              
              if (result.code == "200") {
                  me._buffGeom = new ol.Feature({
                      geometry: new ol.format.WKT().readFeature(result.data).getGeometry(),
                      type: "polygon"
                  });
                  //将数据添加数据源的
                  me._buffLayer.getSource().clear();
                  me._buffLayer.getSource().addFeature(new ol.format.WKT().readFeature(result.data));
              } else {
                  alert("缓冲失败");
              }
          });
      
        domStyle.set(me.queryBtn,"display","block");
      });

      on(me.queryBtn, "click", function () {
        showLoading(true);
          me._mapTool.deactivate();
          //me._buffLayer.getSource().clear();
        debugger
          if (me._attrQueryTool === null) {
              me._attrQueryTool = new AttrQueryTool(appConfig.map, me._buffGeom, null, Loading);
              me._attrQueryTool.activate("buff");
          } else {
              me._attrQueryTool.deactivate();
              me._attrQueryTool = new AttrQueryTool(appConfig.map, me._buffGeom, null, Loading);
              me._attrQueryTool.activate("buff");
          }

          //Loading.hide();
      });
      /******/  
      on(me.point,'click',function(){
        ClearClickQuery();
        me._drawType='point'; 
        domStyle.set(me.point, 'border', '1px solid #1c74bb');
        domStyle.set(me.point, 'color', '#1c74bb');

        domStyle.set(me.polyline, 'border', '1px solid #dee2eb');
        domStyle.set(me.polyline, 'color', '#333');

        domStyle.set(me.polygon, 'border', '1px solid #dee2eb');
        domStyle.set(me.polygon, 'color', '#333');
        me.draw.click();
      });
      on(me.polyline,'click',function(){
        ClearClickQuery();
        me._drawType='polyline';
        domStyle.set(me.polyline, 'border', '1px solid #1c74bb');
        domStyle.set(me.polyline, 'color', '#1c74bb');
        
        domStyle.set(me.point, 'border', '1px solid #dee2eb');
        domStyle.set(me.point, 'color', '#333');

        domStyle.set(me.polygon, 'border', '1px solid #dee2eb');
        domStyle.set(me.polygon, 'color', '#333');
        me.draw.click();
      });
      on(me.polygon,'click',function(){
        ClearClickQuery();

        me._drawType='polygon';
        domStyle.set(me.polygon, 'border', '1px solid #1c74bb');
        domStyle.set(me.polygon, 'color', '#1c74bb');

        domStyle.set(me.polyline, 'border', '1px solid #dee2eb');
        domStyle.set(me.polyline, 'color', '#333');

        domStyle.set(me.point, 'border', '1px solid #dee2eb');
        domStyle.set(me.point, 'color', '#333');
        me.draw.click();
        
      });
      on(me.subSidebox_close,'click',function(){
        domStyle.set(me.domNode, 'display', 'none');
        _checkQuery=true;
        _attrQueryTool.activate("point");
      });
      /******/
    },
    getGeo: function (_feature) {
      var me = this;
      me._geom = _feature;
    },
    spArray: function (n, arr) {
      var newArr = [],
        i;
      for (i = 0; i < arr.length; ) {
        newArr.push(arr.slice(i, (i += n)));
      }
      return newArr;
    }
  });
});

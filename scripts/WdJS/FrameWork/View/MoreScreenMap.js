define([
  "dojo/_base/declare",
  "dojo/parser",
  "dijit/_WidgetBase",
  "dijit/_TemplatedMixin",
  "dojo/text!./templates/MoreScreenMap.txt",
  "dojo/on",
  "dojo/dom-style",
  "dojo/dom-class",
  "dojo/dom-attr",
  "dojo/dom-construct",
  "dojo/_base/array",
  "dojo/_base/lang",
  "FrameWork/MapUtil/MapConfig2",
  "FrameWork/MapUtil/MapFactory","FrameWork/AttrQuery/Attribute_MoreScreen",
], function (
  declare,
  parser,
  _WidgetBase,
  _TemplatedMixin,
  template,
  on,
  domStyle,
  domClass,
  domAttr,
  domConstruct,
  array,
  lang,
  MapConfig2,
  MapFactory,Attribute_MoreScreen
) {
  return declare([_WidgetBase, _TemplatedMixin], {
    templateString: template,
    _map: null,
    _triggerMap: null,
      index: null,
      _MapConfig:null,
      _attribute:null,

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
        me._MapConfig=_otherRegion();
        me._MapConfig.option.view.projection = projection_4549;
          var _view = new ol.View( me._MapConfig.option.view);
          domAttr.set(me.domNode, 'index', me.index);
        me._map = new ol.Map({
          controls: ol.control.defaults({ attribution: false, zoom: false, rotate: false }).extend([]),
          view: _view,
          target: me.mapDiv2,
          renderer: "canvas"
        });
        me._map.setView(appConfig.map.getView());
        me.pushMapArr(me._map);
        setTimeout(
          function () {
            me._map.updateSize();
            appConfig.map.updateSize();
          }.bind(this),
          500
        );
        me._initMap2Layers();
        me._bindLinkageEvents();
        me._setBaseMapSelected();
        me._bindEvents();
      });
    },
    _bindEvents: function () {
      var me = this;
    },
    _initMap2Layers: function () {
      var me = this;
      for (var i = 0; i < MapConfig2.layers.length; i++) {
        var _layer = MapConfig2.layers[i];
        if (_layer.layerType === "GroupLayer" && _layer.subLayers instanceof Array && _layer.subLayers.length > 0 && _layer.baseMap) {
          MapFactory._getsubLayers(_layer.subLayers, _layer, MapConfig2, me._map);
        }
      }
    },

    showqueryResult:function(dataList,_highlightedStyle,mapArr){
      var me=this;
      if(me._attribute!=null){
        me._attribute.destroy();
      }
      me._attribute=null;
        me._attribute = new Attribute_MoreScreen({
          _dataList: dataList,
          _highlightedStyle: _highlightedStyle,
          mapArr: mapArr,
      }).placeAt(me.domNode);
      me._attribute.startup();
    },
    _bindLinkageEvents: function () {
      var me = this;
      // ???????????????????????????
      var mapArr = me.getMapArr();
      me._triggerMap = mapArr[0];
      var mapArr = me.getMapArr();
      // ???????????????????????????
      array.forEach(
        mapArr,
        function (item) {
          // ????????????????????????????????????
          var mapExtentChange = item.on("zoomend", lang.hitch(me, me._onMapExtentChange));
          //   me._eventHandlerArr.push(mapExtentChange);
          me.pushEventHandlerArr(mapExtentChange);

          var mapMoveChange = item.on("moveend", lang.hitch(me, me._onMapExtentChange));
          //   me._eventHandlerArr.push(mapMoveChange);
          me.pushEventHandlerArr(mapMoveChange);

          // ???????????????????????????TODO:bug?????????2??????????????????????????????????????????2??????????????????????????????
          var mapMouseOver = item.on(
            "mouse-over",
            lang.hitch(me, function (evt) {
              // ????????????????????????
              me._triggerMap = item;
              //console.log("mouse-over:" + item.id);
            })
          );
          //   me._eventHandlerArr.push(mapMouseOver);
          me.pushEventHandlerArr(mapMouseOver);
        },
        this
      );
    },
    _onMapExtentChange: function (evt) {
      var me = this;
      if (me._triggerMap === evt.target) {
        array.forEach(
          me.getMapArr(),
          function (item) {
            if (item !== me._triggerMap) {
              item.setView(me._triggerMap.getView());
            }
          },
          this
        );
      }
    },
    _setBaseMapSelected: function () {
      var me = this;
      var caption = dojo.byId("baseMapChangeSelect-caption").innerHTML;
      var _mapLayers = me._map.getLayers().array_;
      for (var i = 0; i < _mapLayers.length; i++) {
        var _layer = _mapLayers[i];
        var _values = _layer.values_;
        if (_values.baseMap) {
          _layer.setVisible(_values.groupCaption === caption);
        }
      }
    },

    pushEventHandlerArr: function () {},
    pushMapArr: function () {},
    getMapArr: function () {},
  });
});

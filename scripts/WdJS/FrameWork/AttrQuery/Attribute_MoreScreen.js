define([
  "dojo/_base/declare",
  "dojo/parser",
  "dijit/_WidgetBase",
  "dijit/_TemplatedMixin",
  "dojo/text!./templates/Attribute_MoreScreen.html",
  "dojo/on",
  "dojo/dom-style",
  "dojo/dom-class",
  "dojo/dom-attr",
  "dojo/dom-construct",
  "FrameWork/AttrConfig","./MoreScreenConfig","FrameWork/serviceUtil/queryService","./Attri_MoreScrXMFW"
], function (declare, parser, _WidgetBase, _TemplatedMixin, template, on, domStyle, domClass, domAttr, domConstruct, AttrConfig,MoreScreenConfig,queryService,Attri_MoreScrXMFW) {
  return declare([_WidgetBase, _TemplatedMixin], {
    templateString: template,
    index: 0,
    _handler: null,
    _sort:[],
    _data:[],
    _type:null,
    _showFeatureData:null,
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
        me.index = 0;
        me._sort=[];
        me._type=null;
        me._showFeatureData=null;
        if (me._dataList.data!=undefined && me._dataList.data.length > 0) {

          for (var i = 0; i < me._dataList.data.length; i++) {
            me.classification(me._dataList.data[i]);
          }
          me._data=me._sort[0]._layerData;
          var layer=me._sort[0].layerid;

          me.showNavItem();

          me.setFeature(me._data[0]);
          me.setLayer(me._data,layer);
          

        } else {
          me.layerList.innerHTML = "";
          me.content.innerHTML = "";
        }
        domStyle.set(me.content, "max-height", parseFloat(me.attrDiv.offsetHeight) - 40 + "px");
        me._bindEvents();
      });
    },
    classification: function (feature) {
      var me = this;
      var getAttrConfig = getAttr();
      var obj = getAttrConfig.layers.find(function (obj) { return obj.id == feature.properties.gml.featureType; });
      if (obj == undefined) {
          return;
      }
      for (var i = 0; i < me._sort.length; i++) {
          if (me._sort[i].layername == obj.name) {
              me._sort[i]._layerData.push(feature);
              return;
          }
      }
      var newSort = {
          layername: obj.name,
          layerid:obj.id,
          _layerData: [feature]
      }
      me._sort.push(newSort)
  },

  showNavItem: function () {
    var me = this;
    me.nav.innerHTML = "";
    
    for (var i = 0; i < me._sort.length; i++) {
        var navitem = '';
        if (me._sort[i].layername.length > 7) {
            navitem = me._sort[i].layername.substring(0, 7) + "...";
        } else {
            navitem = me._sort[i].layername;
        }
        if (i == 0) {
            me.nav.innerHTML += `<div count=${i} class="layerNav" style="border: 1px solid #1c74bb;color: #1c74bb;" title="${me._sort[i].layername}">${navitem} </div>`;
        } else {
            me.nav.innerHTML += `<div count=${i} class="layerNav"  title="${me._sort[i].layername}">${navitem} </div>`;
        }
    }

    dojo.query(".layerNav", me.domNode).forEach((dom) => {
        on(dom, "click", function (event) {
            dojo.query(".layerNav", me.domNode).forEach((dom) => {
                domStyle.set(dom, 'border', '1px solid #ccc');
                domStyle.set(dom, 'color', '#a0a0a0');
            })
            domStyle.set(dom, 'border', '1px solid #1c74bb');
            domStyle.set(dom, 'color', '#1c74bb');
            var domname = domAttr.get(dom, 'title');
            for (var i = 0; i < me._sort.length; i++) {
                if (me._sort[i].layername == domname) {
                    me._data= me._sort[i]._layerData;
                    var layer=me._sort[i].layerid;
                    me.setLayer(me._data,layer);

                    me.index = 0;
                }
            }
            me.setFeature(me._data[me.index]);
            event.stopPropagation();
        });
    });
},

    _bindEvents: function () {
      var me = this;
      on(me.close, "click", function () {
        me.destroy();
        me.layerClickDis();
        var map= me.mapArr;
        for (var i = 0; i < map.getLayers().array_.length; i++) {
          var layer = map.getLayers().array_[i];
          var layer_id = layer.get("id");
          if (layer_id == "highlighted") {
            layer.getSource().clear();
          }
        }
      });
      // query
      on(me.query, "click", function () {
        debugger
        var status = domAttr.get(me.query,"btnstatus");
        if(status ==  "unselect"){
          me.query_gcData();

        }else if(status ==  "select"){
          domAttr.set(me.query,"btnstatus","unselect");
          domAttr.set(me.query,"title","返回");
          domStyle.set(me.query,"background-color","white");
          domStyle.set(me.content1,"display","block");
          domStyle.set(me.nav,"display","block");
          domStyle.set(me.content2,"display","none");
        }
      
        
      });
    },

    query_gcData:function(){
      var me =this;
      // db,schema,table,search_field,search_value
      var msg =me._type;
      var search_value=me._showFeatureData.properties.attributes[msg.search_field];
      queryService.tyquery(msg.database,msg.schema,msg.table,msg.search_field,search_value).then(function(re){
        if(re.code == "200"){
          debugger
          if(re.data==undefined || re.data==null||re.data.length==0){
            alert("无过程数据");
          }else{
            if(me._xmfwData != null){
              me._xmfwData.destroy();
              me._xmfwData=null;
            }
            domAttr.set(me.query,"btnstatus","select");
          domAttr.set(me.query,"title","查看过程数据");
            domStyle.set(me.content1,"display","none");
            domStyle.set(me.nav,"display","none");
            domStyle.set(me.content2,"display","block");
            domStyle.set(me.query,"background-color","#dbd3d3");

            me._xmfwData=new Attri_MoreScrXMFW({_data : re.data,_type:me._type,mapArr:me.mapArr,_highlightedStyle:me._highlightedStyle}).placeAt(me.content2);
            me._xmfwData.startup();
          }
        }
      })
    },
    arrSortByKey :function (arr, givKey) {
      const listArr =arr;
      listArr.sort((data1, data2) => {
          var val1=data1.properties.data;
          var val2=data2.properties.data;

        const val1KeyVal = val1[givKey] || '';
        const app2KeyVal = val2[givKey] || '';
        if (val1KeyVal > app2KeyVal) {
          return 1;
        } else if (val1KeyVal === app2KeyVal) {
          return 0;
        } else {
          return -1;
        }
      })
      return listArr;
    },
    
    setLayer: function (data,layer) {
      var me = this;
      debugger
      me.layerList.innerHTML = "";
      var obj = AttrConfig.layers.find(function (obj) {
        return obj.id == layer;
      });
      var showzd=null;

      var settype=MoreScreenConfig.layers.find(function(obj){
        return obj.id == layer
      })
      if(settype!=undefined){
        me._type=settype;
      }else{
        me._type=null;
      }
      if(me._type!=null && me._type.moreScreen == 'xmfw' ){
        domStyle.set(me.query,"display","block");
        showzd=me._type.showzd
        me.arrSortByKey(me._data,showzd);
      }else{
        domStyle.set(me.query,"display","none");
      }

      data.forEach((li, index) => {
       if(showzd!=null){
          var text =li.properties.data[showzd];
       }else{
          var text =obj.name;
       }
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
        me.setFeature(me._data[id],2);
      });
    },
    layerClickDis: function () {
      var me = this;
      if (me._handler != null) {
        dojo.disconnect(me._handler);
        me._handler = null;
      }
    },
    _destroy: function () {
      var me = this;
      me.destroy();
      me.layerClickDis();
    },

    setFeature: function (feature,type) {
      var me = this;
      me._showFeatureData=feature;
      var obj = AttrConfig.layers.find(function (obj) {
        return obj.id == feature.properties.gml.featureType;
      });
      if (obj == undefined) {
        alert("AttrConfig中该图层配置未找到");
        return;
      }
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
      if (feature.geometry.type == "MultiPolygon" || feature.geometry.type == "MultiLineString"|| feature.geometry.type=="Polygon") {
        if (feature.geometry.type == "MultiPolygon") {
          geom = new ol.Feature({ geometry: new ol.geom.MultiPolygon(feature.geometry.coordinates) });
          geom.setStyle(me._highlightedStyle);
        } else if (feature.geometry.type == "MultiLineString") {
          geom = new ol.Feature({ geometry: new ol.geom.MultiLineString(feature.geometry.coordinates) });
          geom.setStyle(me._highlightedStyle);
        }else if ( feature.geometry.type== "Polygon") {
          geom = new ol.Feature({ geometry: new ol.geom.Polygon(feature.getGeometry().getCoordinates()) });
          geom.setStyle(me._highlightedStyle);
      }
        var r = map.getView().getResolutionForExtent(geom.getGeometry().getExtent(), map.getSize());
        map.getView().setResolution(r);
        map.getView().setCenter(ol.extent.getCenter(geom.getGeometry().getExtent()));
      } else if (feature.geometry.type == "Point") {
        geom = new ol.Feature({ geometry: new ol.geom.Point(feature.geometry.coordinates) });
        map.getView().setCenter(ol.extent.getCenter(geom.getGeometry().getExtent()));
      }
      _highlightedLayer.getSource().addFeature(geom);
      var innerHTML = "";
      var attributes = feature.properties.attributes;
      obj.field.forEach((f) => {
        if (f.name.toLowerCase().indexOf("objectid") < 0 && f.name.toLowerCase().indexOf("shape") < 0) {
          // f.alias 
          innerHTML += `<tr> <td>${f.alias||f.name}</td>`;
          // value
          if (f.type == "numeric" || f.type == "number" && String(attributes[f.name]).indexOf(".") > 0) {
              var num = Number(attributes[f.name]);
              innerHTML += `<td> ${num}</td></tr>`;

          } 
          else if ((f.type == "date"|| f.type == "timestamp") && String(attributes[f.name]).indexOf("T") > 0) {
              innerHTML += `<td> ${attributes[f.name].split("T")[0]}</td></tr>`;
          }else{
              innerHTML += `<td> ${(attributes[f.name] || "")}</td></tr>`;
          }
      }
    })
      me.title.innerHTML = "分屏" + (parseInt(me._dataList.index) + 1);
      me.content_table.innerHTML = innerHTML;
    },
  });
});

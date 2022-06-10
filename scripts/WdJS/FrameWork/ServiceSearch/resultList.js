define([
    "dojo/_base/declare",
    "dojo/parser",
    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin",
    "dojo/text!./templates/resultList.txt",
    "dojo/on",
    "dojo/dom-style",
    "dojo/dom-class",
    "dojo/dom-attr",
    "dojo/dom-construct",
    "FrameWork/MapUtil/SuperMapWFSQuery",
    "FrameWork/AttrConfig",
    "FrameWork/AttrQuery/Attribute"
  ], function (declare, parser, _WidgetBase, _TemplatedMixin, template, on, domStyle, domClass, domAttr, domConstruct,SuperMapWFSQuery,AttrConfig,Attribute) {
      return declare([_WidgetBase, _TemplatedMixin], {
          templateString: template,
          index: 0,
          isExpand: false,
          _Layer:null,
          _highlightedLayer: null,
          _attrLisy:null,
          //高亮图层颜色
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
                  color: "BLACK",
                  width: 4,
                  lineDash: [1, 2, 3, 4, 5, 6]
              })
          }),
  
          constructor: function (args) { 
          

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
                  me._bindEvents();
                  me._showmatch(me._Value);
              });
          },
          _showmatch:function(value){
            var me=this;
            // showList
            var showList=[];
            for (el in me._data){
              var con= me._data[el];
              var contype=typeof(con);
              if( el != "shape" && el != "id" && el != "id_old_id" && contype == "string"){
                var pd=con.indexOf(value);
                if(pd >= 0 ){
                  if(pd=="xmmc"){
                    showList.unshift(el);
                  }else{
                    showList.push(el);
                  }
                }
              }
            }
            
            // show
            var getAttrConfig = getAttr();
            var obj = getAttrConfig.layers.find(function (obj) {
              return obj.id == me.layerid;
            });
            me.title.innerHTML=obj.name;
            var val1, name1;
            if(showList.length>0){
              val1=me._data[showList[0]];
              obj.field.forEach(el =>{
                if(el.name == showList[0] ){
                    name1=el.alias;
                }
              })
            }
            me.feature1.innerHTML=`${name1}:${val1}`;

            return showList;
          },


          _bindEvents: function () {
            var me=this;
            on(this.domNode,"click",function(){
                dojo.query("..resultListActive").forEach((dom) => {
                    domAttr.set(dom,'class','resultList');
                  });
                domAttr.set(this.domNode,'class','resultListActive');
                me.showAttr(me._data, me.layerid);
            }.bind(this));
          },
          
          showAttr: function (data) {}

      });
  });
  
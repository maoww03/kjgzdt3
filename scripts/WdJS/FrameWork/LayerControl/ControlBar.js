define([
  "dojo/_base/declare",
  "dojo/text!./templates/ControlBar.txt",
  "dijit/_TemplatedMixin",
  "dijit/_WidgetBase",
  "dojo/on",
  "dojo/dom-style",
  "dojo/parser",
  "dojo/dom-class",
  "dojo/dom-attr",
  "dojo/_base/lang",
  "dojo/_base/array"
], function (declare, template, TemplatedMixin, WidgetBase, on, domStyle, parser, domClass, domAttr, lang, array) {
  return declare([WidgetBase, TemplatedMixin], {
    templateString: template,
    data: null,

    _started: false,
    _graphicalmapFolderNode: null,
    _operationalmapFolderNode: null,
    _basemapFolderNode: null,
    _zTree: null,
    _isChecked: false,
    _MapConfig:null,

    constructor: function (args) {},
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
      parser.parse(this.domNode).then(
        function () {
          this._MapConfig=_otherRegion();
          this.tree.id = "ControlBar";
          this._initTree();
          this._createNodes();

          // this.bindEvent();
        }.bind(this)
      );

      this._started = true;
    },
    _initTree: function () {
      var me = this;
      me._MapConfig=_otherRegion();
      var setting = {
        check: {
          enable: true,
        },
        view: {
          showIcon: false,
          showLine: false,
          selectedMulti: false,
          addDiyDom: $.proxy(me._addDiyDom, me),
          fontCss: { color: "rgb(90, 102, 128)" },
          // 屏蔽双击展开
          // dblClickExpand: false,
        },
        callback: {
          onCheck: $.proxy(me._onCheck, me),
          beforeDrag: $.proxy(me._beforeDrag, me),
          beforeDrop: $.proxy(me._beforeDrop, me),
          onDrop: $.proxy(me._onDrop, me),
        },
        edit: {
          showRemoveBtn: false,
          showRenameBtn: false,
        },
      };

      var zNodes = [];
      var zTree = $.fn.zTree.init($(this.tree), setting, zNodes);

      me._zTree = zTree;
      var graphicalmapFolderNodeData = {
        name: "图形图层",
        isParent: true,
        open: true,
        checked: true,
        drag: false,
        nodeType: "folder",
      };
      me._graphicalmapFolderNode = zTree.addNodes(null, graphicalmapFolderNodeData)[0];
      var operationalmapFolderNodeData = {
        name: "专题图层",
        isParent: true,
        open: true,
        checked: true,
        drag: false,
        nodeType: "folder",
      };
      me._operationalmapFolderNode = zTree.addNodes(null, operationalmapFolderNodeData)[0];
      var basemapFolderNodeData = {
        name: "基础图层",
        isParent: true,
        open: true,
        checked: true,
        chkDisabled: true,
        drag: false,
        nodeType: "folder",
      };
      me._basemapFolderNode = zTree.addNodes(null, basemapFolderNodeData)[0];
    },
    _refresh: function (evt) {
      if (!evt.target.isControlCheked) {
        this._initTree();
        this._createNodes();
      }
      evt.target.isControlCheked = false;
    },
    refresh: function () {
      this._initTree();
      this._createNodes();
    },
      _BaseMaprefresh: function (evt) {
          var basemapFolderNode = this._zTree.getNodes()[2];
          var zTree = this._zTree;

          array.forEach(basemapFolderNode.children, function (node) {
              // radio
              var radioId = node.tId + "_radio";
              var radio = $("#" + radioId);


              // slider
              var sliderId = node.tId + "_slider";
              var slider = $("#" + sliderId);

              if (evt.target.values_.visible) {
                  if (node.name === dojo.byId("baseMapChangeSelect-caption").innerHTML) {
                      radio.removeClass("radio_false_full");
                      radio.addClass("radio_true_full");
                      slider.removeClass("invisible");

                      array.forEach(node.children, function (childNode) {
                          zTree.setChkDisabled(childNode, false);
                      });
                  } else {
                      radio.removeClass("radio_true_full");
                      radio.addClass("radio_false_full");
                      slider.addClass("invisible");

                      array.forEach(node.children, function (childNode) {
                          zTree.setChkDisabled(childNode, true);
                      });
                  }
              }
          });
          zTree.setChkDisabled(evt.target.tocNode, false);
          zTree.checkNode(evt.target.tocNode, evt.target.values_.visible, true, false);
      },
    _createNodes: function () {

      var me = this;
      me._MapConfig=_otherRegion();
      var basemapFolderNode = me._basemapFolderNode;
      //地图底图
      for (var i = 0; i < me._MapConfig.layers.length; i++) {
        if (me._MapConfig.layers[i].baseMap) {
          var basemapNodeData = {
            name: me._MapConfig.layers[i].caption,
            isParent: true,
            nocheck: true,
            checked: me._MapConfig.layers[i].visible,
            drag: false,
            nodeType: "basemap",
            basemapId: me._MapConfig.layers[i].name,
          };
          var basemapNode = me._zTree.addNodes(basemapFolderNode, basemapNodeData)[0];
          for (var j = 0; j < appConfig.map.getLayers().array_.length; j++) {
            var layer = appConfig.map.getLayers().array_[j];
            if (layer.values_.baseMap) {
              if (layer.values_.groupCaption === me._MapConfig.layers[i].caption) {
                var layerNodeData = {
                  name: layer.values_.name,
                  iconSkin: "serviceMapLayer",
                  checked: layer.values_.visible,
                  drag: false,
                  chkDisabled: !layer.values_.visible,
                  nodeType: "mapLayer",
                  mapLayerId: layer.values_.id,
                };

                var layerNode = me._zTree.addNodes(basemapNode, layerNodeData)[0];
                layer.tocNode = layerNode;

                layer.on("change:visible", lang.hitch(me, me._BaseMaprefresh));
              }
            }
          }
        }
      }

      /*************20210407************ */
      var parentNode = me._operationalmapFolderNode;
      var parentNodeCheck = false;
      //专题图层
      for (var i = 0; i < appConfig.map.getLayers().array_.length; i++) {
        var layer = appConfig.map.getLayers().array_[i];
        if (layer.values_.thematicMap) {
          layer.isControlCheked = false;
          layer.on("change:visible", lang.hitch(me, me._refresh));

          var newNodeData = {
            name: layer.values_.name,
            iconSkin: "serviceMapLayer",
            checked: layer.values_.visible,
            nodeType: "mapLayer",
            mapLayerId: layer.values_.id,
          };
          var newNode = me._zTree.addNodes(parentNode, newNodeData)[0];

          // 新增节点移到最上面
          me._zTree.moveNode(parentNode.children[0], newNode, "prev");
          if (!layer.values_.visible) {
            me._zTree.hideNode(newNode);
          } else {
            parentNodeCheck = true;
          }
        }
      }
      if (parentNodeCheck) {
        me._zTree.checkNode(parentNode, true, true);
        me._zTree.updateNode(parentNode);
      }

      /*************20210407end************ */
      for (var i = 0; i < appConfig.map.getLayers().array_.length; i++) {
        // debugger;
        // 新增节点
        var layer = appConfig.map.getLayers().array_[i];

        if (layer.values_.graphicMap && layer.getSource().getFeatures().length) {
          var parentNode = me._graphicalmapFolderNode;
          var newNodeData = {
            name: layer.values_.layerTitle || "未命名图层",
            iconSkin: "graphicMapLayer",
            checked: layer.values_.visible,
            nodeType: "mapLayer",
            mapLayerId: layer.values_.id,
          };
          var newNode = me._zTree.addNodes(parentNode, newNodeData)[0];

          // 新增节点移到最上面
          me._zTree.moveNode(parentNode.children[0], newNode, "prev");
        }
      }
    },
    _onCheck: function (event, treeId, treeNode) {
        var me = this;
       
      if (treeNode.nodeType == "folder" && $.isArray(treeNode.children)) {
        for (var i = 0; i < treeNode.children.length; i++) {
          var childNode = treeNode.children[i];
          me._setMapLayerVisible(childNode);
        }
      } else if (treeNode.nodeType == "mapLayer") {
        me._setMapLayerVisible(treeNode);
      }
      else if (treeNode.nodeType == "innerLayer") {
        me._setInnerLayerVisible(treeNode);
      }
    },
    _setMapLayerVisible: function (treeNode) {
      var me = this;
      var map = appConfig.map;

      //console.log(treeNode.checked);

      var layerId = treeNode.mapLayerId;
      for (var i = 0; i < appConfig.map.getLayers().array_.length; i++) {
        var layer = appConfig.map.getLayers().array_[i];
        if (layer.values_.id === layerId) {
          layer.isControlCheked = true;
          layer.setVisible(treeNode.checked);
        }
      }
    },
    _addDiyDom: function (treeId, treeNode) {
      var me = this;
      var zTree = me._zTree;
      // radio box
      if (treeNode.nodeType === "basemap") {
        var aObj = $("#" + treeNode.tId + "_a");
        var radioId = treeNode.tId + "_radio";
        var radioStr = '<span id="' + radioId + '" class="basemap button chk radio_' + treeNode.checked + '_full"></span>';
        aObj.before(radioStr);

        /*************20210407************ */
          $("#" + radioId).click(function (evt) {
              
          var basemapFolderNode = me._basemapFolderNode;
          var parentNode = me._zTree.getNodeByTId(evt.target.id.split("_radio")[0]);
          for (var i = 0; i < me._MapConfig.layers.length; i++) {
            if (me._MapConfig.layers[i].baseMap) {
              if (me._MapConfig.layers[i].caption === parentNode.name) {
                dojo.byId("baseMapChangeSelect-logo").src = me._MapConfig.layers[i].logo;
                dojo.byId("baseMapChangeSelect-caption").innerHTML = parentNode.name;

                dojo.query(".logo_border").forEach(function (dom) {
                  console.log(dom.parentNode.parentNode);
                  if (domAttr.get(dom.parentNode.parentNode, "caption") == parentNode.name) {
                    domStyle.set(dom, "border-color", "#5ba7fb");
                    domAttr.set(dom, "selected", "selected");
                  } else {
                    domStyle.set(dom, "border-color", "white");
                    domAttr.set(dom, "selected", "un");
                  }
                });
                dojo.query(".BaseMapChange").forEach(function (dom) {
                  //   console.log(dom);
                  if (domAttr.get(dom, "caption") == parentNode.name) {
                    domAttr.set(dom, "selected", "selected");
                  } else {
                    domAttr.set(dom, "selected", "un");
                  }
                });
                // domStyle.set(this.logo, "border-color", "#5ba7fb");
                // domAttr.set(this.domNode, "selected", "selected");
                break;
              }
            }
          }
          for (var i = 0; i < appConfig.map.getLayers().array_.length; i++) {
            var layer = appConfig.map.getLayers().array_[i];
            if (layer.values_.baseMap) {
              if (layer.values_.groupCaption === parentNode.name) {
                layer.isControlCheked = true;
                layer.setVisible(true);
              } else {
                layer.isControlCheked = true;
                layer.setVisible(false);
              }
            }
          }
        });
        /*************20210407end************ */
        
      }

      /*图层控制样式更改***********************/ 
      // 透明度treeNode.nodeType === "basemap"
      if (treeNode.nodeType === "basemap" || (treeNode.nodeType === "mapLayer" && treeNode.getParentNode().nodeType !== "basemap")) {
        var sliderInvisible = false;
        for (var i = 0; i < appConfig.map.getLayers().array_.length; i++) {
          var layer = appConfig.map.getLayers().array_[i];
          if (layer.values_.visible && layer.values_.baseMap) {
            if (treeNode.nodeType === "basemap" && treeNode.name !== layer.values_.groupCaption) {
              sliderInvisible = true;
              break;
            }
          }
        }

        var aObj = $("#" + treeNode.tId + "_a");
        var sliderId = treeNode.tId + "_slider";
        var sliderStr = '<div id="' + sliderId + '" class="toc-slider' + (sliderInvisible ? " invisible" : "") + '"></div>';
        aObj.after(sliderStr);
        var slider = $("#" + sliderId);
        slider.noUiSlider({
          start: 1,
          connect: "lower",
          range: {
            min: 0,
            max: 1,
          },
        });

        slider.on("slide", function (arr, val) {
          val = parseFloat(val);
          //console.log(treeNode);
          if (treeNode.nodeType === "basemap") {
            for (var i = 0; i < treeNode.children.length; i++) {
              var childNode = treeNode.children[i];
              // 设置地图图层不透明度
              me._setMapLayerOpacity(childNode, val);
            }
          } else if (treeNode.nodeType === "mapLayer") {
            // 设置地图图层不透明度
            me._setMapLayerOpacity(treeNode, val);
          }
        });
      }
      
      //全幅显示 basemap 基础图层 mapLayer专题图层 图形图层
      if (treeNode.nodeType === "mapLayer") {
        //  debugger
        var aObj2 = $("#" + treeNode.tId + "_a");
        var parentId = $("#" + treeNode.tId)
          .parent()
          .parent()
          .attr("id");
        if (parentId == "ControlBar_2") {
          var fullframeId = treeNode.tId + "_fullframe";
          var fullframeStr = '<div id="' + fullframeId + '" class="fullframe' + (sliderInvisible ? " invisible" : "") + '"></div>';
          aObj2.after(fullframeStr);
        }

        var fullframe = $("#" + fullframeId);
        fullframe.on("click", function () {
          // console.log("全幅显示");
          me._fullframe(treeNode);
          return true;
        });
      }

      
       $("#"+treeNode.tId).css("position",'relative');
       $("#"+treeNode.tId + "_radio").css("position",'absolute')
       .css("right",'0px')
       .css("margin-top",'2px');
       $("#"+treeNode.tId + "_check").css("position",'absolute')
       .css("right",'0px')
       .css("margin-top",'2px');
       if (treeNode.isParent != true){
        var aObj = $("#" + treeNode.tId + "_a");
                  var authorityId = treeNode.tId + "_authority";
                  var authorityStr = '<span id="' + authorityId + '" class="authority"></span>';
                  aObj.before(authorityStr);
                  var layerid = treeNode.id;
        }
     /*图层控制样式更改***********************/ 





    },
    // 全幅显示
    _fullframe: function (treeNode) {
      var me = this;
      var map = appConfig.map;
      // alert(treeNode);
      var layerId = treeNode.mapLayerId;
      for (var i = 0; i < appConfig.map.getLayers().array_.length; i++) {
        var layer = appConfig.map.getLayers().array_[i];
        if (layer.values_.id === layerId) {
          // debugger
          try {
            var a = layer.getSource().getExtent();
          } catch (e) {
            var a = layer.getSource().getTileGrid().getExtent();
          }
          var r = map.getView().getResolutionForExtent(a, map.getSize());
          map.getView().setResolution(r);
          map.getView().setCenter(ol.extent.getCenter(a));
        }
      }
    },

    _setMapLayerOpacity: function (treeNode, opacity) {
      var me = this;
      var map = appConfig.map;
      var layerId = treeNode.mapLayerId;
      for (var i = 0; i < appConfig.map.getLayers().array_.length; i++) {
        var layer = appConfig.map.getLayers().array_[i];
        if (layer.values_.id === layerId) {
          layer.setOpacity(opacity);
        }
      }
    },

    setWidgetVisible: function (visible) {
      if (visible) {
        domStyle.set(this.domNode, "display", "block");
        dojo.byId("siderbar-container").style.display = "block";
      } else {
        domStyle.set(this.domNode, "display", "none");
        dojo.byId("siderbar-container").style.display = "none";
      }
    }
  });
});

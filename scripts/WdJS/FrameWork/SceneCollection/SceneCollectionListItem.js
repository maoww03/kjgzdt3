define([
  "dojo/_base/declare",
  "dojo/text!./templates/SceneCollectionListItemTemplate.txt",
  "dijit/_TemplatedMixin",
  "dijit/_WidgetBase",
  "dojo/on",
  "dojo/dom-style",
  "dojo/parser",
  "dojo/dom-class",
  "dojo/dom-attr",
  "dojo/_base/lang",
    "dojo/_base/array", "FrameWork/serviceUtil/sceneService"
  //20210402
], function (
    declare,
    template,
    TemplatedMixin,
    WidgetBase,
    on,
    domStyle,
    parser,
    domClass,
    domAttr,
    lang,
        array, sceneService
   
    //20210402
) {
    return declare([WidgetBase, TemplatedMixin], {
        templateString: template,
        data: null,
        index: null,

        _started: false,
       
        userid: user.id,

        constructor: function (args) { },
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
                me._MapConfig=_otherRegion();
                this.xh.innerHTML = this.index;
                this.name.innerHTML = this.data.scenename;
                this.bindEvent();
            }.bind(this));

            this._started = true;
        },
        // ----------------------click
        bindEvent: function () {
            on(this.domNode, 'click', function () {
               
                var extent = eval('(' + this.data.sceneextent + ')');
                var center = extent.center.split(',');
                appConfig.map.getView().setCenter([Number(center[0]), Number(center[1])]);
                appConfig.map.getView().setZoom(extent.zoom);
                //appConfig.map.updateSize();
                sceneService.getSceneLayerList(this.data.id).then(function (result) {
                    if (result.code == "200") {
                        var showlayers = [];
                        var baseMapCapation = "";
                        for (var i = 0; i < result.data.length; i++) {
                            for (var j = 0; j < appConfig.map.getLayers().array_.length; j++) {
                                
                                // 新增节点
                                var layer = appConfig.map.getLayers().array_[j];

                                if (layer.values_.id == result.data[i].scenelayer) {
                                    if (layer.values_.baseMap) {
                                        baseMapCapation = layer.values_.groupCaption;
                                    } else {
                                        showlayers.push(layer);
                                    }
                                }
                            }
                        }
                        for (var i = 0; i < showlayers.length; i++) {
                            layer.setVisible(true);
                        }
                        for (var i = 0; i < appConfig.map.getLayers().array_.length; i++) {
                            var _layer = appConfig.map.getLayers().array_[i];
                            var _values = _layer.values_;
                            if (_values.baseMap) {
                                _layer.setVisible(_values.groupCaption === baseMapCapation);
                            }
                        }
                        for (var i = 0; i < me._MapConfig.layers.length; i++) {
                            if (me._MapConfig.layers[i].baseMap) {
                                if (me._MapConfig.layers[i].caption === baseMapCapation) {
                                    dojo.byId("baseMapChangeSelect-logo").src = me._MapConfig.layers[i].logo;
                                    dojo.byId("baseMapChangeSelect-caption").innerHTML = baseMapCapation;

                                    dojo.query(".logo_border").forEach(function (dom) {
                                        console.log(dom.parentNode.parentNode);
                                        if (domAttr.get(dom.parentNode.parentNode, "caption") == baseMapCapation) {
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
                    } else {
                        alert(result.msg);
                    }
                }.bind(this));
            }.bind(this));

            on(this.delete, 'click', function (evt) {
                evt.stopPropagation();
                if (confirm("是否删除?")) {
                    sceneService.deleteScene(this.data.id).then(function (result) {
                        if (result.code == "200") {
                            this.sucess();
                            
                        } else {
                            alert(result.msg);
                        }
                    }.bind(this));
                }
            }.bind(this));
        },
        sucess: function () {

        }
    });
});

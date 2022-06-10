define([
  "dojo/_base/declare",
  "dojo/text!./templates/SceneCollectionDialogTemplate.txt",
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
        _data: null,

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
                this.bindEvent();
            }.bind(this));

            this._started = true;
        },
        // ----------------------click
        bindEvent: function () {
            on(this.close, 'click', function (evt) {
                domStyle.set(this.domNode, 'display', 'none');
                _checkQuery=true;
                _attrQueryTool.activate("point");
            }.bind(this));

            on(this.submitBtn, 'click', function () {
                if (this.scenename.value == "") {
                    alert("请输入场景名称！");
                } else {
                    var sceneextent = "{center:'" + appConfig.map.getView().getCenter().toString() + "',zoom:'" + appConfig.map.getView().getZoom()+"'}";
                    var data = {
                        userid: this.userid,
                        scenename: this.scenename.value,
                        sceneextent: sceneextent
                    };
                   
                    sceneService.add_scene(dojo.toJson(data)).then(function (result) {
                        
                        var layerList = [];
                        for (var i = 0; i < appConfig.map.getLayers().array_.length; i++) {
                            var layer = appConfig.map.getLayers().array_[i];
                            
                            if (!layer.values_.graphicMap && layer.values_.visible) {
                                layerList.push({ sceneId: result.data.id, scenelayer: layer.values_.id});
                            }
                        }
                        sceneService.add_scenelayers(dojo.toJson(layerList)).then(function (result) {
                            if (result.code == "200") {
                                this.destroy();
                                alert(result.msg);
                            } else {
                                alert(result.msg);
                            }
                        }.bind(this));
                    }.bind(this));
                }
                _checkQuery=true;
                _attrQueryTool.activate("point");
            }.bind(this));
        }
    });
});

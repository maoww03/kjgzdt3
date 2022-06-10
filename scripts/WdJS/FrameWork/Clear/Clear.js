define([
    'dojo/_base/declare',
    'FrameWork/Command',
    'dojo/_base/lang', "dojo/_base/array", 'dojo/on', "dojo/dom-attr"
],
    function (declare, Command, lang, array, on, domAttr) {
        return declare('FrameWork.Clear.Clear', [Command], {
            frame: null,
            enabled: false,
            parentCommand: null,
            subCommands: null,
            name: null,
            


            constructor: function (args) {
                lang.mixin(this, args);
                this.inherited('constructor', arguments);
            },
            onCreate: function (e) {
                this.inherited('onCreate', arguments);
            },
            onClick: function (target) {
                if (this.enabled) {
                    this.inherited('onClick', arguments);
                    if (this.enabled) {
                        this.inherited('onClick', arguments);
                        for (var i = 0; i < appConfig.map.getLayers().array_.length; i++) {
                            // debugger;
                            // 新增节点
                            var layer = appConfig.map.getLayers().array_[i];
                            debugger
                            if (layer.values_.graphicMap && layer.getSource().getFeatures().length) {
                               var id=layer.values_.id;
                               if(id != "Custom_drawLayer"){
                                    layer.getSource().clear();
                               }
                            }
                        }

                        for (var i = 0; i < appConfig.map.overlays_.array_.length; i++) {
                            var overlay = appConfig.map.overlays_.array_[i];
                            overlay.setPosition(undefined);
                        }
                        
                    }
                    _checkQuery=true;
                    _attrQueryTool.activate("point");
                }
            }
        });
    });
define([
    'dojo/_base/declare',
    'FrameWork/Command',
    'dojo/_base/lang'
],
    function (declare, Command, lang) {
        return declare('FrameWork.View.FullExtent', [Command], {
            frame: null,
            enabled: false,
            parentCommand: null,
            subCommands: null,
            name: null,
            isFullScreen: false,

            constructor: function (args) {
                lang.mixin(this, args);
                this.inherited('constructor', arguments);
            },
            onCreate: function (e) {
                this.inherited('onCreate', arguments);
            },
            onClick: function (target) {
                this._MapConfig=_otherRegion();
                if (this.enabled) {
                    this.inherited('onClick', arguments);
                    if (this.enabled) {
                        this.inherited('onClick', arguments);
                        var r = appConfig.map.getView().getResolutionForExtent(this._MapConfig.extent, appConfig.map.getSize());
                        appConfig.map.getView().setResolution(r);
                        appConfig.map.getView().setCenter(ol.extent.getCenter(this._MapConfig.extent));
                       
                        
                    }
                }
            }
        });
    });
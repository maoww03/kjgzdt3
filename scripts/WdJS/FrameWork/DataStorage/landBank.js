define([
    'dojo/_base/declare',
    'FrameWork/Command',
    'dojo/_base/lang', "dojo/_base/array", 'dojo/on', "dojo/dom-attr", 
],
    function (declare, Command, lang,array, on, domAttr, ) {
        return declare('FrameWork.View.FullScreen', [Command], {
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

                window.open("http://10.36.128.241:10915/2221/iframe/16237610856806953?jwt_token=" + appConfig.access_token);

                if (this.enabled) {
                    this.inherited('onClick', arguments);
                    this.setWidgetVisible(true);
                }
            },
            setWidgetVisible: function (visible) {
                if (this._widget != null) {
                    this._widget.setWidgetVisible(visible);
                }
            }
        });
    });
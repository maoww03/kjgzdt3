define([
    'dojo/_base/declare',
    'FrameWork/Command',
    'dojo/_base/lang', "dojo/_base/array", 'dojo/on', "dojo/dom-attr", './SceneCollectionListBar'
],
    function (declare, Command, lang, array, on, domAttr, SceneCollectionListBar) {
        return declare('FrameWork.SceneCollection.SceneCollectionList', [Command], {
            frame: null,
            enabled: false,
            parentCommand: null,
            subCommands: null,
            name: null,
            _widget: null,



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

                       
                        if (this._widget !== undefined && this._widget !== null) {
                            this._widget.destroy();    
                        } 
                        this._widget = new SceneCollectionListBar({}).placeAt(dojo.body());
                        this._widget.startup();
                    }
                }
            }
        });
    });
define(["dojo/_base/declare", "FrameWork/Command", "dojo/_base/lang", "./addrQuery"], function (declare, Command, lang, addrQuery) {
    return declare("FrameWork.addrQuery.addrQuery", [Command], {
        frame: null,
        enabled: false,
        parentCommand: null,
        subCommands: null,
        name: null,
        _addrQuery: null,

        constructor: function (args) {
            lang.mixin(this, args);
            this.inherited("constructor", arguments);
        },
        onCreate: function (e) {
            this.inherited("onCreate", arguments);
        },
        onClick: function (target) {
            if (this.enabled) {
                this.inherited("onClick", arguments);
                if (this._addrQuery != null) {
                    appConfig.map.addOverlay(this._addrQuery._marker);
                    this._addrQuery.destroy();
                }
                this._addrQuery = new addrQuery().placeAt(dojo.body());
                this._addrQuery.startup();
            }
        }
    });
});

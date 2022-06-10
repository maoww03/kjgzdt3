define(["dojo/_base/declare", "FrameWork/Command", "dojo/_base/lang", "./doDownLoadExcel"], function (declare, Command, lang, doDownLoadExcel) {
    return declare("FrameWork.DownLoadExcel.DownLoadExcel", [Command], {
        frame: null,
        enabled: false,
        parentCommand: null,
        subCommands: null,
        name: null,
        _doDownLoadExcel: null,

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
                if (this._doDownLoadExcel != null) {
                    this._doDownLoadExcel.destroy();
                }
                this._doDownLoadExcel = new doDownLoadExcel().placeAt(dojo.body());
                this._doDownLoadExcel.startup();
            }
        }
    });
});

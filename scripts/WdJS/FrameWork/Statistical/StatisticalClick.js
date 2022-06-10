define(["dojo/_base/declare", "FrameWork/Command", "dojo/_base/lang", "./Statistical"], function (declare, Command, lang, Statistical) {
  return declare("FrameWork.Statistical.StatisticalClick", [Command], {
    frame: null,
    enabled: false,
    parentCommand: null,
    subCommands: null,
    name: null,
    _statistical: null,

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
        if (this._statistical != null) {
          this._statistical._destroy();
        }
        this._statistical = new Statistical().placeAt(dojo.body());
        this._statistical.startup();
      }
    },
  });
});

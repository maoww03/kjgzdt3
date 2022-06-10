define(["dojo/_base/declare", "FrameWork/Command", "dojo/_base/lang", "./PrintWeb"], function (declare, Command, lang, PrintWeb) {
  return declare("FrameWork.Print.Print", [Command], {
    frame: null,
    enabled: false,
    parentCommand: null,
    subCommands: null,
    name: null,
    _printWeb: null,

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
        if (this._printWeb != null) {
          this._printWeb.destroy();
        }
        this._printWeb = new PrintWeb().placeAt(dojo.body());
        this._printWeb.startup();
      }
    },
  });
});

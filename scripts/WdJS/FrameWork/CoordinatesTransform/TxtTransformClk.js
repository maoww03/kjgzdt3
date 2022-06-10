define(["dojo/_base/declare", "FrameWork/Command", "dojo/_base/lang", "./TxtTransform"], function (
  declare,
  Command,
  lang,
    TxtTransform
) {
    return declare("FrameWork.CoordinatesTransform.TxtTransformClk", [Command], {
    frame: null,
    enabled: false,
    parentCommand: null,
    subCommands: null,
    name: null,
    _coordinatesTransform: null,

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
          if (this._txtTransform != null) {
              this._txtTransform._destroy();
        }
          this._txtTransform = new TxtTransform().placeAt(dojo.body());
          this._txtTransform.startup();
      }
    },
  });
});

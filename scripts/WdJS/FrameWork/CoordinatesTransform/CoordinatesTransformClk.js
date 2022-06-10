define(["dojo/_base/declare", "FrameWork/Command", "dojo/_base/lang", "./CoordinatesTransform"], function (
  declare,
  Command,
  lang,
  CoordinatesTransform
) {
  return declare("FrameWork.CoordinatesTransform.CoordinatesTransformClk", [Command], {
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
        if (this._coordinatesTransform != null) {
          this._coordinatesTransform._destroy();
        }
        this._coordinatesTransform = new CoordinatesTransform().placeAt(dojo.body());
        this._coordinatesTransform.startup();
      }
    },
  });
});

define(["dojo/_base/declare", "FrameWork/Command", "dojo/_base/lang", "./TxtToShape"], function (declare, Command, lang, TxtToShape) {
  return declare("FrameWork.CoordinatesTransform.TxtToShapeClick", [Command], {
    frame: null,
    enabled: false,
    parentCommand: null,
    subCommands: null,
    name: null,
    _txtToShape: null,

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
        if (this._txtToShape != null) {
          this._txtToShape._destroy();
        }
        this._txtToShape = new TxtToShape().placeAt(dojo.body());
        this._txtToShape.startup();
      }
    },
  });
});

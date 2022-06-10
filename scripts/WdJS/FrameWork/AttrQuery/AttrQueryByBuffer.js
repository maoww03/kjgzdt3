define(["dojo/_base/declare", "FrameWork/Command", "dojo/_base/lang", "./DrawBuffer"], function (declare, Command, lang, DrawBuffer) {
  return declare("FrameWork.AttrQuery.AttrQueryByBuffer", [Command], {
    frame: null,
    enabled: false,
    parentCommand: null,
    subCommands: null,
    name: null,
    _drawBuffer: null,

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
              if (this._drawBuffer != null) {
                  this._drawBuffer.destroy();
              }
              this._drawBuffer = new DrawBuffer().placeAt(dojo.body());
              this._drawBuffer.startup();

              _checkQuery=false;
              _attrQueryTool.activate("point");
          }
      }
  });
});

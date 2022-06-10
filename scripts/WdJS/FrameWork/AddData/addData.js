define(["dojo/_base/declare", "FrameWork/Command", "dojo/_base/lang", "./doAddData"], function (declare, Command, lang, doAddData) {
    return declare("FrameWork.AddData.addData", [Command], {
    frame: null,
    enabled: false,
    parentCommand: null,
    subCommands: null,
    name: null,
    _doAddData: null,

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
              if (this._doAddData != null) {
                  this._doAddData.destroy();
              }
              this._doAddData = new doAddData().placeAt(dojo.body());
              this._doAddData.startup();
          }
      }
  });
});

define(["dojo/_base/declare", "FrameWork/Command", "dojo/_base/lang", "./doConflict"], function (declare, Command, lang, doConflict) {
    return declare("FrameWork.ConFlict.confilct", [Command], {
    frame: null,
    enabled: false,
    parentCommand: null,
    subCommands: null,
    name: null,
    _doConflict: null,

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
              if (this._doConflict != null) {
                  this._doConflict.destroy();
              }
              this._doConflict = new doConflict().placeAt(dojo.body());
              this._doConflict.startup();
              
          }
          _checkQuery=false;
          _attrQueryTool.activate("point");
      }
  });
});

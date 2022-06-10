define(["dojo/_base/declare", "FrameWork/Command", "dojo/_base/lang", "./SurroundQuery"], function (declare, Command, lang, SurroundQuery) {
  return declare("FrameWork.SurroundQuery.SurroundQueryClick", [Command], {
    frame: null,
    enabled: false,
    parentCommand: null,
    subCommands: null,
    name: null,
    _surroundQuery: null,

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
        if (this._surroundQuery != null) {
          this._surroundQuery._destroy();
        }
        this._surroundQuery = new SurroundQuery().placeAt(dojo.body());
        this._surroundQuery.startup();
        _checkQuery=false;
        _attrQueryTool.activate("point");
      }

    },
  });
});

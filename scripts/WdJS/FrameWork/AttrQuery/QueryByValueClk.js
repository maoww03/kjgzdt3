define(["dojo/_base/declare", "FrameWork/Command", "dojo/_base/lang", "./QueryByValue"], function (declare, Command, lang, QueryByValue) {
  return declare("FrameWork.AttrQuery.QueryByValueClk", [Command], {
    frame: null,
    enabled: false,
    parentCommand: null,
    subCommands: null,
    name: null,
    _queryByValue: null,

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
        if (this._queryByValue != null) {
          this._queryByValue._destroy();
        }
        this._queryByValue = new QueryByValue().placeAt(dojo.body());
        this._queryByValue.startup();
      }
    },
  });
});

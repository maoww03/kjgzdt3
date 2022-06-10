define(["dojo/_base/declare", "FrameWork/Command", "dojo/_base/lang", "./ConflictAnalysis"], function (declare, Command, lang, ConflictAnalysis) {
  return declare("FrameWork.ConflictAnalysis.ConflictAnalysisClick", [Command], {
    frame: null,
    enabled: false,
    parentCommand: null,
    subCommands: null,
    name: null,
    _conflictAnalysis: null,

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
        if (this._conflictAnalysis != null) {
          this._conflictAnalysis._destroy();
        }
        this._conflictAnalysis = new ConflictAnalysis().placeAt(dojo.body());
        this._conflictAnalysis.startup();
      }
    },
  });
});

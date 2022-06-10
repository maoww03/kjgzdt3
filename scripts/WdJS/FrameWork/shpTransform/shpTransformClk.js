define(["dojo/_base/declare", "FrameWork/Command", "dojo/_base/lang", "./shpTransform"], function (declare, Command, lang, shpTransform) {
    return declare("FrameWork.shpTransform.shpTransformClk", [Command], {
      frame: null,
      enabled: false,
      parentCommand: null,
      subCommands: null,
      name: null,
      _shpTransform: null,
  
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
          if (this._shpTransform != null) {
            this._shpTransform.destroy();
          }
          this._shpTransform = new shpTransform().placeAt(dojo.body());
          this._shpTransform.startup();
        }
      },
    });
  });
  
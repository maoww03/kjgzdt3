define(["dojo/_base/declare", "FrameWork/Command", "dojo/_base/lang", "./Layermanage"], function (declare, Command, lang, Layermanage) {
    return declare("FrameWork.Layermanage.LayermanageClk", [Command], {
      frame: null,
      enabled: false,
      parentCommand: null,
      subCommands: null,
      name: null,
      _Layermanage: null,
  
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
          if (this._Layermanage != null) {
            this._Layermanage._destroy();
          }
          this._Layermanage = new Layermanage().placeAt(dojo.body());
          this._Layermanage.startup();
        }
      },
    });
  });
  
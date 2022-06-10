define(["dojo/_base/declare", "FrameWork/Command", "dojo/_base/lang", "./ControlRegula"], function (declare, Command, lang, ControlRegula) {
    return declare("FrameWork.Print.Print", [Command], {
      frame: null,
      enabled: false,
      parentCommand: null,
      subCommands: null,
      name: null,
      _ControlRegula: null,
  
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
          if (this._ControlRegula != null) {
            this._ControlRegula.destroy();
          }
          this._ControlRegula = new ControlRegula().placeAt(dojo.body());
          this._ControlRegula.startup();
        }
      },
    });
  });
  
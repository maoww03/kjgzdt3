define(["dojo/_base/declare", "FrameWork/Command", "dojo/_base/lang", "./AttachmentBar"], function (declare, Command, lang, AttachmentBar) {
    return declare("FrameWork.AttachmentBar.AttachmentBar", [Command], {
      frame: null,
      enabled: false,
      parentCommand: null,
      subCommands: null,
      name: null,
      _AttachmentBar: null,
  
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
          if (this._AttachmentBar != null) {
            this._AttachmentBar.destroy();
          }
          this._AttachmentBar = new AttachmentBar().placeAt(dojo.body());
          this._AttachmentBar.startup();
        }
      },
    });
  });
  
define(["dojo/_base/declare", "FrameWork/Command", "dojo/_base/lang", "./FeedbackPage"], function (declare, Command, lang, FeedbackPage) {
    return declare("FrameWork.Print.Print", [Command], {
      frame: null,
      enabled: false,
      parentCommand: null,
      subCommands: null,
      name: null,
      _FeedbackPage: null,
  
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
          if (this._FeedbackPage != null) {
            this._FeedbackPage.destroy();
          }
          this._FeedbackPage = new FeedbackPage().placeAt(dojo.body());
          this._FeedbackPage.startup();
        }
      },
    });
  });
  
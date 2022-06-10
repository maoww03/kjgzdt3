define(["dojo/_base/declare", "FrameWork/Command", "dojo/_base/lang", "dojo/on", "dojo/dom-attr", "dojo/dom-style", "./MoreScreen"], function (
  declare,
  Command,
  lang,
  on,
  domAttr,
  domStyle,
  MoreScreen
) {
  return declare("FrameWork.View.FullScreen", [Command], {
    _moreScreenMapArr: [],

    constructor: function (args) {
      lang.mixin(this, args);
      this.inherited("constructor", arguments);
    },
    onCreate: function (e) {
      this.inherited("onCreate", arguments);
    },
    onClick: function (target) {
      domStyle.set(dojo.byId("legend-siderbar"),"display","none");
      if (this.enabled) {
        this.inherited("onClick", arguments);
        if (this.enabled) {
          this.inherited("onClick", arguments);
          MoreScreen.fourScreen();
        }
      }
    },
  });
});

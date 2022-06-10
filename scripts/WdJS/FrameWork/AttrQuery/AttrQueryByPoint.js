define(["dojo/_base/declare", "FrameWork/Command", "dojo/_base/lang", "./AttrQueryTool"], function (declare, Command, lang, AttrQueryTool) {
  return declare("FrameWork.AttrQuery.AttrQueryByPoint", [Command], {
    frame: null,
    enabled: false,
    parentCommand: null,
    subCommands: null,
    name: null,
    _attrQueryTool: null,

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
        _checkQuery=true;
        if (this._attrQueryTool === null) {
          this._attrQueryTool = new AttrQueryTool(appConfig.map);
          this._attrQueryTool.activate("point");
        } else {
          this._attrQueryTool.deactivate();
          this._attrQueryTool.activate("point");
        }
      }
    },
    clearClick:function(){
      this._attrQueryTool.deactivate();
    }
  });
});

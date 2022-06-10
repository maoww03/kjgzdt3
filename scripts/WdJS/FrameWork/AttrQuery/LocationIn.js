define(["dojo/_base/declare", "FrameWork/Command", "dojo/_base/lang", "./Location"], function (declare, Command, lang, location) {
    return declare("FrameWork.AttrQuery.AttrQueryByBuffer", [Command], {
      frame: null,
      enabled: false,
      parentCommand: null,
      subCommands: null,
      name: null,
      _location: null,
  
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
                if (this._location != null) {
                    this._location.destroy();
                }
                this._location = new location().placeAt(dojo.body());
                this._location.startup();
  
                _checkQuery=false;
                _attrQueryTool.activate("point");
            }
        }
    });
  });
  
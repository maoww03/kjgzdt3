define(["dojo/_base/declare", "FrameWork/Command", "dojo/_base/lang", "./DownRecordBar"], function (declare, Command, lang, DownRecordBar) {
    return declare("FrameWork.DownRecordBar.DownRecordBar", [Command], {
      frame: null,
      enabled: false,
      parentCommand: null,
      subCommands: null,
      name: null,
      _DownRecordBar: null,
  
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

          var pdRegion=user.depts[0].regionCode;
          pdRegion=pdRegion.substring(0,6);
          
          if(pdRegion == '330300' || pdRegion == '330303'||pdRegion == '330302'||pdRegion == '330304'){
            if (this._DownRecordBar != null) {
              this._DownRecordBar.destroy();
            }
            this._DownRecordBar = new DownRecordBar().placeAt(dojo.body());
            this._DownRecordBar.startup();
          }else{
              alert("用户没有下载权限");
          }

         
        }

      },
    });
  });
  
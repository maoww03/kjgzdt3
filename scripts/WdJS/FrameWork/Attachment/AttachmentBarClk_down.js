define(["dojo/_base/declare", "FrameWork/Command", "dojo/_base/lang","./AttachmentDownView_kjgzdt"], function (declare, Command, lang, AttachmentDownView_kjgzdt) {
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
        
        var pdRegion=user.depts[0].regionCode;
        pdRegion=pdRegion.substring(0,6);
        
        if(pdRegion == '330300' || pdRegion == '330303'||pdRegion == '330302'||pdRegion == '330304'){
            if (this._AttachmentBar != null) {
                this._AttachmentBar.destroy();
              }
              this._AttachmentBar = new AttachmentDownView_kjgzdt().placeAt(dojo.body());
              this._AttachmentBar.startup();
        }else{
            alert("用户没有下载权限");
        }

          
        }
      },
    });
  });
  
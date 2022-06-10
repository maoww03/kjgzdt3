define([
    'dojo/_base/declare',
    'FrameWork/Command',
    'dojo/_base/lang',
    "./tx_upload_box"
],
function (declare, Command, lang,tx_upload_box){
    return declare('FrameWork.Graph.tx_upload', [Command], {
        frame: null,
        enabled: false,
        parentCommand: null,
        subCommands: null,
        name: null,
        isExist: false,
        _dragZoom: null,

        constructor: function (args) {
            lang.mixin(this, args);
            this.inherited('constructor', arguments);
        },
        onCreate: function (e) {
            this.inherited('onCreate', arguments);
        },
        onClick: function (target) {
            if (this.enabled) {
                this.inherited('onClick', arguments);
                if (this.enabled) {
                    var dx=dojo.query("div[dx_lx='Graph']");
                    if(dx.length>0){
                        dx[0].remove();
                    }
                    var mq=new tx_upload_box().placeAt(document.body);
                    mq.startup();
                }
            }
        }
    });
});
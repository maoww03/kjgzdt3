define([
    'dojo/_base/declare',
    'FrameWork/Command',
    'dojo/_base/lang',
    "./mark_query",
    "./Draw_Layer"
],
    function (declare, Command, lang,mark_query,Draw_Layer){
        return declare('FrameWork.Mark.draw_text', [Command],{
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
                        Draw_Layer.load_all_mark(1);
                        this.inherited('onClick', arguments);
                        var dx=dojo.query("div[dx_lx='mark_query']");
                        if(dx.length>0){
                            dx[0].remove();
                        }
                        var mq=new mark_query().placeAt(document.body);
                        mq.startup();
                    }
                }
            }
        });
    });
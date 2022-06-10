define([
    'dojo/_base/declare',
    'FrameWork/Command',
    'dojo/_base/lang',
    "./Draw_Layer"
],
    function (declare, Command, lang,Draw_Layer) {
        return declare('FrameWork.Mark.draw_polygon', [Command], {
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
                        
                        this.inherited('onClick', arguments);
                        Draw_Layer.draw_type="Polygon";
                        Draw_Layer.add_draw_Interaction("Polygon",false);
                    }
                }
            }
        });
    });
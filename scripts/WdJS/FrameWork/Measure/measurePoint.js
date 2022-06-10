define([
    'dojo/_base/declare',
    'FrameWork/Command',
    'dojo/_base/lang',
    './MeasureTool'
],
    function (declare, Command, lang, MeasureTool) {
        return declare('FrameWork.Measure.measurePoint', [Command], {
            frame: null,
            enabled: false,
            parentCommand: null,
            subCommands: null,
            name: null,
            _measureTool: null,


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
                        if (this._measureTool === null) {
                            this._measureTool = new MeasureTool(appConfig.map);
                            this._measureTool.activate("point");
                        } else {
                            this._measureTool.deactivate();
                            this._measureTool.activate("point");
                        }

                    }
                }
            }
        });
    });
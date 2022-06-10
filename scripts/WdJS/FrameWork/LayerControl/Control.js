define([
    'dojo/_base/declare',
    'FrameWork/Command',
    'dojo/_base/lang',
    "dojo/_base/array", 'dojo/on', "dojo/dom-attr", "./ControlBar"
],
    function (declare, Command, lang, array, on, domAttr, ControlBar) {
        return declare('FrameWork.View.FullScreen', [Command], {
            frame: null,
            enabled: false,
            parentCommand: null,
            subCommands: null,
            name: null,
            


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

                        if (this._widget === undefined || this._widget=== null) {
                            this._widget = new ControlBar({}).placeAt(dojo.byId('siderbar'));
                            this._widget.startup();

                            _controls.push({ control: this._widget, isactive: false });
                        } else {
                            this._widget.refresh();
                        }
                        for (var i = 0; i < _controls.length; i++) {
                            if (_controls[i].control !== this._widget) {
                                _controls[i].isactive = false;
                                _controls[i].control.setWidgetVisible(false);

                            } else {
                                _controls[i].isactive = true;

                            }
                        }
                        this.setWidgetVisible(true);
                        
                    }
                }
            },
            setWidgetVisible: function (visible) {
                if (this._widget !== null) {
                    this._widget.setWidgetVisible(visible);

                }
            },
            destorySCLB: function () {
                $("#sclb").parent().remove();
            }
        });
    });
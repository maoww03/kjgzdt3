define([
    'dojo/_base/declare',
    'FrameWork/Command',
    'dojo/_base/lang',"dojo/_base/array", 'dojo/on', "dojo/dom-attr", "./quickrestoreBar"
],
    function (declare, Command, lang,array, on, domAttr, quickrestoreBar) {
        return declare('FrameWork.View.FullScreen', [Command], {
            frame: null,
            enabled: false,
            parentCommand: null,
            subCommands: null,
            name: null,
            _widget: null,
            


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


                        this._widget=null;
                        this._widget = new quickrestoreBar({ targetDom: target}).placeAt(dojo.body());
                        this._widget.startup();


                        // if (this._widget == null) {
                        //     this._widget = new quickrestoreBar({ targetDom: target}).placeAt(dojo.byId('sidebox'));
                        //     this._widget.startup();
                            
                            // _controls.push({ control: this._widget, isactive: false });
                        // }
                        // for (var i = 0; i < _controls.length; i++) {
                        //     if (_controls[i].control !== this._widget) {
                        //         _controls[i].isactive = false;
                        //         _controls[i].control.setWidgetVisible(false);
                        //     } else {
                        //         _controls[i].isactive = true;
                        //     }
                        // }
                        this.setWidgetVisible(true);
                        
                    }
                }
            },
            setWidgetVisible: function (visible) {
                if (this._widget != null) {
                    this._widget.setWidgetVisible(visible);
                }
            }
        });
    });
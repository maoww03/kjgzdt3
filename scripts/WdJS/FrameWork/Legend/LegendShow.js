define([
    'dojo/_base/declare',
    'FrameWork/Command',
    'dojo/_base/lang', "dojo/_base/array", 'dojo/on', "dojo/dom-attr", "dojo/dom-style"
],
    function (declare, Command, lang, array, on, domAttr, domStyle) {
        return declare('FrameWork.Clear.Clear', [Command], {
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
                    if (domStyle.get(dojo.byId("legend-siderbar"), 'transform') == 'none') {
                        domStyle.set(dojo.byId("legend-siderbar"), 'transform', 'scale(0)');
                    } else {
                        domStyle.set(dojo.byId("legend-siderbar"), 'transform', 'none');
                    }
                    return false;
                }
            }
        });
    });
define([
    'dojo/_base/declare',
    'FrameWork/Command',
    'dojo/_base/lang', 'dojo/on', "dojo/domReady!"
],
    function (declare, Command, lang, on) {
        return declare('FrameWork.View.FullScreen', [Command], {
            frame: null,
            enabled: false,
            parentCommand: null,
            subCommands: null,
            name: null,
            isFullScreen: false,

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
                        var div = dojo.body();
                        this.isFullScreen = document.fullScreen || document.mozFullScreen || document.webkitIsFullScreen || document.msFullscreenElement
                        if (!this.isFullScreen) {
                            if (div.requestFullscreen) {
                                div.requestFullscreen();
                            } else if (div.webkitRequestFullScreen) {
                                div.webkitRequestFullScreen();
                            } else if (div.mozRequestFullScreen) {
                                div.mozRequestFullScreen();
                            } else if (div.msRequestFullScreen) {
                                div.msRequestFullScreen();
                            }
                            if (target != null) {
                                target.innerHTML = '退出全屏';
                            }
                        } else {
                            if (document.cancelFullscreen) {
                                document.cancelFullscreen();
                            } else if (document.webkitCancelFullScreen) {
                                document.webkitCancelFullScreen();
                            } else if (document.mozCancelFullScreen) {
                                document.mozCancelFullScreen();
                            } else if (document.msCancelFullScreen) {
                                document.msCancelFullScreen();
                            }
                            if (target != null) {
                                target.innerHTML = '全屏';
                            }
                        }
                        //this.isFullScreen = !this.isFullScreen;

                        //on(document, "keyup", function (event) {
                            
                        //    console.log(event.keyCode);
                        //});
                    }
                }
            }
        });
    });
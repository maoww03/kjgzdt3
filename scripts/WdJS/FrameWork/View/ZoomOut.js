define([
    'dojo/_base/declare',
    'FrameWork/Command',
    'dojo/_base/lang',
    'dojo/on'
],
    function (declare, Command, lang,on) {
        return declare('FrameWork.View.ZoomIn', [Command], {
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
                        _dragZoom.out_ = true;
                        _dragZoom.setActive(true);
                        
                    }
                    this._CancleDraw();
                    _checkQuery=true;
                    _attrQueryTool.activate("point");

                }
            },
            _CancleDraw:function(){
                // catalog-目录
                var me=this;
                // on(dojo.byId("catalog"),"click",function(){
                //   _dragZoom.setActive(false);
                // })
                // class=drawCancle-图层搜索-切换
                on(dojo.query(".drawCancle"),"click",function(){
                    _dragZoom.setActive(false);
                })
    
                // top?-标题
                // on(dojo.byId("top"),"click",function(){
                //     _dragZoom.setActive(false);
                // })
                // baseMapChangeContent?-底图切换
                on(dojo.byId("baseMapChangeContent"),"click",function(){
                    _dragZoom.setActive(false);
                })
                
              }
        });
    });
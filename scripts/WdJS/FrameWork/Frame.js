define(["dojo/_base/declare", "dojo/Evented", "FrameWork/Dictionary"],
    function (declare, evented, dictionary) {
        return declare("FrameWork.Frame", [evented], {
            //授权
            _authority: null,
            //全局变量集合
            _objects: null,
            //命令集合
            _commands:null,
            //当前命令
            _currentCommand: null,

            //构造函数
            constructor: function (e) {
                this._authority = e;
                this._objects = new dictionary();
            },
            //授权
            authority: function () {
                return this._authority;
            },
            //添加全局变量
            addObject:function(key,value){
                this._objects.add(key, value);
            },
            //获取全局变量
            getObject: function (key) {
                return this._objects.item(key);
            },
            //获取命令集合
            getCommands:function(){
                return this.commands;
            },
            //当前命令
            getCurrentCommand:function()
            {
                return this._currentCommand;
            },
            //设置当前命令
            setCurrentCommand:function(e)
            {
                this._currentCommand = e;
                //激发事件
                this.emit("currentCommandChanged");
            },
            //加载UI
            loadUI: function (cfg) {
                //添加加载代码

                //激发事件
                this.emit("uiLoaded");
            }
        });
    });

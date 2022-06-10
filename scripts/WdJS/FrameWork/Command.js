define(["dojo/_base/declare", "dojo/Evented", "dojo/_base/lang"],
    function (declare, evented) {
        return declare("FrameWork.Command", [evented], {
            //是否影响其它命令
            affectother: true,
            //是否勾选
            checked: false,
            //是否可执行
            enabled: false,
            //是否可见
            visible: true,
            //命令名称
            name: null,
            //frame
            frame: null,
            //父命令
            parentCommand: null,
            //子命令
            subCommands: null,

            //构造函数
            constructor: function (e) {
                //
            },
            onCreate: function (e) {
                this.frame = e;
            },
            onClick: function () {
                
                if (this.enabled) {
                    //以下判断是否需要释放的代码


                    //获取当前命令
                    var oldCommand = this.frame.getCurrentCommand();
                    //两个命令相同
                    if (oldCommand != null) {
                        if (oldCommand.name == this.name)
                            return;

                        if (this.parentCommand != null) {
                            //子命令->父命令
                            if (oldCommand.parentCommand.name == this.name) {
                                this.subCommands = null;
                            }
                                //父命令->子命令
                            else if (this.parentCommand.name == oldCommand.name) {
                                if (oldCommand.subCommands == null) {
                                    oldCommand.subCommands = [];
                                }
                                oldCommand.subCommands.push(this);
                            }
                            else {
                                //同一父命令下不同的子命令
                                if (this.findRootCommnad(oldCommand).name == this.findRootCommnad(this).name) {
                                    this.clearSubCommands(this.parentCommand);
                                }
                                    //完全不同的命令
                                else {
                                    var rootCommand = this.findRootCommnad(oldCommand);
                                    this.clearSubCommands(rootCommand);
                                }
                                //添加当前命令到父节点的子节点中；
                                if (this.parentCommand.subCommands == null) {
                                    this.parentCommand.subCommands = [];
                                }
                                this.parentCommand.subCommands.push(this);
                            }
                        }
                    }
                    else if (oldCommand != null && this.parentCommand == null) {
                        var rootCommand = this.findRootCommnad(oldCommand);
                        this.clearSubCommands(rootCommand);
                    }
                    else if (oldCommand == null && this.parentCommand != null) {
                        if (this.parentCommand.subCommands == null) {
                            this.parentCommand.subCommands = [];
                        }
                        this.parentCommand.subCommands.push(this);
                    }
                    //如果当前命令为空且现激活的命令为父命令 则不处理；

                    if (this.affectother) {
                        this.frame.setCurrentCommand(this);
                    }
                }
            },
            dispose: function () {

            },

            findRootCommnad: function (command) {
                if (command.parentCommand != null) {
                    this.findParentCommnad(command.parentCommand);
                }
                else {
                    return command;
                }
            },
            clearSubCommands: function (command) {
                if (command.subCommands != null) {
                    for (var i = 0; i < command.subCommands.length; i++) {
                        this.clearSubCommands(command.subCommands[i]);
                    }
                    command.subCommands = null;
                }
            }
        });
    });

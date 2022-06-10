define(["dojo/_base/declare", "dojo/text!./templates/quickrestore.txt", "dijit/_TemplatedMixin", "dijit/_WidgetBase", "dojo/on", "dojo/dom-style", 'dojo/parser', "dojo/dom-class", "dojo/dom-attr", "dojo/_base/lang", 'dojo/_base/array', 'FrameWork/serviceUtil/sceneService', './sceneList', 'FrameWork/Loading/Loading'],
    function (declare, template, TemplatedMixin, WidgetBase, on, domStyle, parser, domClass, domAttr, lang, array, sceneService, sceneList, Loading) {
        return declare([WidgetBase, TemplatedMixin], {
            templateString: template,
            data: null,
            type: null,

            _started: false,
            _isOver: false,

            _userid:user.id,
            _pageSize:5,
            _restoreSceneList:[],
            _pagesum:null,
            _totalnum:null,
            _presentNum:null,
            _sceneName:null,

            constructor: function (args) {

            },
            postCreate: function () {
                this.inherited(arguments);
                this.onCreate();
            },
            onCreate: function () {
                var me = this;
            },
            startup: function () {
                var me = this;
                if (this._started) {
                    return;
                }
                parser.parse(this.domNode).then(function () {
                    // 加载第一页
                    this._presentNum=1;
                    this._setpagenum(1);
                    this.getScenebyPage(1); 
                    this.bindEvent();

                }.bind(this));

                this._started = true;
            },

            bindEvent: function () {
                /**close**/ 
                on(this.close, 'click', function () {
                    this.setWidgetVisible(false);
                    _checkQuery=true;
                    _attrQueryTool.activate("point");
                }.bind(this));

                 /**search**/ 
                on(this.fix, 'click', function () {
                    var sceneName=this.search.value;
                    this._presentNum=1;
                    this._sceneName=sceneName;
                    this._setpagenum(1);
                    this.getScenebyPage(1); 
                }.bind(this));
               
                /**分页按钮组**/
                on(this.first, 'click', function () {
                    this._presentNum=1;
                    this._setpagenum(1);
                    this.getScenebyPage(1);
                }.bind(this));

                on(this.last, 'click', function () {
                    this._presentNum=this._pagesum;
                    this._setpagenum( this._presentNum);
                    this.getScenebyPage( this._presentNum);
                }.bind(this));

                on(this.pre, 'click', function () {
                    if(this._presentNum>1){
                        this._presentNum--;
                        this._setpagenum( this._presentNum);
                        this.getScenebyPage(this._presentNum);
                    }
                }.bind(this));

                on(this.next, 'click', function () {
                    if(this._presentNum<this._pagesum){
                        this._presentNum++;
                        this._setpagenum( this._presentNum);
                        this.getScenebyPage(this._presentNum);
                    }
                }.bind(this));

                // on(this.jump, 'click', function () {
                //     var jumpNum=$("#jumpNum").val();
                //     if(jumpNum<this._pagesum || jumpNum>1){
                //         this._presentNum=jumpNum;
                //         this._setpagenum( this._presentNum);
                //         this.getScenebyPage(this._presentNum);
                //     }else if(!jumpNum){
                //         alert("请输入数");
                //     }   
                // }.bind(this));

            },
           
            
            /**分页显示**/ 
            // 1.页数/总数
            _setpagenum:function(pageNum,sceneName){
                var me=this;
                sceneService.get_pagescene(pageNum,me._pageSize,me._userid,me._sceneName).then(function (result) {
                    if (result.code == 200) {
                        //_totalnum _pagesum; pageNav text
                        me._totalnum=result.total;
                        me._pagesum=Math.ceil(me._totalnum/me._pageSize);
                        me.pageNav.innerHTML=`${me._presentNum}/${me._pagesum}`;
                        me.text.innerHTML=`共${me._totalnum}条`;
                       }
                })
            },
            // 2.get添加某页
            getScenebyPage:function(pageNum,sceneName){
                var me=this;
                var num = (pageNum - 1) * me._pageSize;
                Loading.show(this.domNode);
                sceneService.get_pagescene(pageNum,me._pageSize,me._userid,me._sceneName).then(function (result) {
                    if (result.code == 200) {
                        //1. 清空
                        for (var i = 0; i < me._restoreSceneList.length; i++) {
                            me._restoreSceneList[i].destroy();
                        }
                        me._restoreSceneList = [];
                        //2. 添加
                        for (var i = 0; i < result.data.length; i++) {
                            var data = result.data[i];
                            data.num = num + i + 1;
                            data.page = pageNum;
                            var _sceneList = new sceneList({ data: data }).placeAt(me.items);
                            _sceneList.deletescene = me.deletescene.bind(me);
                            _sceneList.startup();
                            me._restoreSceneList.push(_sceneList);
                        }
                        Loading.hide();
                    } else {
                        alert(result.msg);
                    }
                })
            },
            // 3.删除一条记录
            deletescene:function(id,pageNum,sceneNum){
               
                var me=this;
                sceneService.delete_scene(id).then(function (result) {
                    if (result.code == 200) {
                        
                       
                        // !!
                        sceneService.get_pagescene(pageNum,me._pageSize,me._userid,me._sceneName).then(function (result) {
                            if (result.code == 200) {
                                
                                me._totalnum=result.total;
                                me._pagesum=Math.ceil(me._totalnum/me._pageSize);
                                if(me._totalnum%me._pageSize==0 && pageNum>1 && me._totalnum==sceneNum-1){
                                        me._presentNum=me._presentNum-1;
                                        me.getScenebyPage(me._presentNum);
                                        me._setpagenum(me._presentNum);
                                }else{
                                    me.getScenebyPage(me._presentNum);
                                    me._setpagenum(me._presentNum);
                                }
                            }
                        })
                        
                    }
                }) 
            },
           

            setWidgetVisible:function(visible){
                if (visible) {
                    domStyle.set(this.domNode, 'display', 'block');
                    // dojo.byId('siderbar-container').style.display = "block";
                } else {
                    domStyle.set(this.domNode, 'display', 'none');
                    // dojo.byId('siderbar-container').style.display = "none";
                }
            }
        });
    });


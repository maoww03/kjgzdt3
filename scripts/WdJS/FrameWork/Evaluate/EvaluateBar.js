define(["dojo/_base/declare", "dojo/text!./templates/EvaluateBar.txt", "dijit/_TemplatedMixin", "dijit/_WidgetBase", "dojo/on", "dojo/dom-style", 'dojo/parser', "dojo/dom-class", "dojo/dom-attr", "dojo/_base/lang", 'dojo/_base/array',"FrameWork/serviceUtil/evaluateService"],
    function (declare, template, TemplatedMixin, WidgetBase, on, domStyle, parser, domClass, domAttr, lang, array,evaluateService) {
        return declare([WidgetBase, TemplatedMixin], {
            templateString: template,
            data: null,
            type: null,

            _started: false,
            _type:null,
            _EvaluateId:null,
            _score:0,
            _userid:user.id,
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
                    // 1-获取
                    me._getEvaluate(me._userid);
                    this.bindEvent();
                }.bind(this));

                this._started = true;
            },
           
            // 0-获取信息
            _getEvaluate:function(id){
                var me=this;
                evaluateService.getEvaluate(id).then(function(re){
                    if(re.code=='200'){
                        debugger
                        if(re.data){
                            // 有内容
                            me._type="change";
                            me._EvaluateId=re.data.id;
                            domStyle.set(me.xg,"display","block");
                            domStyle.set(me.tj,"display","none");
                            domStyle.set(me.content,"background","#f5f5f5");
                            me._score=me._score;
                            me.setRatingData(re.data);
                        }else{
                            // 没有内容
                            me._type="add";
                            domStyle.set(me.xg,"display","none");
                            domStyle.set(me.tj,"display","block");
                            domStyle.set(me.content,"background","white");
                            // 1-评分未锁定
                            $('#precision-demo').raty({
                                number: 5, //多少个星星设置
                                targetType: 'number', //类型选择，number是数字值，hint，是设置的数组值
                                path: 'css/starStyle/img',
                                hints: ['差', '一般', '好', '非常好', '全五星'],
                                cancelOff: 'cancel-off-big.png',
                                cancelOn: 'cancel-on-big.png',
                                size: 24,
                                starHalf: 'star-half-big.png',
                                starOff: 'star-off-big.png',
                                starOn: 'star-on-big.png',
                                target: '#precision-hint',
                                cancel: false,
                                targetKeep: true,
                                half:true,
                                targetText: '0',
                                half:true,
                                precision: false, //是否包含小数
                                click: function(score, evt) {
                                    me._score=score;
                                }
                            });
                        }
                    }else{
                        alert(re.msg);
                    }
                })
            },
             // 1-设置评论信息
             setRatingData:function(data){
                var me=this;
                // 1-评分锁定
                me._score=data.score;
                $('#precision-demo').raty({ 
                    number: 5, 
                    targetType: 'number', 
                    path: 'css/starStyle/img',
                    hints: ['差', '一般', '好', '非常好', '全五星'],
                    cancelOff: 'cancel-off-big.png',
                    cancelOn: 'cancel-on-big.png',
                    size: 24,
                    starHalf: 'star-half-big.png',
                    starOff: 'star-off-big.png',
                    starOn: 'star-on-big.png',
                    target: '#precision-hint',
                    cancel: false,
                    targetKeep: true,
                    half:true,
                    targetText: '0',
                    readOnly: true, 
                    score: me._score,
                });
                // 2-内容锁定
                domAttr.set(me.content,"readonly","readonly");
                me.content.value=data.content;
            },
            // 2-添加新评论
            _addEvaluate:function(data){
                debugger
                evaluateService.addNewEvaluate(JSON.stringify(data)).then(function(re){
                    if(re.code==200){
                        debugger
                        alert("评价成功！");
                    }else{
                        alert(re.msg);
                    }
                });

            },
            // 3-修改
            _changeEvaluate:function(data){
                debugger
                evaluateService.changeEvaluate(JSON.stringify(data)).then(function(re){
                    if(re.code==200){
                        alert("评价成功！");
                    }else{
                        alert(re.msg);
                    }
                });
            },

            bindEvent: function () {
                var me=this;
                /**close**/ 
                on(this.close, 'click', function () {
                    me.destroy();
                }.bind(this));

                on(this.tj, 'click', function () {
                    if(me._score == 0){
                        alert("请评分！");
                    }else{
                        var data= {
                            "content": me.content.value,
                            "score": me._score,
                            "userid": me._userid,
                            "username":user.username
                        }
                        if(me._type == "add"){
                            me._addEvaluate(data);
                        }else if(me._type == "change"){
                            debugger
                            data.id=me._EvaluateId;
                            me._changeEvaluate(data);
                        }
                    }
                    me.destroy();
                }.bind(this));

                on(this.xg, 'click', function () {
                    domStyle.set(me.tj,"display","block");
                    domStyle.set(me.xg,"display","none");
                    domStyle.set(me.content,"background","white");
                    domAttr.remove(me.content,"readonly");
                    $('#precision-demo').raty({
                        targetType: 'number', //类型选择，number是数字值，hint，是设置的数组值
                        path: 'css/starStyle/img',
                        hints: ['差', '一般', '好', '非常好', '全五星'],
                        cancelOff: 'cancel-off-big.png',
                        cancelOn: 'cancel-on-big.png',
                        size: 24,
                        starHalf: 'star-half-big.png',
                        starOff: 'star-off-big.png',
                        starOn: 'star-on-big.png',
                        target: '#precision-hint',
                        cancel: false,
                        targetKeep: true,
                        half:true,
                        targetText: '0',
                        half:true,
                        score: me._score,
                        precision: false, //是否包含小数
                        click: function(score, evt) {
                            me._score=score;
                    }
                });
                }.bind(this));

               

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
define(["dojo/_base/declare", "dojo/text!./templates/sceneList.txt", "dijit/_TemplatedMixin", "dijit/_WidgetBase", "dojo/on", "dojo/dom-style", 'dojo/parser', "dojo/dom-class", "dojo/dom-attr", "dojo/_base/lang", 'dojo/_base/array','FrameWork/serviceUtil/sceneService','FrameWork/DataView/ViewBar'],
    function (declare, template, TemplatedMixin, WidgetBase, on, domStyle, parser, domClass, domAttr, lang, array,sceneService,ViewBar) {
        return declare([WidgetBase, TemplatedMixin], {
            templateString: template,
            data: null,
            type: null,

            _started: false,
            _isOver: false,

            _userid:user.id,
            _scenelayer:[],
            _sceneextent:[],
            _ViewBarArr:[],
            


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
                    // var aa=this.data;
                    this.num.innerHTML= this.data.num;
                    this.name.innerHTML= this.data.scenename;
                    // this.restore.innerHTML= '还原';
                    // this.delete.innerHTML='删除';
                    this.bindEvent();
                }.bind(this));
                this._started = true;
            },
            bindEvent: function () {
                var me=this;
                on(me.delete,"click",function(e){
                    e.stopPropagation();
                    if(confirm("请确认是否删除该标记")){
                        me.deletescene(me.data.id,me.data.page,me.data.num);
                        alert("删除成功");
                    }
                });

                // on(this.delete, 'click', function () {
                //     var me=this;
                //     me.deletescene(me.data.id,me.data.page,me.data.num);
                   
                // }.bind(this));

                on(this.restore, 'click', function () {
                    var me=this;
                    var id=me.data.id;
                    me.getscenelayer(id);

                    // for (var i = 0; i < me._ViewBarArr.length; i++) {
                    //     me._ViewBarArr[i].destroy();
                    // }
                    // me._ViewBarArr = [];
                    // var _ViewBar=new ViewBar();
                    // _ViewBar.clickcollectBar();
                    // me._ViewBarArr.push(_ViewBar);

                }.bind(this));

            },

            onClick: function (text, code,type,geometry){

            },
           
            deletescene(id,page,sceneNum){

            },
            getscenelayer:function(sceneId){
                var me=this;
                me._scenelayer=[];
                sceneService.get_scenelayers(sceneId).then(function(result){                  
                    if(result.code==200){
                        for(var i=0;i<result.data.length;i++){
                            var scenelayer=result.data[i].scenelayer;
                            me._scenelayer.push(scenelayer);
                        }
                        me.quickrestore();
                    }
                })
            },
            _closeallLater:function(){
                
                var flag = false;
                array.forEach(appConfig.btns, function (btn) {
                    if (btn.id === 'gbtc') {
                        flag = !flag;
                        if (lang.isFunction(btn.fun.onClick)) {
                            btn.fun.onClick('clear');
                        }
                    }
                }.bind(this));
                if (!flag) {
                    try {
                        require(["FrameWork/Clear/closeAllLayer"], function (btn) {
                            var b = new btn({ enabled: true, frame: _frame, name: 'gbtc' ,_sidebar:false});
                            appConfig.btns.push({ id: 'gbtc', fun: b });
                            b.onClick('clear');
                        }.bind(this));
                    }
                    catch (e) {
                        alert(e);
                    }
                }
            },
            
            quickrestore:function(){
                var me=this;
                // 关闭所有已经打开的图层和图形
                me._closeallLater();
                // 显示图层
                for(var j=0;j<appConfig.map.getLayers().array_.length;j++){
                    var layer = appConfig.map.getLayers().array_[j];
                    layer.setVisible(false);
                    for(var i=0;i<me._scenelayer.length;i++){
                        if(me._scenelayer[i]==layer.values_.id){
                            layer.setVisible(true);
                            me.mlUpdata(_collectionLayerZtree,layer,"collect");
                            me.mlUpdata(_allLayerZtree,layer,"all");

                        }
                    }
                }
                // 显示extent
                // var center=me._sceneextent.center;
                // var zoom=me._sceneextent.zoom;
                // zoom=Number(zoom);
                // appConfig.map.getView().setCenter([Number(center[0]),Number(center[1])]);
                // appConfig.map.getView().setZoom(zoom);

                var extent = eval('(' + this.data.sceneextent + ')');
                var center = extent.center.split(',');
                appConfig.map.getView().setCenter([Number(center[0]), Number(center[1])]);
                appConfig.map.getView().setZoom(extent.zoom);
            },
            mlUpdata:function(allZtree,layer,mark){
                var me=this;
                if(allZtree != null && allZtree !=undefined){
                    var layer_id=layer.get("id");
                    var nodes=allZtree.getNodes();
                    if (nodes.length > 0) {
                        for (var i = 0; i < nodes.length; i++) {
                            if (nodes[i].children.length > 0) {
                                me.getChildNode(allZtree,nodes[i],layer_id,mark);
                            } else {
                                if(mark == "collect" ){
                                    var nowLayer=nodes[i].layerid;
                                }else if(mark == "all"){
                                    var nowLayer=nodes[i].id;
                                }
                                if(nowLayer == layer_id){
                                    allZtree.checkNode(nodes[i], true, true ,true );
                                    break;
                                }
                            }
                        }
                    }
                }      
            },
            getChildNode: function (allZtree,P_node,layer_id,mark) {
                var me = this;
                var nodes = P_node.children;
                for (var i = 0; i < nodes.length; i++) {
                    if (nodes[i].children != null) {
                        me.getChildNode(allZtree,nodes[i],layer_id,mark);
                    } else {
                      if(mark == "collect" ){
                        var nowLayer=nodes[i].layerid;
                      }else if(mark == "all"){
                        var nowLayer=nodes[i].id;
                      }
                      if(nowLayer == layer_id){
                        allZtree.checkNode(nodes[i], true, true ,true );
                        break;
                      }
    
                    }
                }
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


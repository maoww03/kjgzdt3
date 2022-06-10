define([
    'dojo/_base/declare',
    'FrameWork/Command',
    'dojo/_base/lang',
    "dojo/_base/array", 'dojo/on', "dojo/dom-attr", './ViewBar'
],
    function (declare, Command, lang, array, on, domAttr, ViewBar) {
        return declare('FrameWork.View.FullScreen', [Command], {
            frame: null,
            enabled: false,
            parentCommand: null,
            subCommands: null,
            name: null,
            _widget: null,
            target: null,
            count:0,
            openIdArr:null,
            allPnode:[],



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
                    var aa=false;
                    if (this.enabled) {
                        this.inherited('onClick', arguments);

                       
                        if (this._widget === undefined || this._widget === null) {
                            this._widget = new ViewBar({}).placeAt(this.target);
                            
                            this._widget.startup();
                            _controls.push({ control: this._widget, isactive: false });
                            aa=true;
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
                    
                    if(_allLayerZtree && aa==false){
                        this.openIdArr=[];
                        this._readZtrewOpen();
                        var aa=this.openIdArr;
                        this._widget._initZtree();
                        // 隐藏空目录 判断
                        var dir=this._widget._hideBtn._getStatus();
                        if(dir){
                            this._widget._hideBtn._isShow(true);
                        }else{
                            this._widget._hideBtn._clickHide();
                            this._widget._hideBtn._isShow(false);
                        }
                        // 打开图层
                        this._setOpenZtree();
                        this.count=0;
                        this.refreshLayer();
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
            },
            // --------------AllLayer
            refreshLayer: function () {
                var me = this;
                var nodes = _allLayerZtree.getNodes();
                if (nodes.length > 0) {
                    for (var i = 0; i < nodes.length; i++) {
                        if (nodes[i].children.length > 0) {
                            me.getChildNode(nodes[i]);
                        } else {
                            me._refreshCheck(nodes[i]);
                            me._setAllOpacity(nodes[i]);
                            me._setViewNumber(nodes[i],me.count);
                        }
                    }
                }
            },
            getChildNode: function (P_node) {
                var me = this;
                var nodes = P_node.children;
                for (var i = 0; i < nodes.length; i++) {
                    if (nodes[i].children != null) {
                        me.getChildNode(nodes[i]);
                    } else {
                        me._refreshCheck(nodes[i]);
                        me._setAllOpacity(nodes[i]);
                        me._setViewNumber(nodes[i],me.count);

                    }
                }
            },
            _refreshCheck: function (treeNode) {
                var me = this;
                var layer = appConfig.map.getLayers().array_;
                for (var j = 0; j < layer.length; j++) {
                    var layerId = layer[j].values_.id;
                    if (layerId == treeNode.id) {
                        var vi = layer[j].values_.visible;
                        if (vi == true) {
                            me.count++;
                            _allLayerZtree.checkNode(treeNode, true, true,true);
                        } else {
                            _allLayerZtree.checkNode(treeNode, false, false, true);
                        }
                    }
                }
    
            },
            _setAllOpacity:function(node){
                    if (node.checked) {
                        $("#" + node.tId + "_slider").css('visibility', 'visible');
                        $("#" + node.tId).css("height", '45px');
                        $("#" + node.tId + "_a").css("height", '45px');
                    } else {
                        $("#" + node.tId + "_slider").css('visibility', 'hidden');
                        $("#" + node.tId).css("height", '40px');
                        $("#" + node.tId + "_a").css("height", '40px');
                    }
            },
            _setViewNumber: function (treeNode, viewCount) {
                var node = treeNode.getParentNode();
                while (node != undefined && node != null) {
                    var nums = node.name.split('(')[1].split(')')[0].split('/');
                    var viewNumer =0;
                    var totalNumer = Number(nums[1]);
    
                    if (node.isParent) {
                        if (node.caption.length > 9) {
    
                            node.name = node.caption.substring(0, 9) + "..." + "(" + (viewNumer + viewCount) + "/" + totalNumer + ")";
                        } else {
                            node.name = node.caption + "(" + (viewNumer + viewCount) + "/" + totalNumer + ")";
                        }
                    } else {
                        if (node.caption.length > 7) {
    
                            node.name = node.caption.substring(0, 7) + "..." + "(" + (viewNumer + viewCount) + "/" + totalNumer + ")";
                        } else {
                            node.name = node.caption + "(" + (viewNumer + viewCount) + "/" + totalNumer + ")";
                        }
                    }
    
                   
                    _allLayerZtree.updateNode(node);
                    node = node.getParentNode();
                }
            },
            // 
            _readZtrewOpen:function(){
                var me=this;
               var oldZtree=_allLayerZtree.getNodes()[0];
               oldZtree=oldZtree.children;
               for(var i=0;i<oldZtree.length;i++){
                    if(oldZtree[i].open){
                        me.openIdArr.push(oldZtree[i].tId);
                    }
                    if(oldZtree[i].children != undefined){
                        me.findOpenId(oldZtree[i]);
                    }
               }
            },
            findOpenId:function(oldZtree){
                var me=this;
                var nodes=oldZtree.children;
                for (var i = 0; i < nodes.length; i++) {
                    if(nodes[i].open){
                        me.openIdArr.push(nodes[i].tId);
                    }
                    if (nodes[i].children != undefined) {
                        me.findOpenId(nodes[i]);
                        
                    }
                }
                
            },
            _setOpenZtree:function(){
                var me=this;
                var oldZtree=_allLayerZtree.getNodes();
                for(var i=0;i<oldZtree.length;i++){
                     if(oldZtree[i].children != undefined && oldZtree[i].children.length>0){
                         var id=oldZtree[i].tId;
                         for(var j=0;j<me.openIdArr.length;j++){
                             if(me.openIdArr[j]==id){
                                 _allLayerZtree.expandNode(oldZtree[i],true);
                             }
                         }
                         me.OpenId(oldZtree[i]);
                     }
                }
             },
            OpenId:function(newZtree){
                var me=this;
                var nodes=newZtree.children;
                for (var i = 0; i < nodes.length; i++) {
                    if (nodes[i].children != null) {
                        var id=nodes[i].tId;
                        for(var j=0;j<me.openIdArr.length;j++){
                            if(me.openIdArr[j]==id){
                                me.allPnode=[];
                                me.getAllParent(nodes[i]);
                                var aa=me.allPnode;
                                _allLayerZtree.expandNode(nodes[i],true);
                                aa.forEach(el => {
                                    if(!el.open){
                                        _allLayerZtree.expandNode(el.node,false);   
                                    }
                                });
                            }
                        }
                        me.OpenId(nodes[i]);
                    }
                }
            },
            getAllParent:function(treeObj){
                if (treeObj == null) return ;
                var pNode = treeObj.getParentNode();
                if (pNode != null) {
                    this.allPnode.push({node:pNode,open:pNode.open});
                    filename = this.getAllParent(pNode);
                }
            }
        });
    });
define([
    'dojo/_base/declare',
    'FrameWork/Command',
    'dojo/_base/lang',
    "dojo/_base/array",
    'dojo/on', 
    "dojo/dom-attr", 
    './collectBar',
    'FrameWork/serviceUtil/collectService'
],
    function (declare, Command, lang, array, on, domAttr, collectBar,collectService) {
        return declare('FrameWork.View.FullScreen', [Command], {
            frame: null,
            enabled: false,
            parentCommand: null,
            subCommands: null,
            name: null,
            _widget: null,
            target: null,
            _userid:user.id,
            _rootNodesData:null,

            openIdArr:[],



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
                        debugger
                        this.inherited('onClick', arguments);
                        if (this._widget === undefined || this._widget === null) {
                            this._widget = new collectBar({}).placeAt(this.target);
                            this._widget._refresh2=this.fresh.bind(this);
                            this._widget.startup();
                            _controls.push({ control: this._widget, isactive: false });
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
                    this.fresh();
                    // if(_collectionLayerZtree){
                    //     this.openIdArr=[];
                    //     this._readZtrewOpen();
                    //     var aa=this.openIdArr;
                    //     this._widget._initTree();
                    //     this._setOpenZtree();

                    //     this.refreshLayer();

                    // }
                }
            },
            fresh:function(){
                if(_collectionLayerZtree){
                    this.openIdArr=[];
                    this._readZtrewOpen();
                    this._widget._initTree();
                    this._setOpenZtree();
                    this.refreshLayer();
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
            // --
            refreshLayer:function(){
                var me = this;
                var nodes = _collectionLayerZtree.getNodes();
                if (nodes.length > 0) {
                    for (var i = 0; i < nodes.length; i++) {
                        if (nodes[i].children!= undefined && nodes[i].children.length > 0) {
                            me.getChildNode(nodes[i]);
                        } else if( nodes[i].isParent== false){
                            me._refreshCheck(nodes[i]);
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
                    } else if( nodes[i].isParent== false){
                        me._refreshCheck(nodes[i]);
                    }
                }
            },
            _refreshCheck: function (treeNode) {
                var me = this;
                var layer = appConfig.map.getLayers().array_;
                for (var j = 0; j < layer.length; j++) {
                    var layerId = layer[j].values_.id;
                    var layerNa = layer[j].values_.name;
                    if (layerNa == treeNode.layername) {
                        var vi = layer[j].values_.visible;
                        if (vi == true) {
                            _collectionLayerZtree.checkNode(treeNode, true, true,true);
                        } else {
                            _collectionLayerZtree.checkNode(treeNode, false, false, true);
                        }
                    }
                }
    
            },
            // --
            _readZtrewOpen:function(){
                var me=this;
            //    var oldZtree=_collectionLayerZtree.getNodes()[0];
            //    oldZtree=oldZtree.children;
             var oldZtree=_collectionLayerZtree.getNodes();
               for(var i=0;i<oldZtree.length;i++){
                    if(oldZtree[i].open){
                        me.openIdArr.push(oldZtree[i].id);
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
                        me.openIdArr.push(nodes[i].id);
                    }
                    if (nodes[i].children != undefined) {
                        me.findOpenId(nodes[i]);
                        
                    }
                }
                
            },
            _setOpenZtree:function(){
                var me=this;
            //    var oldZtree=_collectionLayerZtree.getNodes()[0];
            //    oldZtree=oldZtree.children;
             var oldZtree=_collectionLayerZtree.getNodes()
               for(var i=0;i<oldZtree.length;i++){
                    if(oldZtree[i].children != undefined && oldZtree[i].children.length>0){
                        var id=oldZtree[i].id;
                        for(var j=0;j<me.openIdArr.length;j++){
                            if(me.openIdArr[j]==id){
                                _collectionLayerZtree.expandNode(oldZtree[i],true);
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
                        var id=nodes[i].id;
                        for(var j=0;j<me.openIdArr.length;j++){
                            if(me.openIdArr[j]==id){
                                _collectionLayerZtree.expandNode(nodes[i],true);
                            }
                        }
                        me.OpenId(nodes[i]);
                    }
                }
            },
           
           
        });
    });
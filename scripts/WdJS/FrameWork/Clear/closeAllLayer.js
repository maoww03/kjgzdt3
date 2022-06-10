define([
    'dojo/_base/declare',
    'FrameWork/Command',
    'dojo/_base/lang', "dojo/_base/array", 'dojo/on', "dojo/dom-attr","dojo/dom-style"
],
    function (declare, Command, lang, array, on, domAttr,domStyle) {
        return declare('FrameWork.Clear.closeAllLayer', [Command], {
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
                    if (this.enabled) {
                        this.inherited('onClick', arguments);
                        for (var i = 0; i < appConfig.map.getLayers().array_.length; i++) {
                          
                            var layer = appConfig.map.getLayers().array_[i];

                            if (layer.values_.graphicMap && layer.getSource().getFeatures().length) {
                                var id=layer.values_.id;
                               if(id != "Custom_drawLayer"){
                                    layer.getSource().clear();
                               }
                               
                            }else  if (layer.values_.thematicMap){
                                layer.setVisible(false);
                            }
                        }

                        for (var i = 0; i < appConfig.map.overlays_.array_.length; i++) {
                            var overlay = appConfig.map.overlays_.array_[i];
                            overlay.setPosition(undefined);
                        }
                    }
                    // 
                    dojo.query('.repeatHide').forEach((dom) => {
                        domStyle.set(dom,"display",'none');
                    })
                    if(this._sidebar==undefined ){
                        dojo.query('.sidebar-tool').forEach((dom) => {
                            domStyle.set(dom,"display",'none');
                        })
                    }
                   
                    // _allLayerZtree
                    if(_allLayerZtree){
                        this.closeAllLayer();
                    }
                    // _collectionLayerZtree
                    if(_collectionLayerZtree){
                        this.closeCollectLayer();
                    }
                }
            },
            // --------------AllLayer
            closeAllLayer: function () {
                var me = this;
                var nodes = _allLayerZtree.getNodes();
                if (nodes.length > 0) {
                    for (var i = 0; i < nodes.length; i++) {
                        if (nodes[i].children.length > 0) {
                            _allLayerZtree.checkNode(nodes[i], false, false, false);
                            me.getChildNode(nodes[i]);
                        } else {
                            me._closeLegend(nodes[i]);
                            _allLayerZtree.checkNode(nodes[i], false, false, false);
                            me._setAllOpacityClose(nodes[i]);
                            me._setViewNumber(nodes[i],0);
                        }
                    }
                }
            },
    
            getChildNode: function (P_node) {
                var me = this;
                var nodes = P_node.children;
                for (var i = 0; i < nodes.length; i++) {
                    if (nodes[i].children != null) {
                        _allLayerZtree.checkNode(nodes[i], false, false, false);
                        me.getChildNode(nodes[i]);
                    } else {
                        me._closeLegend(nodes[i]);
                        _allLayerZtree.checkNode(nodes[i], false, false, false);
                        me._setAllOpacityClose(nodes[i]);
                        me._setViewNumber(nodes[i],0);


                    }
                }
            },
            // 刷新 可能会用到
            _refreshCheck: function (treeNode) {
                var me = this;
                var layer = appConfig.map.getLayers().array_;
                for (var j = 0; j < layer.length; j++) {
                    var layerId = layer[j].values_.id;
                    if (layerId == treeNode.id) {
                        var vi = layer[j].values_.visible;
                        if (vi == true) {
                            _allLayerZtree.checkNode(treeNode, true, true);
                        } else {
                            _allLayerZtree.checkNode(treeNode, false, false, false);
                        }
                    }
                }
    
            },
            // Legend
            _closeLegend: function (treeNode) {
                var layer = appConfig.map.getLayers().array_;
                for (var j = 0; j < layer.length; j++) {
                    // var layerId = layer[j].values_.id;
                    legend.removeLegend(layer[j]);
                }
    
            },
            // 透明度
            _setAllOpacityClose:function(node){
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
            // 数字
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

            // --------------CollectLayer
            closeCollectLayer:function(){
                var me = this;
                var nodes = _collectionLayerZtree.getNodes();
                if (nodes.length > 0) {
                    for (var i = 0; i < nodes.length; i++) {
                        if (nodes[i].children.length > 0) {
                            _collectionLayerZtree.checkNode(nodes[i], false, false, false);
                            me.getChildNode2(nodes[i]);
                        } else {
                            _collectionLayerZtree.checkNode(nodes[i], false, false, false);

                        }
                    }
                }
            },
            getChildNode2: function (P_node) {
                var me = this;
                var nodes = P_node.children;
                for (var i = 0; i < nodes.length; i++) {
                    if (nodes[i].children != null) {
                        _collectionLayerZtree.checkNode(nodes[i], false, false, false);
                        me.getChildNode2(nodes[i]);
                    } else {
                        _collectionLayerZtree.checkNode(nodes[i], false, false, false);

                    }
                }
            },

        });
    });
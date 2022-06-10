define(["dojo/_base/declare", "dojo/text!./templates/addCollectPop.txt", "dijit/_TemplatedMixin", "dijit/_WidgetBase", "dojo/on", "dojo/dom-style", 'dojo/parser', "dojo/dom-class", "dojo/dom-attr", "dojo/_base/lang", 'dojo/_base/array',  'FrameWork/serviceUtil/collectService','./inputCataName'],
    function (declare, template, TemplatedMixin, WidgetBase, on, domStyle, parser, domClass, domAttr, lang, array, collectService,inputCataName) {
        return declare([WidgetBase, TemplatedMixin], {
            templateString: template,
            data: null,

            _started: false,
            _isOver: false,
            _userid:null,
            _onclickAddCataId:null,
            _ztreeNode:[],
            _onclicktreeNode:null,
            _allCollectLayers:[],
            _addNode:null,
            _findNodes:[],
            _zTree:null,
            _layerId:null,
            _collectLayer: null,

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
                parser.parse(this.domNode).then(function () {
                    this._userid=this.data;
                    
                    this._layerId=this.layer.layerid;
                    // this._layerName=this.layerName;
                    var val='';
                    if(this.layerName.length>8){
                        val+=this.layerName.substring(0,8);
                        val += '...';
                        this.layername.innerHTML=`(${val})`;
                    }else{
                        this.layername.innerHTML=`(${this.layerName})`;

                    }

                    this._initTree();           
                    this.bindEvent();
                }.bind(this));
                
            },
           
            // 1--ztree
            _initTree:function(){
                var me = this;
                var setting = {
                    data:{
                        keep:{
                            parent:true
                        },

                    },
                    check: {
                        enable: true
                    },
                    view: {
                        showIcon: false,
                        showLine: false,
                        selectedMulti: true,
                        autoCancelSelected: false,
                        addDiyDom: $.proxy(me._addDiyDom, me),
                        // fontCss: {color: 'rgb(90, 102, 128)'},
                    },
                    edit: {
                        showRemoveBtn: false,
                        showRenameBtn: false
                    },
                    callback: {
                        // onExpand:me._creatSubCata.bind(me),
                        // onCollapse: me._removeNode.bind(me),
                        onClick: me._onClick.bind(me),
                    }
                };
                collectService.get_allCataLayers(me._userid).then(function (result) {
                    if (result.code == 200) {
                        me._rootNodesData=result.data;
                        me._preProsessData(me._rootNodesData);
                       
                        var zTree = $.fn.zTree.init($(this.catalogTree), setting, me._rootNodesData);
                        me._zTree = zTree;
                    }
                });
            },
           
            _preProsessData:function(data){
                var me = this;
                // 遍历data，设置属性
                array.forEach(
                    data,
                    function (item) {
                        if (item.catalogFolders != null) {
                            item.isParent = true;
                            item.nocheck = false;
                            item.cata_Id=item.id ;
                            item.children = item.catalogFolders;
                        } else {
                            item.isParent = true;
                            if (item.caption.length > 7) {
                                
                                item.name = item.name.substring(0, 7) + "...";
                            } else {
                                item.name = item.name;
                            }
                            item.nocheck = false;
                            item.cata_Id=item.id ;
                        }
    
                        // 递归
                        if (item.children !== undefined) {
                            me._preProsessData(item.children);
                        }
                    }.bind(this)
                );

            },
            
            // 2--addPcata
            _addPcata:function(fromid,name,addNode){
                var me=this;
                if(name){
                    var data={ 
                        "fromid": fromid,
                        "name": name,
                        "userid": me._userid
                    };
                    collectService.add_Catalog(dojo.toJson(data)).then(function (result) {
                        if (result.code == 200 && result.data!=null) {
                            var newNodeData={
                                name: name,
                                isParent:true,
                                fromid:fromid,
                                cata_Id:result.data
                            };
                            me. _zTree.addNodes(addNode,newNodeData);
                            domStyle.set(me.addcatalog_sub, "display", "none");
                        }else{
                            alert(result.msg);
                        }                        
                    });
                }else{
                    alert("请输入名称");
                }
            },

            // 3--addDiyDom*
            _addDiyDom:function(treeId, treeNode){
                var me=this;
                $("#"+treeNode.tId).css("position","relative");
                $("#"+treeNode.tId+"_a").css("width",'100%');
                $("#"+treeNode.tId).css("clear",'both');
                
                // treeNode.isParent&&(treeNode.getParentNode()==null||treeNode.getParentNode().getParentNode()==null)

                // 添加目录
                if(treeNode.isParent){
                    var addCatalogId = treeNode.tId + "_add";
                    var addCatalogStr = '<div id="' + addCatalogId + '" class="addCatalog" ></div>';
                    $("#" + treeNode.tId + "_a").after(addCatalogStr);
                    if(!(treeNode.getParentNode()==null||treeNode.getParentNode().getParentNode()==null)){
                        $("#"+addCatalogId).css("display",'none');
                    }
                    $("#" + addCatalogId).on('click', function () {
    
                        var aa=treeNode.tId;
                        var inputBox = new inputCataName({ fromid: treeNode.cata_Id,addNode:treeNode}).placeAt(dojo.byId(treeNode.tId));
                        inputBox.addSubCata=me._addPcata.bind(me);
                        inputBox.startup();

                        me._onclickAddCataId=treeNode.cata_Id;
                        me._addNode=treeNode;
                    })
                }

                 // 删除目录
                if (treeNode.isParent) {
                    var deleteCatalogId = treeNode.tId + "_delete";
                    var deleteCatalogStr = '<div id="' + deleteCatalogId + '" class="deleteCatalog"></div>';
                    $("#" + treeNode.tId + "_add").after(deleteCatalogStr);
                    $("#" + deleteCatalogId).on('click', function (e) {
                        e.stopPropagation();
                        if(confirm("请确认是否删除该标记")){
                            // me._deleteCatalog(treeNode);
                            collectService.delete_Catalog(treeNode.cata_Id).then(function (result) {
                                if (result.code == 200) {
                                    me._zTree.removeNode(treeNode);
                                }
                            });
                            alert("删除成功");
                        }
                    })
                } 
            },

            // 4--选择node*
            _onClick:function(event, treeId, treeNode){
                var me=this;
                me._onclicktreeNode=treeNode;
               },
              
            bindEvent:function(){
                var me=this;
                // 1-
                on(this.cancel, 'click', function () {
                    this.destroy();
                }.bind(this));
                on(this.qx, 'click', function () { 
                    this.destroy();
                }.bind(this));
                on(this.save, 'click', function () {     
                    // me._addCollectLayer(me._onclicktreeNode);
                    if(me._onclicktreeNode==null){
                        alert("请选择目录！")
                    }else{
                        
                        var data={
                            "folderid": me._onclicktreeNode.cata_Id,
                            "layername": me.layerName,
                            "userid":me._userid,
                            "layerid":me._layerId
                        }
                        collectService.add_collectLayer(dojo.toJson(data)).then(function (result) {
                            if (result.code == 200) {
                                alert("添加成功");
                                me.lightStar(result.data.id);
                                this.destroy();
                            }
                        }.bind(this));
                    }
                   
                }.bind(this));
               
                // 2-fromid=0
                on(this.addcatalog, 'click', function () {      
                    domStyle.set(this.addcatalog_sub, "display", "block");
                }.bind(this));
                on(this.qxCatalog, 'click', function () {       
                    domStyle.set(this.addcatalog_sub, "display", "none");
                }.bind(this));
                on(this.saveCatalog, 'click', function () {
                    // var node=me._zTree.getNodesByFilter(function (node) { return node.level == 0 }, true)
                    this._addPcata(0,this.labelname.value,null);
                }.bind(this));


                // 3-搜索
                on(this.search_go, 'click', function () {
                    var me = this;
                    var name = this.search.value;

                    var selectedNode = me._zTree.getSelectedNodes();
                    if (selectedNode.length > 0) {
                        for (var k = 0; k < selectedNode.length; k++) {
                            me._zTree.cancelSelectedNode(selectedNode[k]);
                            me._zTree.updateNode(selectedNode[k]);
                        }
                    }

                    if (name) {
                        me._searchNodes(name);
                        var nodes=me._zTree.getSelectedNodes();
                    } else {
                        alert("请输入内容");
                        // var selectedNode = me._zTree.getSelectedNodes();
                        // if (selectedNode.length > 0) {
                        //     for (var k = 0; k < selectedNode.length; k++) {
                        //         me._zTree.cancelSelectedNode(selectedNode[k]);
                        //         me._zTree.updateNode(selectedNode[k]);
                        //     }
                        // } 
                    }
                }.bind(this));
                // keypress
                on(this.search, 'keypress', function (event) {
                    var me=this;
                    if(event.keyCode == "13"){
                         me.search_go.click();
                    }
                 }.bind(this));
            },


            _searchNodes:function(keywords){
                var me=this;
                // me._zTree.expandAll(false);
                var aa=me._zTree.getNodes();
                // me._zTree.expandNode(aa[0], true, false, false);
                var nodes = me._zTree.getNodesByParamFuzzy("name", keywords, null);
                if (nodes.length>0) {
                    for(var i=0;i<=nodes.length;i++){
                        me._zTree.selectNode(nodes[i],true);
                    }
                }
            },

            lightStar:function(layer_cataId){},

            setWidgetVisible: function (visible) {
                var me = this;
                if (visible) {
                    domStyle.set(this.domNode, "display", "block");
                    
                } else {
                    domStyle.set(this.domNode, "display", "none");
                   
                }
            },
        });
    });


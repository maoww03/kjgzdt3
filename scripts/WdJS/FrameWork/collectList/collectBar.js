define(["dojo/_base/declare", "dojo/text!./templates/collectBar.txt", "dijit/_TemplatedMixin", "dijit/_WidgetBase", "dojo/on", "dojo/dom-style", 'dojo/parser', "dojo/dom-class", "dojo/dom-attr", "dojo/_base/lang", 'dojo/_base/array', 'FrameWork/serviceUtil/collectService',"./createNewfile","FrameWork/Setalert/Setalert"],
    function (declare, template, TemplatedMixin, WidgetBase, on, domStyle, parser, domClass, domAttr, lang, array, collectService,createNewfile,Setalert) {
        return declare([WidgetBase, TemplatedMixin], {
            templateString: template,
            data: null,

            _started: false,
            _isOver: false,
            _userid: user.id,
            _rootNodesData:null,
            _rootNode:null,
            _zTree:null,
            _findNodes:[],
            _layerids:undefined,
            _createNewfile:null,
            _collectLayer: null,
            _neededsavadata:[],
            _setTime:0,

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
                    this._initTree();
                    this.bindEvent();
                }.bind(this));
                
                this._started = true;
            },

            // 1--ztree
            _initTree: function (n) {
                 var me = this;
                var setting = {
                    data:{
                        simpleData: {
                            enable: true
                        },
                        showTitle: true, 
                        key: {
                            title: "title" 
                        },
                        keep:{
                            parent:true
                        }
                    },
                    check: {
                        enable: true
                    },
                    view: {
                        showIcon: me.showIconForTree.bind(me),
                        showLine: false,
                        selectedMulti: true,
                        autoCancelSelected: false,
                        addDiyDom: $.proxy(me._addDiyDom, me),
                        dblClickExpand:false,
                        addHoverDom:$.proxy(me._hoverNode, me),
                        removeHoverDom:$.proxy(me._removehover, me),
                    },
                    edit: {
                        enable: true,
                        showRemoveBtn: false,
                        showRenameBtn: false,
                        drag: {
                            isCopy: false,//所有操作都是move
                            isMove: true,
                            prev: true,
                            next: true,
                            inner: true
                        }
                    },
                    callback: {
                        onCheck: me._onCheck.bind(me),
                        onClick:me._onClick.bind(me),
                        beforeClick: function (event, treeId, treeNode) {
                            return true;
                        },
                        // 是否能拖拽
                        beforeDrag:  me._beforeDrag.bind(me),
                        beforeDrop:  me._beforeDrop.bind(me),
                        onDrop: me._onDrop.bind(me)
                    }
                };
                // get_allCataLayers
                collectService.get_allCataLayers(me._userid).then(function (result) {
                    if (result.code == 200) {
                        me._rootNodesData=result.data;
                        me._preProsessData(me._rootNodesData);
                        // me._rootNodesData=[{
                        //     name:'我的目录',
                        //     title:'我的目录',
                        //     parent:true,
                        //     fromid:-1,
                        //     children:me._rootNodesData,
                        //     open: true
                        // }];   
                        var zTree = $.fn.zTree.init($(this.catalogTreeshow), setting, me._rootNodesData);
                        me._zTree = zTree;
                        _collectionLayerZtree=zTree;
                    }
                });
            },
            showIconForTree:function(treeId, treeNode){
                if(treeNode.isParent == false){
                    return false;
                }else{
                    return true;
                }
            },
            _onClick:function(event, treeId, treeNode){
                event.preventDefault();
                if(treeNode.isParent){
                    _collectionLayerZtree.expandNode(treeNode);
                }
                _collectionLayerZtree.cancelSelectedNode(treeNode);
                
            },
            _refresh:function(event, treeId, treeNode){
                var me=this;
                if(treeNode.fromid==-1){
                    me._initTree();
                }
            },

            _preProsessData:function(data){
                var me = this;
                // 遍历data（isParent,name,fromid,cata_Id）
                array.forEach(
                    data,
                    function (item) {
                        // 目录
                        if ((item.catalogFolders !== undefined && item.catalogFolders.length >0)||(item.catalogs !== undefined && item.catalogs.length >0)) {
                            item.isParent = true;
                            item.cata_Id=item.id ;
                            item.title=item.layername;
                            item.children = item.catalogFolders;
                            if(item.catalogs !== undefined && item.catalogs.length >0){
                                me.arrSortByKey(item.catalogs,"index");
                                for(var i=0;i<item.catalogs.length;i++){
                                    item.children.push(item.catalogs[i]);
                                }
                            }
                            
                        } else {
                            if(item.layername !== undefined){
                                // 图层
                                item.isParent = false;
                                if (item.layername.length > 7) {
                                    item.name = item.layername.substring(0, 7) + "...";
                                } else {
                                    item.name = item.layername;
                                }
                                item.fromid=item.folderid;
                                item.title=item.layername;
                                var maplayer = appConfig.map.getLayers().array_;
                                for(var j = 0; j < maplayer.length; j++){
                                    var maplayName = maplayer[j].values_.name;
                                    if(maplayName==item.layername){
                                        item.checked=maplayer[j].values_.visible;
                                        break;
                                    }
                                }
                            }else{
                                item.isParent = true;
                                if (item.name.length > 7) {
                                    item.name = item.name.substring(0, 7) + "...";
                                } else {
                                    item.title = item.layername;

                                }

                            }
                            item.cata_Id=item.id ;
                        }
                        // 递归
                        if (item.children!== undefined) {
                            me._preProsessData(item.children);
                        }
                    }.bind(this)
                );

            },
            _hoverNode:function(treeId, treeNode){
                if(treeNode.isParent == true){
                    $("#" + treeNode.tId + "_a").css("background-color", "#f4f7ff");
                    $("#" + treeNode.tId + "_switch").css("background-color", "#f4f7ff");
                }
            },
            _removehover:function(treeId, treeNode){
                if(treeNode.isParent == true) {
                    $("#" + treeNode.tId + "_a").css("background-color", "white");
                    $("#" + treeNode.tId + "_switch").css("background-color", "white");
                }
            },
    
            // 2--addDiyDom
            _addDiyDom: function (treeId, treeNode) {
                var me=this;
                $("#"+treeNode.tId).css("position","relative");

                //1-收藏
                if(treeNode.isParent!=true){        
                    var starId = treeNode.tId + "_star";
                    var starStr = '<div id="' + starId + '" class="star2"></div>';
                    $("#" + treeNode.tId + "_a").after(starStr);
                    $("#" + treeNode.tId + "_star").on("click", function () {
                        collectService.delete_collectLayers(treeNode.cata_Id).then(function (result) {
                            if (result.code == 200) {
                                me._zTree.removeNode(treeNode);
                            }else{
                                alert(result.msg);
                            }
                        });
                    })
                }
               
                //2-check
                if (treeNode.isParent != true ) {
                    var node = $("#" + treeNode.tId + "_check").detach();
                    $("#" + treeNode.tId + "_star").after(node);

                    $("#" + treeNode.tId).css("background", '#eff2f3');
                    $("#" + treeNode.tId + "_a").css("background", '#eff2f3');
                    $("#" + treeNode.tId).css("padding-left", Number(treeNode.level) * 10 + 'px');

                    $("#" + treeNode.tId + "_check")
                        .css("position", "absolute")
                        .css("right", "40px")
                        .css("margin-top", "14px")
                        .css("display", "inline")
                        .css("width", "24px")
                        .css("height", "15px")
                        .css("margin-right", "9px");

                    $("#" + treeNode.tId + "_check").on("click", function () {
                        var permission = $("#" + treeNode.tId).attr("authority");
                        if (permission == 'no') {
                            alert("当前用户没有权限");
                            return false;
                        }
                    })
                } else if (treeNode.children != undefined && treeNode.children.length > 0) {
                    var pd=false;
                    for(var i=0;i<treeNode.children.length;i++){
                        if(treeNode.children[i].isParent != true){
                            pd=true; 
                        }
                    }
                    if(pd){
                        var node = $("#" + treeNode.tId + "_check").detach();
                        $("#" + treeNode.tId + "_a").after(node);
                        $("#" + treeNode.tId + "_check")
                            .css("position", "absolute")
                            .css("right", "40px")
                            .css("margin-top", "14px")
                            .css("display", "inline")
                            .css("width", "24px")
                            .css("height", "15px")
                            .css("margin-right", "9px");
                        $("#" + treeNode.tId).attr("isOweLayer", 'yes');
                    }else{
                        $("#" + treeNode.tId).attr("isOweLayer", 'no');
                    }
                    // treeNode.fromid != -1                    
                }

                //3-权限authority
                if(treeNode.isParent!=true){
                    var aObj = $("#" + treeNode.tId + "_a");
                    var authorityId = treeNode.tId + "_authority";
                    var authorityStr = '<span id="' + authorityId + '" class="authority" ></span>';
                    aObj.before(authorityStr);

                }
                 //透明度+title
                if (treeNode.isParent != true) {
                    var aObj = $("#" + treeNode.tId + "_a");
                    var sliderId = treeNode.tId + "_slider";
                    var sliderStr = '<div id="' + sliderId + '" class="toc-slider' + (true ? " invisible" : "") + '"></div>';
                    aObj.after(sliderStr);
                    var slider = $("#" + sliderId);
                    var _opacity=0.5;
                    if(treeNode.transparency){
                        _opacity=treeNode.transparency;
                    }else{
                        treeNode.transparency=_opacity;
                    }
                    slider.noUiSlider({
                        start: _opacity,
                        connect: "lower",
                        range: {
                            min: 0,
                            max: 1
                        }
                    });
                    me._setMapLayerOpacity(treeNode, _opacity);
                    slider.on("slide", function (arr, val) {
                        val = parseFloat(val);
                        treeNode.transparency=val;
                        me._setMapLayerOpacity(treeNode, val);
                    });
                    me._setAllOpacity(treeNode);
                }


                // 4-添加title
                $("#" + treeNode.tId + "_authority").attr("title","权限");
                $("#" + treeNode.tId + "_check").attr("title","图层控制");
                $("#" + treeNode.tId + "_star").attr("title","取消收藏");

                //5- 添加目录
                if(treeNode.isParent && treeNode.fromid != -1 && treeNode.name != "默认目录"){
                    var addCatalogId = treeNode.tId + "_add";
                    var addCatalogStr = '<div id="' + addCatalogId + '" class="addCatalog" ><e/div>';
                    $("#" + treeNode.tId + "_a").after(addCatalogStr);
                    $("#" + addCatalogId).on('click', function (e) {
                        e.stopPropagation();
                        if(me._createNewfile){
                            me._createNewfile.destroy();
                            me._createNewfile=null;
                        }
                        me._createNewfile=new createNewfile({_userid:me._userid , _pnode:treeNode ,_fromid:treeNode.cata_Id}).placeAt(me.create);
                        me._createNewfile.startup();

                    })
                    $("#" + addCatalogId).attr("title","新建文件夹");
                }
                // 6-删除目录
                if (treeNode.isParent && treeNode.fromid != -1 && treeNode.name != "默认目录") {
                    var deleteCatalogId = treeNode.tId + "_delete";
                    var deleteCatalogStr = '<div id="' + deleteCatalogId + '" class="deleteCatalog"></div>';
                    $("#" + treeNode.tId + "_add").after(deleteCatalogStr);
                    $("#" + deleteCatalogId).on('click', function (e) {
                        e.stopPropagation();
                        if(confirm("请确认是否删除该标记")){
                            collectService.delete_Catalog(treeNode.cata_Id).then(function (result) {
                                if (result.code == 200) {
                                    _collectionLayerZtree.removeNode(treeNode);
                                }
                            });
                            alert("删除成功");
                        }
                       
                    })
                    $("#" + deleteCatalogId).attr("title","删除文件夹");

                } 

                // 7-默认目录
                if(treeNode.name == "默认目录"){
                    var defaultId = treeNode.tId + "_default";
                    var defaultStr = '<div id="' + defaultId + '" class="defaultIcon">默认</div>';
                    $("#" + treeNode.tId + "_a").after(defaultStr);
                }

            },
            _setMapLayerOpacity: function (treeNode, opacity) {
                var layerId = treeNode.layerid;
                if (treeNode.layerids != undefined && treeNode.layerids != null && treeNode.layerids.length > 0) {
                    for (var j = 0; j < treeNode.layerids.length; j++) {
                        for (var i = 0; i < appConfig.map.getLayers().array_.length; i++) {
                            var layer = appConfig.map.getLayers().array_[i];
                            var layer_id = layer.get("id");
                            if (layer_id === treeNode.layerids[j]) {
                                layer.setOpacity(opacity);
                            }
                        }
                    }
                } else {
                    for (var i = 0; i < appConfig.map.getLayers().array_.length; i++) {
                        var layer = appConfig.map.getLayers().array_[i];
                        if (layer.values_.id === layerId) {
                            layer.setOpacity(opacity);
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

            // 3--check
            _onCheck: function (event, treeId, treeNode) {
                var me=this;
                event.preventDefault();
                me._showLayer(treeNode);
                if(treeNode.isParent){
                    var owe= $("#" + treeNode.tId).attr("isOweLayer");
                    if(owe == 'yes'){
                        var nodes=treeNode.children;
                        nodes.forEach((node)=>{
                            me._showLayer(node);
                        });
                    }
                }

            },
            _findGroupLayers:function(layerid,data){
                var me=this;
                for (var i = 0; i < data.length; i++) {
                    if (data[i].layerType == "GroupLayer") {
                        var subdata=data[i].subLayers;
                        me._findGroupLayers(layerid,subdata);
                    }else if(data[i].layerType=="SuperMapWMTSGroupLayer"){
                        if(data[i].id == layerid){
                            me._layerids=data[i].layerids;
                            break
                        }
                    }
                }
            },
            _showLayer:function(treeNode){
                var me=this;
                var MapConfig=_otherRegion();
                me._layerids=null;
                me._findGroupLayers(treeNode.layerid,MapConfig.layers);
                var layerids = me._layerids;
                if(layerids != undefined && layerids != null && layerids.length>0){
                    for (var k = 0; k < layerids.length; k++) {
                        for (var j = 0; j < appConfig.map.getLayers().array_.length; j++) {
                            var layer = appConfig.map.getLayers().array_[j];
                            var layer_id = layer.get("id");
                            if (layer_id === layerids[k]) {
                                layer.setVisible(treeNode.checked);
                                if (treeNode.checked) {
                                    $("#" + treeNode.tId + "_slider").css('visibility', 'visible');
                                    $("#" + treeNode.tId).css("height", '45px');
                                    $("#" + treeNode.tId + "_a").css("height", '45px');
                                    legend.addLegend(layer);


                                } else {
                                    $("#" + treeNode.tId + "_slider").css('visibility', 'hidden');
                                    $("#" + treeNode.tId).css("height", '40px');
                                    $("#" + treeNode.tId + "_a").css("height", '40px');
                                    legend.removeLegend(layer);

                                    appConfig.filterLegent.forEach((e,index)=>{
                                        if(e.id==layer_id){
                                            appConfig.filterLegent.splice(index,1);
                                        }
                                    });
                                }
                                continue;
                            }
                        }
                    }
                }else{
                    appConfig.map.getLayers().array_.forEach((layer)=>{
                        var layer_id = layer.values_.id;
                        if (layer_id === treeNode.layerid) {
                            layer.setVisible(treeNode.checked);
                            if (treeNode.checked) {
                                $("#" + treeNode.tId + "_slider").css('visibility', 'visible');
                                $("#" + treeNode.tId).css("height", '45px');
                                $("#" + treeNode.tId + "_a").css("height", '45px');
                                legend.addLegend(layer);

                            } else {
                                $("#" + treeNode.tId + "_slider").css('visibility', 'hidden');
                                $("#" + treeNode.tId).css("height", '40px');
                                $("#" + treeNode.tId + "_a").css("height", '40px');
                                legend.removeLegend(layer);

                                appConfig.filterLegent.forEach((e,index)=>{
                                    if(e.id==layer_id){
                                        appConfig.filterLegent.splice(index,1);
                                    }
                                });
                            }
                        }
                    });
                }
            },
           
            arrSortByKey :function (arr, givKey) {
                const listArr =arr;
                listArr.sort((val1, val2) => {
                  const val1KeyVal = val1[givKey] || '';
                  const app2KeyVal = val2[givKey] || '';
                  if (val1KeyVal > app2KeyVal) {
                    return 1;
                  } else if (val1KeyVal === app2KeyVal) {
                    return 0;
                  } else {
                    return -1;
                  }
                })
                return listArr;
              },
            // 拖拽
            _onDrop:function(event, treeId, treeNodes, targetNode,moveType){
                var me=this;
                if(moveType == "inner"){
                    var node=treeNodes[0];
                    var updatadata={
                        "id":node.id,
                        "folderid": node.pId,
                        "index": 0,
                        "transparency": node.transparency
                    }
                    collectService.updata_catalogdata(dojo.toJson(updatadata)).then(function(re){})
                }
                if(moveType == "prev" || moveType == "next"){
                    me.updata_wj.click();
                }
            //    me._refresh2();
                
            },

            _refresh2:function(){},

            //  拖拽释放之后运行
            _beforeDrop:function(treeId, treeNodes, targetNode, moveType){
               if(targetNode.isParent==false && moveType == "inner"){
                    return false;
                }else{
                    return true;
                }
                // if(!targetNode.isParent){
                //     return false;
                // }else{
                    // return true;
                // }

            },

            // 拖拽前运行
            _beforeDrag:function(treeId, treeNodes){
                var re=true;
                treeNodes.forEach(node=>{
                    if(node.isParent){
                        re= false;
                    }
                });
                return re;
            },
            //5-search 
            bindEvent: function () {
                on(this.go, 'click', function () {
                    var me = this;
                    var name = this.search.value;
                    if (name) {
                        me.findNode(name);
                        var nodes=me._zTree.getSelectedNodes();
                    } else {
                        alert("请输入内容");
                        var selectedNode = me._zTree.getSelectedNodes();
                        if (selectedNode.length > 0) {
                            for (var k = 0; k < selectedNode.length; k++) {
                                me._zTree.cancelSelectedNode(selectedNode[k]);
                                me._zTree.updateNode(selectedNode[k]);
                            }
                        }
                    }
                }.bind(this));

                // keypress
                on(this.search, 'keypress', function (event) {
                   var me=this;
                   if(event.keyCode == "13"){
                        me.go.click();
                   }
                }.bind(this));

                // 新建
                on(this.create_wj, 'click', function (event) {
                    var me=this;
                    if(me._createNewfile){
                        me._createNewfile.destroy();
                        me._createNewfile=null;
                    }
                    // var pnode=_collectionLayerZtree.getNodes();
                    me._createNewfile=new createNewfile({_userid:me._userid , _pnode:null ,_fromid:0}).placeAt(me.create);
                    me._createNewfile.startup();
                 }.bind(this));

                   // 保存透明度
                on(this.updata_wj, 'click', function (event) {
                   var me=this;
                   var savadata = _collectionLayerZtree.getNodes();
                //    time
                   console.log("start");
                   me._savadata(savadata,0);
                   console.log("end");
                   var updatadata=me._neededsavadata;
                   
                   updatadata.forEach(data=>{
                    collectService.updata_catalogdata(dojo.toJson(data)).then(function(re){ })
                   })
                   Setalert.rompt("保存成功","alert-success");

                 }.bind(this));

            },
            _savadata:function(data,j){
                console.log("step"+j);
                debugger
                var me=this;
                for(var i=0;i<data.length;i++){
                    var node=data[i];
                    if(node.isParent && node.children!=undefined && node.children.length>0){
                        var subdata=node.children;
                        j++
                        me._savadata(subdata,j);
                    }
                    if(node.isParent == false){
                        var updatadata={
                            "id":node.id,
                            "folderid": node.pId,
                            "index": i+1,
                            "transparency": node.transparency
                        }
                        me._neededsavadata.push(updatadata);
                    }
                }
            },
            
            findNode:function(name){
                var me = this;
                var selectedNode = me._zTree.getSelectedNodes();
                if (selectedNode.length > 0) {
                    for (var k = 0; k < selectedNode.length; k++) {
                        me._zTree.cancelSelectedNode(selectedNode[k]);
                        me._zTree.updateNode(selectedNode[k]);
                    }
                }

                var nodes = me._zTree.getNodes();
                me._findNodes = [];
                for (var i = 0; i < nodes.length; i++) {
                    if (nodes[i].children.length > 0) {
                        me._findChildNode(nodes[i], name);
                    } else {
                        if (nodes[i].name.indexOf(name) >= 0) {
                            me._findNodes.push(nodes[i]);
                        }
                    }
                }
                if (me._findNodes.length > 0) {
                    me._zTree.expandAll(false);
                    me._zTree.expandNode(nodes[0], true, false, false);
                    for (var i = 0; i < me._findNodes.length; i++) {
                        var node = me._findNodes[i];
                        var P_noeds = [];
                        while (node.parentTId) {

                            P_noeds.push(node);
                            node = node.getParentNode();
                        }
                        for (var j = P_noeds.length - 1; j >= 0; j--) {
                            if (!P_noeds[j].open) {
                                me._zTree.expandNode(P_noeds[j], true, false, false);
                                P_noeds[j].open = true;
                            }
                        }
                    }
                }

            },
          
            _findChildNode: function (P_node, name) {
                var me = this;
                var nodes = P_node.children;
                for (var i = 0; i < nodes.length; i++) {
                    if (nodes[i].children != null) {
                        me._findChildNode(nodes[i], name);
                    } else {
                        if (nodes[i].name.indexOf(name) >= 0) {
                            me._findNodes.push(nodes[i]);
                            me._zTree.selectNode(nodes[i], true);
                        }
                        else {
                            me._zTree.cancelSelectedNode(nodes[i]);
                        }
                    }
                }
            },
            
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


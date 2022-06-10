define([
  "dojo/_base/declare",
  "dojo/text!./templates/ViewBar.txt",
  "dijit/_TemplatedMixin",
  "dijit/_WidgetBase",
  "dojo/on",
  "dojo/dom-style",
  "dojo/parser",
  "dojo/dom-class",
  "dojo/dom-attr",
  "dojo/_base/lang",
  "dojo/_base/array",
  "FrameWork/MapUtil/MapConfig",
  "./contextMenu",
  "FrameWork/View/MoreScreen",
    "FrameWork/View/MapVisibleBar", 'FrameWork/serviceUtil/collectService', 'FrameWork/collectList/collectBar','FrameWork/collectList/addCollectPop',
    'FrameWork/DataViewDetails/Detailspop'
  //20210402
], function (
    declare,
    template,
    TemplatedMixin,
    WidgetBase,
    on,
    domStyle,
    parser,
    domClass,
    domAttr,
    lang,
    array,
    MapConfig,
    contextMenu,
    MoreScreen,
    MapVisibleBar, collectService, collectBar,addCollectPop,Detailspop
    //20210402
) {
    return declare([WidgetBase, TemplatedMixin], {
        templateString: template,
        _data: null,

        _started: false,
        _contextMenu: null,
        _ViewBarzTree: null,
        _allList:true,
        _mapVisibleBar: null, //20210402
        _collect: [],
        _userId: user.id,
        _collectArr: [],
        _collectBar: null,
        _onClickStar:null, //20210427

        constructor: function (args) { },
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
                // return;
            }
            parser.parse(this.domNode).then(
                function () {
                    this._initZtree();
                    this.bindEvent();
                }.bind(this)
            );

            this._started = true;
        },
        // 
        _initZtree:function(){
            var me=this;
            var setting = {
                check: {
                    enable: true
                },
                view: {
                    showIcon: false,
                    showLine: false,
                    selectedMulti: true,
                    autoCancelSelected: false,
                    addDiyDom: $.proxy(me._addDiyDom, me),
                    dblClickExpand: false,
                    addHoverDom:$.proxy(me._hoverNode, me),
                    removeHoverDom:$.proxy(me._removehover, me)
                },
                data: {
                    simpleData: {
                        enable: true
                    },
                    showTitle: true, 
                    key: {
                        title: "title" 
                    }
                },
                callback: {
                    onCheck: me._onCheck.bind(me),
                    onClick:me._onClick.bind(me),
                    onRightClick: me._onRightClick.bind(me),
                    beforeClick: function (event, treeId, treeNode) {
                        return true;
                    },
                    beforeDblClick: function (event, treeId, treeNode) {
                        return false;
                    },
                }
            };
            me._data = [
                {
                    caption: "温州市自然资源专题数据",
                    myAttr:true,
                    subLayers: []
                }
            ];
            
            for (var i = 0; i < MapConfig.layers.length; i++) {
                if (MapConfig.layers[i].thematicMap) {
                    me._data[0].subLayers.push(MapConfig.layers[i]);
                }
            }
            //me._data = MapConfig.layers;
            me._preProcessData(me._data);
            this.tree.id = "ViewBar";
            var zTree = $.fn.zTree.init($(this.tree), setting, me._data);
            me._ViewBarzTree = zTree;
            _allLayerZtree=zTree;
            var nodes = zTree.getNodes();
            nodes.length > 0 && zTree.expandNode(nodes[0]);
            this._setCount(nodes[0], 0);
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
        _onClick:function(event, treeId, treeNode){
            event.stopPropagation();
            if(treeNode.isParent){
                _allLayerZtree.expandNode(treeNode);
            }
            _allLayerZtree.cancelSelectedNode(treeNode); 
        },
        _setCount: function (node, count) {
            var me = this;
            var zTree = me._zTree;
            var children = node.children;
            
            //if (children[0].isParent) {
            if (children != undefined && children != null) {
                for (var i = children.length - 1; i >= 0; --i) {
                    var childNode = children[i];

                    count += me._setCount(childNode, 0);

                }
                node.name = node.name + "(0/" + count + ")";
                me._ViewBarzTree.updateNode(node);
                return count;

            } else {
                return 1;
               
            }
           

        },
        _setViewNumber: function (treeNode, viewCount) {
            var node = treeNode.getParentNode();
            while (node != undefined && node != null) {


                var nums = node.name.split('(')[1].split(')')[0].split('/');
                var viewNumer = Number(nums[0]);
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

               
                this._ViewBarzTree.updateNode(node);
                node = node.getParentNode();
            }
        },
        _onCheck: function (event, treeId, treeNode) {
            //;
            event.preventDefault();
            if (treeNode.isParent) {
                var nums = treeNode.name.split('(')[1].split(')')[0].split('/');
                var viewNumer = Number(nums[0]);
                var totalNumer = Number(nums[1]);
                if (treeNode.checked) {
                    if (treeNode.caption.length > 9) {

                        treeNode.name = treeNode.caption.substring(0, 9) + "..." + "(" + totalNumer + "/" + totalNumer + ")";
                    } else {
                        treeNode.name = treeNode.caption + "(" + totalNumer + "/" + totalNumer + ")";
                    }
                   
                    this._setViewNumber(treeNode, totalNumer);
                } else {
                    if (treeNode.caption.length > 9) {

                        treeNode.name = treeNode.caption.substring(0, 9) + "..." + "(0/" + totalNumer + ")";
                    } else {
                        treeNode.name = treeNode.caption + "(0/" + totalNumer + ")";
                    }
                   
                    this._setViewNumber(treeNode, -viewNumer);
                }
                this._ViewBarzTree.updateNode(treeNode);
                var count = 0;
                for (var i = 0; i < treeNode.children.length; i++) {
                    var node = treeNode.children[i];
                    if (node.layerids != undefined && node.layerids != null && node.layerids.length > 0) {
                        for (var k = 0; k < node.layerids.length; k++) {
                            for (var j = 0; j < appConfig.map.getLayers().array_.length; j++) {
                                var layer = appConfig.map.getLayers().array_[j];
                                var layer_id = layer.get("id");
                                if (layer_id === node.layerids[k]) {
                                    layer.setVisible(node.checked);
                                    if (node.checked) {
                                        legend.addLegend(layer_id);
                                        $("#" + node.tId + "_slider").css('visibility', 'visible');
                                        $("#" + node.tId).css("height", '45px');
                                        $("#" + node.tId + "_a").css("height", '45px');
                                    } else {
                                        legend.removeLegend(layer_id);
                                        $("#" + node.tId + "_slider").css('visibility', 'hidden');
                                        $("#" + node.tId).css("height", '40px');
                                        $("#" + node.tId + "_a").css("height", '40px');
                                    }
                                    continue;
                                }
                            }
                        }
                    } else {
                        for (var j = 0; j < appConfig.map.getLayers().array_.length; j++) {
                            var layer = appConfig.map.getLayers().array_[j];
                            var layer_id = layer.get("id");
                            if (layer_id === node.id) {
                                layer.setVisible(node.checked);
                                if (node.checked) {
                                    legend.addLegend(layer_id);
                                    $("#" + node.tId + "_slider").css('visibility', 'visible');
                                    $("#" + node.tId).css("height", '45px');
                                    $("#" + node.tId + "_a").css("height", '45px');
                                } else {
                                    legend.removeLegend(layer_id);
                                    $("#" + node.tId + "_slider").css('visibility', 'hidden');
                                    $("#" + node.tId).css("height", '40px');
                                    $("#" + node.tId + "_a").css("height", '40px');
                                }
                                continue;
                            }
                        }
                    }
                }


            } else {
                if (treeNode.checked) {
                    this._setViewNumber(treeNode, 1);
                } else {
                    this._setViewNumber(treeNode, -1);
                }
                if (treeNode.layerids != undefined && treeNode.layerids != null && treeNode.layerids.length > 0) {
                    for (var j = 0; j < treeNode.layerids.length; j++) {
                        for (var i = 0; i < appConfig.map.getLayers().array_.length; i++) {
                            var layer = appConfig.map.getLayers().array_[i];
                            var layer_id = layer.get("id");

                            if (layer_id === treeNode.layerids[j]) {
                                layer.setVisible(treeNode.checked);
                                if (treeNode.checked) {
                                    legend.addLegend(layer_id);
                                } else {
                                    legend.removeLegend(layer_id);
                                }
                            }
                        }
                    }
                } else {
                    for (var i = 0; i < appConfig.map.getLayers().array_.length; i++) {
                        var layer = appConfig.map.getLayers().array_[i];
                        var layer_id = layer.get("id");

                        if (layer_id === treeNode.id) {
                            layer.setVisible(treeNode.checked);
                            if (treeNode.checked) {
                                legend.addLegend(layer_id);
                            } else {
                                legend.removeLegend(layer_id);
                            }
                        }
                    }
                }
                if (treeNode.checked) {
                    $("#" + treeNode.tId + "_slider").css('visibility', 'visible');
                    $("#" + treeNode.tId).css("height", '45px');
                    $("#" + treeNode.tId + "_a").css("height", '45px');
                } else {
                    $("#" + treeNode.tId + "_slider").css('visibility', 'hidden');
                    $("#" + treeNode.tId).css("height", '40px');
                    $("#" + treeNode.tId + "_a").css("height", '40px');
                }
                return false;
            }
            return false;
        },
        _onRightClick: function (event, treeId, treeNode) {
            var me = this;
           
            return false;
        },
        _addDiyDom: function (treeId, treeNode) {
            var me = this;
            $("#" + treeNode.tId).css("position", "relative");
            
            // -------------------star
            if (treeNode.isParent != true) {
                var starId = treeNode.tId + "_star";
                var starStr = '<div id="' + starId + '" class="star"></div>';
                $("#" + treeNode.tId + "_a").after(starStr);
                var data = {
                    "layername": $("#" + treeNode.tId + "_a").attr("title"),
                    "userid": me._userId
                };
                me._refreshcollect(treeNode, data);


                $("#" + starId).on('click', function () {
                    var permission = $("#" + treeNode.tId).attr("authority");
                    if (permission == 'yes') {
                        /**-----------------------------------addCollectPop*mww**-----------------------------*/ 
                        // 1.popview
                        // var popview = new addCollectPop({ data: me._userId }).placeAt(document.body);
                        // popview.startup();

                        // 2-我的目录
                        var collect_id = $("#" + treeNode.tId).attr("collect_id");
                        if (!collect_id) {
                            me._onClickStar=treeNode;
                            // 1.popview
                            var popview = new addCollectPop({ data: me._userId,layerName:data.layername }).placeAt(document.body);
                            popview.lightStar=me._addcollect.bind(me);
                            popview.startup();

                        } else {
                            
                            me._cancelcollect(treeNode, collect_id);

                        }

                    } else {
                        alert("当前用户没有权限");
                    }

                })
            } 
            //-------------------------check
            if (treeNode.isParent != true) {
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
                    // alert($("#"+treeNode.tId).attr("authority"));
                    if (permission == 'no') {
                        alert("当前用户没有权限");
                        return false;
                    }
                })
            }else if ((treeNode.children.length > 0 && treeNode.children[0].isParent != true)) {

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
            }

            // -----------------------------------详情
            if (treeNode.isParent != true) {

                var detailId = treeNode.tId + "_details";
                var detailStr = '<div id="' + detailId + '" class="newdetails"></div>';
                $("#" + treeNode.tId + "_check").after(detailStr);
                var data = {
                    "layername": $("#" + treeNode.tId + "_a").attr("title"),
                    "userid": me._userId
                };
                $("#" + detailId).on('click', function () {
                    var permission = $("#" + treeNode.tId).attr("authority");
                    if (permission == 'yes') {
                        var detailview=new Detailspop({_data:data}).placeAt(dojo.body());
                        detailview.startup();
                    } else {
                        alert("当前用户没有权限");
                    }
                })

            } 
            
            // ----------------------------------权限authority+title
            if (treeNode.isParent != true) {
                
                var aObj = $("#" + treeNode.tId + "_a");
                var authorityId = treeNode.tId + "_authority";
                var authorityStr = '<span id="' + authorityId + '" class="authority"></span>';
                aObj.before(authorityStr);
                var layerid = treeNode.id;
                // 判断是否有url 
                for (var i = 0; i < MapConfig.layers.length; i++) {
                    var _layer = MapConfig.layers[i];
                    if (_layer.layerType === "GroupLayer" && _layer.subLayers instanceof Array && _layer.subLayers.length > 0) {
                        this._getsubLayers(_layer.subLayers, layerid, authorityId, treeNode);
                    } else {
                        if (_layer.id != undefined && _layer.id == layerid) {
                            var mapurl = _layer.url;
                            if (mapurl === null || mapurl === undefined || !mapurl) {
                                $("#" + authorityId).attr("class", "no_authority");
                                $("#" + treeNode.tId).attr("authority", 'no');

                            } else {

                                $("#" + authorityId).attr("class", "authority");
                                $("#" + treeNode.tId).attr("authority", 'yes');
                            }
                        }
                    }
                    //var parentTitle = $("#" + treeNode.getParentNode().tId + "_a").attr("title");

                    //if (MapConfig.layers[i].caption == parentTitle) {

                    //    for (var j = 0; j < MapConfig.layers[i].subLayers.length; j++) {
                    //        var nodesTitle = $("#" + treeNode.tId + "_a").attr("title");
                    //        if (nodesTitle == MapConfig.layers[i].subLayers[j].caption) {
                    //            var mapurl = MapConfig.layers[i].subLayers[j].url;
                    //            if (mapurl === null || mapurl === undefined || !mapurl) {
                    //                $("#" + authorityId).attr("class", "no_authority");
                    //                $("#" + treeNode.tId).attr("authority", 'no');

                    //            } else {
                                    
                    //                $("#" + authorityId).attr("class", "authority");
                    //                $("#" + treeNode.tId).attr("authority", 'yes');
                    //            }
                    //        }

                    //    }
                    //}
                }


            }

            //----------------------------------透明度+title
            if (treeNode.isParent != true) {
                var aObj = $("#" + treeNode.tId + "_a");
                var sliderId = treeNode.tId + "_slider";
                var sliderStr = '<div id="' + sliderId + '" class="toc-slider' + (true ? " invisible" : "") + '"></div>';
                aObj.after(sliderStr);
                var slider = $("#" + sliderId);
                slider.noUiSlider({
                    start: 1,
                    connect: "lower",
                    range: {
                        min: 0,
                        max: 1
                    }
                });
                slider.on("slide", function (arr, val) {
                    val = parseFloat(val);
                    me._setMapLayerOpacity(treeNode, val);

                });

                me._setAllOpacity(treeNode);
            }

            // -------------title
            $("#" + treeNode.tId + "_star").attr("title", "收藏");
            $("#" + treeNode.tId + "_check").attr("title", "图层控制");
            $("#" + treeNode.tId + "_details").attr("title", "数据库元数据");
            $("#" + treeNode.tId + "_authority").attr("title", "权限");
            $("#" + treeNode.tId + "_slider").attr("title", "图层透明度");

        },
        _getsubLayers: function (subLayers, layerId, authorityId, treeNode) {
            for (var i = 0; i < subLayers.length; i++) {
                var _layer = subLayers[i];
                if (_layer.layerType === "GroupLayer" && _layer.subLayers instanceof Array && _layer.subLayers.length > 0) {
                    this._getsubLayers(_layer.subLayers, layerId, authorityId, treeNode);
                } else {
                    if (_layer.id != undefined && _layer.id == layerId) {
                        var mapurl = _layer.url;
                        if ((mapurl === null || mapurl === undefined || !mapurl) && (_layer.layerids === undefined || _layer.layerids === null || _layer.layerids.length==0)) {
                            
                            $("#" + authorityId).attr("class", "no_authority");
                            $("#" + treeNode.tId).attr("authority", 'no');

                        } else {

                            $("#" + authorityId).attr("class", "authority");
                            $("#" + treeNode.tId).attr("authority", 'yes');
                        }
                    }
                }
            }
        },

        bindEvent: function () {
            on(this.go, "click", function () {
                    var me = this;
                    var name = this.search.value;
                    if (name) {
                        me.findNode(name);
                    } else {
                        alert("请输入内容");
                        var selectedNode = me._ViewBarzTree.getSelectedNodes();
                        if (selectedNode.length > 0) {
                            for (var k = 0; k < selectedNode.length; k++) {
                                me._ViewBarzTree.cancelSelectedNode(selectedNode[k]);
                                me._ViewBarzTree.updateNode(selectedNode[k]);
                            }
                        }
                    }
                }.bind(this)
            );
            // keypress
            on(this.search, 'keypress', function (event) {
            var me=this;
            if(event.keyCode == "13"){
                    me.go.click();
            }
            }.bind(this));   
            on(this.allList, "click", function () {
                    var me = this;
                    var pa=me._ViewBarzTree.getNodes();
                    pa=pa[0].children;

                    if(me._allList==true){
                        domClass.replace(me.allList, "layerbtn_Active", "layerbtn");
                        me._allList=false;
                        // me._hideList();
                        // filter
                        for(var i=0;i<pa.length;i++){
                            if(pa[i].isParent){
                                me._filterLayer(pa[i]);
                            }
                        }
                        // hide
                        for(var j=0;j<pa.length;j++){
                            if(pa[j].isParent){
                                me._removefilterList(pa[j]);
                            }
                        }
                    }else if(me._allList==false){
                        domClass.replace(me.allList, "layerbtn", "layerbtn_Active");
                        me._allList=true;
                        // show
                        for(var i=0;i<pa.length;i++){
                            if(pa[i].isParent){
                                me._showHideLayer(pa[i]);
                            }
                        }
                    }
                }.bind(this)
            ); 
            on(this.allClock, "click", function () {
                try {
                    require(["FrameWork/Clear/closeAllLayer"], function (btn) {
                        var b = new btn({ enabled: true, frame: _frame, name: 'gbtc' });
                        appConfig.btns.push({ id: 'gbtc', fun: b });
                        b.onClick('clear');
                    }.bind(this));
                }
                catch (e) {
                    alert(e);
                }

                if(me._allClock==true){
                    me._allClock=false;
                }else if(me._allClock==false){
                    domClass.replace(me.allClock, "clockbtn", "clockbtn_Active");
                    me._allClock=true;
                }
                
            }.bind(this));
            //on(this.collectList, 'click', function () {
            //    var me = this;
            //    me._refresh(me._userId, "collectclick");
            //    // var re=me._collectArr;
            //    // console.log(re);
            //}.bind(this));
        },
       
        findNode: function (name) {
            var me = this;
            var selectedNode = me._ViewBarzTree.getSelectedNodes();
            if (selectedNode.length > 0) {
                for (var k = 0; k < selectedNode.length; k++) {
                    me._ViewBarzTree.cancelSelectedNode(selectedNode[k]);
                    me._ViewBarzTree.updateNode(selectedNode[k]);
                }
            }

            var nodes = me._ViewBarzTree.getNodes();
            me._findNodes = [];
            for (var i = 0; i < nodes.length; i++) {
                if (nodes[i].children.length > 0) {
                    me._findChildNode(nodes[i], name);
                } else {
                    if (nodes[i].caption.indexOf(name) >= 0) {
                        me._findNodes.push(nodes[i]);
                    }
                }
            }
            if (me._findNodes.length > 0) {
                me._ViewBarzTree.expandAll(false);
                me._ViewBarzTree.expandNode(nodes[0], true, false, false);
                for (var i = 0; i < me._findNodes.length; i++) {
                    var node = me._findNodes[i];
                    var P_noeds = [];

                    while (node.parentTId) {
                        P_noeds.push(node);
                        node = node.getParentNode();
                    }
                    for (var j = P_noeds.length - 1; j >= 0; j--) {
                        if (!P_noeds[j].open) {
                            me._ViewBarzTree.expandNode(P_noeds[j], true, false, false);
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
                if (nodes[i].children !== null) {
                    me._findChildNode(nodes[i], name);
                } else {
                    if (nodes[i].caption.indexOf(name) >= 0) {
                        me._findNodes.push(nodes[i]);
                        me._ViewBarzTree.selectNode(nodes[i], true);
                    } else {
                        me._ViewBarzTree.cancelSelectedNode(nodes[i]);
                    }
                }
            }
        },
        setWidgetVisible: function (visible) {
            var me = this;
            if (visible) {
                domStyle.set(this.domNode, "display", "block");
               
                /****20210401*********/
                if (MoreScreen.mapArr.length > 1) {
                    dojo.query(".moreScreenMapVisibleIcon").forEach((dom) => {
                        domStyle.set(dom, "display", "inline-block");
                    });
                } else {
                    dojo.query(".moreScreenMapVisibleIcon").forEach((dom) => {
                        domStyle.set(dom, "display", "none");
                    });
                }
                /****20210401end******/
            } else {
                domStyle.set(this.domNode, "display", "none");
                
            }

            var node = this._ViewBarzTree.getNodes();
            this._setChecked(node[0]);
        },
        _setChecked: function (node) {
            if (node.children !== undefined && node.children !== null) {
                for (var i = 0; i < node.children.length > 0; i++) {
                    this._setChecked(node.children[i]);
                }
            } else {
                for (var i = 0; i < appConfig.map.getLayers().array_.length; i++) {
                    var layer = appConfig.map.getLayers().array_[i];
                    if (layer.values_.thematicMap) {
                        if (node.name === layer.values_.name) {
                            this._ViewBarzTree.checkNode(node, layer.values_.visible, true, false);
                        }
                    }
                }
            }
        },
        _preProcessData: function (data) {
            var me = this;
            // 遍历data，设置属性（isParent,name,nocheck,iconSkin,tag,children）
            array.forEach( data, function (item) {
                    if (item.subLayers !== undefined && item.subLayers.length >= 0) {
                        item.isParent = true;
                       // item.title = item.caption;
                        //item.description = item.caption;
                        item.name = item.caption;
                        if (item.caption.length > 9) {

                            item.name = item.caption.substring(0, 9) + "...";
                        } else {
                            item.name = item.caption;
                        }
                        item.title = item.caption;
                        item.nocheck = false;
                        item.children = item.subLayers;
                        item.myAttr=false;
                        
                    } else {
                        item.isParent = false;
                        if (item.caption.length > 7) {
                            
                            item.name = item.caption.substring(0, 7) + "...";
                        } else {
                            item.name = item.caption;
                        }
                        item.title = item.caption;
                        item.iconSkin = "serviceMapLayer";
                        item.tag = item.children;
                        item.children = null;
                        item.checked = item.visible;
                        item.myAttr=false;

                        //item.url = null;
                    }

                    // 递归
                    if (item.children !== undefined) {
                        me._preProcessData(item.children);
                    }
                }.bind(this)
            );
        },
        /*--collect---*/ 
        _addcollect: function (collect_id) {
            var me=this;
            $("#" + me._onClickStar.tId + "_star").attr("class", 'star2');
            $("#" + me._onClickStar.tId).attr("collect_id", collect_id);
        },
        _cancelcollect: function (treeNode, collect_id) {
            // delete_collectLayers
            collectService.delete_collectLayers(collect_id).then(function (result) {
                if (result.code == 200) {
                    $("#" + treeNode.tId + "_star").attr("class", 'star');
                    $("#" + treeNode.tId).attr("collect_id", null);
                }
            });
        },
        _refreshcollect: function (treeNode, data) {
            var me=this;
            collectService.get_collectLayer(me._userId).then(function (result) {
                // me._collectArr=result.data; 
                for (var i = 0; i < result.data.length; i++) {
                    if (result.data[i].layername == data.layername) {
                        var id = result.data[i].id;
                        $("#" + treeNode.tId).attr("collect_id", id);
                        $("#" + treeNode.tId + "_star").attr("class", 'star2');
                    }
                }
            })
        },
        clickcollectBar: function () {
            var me = this;
            var nodes = me._ViewBarzTree.getNodes();
            if (nodes.length > 0) {
                for (var i = 0; i < nodes.length; i++) {
                    if (nodes[i].children.length > 0) {
                        me.getChildNode(nodes[i]);
                    } else {
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
                } else {
                    me._refreshCheck(nodes[i]);
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
                        me._ViewBarzTree.checkNode(treeNode, true, true);
                    } else {
                        me._ViewBarzTree.checkNode(treeNode, false, false, false);
                    }
                }
            }

        },
        
        _setMapLayerOpacity: function (treeNode, opacity) {
            var me = this;
            var map = appConfig.map;
            var layerId = treeNode.id;
            for (var i = 0; i < appConfig.map.getLayers().array_.length; i++) {
                var layer = appConfig.map.getLayers().array_[i];
                if (layer.values_.id === layerId) {
                    layer.setOpacity(opacity);
                }
            }
        },
        /*--hideBtn--*/
        _filterLayer:function(_el){
            var me=this;
            var el=_el.children;
            for(var i=0;i<el.length;i++){
                var els=el[i];
                if(els.isParent){
                    me._filterLayer(els)
                }else {
                    var exist=els.getPath();
                    for(var j=0;j<exist.length;j++){
                        exist[j].myAttr=true;
                    }
                }
            }
        },
        
        _removefilterList:function(_el){
            var me=this;
            var el=_el.children;
            for(var i=0;i<el.length;i++){
                var els=el[i];
                if(els.isParent && els.myAttr==true ){
                    me._removefilterList(els)
                }else if(els.myAttr==false){
                    me._ViewBarzTree.hideNode(els); 
                }
            }
        },
        
        _showHideLayer:function(_el){
            var me=this;
            var el=_el.children;
            for(var i=0;i<el.length;i++){
                var els=el[i];
                if(els.isParent){
                    me._showHideLayer(els);
                    me._ViewBarzTree.showNode(els);
                }
            }
        },
        // _setAllOpacity
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
        
    });
});

define([
    'dojo/_base/declare',
    'dijit/_WidgetBase',
    'dijit/_TemplatedMixin',
    'dojo/text!./templates/layerItemTemplate.txt', "dojo/dom-style", 'dojo/on', "dojo/dom-attr"
], function (declare, _WidgetBase, _TemplatedMixin, template, domStyle, on, domAttr) {
    return declare([_WidgetBase, _TemplatedMixin], {
        templateString: template,
        data: null,
        isCheck: true,
        _layer: null,
        isSelected: false,
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
                this.layername.innerHTML = this.data.name;
                domAttr.set(this.layername, 'title', this.data.name);
                this._bindEvents();
                this.setChecked();
                for (var i = 0; i < appConfig.map.getLayers().array_.length; i++) {
                    var layer = appConfig.map.getLayers().array_[i];
                    var layer_id = layer.get("id");
                    if (layer_id === this.data.id) {
                        this._layer = layer;
                        break;
                    }
                }
                return;
            }
            this._started = true;
        },
        _bindEvents: function () {
            var me=this;
            on(this.check_btn, 'click', function () {
                if (!this.isCheck) {
                    this.setChecked();
                } else {
                    this.setUnChecked();
                }
                this._layer.setVisible(this.isCheck);
                //this.isCheck = !this.isCheck;
            }.bind(this));

            on(this.layername, 'click', function () {
                this.showLegend(this.data);
            }.bind(this));

            on(this.layername, 'mouseover', function () {
                domStyle.set(this.layername, 'color', '#276099');
            }.bind(this));

            on(this.layername, 'mouseout', function () {
                if (!this.isSelected) {
                    domStyle.set(this.layername, 'color', '#cbcccd');
                } else {
                    domStyle.set(this.layername, 'color', '#276099');
                }
            }.bind(this));

            on(this.close_btn, 'click', function () {
                this._layer.setVisible(false);
                this.removeLegend(this._layer);
                this.mlUpdata(_collectionLayerZtree,this._layer,"collect");
                this.mlUpdata(_allLayerZtree,this._layer,"all");
                appConfig.filterLegent.forEach((e,index)=>{
                    if(e.id==me.data.id){
                        appConfig.filterLegent.splice(index,1);
                    }
                });
            }.bind(this));
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
                                allZtree.checkNode(nodes[i], false, false);
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
                    allZtree.checkNode(nodes[i], false, false);
                    break;
                  }

                }
            }
        },
        setChecked: function () {
            var me=this;
            domStyle.set(this.check_btn, 'background-image', 'url(image/legend/check.png)');
            this.isCheck = true;
            appConfig.filterLegent.forEach((e,index)=>{
                if(e.id==me.data.id){
                    appConfig.filterLegent.splice(index,1);
                }
            });
            this.reshLegend(this.data);
        },
        setUnChecked: function () {
            var me=this;
            domStyle.set(this.check_btn, 'background-image', 'url(image/legend/uncheck.png)');
            this.isCheck = false;
            appConfig.filterLegent.forEach((e,index)=>{
                if(e.id==me.data.id){
                    appConfig.filterLegent.splice(index,1);
                }
            })
            appConfig.filterLegent.push(me.data);
            this.reshLegend(this.data);
        },
        setSelected: function () {
            this.isSelected = true;
            domStyle.set(this.layername, 'color', '#276099');
        },
        setUnSelected: function () {
            this.isSelected = false;
            domStyle.set(this.layername, 'color', '#cbcccd');
        },
        showLegend: function (data) {

        },
        removeLegend: function (layer) {

        },
        reshLegend(){}
    });
});
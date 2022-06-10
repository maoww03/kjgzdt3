define([
    'dojo/_base/declare',
    'dijit/_WidgetBase',
    'dijit/_TemplatedMixin',
    'dojo/text!./templates/legendTemplate.txt', 'FrameWork/LegendConfig', 'dojo/on', "./legendItem", "./layerItem", "dojo/dom-style","FrameWork/RegionTool/selectDataconfig"
], function (declare, _WidgetBase, _TemplatedMixin, template, LegendConfig, on, legendItem, layerItem, domStyle,selectDataconfig) {
    return declare([_WidgetBase, _TemplatedMixin], {
        templateString: template,
        isFixed: false,

        _list: null,

        _nowPage: 0,

        _itemList: null,
        _layerList: null,
        _LegendConfig:null,

        constructor: function (args) {},
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
            this._list = [];
            this._itemList = [];
            this._layerList = [];
            this.bindEvents();
            this._started = true;
        },
        bindEvents: function () {
            on(dojo.byId("legend_btn"), 'click', function (evt) {
                evt.stopPropagation();
                if (dojo.byId("legend-siderbar").style.height == "257px") {
                    dojo.byId("legend-siderbar").style.height = "500px";
                    domStyle.set(dojo.byId("legend-siderbar"), 'transform-origin', '360px 330px');
                } else {
                    dojo.byId("legend-siderbar").style.height = "257px";
                    domStyle.set(dojo.byId("legend-siderbar"), 'transform-origin', '360px 90px');
                }
            })

            on(dojo.byId("legend_fixed"), 'click', function (evt) {
                evt.stopPropagation();
                if (!this.isFixed) {
                    domStyle.set(dojo.byId("legend_fixed"), 'transform', 'rotate(-45deg)');
                } else {
                    domStyle.set(dojo.byId("legend_fixed"), 'transform', 'rotate(0deg)');
                }
                this.isFixed = !this.isFixed;
            }.bind(this))

            on(this.domNode, 'click', function (evt) {
                evt.stopPropagation();
            });
            //on(dojo.byId("legend_btn1"), 'click', function () {
            //    //dojo.byId("legend-siderbar").style.height = "0px";
            //    //dojo.byId("legend-siderbar").style.width = "0px";
            //})
        },
        addLegend: function (layer) {
            var me=this;
            var layerid = layer.get("id");
            for (var i = 0; i < this._list.length; i++) {
                if (this._list[i].id == layerid) {
                    for (var j = 0; j < this._layerList.length; j++) {
                        if (this._layerList[j].data.id == layerid) {
                            this._layerList[j].setChecked();
                        }
                    }      
                    return;
                }
            }
            var flag = false;
            
            debugger
            var region=regionCode;
            var obj=selectDataconfig.subMenus.find(function(obj){
                return obj.regionCode==region;
            })
            try{
                require([obj.regionlegend], function (regionlegend) {
                  me._LegendConfig = regionlegend;
               });
            }catch(ex){
                alert("请配置目录！");
            }


            for (var i = 0; i < me._LegendConfig.layers.length; i++) {
                if (me._LegendConfig.layers[i].id == layerid) {
                    flag = true;
                    this._list.push(me._LegendConfig.layers[i]);
                }
            }
            if (!flag) {
                this._list.push({
                    id: layerid,
                    name: layer.get("name"),
                    legend: undefined
                });
            }

            this._nowPage = this._list.length;

            var _item = new layerItem({ data: this._list[this._nowPage - 1] }).placeAt(this.layers);
            _item.showLegend = this._itemShowLegend.bind(this);
            _item.reshLegend = this.reshLegend.bind(this);
            _item.removeLegend = this._itemRemoveLegend.bind(this);
            _item.startup();
            this._layerList.push(_item);
            this.showLegend(this._nowPage);
        },
        _itemRemoveLegend: function (layer) {
            this.removeLegend(layer);
        },
        removeLegend: function (layer) {
            for (var i = 0; i < this._list.length; i++) {
                if (this._list[i].id == layer.get("id")) {
                    if (i == 0) {
                        this._nowPage = 1;
                    } else {
                        this._nowPage = i;
                    }
                    
                }
            }
            for (var i = 0; i < this._layerList.length; i++) {
                if (this._layerList[i].data.id == layer.get("id")) {
                    //this._layerList[i].destroy();
                    this._layerList=this.pop(this._layerList,this._layerList[i]);
                    break;
                }
               
            }
            
            //this._layerList.splice(this._layerList.findIndex(e => e.data.id === layer.get("id")), 1);
            this._list.splice(this._list.findIndex(e => e.id === layer.get("id")), 1);
            if (this._list.length > 0) {
                if (this._nowPage > this._list.length) {
                    this._nowPage = this._list.length;
                }
                this.showLegend(this._nowPage);
            } else {
                dojo.byId('legend-siderbar').style.display = "none";
            }
        },
        pop: function (list, data) {
            var me = this;
            var nList = [];
            for (var i = 0; i < list.length; i++) {
                if (list[i] != data) {
                    nList.push(list[i]);
                }else{
                    list[i].destroy();
                }
            }
            list = nList;
            return list;
        },
        _itemShowLegend: function (data) {
            for (var i = 0; i < this._list.length; i++) {
                if (this._list[i].id == data.id) {
                    this._nowPage = i + 1;
                    break;
                }
            }
            this.showLegend(this._nowPage);
        },
        showLegend: function (page) {
            dojo.byId('legend-siderbar').style.display = "block";
            var legend = this._list[page - 1];
            for (var i = 0; i < this._itemList.length; i++) {
                this._itemList[i].destroy();
            }
            this._itemList = [];
            this.items.innerHTML = "";
            for (var i = 0; i < this._layerList.length; i++) {
                this._layerList[i].setUnSelected();
            }
            this._layerList[page - 1].setSelected();
            //this.count.innerHTML = page + "/" + this._list.length;
            if (legend != undefined && legend.legend != undefined) {
               // this.layername.innerHTML = this._list[page - 1].name;  
                for (var i = 0; i < legend.legend.length; i++) {
                    if(i>0){
                        var before=legend.legend[i-1].value;
                        var now=legend.legend[i].value;
                        if(before != now){
                            var _item = new legendItem({ data: legend.legend[i],layerId:legend.id}).placeAt(this.items);
                            _item.startup();
                            this._itemList.push(_item);
                        }
                    }else if(i == 0){
                        var _item = new legendItem({ data: legend.legend[i],layerId:legend.id}).placeAt(this.items);
                        _item.startup();
                        this._itemList.push(_item);
                    }
                }
            } else {
                this.items.innerHTML = "无图例";
                //this.layername.innerHTML = "无图例";
            }
        },
        reshLegend(data){
            this._itemList = [];
            this.items.innerHTML="";
            let legend=data;
            if (legend != undefined && legend.legend != undefined) {
                 for (var i = 0; i < legend.legend.length; i++) {
                    var _item = new legendItem({ data: legend.legend[i],layerId:legend.id}).placeAt(this.items);
                    _item.startup();
                    this._itemList.push(_item);
                 }
            } else {
                this.items.innerHTML = "无图例";
            }
        }
    });
});
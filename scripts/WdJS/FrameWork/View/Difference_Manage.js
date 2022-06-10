define(["dojo/_base/declare", "dojo/text!./templates/Difference_Manage.txt", "dijit/_TemplatedMixin",
"dijit/_WidgetBase", "dojo/on", "dojo/dom-style", 'dojo/parser', "dojo/dom-class", "dojo/dom-attr",
    "dojo/_base/lang", 'dojo/_base/array', 'FrameWork/MapUtil/Map'],
    function (declare, template, TemplatedMixin, WidgetBase, on, domStyle, parser, domClass, domAttr,
        lang, array,Map) {
        return declare([WidgetBase, TemplatedMixin], {
            templateString: template,
            data: null,
            //选中图层渲染的字典，true为渲染，false为不渲染
            layers: {},
            rander_layer: [],
            constructor: function (args) {
                var me = this;
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
                    me.get_layer();
                    this.bindEvent();
                }.bind(this));
                this._started = true;
            },
            bindEvent: function () {
                var me = this;
                on(me.confirmLayer, "click", function () {
                    me.set_event();
                });
                on(me.closeLayer, "click", function () {
                    domStyle.set(dojo.byId("dpcy"), "display", "none");
                    me.clear_event();
                });
                on(me.cancel, "click", function () {
                    domStyle.set(dojo.byId("dpcy"), "display", "none");
                    me.clear_event();
                    me.destroy();
                    _checkQuery=true;
                    _attrQueryTool.activate("point");
                });
            },
            get_layer: function () {
                var me = this;
                var layers = Map.map.getLayers().array_;
                for (var i = 0; i < layers.length; i++) {
                    var obj = layers[i].values_;
                    if (layers[i].getVisible() == true && obj.thematicMap) {
                        me.layers[obj.id] = false;
                        me.layer_content.innerHTML += '<div class="layer_line" style="clear:both;">\
                            <div style="width:46px;float:left;height:40px;line-height:40px;"><div class="checks" select="0" layer_id="'+ obj.id + '"></div></div>\
                            <div style="width:302px;float:right;height:40px;line-height:40px;text-align:center;">'+ obj.name + '</div>\
                        </div>'
                    }
                }
                on(dojo.query(".checks", me.domNode), "click", function () {
                    var sl_zt = domAttr.get(this, "select");
                    var layer_id = domAttr.get(this, "layer_id");
                    if (sl_zt == "0") {
                        domAttr.set(this, "select", "1");
                        domAttr.set(this, "class", "checks_s");
                        me.layers[layer_id] = true;
                    }
                    else {
                        domAttr.set(this, "select", "0");
                        domAttr.set(this, "class", "checks");
                        me.layers[layer_id] = false;
                    }
                });
                
            },
            setLayerVisible: function (id, boolean) {
                var me = this;
                var map = Map.map;
                var layers = map.getLayers().array_;
                var layer;
                for (var i = 0; i < layers.length; i++) {
                    var obj = layers[i].values_;
                    if (obj.id == id) {
                        layer = Map.map.getLayers().item(i);;
                        layer.setVisible(boolean);
                    }
                }
            },
            //卷帘事件
            set_event: function () {
                var me = this;
                me.clear_event();
                var layer_arr = Map.map.getLayers().array_;
                for (var i = 0; i < layer_arr.length; i++) {
                    var obj_id = layer_arr[i].values_["id"];
                    if (me.layers[obj_id] == true) {
                        domStyle.set(dojo.byId("dpcy"), "display", "block");
                        var layer = Map.map.getLayers().item(i);
                        var dx1 = layer.on('prerender', function (event) {
                            var max_w = document.body.clientWidth;
                            var dx = document.getElementById("dpcy");
                            var dx_w = domStyle.get(dx, "width");
                            var l = domStyle.get(dx, "left");
                            var bfb = (l + dx_w) / max_w;
                            var ctx = event.context;
                            var width = ctx.canvas.width * (1 - bfb);
                            ctx.save();
                            ctx.beginPath();
                            ctx.rect(0, 0, ctx.canvas.width - width-35, ctx.canvas.height);
                            ctx.clip();
                        });
                        var dx2 = layer.on('postrender', function (event) {
                            var ctx = event.context;
                            ctx.restore();
                        });
                        me.rander_layer.push(dx1);
                        me.rander_layer.push(dx2);
                    }
                }
                Map.map.render();
                if (me.rander_layer.length < 1) {
                    domStyle.set(dojo.byId("dpcy"), "display", "none");
                }
            },
            //清空所有卷帘事件
            clear_event: function () {
                var me = this;
                if (me.rander_layer.length > 0) {
                    for (var i = 0; i < me.rander_layer.length; i++) {
                        ol.Observable.unByKey(me.rander_layer[i]);
                        if (i == (me.rander_layer.length - 1)) {
                            Map.map.render();
                        }
                    }
                    me.rander_layer = [];
                }
            }
        });
    });
define(["dojo/_base/declare", "dojo/text!./templates/tx_upload_box.txt", "dijit/_TemplatedMixin",
"dijit/_WidgetBase", "dojo/on", "dojo/dom-style", 'dojo/parser', "dojo/dom-class", "dojo/dom-attr",
    "dojo/_base/lang", 'dojo/_base/array',"FrameWork/serviceUtil/graphService","./Load_Layer"],
    function (declare, template, TemplatedMixin, WidgetBase, on, domStyle, parser, domClass, domAttr,
        lang, array, graphService, Load_Layer) {
        return declare([WidgetBase, TemplatedMixin], {
            templateString: template,
            data: null,
            //温州2000数据
            arr_data: null,
            //国家2000数据
            _Ellipsoid: {
                name: "CGCS2000",
                semiMajorAxis: 6378137,
                semiMinorAxis: 6356752.3141403561,
                flatRate: 0.00335281068118232
            },
            _L0: 120.000000000,
            error_points: [],
            _jcs:[],
            //图例
            print_color: [{ name: "自相交", value: "#e5231b" },{ name: "角度", value: "#fe9e16" }, { name: "点重复", value: "#f6d817" }
                //, { name: "错误点", value: "red" }
            ],
            //检查类型
            jc_arr: ["自相交", "角度", "点重复"],
            _typeTrans:{"自相交":"selfIntersectionPoints", "角度":"angle", "点重复":"repeat"},
            //错误类型
            err_arr: [],
            constructor: function (args) {
                var me = this;
                me.arr_data = null;
               
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
                    me.print_data();
                    me.print_jc();
                    this.bindEvent();
                }.bind(this));
                this._started = true;
            },
            bindEvent: function () {
                var me = this;
                //清除下拉
                on(me.cancel, "click", function () {
                    me.destroy();
                    _checkQuery=true;
                    _attrQueryTool.activate("point");
                });
                on(me.upload, "change", function () {
                    me.error_points = [];
                    me.err_arr = [];
                    me._jcs=[];
                    // 获得选择的
                    var sl = dojo.query(".check[s_zt='1']");
                    if (sl.length > 0) {
                        for (var i = 0; i < sl.length; i++) {
                            var lx = domAttr.get(sl[i], "name");
                            me._jcs.push(lx);
                        }
                    }
                    Load_Layer.clearLayer();
                    var file = this.files[0];
                    if (file != null && file != undefined) {
                        me.file_name.innerHTML = file.name;
                        var fd = new FormData();
                        fd.append("file", file);
                        graphService.upload_province(fd).then(function (out) {
                            if (out.code == 200) {
                                for(var i=0;i<out.data.length;i++){
                                    me._remove40(out.data[i]);
                                }
                                for(var i=0;i<out.data.length;i++){
                                    var wkt = me.getWKT([out.data[i]]);
                                    graphService.check_tx(wkt).then(function (out2) {
                                        if (out2.code == 200) {
                                            var type = me.get_error_type(out2.data);
                                            var data = { type: type, geo: out.data[i], e_p: me.error_points};
                                            Load_Layer.load_geo(data);
                                            me.upload.value = null;
                                        }
                                        else {
                                            alert(out2.msg);
                                        }
                                    });
                                }
                                me.get_jc_jg();

                            }
                            else {
                                me.upload.value = null;
                                me.file_name.innerHTML = "";
                                alert("请正确选取文件类型");
                            }
                        });
                        
                    }
                });
            },
            
            // ----显示图例 选择类型 检查结果
            print_data: function () {
                var me = this;
                for (var i = 0; i < me.print_color.length; i++) {
                    me.tl.innerHTML += "<div class='sc_box'>\
                        <div class='color_b'style='background:"+ me.print_color[i].value + "'></div>\
                        <div class='scname'>"+ me.print_color[i].name + "</div>\
                    </div>";
                }
            },
        
            print_jc: function () {
                var me = this;
                for (var i = 0; i < me.jc_arr.length; i++) {
                    if (i == 0) {
                        me.jclx.innerHTML += "<div class='check_box' style='margin-left:20.5px;'>\
                        <input type='checkBox' class='check' checked s_zt='1' name='"+ me.jc_arr[i] + "'>\
                        <div class='check_name'>"+ me.jc_arr[i] + "</div>\
                    </div>";
                    } else {
                        me.jclx.innerHTML += "<div class='check_box' style='margin-left:41px;'>\
                        <input type='checkBox' class='check' checked s_zt='1' name='"+ me.jc_arr[i] + "'>\
                        <div class='check_name'>"+ me.jc_arr[i] + "</div>\
                    </div>";
                    }
                }
                on(dojo.query("input[type='checkBox']"), "click", function () {
                    var s = domAttr.get(this, "s_zt");
                    if (s == "1") {
                        domAttr.set(this, "s_zt", "0");
                    }
                    else {
                        domAttr.set(this, "s_zt", "1");
                    }
                });
            },
            
            get_jc_jg: function () {
                var me = this; 
                var jcs = me._jcs;
                // err_arr去重
                var arr=me.err_arr;
                var newArr = []
                for (var i = 0; i < arr.length; i++) {
                    if (arr.indexOf(arr[i]) === i) {
                    newArr.push(arr[i])
                    }
                }
                // 显示结果
                if (newArr[0] == "正常") {
                    me.jcjg.innerHTML = "正常";
                }
                else {
                    var sx = "";
                    var state = 0;
                    for (var i = 0; i < jcs.length; i++) {
                        for (var t = 0; t < newArr.length; t++) {
                            if (jcs[i] ==newArr[t]) {
                                state = 1;
                                sx += newArr[t] + ";";
                            }
                        }
                    }
                    if (state == 0) {
                        me.jcjg.innerHTML = "不存在指定的问题";
                    }
                    else {
                        var pc = sx.substr(0, (sx.length - 1));
                        me.jcjg.innerHTML = "存在" + pc;
                    }
                }
            },


            // 1-获取错误的坐标error_points  以及类型err_arr 选择的_jcs
            get_error_type: function (data) {
                var me = this;
                var type;
                var err=[];
                for (key in data) {
                    if (data[key].length > 0) {
                        for (var i = 0; i < data[key].length; i++) {
                            var c_arr = [data[key][i].x, data[key][i].y];
                            err.push({type:key,point:c_arr });
                        }
                    }
                }
                // 1-err_arr
                var t = 0;
                if (data.angle.length > 0) {
                    type = "角度";
                    me.err_arr.push(type);
                    t = 1;
                }
                if (data.repeat.length > 0) {
                    type = "点重复";
                    me.err_arr.push(type);
                    t = 1;
                }
                if (data.selfIntersectionPoints.length > 0) {
                    type = "自相交";
                    me.err_arr.push(type);
                    t = 1;
                }
                if (t == 0) {
                    type = "正常";
                    me.err_arr.push(type);
                }
                // 2-error_points
                me._jcs.forEach(se=>{
                    var type=me._typeTrans[se];
                    err.forEach(el => {
                        if(el.type == type){
                            me.error_points.push(el);
                        }
                    }) 
                });
                return type;
            },
            // 2-去除40
            _remove40:function(data){
                for(var i=0;i<data.length;i++){
                    var pd=typeof(data[i]); 
                    if(pd == "number"){
                        var stateX = data[0].toString().substr(0, 2);
                        var stateY = data[1].toString().substr(0, 2);
                        if(stateX == 40){
                            data[0] = parseFloat(data[0].toString().substr(2, (data[0].toString().length - 1)));
                        }
                        if(stateY == 40){
                            data[1] = parseFloat(data[1].toString().substr(2, (data[1].toString().length - 1)));
                        }
                    }else {
                        if(data[i].length>0){
                            this._remove40(data[i]);
                        }
                    }
                }
            },
            getWKT: function (data) {
                var geom = new ol.geom.MultiPolygon(data);
                var polygonWKT = new ol.format.WKT().writeGeometry(geom, {
                    dataProjection: "EPSG:4549",
                    featureProjection: "EPSG:4549"
                });
                return polygonWKT;
            }
        });
    });
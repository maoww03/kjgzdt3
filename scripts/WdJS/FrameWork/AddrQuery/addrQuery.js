define(["dojo/_base/declare", "dojo/text!./templates/addrQuery.txt", "dijit/_TemplatedMixin", "dijit/_WidgetBase", "dojo/on", "dojo/dom-style", 'dojo/parser', "dojo/dom-class", "dojo/dom-attr", "FrameWork/serviceUtil/addrService", "dojo/json", 'FrameWork/Loading/Loading', "./resultList","FrameWork/Measure/GaussKruger"],
    function (declare, template, TemplatedMixin, WidgetBase, on, domStyle, parser, domClass, domAttr, addrService, JSON, Loading, resultList,GaussKruger) {
        return declare([WidgetBase, TemplatedMixin], {
            templateString: template,
            _total: 0,
            nowPage: 1,
            rows: 10,
            _result: null,
            _marker: null,
            _Ellipsoid: {
                name: "CGCS2000",
                semiMajorAxis: 6378137,
                semiMinorAxis: 6356752.3141403561,
                flatRate: 0.00335281068118232
            },
            _g: null,
            _L0: 120.000000000,

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
                me._g = new GaussKruger();
                if (this._started) {
                    return;
                }
                this._result = [];
                this._marker = new ol.Overlay({
                    element: document.getElementById('marker'),//绑定上面添加的元素
                    //stopEvent: false,
                    offset: [-29, -29]//图片偏移量
                });
                appConfig.map.addOverlay(this._marker);
                domStyle.set(this.dataBox_table, 'height', (dojo.byId("mapDiv").clientHeight - 219) + "px");
                this._bindEvents();
               
                this._started = true;
            },
            _bindEvents: function () {
                var me = this;

                on(this.closebtn, 'click', function () {
                    me._marker.setPosition(undefined);
                    domStyle.set(me.domNode, 'display', 'none');
                    _checkQuery=true;
                    _attrQueryTool.activate("point");
                }); 

                //on(dojo.byId("addrQueryDomPrePage"), 'click', function () {
                //    if (me.nowPage - 1 > 0) {
                //        me.nowPage = me.nowPage - 1;
                //        me.getData();
                //        dojo.byId("loading").style.display = "block";
                //    }
                //}); 

                //on(dojo.byId("addrQueryDomNextPage"), 'click', function () {
                //    if (me.nowPage + 1 <= me._total) {
                //        me.nowPage = me.nowPage + 1;
                //        me.getData();
                //        dojo.byId("loading").style.display = "block";
                //    }
                //}); 

                on(this.queryBtn, 'click', function () {
                    if (me.addrQueryDomSearchText.value != '') {
                        for (var i = 0; i < me._result.length; i++) {
                            me._result[i].destroy();
                        }
                        me._result = [];
                        Loading.show(me.domNode);
                        me.getData();
                    } else {
                        alert("请输入地名名称！");
                    }
                }); 
                // addrQueryDomSearchText
                on(this.addrQueryDomSearchText, 'keypress', function (event) {
                    var me=this;
                    if(event.keyCode == "13"){
                         me.queryBtn.click();
                    }
                 }.bind(this));
               
            },
            getData: function () {
                var me = this;
                addrService.query(this.addrQueryDomSearchText.value).then(function (result) {

                    if (result.features.length > 0) {
                        for (var i = 0; i < result.features.length; i++) {
                            debugger
                            var name=result.features[i].attributes.NAME;
                            var aa=name.indexOf(me.addrQueryDomSearchText.value);
                            if(aa >= 0){
                                var _resultList = new resultList({ data: result.features[i] }).placeAt(me.dataBox_table);
                                _resultList.onClick = me.onClick.bind(me);
                                _resultList.startup();
                                me._result.push(_resultList);
                            }
                        }
                        domStyle.set(me.dataBox_table, 'display', 'block');
                    } else {
                        domStyle.set(me.dataBox_table, 'display', 'block');
                    }
                    Loading.hide();
                }, function (err) {
                        Loading.hide();
                })


            },
            onClick: function (data) {
                debugger
                var me = this;
                var point={x:data.attributes.CENTERX,y:data.attributes.CENTERY};
                var re=me._g.BL2XY(me._Ellipsoid,me._L0,point);

                appConfig.map.getView().setCenter([re.y, re.x]);
                dojo.byId('marker').style.backgroundImage = "url(image/addrquery/location.png)";
                me._marker.setPosition([re.y, re.x]);
            }
        });
    });

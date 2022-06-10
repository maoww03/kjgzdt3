define(["dojo/_base/declare",
"dojo/parser",
"dojo/DeferredList",
"dijit/_WidgetBase",
"dijit/_TemplatedMixin",
"dojo/text!./templates/Location.txt",
"dojo/on",
"dojo/dom-style",
"dojo/dom-class",
"dojo/dom-attr"
], function ( declare,
    parser,
    DeferredList,
    _WidgetBase,
    _TemplatedMixin,
    template,
    on,
    domStyle,
    domClass,
    domAttr) {
        return declare([_WidgetBase, _TemplatedMixin], {
            templateString: template,
            _marker:null,
            constructor: function (args) {},
            postCreate: function () {
                this.inherited(arguments);
            },
            startup: function () {
            var me = this;
            if (me._started) {
                return;
            }
            parser.parse(me.domNode).then(function () {
                me._marker = new ol.Overlay({
                    element: document.getElementById('marker'),//绑定上面添加的元素
                    offset: [-29, -29]//图片偏移量
                });
                appConfig.map.addOverlay(me._marker);
                me._bindEvents();
            });
            },
            _bindEvents: function () {
                var me=this;
                on(me.location,"click",function(){
                    me.setPosition();
                });
                on(me.close,"click",function(){
                    me.destroy();
                });
            },
            setPosition(){
                var me=this;
                if(me.x.value && me.y.value){
                    // appConfig.map.getView().setCenter([me.x.value,me.y.value]);
                    appConfig.map.getView().animate({duration:2000,center:[me.x.value,me.y.value]})
                    dojo.byId('marker').style.backgroundImage = "url(image/addrquery/location.png)";
                    me._marker.setPosition([me.x.value, me.y.value]);
                }
                else{
                    alert("请输入完整的经度和纬度")
                }
            }
        })
  });
  
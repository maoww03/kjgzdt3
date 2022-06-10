define([
  "dojo/_base/declare",
  "dojo/parser",
  "dojo/DeferredList",
  "dijit/_WidgetBase",
  "dijit/_TemplatedMixin",
  "dojo/text!./templates/ConflictAnalysis.txt",
  "dojo/on",
  "dojo/dom-style",
  "dojo/dom-class",
  "dojo/dom-attr",
  "dojo/dom-construct",
  "./ConflictAnalysisLayerConfig",
  "FrameWork/serviceUtil/conflictService",
  "./ConflictAnalysisTable",
  "FrameWork/serviceUtil/ConfigurationService",
], function (
    declare,
    parser,
    DeferredList,
    _WidgetBase,
    _TemplatedMixin,
    template,
    on,
    domStyle,
    domClass,
    domAttr,
    domConstruct,
    ConflictAnalysisLayerConfig,
    conflictService,
    ConflictAnalysisTable,ConfigurationService
    
) {
    return declare([_WidgetBase, _TemplatedMixin], {
        templateString: template,
        _layer_now: null,
        _date: null,
        _conflictAnalysisTable: null,
        _result:null,
        _type:null,
        _layer1:null,
        _layer2:null,

        constructor: function (args) { },
        postCreate: function () {
            this.inherited(arguments);
        },
        startup: function () {
            var me = this;
            if (me._started) {
                return;
            }
            parser.parse(me.domNode).then(function () {
                me._setLayersNameSelect();
                me._bindEvents();
            });
        },
        _bindEvents: function () {
            var me = this;

            on(me.close, "click", function () {
                domStyle.set(dojo.byId("showTable"),"display","none");
                me._destroy();
                _checkQuery=true;
                _attrQueryTool.activate("point");

            });

            on(me.layersNameSelect, "change", function () {
                // debugger
                if (me.layersNameSelect.value != -1) {
                    var obj = ConflictAnalysisLayerConfig.layers.find(function (obj) {
                        return obj.name == me.layersNameSelect.options[me.layersNameSelect.selectedIndex].value;
                    });
                    me._layer_now = obj;
                    me._type=me._layer_now.type;
                    me._layer1=me._layer_now.content[0];
                    me._layer2=me._layer_now.content[1];
                } else {
                    me._layer_now = null;
                }
            });

           
            on(me.conflictAnalysisBtn, "click", function () {
                if (me._layer_now == null) {
                    alert("请选择分析类型！");
                    return;
                }
                domStyle.set(me.loading, "display", "block");
                
                if(me._type=='difference'){
                    conflictService.differenceAnalysis(me._layer1,me._layer2).then(function (result) {
                        if(result.code=='200'){
                            alert(result.msg);
                            debugger
                            if (me._result != null) {
                                me._result._destroy();
                            }
                            me._result=new ConflictAnalysisTable ({ _data:result.data, _layer: me._layer_now }).placeAt(dojo.byId("showTable"));
                            me._result.startup();

                            domStyle.set(me.loading, "display", "none");


                        }else{
                            alert(result.msg);
                        }
                    })
                }
            });

            on(me.queryBtn, "click", function () {
                if (me._layer_now == null) {
                    alert("请选择分析类型！");
                    return;
                }
                // debugger
                domStyle.set(me.loading, "display", "block");
                me.setDiverAnalyze()
            });
            
        },

        _setLayersNameSelect: function () {
            var me = this;
            me.layersNameSelect.innerHTML = '<option value="-1">请选择分析类型</option>';
            ConflictAnalysisLayerConfig.layers.forEach((layer, index) => {
                me.layersNameSelect.innerHTML +=`<option  value='${layer.name}'>${layer.name}</option> `;
            });
        },

        setDiverAnalyze:function () {
            var me=this;
            var layer1=me._layer1;
            var layer2=me._layer2;
            var type=me._type;

            if(type=='difference'){
                conflictService.differenceAnalysisResult(layer1,layer2).then(function (result) {
                    if(result.code=='200'){
                        debugger
                       // 469 2008030200 330304001 0 0 公路用地 0 996.66 
        // 166 2008030200 330304001 0 0 公路用地 0 262.19 

                    //     result.data=[{"mbbsm":"469","ysdm":"2008030200","xzdm":"330304001","cqr":"0","syqlx":"0","djyt":"公路用地","cylx":"0","mj":"996.66"},
                    //     {"mbbsm":"166","ysdm":"2008030200","xzdm":"330304001","cqr":"0","syqlx":"0","djyt":"公路用地","cylx":"0","mj":"262.19"},
                    // ];
                        if (me._result != null) {
                            me._result._destroy();
                        }
                        me._result=new ConflictAnalysisTable ({ _data:result.data, _layer: me._layer_now }).placeAt(dojo.byId("showTable"));
                        me._result.startup();

                    }
                    domStyle.set(me.loading, "display", "none");

                })
            }
        },

        _destroy: function () {
            var me = this;
            if (me._conflictAnalysisTable != null) {
                me._conflictAnalysisTable._destroy();
            }
            me.destroy();
        }
    });
});

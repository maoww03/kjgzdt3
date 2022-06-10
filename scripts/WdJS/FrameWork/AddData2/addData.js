define([
    "dojo/_base/declare",
    "dojo/parser",
    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin",
    "dojo/text!./templates/dateTemplate.txt",
    "dojo/on",
    "dojo/dom-style",
    "dojo/dom-class",
    "dojo/dom-attr",
    "dojo/dom-construct", 
    "FrameWork/serviceUtil/databaseService",
    "./DataBaseConfig", 
    // "FrameWork/AddData/doAddData",
    "./doAddData",
    "./AttrQueryTool",
    "./conflictPanel"
  ], function (declare, parser, _WidgetBase, _TemplatedMixin, template, on, domStyle, domClass, domAttr, domConstruct, databaseService,DataBaseConfig,doAddData,AttrQueryTool,conflictPanel) {
      return declare([_WidgetBase, _TemplatedMixin], {
          templateString: template,
          _started: false,
          data: null,
          _selectLayer:null,
          _addBtn:null,
          _ConBtn:null,
          _changeBtn:null,
          _doAddData:null,
          _attrQueryTool:null,
          _view:null,
          _conflictPanel:null,
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
                me._selectLayer=dojo.byId("selectLayer");
                me._addBtn=dojo.byId('addBtn');
                me._ConBtn=dojo.byId('confilict_Btn');

                me._changeBtn=dojo.byId('changeBtn');
                var option = "<option value='-1'>请选择数据库</option>";
                for (var i = 0; i < DataBaseConfig.layers.length; i++) {
                    option += "<option value='" + DataBaseConfig.layers[i].id + "'>" + DataBaseConfig.layers[i].name+"</option>";
                }
                me._selectLayer.innerHTML=option;
                me._bindEvents();
              });
          },
          showLayer:function(){
                var me=this;
                debugger
                var layer_id=me._selectLayer.value;
                var layers=appConfig.map.getLayers().array_;
                for(var i=0;i<layers.length;i++){
                    var layer=layers[i].values_;
                    if(layer.thematicMap==true && layer.id==layer_id){
                        layers[i].setVisible(true);
                    }
                }
          },
          _bindEvents: function () {
                var me=this;
                on(dojo.byId("mapDiv"),"click",function(){
                    domStyle.set(dojo.query(".sidebar-tool"),'display','none');
                    if (me._attrQueryTool === null) {
                        me._attrQueryTool = new AttrQueryTool(appConfig.map);
                        me._attrQueryTool.activate("point");
                      } else {
                        me._attrQueryTool.deactivate();
                        me._attrQueryTool.activate("point");
                      }
            
                })
                on(dojo.byId("clear"),"click",function(){
                    for (var i = 0; i < appConfig.map.getLayers().array_.length; i++) {
                        var layer = appConfig.map.getLayers().array_[i];
                        if (layer.values_.graphicMap && layer.getSource().getFeatures().length) {
                            layer.getSource().clear();
                        }
                    }
                    for (var i = 0; i < appConfig.map.overlays_.array_.length; i++) {
                        var overlay = appConfig.map.overlays_.array_[i];
                        overlay.setPosition(undefined);
                    }
                })

                on(me._selectLayer,"change",function(){
                    debugger
                    me.showLayer();
                    var layer_id=me._selectLayer.value;
                    var layers=appConfig.map.getLayers().array_;
                    for(var i=0;i<layers.length;i++){
                        var layer=layers[i].values_;
                        for(var j=0;j< DataBaseConfig.layers.length;j++){
                            if(layer.id==DataBaseConfig.layers[j].id){
                                layers[i].setVisible(false);
                            }
                        }
                        if(layer.thematicMap==true && layer.id==layer_id){
                            layers[i].setVisible(true);
                        }
                    }
                    
                })
                on(me._addBtn,"click",function(){

                    if (this._doAddData != null) {
                        this._doAddData.destroy();
                    }
                    var id=me._selectLayer.value;
                    
                    if(id==-1){
                        alert("请选择图层");
                    }else{
                        domStyle.set(dojo.byId("addview"),"display","block");
                        domStyle.set(dojo.byId("changeview"),"display","none");
                        this._doAddData = new doAddData({_id:id}).placeAt(dojo.byId("addview"));
                        this._doAddData.startup();
                        
                    }
                    
                })

                on(me._ConBtn,"click",function(){
                    if (this._conflictPanel != null) {
                        this._conflictPanel.destroy();
                    }
                    var id=me._selectLayer.value;
                    
                    if(id==-1){
                        alert("请选择图层");
                    }else{
                        domStyle.set(dojo.byId("addview"),"display","block");
                        domStyle.set(dojo.byId("changeview"),"display","none");
                        this._conflictPanel=new conflictPanel({_id:id}).placeAt(dojo.byId("addview"));
                        this._conflictPanel.startup();
                    }
                })
          },
      });
  });
  
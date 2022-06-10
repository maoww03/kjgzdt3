define(["dojo/_base/declare", "dojo/text!./templates/Detailspop.txt", "dijit/_TemplatedMixin", "dijit/_WidgetBase", 
"dojo/on", "dojo/dom-style", 'dojo/parser', "dojo/dom-class", "dojo/dom-attr", "dojo/_base/lang", 'dojo/_base/array',
 'FrameWork/serviceUtil/gisocnService',"./metadataItem","FrameWork/AttrConfig","./KgDataConfig",'FrameWork/Loading/Loading',"./dataRange"],
    function (declare, template, TemplatedMixin, WidgetBase, on, domStyle, parser, domClass, domAttr, lang, array,
         gisocnService,metadataItem,AttrConfig,KgDataConfig,Loading,dataRange) {
        return declare([WidgetBase, TemplatedMixin], {
            templateString: template,
            data: null,

            _started: false,
            _isOver: false,
            _layerName:null,
            _layerId:null,
            _serviceId:null,
         
            dataMap:null,
            _collectLayer: null,
            
            getData:null,
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
                var me=this;
                if (this._started) {
                    return;
                }
                parser.parse(this.domNode).then(function () {
                    // me.layername.innerHTML=`(${this._data.layername})`;
                    me.sjmc.innerHTML+=this._data.layername
                    
                    domStyle.set(me.msysj,'background','#1e77bd');
                    domStyle.set(me.msysj,'color','white');
                    
                    this._layerName=this._data.layername;
                    this._layerId=this._data.layerid;

                    this.getData();
                    me.setTable();
                    this.bindEvent();
                }.bind(this));
                this._started = true;
            },

            bindEvent:function(){
                var me=this;
                on(this.cancel, "click",  function () {
                    me.clickClose();
                    me.destroy();
                }.bind(this));
                on(this.close, "click",  function () {
                    me.clickClose();
                    me.destroy();
                }.bind(this));
                // msysj
                on(this.msysj, "click",  function () {
                    domStyle.set(me.sjkysj,'background','white');
                    domStyle.set(me.sjkysj,'color','black');
                    domStyle.set(me.sjfw,'background','white');
                    domStyle.set(me.sjfw,'color','black');

                    domStyle.set(me.msysj,'background','#1e77bd');
                    domStyle.set(me.msysj,'color','white');
                    
                    domStyle.set(me.content4,'display','block');
                    domStyle.set(me.Result,'display','none');
                    domStyle.set(me.rangeContent,'display','none');
                }.bind(this));
                // sjkysj
                on(this.sjkysj, "click",  function () {
                    domStyle.set(me.msysj,'background','white');
                    domStyle.set(me.msysj,'color','black');
                    domStyle.set(me.sjfw,'background','white');
                    domStyle.set(me.sjfw,'color','black');

                    domStyle.set(me.sjkysj,'background','#1e77bd');
                    domStyle.set(me.sjkysj,'color','white');

                    
                    domStyle.set(me.Result,'display','block');
                    domStyle.set(me.content4,'display','none');
                    domStyle.set(me.rangeContent,'display','none');
                }.bind(this));
                // sjfw
                on(this.sjfw, "click",  function () {
                    domStyle.set(me.msysj,'background','white');
                    domStyle.set(me.msysj,'color','black');
                    domStyle.set(me.sjkysj,'background','white');
                    domStyle.set(me.sjkysj,'color','black');

                    domStyle.set(me.sjfw,'background','#1e77bd');
                    domStyle.set(me.sjfw,'color','white');

                    
                    domStyle.set(me.Result,'display','none');
                    domStyle.set(me.content4,'display','none');
                    domStyle.set(me.rangeContent,'display','block');
                    if(me.dataMap==null){
                        me.dataMap=new dataRange({_data:me.getData,_serviceId:me._serviceId}).placeAt(me.rangeContent);
                        me.dataMap.LoadingCtrl=me.LoadingCtrl.bind(me);

                        me.dataMap.startup();
                    }
                }.bind(this));
            },  
            LoadingCtrl:function(pd){
                var me=this;
                if(pd){
                    Loading.show(me.domNode);
                }else{
                    Loading.hide();
                }
            },
            getData:function(){
                var me=this;
                var obj = AttrConfig.layers.find(function (obj) {
                    return obj.id == me._layerId;
                });
                var result ={
                    code: "000000", data: {
                        dataBaseMetadata: {
                            items:obj.field,
                        }
                    }
                }
              
                if (result.code == "000000") {
                    for (var i = 0; i < result.data.dataBaseMetadata.items.length; i++) {
                        var _metadataItem = new metadataItem({ data: result.data.dataBaseMetadata.items[i] }).placeAt(this.Resultlist);
                        _metadataItem.startup();
                    }
                } else {
                    alert(result.msg);
                }
            },
            setTable(){
                var me=this;
                Loading.show(me.domNode);
                if(appConfig.access_token==false || appConfig.access_token==null || appConfig.access_token==undefined){
                    Loading.hide();
                    return alert("用户数据存在问题,请重新登录重试");
                }
                if(me._data.mapUrl!=null && me._data.mapUrl!=undefined){
                    let serviceId=me._data.mapUrl.split("/")[(me._data.mapUrl.split("/").length-1)];
                    if(serviceId.indexOf("?")!=-1){
                        serviceId=serviceId.split("?")[0];
                    }
                    me._serviceId=serviceId;
                    gisocnService.getDataViewDetail(serviceId).then(function(t){
                        debugger
                        if(t){
                            let rs=JSON.parse(t);
                            if(rs.dataList && rs.dataList.length>0){
                                me.getData=rs.dataList;
                                rs.dataList.forEach(e => {
                                    if(me[e.name] && e.name!='sjmc'){
                                        me[e.name].innerHTML=e.content;
                                    }
                                    if(e.name=="sjjj"){
                                        me.zy.innerHTML+=e.content;
                                    }
                                    if(e.name=="department_id"){
                                        me.lybm.innerHTML+=e.content;
                                    }
                                    if(e.name=="layer_update_time"){
                                        me.newDate.innerHTML+=e.content;
                                    }
                                  
                                });
                            }
                        }
                        Loading.hide();
                    },function(err){
                        console.log(err);
                        Loading.hide();

                    });
                }
                else{
                    Loading.hide();
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
            clickClose:function(){},
        });
    });


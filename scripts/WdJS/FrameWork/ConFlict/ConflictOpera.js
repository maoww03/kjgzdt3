define([
    "dojo/_base/declare",
    "dojo/parser",
    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin",
    "dojo/text!./templates/ConflictOpera.txt",
    "dojo/on",
    "dojo/dom-style",
    "dojo/dom-class",
    "dojo/dom-attr",
    "dojo/DeferredList", 
    "FrameWork/MapUtil/SuperMapWFSQuery",
    "FrameWork/SetMapConfig/SetMapConfig", 
    "FrameWork/serviceUtil/graphService",
    "./ConflictResutTable",
    "FrameWork/Setalert/DealFileload"
  ], function (declare, parser, _WidgetBase, _TemplatedMixin, template, on, domStyle, domClass, domAttr,DeferredList,SuperMapWFSQuery,SetMapConfig,graphService,ConflictResutTable,DealFileload) {
      return declare([_WidgetBase, _TemplatedMixin], {
          templateString: template,
          _sort:[],
          _finalRe:[],

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
                var analyse_tc=me.fxtc;
                var analyse_wkt=me.wkt;
                var analyse_geom=me.geom;
                me._sort=[],
                me._finalRe=[],
                me._firstQuery(analyse_tc,analyse_geom);
                
              }.bind(this));
          },
          _firstQuery:function(layer,geom){
              var me=this;
            var _deferredArray = new Array();
            for(index in layer){
                var queryurl = SetMapConfig.setOneQueryurl(layer[index].queryurl);
                geom.forEach(el => {
                    var _d = SuperMapWFSQuery.longQuest(queryurl, el);
                    _deferredArray.push(_d);
                });
            }
            debugger
            var _deferredList = new DeferredList(_deferredArray);
            me.LoadingCtr(true);
            _deferredList.then(function (result) {
                result.forEach((li) => {
                    if(li[0]){
                        me._secondAnalysis(li[1]);
                    }
                });
                me.LoadingCtr(false);

                me._classifyGroup();
                var _ConflictResut=new ConflictResutTable({redata:me._sort,_fxtc:me.fxtc,_type : me.type,_brief:me.brief1}).placeAt(me.domNode);
                _ConflictResut.startup();

            },function(err){
                console.log(err);
                me.LoadingCtr(false);
            })
          },

        //   _finalRe ->_sort
        _classifyGroup:function(){
            var me=this;
            var redata=me._finalRe;
            var sumAera = 0;
            redata.forEach(re => {
                var _layerid=re.id;
                var _layerdataList=re.re;
                var _ishav=false;
                for(index in me._sort){
                    if(me._sort[index].id ==  _layerid){
                        _ishav=true;
                        me._sort[index].group.push(_layerdataList);
                    }
                }
                if(!_ishav){
                    var classifyLayer={
                        "id":_layerid,
                        "group":[_layerdataList]
                    };
                    me._sort.push(classifyLayer);
                }
            });

            me._sort.forEach(classifyLayer =>{
                sumAera = 0;
                classifyLayer.group.forEach(dataList =>{
                    dataList.forEach(el=>{
                        var area = el.area;
                        sumAera += Number(area);
                    });
                });
                classifyLayer.sumAera=sumAera.toFixed(2);
            });
        },
          _classifyByLayer:function(){
            var me=this;
            var redata=me._finalRe;
            redata.forEach(re => {
                var _layerid=re.id;
                var _layerdataList=re.re;
                var _ishav=false;
                for(index in me._sort){
                    if(me._sort[index].id ==  _layerid){
                        _ishav=true;
                        var tepArr=me._sort[index].data;
                        me._sort[index].data=tepArr.concat(_layerdataList);
                    }
                }
                if(!_ishav){
                    var classifyLayer={
                        "id":_layerid,
                        "re":_layerdataList
                    };
                    me._sort.push(classifyLayer);
                }
            });

          },

          _secondAnalysis:function(queryRe){
              var me=this;
              var _wkt1=queryRe.wkt1;
              var _wkt2=[];
              var findshape=queryRe.re[0];
              var shp=``;
              for(key in findshape){
                var pd =key.match("shape[0-9]+");
                if(pd != null){
                    shp=pd[0];
                    break
                }else if(key == "shape") {
                    shp=key;
                    break
                }
              }
              queryRe.re.forEach(data => {
                  var wkt=data[shp];
                  _wkt2.push(wkt);
              });
              var data={
                  "type": me.type,
                  "wkt1":_wkt1,   
                  "wkt2":_wkt2
              }
            graphService.graphAnalysis(dojo.toJson(data)).then(function (result){
                if(result.code=="200"){
                   var wktList=result.data;
                   var final=queryRe;
                   for(index in wktList){
                       try{
                        if(wktList[index] !=  'GEOMETRYCOLLECTION EMPTY'){
                            var area = DealFileload.calArea(wktList[index]);
                            queryRe.re[index].area=area.toFixed(2);
                            queryRe.re[index].conflictwkt=wktList[index];  
                            // if(area<0.1){
                                // final.re.pop(index);
                            // }
                        }else{
                            queryRe.re[index].area=0;
                            queryRe.re[index].conflictwkt='null';

                        }
                        
                       }catch(err){
                           console.log(queryRe.re[index]);
                       }
                        
                   }
                //    queryRe=final;
                   me._finalRe.push(queryRe);
                }else{
                    console.log(result.msg);
                    console.log(data);
                }
            })
          },
          LoadingCtr:function(p){}
          
       
      });
  });
  
define([
  "dojo/_base/declare",
  "dojo/parser",
  "dijit/_WidgetBase",
  "dijit/_TemplatedMixin",
  "dojo/text!./templates/resultTab.txt",
  "dojo/on",
  "dojo/dom-style",
  "dojo/dom-class",
  "dojo/dom-attr",
  "dojo/dom-construct","FrameWork/serviceUtil/ConfigurationService","./layerConfig","FrameWork/serviceUtil/workMapService",
], function (declare, parser, _WidgetBase, _TemplatedMixin, template, on, domStyle, domClass, domAttr, domConstruct,ConfigurationService,layerConfig,workMapService) {
    return declare([_WidgetBase, _TemplatedMixin], {
        templateString: template,
        data: null,
        _getConflictConfig:null,
        _tabCon:[],

        // 
        _nowTab:[],
        _exportsTab:null,
        isSelect: false,

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
               
                me._showTab();

                me._bindEvents();
                if (this.isSelect) {
                    this.domNode.click();
                }
                
            }.bind(this));
        },
        _showTab:function(){
            var me=this;
            var aa=me._data;
            var innerhtml='';
            var coun=0;

            aa.forEach(el => {
                debugger
                var layerid=el.id;
                layerConfig.layers.forEach(el => {
                    if(layerid == el.id ){
                        if(coun == 0){
                            innerhtml += `<div class="nzyResultTab" style="background-color:#f5f1f1" value="${el.id}"> ${el.caption}</div>`;
                            coun =1;
                            me._nowTab=el.id;
                            me._showTableList(el.id);
                        }else{
                            innerhtml += `<div class="nzyResultTab" style="background-color:#ffffff"  value="${el.id}"> ${el.caption}</div>`;

                        }
                    }
                });
            });
            me.nzy_Tab.innerHTML=innerhtml;
        },
        _showTableList:function(layerid){
            var me=this;
            var allData=me._data;
            var innerhtml=``;
            debugger
            allData.forEach(el => {
                var id=el.id;
                if(id == layerid){
                    var onelayerData=el.data;
                  for(var i=0;i<onelayerData.length;i++){
                    var num= i+1;
                    var type=onelayerData[i].type;
                    var type2=onelayerData[i].type2;
                    var area=onelayerData[i].area;
                    innerhtml += `<tr>  <td>${num}</td> <td>${type}</td> <td>${type2}</td> <td> ${area}</td></tr>`
                  }
                    
                }
            });
            me.content_table.innerHTML=innerhtml;

        },
        _bindEvents: function () {
            var me = this;
            on(me.close,"click",function(){
                me.destroy();
            })

            dojo.query('.nzyResultTab').forEach((dom) => {
                on(dom,"click",function(){
                    dojo.query('.nzyResultTab').forEach((dom2) => {
                        domStyle.set(dom2 ,"background-color","#ffffff");
                    })
                   var layerid=domAttr.get(dom,"value");
                   me._nowTab=layerid;
                   me._showTableList(layerid);
                   domStyle.set(dom ,"background-color","#f5f1f1");
                })
            })

            on(me.download,"click",function(){
                debugger
                var nowlayerid=me._nowTab;
                
                me._data.forEach(el =>{
                    if(el.id == nowlayerid){
                        me._exportsTab=me.doExportData(el.data);
                    }
                });
                var downD= me._exportsTab;
                workMapService.uploadZip(downD).then(function (result){
                if(result.code=="200"){
                    workMapService.fileDownloadByPath(result.data);
                }else{
                    alert(result.msg);
                }
                })
            })

        },
        doExportData:function (data) {
            
        },
        onClick: function (id, caption, data) {

        }
        
    });
});

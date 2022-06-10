define([
  "dojo/_base/declare",
  "dojo/parser",
  "dijit/_WidgetBase",
  "dijit/_TemplatedMixin",
  "dojo/text!./templates/doDownLoadExcel.txt",
  "dojo/on",
  "dojo/dom-style",
  "dojo/dom-class",
  "dojo/dom-attr",
  "dojo/dom-construct",
  "./downLoadConfig",
  'FrameWork/serviceUtil/tcbbService',
  './tcReportpop'
], function (declare, parser, _WidgetBase, _TemplatedMixin, template, on, domStyle, domClass, domAttr, domConstruct, downLoadConfig,tcbbService,tcReportpop) {
    return declare([_WidgetBase, _TemplatedMixin], {
        templateString: template,
        _showReslut:null,
        _downloadUrl:null,
        

       

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
                // var html = "<option value='-1'>请选择报表</option>";
                // for (var i = 0; i < downLoadConfig.layers.length; i++) {
                //     html += "<option  value='" + downLoadConfig.layers[i].url + "'>" + downLoadConfig.layers[i].name +"</option>";
                // }
                // me.layersNameSelect.innerHTML = html;

                var innerHTML=``;
                for (var i = 0; i < downLoadConfig.layers.length; i++) {
                    innerHTML += `<tr>
                        <td> <input type="radio" name="report" value="${downLoadConfig.layers[i].name}">  </td>
                        <td>${downLoadConfig.layers[i].name}</td>
                        <td>${downLoadConfig.layers[i].department}</td>
                        <td>${downLoadConfig.layers[i].layers}</td>
                    </tr>`;
                }
                me.reportSelect.innerHTML=innerHTML;

                me._bindEvents();
            });
        },

        createPop:function(url,con,optionName){
            var me=this;
            if(me._showReslut!=null){
                me._showReslut.destroy();
                me._showReslut=null;
            }
            domStyle.set(me.loading,"display","block");
            tcbbService.get_tcData(url).then(function (result){
                if(result.code=='200'){
                    domStyle.set(me.loading,"display","none");
                    var pop=new tcReportpop({_data:result.data,showType:con,name:optionName}).placeAt(dojo.body());
                    pop.startup();
                    me._showReslut=pop;
                }else{
                    console.log(result.msg);
                    domStyle.set(me.loading,"display","none");
                }
            },function(err){
                console.log(err);
                domStyle.set(me.loading,"display","none");
            })
        },

        _bindEvents: function () {
            var me = this;
            // on(me.downLoad, "click", function () {
            //     if (me.layersNameSelect.value == "-1") {
            //         alert("请选择报表");
            //         return;
            //     }
            //     // window.location.href = appConfig.url + me.layersNameSelect.value;  
            //     // if(me._downloadUrl!=null){
            //     //     window.location.href = me._downloadUrl;  
            //     // }
                
            //     var optionName=me.layersNameSelect.options[me.layersNameSelect.selectedIndex].innerHTML;
            //     var layers=downLoadConfig.layers;
            //     for(var i=0;i<layers.length; i++){
            //         var url=layers[i].url;
            //         // var url='http://192.168.1.121:18888/cbdk/cbdk-bbxx/getResidentialLand'
            //         var showType=layers[i].show;
            //         if(layers[i].name==optionName && showType !=null){
            //             me.createPop(url,showType,optionName);
            //             me._downloadUrl=null;

            //         }else if(layers[i].name==optionName && showType ==null){
            //             me._downloadUrl=layers[i].url;

            //         }
            //     }
            // });

            // new
            on(me.downLoad, "click", function () {
                debugger
                var val=$('input:radio[name="report"]:checked').val();

                if (val == undefined || val == null) {
                    alert("请选择报表");
                    return;
                }
               var obj = downLoadConfig.layers.find(function(obj){
                   return obj.name == val;
               })
                var optionName=obj.name;
                var url=obj.url;
                var showType=obj.show;
                if(optionName && showType !=null){
                    me.createPop(url,showType,optionName);
                    me._downloadUrl=null;

                }else if(optionName && showType ==null){
                    me._downloadUrl=layers[i].url;

                }
            });

            on(me.subSidebox_close, 'click', function () {
                domStyle.set(me.domNode, 'display', 'none');
                _checkQuery=true;
                _attrQueryTool.activate("point");
            });
        }
    });
});

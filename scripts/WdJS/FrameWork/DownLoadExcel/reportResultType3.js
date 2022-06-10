define(["dojo/_base/declare",
 "dojo/text!./templates/reportResultType3.txt",
  "dijit/_TemplatedMixin",
  "dijit/_WidgetBase", 
  "dojo/on",
   "dojo/dom-style", 
   'dojo/parser', 
   "dojo/dom-class", 
   "dojo/dom-attr", 
   "dojo/_base/lang", 
   'dojo/_base/array'],
    function (declare, template, TemplatedMixin, WidgetBase, on, domStyle, parser, domClass, domAttr, lang, array) {
        return declare([WidgetBase, TemplatedMixin], {
            templateString: template,
            data: null,
            type: null,
            _thematicMap:null,

            _started: false,
            _isOver: false,
            _showdata:null,
            _order:[],

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
                if (this._started) {
                    return;
                }

                parser.parse(this.domNode).then(function () {
                    
                    var me=this;
                    var resultList='';
                    var zj_wctdmj=0;
                    var zj_zgs=0;
                    var zj_ztdmj=0;
                    var zj_wcgs=0;
                    for(var i=0;i<me._data.length;i++){
                        var datacon=me._data[i];
                        zj_wctdmj+=datacon.wctdmj||0;
                        zj_zgs+=datacon.zgs||0;
                        zj_ztdmj+=datacon.ztdmj||0;
                        zj_wcgs=datacon.wcgs;
                        var mjzb=(datacon.wctdmj||0)/datacon.ztdmj;
                        var xmszb=(datacon.wcgs||0)/datacon.zgs;
                        mjzb = mjzb.toFixed(2)*100;
                        xmszb = xmszb.toFixed(2)*100;
                        resultList+=`<tr>
                        <td>${i+1}</td>
                        <td>${datacon.xz||0}</td>
                        <td >${mjzb}%</td>
                        <td >${xmszb}%</td>
                        </tr>`;
                        me._data[i].mjzb=mjzb;
                        me._data[i].xmszb=xmszb;
                    }
                    me._showdata=me._data;
                    var zj_mjzb=(zj_wctdmj||0)/zj_ztdmj;
                    var zj_xmszb=(zj_wcgs||0)/zj_zgs;
                    zj_mjzb = zj_mjzb.toFixed(2)*100;
                    zj_xmszb = zj_xmszb.toFixed(2)*100;
                    resultList+=`<tr>
                    <td>${me._data.length+1}</td>
                    <td>总计</td>
                    <td>${zj_mjzb}%</td>
                    <td>${zj_mjzb}%</td>
                    </tr>`;

                    me.ResultListcon3.innerHTML=resultList;
                    debugger
                    me.setshowdata(me._showdata);

                    me._orderClick();
                }.bind(this));

                this._started = true;
            },
            setshowdata:function(data){},

            _orderClick:function(){
                var me=this;
                dojo.query(".order").forEach((dom) => {
                    debugger
                   on(dom, "click", function () {
                       var fieldname = domAttr.get(dom, 'fieldname');
                       var px = domAttr.get(dom, 'order');
                       var neworder=[];
                       dojo.query(".order").forEach((dom2) => {
                            var fieldname2 = domAttr.get(dom2, 'fieldname');
                            if(fieldname2 != fieldname){
                                domAttr.set(dom2, 'order','order');
                                domStyle.set(dom2, 'background', 'url(image/catalog/px.png) right bottom no-repeat');
                            }
                       })
                       if(px== "order"){
                           var px = domAttr.set(dom, 'order','ASC');
                           domStyle.set(dom, 'background', 'url(image/catalog/sx.png) right bottom no-repeat');
                           var neworder2=[fieldname,"ASC"];
                           neworder.push(neworder2);
                       }else if(px== "ASC"){
                           var px = domAttr.set(dom, 'order','DESC');
                           domStyle.set(dom, 'background', 'url(image/catalog/jx.png) right bottom no-repeat');
                           var neworder2=[fieldname,"DESC"];
                           neworder.push(neworder2);
                       }else if(px== "DESC"){
                            // var px = domAttr.set(dom, 'order','order');
                            // domStyle.set(dom, 'background', 'url(image/catalog/px.png) right bottom no-repeat');
                            var px = domAttr.set(dom, 'order','ASC');
                            domStyle.set(dom, 'background', 'url(image/catalog/sx.png) right bottom no-repeat');
                            var neworder2=[fieldname,"ASC"];
                            neworder.push(neworder2);
                       }
                      me._dataorder(neworder);
                   });
               });
            },

            _dataorder:function(order){
                debugger
                var me=this;
                var finaldata =me._showdata;
                if(order != undefined &&  order.length>0){
                    var ordername =  order[0][0];
                    var ordertype =  order[0][1];
                    finaldata = me.arrSortByKey(finaldata,ordername,ordertype);
                }
                
                me._showintabl(finaldata);
            },
            arrSortByKey :function (arr, givKey,order) {
                const listArr =arr;
                listArr.sort((val1, val2) => {
                  const val1KeyVal = val1[givKey] || '';
                  const app2KeyVal = val2[givKey] || '';
                  if(order == "ASC"){
                    if (val1KeyVal > app2KeyVal) {
                        return 1;
                      } else if (val1KeyVal === app2KeyVal) {
                        return 0;
                      } else {
                        return -1;
                      }
                  }else if(order == "DESC"){
                    if (val1KeyVal < app2KeyVal) {
                        return 1;
                      } else if (val1KeyVal === app2KeyVal) {
                        return 0;
                      } else {
                        return -1;
                      }
                  }
                })
                return listArr;
              },
              _showintabl:function(data){
                var me=this;
                me.setshowdata(me._showdata);

                var resultList='';
                var zj_wctdmj=0;
                var zj_zgs=0;
                var zj_ztdmj=0;
                var zj_wcgs=0;
                for(var i=0;i<data.length;i++){
                    var datacon=data[i];
                    zj_wctdmj+=datacon.wctdmj||0;
                    zj_zgs+=datacon.zgs||0;
                    zj_ztdmj+=datacon.ztdmj||0;
                    zj_wcgs=datacon.wcgs;
                    resultList+=`<tr>
                    <td>${i+1}</td>
                    <td>${datacon.xz||0}</td>
                    <td >${datacon.mjzb}%</td>
                    <td >${datacon.xmszb}%</td>
                    </tr>`;
                }
                var zj_mjzb=(zj_wctdmj||0)/zj_ztdmj;
                var zj_xmszb=(zj_wcgs||0)/zj_zgs;

                zj_mjzb = zj_mjzb.toFixed(2)*100;
                zj_xmszb = zj_xmszb.toFixed(2)*100;
                resultList+=`<tr>
                <td>${me._data.length+1}</td>
                <td>总计</td>
                <td>${zj_mjzb}%</td>
                <td>${zj_mjzb}%</td>
                </tr>`;
                me.ResultListcon3.innerHTML=resultList;
            },
        });
    });


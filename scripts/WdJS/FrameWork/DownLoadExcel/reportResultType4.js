define(["dojo/_base/declare",
 "dojo/text!./templates/reportResultType4.txt",
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
            _finnaldata:[],

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
                    me._showdata = me._dealData4(me._data);
                    var resultList='';
                    var rwmj1_sum=0;
                    var rwmj2_sum=0;
                    var wcmj1_sum = 0;
                    var wcmj2_sum = 0;

                    for(var i=0;i< me._showdata.length;i++){
                        var datacon= me._showdata[i];
                        var rate =datacon.wcmj3/datacon.rwmj3||0;
                        var rate1 = datacon.wcmj1/datacon.rwmj1 || 0;
                        var rate2 = datacon.wcmj2/datacon.rwmj2 || 0;
                        resultList+=`<tr>
                        <td>${datacon.name}</td>
                        <td>${datacon.rwmj3.toFixed(2)}</td>
                        <td>${datacon.wcmj3.toFixed(2)}</td>
                        <td>${Math.round(rate*1000)/10}%</td>

                        <td>${datacon.rwmj1.toFixed(2)}</td>
                        <td>${datacon.wcmj1.toFixed(2)}</td>
                        <td>${Math.round(rate1*1000)/10}%</td>

                        <td>${datacon.rwmj2.toFixed(2)}</td>
                        <td>${datacon.wcmj2.toFixed(2)}</td>
                        <td>${Math.round(rate2*1000)/10}%</td>
                        </tr>`;
                        rwmj1_sum += datacon.rwmj1;
                        rwmj2_sum += datacon.rwmj2;
                        wcmj1_sum += datacon.wcmj1;
                        wcmj2_sum += datacon.wcmj2;

                        me._showdata[i].rate=Math.round(rate*1000)/10;
                        me._showdata[i].rate1=Math.round(rate1*1000)/10;
                        me._showdata[i].rate2=Math.round(rate2*1000)/10;
                    }
                    me.setshowdata( me._showdata);

                    var rwmj3_sum=rwmj1_sum+rwmj2_sum;
                    var wcmj3_sum =wcmj1_sum+ wcmj2_sum;

                    var rate= wcmj3_sum/rwmj3_sum || 0;
                    var rate1= wcmj1_sum/rwmj1_sum || 0;
                    var rate2= wcmj2_sum/rwmj2_sum || 0;

                    resultList+=`<tr>
                    <td>合计</td>
                    <td>${rwmj3_sum.toFixed(2)}</td>
                    <td>${wcmj3_sum.toFixed(2)}</td>
                    <td>${Math.round(rate*1000)/10}%</td>

                    <td>${rwmj1_sum.toFixed(2)}</td>
                    <td>${wcmj1_sum.toFixed(2)}</td>
                    <td>${Math.round(rate1*1000)/10}%</td>

                    <td>${rwmj2_sum.toFixed(2)}</td>
                    <td>${wcmj2_sum.toFixed(2)}</td>
                    <td>${Math.round(rate2*1000)/10}%</td>
                    </tr>`;

                    me.ResultListcon4.innerHTML=resultList;
                    me._orderClick();

                }.bind(this));

                this._started = true;
            },
            setshowdata:function(data){},

            _dealData4:function(data){
                var finaldata=[];
                data.forEach(element => {
                    var name = element.sszj;
                    var type = element.t;
                    var wcmj=element.wcmj;
                    var rwmj=element.rwmj;
                    var obj = finaldata.find(function(obj){
                       return obj.name==name
                    })
                    if(obj){
                        if(type == 1){
                            obj.rwmj1=rwmj;
                            obj.wcmj1=wcmj;
                        }else if(type == 2){
                            obj.rwmj2=rwmj;
                            obj.wcmj2=wcmj;
                        }
                        obj.rwmj3+=rwmj;
                        obj.wcmj3+=wcmj;
                    }else{
                        var exp={
                            name :name,
                            rwmj1:0,
                            wcmj1:0,

                            rwmj2:0,
                            wcmj2:0,

                            rwmj3:rwmj,
                            wcmj3:wcmj,//num
                        }
                        if(type == 1){
                            exp.rwmj1=rwmj;
                            exp.wcmj1=wcmj;
                        }else if(type == 2){
                            exp.rwmj2=rwmj;
                            exp.wcmj2=wcmj;
                        }
                        finaldata.push(exp);
                    }
                });
                return finaldata;
            },

            _orderClick:function(){
                var me=this;
                dojo.query(".order").forEach((dom) => {
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
                    var rwmj1_sum=0;
                    var rwmj2_sum=0;
                    var wcmj1_sum = 0;
                    var wcmj2_sum = 0;
                    for(var i=0;i<data.length;i++){
                        var datacon=data[i];
                        resultList+=`<tr>
                        <td>${datacon.name}</td>
                        <td>${datacon.rwmj3.toFixed(2)}</td>
                        <td>${datacon.wcmj3.toFixed(2)}</td>
                        <td>${datacon.rate}%</td>

                        <td>${datacon.rwmj1.toFixed(2)}</td>
                        <td>${datacon.wcmj1.toFixed(2)}</td>
                        <td>${datacon.rate1}%</td>

                        <td>${datacon.rwmj2.toFixed(2)}</td>
                        <td>${datacon.wcmj2.toFixed(2)}</td>
                        <td>${datacon.rate2}%</td>
                        </tr>`;
                        rwmj1_sum += datacon.rwmj1;
                        rwmj2_sum += datacon.rwmj2;
                        wcmj1_sum += datacon.wcmj1;
                        wcmj2_sum += datacon.wcmj2;
                    }
                    var rwmj3_sum=rwmj1_sum+rwmj2_sum;
                    var wcmj3_sum =wcmj1_sum+ wcmj2_sum;

                    var rate= wcmj3_sum/rwmj3_sum || 0;
                    var rate1= wcmj1_sum/rwmj1_sum || 0;
                    var rate2= wcmj2_sum/rwmj2_sum || 0;

                    resultList+=`<tr>
                    <td>合计</td>
                    <td>${rwmj3_sum.toFixed(2)}</td>
                    <td>${wcmj3_sum.toFixed(2)}</td>
                    <td>${Math.round(rate*1000)/10}%</td>

                    <td>${rwmj1_sum.toFixed(2)}</td>
                    <td>${wcmj1_sum.toFixed(2)}</td>
                    <td>${Math.round(rate1*1000)/10}%</td>

                    <td>${rwmj2_sum.toFixed(2)}</td>
                    <td>${wcmj2_sum.toFixed(2)}</td>
                    <td>${Math.round(rate2*1000)/10}%</td>
                    </tr>`;

                    me.ResultListcon4.innerHTML=resultList;
            },


        });
    });


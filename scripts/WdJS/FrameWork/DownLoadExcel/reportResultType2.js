define(["dojo/_base/declare",
 "dojo/text!./templates/reportResultType2.txt",
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
                    for(var i=0;i<me._data.length;i++){
                        var datacon=me._data[i];
                        resultList+=` <tr>
                        <td>${datacon.szxzq||0}</td>
                        <td>${datacon.crjhzs||0}</td>
                        <td>${datacon.crjhmjds||0}</td>
                        <td>${datacon.wcrjhzs||0}</td>
                        <td>${me.fomatFloat(datacon.wcrjhmj||0,2)}</td>
                        </tr>`;
                    }
                    me.ResultListcon2.innerHTML=resultList;

                }.bind(this));

                
                this._started = true;
            },
            fomatFloat:function (num,pos) {
                return Math.round(num*Math.pow(10, pos))/Math.pow(10, pos);  
            },
        });
    });


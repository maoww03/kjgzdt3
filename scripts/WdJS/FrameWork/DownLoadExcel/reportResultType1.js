define(["dojo/_base/declare",
 "dojo/text!./templates/reportResultType1.txt",
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
                        resultList+=`<tr>
                        <td>${datacon.condition||0}</td>
                        <td>${datacon.count||0}</td>
                        <td>${me.fomatFloat(datacon.sum||0,2)}</td>
                        <td>${datacon.zzcount||0+datacon.sfcount||0}</td>
                        <td>${datacon.zzsum||0+datacon.sfsum||0}</td>
                        <td>${datacon.zzcount||0}</td>
                        <td>${me.fomatFloat(datacon.zzsum||0,2)}</td>
                        <td>${datacon.sfcount||0}</td>
                        <td>${me.fomatFloat(datacon.sfsum||0,2)}</td>
                        <td>${datacon.qtcount||0}</td>
                        <td>${me.fomatFloat(datacon.qtsum||0,2)}</td>
                        </tr>`;
                    }
                    me.ResultListcon1.innerHTML=resultList;

                }.bind(this));

                this._started = true;
            },
            fomatFloat:function (num,pos) {
                return Math.round(num*Math.pow(10, pos))/Math.pow(10, pos);  
            },
        });
    });


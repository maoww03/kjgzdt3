define(["dojo/_base/declare", "dojo/text!./templates/tcReportpop.txt", "dijit/_TemplatedMixin", "dijit/_WidgetBase", "dojo/on", "dojo/dom-style", 'dojo/parser', "dojo/dom-class", "dojo/dom-attr", "dojo/_base/lang", 'dojo/_base/array',"./ThematicMap",
"./reportResultType1","./reportResultType2","./reportResultType3","./reportResultType4"],
    function (declare, template, TemplatedMixin, WidgetBase, on, domStyle, parser, domClass, domAttr, lang, array,ThematicMap,
        reportResultType1,reportResultType2,reportResultType3,reportResultType4) {
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
                domStyle.set(me.zxt,"display","none");
                if (this._started) {
                    return;
                }

                parser.parse(this.domNode).then(function () {
                    var me=this;
                    me.typename.innerHTML=me.name;
                    var type=me.showType;
                    debugger
                    if(type==1){
                        var table= new reportResultType1({_data : me._data}).placeAt(me.showtable);
                        table.startup();
                    }else if(type==2){
                        var table= new reportResultType2({_data : me._data}).placeAt(me.showtable);
                        table.startup();
                    }else if(type == 3){
                        debugger
                        domStyle.set(me.zxt,"display","block");
                        var table= new reportResultType3({_data : me._data}).placeAt(me.showtable);
                        table.setshowdata=me.setshowdata.bind(me);
                        table.startup();

                    }else if(type == 4){
                        domStyle.set(me.zxt,"display","block");
                        var table= new reportResultType4({_data : me._data}).placeAt(me.showtable);
                        table.setshowdata=me.setshowdata.bind(me);
                        table.startup();

                    }
                    me._bindEvents();

                }.bind(this));

                this._started = true;
            },
            setshowdata:function(data){
                debugger
                var me=this;
                me._showdata=data;
            },

            _bindEvents:function(){
                var me=this;
                on(me.cancel, "click", function () {
                    me.destroy();
                });
                
                on(me.zxt, "click", function () {
                    debugger
                    if (me._thematicMap != null) {
                        me._thematicMap.destroy();
                    }
                    var type=me.showType;
                    me._thematicMap = new ThematicMap({ _data: me._showdata,_type:type}).placeAt(dojo.body());
                    me._thematicMap.startup();
                });
                    
                on(me.downLoad, 'click', function () {
                   
                    // me.downExle();
                });

            },

            downExle:function(data){
                var excelFile = "<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:x='urn:schemas-microsoft-com:office:excel' xmlns='http://www.w3.org/TR/REC-html40'>";
                    excelFile += "<head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>导出结果</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--></head>";
                    excelFile += "<body>";
                    excelFile += data;
                    excelFile += "</body>";
                    excelFile += "</html>";
                    var link = "data:application/vnd.ms-excel;base64," + window.btoa(unescape(encodeURIComponent(excelFile)));
                    var a = document.createElement("a");
                    a.download =me.name;
                    a.href = link;
                    document.body.appendChild(a);
                    a.click();
                    document.body.removeChild(a);
            }
           
        });
    });


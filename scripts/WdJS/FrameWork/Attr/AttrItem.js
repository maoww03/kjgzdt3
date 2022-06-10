define(["dojo/_base/declare", "dojo/_base/lang", "dojo/dom-construct", "dojo/query", "dojo/dom-attr", "dojo/dom-class", "dojo/dom-style", "dojo/text!./templates/AttrItem.txt", "dijit/_TemplatedMixin", "dijit/_WidgetBase", "dojo/on"],
    function (declare, lang, domConstruct, query, domAttr, domClass, domStyle, template, TemplatedMixin, WidgetBase, on) {
        return declare([WidgetBase, TemplatedMixin], {
            templateString: template,
            titleString: null,
            contentString: null,
            type:null,
            _started: false,
            _url: appConfig.url + '/FileService/File?file=', 
            maxlength: null,

            constructor: function (args) {

            },
            postCreate: function () {
                this.inherited(arguments);
                var me = this;
                if (maxlength > me.titleString.length) {
                    var px = (maxlength - me.titleString.length) / (me.titleString.length - 1) * 14;
                    for (var i = me.titleString.length - 1; i >= 0; i--) {
                        if (i == me.titleString.length - 1) {
                            me.title.innerHTML += "<span style='display:block;float:right;'>" + me.titleString[i] + "</span>";
                        } else {
                            me.title.innerHTML += "<span style='display:block;float:right;margin-right:" + px + "px'>" + me.titleString[i] + "</span>";
                        }
                    }

                } else {
                    me.title.innerHTML = me.titleString;
                }


                if (me.type == "number" && String(me.contentString).indexOf(".") > 0) {

                    me.content.innerHTML = me.contentString.toFixed(2);
                } else if (me.type == "date" && String(me.contentString).indexOf("T") > 0) {
                    me.content.innerHTML = me.contentString.split("T")[0];
                }
                else {
                    me.content.innerHTML = me.contentString;
                }



            },
            onCreate: function () {
                var me = this;
               
              
            },
            startup: function () {
                var me = this;
                if (this._started) {


                    return;

                }
              
                var content_height = domStyle.get(me.content, 'height');
                var title_height = domStyle.get(me.title, 'height');
                if (title_height > content_height) {
                    domStyle.set(me.domNode, 'height', title_height + "px");
                }
                else {
                    domStyle.set(me.domNode, 'height', content_height + "px");
                }
               

                this._started = true;
            },
            netDateToString: function (value) {
                if (value != undefined) {
                    var date = new Date();
                    var time = new Number(value);
                    date.setTime(time);
                    var year = date.getFullYear();
                    var month = date.getMonth() + 1;
                    if (month < 10) {
                        month = "0" + month;
                    }
                    var day = date.getDate();
                    if (day < 10) {
                        day = "0" + day;
                    }
                    return year + '-' + month + '-' + day;
                }
            }
            
            
            
            
        });
    });
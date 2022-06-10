define(["dojo/_base/declare", "dojo/text!./templates/paginationTool.txt", "dijit/_TemplatedMixin", "dijit/_WidgetBase", "dojo/on", "dojo/dom-style", 'dojo/parser', "dojo/dom-class", "dojo/dom-attr"],
    function (declare, template, TemplatedMixin, WidgetBase, on, domStyle, parser, domClass, domAttr) {
        return declare([WidgetBase, TemplatedMixin], {
            templateString: template,
            total: null,
            now: 1,
            rows: null,
            where: null,
            user_id:null,
            constructor: function (args) {
                var me=this;
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
                    me.page_init();
                    me.bindEvent();
                }.bind(this));

                this._started = true;
            },
            page_init: function (total) {
                var me = this;
                if (total != undefined && total != null) {
                    me.total = total;
                }
                me.total_page.innerHTML = "共  " + Math.ceil(me.total / me.rows) + "  页";
                //me.show_num.innerHTML = "显示第 " + ((me.now - 1) * me.rows + 1) + " 至 " + (me.now * me.rows > me.total ? me.total:me.now * me.rows) + " 项结果 ， 共" + me.total + "项";
                me.now_page.innerHTML = me.now;
            },
            bindEvent: function () {
                var me = this;

                on(me.pre, 'click', function () {
                    if (me.now > 1) {
                        me.now = me.now - 1;
                        me.getData(me.now, me.rows, me.user_id,me.where);
                    }
                });

                on(me.next, 'click', function () {
                    if (me.now < Math.ceil(me.total / me.rows)) {
                        me.now = me.now + 1;
                        me.getData(me.now, me.rows, me.user_id,me.where);
                    }
                });

                on(me.first, 'click', function () {
                    me.now = 1;
                    me.getData(me.now, me.rows, me.user_id,me.where);
                });

                on(me.last, 'click', function () {
                    me.now = Math.ceil(me.total / me.rows);
                    me.getData(me.now, me.rows, me.user_id,me.where);
                });

            },
            getData: function (page, rows,id,where) {

            },
            refresh: function () {
                var me = this;
                me.getData(me.now, me.rows, me.user_id,me.where);
            },
            // searchData: function (page, rows, where) {
            //     this.now = page;
            //     this.rows = rows;
            //     this.where = where;
            //     this.getData(this.now, this.rows, this.where);

            // }
        });
    });

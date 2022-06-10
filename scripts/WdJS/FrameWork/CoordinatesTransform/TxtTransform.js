define([
  "dojo/_base/declare",
  "dojo/parser",
  "dojo/DeferredList",
  "dijit/_WidgetBase",
  "dijit/_TemplatedMixin",
  "dojo/text!./templates/TxtTransform.txt",
  "dojo/on",
  "dojo/dom-style",
  "dojo/dom-class",
  "dojo/dom-attr",
  "dojo/dom-construct",
  "FrameWork/serviceUtil/workMapService","FrameWork/Measure/GaussKruger"
], function (declare, parser, DeferredList, _WidgetBase, _TemplatedMixin, template, on, domStyle, domClass, domAttr, domConstruct, workMapService, GaussKruger) {
    return declare([_WidgetBase, _TemplatedMixin], {
        templateString: template,
        _change: 'XY2BL',
        _filePath: null,
        _txtFileWkt: null,

        _Ellipsoid: {
            name: "CGCS2000",
            semiMajorAxis: 6378137,
            semiMinorAxis: 6356752.3141403561,
            flatRate: 0.00335281068118232
        },
        _g: null,
        _L0: 120.000000000,//XY2BL
        _zbx: [{ name: "80国家大地坐标系", value:"xian80"},{ name: "2000国家大地坐标系", value:"cgcs2000"}],

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
                me._g = new GaussKruger();
                for (var i = 0; i < me._zbx.length; i++) {
                    me.zbx.innerHTML += "<option value='" + me._zbx[i].value + "'>" + me._zbx[i].name + "</option>";
                }
                me._bindEvents();
            });
        },
        _bindEvents: function () {
            var me = this;
            on(me.close, "click", function () {
                me._destroy();
                _checkQuery = true;
                _attrQueryTool.activate("point");
            });

            on(me.checkFile, "click", function () {
                me.upload.click();
            });
            on(me.upload, "change", function () {
                domStyle.set(me.downloadBtn, 'display', 'none');
                var filePath = me.upload.value;
                var fileName = filePath.substring(filePath.lastIndexOf("\\") + 1); //文件名
                if (fileName != "") {
                    me.path.innerHTML = fileName;
                } else {
                    me.path.innerHTML = "未选择任何文件";
                }
            });

            on(me.downloadBtn, 'click', function () {
                workMapService.fileDownloadByPath(me._filePath);
            })

            on(me.transformBtn, "click", function () {
                domStyle.set(me.loading, "display", "block");
                var fd = new FormData();
                fd.append("file", me.upload.files[0]);
                var filePath = me.upload.value;
                var fileName = filePath.substring(filePath.lastIndexOf("\\") + 1); //文件名
                var extName = fileName.substring(fileName.lastIndexOf(".") + 1); //后缀名

                if (extName != "txt") {
                    domStyle.set(me.loading, "display", "none");
                    alert("请选择txt文件");
                } else if (extName == "txt") {
                    workMapService.sbhz(me.zbx.value, fd).then(function (res) {
                        if (res.code == 200) {
                            debugger
                            me._filePath = res.data;
                            domStyle.set(me.loading, "display", "none");
                            domStyle.set(me.downloadBtn, 'display', 'block');
                        } else {
                            alert(res.msg);
                            domStyle.set(me.loading, "display", "none");
                        }
                    });
                }
            });
        },


        _destroy: function () {
            var me = this;
            me.destroy();
        }

    });
});

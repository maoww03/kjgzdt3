define(["dojo/_base/declare", 
    "dojo/text!./templates/shpTransform.txt", 
    "dijit/_TemplatedMixin", 
    "dijit/_WidgetBase", 
    "dojo/on", 
    "dojo/dom-style", 
    'dojo/parser', 
    "dojo/dom-class", 
    "dojo/dom-attr", 
    "dojo/_base/lang", 
    'dojo/_base/array',
    "FrameWork/serviceUtil/workMapService",
    "FrameWork/serviceUtil/uploadService",
],
    function (declare, template, TemplatedMixin, WidgetBase, on, domStyle, parser, domClass, domAttr, lang, array,workMapService,uploadService) {
        return declare([WidgetBase, TemplatedMixin], {
            templateString: template,

            _started: false,
            _change:'sheng',
            _path:null,
            _extName:null,
            _zbx: [{ name: "2000国家大地坐标系", value:"cgcs2000"},{ name: "80国家大地坐标系", value:"xian80"}],


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
                    for (var i = 0; i < me._zbx.length; i++) {
                        me.zbx.innerHTML += "<option value='" + me._zbx[i].value + "'>" + me._zbx[i].name + "</option>";
                    }

                    this.bindEvent();
                }.bind(this));

                this._started = true;
            },

            bindEvent: function () {
               var me=this;
                on(me.close, 'click', function () {
                    domStyle.set(me.domNode,"display",'none');
                }.bind(this));

             
                // on(me.change, "click", function () {
                //     if (me._change == 'sheng') {
                //         domStyle.set(me.change, "background-image", 'url(image/Transfor/jiaohuan2.png)');
                //         me._change = 'bu';
                //     } else if (me._change == 'bu') {
                //         domStyle.set(me.change, "background-image", 'url(image/Transfor/jiaohuan1.png)');
                //         me._change = 'sheng';
                //     }
                // });

                on(me.checkFile, "click", function () {
                    me.upload.click();
                  });

                on(me.upload, "change", function () {
                    var filePath = me.upload.value;
                    var fileName = filePath.substring(filePath.lastIndexOf("\\") + 1); //文件名
                    var extName = fileName.substring(fileName.lastIndexOf(".") + 1); 
                    me._extName=extName;
                    if (extName == "zip") {
                      me.path.innerHTML = fileName;
                    } else {
                      me.path.innerHTML = "未选择任何文件";
                    }
                  
                });

                on(me.transformBtn, "click", function () {
                    debugger
                    me._change=me.change2.value;
                    var zbx=me.zbx.value;
                    if(me._extName == 'zip'){
                        domStyle.set(me.downloadBtn,"display","none");
                        domStyle.set(me.loading,"display",'block');
                        var fd = new FormData();
                        fd.append("file", me.upload.files[0]);

                        // 转换接口
                        uploadService.shpTotxt(fd,me._change,zbx).then(function (result) {
                          if (result.code == "200") {
                              debugger
                            me._path=result.data;
                            domStyle.set(me.downloadBtn,"display","block");
                            domStyle.set(me.loading,"display",'none');
                          } else {
                              alert(result.msg);
                              domStyle.set(me.loading,"display",'none');
                          }
                        });

                    }else{
                        alert("请上传shp文件");
                    }
                    
                  });

                  on(me.downloadBtn, "click", function () {
                    workMapService.fileDownloadByPath(me._path);
                  });
            }
        });
    });


define([
    "dojo/_base/declare",
    "dojo/parser",
    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin",
    "dojo/text!./templates/Attachment_upload.txt",
    "dojo/on",
    "dojo/dom-style",
    "dojo/dom-class", 
    "dojo/dom-attr",
    "dojo/_base/lang",
    "dojo/dom-construct",
    "FrameWork/serviceUtil/Attachment",
  ], function (
      declare,
      parser,
      _WidgetBase,
      _TemplatedMixin,
      template,
      on,
      domStyle,
      domClass,
      domAttr,
      lang,
      domConstruct,
      Attachment,
  ) {
      return declare([_WidgetBase, _TemplatedMixin], {
        templateString: template,
        _regionCode:[{code:"330300",region:"温州市"},{code:"330302",region:"鹿城区"},{code:"330303",region:"龙湾区"},{code:"330304",region:"瓯海区"},{code:"330305",region:"洞头区"},{code:"330324",region:"永嘉县"},{code:"330326",region:"平阳县"},{code:"330327",region:"苍南县"},{code:"330328",region:"文成县"},{code:"330329",region:"泰顺县"},{code:"330381",region:"瑞安市"},{code:"330382",region:"乐清市"},{code:"330383",region:"龙港市"}],
        _fd:null,
        filename:null,
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
                me.setRegionselect();
                me._bindEvents();
        });
        },
        setRegionselect:function(){
            var me=this;
            var innerHTML=``;
            me._regionCode.forEach(element => {
                innerHTML+=`<option value=${element.code}>${element.region}</option>`
            });
            me.regionname.innerHTML=innerHTML;
            debugger
            $(".selectRegion").val(regionCode);

        },
        _bindEvents:function(){
            var me=this;
            on(me.close, "click", function () {
                me.destroy();
            });  
            on(me.upload2, "change", function () {
                var file = this.files[0];
                if (file != null && file != undefined) {
                    me.file_name2.innerHTML = file.name;
                    me._fd=this.files[0];
                    me.filename= file.name;
                }
            });
     
            // save
            on(me.save, "click", function () {
                var formData = new FormData();
                if(me._fd!=null){
                    formData.append("file",me._fd);
                }else{
                    alert("请上传文件");
                    return;
                }
                var userid=user.id;
                var region =me.regionname.options[me.regionname.selectedIndex].value;
                var filename =  me.file_name2.innerHTML;
                Attachment.pdFile(region,filename).then(function(re){
                    if(re.code == "200"){
                        // 
                    

                        var _pd=re.data;
                        if(_pd){
                            if(confirm("存在同名文件,请确认是否替换")){
                                Attachment.addFile(userid,region,formData).then(function(result){
                                    if(result.code == "200"){
                                        alert("替换成功");
                                        me._createRefresh(me.pagenum);
                                    }else{
                                         alert("替换失败");
                                    }
                                },function(){
                                    alert("替换失败");
                                })
                            }
                        }else{
                            Attachment.addFile(userid,region,formData).then(function(result){
                                if(result.code == "200"){
                                    alert("添加成功");
                                    me._createRefresh(me.pagenum);
                                }else{
                                    alert("添加失败");
                                }
                            },function(){
                                alert("添加失败");
                            })
                        }
                    }
                })

            
            });
        },
        _createRefresh:function(pageNum){},
      });

  });
  
define([
    "dojo/_base/declare",
    "dojo/parser",
    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin",
    "dojo/text!./templates/filesLIst_Item.txt",
    "dojo/on",
    "dojo/dom-style",
    "dojo/dom-class", 
    "dojo/dom-attr",
    "dojo/_base/lang",
    "dojo/dom-construct",
    "FrameWork/Feedback/enlargeImage",
    "FrameWork/serviceUtil/ftpService"
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
      domConstruct,enlargeImage,ftpService
  ) {
      return declare([_WidgetBase, _TemplatedMixin], {
        templateString: template,
        _clkstatus:false,
        filePath:null,
        btnType:null,
        _enlargeImage:null,
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
                me.filePath=me.filePath.slice(1);
                if(me.filePath.indexOf("vd01/")!=-1){
                    me.filePath=me.filePath.replace("vd01/","");
                }
                me._setStlye();
                me._bindEvents();
            });
        },
        _setStlye:function () {
            var me=this;
            var Data=me._data;
            if(Data.type == "D"){
                domAttr.set(me.domNode,"title","双击打开文件夹");
                domStyle.set(me.domNode,"background-image","url(image/attrquery/files.png)");
            }else if(Data.type == "F"){
                if(Data.name.indexOf(".jpg")!=-1 || Data.name.indexOf(".pdf")!=-1){
                    domStyle.set(me.look,"display","block");
                    domStyle.set(me.down,"display","block");
                }
                else{
                    domStyle.set(me.down,"display","block");
                }
                domStyle.set(me.domNode,"background-image","url(image/attrquery/file.png)");
                domAttr.set(me.domNode,"title",Data.name);
            }
            me.name.innerHTML=Data.name;
        },

        _bindEvents:function(){
            var me=this;
            // 单击
            // on(me.domNode, "click", function () {
            //     if(!me._clkstatus){
            //         domClass.replace(me.domNode, "fileManage_files_Clk","fileManage_files" );
            //         me._clkstatus=true;
            //     }else{
            //         domClass.replace(me.domNode, "fileManage_files", "fileManage_files_Clk");
            //         me._clkstatus=false;
            //     }
            // });  
            // 双击
            on(me.domNode, "dblclick", function () {
                var type=me._data.type
                var name=me._data.name;
                if(type == "D"){
                        me.DblClick(name);
                }
                //    else if(type == "F"){dddd
                //         me.DblClick_F(name);
                //    }
            }); 
            on(me.down,"click",function(){
                me.DblClick_F(me._data.name);
            });
            on(me.look,'click',function(){
                if(me._data.name.indexOf(".jpg")!=-1){
                    if(me._enlargeImage != null){
                        me._enlargeImage.destroy();
                        me._enlargeImage=null;
                    }
                    if(me.btnType=="规划编制档案查看"){
                        me._enlargeImage=new enlargeImage({_src :appConfig.urlgdb+`gdbsave2/get?path=${encodeURI(me.filePath+"/"+me._data.name)}&xzq=&config=ydfw`}).placeAt(dojo.body());
                        me._enlargeImage.startup();
                    }
                    else{
                        me._enlargeImage=new enlargeImage({_src :appConfig.urlgdb+`gdbsave2/get?path=${encodeURI(me.filePath+"/"+me._data.name)}&xzq=&config=lctz`}).placeAt(dojo.body());
                        me._enlargeImage.startup();
                    }
                }
                else if(me._data.name.indexOf(".pdf")!=-1){
                    if(me.btnType=="规划编制档案查看"){
                        // http://localhost:18090
                        var url=`http://10.36.128.241:18080/gdbsave2/get?path=${encodeURI(me.filePath+"/"+me._data.name)}&xzq=&config=ydfw`;
                        window.open(`http://10.36.128.241:18080/pdf/web/viewer.html?file=${encodeURIComponent(url)}`);
                    }
                    else{
                        var url=`http://10.36.128.241:18080/gdbsave2/get?path=${encodeURI(me.filePath+"/"+me._data.name)}&xzq=&config=lctz`;
                        window.open(`http://10.36.128.241:18080/pdf/web/viewer.html?file=${encodeURIComponent(url)}`);
                    }
                }
            });
        },
            DblClick:function (name) {
                
            },
            DblClick_F:function (name) {
                
            }
      });
  });
  
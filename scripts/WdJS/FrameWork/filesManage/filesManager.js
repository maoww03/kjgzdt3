define([
    "dojo/_base/declare",
    "dojo/parser",
    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin",
    "dojo/text!./templates/filesManager.txt",
    "dojo/on",
    "dojo/dom-style",
    "dojo/dom-class", 
    "dojo/dom-attr",
    "dojo/_base/lang",
    "dojo/dom-construct",
    "FrameWork/serviceUtil/ftpService","./filesLIst_Item"
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
      domConstruct,ftpService,filesLIst_Item
  ) {
      return declare([_WidgetBase, _TemplatedMixin], {
        templateString: template,
        
        _confArr:[{"region":"温州市","region_coed":"330300"},{"region":"乐清市","region_coed":"330382"},{"region":"泰顺县","region_coed":"330329"},{"region":"苍南县","region_coed":"330327"},{"region":"洞头区","region_coed":"330305"},{"region":"龙港市","region_coed":"330883"},{"region":"平阳县","region_coed":"330326"},{"region":"瑞安市","region_coed":"330381"},{"region":"文成县","region_coed":"330328"},{"region":"永嘉县","region_coed":"330324"}],

        // 1-项目范围 
        _Item:[],
        _nowdir:null,
        // 2-用地规划

        constructor: function (args) {},
        postCreate: function () {
            this.inherited(arguments);
        },
        startup: function () {
            var me = this;
            if (me._started) {
                return;
            }
            parser.parse(me.domNode).then(function () {
                var type=me._type;
                if(type == "ckda"){
                    me.panelName.innerHTML="规划编制档案查看";
                    var dir="规划编制档案/";
                    me.setFtpRoute(dir);
                    // me.setFtpRoute();
                    // me._getDataMain("规划编制档案/");
                }else if(type =="cktz"){
                    domStyle.set(me.back_Btn,"display","none");
                    me.panelName.innerHTML="图则信息查看";
                    me._getQueryDir(me._data);
                }else if(type == "ckwj"){
                    domStyle.set(me.back_Btn,"display","none");
                    me.panelName.innerHTML="文件信息查看";
                    me._getQueryDir(me._data);
                }else if(type == "cksm"){
                    domStyle.set(me.back_Btn,"display","none");
                    me.panelName.innerHTML="说明信息查看";
                    me._getQueryDir(me._data);
                }
                me._bindEvents();
            });
        }, 
        // 1-项目范围 
        _getDataMain:function (dir) {
            var me=this;
            var aa=dir.split("/");
            var dir2="";
            aa.forEach(el=>{
                if(el != "规划编制档案"){
                    dir2+="/"+el;
                }
            });

            ftpService.getftpcont(dir2).then(function (re) {
                if(re.code == 200){
                    me._nowdir=re.data.current;
                    var fileData=re.data.content;
                    me.now_lj.innerHTML= re.data.current;
                    me._showListInPanel(fileData);
                }else {
                    me._getDataMain("");
                    console.log(re.msg);
                }
            })
        },
        _showListInPanel:function (fileData) {
            var me=this;
            if(me._Item.length>0){
                for(var i=0;i<me._Item.length;i++){
                    me._Item[i].destroy();
                }
            }
            for(var i=0;i<fileData.length;i++){
                if(fileData[i].name != "." && fileData[i].name != ".."){
                    var _fileList=new filesLIst_Item({_data:fileData[i],btnType:me.panelName.innerText,filePath:me.now_lj.innerText}).placeAt(me.file_List);
                    _fileList.DblClick=me.DblClick.bind(me);
                    _fileList.DblClick_F=me.DblClick_F.bind(me);
                    _fileList.startup();
                    me._Item.push(_fileList);
                }
               
            }
            
        },
        DblClick:function (name) {
            var me=this;
            var dir=me._nowdir;
            dir=dir+"/"+name;
            me._getDataMain(dir);
        },
        DblClick_F:function (name) {
            var me=this;
            var dir=me._nowdir;
            dir=dir+"/"+name;
            ftpService.fileDownload_xmfw(dir);
            var time=me.getSystemTime();
            ftpService.down_Record(name,user.id,user.username,regionCode,time).then(function(re){
                if(re.code != '200'){ 
                    console.log(re) 
                }
            },function(err){console.log(err)})
        },
        getSystemTime :function () {
            // 实例化日期类
            var time = new Date();
            // 获取完整的年份(4位)
            var year = time.getFullYear();
            // 获取月份(0-11,0代表1月)
            var month = time.getMonth() + 1;
            // 获取日期(1-31)
            var date = time.getDate();
            // 获取小时
            var h = time.getHours();
            h = h < 10 ? '0' + h : h;
            // 获取分钟
            var m = time.getMinutes();
            m = m < 10 ? '0' + m : m;
            // 获取秒钟
            var s = time.getSeconds();
            s = s < 10 ? '0' + s : s;
            //测试打印
            console.log(year + "年" + month + "月" + date + "日 " + h + ":" + m + ":" + s);
            
            // 合并返回
            // 2022-06-08 19:45:50
            return(year + "-" + month + "-" + date + " " + h + ":" + m + ":" + s) ;
        
        },

        _backBtn:function () {
            var me=this;
            var dir=me._nowdir;
                if(dir!='' && dir!= undefined && dir!='/' ){
                    dir=dir.split("/");
                    var befordir='';
                    for(var i=0;i<dir.length;i++){
                        if(i < dir.length-1){
                            befordir+=dir[i]+"/"
                        }
                    }
                    befordir=befordir.substring(0,befordir.length-1);
                    me._getDataMain(befordir);
                }
        },

        // 2-用地规划
        _getQueryDir:function (feature) {

            var me=this;
            var _data=feature.properties.attributes || feature.properties;
            var xmmc=_data.xmmc;
            var tzname=_data.sstz;
            if(xmmc == "" || xmmc == undefined || xmmc == null){
                me.file_List.innerHTML="无项目"
                return 
            }
            if(me._type == "cktz"){
                var dir='TZ_Fields'+"/"+xmmc;
                // 1-查询数据
                ftpService.getftpcont_TZ(dir).then(function (re) {
                    if(re.code == "200"){
                        me._nowdir=re.data.current;
                        var fileData=re.data.content;
                        me.now_lj.innerHTML= re.data.current;
                        me._showListInPanel2(fileData,tzname);
                    }else if(re.code == "404"){
                        me.file_List.innerHTML="FTP中无该项目文件信息";
                    }else{
                        alert(re.msg);
                    }
                })
            }else if( me._type == "ckwj"){
                var dir='CHM_Fields';
                
                ftpService.getftpcont_TZ(dir).then(function (re) {
                    if(re.code == "200"){
                        me._nowdir=re.data.current;
                        var fileData=re.data.content;
                        me.now_lj.innerHTML= re.data.current;
                        me._showListInPanel2_wj(fileData,xmmc);
                    }else if(re.code == "404"){
                        me.file_List.innerHTML="FTP中无该项目文件信息";
                    }else{
                        alert(re.msg);
                    }
                })

            }else if( me._type == "cksm"){
                // _showListInPanel2_sm
                var dir='CHM_Fields';
                
                ftpService.getftpcont_TZ(dir).then(function (re) {
                    if(re.code == "200"){
                        me._nowdir=re.data.current;
                        var fileData=re.data.content;
                        me.now_lj.innerHTML= re.data.current;
                        me._showListInPanel2_sm(fileData,xmmc);
                    }else if(re.code == "404"){
                        me.file_List.innerHTML="FTP中无该项目文件信息";
                    }else{
                        alert(re.msg);
                    }
                })

            }
            
            

        },
        _showListInPanel2:function (fileData,tzname) {
            var me=this;
            if(me._Item.length>0){
                for(var i=0;i<me._Item.length;i++){
                    me._Item[i].destroy();
                }
            }
            var _pd=false;
            for(var i=0;i<fileData.length;i++){
                var filename=fileData[i].name;
                var pd=filename.indexOf(tzname);
                if(pd > -1){
                    var _fileList=new filesLIst_Item({_data:fileData[i],btnType:me.panelName.innerText,filePath:me.now_lj.innerText}).placeAt(me.file_List);
                    // _fileList.DblClick=me.DblClick.bind(me);
                    _fileList.DblClick_F=me.DblClick_F2.bind(me);
                    _fileList.startup();
                    me._Item.push(_fileList);
                    _pd=true;
                }
               
            }
            if(_pd == false){
                me.file_List.innerHTML="该项目查不到图则";
            }
            
            
        },
        _showListInPanel2_wj:function (fileData,xmmc) {
            var me=this;
            if(me._Item.length>0){
                for(var i=0;i<me._Item.length;i++){
                    me._Item[i].destroy();
                }
            }
            var _pd=false;
            for(var i=0;i<fileData.length;i++){
                var filename=fileData[i].name;
                var filter=xmmc+"文本"
                var pd=filename.indexOf(filter);
                if(pd > -1){
                    var _fileList=new filesLIst_Item({_data:fileData[i],btnType:me.panelName.innerText,filePath:me.now_lj.innerText}).placeAt(me.file_List);
                    _fileList.DblClick_F=me.DblClick_F2.bind(me);
                    _fileList.startup();
                    me._Item.push(_fileList);
                    _pd=true;
                }
            }
            if(_pd == false){
                me.file_List.innerHTML="该项目查不到图则";
            }
        },
        _showListInPanel2_sm:function (fileData,xmmc) {
            var me=this;
            if(me._Item.length>0){
                for(var i=0;i<me._Item.length;i++){
                    me._Item[i].destroy();
                }
            }
            var _pd=false;
            for(var i=0;i<fileData.length;i++){
                var filename=fileData[i].name;
                var filter=xmmc+"说明"
                var pd=filename.indexOf(filter);
                if(pd > -1){
                    var _fileList=new filesLIst_Item({_data:fileData[i],btnType:me.panelName.innerText,filePath:me.now_lj.innerText}).placeAt(me.file_List);
                    _fileList.DblClick_F=me.DblClick_F2.bind(me);
                    _fileList.startup();
                    me._Item.push(_fileList);
                    _pd=true;
                }
            }
            if(_pd == false){
                me.file_List.innerHTML="该项目查不到图则";
            }
        },

        DblClick_F2:function (name) {
            var me=this;
            var dir=me._nowdir+"/"+name;
            ftpService.fileDownload_ydgh(dir);
            var time=me.getSystemTime();
            ftpService.down_Record(name,user.id,user.username,regionCode,time).then(function(re){
                if(re.code != '200'){
                    console.log(re)
                 }
            },function(err){console.log(err)})
        },



        _bindEvents:function(){
        var me=this;
        on(me.close, "click", function () {
            me.destroy();
        });  
        // back_Btn
        on(me.back_Btn, "click", function () {
            if(me._type == "ckda"){
                me._backBtn();
            }else if(me._type == "cktz"){
                alert("暂无数据");
            }
            
            
        }); 
        },
       
        setFtpRoute(dir){
            var me=this;
            
            var name=null;
           if(me._data.properties.attributes){
             name=me._data.properties.attributes.xmmc;
           }
           if(me._data.properties.xmmc){
            name=me._data.properties.xmmc;
           }
            ftpService.getRouter(name).then(e=>{
                if(e){
                    let datas=JSON.parse(e.childNodes[0].innerHTML)
                    if(datas.code==200){
                        if(datas.data!=null && datas.data!="" && datas.data!=undefined){
                            let lj=datas.data.split(",")[0].replace("vd01/","");
                            let rl=/\d{4}[.]\d{2}.{1}/g;
                            let ljarr=lj.match(rl);
                            let yx,mb;

                            if(ljarr instanceof Array){
                                ljarr.forEach(e=>{
                                    if(e.indexOf(" ")<0){
                                        yx=e;
                                        mb=e.slice(0,e.length-1)+" "+e.slice(e.length-1)
                                    }
                                });
                                if(yx!=undefined){
                                    lj=lj.replace(yx,mb);
                                
                                }
                                // if(lj.indexOf("(")){
                                //     lj=lj.replace("(","（");
                                // }
                                // if(lj.indexOf(")")){
                                //     lj=lj.replace(")","）");
                                // }
                                me._getDataMain(lj);
                            }
                            else{
                                me._getDataMain(dir);
                            }
                        }
                    }
                    else{
                        me._getDataMain(dir);
                    }
                }
            })
        }
        
      });
  });
  
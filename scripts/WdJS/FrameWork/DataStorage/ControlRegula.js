define([
    "dojo/_base/declare",
    "dojo/parser",
    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin",
    "dojo/text!./templates/ControlRegula.txt",
    "dojo/on",
    "dojo/dom-style",
    "dojo/dom-class", 
    "dojo/dom-attr",
    "dojo/_base/lang",
    "dojo/dom-construct",
    "FrameWork/serviceUtil/kgService",'FrameWork/Loading/Loading'
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
      domConstruct,kgService,Loading
  ) {
      return declare([_WidgetBase, _TemplatedMixin], {
          templateString: template,
          _FeedbackList:null,
          _FeedbackCon:null,
          _fd1:null,
          _fd2:null,
          _confArr:[{"region":"乐清市","conf_value":"yqkg","region_coed":"330382"},{"region":"泰顺县","conf_value":"tskg","region_coed":"330329"},{"region":"苍南县","conf_value":"cnkg","region_coed":"330327"},{"region":"洞头区","conf_value":"dtkg","region_coed":"330305"},{"region":"龙港市","conf_value":"lgkg","region_coed":"330883"},{"region":"平阳县","conf_value":"pykg","region_coed":"330326"},{"region":"瑞安市","conf_value":"rakg","region_coed":"330381"},{"region":"文成县","conf_value":"wckg","region_coed":"330328"},{"region":"永嘉县","conf_value":"yjkg","region_coed":"330324"}],


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
                // me._setList();
                var innerHTML='';
                var userRegion_pd=user.depts[0].regionCode;

                var _pd=false;
                me._confArr.forEach(el => {
                    if(el.region_coed===userRegion_pd){
                        innerHTML+=`<option value="${el.conf_value}">${el.region}(${el.conf_value})</option>`;
                        _pd=true;
                    }
                });
                if(!_pd){
                    innerHTML+=`<option value="0">请选择</option>`;
                }

                me.conf.innerHTML=innerHTML;

                me._bindEvents();
              });
          },
          _bindEvents:function(){
            var me=this;
            on(me.close, "click", function () {
                me.destroy();
            });
            // upload1
            on(me.upload1, "change", function () {
                var file = this.files[0];
                if (file != null && file != undefined) {
                    me.file_name1.innerHTML = file.name;
                    me._fd1=this.files[0];
                    // me._fd1 = new FormData();
                    // me._fd1.append("file", file);
                }
            });
            // upload2
            on(me.upload2, "change", function () {
                var file = this.files[0];
                if (file != null && file != undefined) {
                    me.file_name2.innerHTML = file.name;
                    me._fd2=this.files[0];
                    // me._fd2 = new FormData();
                    // me._fd2.append("file", file);
                }
            });
            // 确定
            on(me.save, "click", function () {
                debugger
                var _conf=me.conf.value;
                var formData = new FormData();
                if(me._fd1!=null){
                    formData.append("gdb",me._fd1);
                }

                if(me._fd2!=null){
                    formData.append("gdb_his",me._fd2);
                }

                if(_conf){
                    formData.append("conf", _conf);
                }else{
                    alert("请输出文件标识！");
                }
                
                Loading.show(me.domNode);
               
                kgService.kgrk_Warehousing(formData).then(function(re){
                  if(re.code=="200"){
                    Loading.hide();
                    alert(re.data);
                  }else{
                      alert(re.msg); 
                      var err_msg=JSON.stringify(re);
                      me.err_data.innerHTML=""+err_msg;
                      Loading.hide();
                  }
                },function(err){
                    Loading.hide();
                    me.err_data.innerHTML=""+re.message;
                    alert(err.message);
                    
                })
            });
            // 取消
            on(me.qx, "click", function () {
                me.destroy();
            });

            
          },
      });
  });
  
define([
    "dojo/_base/declare",
    "dojo/parser",
    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin",
    "dojo/text!./templates/updatePwd.txt",
    "dojo/on",
    "dojo/dom-style",
    "dojo/dom-class", 
    "dojo/dom-attr",
    "FrameWork/serviceUtil/addrService",'FrameWork/Loading/Loading','FrameWork/Setalert/Setalert'
  ], function (
      declare,
      parser,
      _WidgetBase,
      _TemplatedMixin,
      template,
      on,
      domStyle,
      domClass,
      domAttr,addrService,Loading,Setalert
  ) {
      return declare([_WidgetBase, _TemplatedMixin], {
          templateString: template,



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
                me._bindEvents();
              });
          },
          _bindEvents:function(){
              var me=this;
            on(me.updatapwd, 'click', function (evt) {
                var oldpsd=me.oldpsd.value;
                var newpsd=me.newpsd.value;
                var renewpsd=me.renewpsd.value;
                var len=newpsd.length;
                if(oldpsd == null || oldpsd == ""){
                    Setalert.rompt("旧密码不能为空","alert-warning");
                }else if(newpsd == null|| newpsd == ""){
                    Setalert.rompt("新密码不能为空","alert-warning");
                }else if(renewpsd == null|| renewpsd == ""){
                    Setalert.rompt("确认密码不能为空","alert-warning");
                }else if(newpsd != renewpsd){
                    Setalert.rompt("两次输入的密码不一致","alert-warning");
                }else if(len<6 || len >20){
                    Setalert.rompt("新密码长度在 6 到 20 个字符","alert-warning");
                }else {
                    debugger
                    function setCookie(cname, cvalue, exdays) {
                        var d = new Date();
                        d.setTime(d.getTime() + (exdays*24*60*60*1000));
                        var expires = "expires="+d.toUTCString();
                        document.cookie = cname + "=" + cvalue + "; " + expires;
                      }

                    addrService.updatePwd(oldpsd,newpsd).then(function(result){
                        var re=JSON.parse(result);
                        if(re.code == 200){
                            Setalert.rompt(""+re.msg+"，即将退出，请重新登陆","alert-success",3000);
                            setCookie("jwt_token", ' ', -1);
                            me.funJump(5,'https://gtkj.wzgt.gov.cn:1021/ocn/login.html?userSystemFlag=2&tenantId=2&redirectUrl=http://10.36.128.241:18080/kjgzdt2/index.html');
                        }else{
                            Setalert.rompt(""+re.msg,"alert-warning");
                        }
                    },function(err){
                        Setalert.rompt("密码修改失败","alert-danger");
                    })
                }

            }.bind(this));

            on(me.close, 'click', function (evt) {
                 me.destroy();
            })
          },
        funJump:function(secs,surl){
            var me=this;
            console.log(secs) ;
            if(--secs>0){
                setTimeout(function(){ me.funJump(secs,surl)},1000);
            }else{
                location.href=surl;
            }
        }
      });
  });
  
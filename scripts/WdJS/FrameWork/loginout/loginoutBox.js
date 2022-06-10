define(["dojo/_base/declare", 
"dojo/text!./templates/loginoutBox.txt", 
"dijit/_TemplatedMixin", 
"dijit/_WidgetBase", 
"dojo/on", 
"dojo/dom-style", 
'dojo/parser', 
"dojo/dom-class", 
"dojo/dom-attr", 
"dojo/_base/lang", 
'dojo/_base/array',
"FrameWork/serviceUtil/gisocnService",
"./updatePwd"
],
    function (declare, template, TemplatedMixin, WidgetBase, on, domStyle, parser, domClass, domAttr, lang, array,gisocnService,updatePwd) {
        return declare([WidgetBase, TemplatedMixin], {
            templateString: template,
            data: null,
            _started: false,

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
                    // this.domNode.innerHTML= this.data.name; 
                    this.bindEvent();
                }.bind(this));

                this._started = true;
            },

            bindEvent: function () {
              var me=this;
            /*    color: #409eff;
                background: #ecf5ff;
            
                        */   
                on(me.domNode, 'mouseover', function (evt) {
                    domStyle.set(me.domNode,"display","block");
                }.bind(this));
                on(me.domNode, 'mouseout', function (evt) {
                    domStyle.set(me.domNode,"display","none");
                }.bind(this));

              dojo.query(".user_chose",me.domNode).forEach((dom) => {
                on(dom, 'mouseover', function (evt) {
                    domStyle.set(dom, 'background-color', '#ecf5ff');
                    domStyle.set(dom, 'color', '#409eff');
                }.bind(this));
                on(dom, 'mouseout', function (evt) {
                    domStyle.set(dom, 'background-color', 'white');
                    domStyle.set(dom, 'color', 'black');
                }.bind(this));
              })
               

                on(this.zx, 'click', function (evt) {
                    debugger
                    function setCookie(cname, cvalue, exdays) {
                        var d = new Date();
                        d.setTime(d.getTime() + (exdays*24*60*60*1000));
                        var expires = "expires="+d.toUTCString();
                        document.cookie = cname + "=" + cvalue + "; " + expires;
                      }
                      
                    domStyle.set(me.domNode, 'display', 'none');
                    gisocnService.destroyAccessToken().then(function (result) {
                        setCookie("jwt_token", ' ', -1);
                        window.location.href = "https://gtkj.wzgt.gov.cn:1021/ocn/login.html?userSystemFlag=2&tenantId=2&redirectUrl=http://10.36.128.241:18080/kjgzdt2/index.html"
                    },function (err) {
                          setCookie("jwt_token", ' ', -1);
                          window.location.href = "https://gtkj.wzgt.gov.cn:1021/ocn/login.html?userSystemFlag=2&tenantId=2&redirectUrl=http://10.36.128.241:18080/kjgzdt2/index.html"
                    })
                }.bind(this));

                on(this.xgmm, 'click', function (evt) {
                    var pwd =new  updatePwd({}).placeAt(dojo.body());
                    pwd.startup();
                })


            },
            
            showBox:function(pd){
                var me=this;
                if(pd){
                    domStyle.set(me.domNode,"display","block");
                }else{
                    // domStyle.set(me.domNode,"display","none");
                }
            }
        });
    });


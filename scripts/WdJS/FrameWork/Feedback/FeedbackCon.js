define([
    "dojo/_base/declare",
    "dojo/parser",
    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin",
    "dojo/text!./templates/FeedbackCon.txt",
    "dojo/on",
    "dojo/dom-style",
    "dojo/dom-class", 
    "dojo/dom-attr",
    "FrameWork/serviceUtil/feedbackService",
    "./FeedbackList",
    "./Feedbackpic"
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
      feedbackService,FeedbackList,Feedbackpic
  ) {
      return declare([_WidgetBase, _TemplatedMixin], {
          templateString: template,
          _picPath:[],
          _Feedbackpic:[],
          
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
            on(me.checkFile, "click", function () {
                me.upload_img.click();
            });

            on(me.upload_img, "change", function () {
                var fd = new FormData();
                console.log(me.upload_img.files[0]);
                fd.append("file", me.upload_img.files[0]);
                me._getimgPatg(fd);

            });
            // on(document,"keydow",function(e){
            //     if(e.keyCode=="65" && e.ctrlKey){
            //         me.paste_img(e);
            //     }
            // });
            me.pasteImg.addEventListener("paste",function(e) {
                if (e.clipboardData && e.clipboardData.items) {
                    console.log(e.clipboardData);
                    console.log(e.clipboardData.files)
                    if(e.clipboardData.files.length>0){
                        var fd = new FormData();
                        fd.append("file",e.clipboardData.files[0]);
                        me._getimgPatg(fd);
                    }
                    else{
                        alert("???????????????????????????");
                    }
                }
                else {
                    alert('?????????????????????');
                }
            },);

            on(me.save, "click", function () {
                var timestamp=new Date().getTime();
                var content=me.feedback_msg.value;
                var pic=JSON.stringify(me._picPath);
                if(content == null || content == ""){
                    alert("?????????????????????");
                    return ;
                }
                if(me._picPath.length >9){
                    alert("????????????9?????????");
                    return ;
                }
                if(me._picPath.length == 0){
                    pic=null;
                }
                var data={
                    "content": content,
                    "feedtime": timestamp,
                    "pic": pic,
                    "userid": user.id,
                    "username":user.username
                };
                me._addFeedback(data);
            });
            
            on(me.cancle, "click", function () {
               me.clearSubmit();
            });
          },
            paste_img(e) {
                console.log(1);
                if (e.clipboardData && e.clipboardData.items) {

                    var imageContent = e.clipboardData.getData('image/png');
                    ele = e.clipboardData.items
                    console.log(ele);
                    for (var i = 0; i < ele.length; ++i) {
                        //????????????
                        if (ele[i].kind == 'file' && ele[i].type.indexOf('image/') !== -1) {
                            var blob = ele[i].getAsFile();
                            window.URL = window.URL || window.webkitURL;
                            var blobUrl = window.URL.createObjectURL(blob);
                            // ?????????div????????????????????????????????????????????????????????????????????????
                            var new_img = document.createElement('img');
                            new_img.setAttribute('src', blobUrl);
                            new_img.setAttribute('blobdata', blob);
                            // ??????div????????????????????????
                            insertHtmlAtCaret(new_img);
                            // ??????????????????????????????????????????????????????????????????????????????
                            uploadImg(blob);
                        }
                        //????????????
                        else if (ele[i].kind === "string" && ele[i].type.indexOf('text/plain') != -1) {
                            //????????????????????????
                            ele[i].getAsString(
                                function (str) {
                                insertHtmlAtCaret(document.createTextNode(str));//???????????????????????? ???????????????????????????
                            })

                        }
                        else return;
                    }
                }
                else {
                    alert('?????????????????????');
                }
            },
            //   pic
          _getimgPatg:function(fd){
            var me=this;
            feedbackService.getpicPath(fd).then(function(re){
                if(re.code=='200'){
                    debugger
                    me._picPath.push(re.data);
                    me._showpic(re.data);
                }else{
                    alert(re.msg);
                }
            })
          },
          _showpic:function(path){
            var me=this;
            var feedbackpic=new Feedbackpic({_path : path}).placeAt(me.imgBox);
            feedbackpic.startup();
            feedbackpic.deletepic=me.deletepic.bind(me);
            me._Feedbackpic.push(feedbackpic);
          },
          deletepic:function(path){
            debugger
            var me=this;
            // me._picPath.pop(path);
            var index =  me._picPath.indexOf(path); 
            if (index > -1) { 
                me._picPath.splice(index, 1); 
            } 
          },
        //   
          _addFeedback:function(data){
            var me=this;
            feedbackService.addFeedback(JSON.stringify(data)).then(function(result){
                if(result.code=='200'){
                    me.clearSubmit();
                    me.list.addfresh();
                    alert("???????????????");

                }else{
                    alert(result.msg);
                }

            })
          },
          clearSubmit:function(){
            this.feedback_msg.value='';
            this._picPath=[];
            this.imgBox.innerHTML='';
          }
  
      });
  });
  
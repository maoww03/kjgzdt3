define([
    "dojo/_base/declare",
    "dojo/parser",
    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin",
    "dojo/text!./templates/DealReply.txt",
    "dojo/on",
    "dojo/dom-style",
    "dojo/dom-class", 
    "dojo/dom-attr",
    "dojo/_base/lang",
    "dojo/dom-construct",
    "FrameWork/Feedback/enlargeImage","FrameWork/serviceUtil/feedbackService"
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
      enlargeImage,feedbackService
  ) {
      return declare([_WidgetBase, _TemplatedMixin], {
        templateString: template,
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
            debugger
            if(me._style=="ck"){
                domStyle.set( me.feedback_re,"display","none");
                domStyle.set( me.btn,"display","none");
            }else if(me._style=="reply"){
                domStyle.set( me.feedback_re,"display","block");
                domStyle.set( me.btn,"display","block");
            }
            var aa=me._data;
            // time
            var time1=me._data.feedtime;
            me.time.innerHTML=me.formatDate(time1);
            // content
            me.content.innerHTML=me._data.content;
            // imgBox
            
            var aa=me._data.pic;
            if(!aa){
                aa=[];
            }else{
                aa=JSON.parse(aa);
            }
            if(aa.length>0){
                var innerHTML=``;
                var w=me.imgBox.offsetWidth;
                w=Math.floor(w/7);
                
                // var w=110;
                for(var i=0;i<aa.length;i++){
                    var src=appConfig.url+ `/feedback/getFile?path=${aa[i]}`;
                    // innerHTML+=`<img src="${src}" alt=""  style="width:  46%;height: 90%;vertical-align: middle; margin: 5px;">`;
                    innerHTML+=`<img src="${src}" alt=""   class="feedbackdetailpic" name= ""  style="vertical-align: middle; width:${w}px;height:${w}px; vertical-align: middle; margin: 5px;border:1px solid #ccc; border-radus:2px">`;
                }
                me.imgBox.innerHTML=innerHTML;
                
            }
            // replycontent
            me.replycontent.innerHTML=me._data.replycontent;
            
            me._bindEvents();
        });
        },
        

        _bindEvents:function(){
        var me=this;
        on(me.close, "click", function () {
            me.destroy();
        });  
        // qx
        on(me.qx, "click", function () {
            me.destroy();
        });
        // save
        on(me.save, "click", function () {
            var timestamp=new Date().getTime();
            var replyC=me.replycontent.value;
            if(replyC==''){
                alert("输入回复内容！");
                return;
            }
            var reply={
                "id": me._data.id,
                "replycontent": replyC,
                "replydate": timestamp
            }
            feedbackService.updatereply(JSON.stringify(reply) ).then(function(re){
                if(re.code=='200'){
                    alert("回复成功");
                    var pageNum=me._page;
                    me.Replyrefresh(pageNum);
                    me.destroy();

                }else{
                    alert(re.msg);
                }
            })
        });
        // feedbackdetailpic
        dojo.query(".feedbackdetailpic", me.imgBox).forEach((dom) => {
            // 双击放大
            on(dom, "dblclick", function () {
                if(me._enlargeImage != null){
                    me._enlargeImage.destroy();
                    me._enlargeImage=null;
                }
                me._enlargeImage=new enlargeImage({_src : dom.src}).placeAt(dojo.body());
                me._enlargeImage.startup();
            }); 
        });
        },

        Replyrefresh:function(pageNum){},

        formatDate:function(date) {
            var date = new Date(date);
            var YY = date.getFullYear() + '-';
            var MM = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
            var DD = (date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate());
            var hh = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
            var mm = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':';
            var ss = (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds());
            return YY + MM + DD ;
        },
        
      });
  });
  
define([
    "dojo/_base/declare",
    "dojo/parser",
    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin",
    "dojo/text!./templates/FeedbackDetals.txt",
    "dojo/on",
    "dojo/dom-style",
    "dojo/dom-class", 
    "dojo/dom-attr",
    "dojo/_base/lang",
    "dojo/dom-construct",
    "./enlargeImage"
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
      enlargeImage
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
                me.imgBox.innerHTML='无';
            }else{
                aa=JSON.parse(aa);  
            }
            if(aa.length>0){
                debugger
                var innerHTML=``;
                var w=me.imgBox.offsetWidth;
                w=Math.floor(w/7);
                
                for(var i=0;i<aa.length;i++){
                    var src=appConfig.url+ `/feedback/getFile?path=${aa[i]}`;
                    // innerHTML+=`<img src="${src}" alt=""  style="width:  46%;height: 90%;vertical-align: middle; margin: 5px;">`;
                    innerHTML+=`<img src="${src}" alt=""   class="feedbackdetailpic" name= ""  style="vertical-align: middle; width:${w}px;height:${w}px; vertical-align: middle; margin: 5px;border:1px solid #ccc; border-radus:2px">`;
                }
                me.imgBox.innerHTML=innerHTML;
                
            }
            
            // status
            if(!me._data.replycontent || !me._data.replydate){
                
                me.status.innerHTML="未处理";
                me.replydate.innerHTML='未处理';
                me.replycontent.innerHTML='未处理';
            }else{
                me.status.innerHTML="已处理";
                // replydate
                var time2=me._data.replydate;
                me.replydate.innerHTML=me.formatDate(time2);
                // replycontent
                me.replycontent.innerHTML=me._data.replycontent;
            }
            me._bindEvents();
            });
        },
        

        _bindEvents:function(){
        var me=this;
        on(me.close, "click", function () {
            me.destroy();
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
  
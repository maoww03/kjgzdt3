define([
    "dojo/_base/declare",
    "dojo/parser",
    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin",
    "dojo/text!./templates/DeaList_item.txt",
    "dojo/on",
    "dojo/dom-style",
    "dojo/dom-class", 
    "dojo/dom-attr",
    "dojo/_base/lang",
     "FrameWork/serviceUtil/feedbackService",
     "./DealReply"
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
      lang,feedbackService,DealReply
  ) {
      return declare([_WidgetBase, _TemplatedMixin], {
          templateString: template,
          _DealReply:null,

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
                me.num.innerHTML=me._num;
                me.username.innerHTML=me._data.username;
                // content
                me.content.innerHTML=me._data.content;
                // feedbacktime
                var time1=me._data.feedtime;
                if(!time1){
                    me.feedbacktime.innerHTML='---'
                }else{
                    me.feedbacktime.innerHTML=me.formatDate(time1);
                }
                // replaytime
                
                var time2=me._data.replydate;
                if(!time2){
                    me.replaytime.innerHTML='---'
                }else{
                    me.replaytime.innerHTML=me.formatDate(time2);
                }
                // status
                if(!me._data.replycontent || !me._data.replydate){
                    domStyle.set(me.status,"background","tomato");
                    me.status.innerHTML="未处理";
                }else{
                    // #65d004
                    domStyle.set(me.status,"background","#65d004");
                    me.status.innerHTML="已处理";
                }
                me._bindEvents();
              });
          },
          _bindEvents:function(){
            // detail
            var me=this;
            on(me.reply, "click", function () {
                var _DealReply=new DealReply({_data : me._data,_style:"reply",_page:me._nowPage}).placeAt(dojo.body());
                _DealReply.startup();
                _DealReply.Replyrefresh=me.Replyrefresh.bind(me);

            });
            // 查看
            on(me.ck, "click", function () {
                var _DealReply=new DealReply({_data : me._data,_style:"ck"}).placeAt(dojo.body());
                _DealReply.startup();
            });

          },
        Replyrefresh:function(page){},
        refresh:function(delpage,delnum){},
        formatDate:function(date) {
            var date = new Date(date);
            var YY = date.getFullYear() + '-';
            var MM = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
            var DD = (date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate());
            var hh = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
            var mm = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':';
            var ss = (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds());
            return YY + MM + DD ;
        }
      });
  });
  
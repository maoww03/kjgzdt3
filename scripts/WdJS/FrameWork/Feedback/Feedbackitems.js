define([
    "dojo/_base/declare",
    "dojo/parser",
    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin",
    "dojo/text!./templates/Feedbackitems.txt",
    "dojo/on",
    "dojo/dom-style",
    "dojo/dom-class", 
    "dojo/dom-attr",
    "dojo/_base/lang",
    "./FeedbackDetals",
     "FrameWork/serviceUtil/feedbackService"
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
      FeedbackDetals,feedbackService
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
                
                // count
                me.num.innerHTML=me._num;
                // content
                me.content.innerHTML=me._data.content;
                // feedbacktime
                var time1=me._data.feedtime;
                me.time.innerHTML=me.formatDate(time1);
                // status
                if(me._data.replycontent==null || me._data.replycontent=="" || me._data.replycontent==undefined || me._data.replydate==""){
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
            on(me.detail, "click", function () {
                var _FeedbackDetals=new FeedbackDetals({_data : me._data}).placeAt(dojo.body());
                _FeedbackDetals.startup();
            });
            on(me.delete, "click", function () {
                var id=me._data.id;
                feedbackService.deleteFeedback(id).then(function(re){
                    if(re.code=='200'){
                        me.refresh(me._nowPage,me._num);
                        alert("删除成功");
                    }else{
                        alert(re.msg);
                    }
                })
            });

          },
          refresh:function(delpage,delnum){

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
        }
      });
  });
  
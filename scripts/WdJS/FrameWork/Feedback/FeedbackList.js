define([
    "dojo/_base/declare",
    "dojo/parser",
    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin",
    "dojo/text!./templates/FeedbackList.txt",
    "dojo/on",
    "dojo/dom-style",
    "dojo/dom-class", 
    "dojo/dom-attr",
    "FrameWork/serviceUtil/feedbackService",
    "./Feedbackitems"
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
      feedbackService,Feedbackitems
  ) {
      return declare([_WidgetBase, _TemplatedMixin], {
          templateString: template,
          pageSize:10,
          _item:[],
          _nowPage:1,
          _total:null,
          _pageSum:null,
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
                // feedbackService
                me.setPageSum();
                me.setListItem(me._nowPage,user.id,null);
                me._bindEvents();
              });
          },

          _bindEvents:function(){
            var me=this;
            on(me.first, "click", function () {
                me._nowPage=1;
                me.setPageSum();
                me.setListItem(me._nowPage,user.id,null);
                me.now_page.innerHTML=me._nowPage;
            });
            // sx
            on(me.sx, "click", function () {
                me.setPageSum();
                me.setListItem(me._nowPage,user.id,null);
                me.now_page.innerHTML=me._nowPage;
            });

            on(me.pre, "click", function () {
                if(me._nowPage > 1){
                    me._nowPage-=1;
                    me.setListItem(me._nowPage,user.id,null);
                    me.now_page.innerHTML=me._nowPage;
                }
            });
            on(me.next, "click", function () {
                if(me._nowPage < me._pageSum){
                    me._nowPage+=1;
                    me.setListItem(me._nowPage,user.id,null);
                    me.now_page.innerHTML=me._nowPage;
                }
            });
            on(me.last, "click", function () {
                if(me._nowPage < me._pageSum){
                    me._nowPage=me._pageSum;
                    me.setListItem(me._nowPage,user.id,null);
                    me.now_page.innerHTML=me._nowPage;
                }
            });
          },
          setListItem:function(pageNum,userid,con){
            var me=this;
            var data={
                "pageNum": pageNum,
                "pageSize": me.pageSize
                }
            feedbackService.getFeedback(JSON.stringify(data),userid,con).then(function(result){
                if(result.code=='200'){
                    var re=result.data;
                    if(me._item.length > 0){
                        for(var i=0;i<me._item.length;i++){
                            me._item[i].destroy();
                        }
                    }
                    me._item=[];
                    for(var i=0;i<re.length;i++){
                        var _Feedbackitems=new Feedbackitems({_data:re[i] , _num : i+(pageNum-1)*me.pageSize+1 , _nowPage:pageNum}).placeAt(me.items);
                        _Feedbackitems.startup();
                        _Feedbackitems.refresh=me.delrefresh.bind(me);
                        me._item.push(_Feedbackitems);
                    }
                }else{
                    alert(result.msg);
                }
            })
          },

          setPageSum:function(){
            var me=this;
            var data={
                "pageNum":  1,
                "pageSize": me.pageSize
            }
            feedbackService.getFeedback(JSON.stringify(data),user.id,null).then(function(result){
                if(result.code=='200'){
                    me._total=result.total;
                    me._pageSum=Math.ceil(result.total/me.pageSize);
                    if(me._pageSum==0){
                        me.total_page.innerHTML=`共 1 页`;
                    }else{
                        me.total_page.innerHTML=`共 ${me._pageSum} 页`;
                    }
                }else{
                    alert(result.msg);
                }
            })
          },

          delrefresh:function(delpage,delnum){
            var me=this;
            if(me._total==delnum && delnum%me.pageSize == 1 && delpage>1){
                me.setListItem(delpage-1,user.id,null);
                me._nowPage=delpage-1;
                me.now_page.innerHTML=me._nowPage;
            }else{
                me.setListItem(delpage,user.id,null);
            }
            me.setPageSum();
          },
          addfresh:function(){
              debugger
            var me=this;
            me.setPageSum();
            me.setListItem(me._nowPage,user.id,null);
          }
          
  
      });
  });
  
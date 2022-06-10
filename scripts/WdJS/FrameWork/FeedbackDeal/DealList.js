define([
    "dojo/_base/declare",
    "dojo/parser",
    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin",
    "dojo/text!./templates/DealList.txt",
    "dojo/on",
    "dojo/dom-style",
    "dojo/dom-class", 
    "dojo/dom-attr",
    "FrameWork/serviceUtil/feedbackService",
    "./DeaList_item",
    "./DealFilter"
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
      feedbackService,
      DeaList_item,DealFilter
  ) {
      return declare([_WidgetBase, _TemplatedMixin], {
          templateString: template,
          pageSize:null,
          _item:[],
          _nowPage:1,
          _total:null,
          _pageSum:null,
          _content:null,
          _replycontent:null,

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
                  
                  var _DealFilter=new DealFilter().placeAt(me.filter);
                  _DealFilter._filterValue=me.filterValue.bind(me);
                  _DealFilter.startup();
                  debugger
                  var tmp=me.list_con.offsetHeight;
                  me.pageSize=Math.floor((tmp-100)/38);
                  me.setPageSum();
                  me.setListItem(me._nowPage,me._content,me._replycontent);
                  me._bindEvents();
              });
          },
          filterValue:function(content,reply){
            var me=this;
            me._content=content;
            me._replycontent=reply;
            me._nowPage=1;
            me.setPageSum();
            me.setListItem(me._nowPage,me._content,me._replycontent);
            me.now_page.innerHTML=me._nowPage;
          },

          _bindEvents:function(){
            var me=this;
            on(me.first, "click", function () {
                me._nowPage=1;
                me.setPageSum();
                me.setListItem(me._nowPage,me._content,me._replycontent);
                me.now_page.innerHTML=me._nowPage;
            });
            // sx
            on(me.sx, "click", function () {
                me.setPageSum();
                me.setListItem(me._nowPage,me._content,me._replycontent);
                me.now_page.innerHTML=me._nowPage;
            });

            on(me.pre, "click", function () {
                if(me._nowPage > 1){
                    me._nowPage-=1;
                    me.setListItem(me._nowPage,me._content,me._replycontent);
                    me.now_page.innerHTML=me._nowPage;
                }
            });
            on(me.next, "click", function () {
                if(me._nowPage < me._pageSum){
                    me._nowPage+=1;
                    me.setListItem(me._nowPage,me._content,me._replycontent);
                    me.now_page.innerHTML=me._nowPage;
                }
            });
            on(me.last, "click", function () {
                if(me._nowPage < me._pageSum){
                    me._nowPage=me._pageSum;
                    me.setListItem(me._nowPage,me._content,me._replycontent);
                    me.now_page.innerHTML=me._nowPage;
                }
            });
          },
          setListItem:function(pageNum,content,replycontent){
            var me=this;
            var data={
                "pageNum": pageNum,
                "pageSize": me.pageSize
                }
            feedbackService.getFeedbackReply(JSON.stringify(data),content,replycontent).then(function(result){
                if(result.code=='200'){
                    var re=result.data;
                    if(me._item.length > 0){
                        for(var i=0;i<me._item.length;i++){
                            me._item[i].destroy();
                        }
                    }
                    me._item=[];
                    for(var i=0;i<re.length;i++){
                        var _Feedbackitems=new DeaList_item({_data:re[i] , _num : i+(pageNum-1)*me.pageSize+1 , _nowPage:pageNum}).placeAt(me.items);
                        _Feedbackitems.startup();
                        _Feedbackitems.refresh=me.delrefresh.bind(me);
                        // 
                        _Feedbackitems.Replyrefresh=me.Replyrefresh.bind(me);
                        me._item.push(_Feedbackitems);
                    }
                }else{
                    alert(result.msg);
                }
            })
          },
          Replyrefresh:function(page){
            debugger
            var me=this;
            me.setListItem(page,me._content,me._replycontent);
          },
          setPageSum:function(){
            var me=this;
            var data={
                "pageNum":  1,
                "pageSize": me.pageSize
            }
            feedbackService.getFeedbackReply(JSON.stringify(data),me._content,me._replycontent).then(function(result){
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
                me.setListItem(delpage-1,me._content,me._replycontent);
                me._nowPage=delpage-1;
                me.now_page.innerHTML=me._nowPage;
            }else{
                me.setListItem(delpage,me._content,me._replycontent);
            }
            me.setPageSum();
          },
          addfresh:function(){
              debugger
            var me=this;
            me.setPageSum();
            me.setListItem(me._nowPage,1,null);
          }
        });
  });
  
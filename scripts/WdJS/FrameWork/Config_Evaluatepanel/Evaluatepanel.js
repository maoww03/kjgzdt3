define([
    "dojo/_base/declare",
    "dojo/parser",
    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin",
    "dojo/text!./templates/Evaluatepanel.txt",
    "dojo/on",
    "dojo/dom-style",
    "dojo/dom-class", 
    "dojo/dom-attr",
    "FrameWork/serviceUtil/ConfigurationService",
    "./Evaluate_item"
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
      ConfigurationService,Evaluate_item
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
                  
                //   var _DealFilter=new DealFilter().placeAt(me.filter);
                //   _DealFilter._filterValue=me.filterValue.bind(me);
                //   _DealFilter.startup();
                //   debugger
                  var tmp=me.list_con.offsetHeight;
                  me.pageSize=Math.floor((tmp-100)/38);
                  me._setpjs();
                  me.setPageSum();
                  me.setListItem(me._nowPage);
                  me._bindEvents();
              });
          },
         
          _bindEvents:function(){
            var me=this;
            on(me.first, "click", function () {
                me._nowPage=1;
                me.setPageSum();
                me.setListItem(me._nowPage);
                me.now_page.innerHTML=me._nowPage;
            });
            // sx
            on(me.sx, "click", function () {
                me.setPageSum();
                me.setListItem(me._nowPage);
                me.now_page.innerHTML=me._nowPage;
            });

            on(me.pre, "click", function () {
                if(me._nowPage > 1){
                    me._nowPage-=1;
                    me.setListItem(me._nowPage);
                    me.now_page.innerHTML=me._nowPage;
                }
            });
            on(me.next, "click", function () {
                debugger
                if(me._nowPage < me._pageSum){
                    me._nowPage+=1;
                    me.setListItem(me._nowPage);
                    me.now_page.innerHTML=me._nowPage;
                }
            });
            on(me.last, "click", function () {
                if(me._nowPage < me._pageSum){
                    me._nowPage=me._pageSum;
                    me.setListItem(me._nowPage);
                    me.now_page.innerHTML=me._nowPage;
                }
            });
          },
          setListItem:function(pageNum){
            var me=this;
            var data={
                "pageNum": pageNum,
                "pageSize": me.pageSize
                }
                ConfigurationService.getAllRating(JSON.stringify(data)).then(function(result){
                if(result.code=='200'){
                    var re=result.data;
                    if(me._item.length > 0){
                        for(var i=0;i<me._item.length;i++){
                            me._item[i].destroy();
                        }
                    }
                    me._item=[];
                    for(var i=0;i<re.length;i++){
                        var _Moduleitems=new Evaluate_item({_data:re[i] , _num : i+(pageNum-1)*me.pageSize+1 , _nowPage:pageNum}).placeAt(me.items);
                        _Moduleitems.startup();
                        _Moduleitems.refresh=me.delrefresh.bind(me);
                        // _Moduleitems.Replyrefresh=me.Replyrefresh.bind(me);
                        me._item.push(_Moduleitems);
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
            ConfigurationService.getAllRating(JSON.stringify(data)).then(function(result){
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
          _setpjs:function(){
              debugger
              var me=this;
            ConfigurationService.getpjs().then(function(re){
                if(re.code == '200'){
                    var _pjs=re.data.toFixed(2)
                    me.pjs.innerHTML=`评分平均数：${_pjs}分`;
                }else{
                    alert(re.msg);
                }
            });
          },

        //   -----------------refersh
        //   ==Evaluate_item ===delete
          delrefresh:function(delpage,delnum){
            var me=this;
            if(me._total==delnum && delnum%me.pageSize == 1 && delpage>1){
                me.setListItem(delpage-1);
                me._nowPage=delpage-1;
                me.now_page.innerHTML=me._nowPage;
            }else{
                me.setListItem(delpage);
            }
            me.setPageSum();
          },
        //   ==Module_create ===add
          addfresh:function(){
            debugger
            var me=this;
            me.setPageSum();
            me.setListItem(me._nowPage);
          },
          setWidgetVisible:function(visible){
            if (visible) {
                domStyle.set(this.domNode, 'display', 'block');
            } else {
                domStyle.set(this.domNode, 'display', 'none');
            }
        }
        });
  });
  
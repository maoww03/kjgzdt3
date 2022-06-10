define([
    "dojo/_base/declare",
    "dojo/parser",
    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin",
    "dojo/text!./templates/AttachmentBar.txt",
    "dojo/on",
    "dojo/dom-style",
    "dojo/dom-class", 
    "dojo/dom-attr",
    "FrameWork/serviceUtil/Attachment",
    "./Attachment_item",
    "./Attachment_upload"
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
      Attachment,
      Attachment_item,
      Attachment_upload
  ) {
      return declare([_WidgetBase, _TemplatedMixin], {
          templateString: template,
          pageSize:null,
          _item:[],
          _nowPage:1,
          _total:null,
          _pageSum:null,
          _userid:user.id,

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
                  me.pageSize=17;
                  me.setPageSum();
                  me.setListItem(me._nowPage);
                  me._bindEvents();
              });
          },
         
          _bindEvents:function(){
            var me=this;
            on(me.close,"click",function(){
                me.destroy();
            });
            on(me.first, "click", function () {
                me._nowPage=1;
                me.setPageSum();
                me.setListItem(me._nowPage);
                me.now_page.innerHTML=me._nowPage;
            });
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

            // create
            on(me.create, "click", function () {
                var _creat=new Attachment_upload( {pagenum:me._nowPage}).placeAt(dojo.body());
                _creat.startup();
                _creat._createRefresh=me._table1fresh.bind(me);
            });
            // restore
            on(me.restore, "click", function () {
                me.setListItem(me._nowPage);
            });

          },
          setListItem:function(pageNum){
            var me=this;
            Attachment.getAttachmentList(pageNum,me.pageSize, me._userid,"userid").then(function(result){
                if(result.code=='200'){
                    debugger
                    var re=result.data;
                    if(me._item.length > 0){
                        for(var i=0;i<me._item.length;i++){
                            me._item[i].destroy();
                        }
                    }
                    me._item=[];
                    for(var i=0;i<re.length;i++){
                        var _Queryitems=new Attachment_item({_data:re[i] , _num : i+(pageNum-1)*me.pageSize+1 , _nowPage:pageNum, _type:"user"}).placeAt(me.items);
                        _Queryitems.startup();
                        _Queryitems._table1fresh=me._table1fresh.bind(me);
                       
                        me._item.push(_Queryitems);
                    }
                }else{
                    alert(result.msg);
                }
            })
          },
        
          setPageSum:function(){
              var me=this;
            Attachment.getAttachmentList(1,me.pageSize,me._userid,"userid").then(function(result){
                debugger
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

          _table1fresh:function(delpage,delnum){
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
          

          setWidgetVisible:function(visible){
            if (visible) {
                domStyle.set(this.domNode, 'display', 'block');
            } else {
                domStyle.set(this.domNode, 'display', 'none');
            }
        }
        });
  });
  
define([
    "dojo/_base/declare",
    "dojo/parser",
    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin",
    "dojo/text!./templates/AttachmentDownView_kjgzdt.txt",
    "dojo/on",
    "dojo/dom-style",
    "dojo/dom-class", 
    "dojo/dom-attr",
    "FrameWork/serviceUtil/Attachment",
    "./Attachment_item"
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
      Attachment_item
  ) {
      return declare([_WidgetBase, _TemplatedMixin], {
          templateString: template,
          pageSize:null,
          _item:[],
          _nowPage:1,
          _total:null,
          _pageSum:null,
          _regionCode:[
          {code:"330300",region:"温州市"},{code:"330302",region:"鹿城区"},{code:"330303",region:"龙湾区"},{code:"330304",region:"瓯海区"},{code:"330305",region:"洞头区"},{code:"330324",region:"永嘉县"},{code:"330326",region:"平阳县"},{code:"330327",region:"苍南县"},{code:"330328",region:"文成县"},{code:"330329",region:"泰顺县"},{code:"330381",region:"瑞安市"},{code:"330382",region:"乐清市"},{code:"330383",region:"龙港市"}],
        _selectCode:330300,

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
                  var innerHTML;
                  me._regionCode.forEach(el=> {
                    var code=el.code;
                    var region=el.region;
                    innerHTML+=`<option value=${code}>${region}(${code})</option>`;
                    });
                 me.RegionCodeSelect.innerHTML+=innerHTML;

                  me.pageSize=17;
                  me.setPageSum();
                  me.setListItem(me._nowPage);
                  me._bindEvents();
              });
          },
         
          _bindEvents:function(){
            var me=this;
            // close
            on(me.close,"click",function(){
                me.destroy();
            });
            on(me.RegionCodeSelect, "change", function () {
                var aa=me.RegionCodeSelect.value;
                me._selectCode=Number(aa);
                me._nowPage=1;
                me.setListItem(me._nowPage);
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

          },
          setListItem:function(pageNum){
            var me=this;
            debugger
            Attachment.getAttachmentList(pageNum,me.pageSize, me._selectCode,"region").then(function(result){
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
                        var _Queryitems=new Attachment_item({_data:re[i] , _num : i+(pageNum-1)*me.pageSize+1 , _nowPage:pageNum,_type:"admin"}).placeAt(me.items);
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
            Attachment.getAttachmentList(1,me.pageSize,me._selectCode,"region").then(function(result){
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
  
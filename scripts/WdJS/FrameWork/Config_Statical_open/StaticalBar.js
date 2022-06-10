define([
    "dojo/_base/declare",
    "dojo/parser",
    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin",
    "dojo/text!./templates/StaticalBar.txt",
    "dojo/on",
    "dojo/dom-style",
    "dojo/dom-class", 
    "dojo/dom-attr",
    "FrameWork/serviceUtil/ConfigurationService",
    "./Statical_item",
    "./Statical_create",
    "./Statical_item2",
    "./Statical_create2"
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
      ConfigurationService,
      Statical_item,
      Statical_create,
      Statical_item2,
      Statical_create2
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
          _submenuitems:[],
          _filedArr:[],

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
                var _creat=new Statical_create({_data:null , _style:"create",_page:me._nowPage}).placeAt(dojo.body());
                _creat.startup();
                _creat._createRefresh=me._table1fresh.bind(me);
            });
            on(me.create2, "click", function () {
                var _creat=new Statical_create2({_data:null , _style:"create",_Layerid:me._nav.layerid,_filedArr:me._filedArr,_navId:me._navId}).placeAt(dojo.body());
                _creat.startup();
                _creat._table2Fresh=me._table2Fresh.bind(me);
            });


            on(me.back2, "click", function () {
                domStyle.set(me.table2,"display","none");
                domStyle.set(me.table1,"display","block");
             });

            //  search
            on(me.search, "keyup", function (e) {
                var theEvent = window.event || e;
                var code = theEvent.keyCode || theEvent.which || theEvent.charCode;
                // if (code == 13) {
                   me.setListItem(me._nowPage,me.search.value);
                // }
                
             });
          },
          setListItem:function(pageNum,layerName){
            var me=this;
            ConfigurationService.getStatical(pageNum,me.pageSize,layerName).then(function(result){
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
                        if(re[i].regionCode == regionCode){
                            var _Staticalitems=new Statical_item({_data:re[i] , _num : i+(pageNum-1)*me.pageSize+1 , _nowPage:pageNum}).placeAt(me.items);
                            _Staticalitems.startup();
                            _Staticalitems._table1fresh=me._table1fresh.bind(me);
                            _Staticalitems._setItems2=me._setItems2.bind(me);
                           
                            me._item.push(_Staticalitems);
                        }
                      
                    }
                }else{
                    console.log(result.msg);
                }
            })
          },
        
          setPageSum:function(){
            var me=this;
            ConfigurationService.getStatical(1,me.pageSize).then(function(result){
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
                    console.log(result.msg);
                }
            })
          },

          _setItems2:function(nav){
            var me=this;
            domStyle.set(me.table1,"display","none");
            domStyle.set(me.table2,"display","block");
            var id=nav.id;
            me._navId=nav.id;
            me._nav=nav;
            ConfigurationService.getStaticalfield(id).then(function(re){
                if(re.code == '200'){
                    var data=re.data;
                    debugger
                    var supertext=nav.layerName;
                    if(me._submenuitems.length > 0){
                        for(var i=0;i<me._submenuitems.length;i++){
                            me._submenuitems[i].destroy();
                        }
                    }
                    me._submenuitems=[];
                    me._filedArr=[];
                    for(var i=0;i<data.length;i++){
                        me._filedArr.push(data[i].field);
                        var subitems=new Statical_item2({_data:data[i],_num:i,_supertext:supertext}).placeAt(me.items2);
                        subitems._table2Fresh=me._table2Fresh.bind(me);
                        subitems.startup();
                        me._submenuitems.push(subitems);
                    }
                }else{
                    console.log(re.msg);
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
          _table2Fresh:function(){
              var me=this;
              me._setItems2(me._nav);
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
  
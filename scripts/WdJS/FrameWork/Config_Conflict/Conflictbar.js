define([
    "dojo/_base/declare",
    "dojo/parser",
    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin",
    "dojo/text!./templates/Conflictbar.txt",
    "dojo/on",
    "dojo/dom-style",
    "dojo/dom-class", 
    "dojo/dom-attr",
    "FrameWork/serviceUtil/ConfigurationService",
    "./Conflict_item",
    "./Conflict_create",
    "./Conflict_item2",
    "./Conflict_create2",
    "./Conflict_item3",
    "./Conflict_create3",
    "./Conflict_item4",
    "./Conflict_create4",
    "./Conflict_navi"
  
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
      Conflict_item,
      Conflict_create,
      Conflict_item2,
      Conflict_create2,
      Conflict_item3,
      Conflict_create3,
      Conflict_item4,
      Conflict_create4,
      Conflict_navi
   
  ) {
      return declare([_WidgetBase, _TemplatedMixin], {
          templateString: template,
          pageSize:null,
          _item:[],
          _subitems:[],
          _subitems2:[],
          _subitems4:[],
          _nav:null,
          _nav2:null,
          _nav3:null,
          _naviArr:{"table1":null,"table2":null,"table3":null},
          _regionCode:[{code:"000000",region:"全部"},{code:"330300",region:"温州市"},{code:"330301",region:"市辖区"},{code:"330302",region:"鹿城区"},{code:"330303",region:"龙湾区"},{code:"330304",region:"瓯海区"},{code:"330305",region:"洞头区"},{code:"330324",region:"永嘉县"},{code:"330326",region:"平阳县"},{code:"330327",region:"苍南县"},{code:"330328",region:"文成县"},{code:"330329",region:"泰顺县"},{code:"330381",region:"瑞安市"},{code:"330382",region:"乐清市"},{code:"330383",region:"龙港市"}],
          _selectCode:000000,

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

                var innerHTML=``;
                me._regionCode.forEach(el=> {
                    var code=el.code;
                    var region=el.region;
                    if(code == "000000"){
                        innerHTML+=`<option value=${code}>${region}</option>`;
                    }else{
                        innerHTML+=`<option value=${code}>${region}(${code})</option>`;
                    }

                });
                me.RegionCodeSelect.innerHTML+=innerHTML;
                
                  me.setListItem();
                  me._bindEvents();
              });
          },
         
          _bindEvents:function(){
            var me=this;
             // create
            on(me.create, "click", function () {
                var _creat=new Conflict_create({_data:null ,_style:"create"}).placeAt(dojo.body());
                _creat.startup();
                _creat._createRefresh=me._barfresh.bind(me);
            });
            on(me.create2, "click", function () {
                
                var _createSubmenu= new Conflict_create2({_data : null,_navId:me._nav.id,_style:"create"}).placeAt(dojo.body());
                _createSubmenu.startup();
                _createSubmenu._createRefresh=me._table2Fresh.bind(me);
            });
            on(me.create3, "click", function () {
                
                var _createSubmenu3= new Conflict_create3({_data : null,_nav2Id:me._nav2.id,_style:"create"}).placeAt(dojo.body());
                _createSubmenu3.startup();
                _createSubmenu3._createRefresh=me._table3Fresh.bind(me);
            });
            on(me.create4, "click", function () {
                var _createSubmenu4= new Conflict_create4({_data : null,_nav3Id:me._nav3.id,_style:"create"}).placeAt(dojo.body());
                _createSubmenu4.startup();
                _createSubmenu4._createRefresh=me._table4Fresh.bind(me);
            });


             // back2
            on(me.back2, "click", function () {
                debugger
               domStyle.set(me.table4,"display","none");
               domStyle.set(me.table3,"display","none");
               domStyle.set(me.table2,"display","none");
               domStyle.set(me.table1,"display","block");
               me._naviArr.table1.destroy();
               me._naviArr.table1=null;
              
            });
            on(me.back3, "click", function () {
                debugger
                domStyle.set(me.table4,"display","none");
                domStyle.set(me.table3,"display","none");
                domStyle.set(me.table2,"display","block");
                domStyle.set(me.table1,"display","noen");
               me._naviArr.table2.destroy();
               me._naviArr.table2=null;
             });
             on(me.back4, "click", function () {
                 debugger
                domStyle.set(me.table4,"display","none");
                domStyle.set(me.table3,"display","block");
                domStyle.set(me.table2,"display","none");
                domStyle.set(me.table1,"display","noen");
               me._naviArr.table3.destroy();
               me._naviArr.table3=null;
             });

             on(me.RegionCodeSelect, "change", function () {
                var aa=me.RegionCodeSelect.value;
                me._selectCode=Number(aa);
                if(aa == "000000"){
                    me.setListItem();
                }else {
                    me.setListItem1(me._selectCode);
                }
            });

           
          },
          setListItem1:function(code){
            var me=this;
            ConfigurationService.getAllConflictBycode(code).then(function(result){
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
                        var _Conflictitems=new Conflict_item({_data:re[i] , _num : i}).placeAt(me.items);
                        _Conflictitems._itemRefresh=me._barfresh.bind(me);

                        _Conflictitems._setItems2=me._setItems2.bind(me);
                        _Conflictitems._table2Fresh=me._table2Fresh;

                        _Conflictitems.startup();
                        me._item.push(_Conflictitems);
                    }
                }else{
                    alert(result.msg);
                }
            })
          },
          setListItem:function(){
            var me=this;
            ConfigurationService.getAllConflict().then(function(result){
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
                        var _Conflictitems=new Conflict_item({_data:re[i] , _num : i}).placeAt(me.items);
                        _Conflictitems._itemRefresh=me._barfresh.bind(me);

                        _Conflictitems._setItems2=me._setItems2.bind(me);
                        _Conflictitems._table2Fresh=me._table2Fresh;

                        _Conflictitems.startup();
                        me._item.push(_Conflictitems);
                    }
                }else{
                    alert(result.msg);
                }
            })
          },

          _barfresh:function(){
            this.setListItem();
          },

        //  table 2
          _setItems2:function(nav){
            var me=this;
            if(me._naviArr.table1 == null){
                var table1=new Conflict_navi({_msg:nav,_type:"table1"}).placeAt(me.navi);
                table1.startup();
                me._naviArr.table1=table1;
            }
            domStyle.set(me.table1,"display","none");
            domStyle.set(me.table2,"display","block");
            domStyle.set(me.table3,"display","none");
            domStyle.set(me.table4,"display","none");
            var id=nav.id;
            me._nav=nav;
            ConfigurationService.getConflict2(id).then(function(re){
                if(re.code == '200'){
                    var data=re.data;
                    var supertext=nav.groupname;
                    if(me._subitems.length > 0){
                        for(var i=0;i<me._subitems.length;i++){
                            me._subitems[i].destroy();
                        }
                    }
                    me._subitems=[];
                    for(var i=0;i<data.length;i++){
                        var subitems=new Conflict_item2({_data:data[i],_num:i,_super:nav}).placeAt(me.items2);
                        subitems._table2Fresh=me._table2Fresh.bind(me);
                        subitems._setItems3=me._setItems3.bind(me);
                        subitems.startup();
                        me._subitems.push(subitems);
                    }
                }else{
                    alert(re.msg);
                }
            })
           
           
          },
          _setItems3:function(nav2){
            debugger
            var me=this;
            if(me._naviArr.table2 == null){
                var table2=new Conflict_navi({_msg:nav2,_type:"table2"}).placeAt(me.navi);
                table2.startup();
                me._naviArr.table2=table2;
            }

            domStyle.set(me.table1,"display","none");
            domStyle.set(me.table2,"display","none");
            domStyle.set(me.table3,"display","block");
            domStyle.set(me.table4,"display","none");
            var id=nav2.id;
            me._nav2=nav2;
            ConfigurationService.getConflict3(id).then(function(re){
                if(re.code == '200'){
                    var data=re.data;
                    var nav1text=me._nav.groupname;
                    var nav2text=nav2.groupname;
                    if(me._subitems2.length > 0){
                        for(var i=0;i<me._subitems2.length;i++){
                            me._subitems2[i].destroy();
                        }
                    }
                    me._subitems2=[];
                    for(var i=0;i<data.length;i++){
                        if(data[i] != null){
                            var subitems=new Conflict_item3({_data:data[i],_num:i,_nav1text:nav1text,_nav2text:nav2text,_nav2Id:nav2.id}).placeAt(me.items3);
                            subitems._table3Fresh=me._table3Fresh.bind(me);
                            subitems._setItems4=me._setItems4.bind(me);
                            subitems.startup();
                            me._subitems2.push(subitems);
                        }

                    }
                }else{
                    alert(re.msg);
                }
            })

          },

          _setItems4:function(nav3){
            
            var me=this;
            if(me._naviArr.table3 == null){
                var table3=new Conflict_navi({_msg:nav3,_type:"table3"}).placeAt(me.navi);
                table3.startup();
                me._naviArr.table3=table3;
            }
            domStyle.set(me.table1,"display","none");
            domStyle.set(me.table2,"display","none");
            domStyle.set(me.table3,"display","none");
            domStyle.set(me.table4,"display","block");
            var id=nav3.id;
            me._nav3=nav3;
            ConfigurationService.getConflict4(id).then(function(re){
                if(re.code == '200'){
                    var data=re.data;
                    if(me._subitems4.length > 0){
                        for(var i=0;i<me._subitems4.length;i++){
                            me._subitems4[i].destroy();
                        }
                    }
                    me._subitems4=[];
                    for(var i=0;i<data.length;i++){
                        if(data[i] != null){
                            var subitems=new Conflict_item4({_data:data[i],_num:i,_nav3Id:nav3.id}).placeAt(me.items4);
                            subitems._table4Fresh=me._table4Fresh.bind(me);
                          
                            subitems.startup();
                            me._subitems4.push(subitems);
                        }

                    }
                }else{
                    alert(re.msg);
                }
            })

          },
          _table4Fresh:function(){
            this._setItems4(this._nav3);
          },
          _table3Fresh:function(){
            this._setItems3(this._nav2);
          },
          _table2Fresh:function(){
            this._setItems2(this._nav);
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
  
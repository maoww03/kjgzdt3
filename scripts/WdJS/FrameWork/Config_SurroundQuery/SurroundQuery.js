define([
    "dojo/_base/declare",
    "dojo/parser",
    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin",
    "dojo/text!./templates/SurroundQuery.txt",
    "dojo/on",
    "dojo/dom-style",
    "dojo/dom-class", 
    "dojo/dom-attr",
    "FrameWork/serviceUtil/ConfigurationService",
    "./SurroundQuery_item",
    "./SurroundQuery_create",
    "./SurroundQuery_item2",
    "./SurroundQuery_create2"
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
      SurroundQuery_item,
      SurroundQuery_create,
      SurroundQuery_item2,
      SurroundQuery_create2
  ) {
      return declare([_WidgetBase, _TemplatedMixin], {
          templateString: template,
          pageSize:null,
          _item:[],
          _subitems:[],
          _moduleitems:[],
          _navId:null,
          _nav:null,
          _menu:null,
          _menuModuleId:[],
          _naviArr:[],
          _regionCode:[{code:"000000",region:"全部"},
          {code:"330300",region:"温州市"},{code:"330301",region:"市辖区"},{code:"330302",region:"鹿城区"},{code:"330303",region:"龙湾区"},{code:"330304",region:"瓯海区"},{code:"330305",region:"洞头区"},{code:"330324",region:"永嘉县"},{code:"330326",region:"平阳县"},{code:"330327",region:"苍南县"},{code:"330328",region:"文成县"},{code:"330329",region:"泰顺县"},{code:"330381",region:"瑞安市"},{code:"330382",region:"乐清市"},{code:"330383",region:"龙港市"}],
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
                var _creat=new SurroundQuery_create({_data:null ,_style:"create"}).placeAt(dojo.body());
                _creat.startup();
                _creat._createRefresh=me._barfresh.bind(me);
            });
            on(me.create2, "click", function () {
                
                var _createSubmenu= new SurroundQuery_create2({_data : null,_navId:me._navId,_style:"create",_naviArr:me._naviArr}).placeAt(dojo.body());
                _createSubmenu.startup();
                _createSubmenu._createRefresh=me._table2Fresh.bind(me);
            });

             // back2
            on(me.back2, "click", function () {
               domStyle.set(me.table2,"display","none");
               domStyle.set(me.table1,"display","block");
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
          setListItem:function(){
            var me=this;
            ConfigurationService.getSurroundquery().then(function(result){
                if(result.code=='200'){
                    debugger
                    var re=result.data;
                    if(me._item.length > 0){
                        for(var i=0;i<me._item.length;i++){
                            me._item[i].destroy();
                        }
                    }
                    me._item=[];
                    me._naviArr=[];
                    for(var i=0;i<re.length;i++){
                        me._naviArr.push(re[i]);
                        var _SurroundQuery=new SurroundQuery_item({_data:re[i] , _num : i}).placeAt(me.items);
                        _SurroundQuery._itemRefresh=me._barfresh.bind(me);
                        _SurroundQuery._setItems2=me._setItems2.bind(me);
                        _SurroundQuery._table2Fresh=me._table2Fresh;
                        _SurroundQuery.startup();
                        me._item.push(_SurroundQuery);
                    }
                }else{
                    alert(result.msg);
                }
            })
          },
          setListItem1:function(code){
            var me=this;
            ConfigurationService.getSurroundqueryBycode(code).then(function(result){
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
                        me._naviArr.push(re[i]);
                        var _SurroundQuery=new SurroundQuery_item({_data:re[i] , _num : i}).placeAt(me.items);
                        _SurroundQuery._itemRefresh=me._barfresh.bind(me);
                        _SurroundQuery._setItems2=me._setItems2.bind(me);
                        _SurroundQuery._table2Fresh=me._table2Fresh;
                        _SurroundQuery.startup();
                        me._item.push(_SurroundQuery);
                    }
                }else{
                    alert(result.msg);
                }
            })
          },
        

          _barfresh:function(){
             var me=this;
              var aa=me.RegionCodeSelect.value;
              if(aa == "000000"){
                this.setListItem();
              }else{
                this.setListItem1(me._selectCode);
              }
            
          },

        //  table 2
          _setItems2:function(nav){
              debugger
            var me=this;
            domStyle.set(me.table1,"display","none");
            domStyle.set(me.table2,"display","block");
            var id=nav.id;
            me._navId=nav.id;
            me._nav=nav;
            ConfigurationService.getSurroundquery2(id).then(function(re){
                if(re.code == '200'){
                    var data=re.data;
                    var supertext=nav.text;
                    if(me._subitems.length > 0){
                        for(var i=0;i<me._subitems.length;i++){
                            me._subitems[i].destroy();
                        }
                    }
                    me._subitems=[];
                    for(var i=0;i<data.length;i++){
                        var subitems=new SurroundQuery_item2({_data:data[i],_num:i,_super:nav, _naviArr:me._naviArr}).placeAt(me.items2);
                        subitems._table2Fresh=me._table2Fresh.bind(me);
                        subitems.startup();
                        me._subitems.push(subitems);
                    }
                }else{
                    alert(re.msg);
                }
            })
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
  
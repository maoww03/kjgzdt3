define([
    "dojo/_base/declare",
    "dojo/parser",
    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin",
    "dojo/text!./templates/Navigationalbar.txt",
    "dojo/on",
    "dojo/dom-style",
    "dojo/dom-class", 
    "dojo/dom-attr",
    "FrameWork/serviceUtil/ConfigurationService",
    "./Navigation_item",
    "./Navigation_create",
    "./Navigation_item2",
    "./Navigation_createSubmenu",
    "./Navigation_item3",
    "./Navigation_createModule"
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
      Navigation_item,
      Navigation_create,
      Navigation_item2,
      Navigation_createSubmenu,
      Navigation_item3,
      Navigation_createModule
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
                  me.setListItem();
                  me._bindEvents();
              });
          },
         
          _bindEvents:function(){
            var me=this;
             // create
            on(me.create, "click", function () {
                var _creat=new Navigation_create({_data:null ,_style:"create"}).placeAt(dojo.body());
                _creat.startup();
                _creat._createRefresh=me._barfresh.bind(me);
            });
            on(me.create2, "click", function () {
                
                var _createSubmenu= new Navigation_createSubmenu({_data : null,_navId:me._navId,_style:"create",_naviArr:me._naviArr}).placeAt(dojo.body());
                _createSubmenu.startup();
                _createSubmenu._createRefresh=me._table2Fresh.bind(me);
            });
            on(me.create3, "click", function () {
                
                var _createMenuMoudule= new Navigation_createModule({_menuId:me._menu.id,_ModuleIdArr:me._menuModuleId}).placeAt(dojo.body());
                _createMenuMoudule.startup();
                _createMenuMoudule._table3Fresh=me._table3Fresh.bind(me);
            });

             // back2
            on(me.back2, "click", function () {
               domStyle.set(me.table3,"display","none");
               domStyle.set(me.table2,"display","none");
               domStyle.set(me.table1,"display","block");
            });
            on(me.back3, "click", function () {
                domStyle.set(me.table3,"display","none");
                domStyle.set(me.table2,"display","block");
                domStyle.set(me.table1,"display","noen");
             });


           
          },
          setListItem:function(){
            var me=this;
            ConfigurationService.getNavi(0).then(function(result){
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
                        var _Navigationitems=new Navigation_item({_data:re[i] , _num : i}).placeAt(me.items);
                        _Navigationitems._itemRefresh=me._barfresh.bind(me);

                        _Navigationitems._setItems2=me._setItems2.bind(me);
                        _Navigationitems._table2Fresh=me._table2Fresh;

                        _Navigationitems.startup();
                        me._item.push(_Navigationitems);
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
              debugger
            var me=this;
            domStyle.set(me.table1,"display","none");
            domStyle.set(me.table2,"display","block");
            domStyle.set(me.table3,"display","none");
            var id=nav.id;
            me._navId=nav.id;
            me._nav=nav;
            ConfigurationService.getsubNavi(id).then(function(re){
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
                        var subitems=new Navigation_item2({_data:data[i],_num:i,_super:nav, _naviArr:me._naviArr}).placeAt(me.items2);
                        subitems._table2Fresh=me._table2Fresh.bind(me);

                        //_setItems3
                        subitems._setItems3=me._setItems3.bind(me);

                        subitems.startup();
                        me._subitems.push(subitems);
                    }
                }else{
                    alert(re.msg);
                }
            })
           
           
          },
          _setItems3:function(menu){
            debugger
            var me=this;
            domStyle.set(me.table1,"display","none");
            domStyle.set(me.table2,"display","none");
            domStyle.set(me.table3,"display","block");
            var id=menu.id;
            me._menu=menu;
            ConfigurationService.getSubMenuModule(id).then(function(re){
                if(re.code == '200'){
                    var data=re.data.subItem;
                    var navtext=me._nav.text;
                    var menutext=menu.text;
                    if(me._moduleitems.length > 0){
                        for(var i=0;i<me._moduleitems.length;i++){
                            me._moduleitems[i].destroy();
                        }
                    }
                    me._moduleitems=[];
                    me._menuModuleId=[]
                    for(var i=0;i<data.length;i++){
                        if(data[i] != null && data[i].id != null){
                            me._menuModuleId.push(data[i].id);
                        }
                        if(data[i] != null){
                            var subitems=new Navigation_item3({_data:data[i],_num:i,_navtext:navtext,_menutext:menutext,_menuid:menu.id,_modulesId:me._menuModuleId}).placeAt(me.items3);

                            subitems._table3Fresh=me._table3Fresh.bind(me);
                            subitems.startup();
                            me._moduleitems.push(subitems);
                        }
                        
                    }
                }else{
                    alert(re.msg);
                }
            })

          },
          _table3Fresh:function(){
            this._setItems3(this._menu);
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
  
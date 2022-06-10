define([
    "dojo/_base/declare",
    "dojo/parser",
    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin",
    "dojo/text!./templates/Toolbar.txt",
    "dojo/on",
    "dojo/dom-style",
    "dojo/dom-class", 
    "dojo/dom-attr",
    "FrameWork/serviceUtil/ConfigurationService",
    "./Toolbar_item",
    "./Toolbar_create",
    "./Toolbar_item2",
    "./Toolbar_create2",
    "./Toolbar_item3",
    "./Toolbar_create3",
    "./Toolbar_item4"
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
      ConfigurationService,Toolbar_item,Toolbar_create,Toolbar_item2,Toolbar_create2,Toolbar_item3,Toolbar_create3,Toolbar_item4
  ) {
      return declare([_WidgetBase, _TemplatedMixin], {
          templateString: template,
          pageSize:null,
          _item:[],
          _submenuitems:[],
          _moduleitems:[],
          _siderbaritems:[],
          _siderbarModuleId:[],
        

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
                  me.setListItem();
                  me._bindEvents();
              });
          },
         
          _bindEvents:function(){
            var me=this;
           
            // create
            on(me.create, "click", function () {
                var _creat=new Toolbar_create({_data:null , _style:"create"}).placeAt(dojo.body());
                _creat._createRefresh=me._barfresh.bind(me);
                _creat.startup();
            });

            on(me.create2, "click", function () {
                var _createSubmenu= new Toolbar_create2({_toolbarId:me._navId, _style:"create"}).placeAt(dojo.body());
                _createSubmenu.startup();
                _createSubmenu._createRefresh=me._table2Fresh.bind(me);
            });

            on(me.create3, "click", function () {
                var _createMenuMoudule= new Toolbar_create3({_menuId:me._menu.id,_ModuleIdArr:me._menuModuleId,_type:'toolbar'}).placeAt(dojo.body());
                _createMenuMoudule.startup();
                _createMenuMoudule._table3Fresh=me._table3Fresh.bind(me);
            });

            on(me.create4, "click", function () {
                debugger
                var _createMenuMoudule= new Toolbar_create3({_menuId:me._nav.id,_ModuleIdArr:me._siderbarModuleId,_type:'siderbar'}).placeAt(dojo.body());
                _createMenuMoudule.startup();
                _createMenuMoudule._table4Fresh=me._table4Fresh.bind(me);
            });


             // back2
            on(me.back2, "click", function () {
                domStyle.set(me.table4,"display","none");
                domStyle.set(me.table3,"display","none");
                domStyle.set(me.table2,"display","none");
                domStyle.set(me.table1,"display","block");
             });
             on(me.back3, "click", function () {
                domStyle.set(me.table4,"display","none");
                domStyle.set(me.table3,"display","none");
                domStyle.set(me.table2,"display","block");
                domStyle.set(me.table1,"display","none");
             });
             on(me.back4, "click", function () {
                domStyle.set(me.table4,"display","none");
                domStyle.set(me.table3,"display","none");
                domStyle.set(me.table2,"display","none");
                domStyle.set(me.table1,"display","block");
             });
          },
          setListItem:function(){
            var me=this;
            ConfigurationService.getAllToolbar(0).then(function(result){
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
                        var _Toolbaritems=new Toolbar_item({_data:re[i] , _num : i}).placeAt(me.items);
                        _Toolbaritems._itemRefresh=me._barfresh.bind(me);

                        _Toolbaritems._setItems2=me._setItems2.bind(me);
                        _Toolbaritems._setItems4=me._setItems4.bind(me);
                        _Toolbaritems._table2Fresh=me._table2Fresh;

                        _Toolbaritems.startup();
                        me._item.push(_Toolbaritems);
                    }
                }else{
                    alert(result.msg);
                }
            })
          },
           _setItems2:function(nav){
                var me=this;
                domStyle.set(me.table1,"display","none");
                domStyle.set(me.table2,"display","block");
                domStyle.set(me.table3,"display","none");
                domStyle.set(me.table4,"display","none");
                var id=nav.id;
                me._navId=nav.id;
                me._nav=nav;
                ConfigurationService.gettoolbarSubmenus(id).then(function(re){
                    if(re.code == '200'){
                        debugger
                        var data=re.data;
                        var supertext=nav.text;
                        if(me._submenuitems.length > 0){
                            for(var i=0;i<me._submenuitems.length;i++){
                                me._submenuitems[i].destroy();
                            }
                        }
                        me._submenuitems=[];
                        for(var i=0;i<data.length;i++){
                            var subitems=new Toolbar_item2({_data:data[i],_num:i,_supertext:supertext}).placeAt(me.items2);
                            subitems._table2Fresh=me._table2Fresh.bind(me);
                            //_setItems3
                            subitems._setItems3=me._setItems3.bind(me);

                            subitems.startup();
                            me._submenuitems.push(subitems);
                        }
                    }else{
                        alert(re.msg);
                    }
                })
          },
        //gettoolbarMoudle

         _setItems3:function(menu){
            debugger
            var me=this;
            domStyle.set(me.table1,"display","none");
            domStyle.set(me.table2,"display","none");
            domStyle.set(me.table3,"display","block");
            domStyle.set(me.table4,"display","none");
            var id=menu.id;
            me._menu=menu;
            ConfigurationService.gettoolbarMoudle(id).then(function(re){
                if(re.code == '200'){
                    var _submenuItems=re.data.submenuItems;
                    var navtext=me._nav.text;
                    var menutext=menu.text;
                    if(me._moduleitems.length > 0){
                        for(var i=0;i<me._moduleitems.length;i++){
                            me._moduleitems[i].destroy();
                        }
                    }
                    me._moduleitems=[];
                    me._menuModuleId=[]
                    for(var i=0;i<_submenuItems.length;i++){
                        var data=_submenuItems[i].module;
                        if(data != null){
                            me._menuModuleId.push(data.id);
                            var subitems=new Toolbar_item3({_data:data,_num:i,_navtext:navtext,_menutext:menutext,_menuid:menu.id}).placeAt(me.items3);

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
        _setItems4:function(nav){
            debugger
            var me=this;
            domStyle.set(me.table1,"display","none");
            domStyle.set(me.table2,"display","none");
            domStyle.set(me.table3,"display","none");
            domStyle.set(me.table4,"display","block");
            me._navId=nav.id;
            me._nav=nav;
            ConfigurationService.getSiderbarModule(nav.id).then(function(re){
                if(re.code == '200'){
                    debugger
                    var data=re.data;
                    var supertext=nav.text;
                    if(me._siderbaritems.length > 0){
                        for(var i=0;i<me._siderbaritems.length;i++){
                            me._siderbaritems[i].destroy();
                        }
                    }
                    me._siderbarModuleId=[];
                    for(var i=0;i<data.length;i++){
                        if(data[i]!=null){
                            me._siderbarModuleId.push(data[i].moduleId);
                            var subitems=new Toolbar_item4({_data:data[i],_num:i,_navtext:supertext,type:'siderbar',_siderbarId:nav.id}).placeAt(me.items4);
                            subitems._table4Fresh=me._table4Fresh.bind(me);
                            subitems.startup();
                            me._siderbaritems.push(subitems);
                        }
                    }
                }else{
                    alert(re.msg);
                }
            });
           
           
        },
       
        _table4Fresh:function(){
            debugger
            this._setItems4(this._nav);
        },
        _table2Fresh:function(){
        this._setItems2(this._nav);
        },
        _table3Fresh:function(){
        this._setItems3(this._menu);
        },
        _barfresh:function(){
        this.setListItem();
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
  
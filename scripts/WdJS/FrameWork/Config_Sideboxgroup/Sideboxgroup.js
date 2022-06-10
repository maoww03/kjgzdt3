define([
    "dojo/_base/declare",
    "dojo/parser",
    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin",
    "dojo/text!./templates/Sideboxgroup.txt",
    "dojo/on",
    "dojo/dom-style",
    "dojo/dom-class", 
    "dojo/dom-attr",
    "FrameWork/serviceUtil/ConfigurationService",
    "./Sideboxgroup_item",
    "./Sideboxgroup_create",
    "./Sideboxgroup_item2",
    "./Sideboxgroup_create2"
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
      Sideboxgroup_item,
      Sideboxgroup_create,
      Sideboxgroup_item2,
      Sideboxgroup_create2
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
          _regionCode:[
            {code:"330300",region:"温州市"},{code:"330301",region:"市辖区"},{code:"330302",region:"鹿城区"},{code:"330303",region:"龙湾区"},{code:"330304",region:"瓯海区"},{code:"330305",region:"洞头区"},{code:"330324",region:"永嘉县"},{code:"330326",region:"平阳县"},{code:"330327",region:"苍南县"},{code:"330328",region:"文成县"},{code:"330329",region:"泰顺县"},{code:"330381",region:"瑞安市"},{code:"330382",region:"乐清市"},{code:"330383",region:"龙港市"}],

          _query_user:null,
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
                        innerHTML+=`<option value=${code}>${region}(${code})</option>`;

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
                var _creat=new Sideboxgroup_create({_data:null ,_style:"create"}).placeAt(dojo.body());
                _creat.startup();
                _creat._createRefresh=me._barfresh.bind(me);
            });
         
            on(me.create2, "click", function () {
                var _createMenuMoudule= new Sideboxgroup_create2({_menuId:me._nav.id,_ModuleIdArr:me._menuModuleId}).placeAt(dojo.body());
                _createMenuMoudule.startup();
                _createMenuMoudule._table2Fresh=me._table2Fresh.bind(me);
            });

             // back2
            on(me.back2, "click", function () {
               domStyle.set(me.table2,"display","none");
               domStyle.set(me.table1,"display","block");
            });

            on(me.search, "keyup", function (e) {
                var theEvent = window.event || e;
                var code = theEvent.keyCode || theEvent.which || theEvent.charCode;
                if (code == 13) {
                 me._query_user=me.search.value;
                   me.setListItem();
                }
                
             });


             on(me.RegionCodeSelect, "change", function () {
                me._query_user=me.RegionCodeSelect.value;
                me.setListItem();
            });

          },
          setListItem:function(){
            var me=this;
            ConfigurationService.getSideboxgroup(me._query_user).then(function(result){
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
                        var _Sideboxgroupitems=new Sideboxgroup_item({_data:re[i] , _num : i}).placeAt(me.items);
                        _Sideboxgroupitems._itemRefresh=me._barfresh.bind(me);

                        _Sideboxgroupitems._setItems2=me._setItems2.bind(me);
                        _Sideboxgroupitems._table2Fresh=me._table2Fresh;

                        _Sideboxgroupitems.startup();
                        me._item.push(_Sideboxgroupitems);
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
            domStyle.set(me.table1,"display","none");
            domStyle.set(me.table2,"display","block");
            var id=nav.id;
            me._nav=nav;
            ConfigurationService.getsideboxgroupModule(id).then(function(re){
                if(re.code == '200'){
                    var data=re.data;
                    var navtext=nav.groupname;
                    if(me._moduleitems.length > 0){
                        for(var i=0;i<me._moduleitems.length;i++){
                            me._moduleitems[i].destroy();
                        }
                    }
                    me._moduleitems=[];
                    me._menuModuleId=[]
                    debugger
                    for(var i=0;i<data.length;i++){
                        if(data[i] != null && data[i].moduleId != null){
                            me._menuModuleId.push(data[i].moduleId);
                        }
                        if(data[i] != null){
                            var subitems=new Sideboxgroup_item2({_data:data[i],_num:i,_navtext:navtext,_navid:id}).placeAt(me.items2);
                            subitems._table2Fresh=me._table2Fresh.bind(me);
                            subitems.startup();
                            me._moduleitems.push(subitems);
                        }
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
  
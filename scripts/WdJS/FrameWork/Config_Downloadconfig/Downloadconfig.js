define([
    "dojo/_base/declare",
    "dojo/parser",
    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin",
    "dojo/text!./templates/Downloadconfig.txt",
    "dojo/on",
    "dojo/dom-style",
    "dojo/dom-class", 
    "dojo/dom-attr",
    "FrameWork/serviceUtil/ConfigurationService",
    "./Downloadconfig_item",
    "./Downloadconfig_create"
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
      Downloadconfig_item,
      Downloadconfig_create
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
           
            on(me.create, "click", function () {
                var _creat=new Downloadconfig_create({_data:null , _style:"create"}).placeAt(dojo.body());
                _creat.startup();
                _creat._createRefresh=me._table1fresh.bind(me);
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
            ConfigurationService.getDownloadconfig().then(function(result){
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
                        var _Downloadconfig=new Downloadconfig_item({_data:re[i],_num:i}).placeAt(me.items);
                        _Downloadconfig.startup();
                        _Downloadconfig._table1fresh=me._table1fresh.bind(me);
                        me._item.push(_Downloadconfig);
                    }
                }else{
                    alert(result.msg);
                }
            })
          },
          setListItem1:function(code){
            var me=this;
            ConfigurationService.getDownloadconfigBycode(code).then(function(result){
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
                        var _Downloadconfig=new Downloadconfig_item({_data:re[i],_num:i}).placeAt(me.items);
                        _Downloadconfig.startup();
                        _Downloadconfig._table1fresh=me._table1fresh.bind(me);
                        me._item.push(_Downloadconfig);
                    }
                }else{
                    alert(result.msg);
                }
            })
          },
        
          

          _table1fresh:function(){
              var me=this;
              var aa=me.RegionCodeSelect.value;
              if(aa == "000000"){
                this.setListItem();
              }else{
                this.setListItem1(me._selectCode);
              }
            
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
  
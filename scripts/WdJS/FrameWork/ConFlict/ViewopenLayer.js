define([
    "dojo/_base/declare",
    "dojo/parser",
    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin",
    "dojo/text!./templates/ViewopenLayer.txt",
    "dojo/on",
    "dojo/dom-style",
    "dojo/dom-class",
    "dojo/dom-attr",
  ], function (declare, parser, _WidgetBase, _TemplatedMixin, template, on, domStyle, domClass, domAttr) {
      return declare([_WidgetBase, _TemplatedMixin], {
          templateString: template,
          _openlayerList:[],
          _selectedList:[],
  
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
                me._getOpenlayerData();
                me._setOpenlayerData();
                me._bindEvents();
                
              }.bind(this));
          },
        _bindEvents:function(){
            var me=this;
            on(me.close, 'click', function (evt) {
                me.destroy();
            })

            on(me.checkAll, 'click', function (evt) {
                $("[name=checkItem]:checkbox").prop("checked",this.checked);
            })

            // btnSubmit
            on(me.btnSubmit, 'click', function (evt) {
                var idArray = new Array(); //用户ID数组
                $("[name=checkItem]:checkbox:checked").each(function(){
                    idArray.push($(this).val());
                });
               if(idArray.length > 7){
                    alert("最多只能选择5个图层，请重新选择");
               }else if(idArray.length <=  7){
                    me._selectedList=[];
                    idArray.forEach(layerid=>{
                        var obj=me._openlayerList.find(function(layer){
                            return layer.layerid == layerid
                        });
                        me._selectedList.push(obj);
                    })
                    me.getUserChoice(me._selectedList);
                    me.destroy();
               }
            })
        },
        _getOpenlayerData:function () {
            // _allLayerZtree
            var me=this;
            var nodes=_allLayerZtree.getNodes();
            me._openlayerList=[];
            if (nodes.length > 0) {
                for (var i = 0; i < nodes.length; i++) {
                    if (nodes[i].children.length > 0) {
                        me.getChildNode(nodes[i]);
                    }
                }
            }
        },
        getChildNode: function (P_node) {
            var me = this;
            var nodes = P_node.children;
            for (var i = 0; i < nodes.length; i++) {
                if (nodes[i].children != null) {
                    me.getChildNode(nodes[i]);
                } else {
                   var pd= me._pdVisble(nodes[i].id)
                    if(pd){
                        var url={
                            caption:nodes[i].caption,
                            field:'xmmc',
                            id:null,
                            itemid:null,
                            layerid:nodes[i].id,
                            queryurl:nodes[i].queryUrl
                        }
                        me._openlayerList.push(url);
                    }

                }
            }
        },
        _pdVisble:function (layerid) {
            for (var i = 0; i < appConfig.map.getLayers().array_.length; i++) {
                var layer = appConfig.map.getLayers().array_[i];
                var layer_id = layer.get("id");
                if (layer_id === layerid) {
                    var vi=layer.getVisible();
                    return vi;
                }
            }  
        },
        _setOpenlayerData:function(){
            var me=this;
            // setLayers
            var setStr='';
            me._openlayerList.forEach(openlayers => {
                var obj=me.choised.find(function(el){
                    return el.layerid == openlayers.layerid
                });
                if(obj==undefined || obj==null){
                    setStr+=`<tr>
                    <td><input type="checkbox"  name="checkItem" value="${openlayers.layerid}"/> </td>
                    <td>${openlayers.caption}</td>
                    </tr>`;
                }else{
                    setStr+=`<tr>
                    <td><input type="checkbox"  checked  name="checkItem" value="${openlayers.layerid}"/> </td>
                    <td>${openlayers.caption}</td>
                    </tr>`;
                }
                   
            });
            me.setLayers.innerHTML=setStr;

            if(me._openlayerList.length == 0){
                me.con.innerHTML=`<div class="textalarm">请先打开图层，才能选择！！</div>`;
                domStyle.set(me.btn_group,"display","none");
            }
        },
        getUserChoice:function(data){ }
          
      });
  });
  
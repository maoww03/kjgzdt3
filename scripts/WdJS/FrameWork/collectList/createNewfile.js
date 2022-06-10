define(["dojo/_base/declare", 
    "dojo/text!./templates/createNewfile.txt", 
    "dijit/_TemplatedMixin", 
    "dijit/_WidgetBase", 
    "dojo/on", 
    "dojo/dom-style", 
    'dojo/parser', 
    "dojo/dom-class", 
    "dojo/dom-attr", 
    "dojo/_base/lang", 
    'dojo/_base/array','FrameWork/serviceUtil/collectService'],
    function (declare, template, TemplatedMixin, WidgetBase, on, domStyle, parser, domClass, domAttr, lang, array,collectService) {
        return declare([WidgetBase, TemplatedMixin], {
            templateString: template,

            _started: false,
            _select:[],

            constructor: function (args) {

            },
            postCreate: function () {
                this.inherited(arguments);
                this.onCreate();
            },
            onCreate: function () {
                var me = this;
            },
            startup: function () {
                var me = this;
                if (this._started) {
                    return;
                }
                parser.parse(this.domNode).then(function () {

                    this.bindEvent();

                }.bind(this));

                this._started = true;
            },
            bindEvent: function () {
               var me=this;
                on(me.cancle, 'click', function () {
                   me.setWidgetVisible(false);
                }.bind(this));

                on(me.finish, 'click', function () {
                    var name=me.namevalue.value;
                    if(name){
                        me._addPcata(me._fromid,name,me._pnode);
                    }else{
                        alert("请输入名称");
                    }
                }.bind(this));
            },
            setWidgetVisible: function (visible) {
                this.namevalue.value="";
                if (visible) {
                    domStyle.set(this.domNode, "display", "block");
                } else {
                    domStyle.set(this.domNode, "display", "none");
                }
            },
            // 新建文件夹
            _addPcata:function(fromid,name,addNode){
                var me=this;
                if(name){
                    var data={ 
                        "fromid": fromid,
                        "name": name,
                        "userid": me._userid
                    };
                    collectService.add_Catalog(dojo.toJson(data)).then(function (result) {
                        if (result.code == 200 && result.data!=null) {
                            var newNodeData={
                                name: name,
                                isParent:true,
                                fromid:fromid,
                                cata_Id:result.data
                            };
                            // 刷新目录 或者 添加节点
                            _collectionLayerZtree.addNodes(addNode,newNodeData);
                            me.setWidgetVisible(false);
                        }else{
                            alert(result.msg);
                            me.setWidgetVisible(false);
                        }                        
                    });
                }else{
                    alert("请输入名称");
                }
            }
            
            
            
           
          
        });
    });


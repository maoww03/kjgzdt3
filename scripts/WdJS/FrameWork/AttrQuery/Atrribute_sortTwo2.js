define(["dojo/_base/declare",
    "dojo/text!./templates/Atrribute_sortTwo2.txt", 
    "dijit/_TemplatedMixin", 
    "dijit/_WidgetBase",
    "dojo/on", 
    "dojo/dom-style", 
    'dojo/parser', 
    "dojo/dom-class", 
    "dojo/dom-attr", 
    "dojo/_base/lang", 
    'dojo/_base/array',
    'FrameWork/filesManage/filesManager'],
    function (declare, template, TemplatedMixin, WidgetBase, on, domStyle, parser, domClass, domAttr, lang, array,filesManager) {
        return declare([WidgetBase, TemplatedMixin], {
            templateString: template,
            _fileManage:null,
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
                    var type=me._type;
                    if(type=="XMFW"){
                        me.expandName.innerHTML="附件";
                        domStyle.set(me.ckda,"display","block");
                        domStyle.set(me.cktz,"display","none");
                        domStyle.set(me.ckwj,"display","none");
                        domStyle.set(me.cksm,"display","none");
                    }else if(type=="YDGH"){
                        me.expandName.innerHTML="附件";
                        domStyle.set(me.ckda,"display","block");
                        domStyle.set(me.cktz,"display","block");
                        domStyle.set(me.ckwj,"display","block");
                        domStyle.set(me.cksm,"display","block");
                    }
                    me._bindEvent();

                }.bind(this));
                this._started = true;
            },
           

            _bindEvent:function(){
                var me=this;
                on(me.ckda, "click", function () {
                   if(me._fileManage != null){
                       me._fileManage.destroy();
                   }
                   var _file=new filesManager({_type : "ckda",_data:me._data}).placeAt(dojo.body());
                   _file.startup();
                   me._fileManage=_file;
                })

                on(me.cktz, "click", function () {
                    if(me._fileManage != null){
                        me._fileManage.destroy();
                    }
                    var _file=new filesManager({_type : "cktz",_data:me._data}).placeAt(dojo.body());
                    _file.startup();
                    me._fileManage=_file;
                 })
                 on(me.ckwj, "click", function () {
                    if(me._fileManage != null){
                        me._fileManage.destroy();
                    }
                    var _file=new filesManager({_type : "ckwj",_data:me._data}).placeAt(dojo.body());
                    _file.startup();
                    me._fileManage=_file;
                 })
                 on(me.cksm, "click", function () {
                    if(me._fileManage != null){
                        me._fileManage.destroy();
                    }
                    var _file=new filesManager({_type : "cksm",_data:me._data}).placeAt(dojo.body());
                    _file.startup();
                    me._fileManage=_file;
                 })

 
            },
            // ------------content
           
      
        
            
        });
    });


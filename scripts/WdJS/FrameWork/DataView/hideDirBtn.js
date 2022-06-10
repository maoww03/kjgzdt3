define(["dojo/_base/declare", 
    "dojo/text!./templates/hideDirBtn.txt", 
    "dijit/_TemplatedMixin", 
    "dijit/_WidgetBase", 
    "dojo/on", 
    "dojo/dom-style", 
    'dojo/parser', 
    "dojo/dom-class", 
    "dojo/dom-attr", 
    "dojo/_base/lang", 
    'dojo/_base/array'],
    function (declare, template, TemplatedMixin, WidgetBase, on, domStyle, parser, domClass, domAttr, lang, array) {
        return declare([WidgetBase, TemplatedMixin], {
            templateString: template,
            _allList:true,
            

            _started: false,

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
                on(this.domNode, 'click', function () {
                    me._clickHide();

                }.bind(this));

            },
            /*--hideBtn--*/
        _filterLayer:function(_el){
            var me=this;
            var el=_el.children;
            for(var i=0;i<el.length;i++){
                var els=el[i];
                if(els.isParent){
                    me._filterLayer(els)
                }else {
                    var exist=els.getPath();
                    for(var j=0;j<exist.length;j++){
                        exist[j].myAttr=true;
                    }
                }
            }
        },
        
        _removefilterList:function(_el){
            var me=this;
            var el=_el.children;
            for(var i=0;i<el.length;i++){
                var els=el[i];
                if(els.isParent && els.myAttr==true ){
                    me._removefilterList(els)
                }else if(els.myAttr==false){
                    _allLayerZtree.hideNode(els); 
                }
            }
        },
        
        _showHideLayer:function(_el){
            var me=this;
            var el=_el.children;
            for(var i=0;i<el.length;i++){
                var els=el[i];
                if(els.isParent){
                    me._showHideLayer(els);
                    _allLayerZtree.showNode(els);
                }
            }
        },
        _clickHide:function(){
            var me = this;
            var pa=_allLayerZtree.getNodes();
            pa=pa[0].children;

            if(me._allList==true){
                domStyle.set(me.domNode,"background-image","url(image/catalog/yclb2.png)");
                domClass.replace(me.domNode, "layerbtn_Active", "layerbtn");
                me._allList=false;
                // me._hideList();
                // filter
                for(var i=0;i<pa.length;i++){
                    if(pa[i].isParent){
                        me._filterLayer(pa[i]);
                    }
                }
                // hide
                for(var j=0;j<pa.length;j++){
                    if(pa[j].isParent){
                        me._removefilterList(pa[j]);
                    }
                }
            }else if(me._allList==false){
                domStyle.set(me.domNode,"background-image","url(image/catalog/yclb1.png)");
                domClass.replace(me.domNode, "layerbtn", "layerbtn_Active");
                me._allList=true;
                // show
                for(var i=0;i<pa.length;i++){
                    if(pa[i].isParent){
                        me._showHideLayer(pa[i]);
                    }
                }
            }
        },
        // pd =true =>显示 pd =false =>隐藏
        // _allList =true =>显示 _allList =false =>隐藏
        _isShow:function(pd){
            var me = this;
            if(me._allList){
                if(!pd){
                    me._clickHide();
                }
            }else{
                if(pd){
                    me._clickHide();
                }
            }
        },
        _getStatus:function(){
            return this._allList;
        }
    });
});


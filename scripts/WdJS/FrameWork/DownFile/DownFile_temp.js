define([
    "dojo/_base/declare",
    "dojo/parser",
    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin",
    "dojo/text!./templates/DownFile_temp.txt",
    "dojo/on",
    "dojo/dom-style",
    "dojo/dom-class",
    "dojo/dom-attr",
    "dojo/dom-construct",
    'FrameWork/Loading/Loading',"FrameWork/serviceUtil/downFile"
], function (declare, parser, _WidgetBase, _TemplatedMixin, template, on, domStyle, domClass, domAttr, domConstruct, Loading,downFile) {
    return declare([_WidgetBase, _TemplatedMixin], {
        templateString: template,
        index: 0,
        _mapTool: null,
        _drawLayer: null,
        _choseDk:[],


        constructor: function (args) { },

        postCreate: function () {
            this.inherited(arguments);
        },

        startup: function () {
            var me = this;
            dojo.query('.repeatHide').forEach((dom) => {
                domStyle.set(dom,"display",'none');
            })
            dojo.query('.sidebar-tool').forEach((dom) => {
                domStyle.set(dom,"display",'none');
            })
            domStyle.set(me.domNode,"display",'block');

            if (me._started) {
                return;
            }
            parser.parse(me.domNode).then(function () {
                debugger
                me._bindEvents();
            });
        },
        _bindEvents: function () {
            var me = this;
            on(me.subSidebox_close,"click",function(){
                // 恢复点差
                Resumequery();
                me.setDomVisble(false);
            })
            on(me.downLoad,"click",function(){
             debugger
                var aa=me.downLoadtype.value;
                var filename=aa+".txt";
                downFile.fileDownload(filename);

            })


        },
        setDomVisble:function(visible){
            var me=this;
            if(visible){
                domStyle.set(me.domNode,"display","block");
            }else{
                domStyle.set(me.domNode,"display","none");
            }
        }

      
    });
});

define([
    "dojo/_base/declare",
    "dojo/parser",
    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin",
    "dojo/text!./templates/FeedbackPage.txt",
    "dojo/on",
    "dojo/dom-style",
    "dojo/dom-class", 
    "dojo/dom-attr",
    "dojo/_base/lang",
    "dojo/dom-construct",
    "./FeedbackList",
    "./FeedbackCon"
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
      lang,
      domConstruct,FeedbackList,FeedbackCon
  ) {
      return declare([_WidgetBase, _TemplatedMixin], {
          templateString: template,
          _FeedbackList:null,
          _FeedbackCon:null,


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
                me._setList();
                me._bindEvents();
              });
          },
          _bindEvents:function(){
            var me=this;
            on(me.close, "click", function () {
                me.destroy();
            });
            on(me.feedbackCon, "click", function () {
                domStyle.set(me.feedbackList,"color","black");
                domStyle.set(me.feedbackList,"background-color","white");
                domStyle.set(me.feedbackCon,"color","white");
                domStyle.set(me.feedbackCon,"background-color","rgb(30, 119, 189)");
                me._setCon();
            });
            on(me.feedbackList, "click", function () {
                domStyle.set(me.feedbackCon,"color","black");
                domStyle.set(me.feedbackCon,"background-color","white");
                domStyle.set(me.feedbackList,"color","white");
                domStyle.set(me.feedbackList,"background-color","rgb(30, 119, 189)");
                me._setList();
            });
          },

        _setList:function(){
            var me=this;
            debugger
            domStyle.set(me.content_list,"display","block");
            domStyle.set(me.content_con,"display","none");
            if( me._FeedbackList == null){
                me._FeedbackList=new FeedbackList().placeAt(me.content_list);
                me._FeedbackList.startup();
            }
        },
        //   _FeedbackCon
        _setCon:function(){
            var me=this;
            debugger
            domStyle.set(me.content_list,"display","none");
            domStyle.set(me.content_con,"display","block");
            if( me._FeedbackCon == null){
                me._FeedbackCon=new FeedbackCon({list:me._FeedbackList}).placeAt(me.content_con);
                me._FeedbackCon.startup();  


            }
        },
      });
  });
  
define([
    'dojo/_base/declare',
    'dijit/_WidgetBase',
    'dijit/_TemplatedMixin',
    'dojo/text!./templates/Visitmsg.txt',
    "FrameWork/serviceUtil/addrService",
    "dojo/dom-style",
    "dojo/dom-class",
    "dojo/dom-attr",
], function (declare, _WidgetBase, _TemplatedMixin, template,addrService, domStyle,
    domClass,
    domAttr,) {
    return declare([_WidgetBase, _TemplatedMixin], {
        templateString: template,



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
            var myDate = new Date();
            var time=myDate.toLocaleDateString();  
            me.addVisit(time);

            var w=document.body.clientWidth;
            if(w<1550){
                domStyle.set(me.domNode,"display","none");
            }else if(w<1710){
                domStyle.set(me.domNode,"width","200px");
                domStyle.set(me.from,"display","none");
                domStyle.set(me.domNode,"font-size","12px");
            }

            return;
        },
        addVisit:function(time){
            var me=this;
            addrService.addVisit(time).then(function(re){
                console.log(re.msg);
                me.todayVisit(time);
                me.getTotalVisit(time);
            },function(err){console.log(err);})
        },
        todayVisit:function(time){
            var me=this;
            addrService.getTodayVisit(time).then(function(re){
                if(re.code == 200){
                    me.today.innerHTML+=""+re.data;
                }
                
            },function(err){console.log(err);})
        },
        getTotalVisit:function(time){
            var me=this;
            addrService.getTotalVisit(time).then(function(re){
                if(re.code == 200){
                    me.total.innerHTML+=""+re.data;
                }
            },function(err){console.log(err);})

        }
    });
});
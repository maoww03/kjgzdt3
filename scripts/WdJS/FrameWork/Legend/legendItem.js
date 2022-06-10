define([
    'dojo/_base/declare',
    'dijit/_WidgetBase',
    'dijit/_TemplatedMixin',
    'dojo/text!./templates/legendItemTemplate.txt', "dojo/dom-style", 'dojo/on'
], function (declare, _WidgetBase, _TemplatedMixin, template, domStyle,on) {
    return declare([_WidgetBase, _TemplatedMixin], {
        templateString: template,
        data: null,
        //选中状态
        select:1,
        layerId:null,
        constructor: function (args) {},
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
            this.text.innerHTML = this.data.value; 
            if (this.data.type != undefined) {
                domStyle.set(this.icon, 'height', '0px');
                if (this.data.type == "line") {
                    domStyle.set(this.icon, 'border-top', '2px solid rgba(' + this.data.border_color[0] + ',' + this.data.border_color[1] + ',' + this.data.border_color[2] + ',' + this.data.border_color[3] + ')');
                    domStyle.set(this.icon, 'margin-top', '9px');
                } else if (this.data.type == "dot-line") {
                    domStyle.set(this.icon, 'border-top', '2px dashed rgba(' + this.data.border_color[0] + ',' + this.data.border_color[1] + ',' + this.data.border_color[2] + ',' + this.data.border_color[3] + ')');
                    domStyle.set(this.icon, 'margin-top', '9px');
                }
            } else {
                if (this.data.fill_color != undefined) {
                    domStyle.set(this.icon, 'background', 'rgba(' + this.data.fill_color[0] + ',' + this.data.fill_color[1] + ',' + this.data.fill_color[2] + ',' + this.data.fill_color[3] + ')');
                }
                if (this.data.border_color != undefined) {
                    domStyle.set(this.icon, 'border', '1px solid rgba(' + this.data.border_color[0] + ',' + this.data.border_color[1] + ',' + this.data.border_color[2] + ',' + this.data.border_color[3] + ')');
                }
                if (this.data.image != undefined) {
                    domStyle.set(this.icon, 'background-image', 'url(' + this.data.image + ')');
                }
            }
            appConfig.filterLegent.forEach((e,index)=>{
                if(e.id==me.layerId){
                    let legend=e.legend.find(t=>{
                        return t.value==me.data.value
                    });
                    if(legend!=undefined && legend!=null){
                        domStyle.set(me.check,"backgroundImage","url(image/legend/uncheck.png)");
                        me.select=0;
                    }
                }
            });
            this.bindEvent();
            this._started = true;
        },
        bindEvent(){
            var me=this;
            on(me.domItem,"click",function(){
                if(me.select==1){
                    domStyle.set(me.check,"backgroundImage","url(image/legend/uncheck.png)");
                    me.select=0;
                    me.hideLegend();
                }
                else{
                    domStyle.set(me.check,"backgroundImage","url(image/legend/check.png)");
                    me.select=1;
                    me.showLegend();
                }
            });
        },
        hideLegend(){
            var me=this;
            let sj=appConfig.filterLegent.find(e=>{
               return e.id==me.layerId;
            });
            if(sj!=null && sj!==undefined){
                sj.legend.push(me.data);
                appConfig.filterLegent.map(e=>{
                    if(e.id==me.layerId){
                        return sj;
                    }
                    else{
                        return e;
                    }
                });
            }
            else{
                let frame={
                    id:me.layerId,
                    legend:[me.data]
                }
                appConfig.filterLegent.push(frame);
            }
        },
        showLegend(){
            var me=this;
            appConfig.filterLegent.forEach((e,index)=>{
                if(e.id==me.layerId){
                    if(e.legend.length==1){
                        appConfig.filterLegent.splice(index,1);
                    }
                    else{
                        e.legend.forEach((e1,index1)=>{
                            if(e1.value==me.data.value){
                                e.legend.splice(index1,1);
                            }
                        })
                    }       
                }
            });
        }
    });
});
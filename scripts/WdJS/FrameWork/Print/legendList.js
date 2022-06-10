define([
    'dojo/_base/declare',
    'dijit/_WidgetBase',
    'dijit/_TemplatedMixin',
    'dojo/text!./templates/legendList.txt', "dojo/dom-style", "dojo/dom-attr",
], function (declare, _WidgetBase, _TemplatedMixin, template, domStyle,domAttr) {
    return declare([_WidgetBase, _TemplatedMixin], {
        templateString: template,

        data: null,


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
            this.text.innerHTML = this.data.value;
           
            if (this.data.type != undefined) {
                domStyle.set(this.icon, 'height', '0px');
                // line dot--
                if (this.data.type == "line") {
                    domStyle.set(this.icon, 'border-top', '2px solid rgba(' + this.data.border_color[0] + ',' + this.data.border_color[1] + ',' + this.data.border_color[2] + ',' + this.data.border_color[3] + ')');
                    domStyle.set(this.icon, 'margin-top', '9px');
                } else if (this.data.type == "dot-line") {
                    domStyle.set(this.icon, 'border-top', '2px dashed rgba(' + this.data.border_color[0] + ',' + this.data.border_color[1] + ',' + this.data.border_color[2] + ',' + this.data.border_color[3] + ')');
                    domStyle.set(this.icon, 'margin-top', '9px');
                }
            } else {
                // fill
                if (this.data.fill_color != undefined) {
                    // domStyle.set(this.icon, 'background', 'rgba(' + this.data.fill_color[0] + ',' + this.data.fill_color[1] + ',' + this.data.fill_color[2] + ',' + this.data.fill_color[3] + ')');
                    var canvas=this.convertImageToCanvas(this.data);
                    var _src = canvas.toDataURL("image/png");
                    domStyle.set(this.icon_img,"display","block");
                    domAttr.set(this.icon_img,"src",_src);

                }
                // border--
                if (this.data.border_color != undefined) {
                    domStyle.set(this.icon, 'border', '1px solid rgba(' + this.data.border_color[0] + ',' + this.data.border_color[1] + ',' + this.data.border_color[2] + ',' + this.data.border_color[3] + ')');
                }
                // image--
                if (this.data.image != undefined) {
                    // domStyle.set(this.icon, 'background-image', 'url(' + this.data.image + ')');
                    domStyle.set(this.icon_img,"display","block");
                    domAttr.set(this.icon_img,"src",this.data.image);
                }
            }
           
            this._started = true;
        },
        convertImageToCanvas:function(data){
            var canvas = document.createElement("canvas");
            var ctx=canvas.getContext("2d");
            ctx.width = "48";
            ctx.height = "13";
            ctx.fillStyle='rgba(' + data.fill_color[0] + ',' + data.fill_color[1] + ',' + data.fill_color[2] + ',' + data.fill_color[3] + ')';
            ctx.fillRect(0,0,288,130);
            return canvas;
        }
    });
});
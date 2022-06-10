define([
    'dojo/_base/declare',
    'dijit/_WidgetBase',
    'dijit/_TemplatedMixin',
    'dojo/text!./templates/loadDialog.txt'
], function (declare, _WidgetBase, _TemplatedMixin, template) {
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
            if (this._started) {
                return;
            }

           
            this._started = true;
        }
    });
});
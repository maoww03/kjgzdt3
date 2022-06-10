define([
    "dojo/_base/declare",
    "dojo/parser",
    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin",
    "dojo/text!./templates/DownRecordBar_item.txt",
    "dojo/on",
    "dojo/dom-style",
    "dojo/dom-class", 
    "dojo/dom-attr",
    "dojo/_base/lang",
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
  ) {
      return declare([_WidgetBase, _TemplatedMixin], {
          templateString: template,
          _regionCode:[{code:"330300",region:"温州市"},{code:"330302",region:"鹿城区"},{code:"330303",region:"龙湾区"},{code:"330304",region:"瓯海区"},{code:"330305",region:"洞头区"},{code:"330324",region:"永嘉县"},{code:"330326",region:"平阳县"},{code:"330327",region:"苍南县"},{code:"330328",region:"文成县"},{code:"330329",region:"泰顺县"},{code:"330381",region:"瑞安市"},{code:"330382",region:"乐清市"},{code:"330383",region:"龙港市"}],
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
                me.num.innerHTML=me._num || "--";

                me.filename.innerHTML=me._data.filename || "--";

                me.time.innerHTML=me._data.time || "--";

             
                me.username.innerHTML=me._data.username || "--";

                me.userid.innerHTML=me._data.userid || "--";

                var source=me._data.bz;
                if(source == "attachment"){
                    source='附件下载';
                }else if(source == "ftp"){
                    source='控规ftp下载';
                }
                me.bz.innerHTML=source || "--";

                var regionnae = me._regionCode.find(function(obj){
                    return obj.code==me._data.regioncode
                  });
                  me.xsq.innerHTML=regionnae.region || "--";


              });
          },
      
      });
  });
  
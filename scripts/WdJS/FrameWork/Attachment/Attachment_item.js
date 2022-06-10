define([
    "dojo/_base/declare",
    "dojo/parser",
    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin",
    "dojo/text!./templates/Attachment_item.txt",
    "dojo/on",
    "dojo/dom-style",
    "dojo/dom-class", 
    "dojo/dom-attr",
    "dojo/_base/lang",
     "FrameWork/serviceUtil/Attachment",
    //  "./Customquery_create",
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
      lang,Attachment,
    //   Customquery_create
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
                me.num.innerHTML=me._num || "--";
                me.filename.innerHTML=me._data.filename || "--";
                // var dealtime=me._data.time.split(" ");
                me.time.innerHTML=me._data.time || "--";
                var regionnae = me._regionCode.find(function(obj){
                  return obj.code==me._data.xsq
                });
                me.xsq.innerHTML=regionnae.region || "--";
                me.userid.innerHTML=me._data.userid || "--";

                if(me._type=="admin"){
                  domStyle.set(me.downbtn,"display","block");
                  domStyle.set(me.xsq,"width","10%");
                }
                if(me._type=="user"){
                  domStyle.set(me.userid,"display","none");
                  domStyle.set(me.num,"width","20%");

                }
                me._bindEvents();
              });
          },
          _bindEvents:function(){
            var me=this;

            on(me.down, "click", function () {
              debugger
              var userid= user.id;
              var username = user.username;
                Attachment.downAttachmen3(me._data.filename,me._data.xsq,userid,username);
            });

            on(me.delete, "click", function (e) {
                // e.stopPropagation();
                // var id=me._data.id;
                // if(confirm("请确认是否删除该标记")){
                //     ConfigurationService.deleteCustomquery(id).then(function(re){
                //         if(re.code=="200"){
                //             debugger
                //             alert("删除成功");
                //             me._table1fresh(me._nowPage,me._num);
                //         }else{
                //             alert(re.msg);
                //         }
                //     })
                // }
            });
           
           
            

          },
        //   bar
        _table1fresh:function(delpage,delnum){},

        _setItems2:function(data){}
      });
  });
  
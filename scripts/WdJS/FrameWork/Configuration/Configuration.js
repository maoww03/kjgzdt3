define([
    "dojo/_base/declare",
    "dojo/parser",
    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin",
    "dojo/text!./templates/Configuration.txt",
    "dojo/on",
    "dojo/dom-style",
    "dojo/dom-class", 
    "dojo/dom-attr"
  ], function (
      declare,
      parser,
      _WidgetBase,
      _TemplatedMixin,
      template,
      on,
      domStyle,
      domClass,
      domAttr
  ) {
      return declare([_WidgetBase, _TemplatedMixin], {
          templateString: template,
          pageSize:null,
          _item:[],
          _nowPage:1,
          _total:null,
          _pageSum:null,
          _content:null,
          _replycontent:null,

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
                  
                  domStyle.set(me.icon,"background-image",`url(${me.data.icon})`);
                  domAttr.set(me.domNode,"title",me.data.text);

                  me.text.innerHTML=me.data.name;

                  if(me.index== 0){
                    domStyle.set(me.domNode,"background","#1d5288");
                  }
                  me._bindEvents();
              });
          },
          _bindEvents:function(){
              var me=this;
              on(me.domNode,"click",function(){
                  debugger
                me.onClick();
                domStyle.set(me.domNode, 'background', '#1d5288');
                dojo.byId("nav").innerHTML=me.data.text;
                me.changePart();
              })
          },

          onClick:function(){},

          Selected:function(flag){
            if (flag) {
                domStyle.set(this.domNode, 'background', '#1d5288');
            } else {
                domStyle.set(this.domNode, 'background', 'none');
            }
            
          },

          changePart:function(){
            var me=this;
            debugger
            if(me.data.module){
                var pd=false;
                ResultList.forEach(el => {
                    if(el.visible){
                        el.con.setWidgetVisible(false);
                        el.visible=false;
                    }
                    if(me.data.id==el.id){
                        if(!el.visible){
                            el.con.setWidgetVisible(true);
                            el.visible=true
                        }
                        pd=true;
                    }
                });

                require([me.data.module], function (moduleCon) {
                    if(!pd){
                        var _Module=new moduleCon().placeAt(dojo.byId("Result_list"));
                        _Module.startup();
                        var aa={
                            id:me.data.id,
                            con:_Module,
                            visible:true
                          }
                        ResultList.push(aa);
                    }
                });
            }else{
                alert("未开通");
                ResultList.forEach(el => {
                    if(el.visible){
                        el.con.setWidgetVisible(false);
                        el.visible=false;
                    }
                });
            }
          }
         
       
        });
  });
  
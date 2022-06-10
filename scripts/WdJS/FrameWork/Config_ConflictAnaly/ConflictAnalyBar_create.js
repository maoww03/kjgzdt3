define([
    "dojo/_base/declare",
    "dojo/parser",
    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin",
    "dojo/text!./templates/ConflictAnalyBar_create.txt",
    "dojo/on",
    "dojo/dom-style",
    "dojo/dom-class", 
    "dojo/dom-attr",
    "dojo/_base/lang",
    "dojo/dom-construct",
    "FrameWork/serviceUtil/ConfigurationService",
    "./ConflictAnalyBar_createItem"
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
      domConstruct,
      ConfigurationService,
      ConflictAnalyBar_createItem
  ) {
      return declare([_WidgetBase, _TemplatedMixin], {
        templateString: template,
        _conflictLayerzd:null,
        _conflictedLayerzd:null,
        _item:[],
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
            

            domStyle.set(me.set_h,"height","180px");

            if(me._style=="create"){
                me.type_name.innerHTML="新建";
            }else if(me._style=="updata"){
                domStyle.set(me.btn,"display","block");
                domStyle.set(me.part1,"display","block");
                domStyle.set(me.part2,"display","block");
                domStyle.set(me.part3,"display","block");
                domStyle.set(me.set_h,"height","auto");
                me.conflictLayer.value=me._data.conflictLayer;
                me.conflictedLayer.value=me._data.conflictedLayer;
                // me._setfiled();
                me.layer1zd.innerHTML=`<option value="${me._data.conflictFiled}">${me._data.conflictFiled}</option>`;
                me.layer2zd.innerHTML=`<option value="${me._data.conflictedFiled}">${me._data.conflictedFiled}</option>`;
                me._setContent();
            }else if(me._style=="check"){
                domStyle.set(me.part1,"display","block");
                domStyle.set(me.part2,"display","block");
                domStyle.set(me.part3,"display","block");
                domStyle.set(me.btn,"display","none");
                domStyle.set(me.set_h,"height","auto");
                domStyle.set(me.add2,"display","none");
                domStyle.set(me.add1,"display","none");
                
                debugger
                me.layer1zd.innerHTML=`<option value="${me._data.conflictFiled}">${me._data.conflictFiled}</option>`;
                me.conflictLayer.value=me._data.conflictLayer;
                me.layer2zd.innerHTML=`<option value="${me._data.conflictedFiled}">${me._data.conflictedFiled}</option>`;
                me.conflictedLayer.value=me._data.conflictedLayer;
                
                domAttr.set(me.conflictLayer,"readonly","readonly");
                domAttr.set(me.conflictedLayer,"readonly","readonly");

                domStyle.set(me.layer1zd,"background","#f5f5f5");
                domStyle.set(me.conflictLayer,"background","#f5f5f5");
                domStyle.set(me.layer2zd,"background","#f5f5f5");
                domStyle.set(me.conflictedLayer,"background","#f5f5f5");
                me._setContent();
               
            }
            me._bindEvents();
        });
        },
        _setSelect:function(dom,val){
            var  length1 = dom.options.length;
            for ( var  i=0; i<length1; i++){
                if (dom.options[i].value == val){
                    dom.options[i].selected =  true ;
                    break ;}
            }
        },
        _setContent:function(){
            var me=this;
            var aa=JSON.parse(me._data.content);
            aa=aa.content
            if(me._item.length > 0){
                for(var i=0;i<me._item.length;i++){
                    me._item[i].destroy();
                }
            } 
            me._item=[];

            Object.keys(aa).forEach(function(key){
                var _data1=key;
                var _data2=aa[key];
                var _creat=new ConflictAnalyBar_createItem({_data1:_data1 , _data2:_data2,_select:true}).placeAt(me.items);
                _creat.startup();
                me._item.push(_creat);
                console.log(key,aa[key]);
            });
        },

        _bindEvents:function(){
        var me=this;
        on(me.close, "click", function () {
            me.destroy();
        });  
        // qx
        on(me.qx, "click", function () {
            me.destroy();
        });
        // save
        on(me.save, "click", function () {
           
            var content={};
            me._item.forEach(el=>{
                debugger
                var key=el._data1;
                var value=el._getSelectFiled();
                if(value.length != 0){
                    content[key]=value;
                }
            });
           var con={
            "content":content
           }
           
            if(me._style=="create"){
                debugger
                var data={
                    "code": me._code,
                    "conflictFiled":  me.layer1zd.value,
                    "conflictLayer":  me.conflictLayer.value,
                    "conflictedFiled":  me.layer2zd.value,
                    "conflictedLayer": me.conflictedLayer.value,
                    "content": JSON.stringify(con),
                  };
                me._createSave(data);
            }else if(me._style=="updata"){
                var data={
                    "code": me._code,
                    "conflictFiled":  me.layer1zd.value,
                    "conflictLayer":  me.conflictLayer.value,
                    "conflictedFiled":  me.layer2zd.value,
                    "conflictedLayer": me.conflictedLayer.value,
                    "content": JSON.stringify(con),
                    "id":me._data.id
                  };
                me._changeSave(data);
            }
        });
       
        on(me.add1, "click", function () {
            debugger
            var layer1id=me.conflictLayer.value || '';
            var layer2id=me.conflictedLayer.value || '';

            if(layer1id =="" ||layer2id ==""  ){
                alert("请输入图层信息");
            }else{
                domStyle.set(me.part2,"display","block");
                domStyle.set(me.part3,"display","none");
                domStyle.set(me.btn,"display","none");
                domStyle.set(me.set_h,"height","300px");
               
                me._setfiled();
            }
        });
        on(me.add2, "click", function () {
            var zd1=me.layer1zd.value || '';
            var zd2=me.layer2zd.value || '';

            if(zd1 == '' ||zd2 == ''  ){
                alert("请选择字段信息");
            }else{
                domStyle.set(me.part3,"display","block");
                domStyle.set(me.btn,"display","block");
                domStyle.set(me.set_h,"height","auto");
                me._setPro2();
            }
        });

        },
        _setfiled:function(){
            debugger
            var me=this;
            var layer1id=me.conflictLayer.value;
            var layer2id=me.conflictedLayer.value;
            ConfigurationService.getLayerfield(layer1id).then(function(re){
                if(re.code=='200'){
                    var innerHTML=``;
                    re.data.forEach(el => {
                        innerHTML +=   `<option value="${el.name}">${el.name}</option>`;
                    });
                    me.layer1zd.innerHTML=innerHTML;
                }else{
                    alert(re.msg);
                }
            })
            ConfigurationService.getLayerfield(layer2id).then(function(re){
                if(re.code=='200'){
                    var innerHTML=``;
                    re.data.forEach(el => {
                        innerHTML+=`<option value="${el.name}">${el.name}</option>`;
                    });
                    me.layer2zd.innerHTML=innerHTML;
                }else{
                    alert(re.msg);
                }
            })

        },
       
        _setPro2:function(){
            var me=this;
            var fieldName1=me.layer1zd.value;
            var tableName1=me.conflictLayer.value;
            var fieldName2=me.layer2zd.value;
            var tableName2=me.conflictedLayer.value;
            domStyle.set( me.loading,"display","block");
            ConfigurationService.getEnumerated(fieldName1,tableName1).then(function(re){
                if(re.code=='200'){
                    debugger
                    me._conflictLayerzd=re.data;
                    ConfigurationService.getEnumerated(fieldName2,tableName2).then(function(re2){
                        if(re.code=='200'){
                            me._conflictedLayerzd=re2.data;
                            debugger
                            if(me._item.length > 0){
                                for(var i=0;i<me._item.length;i++){
                                    me._item[i].destroy();
                                }
                            } 
                            me._item=[];
                            for(var i=0;i<me._conflictLayerzd.length;i++){
                                var _data1=me._conflictLayerzd[i];
                                if(_data1 != null){
                                    var _data2=me._conflictedLayerzd;
                                    var _creat=new ConflictAnalyBar_createItem({_data1:_data1 , _data2:_data2}).placeAt(me.items);
                                    _creat.startup();
                                    me._item.push(_creat);
                                }
                            }
                            domStyle.set( me.loading,"display","none");

                        }else{
                            alert(re.msg);
                        }
                    })
                }else{
                    alert(re.msg);
                }
            })
        },
        _changeSave:function(data){
            var me=this;
            ConfigurationService.updataConflictAnaly(JSON.stringify(data) ).then(function(re){
                if(re.code=='200'){
                    debugger
                    alert("修改成功");
                    var pageNum=me._page;
                    me._createRefresh(pageNum);
                    me.destroy();
                }else{
                    alert(re.msg);
                }
            })
        },
     
        _createSave:function(data){
            var me=this;
            debugger
            ConfigurationService.addConflictAnaly(JSON.stringify(data) ).then(function(re){
                domStyle.set( me.loading,"display","none");
                if(re.code=='200'){
                    debugger
                    alert("新建成功");
                    var pageNum=me._page;
                    me._createRefresh(pageNum);
                    me.destroy();
                }else{
                    alert(re.msg);
                }
            })
        },
        _createRefresh:function(pageNum){}
      });
  });

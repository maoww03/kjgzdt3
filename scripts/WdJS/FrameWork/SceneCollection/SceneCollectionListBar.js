define([
  "dojo/_base/declare",
  "dojo/text!./templates/SceneCollectionListBarTemplate.txt",
  "dijit/_TemplatedMixin",
  "dijit/_WidgetBase",
  "dojo/on",
  "dojo/dom-style",
  "dojo/parser",
  "dojo/dom-class",
  "dojo/dom-attr",
  "dojo/_base/lang",
    "dojo/_base/array", "FrameWork/serviceUtil/sceneService", "./SceneCollectionListItem"
  //20210402
], function (
    declare,
    template,
    TemplatedMixin,
    WidgetBase,
    on,
    domStyle,
    parser,
    domClass,
    domAttr,
    lang,
        array, sceneService, SceneCollectionListItem
   
    //20210402
) {
    return declare([WidgetBase, TemplatedMixin], {
        templateString: template,


        _started: false,
       
        userid: user.id,
        _itemsList: [],

        constructor: function (args) { },
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
            parser.parse(this.domNode).then(function () {
                this.getData();
                this.bindEvent();
            }.bind(this));

            this._started = true;
        },
        // ----------------------click
        bindEvent: function () {
            on(this.close, 'click', function (evt) {
                domStyle.set(this.domNode, 'display', 'none');
            }.bind(this));

            
        },
        getData: function () {
            sceneService.getSceneList(this.userid).then(function (result) {
                if (result.code == "200") {
                    for (var i = 0; i < this._itemsList.length; i++) {
                        this._itemsList[i].destroy();
                    }
                    this._itemsList = [];
                    for (var i = 0; i < result.data.length; i++) {
                        var _SceneCollectionListItem = new SceneCollectionListItem({ data: result.data[i], index: (i + 1) }).placeAt(this.items);
                        _SceneCollectionListItem.sucess = this.getData.bind(this);
                        _SceneCollectionListItem.startup();
                        this._itemsList.push(_SceneCollectionListItem);
                    }
                } else {
                    alert(result.msg);
                }
            }.bind(this));
        }
    });
});

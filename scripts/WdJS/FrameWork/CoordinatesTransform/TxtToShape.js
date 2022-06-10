define([
  "dojo/_base/declare",
  "dojo/parser",
  "dojo/DeferredList",
  "dijit/_WidgetBase",
  "dijit/_TemplatedMixin",
  "dojo/text!./templates/TxtToShape.txt",
  "dojo/on",
  "dojo/dom-style",
  "dojo/dom-class",
  "dojo/dom-attr",
  "dojo/dom-construct",
  "FrameWork/MapUtil/TransformUtil",
  "FrameWork/serviceUtil/uploadService",
  "FrameWork/serviceUtil/workMapService"
], function (declare, parser, DeferredList, _WidgetBase, _TemplatedMixin, template, on, domStyle, domClass, domAttr, domConstruct, TransformUtil,uploadService,workMapService) {
  return declare([_WidgetBase, _TemplatedMixin], {
    templateString: template,
    _downUrl:null,

    constructor: function (args) {},
    postCreate: function () {
      this.inherited(arguments);
    },
    startup: function () {
      var me = this;
      if (me._started) {
        return;
      }
      parser.parse(me.domNode).then(function () {
        me._bindEvents();
      });
    },
    _bindEvents: function () {
      var me = this;
      on(me.close, "click", function () {
        me._destroy();
        _checkQuery=true;
        _attrQueryTool.activate("point");
      });
      on(me.downloadBtn, "click", function () {
        workMapService.fileDownloadByPath(me._downUrl);
      });

      on(me.checkFile, "click", function () {
        me.upload.click();
      });
      on(me.upload, "change", function () {
        var filePath = me.upload.value;
        var fileName = filePath.substring(filePath.lastIndexOf("\\") + 1); //文件名
        if (fileName != "") {
          me.path.innerHTML = fileName;
        } else {
          me.path.innerHTML = "未选择任何文件";
        }
      });
      on(me.transformBtn, "click", function () {
        domStyle.set(me.downloadBtn,"display","none");
        domStyle.set(me.loading,"display",'block');
        var typeSelect = me.typeSelect.options[me.typeSelect.selectedIndex].value;
        var reverse = me.reversecheck.checked;
        var fd = new FormData();
        fd.append("file", me.upload.files[0]);
        // uploadTxt
        debugger
        uploadService.uploadTxt(fd).then(function (result) {
          if (result.code == "200") {
            // txtAndShpRemove40(result.data);
            var geom = new ol.geom.MultiPolygon(result.data);
            var polygonWKT = new ol.format.WKT().writeGeometry(geom, {
              dataProjection: "EPSG:4549",
                featureProjection: "EPSG:4549",
            }); 
            
            var graphical =[{
              attributes: [],
              wkt: polygonWKT,
            }];
            
            workMapService.uploadZip(graphical).then(function (result){
              if(result.code=="200"){
                me._downUrl=result.data;
                domStyle.set(me.loading,"display",'none');
                domStyle.set(me.downloadBtn,"display","block");
                // workMapService.fileDownloadByPath(result.data);

              }else{
                domStyle.set(me.loading,"display",'none');
                domStyle.set(me.downloadBtn,"display","none");
                alert(result.msg);
                me._downUrl=null;
              }
            })
          } else {
             domStyle.set(me.loading,"display",'none');
              alert(result.msg);
          }
        },function(err){ console.log(err);
          domStyle.set(me.loading,"display",'none');});
        // if (typeSelect == "sheng") {
        //   debugger
        //   TransformUtil.txtToShapeSheng(fd, reverse);
        // } else {
        //   TransformUtil.txtToShapeBu(fd, reverse);
        // }
      });
      
    },

    _destroy: function () {
      var me = this;
      me.destroy();
    },
    graphicalsToZip: function (graphicals, fileName) {
      workMapService.uploadZip(graphicals, function (blobUrl) {
        var a = document.createElement("a");
        a.style.display = "none";
        a.download = fileName;
        a.href = blobUrl;
        a.click();
        a.remove();
      });
    },

  });
});

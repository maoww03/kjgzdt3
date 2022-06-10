define(["FrameWork/serviceUtil/workMapService"], function (workMapService) {
  var util = {
    //formData: var fd = new FormData();fd.append("file", file.files[0]);
    //txtType：sheng或者bu
    //reverse:xy坐标是否相反
    txtToShape: function (formData, txtType, reverse) {
      var me = this;
      if (txtType == "sheng") {
        me.txtToShapeSheng(formData, reverse);
      } else {
        me.txtToShapeBu(formData, reverse);
      }
    },

    txtToShapeSheng: function (formData, reverse) {
      var me = this;
      workMapService.uploadsheng(formData).then(function (out) {
        if (out.code == 200) {
          var wkt = "MULTIPOLYGON(";
          out.data.forEach((polygon) => {
            wkt += "((";
            polygon.forEach((point) => {
              if (reverse) {
                wkt += point[1] + " " + point[0] + ",";
              } else {
                wkt += point[0] + " " + point[1] + ",";
              }
            });
            wkt = wkt.substring(0, wkt.length - 1);
            wkt += ")),";
          });
          wkt = wkt.substring(0, wkt.length - 1);
          wkt += ")";
          var graphicals = [
            {
              attributes: [],
              wkt: wkt,
            },
          ];
          me.graphicalsToZip(graphicals, "文件导出.zip");
        } else {
          alert(out.msg);
          return false;
        }
      });
    },
    txtToShapeBu: function (formData, reverse) {
      var me = this;
      workMapService.uploadBu(formData).then(function (out) {
        if (out.code == 200) {
          var wkt = "MULTIPOLYGON(";
          out.data.forEach((d) => {
            wkt += "(";
            d.forEach((d2) => {
              wkt += "(";
              d2.forEach((point) => {
                if (reverse) {
                  wkt += point[1] + " " + point[0] + ",";
                } else {
                  wkt += point[0] + " " + point[1] + ",";
                }
              });
              wkt = wkt.substring(0, wkt.length - 1);
              wkt += "),";
            });

            wkt = wkt.substring(0, wkt.length - 1);
            wkt += "),";
          });
          wkt = wkt.substring(0, wkt.length - 1);
          wkt += ")";
          var graphicals = [
            {
              attributes: [],
              wkt: wkt,
            },
          ];
          me.graphicalsToZip(graphicals, "文件导出.zip");
        } else {
          alert(out.msg);
          return false;
        }
      });
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
  };
  return util;
});

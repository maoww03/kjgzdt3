define([
  "dojo/_base/declare",
  "dojo/parser",
  "dojo/DeferredList",
  "dijit/_WidgetBase",
  "dijit/_TemplatedMixin",
  "dojo/text!./templates/ThematicMap.txt",
  "dojo/on",
  "dojo/dom-style",
  "dojo/dom-class",
  "dojo/dom-attr",
  "dojo/dom-construct",
], function (declare, parser, DeferredList, _WidgetBase, _TemplatedMixin, template, on, domStyle, domClass, domAttr, domConstruct) {
  return declare([_WidgetBase, _TemplatedMixin], {
    templateString: template,
    _data: null,
    _showColor: "#2079bf",
    _titlecss: {
      color: "white",
      fontWeight: "bold",
      fontSize: 16,
      // align :"center",
    },
    _colorList: [
      "red",
      "yellow",
      "blue",
      "green",
      "PaleVioletRed",
      "MediumPurple",
      "	DarkOrange1",
      "VioletRed1",
      "LightBlue2",
      "grey61",
      "LightGreen",
    ],

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
        me._setRestlt(me._data, me._type, me._type2);
        me._bindEvents();
      });
    },
    _bindEvents: function () {
      var me = this;
      on(me.close, "click", function () {
        me._destroy();
      });
    },
    _setRestlt: function (data, type, type2) {
      var me = this;
      var myChart = echarts.init(me.dataBox);
      if (type == "lineChart") {
        var name_data = [];
        var xAxisdata = [];
        var series = [];
        var index = 0;
        for (var key in data[0]) {
          if (key == "count" || key == "length" || key == "area") {
            var data2 = [];
            data.forEach((d) => {
              data2.push(d[key]);
            });
            var keyName = "";
            if (key == "count") {
              keyName = "数量";
            } else if (key == "length") {
              keyName = "长度(m)";
            } else if (key == "area") {
              keyName = "面积(㎡)";
            }
            name_data.push(keyName);
            var s = {
              name: keyName,
              type: "line",
              symbol: "circle",
              symbolSize: 7,
              itemStyle: {
                normal: {
                  color: me._colorList[index],
                  borderColor: me._colorList[index],
                  lineStyle: { width: 3 },
                },
              },
              data: data2,
            };
            series.push(s);
            index++;
          }
        }
        data.forEach((d) => {
          xAxisdata.push(d[me._fieldName]);
        });

        var option = {
          title: {
            text: "折线图",
            textStyle: me._titlecss,
            left: "20px",
          },
          tooltip: {
            trigger: "axis",
            axisPointer: {
              type: "cross",
            },
          },
          legend: {
            x: "right",
            y: "5%",
            textStyle: {
              color: "black",
              fontWeight: "blod",
            },
            data: name_data,
          },
          grid: {
            left: 50,
            right: 50,
            top: 60,
            bottom: 40,
          },
          xAxis: [
            {
              type: "category",
              axisTick: {
                alignWithLabel: true,
              },
              data: xAxisdata,
              axisLabel: { color: me._showColor, fontSize: "12px" },
              axisLine: {
                lineStyle: {
                  color: me._showColor,
                },
              },
            },
          ],
          yAxis: [
            {
              type: "value",
              min: 0,
              // max:30,
              position: "left",
              axisLine: {
                lineStyle: {
                  color: me._showColor,
                },
              },
              axisLabel: {
                formatter: "{value}",
                verticalAlign: "bottom",
              },
              nameLocation: "start",
              splitLine: {
                lineStyle: {
                  color: "#162c5d",
                },
              },
            },
          ],
          series: series,
        };
        myChart.setOption(option);
      } else if (type == "barChart") {
        var name_data = [];
        var xAxisdata = [];
        var series = [];
        var index = 0;
        for (var key in data[0]) {
          if (key == "count" || key == "length" || key == "area") {
            var data2 = [];
            data.forEach((d) => {
              data2.push(d[key]);
            });
            var keyName = "";
            if (key == "count") {
              keyName = "数量";
            } else if (key == "length") {
              keyName = "长度(m)";
            } else if (key == "area") {
              keyName = "面积(㎡)";
            }
            name_data.push(keyName);
            var s = {
              name: keyName,
              type: "bar",
              symbol: "circle",
              symbolSize: 7,
              itemStyle: {
                normal: {
                  color: me._colorList[index],
                  borderColor: me._colorList[index],
                  lineStyle: { width: 3 },
                },
              },
              data: data2,
            };
            series.push(s);
            index++;
          }
        }
        data.forEach((d) => {
          xAxisdata.push(d[me._fieldName]);
        });

        var option = {
          title: {
            text: "柱状图",
            textStyle: me.titlecss,
            left: "38%",
          },
          tooltip: {
            trigger: "axis",
            axisPointer: {
              type: "cross",
            },
          },
          grid: {
            left: 60,
            right: 50,
            top: 60,
            bottom: 40,
          },
          legend: {
            x: "right",
            y: "5%",
            textStyle: {
              color: "black",
              fontWeight: "blod",
            },
            data: name_data,
          },
          xAxis: [
            {
              type: "category",
              axisTick: { alignWithLabel: true },
              data: xAxisdata,
              axisLabel: { color: me._showColor, fontSize: "12px", interval: 1 },
              axisLine: {
                lineStyle: {
                  color: me._showColor,
                },
              },
            },
          ],
          yAxis: [
            {
              type: "value",
              min: 0,
              // max:50,
              position: "left",
              axisLine: {
                lineStyle: {
                  color: me._showColor,
                },
              },
              axisLabel: {
                formatter: "{value}",
                verticalAlign: "bottom",
              },
              nameLocation: "start",
              splitLine: {
                lineStyle: {
                  color: "#162c5d",
                },
              },
            },
          ],
          series: series,
        };
        myChart.setOption(option);
      } else if (type == "pieChart") {
        var name_data = [];
        for (var key in data[0]) {
          if (key != me._fieldName && (key == "count" || key == "length" || key == "area")) {
            var keyName = "";
            if (key == "count") {
              keyName = "数量";
            } else if (key == "length") {
              keyName = "长度(m)";
            } else if (key == "area") {
              keyName = "面积(㎡)";
            }
            name_data.push(keyName);
          }
        }
        var series = [];
        var s = {
          name: "数量",
          type: "pie",
          selectedMode: "single",
          radius: [0, "30%"],
          center: ["30%", "50%"],
          label: { show: false },
          labelLine: { normal: { show: false } },
          data: [],
        };

        data.forEach((d) => {
          var li = { name: "", value: "" };
          li.name = d[me._fieldName];
          li.value = d["count"];
          s.data.push(li);
        });
        series.push(s);

        if (type2 == 0) {
          // var s2 = {
          //   name: "长度(m)",
          //   type: "pie",
          //   radius: ["40%", "55%"],
          //   center: ["30%", "50%"],
          //   label: { formatter: "{b}" },
          //   data: [],
          // };
          // data.forEach((d) => {
          //   var li2 = { name: "", value: "" };
          //   li2.name = d[me._fieldName];
          //   li2.value = d["count"];
          //   s2.data.push(li2);
          // });
          // series.push(s2);
          series[0].radius = [0, "80%"];
          series[0].label = { formatter: "{b}" };
          series[0].labelLine = { normal: { show: true } };
        } else if (type2 == 1) {
          var s2 = {
            name: "长度(m)",
            type: "pie",
            radius: ["40%", "80%"],
            center: ["30%", "50%"],
            label: { formatter: "{b}" },
            data: [],
          };
          data.forEach((d) => {
            var li2 = { name: "", value: "" };
            li2.name = d[me._fieldName];
            li2.value = d["length"];
            s2.data.push(li2);
          });
          series.push(s2);
        } else if (type2 == 2) {
          var s2 = {
            name: "面积(㎡)",
            type: "pie",
            radius: ["40%", "80%"],
            center: ["30%", "50%"],
            label: { formatter: "{b}" },
            data: [],
          };
          data.forEach((d) => {
            var li2 = { name: "", value: "" };
            li2.name = d[me._fieldName];
            li2.value = d["area"];
            s2.data.push(li2);
          });
          series.push(s2);
        }

        var option = {
          title: {
            text: "饼状图",
            textStyle: me.titlecss,
            left: "38%",
          },
          legend: {
            x: "right",
            y: "5%",
            textStyle: {
              color: "black",
              fontWeight: "blod",
            },
            data: name_data,
          },
          tooltip: {
            trigger: "item",
            position: ["60%", "40%"],
            formatter: "{a} <br/>{b}: {c} ({d}%)",
            backgroundColor: "rgba(0,0,0,0.2)",
            padding: [10, 15],
          },
          series: series,
        };
        myChart.setOption(option);
        console.log(myChart);
      }
    },

    _destroy: function () {
      var me = this;
      me.destroy();
    },
  });
});

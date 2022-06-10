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
    _sort:[],
    _nowpage:0,
    _showColor: "#2079bf",
    _titlecss: {
      color: "white",
      fontWeight: "bold",
      fontSize: 16,
      // align :"center",
    },
    _colorList: [
      "grey",
      "LightBlue",
      "PaleVioletRed",
      "MediumPurple",
      "DarkOrange",
      "VioletRed",
      "LightGreen",
      "red",
      "yellow",
      "blue",
      "green",
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
        debugger
        var aa = me._data;
        me._groupData(me._data);
        me._setRestlt(me._sort[0]);
        me._bindEvents();
        if(me._sort.length==1){
          domStyle.set(me.before,"display","none");
          domStyle.set(me.after,"display","none");
          domStyle.set(me.setnum,"display","none");
          me.setnum.innerHTML=`图${me._nowpage+1}`;
          // setnum
        }
      });
    },
    _bindEvents: function () {
      var me = this;
      on(me.close, "click", function () {
        me.destroy();
      });

      on(me.before, "click", function () {
        if(me._nowpage > 0){
            me._nowpage--;
            me._setRestlt(me._sort[me._nowpage]);
            me.setnum.innerHTML=`图${me._nowpage+1}`
        }
      });

      on(me.after, "click", function () {
        if( me._nowpage < me._sort.length-1){
          me._nowpage++;
          me._setRestlt(me._sort[me._nowpage]);
          me.setnum.innerHTML=`图${me._nowpage+1}`
      }
      });

    },
    chunk:function (arr, size){
      const result = Array.apply(null, {
          length: Math.ceil(arr.length / size)
      }).map((item, index) => {
          return arr.slice(index * size, (index + 1) * size);
      });
      return result;
    }	,
    _groupData:function(data){
      debugger
      var me=this;
      var num=10;
      if(data.length < 12){
        num=12;
      }
      me._sort=me.chunk(data,num)
    },
  
    _setRestlt: function (data) {
      var me = this;
      var myChart = echarts.init(me.dataBox);
      var name_data = [];
      var xAxisdata = [];
      var series = [];
      var index = 0;
      if(me._type=="4"){

        for (var key in data[0]) {
          if (key == "rwmj1" || key == "wcmj1"||key == "rwmj3" || key == "wcmj3" ) {
            var data2 = [];
            data.forEach((d) => {
              var num = d[key].toFixed(1);
              data2.push(num);
            });
            var keyName = "";
            if (key == "rwmj1") {
              keyName = "2019任务面积";
            } else if (key == "wcmj1") {
              keyName = "2019完成面积";
            }

            if (key == "rwmj3") {
              keyName = "总任务面积";
            } else if (key == "wcmj3") {
              keyName = "总完成面积";
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
              textStyle:{
                align:'left'
              },
              data: data2,
            };
            series.push(s);
            index++;
          }
        }
        data.forEach((d) => {
          xAxisdata.push(d["name"]);
        });
        
      }
      //  mjzb
      // xmszb
      if(me._type=="3"){
        for (var key in data[0]) {
          if (key == "mjzb" || key == "xmszb" ) {
            var data2 = [];
            data.forEach((d) => {
              var num = d[key];
              data2.push(num);
            });
            var keyName = "";
            if (key == "mjzb") {
              keyName = "面积占比";
            } else if (key == "xmszb") {
              keyName = "项目数占比";
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
          xAxisdata.push(d["xz"]);
        });
      }
     
     
      debugger
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
          textStyle:{
            align:'left'
          },
          show:true,
          extraCssText:'width : 200px;'

            
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
            axisLabel: { 
              color: me._showColor, 
              fontSize: "12px", 
              interval: 0,
              // rotate:15 
            },
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
      
    }
  });
});

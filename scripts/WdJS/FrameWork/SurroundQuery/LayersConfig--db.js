define({
  data: [
    {
      type: "land",
      name: "土地",
      icon: "image/land.png",
      layers: [
        {
          id: "GCS330300G100202_JBNTBHQ_2017",
          caption: "基本农田保护区",
          queryUrl:
            "http://192.168.1.131:8090/iserver/services/data-WZGTTX/wfs100/utf-8?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=WZGTTX:GCS330300G100202_JBNTBHQ_2017",
          displayField: "objectid",
          chineseDisplayField: "显示字段",
        },
      ],
    },
    {
      type: "mine",
      name: "地矿",
      icon: "image/land.png",
      layers: [
        {
          id: "GCS330300G100202_JBNTBHTB_2017",
          caption: "基本农田保护图斑",
          queryUrl:
            "http://192.168.1.131:8090/iserver/services/data-WZGTTX/wfs100/utf-8?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=WZGTTX:GCS330300G100202_JBNTBHTB_2017",
          displayField: "objectid",
          chineseDisplayField: "显示字段",
        },
      ],
    },
    {
      type: "synthesize",
      name: "综合",
      icon: "image/land.png",
      layers: [
        {
          id: "GCS330300G100202_JBNTBHPK_2017",
          caption: "基本农田保护地块",
          queryUrl:
            "http://192.168.1.131:8090/iserver/services/data-WZGTTX/wfs100/utf-8?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=WZGTTX:GCS330300G100202_JBNTBHPK_2017",
          displayField: "objectid",
          chineseDisplayField: "显示字段",
        },
      ],
    },
  ],
});

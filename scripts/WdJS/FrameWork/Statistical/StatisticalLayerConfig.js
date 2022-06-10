define({
  //type: 0：点 1：线 2：面
  layers: [
    {
		regionCode:["330300","330303","330302","330304"],
      id: "BKY_YDGH_PY",
      name: "控制性详细规划",
      type: 2,
      field: [
        {
          name: "ydxz",
          alias: "用地性质",
          type: "string"
        },
        {
          name: "yddm",
          alias: "用地代码",
          type: "string"
        }
      ]
    },
    {
      regionCode:["330305","330324","330326","330327","330328","330329","330381","330382","330383"],
        id: "gcs330300g200201_jsydgzq_2020_latest_1_0",
        name: "建设用地管制区",
        type: 2,
        field: [
          {
            name: "gzqlxdm",
            alias: "gzqlxdm",
            type: "string"
          }
        ]
      }
  ]
   // [{
        //     "PropertyShowLayerField": [
        //         {
        //             "id": 16,
        //             "statisticalAnalysisLayerId": "34",
        //             "field": "sheng",
        //             "alias": "省"
        //         }
        //     ],
        //     "layerid": "xz_slzy_xjejdcslzy_py_latest_3_0", ==id
        //     "id": 34,
        //     "layer_name": "县级二级调查森林资源_省级下发",
        //     "layer_type": "2",
        //     "region_code": "330300"
        // }]
        // _staticalLaterConfig
  
});
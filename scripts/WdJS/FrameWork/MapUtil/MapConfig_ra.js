define({
    code:"1",
    option: {
        view: {
            center: [567813.634, 3096556.623],
            zoom: 3
            //maxZoom: 15,
            //minZoom: 6
        }
    },
    extent: [423788.27389814425, 2935769.3486772366, 719810.8880697023, 3188104.032778393],
    resolutions: [  
        156367.79197931726,
        78183.89598965863,
        39091.947994829316,
        19545.973997414658,
        9772.986998707329,
        4886.493499353664,
        2443.246749676832,
        1221.623374838416,
        610.811687419208,
        305.405843709604,
        152.702921854802,
        76.351460927401,
        38.1757304637005,
        19.08786523185025,
        9.543932615925126,
        4.771966307962563,
        2.3859831539812815,
        1.1929915769906407,
        0.5964957884953204,
        0.2982478942476602,
        0.1491239471238301
    ],
    layers: [
        {
            layerType: "GroupLayer",
            name: "XZSJ",
            caption: "现状数据",
            thematicMap: true,
            subLayers:[
				{
					layerType: "GroupLayer",
					name: "TDZY",
					caption: "土地资源",
					thematicMap: true,
					subLayers: [
						{
                            "id": "xz_dxydzxdc_2019_dxdcdytb_py_latest_3_0",
                            "layerName": "GCS330300G100209_DCDYTB_2019",
                            "layerType": "SuperMapWMTS",
                            "caption": "低效调查单元图斑2019_省级下发",
                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/aac573c16269f5181aac99a08eed4205",
                            "visible": false,
                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/6f0dc9fba82d130173b8479f67dfe646?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_ratx_cgcs_4549:xz_dxydzxdc_2019_dxdcdytb_py_latest_3_0"
                        },
                        {
                            "id": "xz_dxydzxdc_2019_dxdcqtb_py_latest_3_0",
                            "layerName": "GCS330300G100209_DCQTB_2019",
                            "layerType": "SuperMapWMTS",
                            "caption": "低效调查区图斑2019_省级下发",
                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/1bc29cb0cfbe4cbd675f525eae9687cd",
                            "visible": false,
                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/6f0dc9fba82d130173b8479f67dfe646?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_ratx_cgcs_4549:xz_dxydzxdc_2019_dxdcqtb_py_latest_3_0"
                        },
                        {
                            "id": "xz_dxydzxdc_2020_dxdcdytb_py_latest_3_0",
                            "layerName": "GCS330300G100209_DCDYTB_2020",
                            "layerType": "SuperMapWMTS",
                            "caption": "低效调查单元图斑2020_省级下发",
                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/ce9de42433eaab76a2022de9ef18bfd3",
                            "visible": false,
                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/6f0dc9fba82d130173b8479f67dfe646?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_ratx_cgcs_4549:xz_dxydzxdc_2020_dxdcdytb_py_latest_3_0"
                        },
                        {
                            "id": "xz_dxydzxdc_2020_dxdcqtb_py_latest_3_0",
                            "layerName": "GCS330300G100209_DCQTB_2020",
                            "layerType": "SuperMapWMTS",
                            "caption": "低效调查区图斑2020_省级下发",
                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/8715448b590e596f797698a8acff73e7",
                            "visible": false,
                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/6f0dc9fba82d130173b8479f67dfe646?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_ratx_cgcs_4549:xz_dxydzxdc_2020_dxdcqtb_py_latest_3_0"
                        },
					]
				},
                {
					layerType: "GroupLayer",
					name: "SLZY",
					caption: "森林资源",
					thematicMap: true,
					subLayers: [
                        {
                            "id": "xz_slzy_xjejdcslzy_py_latest_3_0",
                            "layerName": "GCS330300G1001_XJELCSLZY_20",
                            "layerType": "SuperMapWMTS",
                            "caption": "县级二级调查森林资源_省级下发",
                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/26729a71bc1cfdc1bb75ff6046f895ea",
                            "visible": false,
                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/6f0dc9fba82d130173b8479f67dfe646?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_ratx_cgcs_4549:xz_slzy_xjejdcslzy_py_latest_3_0"
                        },
                        {
                            layerType: "GroupLayer",
                            name: "GYL",
                            caption: "公益林",
                            thematicMap: true,
                            subLayers: [
                                {
                                    "id": "xz_slzy_2018_gjjgyl_py_latest_3_0",
                                    "layerName": "GCS330300G100101_GJJGYL_2018",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "国家级公益林2018_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/267ab08b8272e5547bdbadf1308edbe1",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/6f0dc9fba82d130173b8479f67dfe646?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_ratx_cgcs_4549:xz_slzy_2018_gjjgyl_py_latest_3_0"
                                },
                                {
                                    "id": "xz_slzy_2018_sjstgyl_py_latest_3_0",
                                    "layerName": "GCS330300G100401_SJSTGYL_2018",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "省级生态公益林2018_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/b77b83f5dff598ddc4624360fd1f3f70",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/6f0dc9fba82d130173b8479f67dfe646?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_ratx_cgcs_4549:xz_slzy_2018_sjstgyl_py_latest_3_0"
                                },
                            ]
                        },
                        {
                            layerType: "GroupLayer",
                            name: "ZRBHD",
                            caption: "自然保护地",
                            thematicMap: true,
                            subLayers: [
                                {
                                    "id": "xz_slzy_2018_sydbhq_py_latest_3_0",
                                    "layerName": "GCS330300G1099_SYDBHQ_2018",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "水源地保护区2018_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/7ef568674092767743e99748a02957be",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/6f0dc9fba82d130173b8479f67dfe646?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_ratx_cgcs_4549:xz_slzy_2018_sydbhq_py_latest_3_0"
                                },
                                {
                                    "id": "xz_slzy_2020_zrbhd_py_latest_3_0",
                                    "layerName": "GCS330300G1099_ZRBHD_2020",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "自然保护地2020_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/5f42524af6fc5b146822e577714ab89e",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/6f0dc9fba82d130173b8479f67dfe646?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_ratx_cgcs_4549:xz_slzy_2020_zrbhd_py_latest_3_0"
                                },
                            ]
                        }
						
					]
				},
                {
					layerType: "GroupLayer",
					name: "SDZY",
					caption: "湿地资源",
					thematicMap: true,
					subLayers: [
                        {
                            layerType: "GroupLayer",
                            name: "ZDSDML",
                            caption: "重点湿地名录",
                            thematicMap: true,
                            subLayers: [
                                {
                                    "id": "xz_sdzy_2018_gjzysd_pt_latest_3_0",
                                    "layerName": "GCS330300G100604_GJZYSD_2018",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "国家重要湿地2018_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/7c04624fad8c8569533bca2d7b0183e9",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/6f0dc9fba82d130173b8479f67dfe646?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_ratx_cgcs_4549:xz_sdzy_2018_gjzysd_pt_latest_3_0"
                                },
                            ]
                        }
                    ]
                },
                {
					layerType: "GroupLayer",
					name: "DZSJ",
					caption: "地质数据",
					thematicMap: true,
					subLayers: [
                        {
                            "id": "xz_dzsj_dzyjbhq_pt_latest_3_0",
                            "layerName": "GCS330300K3005_DZYJBHQ_DZGYX",
                            "layerType": "SuperMapWMTS",
                            "caption": "地质遗迹保护区_省级下发",
                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/78a5aca14b2b26f1e961a05e31ddc1b8",
                            "visible": false,
                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/6f0dc9fba82d130173b8479f67dfe646?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_ratx_cgcs_4549:xz_dzsj_dzyjbhq_pt_latest_3_0"
                        },
                        {
                            layerType: "GroupLayer",
                            name: "DZZH",
                            caption: "地质灾害",
                            thematicMap: true,
                            subLayers: [
                                {
                                    "id": "xz_dzzh_yhd_pt_latest_3_0",
                                    "layerName": "GCS330300K3005_ZHYHD_YHD_X",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "隐患点_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/d87b4ae0a0bc294802d3d8e3419c3dc1",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/6f0dc9fba82d130173b8479f67dfe646?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_ratx_cgcs_4549:xz_dzzh_yhd_pt_latest_3_0"
                                },
                                {
                                    "id": "xz_dzzh_zqd_pt_latest_3_0",
                                    "layerName": "GCS330300K3005_ZXQD_ZQD_X",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "灾情点_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/97dc5f3636ceb95b72862196485f12c0",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/6f0dc9fba82d130173b8479f67dfe646?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_ratx_cgcs_4549:xz_dzzh_zqd_pt_latest_3_0"
                                },
                            ]
                        }
                    ]
                }
            ]
        },
        {
            layerType: "GroupLayer",
            name: "GHSJ",
            caption: "规划数据",
            thematicMap: true,
            subLayers: [
				{
					layerType: "GroupLayer",
					name: "SX",
					caption: "三线",
					thematicMap: true,
					subLayers: [
						{
                            layerType: "GroupLayer",
                            name: "ZYKZX",
                            caption: "重要控制线",
                            thematicMap: true,
                            subLayers: [
                                {
                                    "id": "gh_zykzx_2018_stbhhx_py_latest_3_0",
                                    "layerName": "GCS330300G1099_STBHHX_2018",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "生态保护红线2018_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/1049a4533728e51588c01adfb0c6e60d",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/6f0dc9fba82d130173b8479f67dfe646?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_ratx_cgcs_4549:gh_zykzx_2018_stbhhx_py_latest_3_0"
                                },
                                {
                                    "id": "gh_zykzx_2020_yjjbntbhhx_py_latest_3_0",
                                    "layerName": "GCS330300G200105_YJJBNTHX_2020",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "永久基本农田保护红线2020_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/5d47e7a39a4d3b37fc7adc5c84e66d28",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/6f0dc9fba82d130173b8479f67dfe646?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_ratx_cgcs_4549:gh_zykzx_2020_yjjbntbhhx_py_latest_3_0"
                                }
                            ]
                        },
					]
				},
                
                {
					layerType: "GroupLayer",
					name: "SYLGH",
					caption: "上一轮规划",
					thematicMap: true,
                    subLayers: [
                        {
                            layerType: "GroupLayer",
                            name: "SYLGHKZXXXGH",
                            caption: "控制性详细规划",
                            thematicMap: true,
                            subLayers: [

                                {
                                    layerType: "GroupLayer",
                                    name: "SYLGHKZXXXGHYD",
                                    caption: "用地",
                                    thematicMap: true,
                                    subLayers: [
                                        {
                                            "id": "gh_kg_ydgh_py_latest_3_0",
                                            "layerName": "BKY_YDGH_PY",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "控规_用地规划",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/3acbe8a727bd1d95852b6e5c483be732",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/6f0dc9fba82d130173b8479f67dfe646?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_ratx_cgcs_4549:gh_kg_ydgh_py_latest_3_0"
                                        },
                                        {
                                            "id": "gh_kg_dkfh_pt_latest_3_0",
                                            "layerName": "BKY_DKFH_PT",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "控规_地块符号",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/88a9deeb43453d9e211b126d7540c70d",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/6f0dc9fba82d130173b8479f67dfe646?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_ratx_cgcs_4549:gh_kg_dkfh_pt_latest_3_0"
                                        },
                                        {
                                            "id": "gh_kg_dkbh_ap_latest_3_0",
                                            "layerName": "BKY_DKBH_AP",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "控规_地块编号",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/ccb46b3e57a80704f47fbf7d62c9f5c3",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/6f0dc9fba82d130173b8479f67dfe646?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_ratx_cgcs_4549:gh_kg_dkbh_ap_latest_3_0"
                                        },

                                    ]
                                },
                                {
                                    layerType: "GroupLayer",
                                    name: "SYLGHKZXXXGHSX",
                                    caption: "四线",
                                    thematicMap: true,
                                    subLayers: [{
                                        "id": "gh_kg_lhlx_py_latest_3_0",
                                        "layerName": "BKK_LHLX_PY",
                                        "layerType": "SuperMapWMTS",
                                        "caption": "控规_绿化绿线",
                                        "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/4eb19963e1b9ef846e4b41a9b468c796",
                                        "visible": false,
                                        "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/6f0dc9fba82d130173b8479f67dfe646?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_ratx_cgcs_4549:gh_kg_lhlx_py_latest_3_0"
                                    },
                                    {
                                        layerType: "GroupLayer",
                                        name: "JCSSHX",
                                        caption: "基础设施黄线",
                                        thematicMap: true,
                                        subLayers: [
                                            {
                                                "id": "gh_kg_sshx_py_latest_3_0",
                                                "layerName": "BKK_SSHX_PY",
                                                "layerType": "SuperMapWMTS",
                                                "caption": "控规_基础设施黄线面",
                                                "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/c978fbf9c3134b27d1b7c7ef5cb23013",
                                                "visible": false,
                                                "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/6f0dc9fba82d130173b8479f67dfe646?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_ratx_cgcs_4549:gh_kg_sshx_py_latest_3_0"
                                            },
                                            {
                                                "id": "gh_kg_sshx_ln_latest_3_0",
                                                "layerName": "BKK_SSHX_LN",
                                                "layerType": "SuperMapWMTS",
                                                "caption": "控规_基础设施黄线",
                                                "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/8825b91652de782394b8a4879bc1e9a9",
                                                "visible": false,
                                                "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/6f0dc9fba82d130173b8479f67dfe646?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_ratx_cgcs_4549:gh_kg_sshx_ln_latest_3_0"
                                            },
                                        ]
                                    },
                                    {
                                        "id": "gh_kg_sxlx_ln_latest_3_0",
                                        "layerName": "BKK_SXLX_LN",
                                        "layerType": "SuperMapWMTS",
                                        "caption": "控规_水系蓝线",
                                        "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/4c8d68b0d98231c0b16aa5974bb3d69f",
                                        "visible": false,
                                        "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/6f0dc9fba82d130173b8479f67dfe646?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_ratx_cgcs_4549:gh_kg_sxlx_ln_latest_3_0"
                                    },
                                    {
                                        "id": "gh_kg_wbzx_py_latest_3_0",
                                        "layerName": "BKK_WBZX_PY",
                                        "layerType": "SuperMapWMTS",
                                        "caption": "控规_文保紫线",
                                        "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/f7e5f4abc81430c13ce81ec4a0eae5c2",
                                        "visible": false,
                                        "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/6f0dc9fba82d130173b8479f67dfe646?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_ratx_cgcs_4549:gh_kg_wbzx_py_latest_3_0"
                                    },]
                                },
                                {
                                    layerType: "GroupLayer",
                                    name: "SYLGHKZXXXGHJT",
                                    caption: "交通",
                                    thematicMap: true,
                                    subLayers: [
                                        {
                                            layerType: "GroupLayer",
                                            name: "GHDL",
                                            caption: "规划道路",
                                            thematicMap: true,
                                            subLayers: [
                                                {
                                                    "id": "gh_kg_dlzx_ln_latest_3_0",
                                                    "layerName": "BKJ_DLZX_LN",
                                                    "layerType": "SuperMapWMTS",
                                                    "caption": "控规_道路中心线",
                                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/fe65154ac13d758033fefb86e75ea46a",
                                                    "visible": false,
                                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/6f0dc9fba82d130173b8479f67dfe646?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_ratx_cgcs_4549:gh_kg_dlzx_ln_latest_3_0"
                                                },
                                                {
                                                    "id": "gh_kg_dlbx_ln_latest_3_0",
                                                    "layerName": "BKJ_DLBX_LN",
                                                    "layerType": "SuperMapWMTS",
                                                    "caption": "控规_道路边线",
                                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/6ee0193a219534552ae65976b64e4aa3",
                                                    "visible": false,
                                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/6f0dc9fba82d130173b8479f67dfe646?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_ratx_cgcs_4549:gh_kg_dlbx_ln_latest_3_0"
                                                },
                                            ]
                                        },
                                        {
                                            "id": "gh_kg_gdx_ln_latest_3_0",
                                            "layerName": "BKJ_GDX_LN",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "控规_轨道线",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/5699d84e5153ed8e286345047c2fdb28",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/6f0dc9fba82d130173b8479f67dfe646?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_ratx_cgcs_4549:gh_kg_gdx_ln_latest_3_0"
                                        },
                                    ]
                                },
                                {
                                    layerType: "GroupLayer",
                                    name: "SYLGHKZXXXGHGGPTSS",
                                    caption: "公共配套设施",
                                    thematicMap: true,
                                    subLayers: [
                                        {
                                            "id": "gh_kg_gpss_py_latest_3_0",
                                            "layerName": "BKP_GPSS_PY",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "控规_公共配套设施面",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/3e317b13e26f04498082ac15cc4bb8d5",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/6f0dc9fba82d130173b8479f67dfe646?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_ratx_cgcs_4549:gh_kg_gpss_py_latest_3_0"
                                        },
                                        {
                                            "id": "gh_kg_gpss_pt_latest_3_0",
                                            "layerName": "BKP_GPSS_PT",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "控规_公共配套设施点",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/55440ca9ff9e54509818b6858c449660",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/6f0dc9fba82d130173b8479f67dfe646?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_ratx_cgcs_4549:gh_kg_gpss_pt_latest_3_0"
                                        },
                                        {
                                            "id": "gh_kg_gpfh_pt_latest_3_0",
                                            "layerName": "BKP_GPFH_PT",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "控规_公共配套设施符号",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/66eba83e02c3188daa89c01f35edac70",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/6f0dc9fba82d130173b8479f67dfe646?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_ratx_cgcs_4549:gh_kg_gpfh_pt_latest_3_0"
                                        },
                                    
                                    ]
                                },
                                {
                                    layerType: "GroupLayer",
                                    name: "SYLGHKZXXXGHGHQW",
                                    caption: "规划区域",
                                    thematicMap: true,
                                    subLayers: [
                                        {
                                            "id": "gh_kg_xmfw_py_latest_3_0",
                                            "layerName": "BKY_XMFW_PY",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "控规_项目范围",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/09888706bc084800ac81ea69084d9678",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/6f0dc9fba82d130173b8479f67dfe646?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_ratx_cgcs_4549:gh_kg_xmfw_py_latest_3_0"
                                        },
                                    ]
                                }
                            ]
                        },
                        {
                            layerType: "GroupLayer",
                            name: "TDLYZTGH",
                            caption: "土地利用总体规划",
                            thematicMap: true,
                            subLayers:  [
                                
                                {
                                    "id": "gh_tdlyztgh_2017_jsydgzq_py_latest_3_0",
                                    "layerName": "GCS330300G200201_JSYDGZQ_2017",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "建设用地管制区2017_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/1bfd4a674316ff47fd9e1ac08e3ce0fa",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/6f0dc9fba82d130173b8479f67dfe646?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_ratx_cgcs_4549:gh_tdlyztgh_2017_jsydgzq_py_latest_3_0"
                                },
                                {
                                    "id": "gh_tdlyztgh_2020_jsydgzq_py_latest_3_0",
                                    "layerName": "GCS330300G200201_JSYDGZQ_2020",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "建设用地管制区2020_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/7f32dcb3e38ba6c801fe0d726541fbe0",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/6f0dc9fba82d130173b8479f67dfe646?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_ratx_cgcs_4549:gh_tdlyztgh_2020_jsydgzq_py_latest_3_0"
                                },
                            ]
                        }
                    ]
                }
            ]
        },
        {
            layerType: "GroupLayer",
            name: "GLSJ",
            caption: "管理数据",
            thematicMap: true,
            subLayers:  [
				{
					layerType: "GroupLayer",
					name: "ZYKZX",
					caption: "国土空间用途管制",
					thematicMap: true,
					subLayers: [
                        {
                            layerType: "GroupLayer",
                            name: "DXYDZKF",
                            caption: "低效用地再开发",
                            thematicMap: true,
                            subLayers: [
                                {
                                    "id": "xz_dxydzkf_dxydzkfxmhx_py_latest_3_0",
                                    "layerName": "GCS330300K3003_DXYDZKF_XMHX",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "低效用地再开发项目红线_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/faa4f64c7aa39433d1a9bf8f16e4748d",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/6f0dc9fba82d130173b8479f67dfe646?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_ratx_cgcs_4549:xz_dxydzkf_dxydzkfxmhx_py_latest_3_0"
                                },
                            ]
                        },
                        {
                            layerType: "GroupLayer",
                            name: "TDLYZTGHJBTZ",
                            caption: "土地利用总体规划局部调整",
                            thematicMap: true,
                            subLayers: [
                                {
                                    "id": "gl_gtkjytgzhkfly_ghjbtzl_py_latest_3_0",
                                    "layerName": "GCS330300K3003_GHJT_GHJBTZ_L",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "规划局部调整L_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/57a7dc837425443b7b621043d0f8135b",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/6f0dc9fba82d130173b8479f67dfe646?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_ratx_cgcs_4549:gl_gtkjytgzhkfly_ghjbtzl_py_latest_3_0"
                                },
                                {
                                    "id": "gl_gtkjytgzhkfly_ghjbtzx_py_latest_3_0",
                                    "layerName": "GCS330300K3003_GHJT_GHJBTZ_X",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "规划局部调整X_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/7f738900577b66d5aff7cfeaf68a77e3",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/6f0dc9fba82d130173b8479f67dfe646?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_ratx_cgcs_4549:gl_gtkjytgzhkfly_ghjbtzx_py_latest_3_0"
                                },
                            ]
                        },
                        {
                            layerType: "GroupLayer",
                            name: "NZYBP",
                            caption: "农转用报批",
                            thematicMap: true,
                            subLayers: [
                                {
                                    "id": "gl_nzybp_jsydbpl_py_latest_3_0",
                                    "layerName": "GCS330300K3003_JSYDBP_NZYDK_L",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "建设用地报批（农转用地块）L_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/9aa9467d57f463f71ea82f1d7fa71fc2",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/6f0dc9fba82d130173b8479f67dfe646?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_ratx_cgcs_4549:gl_nzybp_jsydbpl_py_latest_3_0"
                                },
                                {
                                    "id": "gl_nzybp_jsydbpx_py_latest_3_0",
                                    "layerName": "GCS330300k3003_JSYDBP_NZYDK_X",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "建设用地报批（农转用地块）X_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/a132c014b998c570aef033f297635ac3",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/6f0dc9fba82d130173b8479f67dfe646?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_ratx_cgcs_4549:gl_nzybp_jsydbpx_py_latest_3_0"
                                },
                            ]
                        },
                        {
                            layerType: "GroupLayer",
                            name: "JSYDYSHXZ",
                            caption: "建设用地预审和选址",
                            thematicMap: true,
                            subLayers: [
                                {
                                    "id": "gl_gtkjytgzhkfly_jsydys_py_latest_3_0",
                                    "layerName": "GCS330300K3003_JSYDYS_YSDK_X",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "建设用地预审（预审地块）_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/78f348aa2322b61345f90eca2bc7c4c8",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/6f0dc9fba82d130173b8479f67dfe646?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_ratx_cgcs_4549:gl_gtkjytgzhkfly_jsydys_py_latest_3_0"
                                },
                            ]
                        },
                        {
                            layerType: "GroupLayer",
                            name: "SSNYDBA",
                            caption: "设施农用地备案",
                            thematicMap: true,
                            subLayers: [
                                {
                                    "id": "gl_ssnydba_bhjbnt_py_latest_3_0",
                                    "layerName": "GCS330300K3003_SSNYD_BHYNFW",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "补划基本农田_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/fcd7eeff288697b532db1d019a494455",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/6f0dc9fba82d130173b8479f67dfe646?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_ratx_cgcs_4549:gl_ssnydba_bhjbnt_py_latest_3_0"
                                },
                                {
                                    "id": "gl_ssnydba_phgzcfw_py_latest_3_0",
                                    "layerName": "GCS330300K3003_SSNYD_GZCPHJZD",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "破坏耕作层范围_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/f8b60c7795ce7d4607b9ae59983e1fed",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/6f0dc9fba82d130173b8479f67dfe646?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_ratx_cgcs_4549:gl_ssnydba_phgzcfw_py_latest_3_0"
                                },
                                {
                                    "id": "gl_ssnydba_nydfw_py_latest_3_0",
                                    "layerName": "GCS330300K3003_SSNYD_NYDJZD",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "农用地范围_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/0ffc11208343540618b6cf0f432736f0",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/6f0dc9fba82d130173b8479f67dfe646?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_ratx_cgcs_4549:gl_ssnydba_nydfw_py_latest_3_0"
                                },
                                {
                                    "id": "gl_ssnydba_phynfw_py_latest_3_0",
                                    "layerName": "GCS330300K3003_SSNYD_PHYNJZD",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "破坏永农范围_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/44adfb37a7f6ddc1e5db29fca81dc706",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/6f0dc9fba82d130173b8479f67dfe646?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_ratx_cgcs_4549:gl_ssnydba_phynfw_py_latest_3_0"
                                },
                                {
                                    "id": "gl_ssnydba_zyynfw_py_latest_3_0",
                                    "layerName": "GCS330300K3003_SSNYD_ZYYNJZD",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "占用永农范围_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/daac939ca847e0600f5314093cc45135",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/6f0dc9fba82d130173b8479f67dfe646?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_ratx_cgcs_4549:gl_ssnydba_zyynfw_py_latest_3_0"
                                },
                            ]
                        },
                        {
                            layerType: "GroupLayer",
                            name: "TDCB",
                            caption: "土地储备",
                            thematicMap: true,
                            subLayers: [
                                {
                                    "id": "gl_tdcb_tdcb_py_latest_3_0",
                                    "layerName": "GCS330300K3003_TDCB",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "土地储备_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/06fe1a821c3d0adbaffdfa8320078934",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/6f0dc9fba82d130173b8479f67dfe646?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_ratx_cgcs_4549:gl_tdcb_tdcb_py_latest_3_0"
                                },
                            ]
                        },
                        {
                            layerType: "GroupLayer",
                            name: "TDGY",
                            caption: "土地供应",
                            thematicMap: true,
                            subLayers: [
                                {
                                    "id": "gl_tdgy_gddk_py_latest_3_0",
                                    "layerName": "GCS330300K3003_TDGY_GDDK_X",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "供地地块_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/55b6b41d991e10352ac692a25fd6ea40",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/6f0dc9fba82d130173b8479f67dfe646?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_ratx_cgcs_4549:gl_tdgy_gddk_py_latest_3_0"
                                },
                                {
                                    "id": "gl_tdgy_zpgcrdk_py_latest_3_0",
                                    "layerName": "GCS330300K3003_TDGY_TDJY_ZPGCR",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "土地交易-招拍挂出让地块_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/3ee243619254f60456a012648e0d6881",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/6f0dc9fba82d130173b8479f67dfe646?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_ratx_cgcs_4549:gl_tdgy_zpgcrdk_py_latest_3_0"
                                },
                            ]
                        }
					]
				},
                {
					layerType: "GroupLayer",
					name: "TDZZ",
					caption: "土地整治",
					thematicMap: true,
					subLayers: [
                        {
                            "id": "gl_tdzz_gbzjsdk_lx_py_latest_3_0",
                            "layerName": "GCS330300K3003_TDZZ_GBZJS_LX_X",
                            "layerType": "SuperMapWMTS",
                            "caption": "高标准建设地块-立项_省级下发",
                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/e60b17819f7149c11851b7fb9bb157c9",
                            "visible": false,
                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/6f0dc9fba82d130173b8479f67dfe646?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_ratx_cgcs_4549:gl_tdzz_gbzjsdk_lx_py_latest_3_0"
                        },
                        {
                            "id": "gl_tdzz_gbzjsdk_ys_py_latest_3_0",
                            "layerName": "GCS330300K3003_TDZZ_GBZJS_YS_X",
                            "layerType": "SuperMapWMTS",
                            "caption": "高标准建设地块-验收_省级下发",
                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/167cebc7ba6791fb213cc3527c6e10c0",
                            "visible": false,
                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/6f0dc9fba82d130173b8479f67dfe646?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_ratx_cgcs_4549:gl_tdzz_gbzjsdk_ys_py_latest_3_0"
                        },
                        {
                            "id": "gl_tdzz_gbztsdk_lx_py_latest_3_0",
                            "layerName": "GCS330300K3003_TDZZ_GBZTS_LX_X",
                            "layerType": "SuperMapWMTS",
                            "caption": "高标准提升地块-立项_省级下发",
                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/b5381135d9be64473f8c9cb7e8e22725",
                            "visible": false,
                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/6f0dc9fba82d130173b8479f67dfe646?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_ratx_cgcs_4549:gl_tdzz_gbztsdk_lx_py_latest_3_0"
                        },
                        {
                            "id": "gl_tdzz_gbztsdk_ys_py_latest_3_0",
                            "layerName": "GCS330300K3003_TDZZ_GBZTS_YS_X",
                            "layerType": "SuperMapWMTS",
                            "caption": "高标准提升地块-验收_省级下发",
                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/e37a4ca3c8ec884114bb8bcde3075617",
                            "visible": false,
                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/6f0dc9fba82d130173b8479f67dfe646?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_ratx_cgcs_4549:gl_tdzz_gbztsdk_ys_py_latest_3_0"
                        },
                        {
                            "id": "gl_tdzz_jsydfkdk_lx_py_latest_3_0",
                            "layerName": "GCS330300K3003_TDZZ_JSYDFK_LX_",
                            "layerType": "SuperMapWMTS",
                            "caption": "建设用地复垦地块-立项_省级下发",
                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/afb16d6d481626fb786eeed5a7a5437e",
                            "visible": false,
                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/6f0dc9fba82d130173b8479f67dfe646?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_ratx_cgcs_4549:gl_tdzz_jsydfkdk_lx_py_latest_3_0"
                        },
                        {
                            "id": "gl_jdzz_jsydfkdk_ys_py_latest_3_0",
                            "layerName": "GCS330300K3003_TDZZ_JSYDFK_YS_",
                            "layerType": "SuperMapWMTS",
                            "caption": "建设用地复垦地块-验收_省级下发",
                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/e3b7b2124e76fa26017217858a612966",
                            "visible": false,
                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/6f0dc9fba82d130173b8479f67dfe646?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_ratx_cgcs_4549:gl_jdzz_jsydfkdk_ys_py_latest_3_0"
                        },
                        {
                            "id": "gl_tdzz_kzgd_lx_py_latest_3_0",
                            "layerName": "GCS330300K3003_TDZZ_KZGD_LX_X",
                            "layerType": "SuperMapWMTS",
                            "caption": "垦造耕地-立项_省级下发",
                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/aa7da0a72b85f0363dfe1cf50d3966a8",
                            "visible": false,
                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/6f0dc9fba82d130173b8479f67dfe646?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_ratx_cgcs_4549:gl_tdzz_kzgd_lx_py_latest_3_0"
                        },
                        {
                            "id": "gl_tdzz_kzgd_ys_py_latest_3_0",
                            "layerName": "GCS330300K3003_TDZZ_KZGD_YS_X",
                            "layerType": "SuperMapWMTS",
                            "caption": "垦造耕地-验收_省级下发",
                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/60e4b753a745380890ee7402724a0380",
                            "visible": false,
                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/6f0dc9fba82d130173b8479f67dfe646?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_ratx_cgcs_4549:gl_tdzz_kzgd_ys_py_latest_3_0"
                        },
                        {
                            layerType: "GroupLayer",
                            name: "ZJGG",
                            caption: "增减挂钩",
                            thematicMap: true,
                            subLayers: [
                                {
                                    "id": "gl_zjgg_cjdkl_py_latest_3_0",
                                    "layerName": "GCS330300K3003_NCTDZHZZ_CJDK_L",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "拆旧地块L_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/cf2224fbb06989a45ff285139338053b",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/6f0dc9fba82d130173b8479f67dfe646?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_ratx_cgcs_4549:gl_zjgg_cjdkl_py_latest_3_0"
                                },
                                {
                                    "id": "gl_zjgg_jxdkl_py_latest_3_0",
                                    "layerName": "GCS330300K3003_NCTDZHZZ_JXDK_L",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "建新地块L_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/55f5378c76f709997bef818760b37320",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/6f0dc9fba82d130173b8479f67dfe646?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_ratx_cgcs_4549:gl_zjgg_jxdkl_py_latest_3_0"
                                },
                                {
                                    "id": "gl_zjgg_jxdkx_py_latest_3_0",
                                    "layerName": "GCS330300K3003_NCTDZHZZ_JXDK_X",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "建新地块X_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/8cd76905874cbd09a9a6a5c8f3da6f96",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/6f0dc9fba82d130173b8479f67dfe646?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_ratx_cgcs_4549:gl_zjgg_jxdkx_py_latest_3_0"
                                },
                            ]
                        },
                        {
                            layerType: "GroupLayer",
                            name: "TZGZDK",
                            caption: "提质改造地块",
                            thematicMap: true,
                            subLayers: [
                                {
                                    "id": "gl_tzgzdk_gdzlts_lx_py_latest_3_0",
                                    "layerName": "GCS330300K3003_TDZZ_GDZLTS_LX",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "耕地质量提升-立项_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/e9816a3f5c011f9949924422c5ad9e27",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/6f0dc9fba82d130173b8479f67dfe646?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_ratx_cgcs_4549:gl_tzgzdk_gdzlts_lx_py_latest_3_0"
                                },
                                {
                                    "id": "gl_tzgzdk_gdzlts_ys_py_latest_3_0",
                                    "layerName": "GCS330300K3003_TDZZ_GDZLTS_YS",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "耕地质量提升-验收_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/9e56d3c8a9abd62f8c5a420cb4c705e4",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/6f0dc9fba82d130173b8479f67dfe646?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_ratx_cgcs_4549:gl_tzgzdk_gdzlts_ys_py_latest_3_0"
                                },
                                {
                                    "id": "gl_tzgzdk_hgsdk_lx_py_latest_3_0",
                                    "layerName": "GCS330300K3003_TDZZ_HGSDK_LX_X",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "旱改水地块-立项_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/3b434a56828b098def583d0db9f6baf0",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/6f0dc9fba82d130173b8479f67dfe646?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_ratx_cgcs_4549:gl_tzgzdk_hgsdk_lx_py_latest_3_0"
                                },
                                {
                                    "id": "gl_tzgzdk_hgsdk_ys_py_latest_3_0",
                                    "layerName": "GCS330300K3003_TDZZ_HGSDK_YS_X",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "旱改水地块-验收_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/6aa31a88d8c6513e26848f75df42ee6a",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/6f0dc9fba82d130173b8479f67dfe646?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_ratx_cgcs_4549:gl_tzgzdk_hgsdk_ys_py_latest_3_0"
                                },
                            ]
                        }
                    ]
                },
                {
					layerType: "GroupLayer",
					name: "KSGL",
					caption: "矿山管理",
					thematicMap: true,
					subLayers: [
                        {
                            "id": "gl_ksgl_lsks_py_latest_3_0",
                            "layerName": "GCS330300K3004_LSKS_LSKS_X",
                            "layerType": "SuperMapWMTS",
                            "caption": "绿色矿山_省级下发",
                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/0dbae40b12562854fce11463ee6f5f72",
                            "visible": false,
                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/6f0dc9fba82d130173b8479f67dfe646?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_ratx_cgcs_4549:gl_ksgl_lsks_py_latest_3_0"
                        },
                        {
                            layerType: "GroupLayer",
                            name: "CKQ",
                            caption: "采矿权",
                            thematicMap: true,
                            subLayers: [
                                {
                                    "id": "gl_ckq_ckqdj_py_latest_3_0",
                                    "layerName": "GCS330300K3004_CKQ_CKQDJ_X",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "采矿权登记_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/db005ca08cb7cb9f57069df17bec2168",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/6f0dc9fba82d130173b8479f67dfe646?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_ratx_cgcs_4549:gl_ckq_ckqdj_py_latest_3_0"
                                },
                                {
                                    "id": "gl_ckq_hdkqfw_py_latest_3_0",
                                    "layerName": "GCS330300K3004_CKQ_HDKQFW",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "划定矿区范围_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/29044a581355c18be01341ad2ed90f8f",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/6f0dc9fba82d130173b8479f67dfe646?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_ratx_cgcs_4549:gl_ckq_hdkqfw_py_latest_3_0"
                                },
                                {
                                    "id": "gl_ckq_ckqdj_ls_py_latest_3_0",
                                    "layerName": "GCS330300K3004_CKQDJ_LSX",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "采矿权登记-历史_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/3e59609e8d503047bca878ccb47376b7",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/6f0dc9fba82d130173b8479f67dfe646?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_ratx_cgcs_4549:gl_ckq_ckqdj_ls_py_latest_3_0"
                                },
                            ]
                        },
                        {
                            layerType: "GroupLayer",
                            name: "CLDJ",
                            caption: "储量登记",
                            thematicMap: true,
                            subLayers: [
                                {
                                    "id": "gl_cldj_cmdj_py_latest_3_0",
                                    "layerName": "GCS330300K3004_CLDJ_CMDJ_X",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "查明登记_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/7e403b0f2a49959eeb68eda5d856bbc9",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/6f0dc9fba82d130173b8479f67dfe646?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_ratx_cgcs_4549:gl_cldj_cmdj_py_latest_3_0"
                                },
                                {
                                    "id": "gl_cldj_drkqsdj_py_latest_3_0",
                                    "layerName": "GCS330300K3004_CLDJ_DRKQS",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "地热矿泉水登记_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/b733f6685c531883534b04e102d331ea",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/6f0dc9fba82d130173b8479f67dfe646?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_ratx_cgcs_4549:gl_cldj_drkqsdj_py_latest_3_0"
                                },
                                {
                                    "id": "gl_cldj_jsydyf_py_latest_3_0",
                                    "layerName": "GCS330300K3004_CLDJ_JSYDYF_X",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "建设用地压覆_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/a22753d9b17d4c142ff33bb9b66bc916",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/6f0dc9fba82d130173b8479f67dfe646?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_ratx_cgcs_4549:gl_cldj_jsydyf_py_latest_3_0"
                                },
                                {
                                    "id": "gl_cldj_yfdj_py_latest_3_0",
                                    "layerName": "GCS330300K3004_CLDJ_YFDJ_X",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "压覆登记_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/b61cfcf9de3bad1fb83f2d70b0aad0c1",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/6f0dc9fba82d130173b8479f67dfe646?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_ratx_cgcs_4549:gl_cldj_yfdj_py_latest_3_0"
                                },
                                {
                                    "id": "gl_cldj_zydj_pt_latest_3_0",
                                    "layerName": "GCS330300K3004_CLDJ_ZYDJ_X",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "占用登记_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/722c7382083d8185a2c51a8935ea0df0",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/6f0dc9fba82d130173b8479f67dfe646?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_ratx_cgcs_4549:gl_cldj_zydj_pt_latest_3_0"
                                },
                            ]
                        },
                        {
                            layerType: "GroupLayer",
                            name: "TKQ",
                            caption: "探矿权",
                            thematicMap: true,
                            subLayers: [
                                {
                                    "id": "gl_tkq_tkqdzdc_py_latest_3_0",
                                    "layerName": "GCS330300K3004_TKQ_DZDC_X",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "探矿权地质调查_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/5138606f2560185b35af4f34bb3dc675",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/6f0dc9fba82d130173b8479f67dfe646?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_ratx_cgcs_4549:gl_tkq_tkqdzdc_py_latest_3_0"
                                },
                                {
                                    "id": "gl_tkq_tkqkcdj_ls_py_latest_3_0",
                                    "layerName": "GCS330300K3004_TKQ_KCDJ_LSX",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "探矿权勘查登记_历史_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/e854f2b77981593453d76f57f2347dc5",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/6f0dc9fba82d130173b8479f67dfe646?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_ratx_cgcs_4549:gl_tkq_tkqkcdj_ls_py_latest_3_0"
                                },
                                {
                                    "id": "gl_tkq_tkqkcdj_py_latest_3_0",
                                    "layerName": "GCS330300K3004_TKQ_KCDJ_X",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "探矿权勘查登记_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/0501fff2eff6a408e7a47c26df7113bb",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/6f0dc9fba82d130173b8479f67dfe646?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_ratx_cgcs_4549:gl_tkq_tkqkcdj_py_latest_3_0"
                                },
                            ]
                        }
                    ]
                },
                {
					layerType: "GroupLayer",
					name: "STGL",
					caption: "生态修复",
					thematicMap: true,
					subLayers: [
                        {
                            layerType: "GroupLayer",
                            name: "FQKS",
                            caption: "废弃矿山",
                            thematicMap: true,
                            subLayers: [
                                {
                                    "id": "gl_stxf_fqks_py_latest_3_0",
                                    "layerName": "GCS330300K3004_FQKS_FQKS_X",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "废弃矿山_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/8eecd75bd915b23c9c53fdca43283b52",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/6f0dc9fba82d130173b8479f67dfe646?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_ratx_cgcs_4549:gl_stxf_fqks_py_latest_3_0"
                                },
                                {
                                    "id": "gl_fqks_ksstxf_pt_latest_3_0",
                                    "layerName": "GCS330300K302001_KS",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "矿山生态修复_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/85a8225d2b736f09c781f32f1b69a547",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/6f0dc9fba82d130173b8479f67dfe646?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_ratx_cgcs_4549:gl_fqks_ksstxf_pt_latest_3_0"
                                },
                            ]
                        }
                    ]
                },
                {
					layerType: "GroupLayer",
					name: "PHJG",
					caption: "批后监管",
					thematicMap: true,
					subLayers: [
                        {
                            "id": "gl_wtzz_dpfwtzz_pt_latest_3_0",
                            "layerName": "GCS330300K3099_WTZZ_DPFWTZZX",
                            "layerType": "SuperMapWMTS",
                            "caption": "大棚房问题整治_省级下发",
                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/ede7b1403ef440ebc9b5f7f41b25d9ee",
                            "visible": false,
                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/6f0dc9fba82d130173b8479f67dfe646?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_ratx_cgcs_4549:gl_wtzz_dpfwtzz_pt_latest_3_0"
                        },
                        {
                            "id": "gl_wtzz_ssnydzz_pt_latest_3_0",
                            "layerName": "GCS330300K3099_WTZZ_SSNYDZZX",
                            "layerType": "SuperMapWMTS",
                            "caption": "设施农用地整治_省级下发",
                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/9b8e2be498c12813d803da337d872c1c",
                            "visible": false,
                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/6f0dc9fba82d130173b8479f67dfe646?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_ratx_cgcs_4549:gl_wtzz_ssnydzz_pt_latest_3_0"
                        }                        
                    ]
                }
               
            ]
        }
    ]

});

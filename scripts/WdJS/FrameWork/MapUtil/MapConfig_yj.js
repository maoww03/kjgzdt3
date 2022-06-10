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
                            "layerName": "DCDYTB_2019",
                            "layerType": "SuperMapWMTS",
                            "caption": "低效调查单元图斑2019_省级下发",
                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/853affef4d1720963d1eac6176996ec4",
                            "visible": false,
                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/d2355fe57af66dc8b3a531808df86210?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yjtx_cgcs_4549:xz_dxydzxdc_2019_dxdcdytb_py_latest_3_0"
                        },
                        {
                            "id": "xz_dxydzxdc_2019_dxdcqtb_py_latest_3_0",
                            "layerName": "DCQTB_2019",
                            "layerType": "SuperMapWMTS",
                            "caption": "低效调查区图斑2019_省级下发",
                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/77c5d4b79314a685df752bb309c448b6",
                            "visible": false,
                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/d2355fe57af66dc8b3a531808df86210?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yjtx_cgcs_4549:xz_dxydzxdc_2019_dxdcqtb_py_latest_3_0"
                        },
                        {
                            "id": "xz_dxydzxdc_2020_dxdcdytb_py_latest_3_0",
                            "layerName": "DCDYTB_2020",
                            "layerType": "SuperMapWMTS",
                            "caption": "低效调查单元图斑2020_省级下发",
                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/cfb4aefdecb5dc8c37d62658adc482f9",
                            "visible": false,
                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/d2355fe57af66dc8b3a531808df86210?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yjtx_cgcs_4549:xz_dxydzxdc_2020_dxdcdytb_py_latest_3_0"
                        },
                        {
                            "id": "xz_dxydzxdc_2020_dxdcqtb_py_latest_3_0",
                            "layerName": "DCQTB_2020",
                            "layerType": "SuperMapWMTS",
                            "caption": "低效调查区图斑2020_省级下发",
                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/92f39a54b3103252d372cf865082d708",
                            "visible": false,
                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/d2355fe57af66dc8b3a531808df86210?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yjtx_cgcs_4549:xz_dxydzxdc_2020_dxdcqtb_py_latest_3_0"
                        },
                        {
                            layerType: "GroupLayer",
                            name: "BZNT",
                            caption: "标准农田",
                            thematicMap: true,
                            subLayers: [
                                {
                                    "id": "xz_tdzy_2017_bznt_py_latest_3_0",
                                    "layerName": "BZNT_BZNT_2017",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "标准农田2017",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/fa7d9a8ebc46e1b3242ef76b5dcbf219",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/d2355fe57af66dc8b3a531808df86210?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yjtx_cgcs_4549:xz_tdzy_2017_bznt_py_latest_3_0"
                                },
                            ]
                        },
                        {
                            layerType: "GroupLayer",
                            name: "TDPC",
                            caption: "土地评价",
                            thematicMap: true,
                            subLayers: [
                                {
                                    layerType: "GroupLayer",
                                    name: "GDZLDBNDGX",
                                    caption: "耕地质量等别年度更新",
                                    thematicMap: true,
                                    subLayers: [
                                        {
                                            "id": "xz_tdpj_2016_gdzldj_py_latest_3_0",
                                            "layerName": "GDZLDJ_2016",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "耕地质量等级2016",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/5fc837c06412b2b7b4b615e34bcca1bc",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/d2355fe57af66dc8b3a531808df86210?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yjtx_cgcs_4549:xz_tdpj_2016_gdzldj_py_latest_3_0"
                                        },
                                    ]
                                },
                            ]
                        },
                        {
                            layerType: "GroupLayer",
                            name: "NJJBNT",
                            caption: "永久基本农田",
                            thematicMap: true,
                            subLayers: [
                                {
                                    "id": "xz_tdzy_2017_jbntbhpk_py_latest_3_0",
                                    "layerName": "JBNT_JBNTBHPK_2017",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "基本农田保护片（块）2017",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/b8a5b13d463b00e70b1c44b224321a02",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/d2355fe57af66dc8b3a531808df86210?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yjtx_cgcs_4549:xz_tdzy_2017_jbntbhpk_py_latest_3_0"
                                },
                                {
                                    "id": "xz_tdzy_2017_jbntbhtb_py_latest_3_0",
                                    "layerName": "JBNT_JBNTBHTB_2017",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "基本农田保护图斑2017",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/0a37babec1ec3e05e4dfd3b905106b52",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/d2355fe57af66dc8b3a531808df86210?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yjtx_cgcs_4549:xz_tdzy_2017_jbntbhtb_py_latest_3_0"
                                },
                            ]
                        },
                        {
                            layerType: "GroupLayer",
                            name: "TDLYXZSJ",
                            caption: "土地利用现状数据",
                            thematicMap: true,
                            subLayers: [
                                {
                                    layerType: "GroupLayer",
                                    name: "DECQGTDDC",
                                    caption: "第二次全国土地调查",
                                    thematicMap: true,
                                    subLayers: [
                                        {
                                            "id": "xz_decqgtddc_2009_dltb_py_latest_3_0",
                                            "layerName": "TDLYXZ_DLTB_2009",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "地类图斑2009",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/4be9e91b589f4529505823d14444382d",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/d2355fe57af66dc8b3a531808df86210?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yjtx_cgcs_4549:xz_decqgtddc_2009_dltb_py_latest_3_0"
                                        },
                                    ]
                                },
                                {
                                    layerType: "GroupLayer",
                                    name: "LNTDBGDC",
                                    caption: "历年土地变更调查",
                                    thematicMap: true,
                                    subLayers: [
                                        {
                                            "id": "xz_tdbg_2015_dltb_py_latest_3_0",
                                            "layerName": "TDLYXZ_DLTB_2015",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "地类图斑2015",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/a79a5f5504a5eb997b604286ba8a5709",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/d2355fe57af66dc8b3a531808df86210?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yjtx_cgcs_4549:xz_tdbg_2015_dltb_py_latest_3_0"
                                        },
                                        {
                                            "id": "xz_tdbg_2015_lxdw_pt_latest_3_0",
                                            "layerName": "TDLYXZ_LXDW_2015",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "零星地物2015",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/9aa3313e9c9234ee20641a0d0270b517",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/d2355fe57af66dc8b3a531808df86210?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yjtx_cgcs_4549:xz_tdbg_2015_lxdw_pt_latest_3_0"
                                        },
                                        {
                                            "id": "xz_tdbg_2015_xzdw_ln_latest_3_0",
                                            "layerName": "TDLYXZ_XZDW_2015",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "线状地物2015",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/1ab4268f0cf0fea3002db5093cf58b9c",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/d2355fe57af66dc8b3a531808df86210?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yjtx_cgcs_4549:xz_tdbg_2015_xzdw_ln_latest_3_0"
                                        },
                                        {
                                            "id": "xz_tdbg_2017_dltb_py_latest_3_0",
                                            "layerName": "TDLYXZ_DLTB_2017",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "地类图斑2017",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/869d32b875120a2dc16027ac6a5e8fe9",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/d2355fe57af66dc8b3a531808df86210?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yjtx_cgcs_4549:xz_tdbg_2017_dltb_py_latest_3_0"
                                        },
                                        {
                                            "id": "xz_tdbg_2017_lxdw_pt_latest_3_0",
                                            "layerName": "TDLYXZ_LXDW_2017",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "零星地物2017",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/95df1da28f15821e7453fa87413337f9",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/d2355fe57af66dc8b3a531808df86210?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yjtx_cgcs_4549:xz_tdbg_2017_lxdw_pt_latest_3_0"
                                        },
                                        {
                                            "id": "xz_tdbg_2017_xzdw_ln_latest_3_0",
                                            "layerName": "TDLYXZ_XZDW_2017",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "线状地物2017",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/a41788a3343f87b654a4cd31dcebf61b",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/d2355fe57af66dc8b3a531808df86210?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yjtx_cgcs_4549:xz_tdbg_2017_xzdw_ln_latest_3_0"
                                        },
                                        {
                                            "id": "xz_tdbg_2018_dltb_py_latest_3_0",
                                            "layerName": "TDLYXZ_DLTB_2018",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "地类图斑2018",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/131bf593fce6a5b4722506c36c2f1e01",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/d2355fe57af66dc8b3a531808df86210?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yjtx_cgcs_4549:xz_tdbg_2018_dltb_py_latest_3_0"
                                        },
                                        {
                                            "id": "xz_tdbg_2018_lxdw_pt_latest_3_0",
                                            "layerName": "TDLYXZ_LXDW_2018",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "零星地物2018",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/80ce48f985860257598b95be721ecad4",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/d2355fe57af66dc8b3a531808df86210?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yjtx_cgcs_4549:xz_tdbg_2018_lxdw_pt_latest_3_0"
                                        },
                                        {
                                            "id": "xz_tdbg_2018_xzdw_ln_latest_3_0",
                                            "layerName": "TDLYXZ_XZDW_2018",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "线状地物2018",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/4b6df5734feef584b9d4cc0970afb244",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/d2355fe57af66dc8b3a531808df86210?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yjtx_cgcs_4549:xz_tdbg_2018_xzdw_ln_latest_3_0"
                                        },
                                    ]
                                }
                            ]
                        }
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
                            "layerName": "XJELCSLZY_20",
                            "layerType": "SuperMapWMTS",
                            "caption": "县级二级调查森林资源_省级下发",
                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/36c209549925943cb4cd26b0960cf91d",
                            "visible": false,
                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/d2355fe57af66dc8b3a531808df86210?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yjtx_cgcs_4549:xz_slzy_xjejdcslzy_py_latest_3_0"
                        },
                        {
                            "id": "xz_slzy_2018_slzyfbt1_py_latest_3_0",
                            "layerName": "SLZYFBT_2018_1",
                            "layerType": "SuperMapWMTS",
                            "caption": "森林资源分布图1_2018",
                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/6ee92f990ea8fc48b8d9c74a98a6739b",
                            "visible": false,
                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/d2355fe57af66dc8b3a531808df86210?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yjtx_cgcs_4549:xz_slzy_2018_slzyfbt1_py_latest_3_0"
                        },
                        {
                            "id": "xz_slzy_2018_slzyfbt2_py_latest_3_0",
                            "layerName": "SLZYFBT_2018_2",
                            "layerType": "SuperMapWMTS",
                            "caption": "森林资源分布图2_2018",
                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/652701adb0601b310890f82dc102c631",
                            "visible": false,
                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/d2355fe57af66dc8b3a531808df86210?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yjtx_cgcs_4549:xz_slzy_2018_slzyfbt2_py_latest_3_0"
                        },
                        {
                            layerType: "GroupLayer",
                            name: "GYL",
                            caption: "公益林",
                            thematicMap: true,
                            subLayers: [
                                {
                                    "id": "xz_slzy_2018_gjjgyl_py_latest_3_0",
                                    "layerName": "GJJGYL_2018",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "国家级公益林2018_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/51159be9a742fc475dc5dd5c9ac77636",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/d2355fe57af66dc8b3a531808df86210?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yjtx_cgcs_4549:xz_slzy_2018_gjjgyl_py_latest_3_0"
                                },
                                {
                                    "id": "xz_slzy_2018_sjstgyl_py_latest_3_0",
                                    "layerName": "SJSTGYL_2018",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "省级生态公益林2018_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/e71f044c365b14c2e6eafbb08b08a3a4",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/d2355fe57af66dc8b3a531808df86210?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yjtx_cgcs_4549:xz_slzy_2018_sjstgyl_py_latest_3_0"
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
                                    "layerName": "SYDBHQ_2018",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "水源地保护区2018_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/ae126d498c9faf778b4297a50f73ff1e",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/d2355fe57af66dc8b3a531808df86210?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yjtx_cgcs_4549:xz_slzy_2018_sydbhq_py_latest_3_0"
                                },
                                {
                                    "id": "xz_slzy_2020_zrbhd_py_latest_3_0",
                                    "layerName": "ZRBHD_2020",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "自然保护地2020_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/17b09311a0bfa14ded8aefb930083104",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/d2355fe57af66dc8b3a531808df86210?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yjtx_cgcs_4549:xz_slzy_2020_zrbhd_py_latest_3_0"
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
                                    "layerName": "GJZYSD_2018",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "国家重要湿地2018_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/aa1a4ce75693fc7bc103fe6af946bb4c",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/d2355fe57af66dc8b3a531808df86210?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yjtx_cgcs_4549:xz_sdzy_2018_gjzysd_pt_latest_3_0"
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
                            "layerName": "DZYJBHQ_DZGYX",
                            "layerType": "SuperMapWMTS",
                            "caption": "地质遗迹保护区_省级下发",
                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/971186bbe1ed23b376d8229e15ba58b4",
                            "visible": false,
                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/d2355fe57af66dc8b3a531808df86210?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yjtx_cgcs_4549:xz_dzsj_dzyjbhq_pt_latest_3_0"
                        },
                        {
                            layerType: "GroupLayer",
                            name: "DZZH",
                            caption: "地质灾害",
                            thematicMap: true,
                            subLayers: [
                                {
                                    "id": "xz_dzzh_yhd_pt_latest_3_0",
                                    "layerName": "ZHYHD_YHD_X",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "隐患点_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/a07506b3f3707baefd50bfa92171bb7c",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/d2355fe57af66dc8b3a531808df86210?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yjtx_cgcs_4549:xz_dzzh_yhd_pt_latest_3_0"
                                },
                                {
                                    "id": "xz_dzzh_zqd_pt_latest_3_0",
                                    "layerName": "ZXQD_ZQD_X",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "灾情点_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/94f5a9d78346b537a1e405c87526a517",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/d2355fe57af66dc8b3a531808df86210?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yjtx_cgcs_4549:xz_dzzh_zqd_pt_latest_3_0"
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
                                    "id": "gh_zykzx_czkfbj_py_latest_3_0",
                                    "layerName": "GH_ZYKZX_CZKFBJ_PY",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "城镇开发边界方案_离线",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/6bc0771301deb380b793d39e1a7ba66d",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/d2355fe57af66dc8b3a531808df86210?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yjtx_cgcs_4549:gh_zykzx_czkfbj_py_latest_3_0"
                                },
                                {
                                    "id": "gh_zykzx_gbznt_py_latest_3_0",
                                    "layerName": "GH_ZYKZX_GBZNT_PY",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "高标准农田_离线",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/7b9735159514bed39ae791441bcc5c3b",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/d2355fe57af66dc8b3a531808df86210?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yjtx_cgcs_4549:gh_zykzx_gbznt_py_latest_3_0"
                                },
                                {
                                    "id": "gh_zykzx_jqxzyd_py_latest_3_0",
                                    "layerName": "GH_ZYKZX_JQXZYD_PY",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "基期现状用地_离线",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/528da5e1bfbd0e93fb3d6584ed59b93e",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/d2355fe57af66dc8b3a531808df86210?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yjtx_cgcs_4549:gh_zykzx_jqxzyd_py_latest_3_0"
                                },
                                {
                                    "id": "gh_zykzx_lsgnq_py_latest_3_0",
                                    "layerName": "GH_ZYKZX_LSGNQ_PY",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "粮食功能区_离线",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/17b43cad2bded7d45430623ab1e56ddc",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/d2355fe57af66dc8b3a531808df86210?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yjtx_cgcs_4549:gh_zykzx_lsgnq_py_latest_3_0"
                                },
                                {
                                    "id": "gh_zykzx_stbhhx_py_latest_3_0",
                                    "layerName": "GH_ZYKZX_STBHHX_PY",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "生态保护红线_离线",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/17cefd5b37d118ccceb1c7290c1b391f",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/d2355fe57af66dc8b3a531808df86210?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yjtx_cgcs_4549:gh_zykzx_stbhhx_py_latest_3_0"
                                },
                                
                                {
                                    "id": "gh_zykzx_xzczjsjx_py_latest_3_0",
                                    "layerName": "GH_ZYKZX_XZCZJSJX_PY",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "现状城镇建设边界线_离线",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/f84d83bd448204155abf43ade965454b",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/d2355fe57af66dc8b3a531808df86210?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yjtx_cgcs_4549:gh_zykzx_xzczjsjx_py_latest_3_0"
                                },
                                {
                                    "id": "gh_zykzx_yjjbntrw_py_latest_3_0",
                                    "layerName": "GH_ZYKZX_YJJBNTRW_PY",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "永久基本农田任务（2017年划定）_离线",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/6a53428af1f03aa9efe5c88483cce39b",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/d2355fe57af66dc8b3a531808df86210?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yjtx_cgcs_4549:gh_zykzx_yjjbntrw_py_latest_3_0"
                                },
                                {
                                    "id": "gh_zykzx_czkfbjnxzygd_py_latest_3_0",
                                    "layerName": "GH_ZYKZX_CZKFBJNXZYGD_PY",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "城镇开发边界内现状用耕地_离线",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/bd2ddcc4c3c1ea39bd8418d140cd56a1",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/d2355fe57af66dc8b3a531808df86210?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yjtx_cgcs_4549:gh_zykzx_czkfbjnxzygd_py_latest_3_0"
                                },
                                {
                                    "id": "gh_zykzx_2018_stbhhx_py_latest_3_0",
                                    "layerName": "STBHHX_2018",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "生态保护红线2018_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/7ea9f6a43b38c2ebd92f26135564898e",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/d2355fe57af66dc8b3a531808df86210?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yjtx_cgcs_4549:gh_zykzx_2018_stbhhx_py_latest_3_0"
                                },
                                {
                                    "id": "gh_zykzx_2017_yjjbntbhhx_py_latest_3_0",
                                    "layerName": "YJJBNTBHHX_YJJBNTHX_2017",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "永久基本农田保护红线2017",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/0eceea88248b355315e0aaef9310eb2b",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/d2355fe57af66dc8b3a531808df86210?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yjtx_cgcs_4549:gh_zykzx_2017_yjjbntbhhx_py_latest_3_0"
                                },
                                {
                                    "id": "gh_zykzx_2020_yjjbntbhhx_py_latest_3_0",
                                    "layerName": "YJJBNTHX_2020",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "永久基本农田保护红线2020_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/f594542cb3284349cadfd2a1b82ae9f9",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/d2355fe57af66dc8b3a531808df86210?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yjtx_cgcs_4549:gh_zykzx_2020_yjjbntbhhx_py_latest_3_0"
                                },
                                {
                                    "id": "gh_zykzx_2018_yssthx_py_latest_3_0",
                                    "layerName": "GH_ZYKZX_2018_YSSTHX_PY",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "原始生态红线_离线",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/43c04af80f81d1b0867fb6bbb71eb31f",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/d2355fe57af66dc8b3a531808df86210?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yjtx_cgcs_4549:gh_zykzx_2018_yssthx_py_latest_3_0"
                                },
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
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/13a9882dc799885e4c72ae3823f2ad33",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/d2355fe57af66dc8b3a531808df86210?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yjtx_cgcs_4549:gh_kg_ydgh_py_latest_3_0"
                                        },

                                        {
                                            "id": "gh_kg_dkfh_pt_latest_3_0",
                                            "layerName": "BKY_DKFH_PT",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "控规_地块符号",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/6f4e62c412ad0cd6a8668c11c56c3453",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/d2355fe57af66dc8b3a531808df86210?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yjtx_cgcs_4549:gh_kg_dkfh_pt_latest_3_0"
                                        },
                                        {
                                            "id": "gh_kg_dkbh_ap_latest_3_0",
                                            "layerName": "BKY_DKBH_AP",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "控规_地块编号",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/5bb70d2c86e3795d0684f03d46307cce",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/d2355fe57af66dc8b3a531808df86210?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yjtx_cgcs_4549:gh_kg_dkbh_ap_latest_3_0"
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
                                        "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/cf36c5789cbb4669877927b8f71f4099",
                                        "visible": false,
                                        "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/d2355fe57af66dc8b3a531808df86210?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yjtx_cgcs_4549:gh_kg_lhlx_py_latest_3_0"
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
                                                "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/e2da4a99c09222b5a7ecefc97a482f14",
                                                "visible": false,
                                                "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/d2355fe57af66dc8b3a531808df86210?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yjtx_cgcs_4549:gh_kg_sshx_py_latest_3_0"
                                            },
                                            {
                                                "id": "gh_kg_sshx_ln_latest_3_0",
                                                "layerName": "BKK_SSHX_LN",
                                                "layerType": "SuperMapWMTS",
                                                "caption": "控规_基础设施黄线",
                                                "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/50e9f27a82f82d77c934668b7d7ed02b",
                                                "visible": false,
                                                "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/d2355fe57af66dc8b3a531808df86210?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yjtx_cgcs_4549:gh_kg_sshx_ln_latest_3_0"
                                            },
                                        ]
                                    },
                                    {
                                        "id": "gh_kg_sxlx_ln_latest_3_0",
                                        "layerName": "BKK_SXLX_LN",
                                        "layerType": "SuperMapWMTS",
                                        "caption": "控规_水系蓝线",
                                        "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/7fc4376b12d58383a34a0b74c2212621",
                                        "visible": false,
                                        "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/d2355fe57af66dc8b3a531808df86210?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yjtx_cgcs_4549:gh_kg_sxlx_ln_latest_3_0"
                                    },
                                    {
                                        "id": "gh_kg_wbzx_py_latest_3_0",
                                        "layerName": "BKK_WBZX_PY",
                                        "layerType": "SuperMapWMTS",
                                        "caption": "控规_文保紫线",
                                        "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/94e9c2e251b05c91e24ff2f78c1bb3fc",
                                        "visible": false,
                                        "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/d2355fe57af66dc8b3a531808df86210?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yjtx_cgcs_4549:gh_kg_wbzx_py_latest_3_0"
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
                                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/558ce7c1a17d20a078a804556728109d",
                                                    "visible": false,
                                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/d2355fe57af66dc8b3a531808df86210?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yjtx_cgcs_4549:gh_kg_dlzx_ln_latest_3_0"
                                                },
                                                {
                                                    "id": "gh_kg_dlbx_ln_latest_3_0",
                                                    "layerName": "BKJ_DLBX_LN",
                                                    "layerType": "SuperMapWMTS",
                                                    "caption": "控规_道路边线",
                                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/3c978805df88a9bb441babd2e5064807",
                                                    "visible": false,
                                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/d2355fe57af66dc8b3a531808df86210?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yjtx_cgcs_4549:gh_kg_dlbx_ln_latest_3_0"
                                                },
                                            ]
                                        },
                                        {
                                            "id": "gh_kg_gdx_ln_latest_3_0",
                                            "layerName": "BKJ_GDX_LN",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "控规_轨道线",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/5fe4cc36bc5d2071efdfd77caa8ea960",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/d2355fe57af66dc8b3a531808df86210?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yjtx_cgcs_4549:gh_kg_gdx_ln_latest_3_0"
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
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/a530c5c9c96118a8ec90f24c59e52fed",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/d2355fe57af66dc8b3a531808df86210?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yjtx_cgcs_4549:gh_kg_gpss_py_latest_3_0"
                                        },
                                        {
                                            "id": "gh_kg_gpss_pt_latest_3_0",
                                            "layerName": "BKP_GPSS_PT",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "控规_公共配套设施点",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/28853a57fa428b68beb06cdac2bba2be",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/d2355fe57af66dc8b3a531808df86210?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yjtx_cgcs_4549:gh_kg_gpss_pt_latest_3_0"
                                        },
                                        {
                                            "id": "gh_kg_gpfh_pt_latest_3_0",
                                            "layerName": "BKP_GPFH_PT",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "控规_公共配套设施符号",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/8aa2f3c0c9ddd84da1e3c2a63fc9eb95",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/d2355fe57af66dc8b3a531808df86210?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yjtx_cgcs_4549:gh_kg_gpfh_pt_latest_3_0"
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
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/f2ab8d46c46eba48c7c8837ca21128ab",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/d2355fe57af66dc8b3a531808df86210?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yjtx_cgcs_4549:gh_kg_xmfw_py_latest_3_0"
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
                                    "id": "gh_zdlyztgh_ghdl_py_latest_3_0",
                                    "layerName": "GH_ZDLYZTGH_GHDL_PY",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "规划地类_离线",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/9c16f43e0b1197bbd57dbcd17f69fc7a",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/d2355fe57af66dc8b3a531808df86210?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yjtx_cgcs_4549:gh_zdlyztgh_ghdl_py_latest_3_0"
                                },
                                {
                                    "id": "gh_zdlyztgh_ghgx_py_latest_3_0",
                                    "layerName": "GH_ZDLYZTGH_GHGX_PY",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "规划更新_离线",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/e133ceded7af68568e0efbcc1708ba87",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/d2355fe57af66dc8b3a531808df86210?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yjtx_cgcs_4549:gh_zdlyztgh_ghgx_py_latest_3_0"
                                },
                                {
                                    "id": "gh_zdlyztgh_ghgzq_py_latest_3_0",
                                    "layerName": "GH_ZDLYZTGH_GHGZQ_PY",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "规划管制区_离线",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/ad3f4d8dd41a4c41eb3ccfdc136f56cc",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/d2355fe57af66dc8b3a531808df86210?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yjtx_cgcs_4549:gh_zdlyztgh_ghgzq_py_latest_3_0"
                                },
                                {
                                    "id": "gh_zdlyztgh_ghyt_py_latest_3_0",
                                    "layerName": "GH_ZDLYZTGH_GHYT_PY",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "规划用途_离线",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/7b21ffccb21b0d38a93a97100575e69b",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/d2355fe57af66dc8b3a531808df86210?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yjtx_cgcs_4549:gh_zdlyztgh_ghyt_py_latest_3_0"
                                },
                                {
                                    "id": "gh_zdlyztgh_czkfbjbxzyjjbnt_py_latest_3_0",
                                    "layerName": "GH_ZDLYZTGH_CZKFBJBXZYJJBNT_PY",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "城镇开发边界内现状永久基本农田",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/076cd368dca9de8d205f0105c2180c65",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/d2355fe57af66dc8b3a531808df86210?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yjtx_cgcs_4549:gh_zdlyztgh_czkfbjbxzyjjbnt_py_latest_3_0"
                                },
                                
                                {
                                    "id": "gh_tdlyztgh_2017_jsydgzq_py_latest_3_0",
                                    "layerName": "JSYDGZQ_2017",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "建设用地管制区2017_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/c433553d9a74756543d4174ce6cc5a30",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/d2355fe57af66dc8b3a531808df86210?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yjtx_cgcs_4549:gh_tdlyztgh_2017_jsydgzq_py_latest_3_0"
                                },
                                {
                                    "id": "gh_tdlyztgh_2020_jsydgzq_py_latest_3_0",
                                    "layerName": "JSYDGZQ_2020",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "建设用地管制区2020_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/8db29b4d9729b38bb2cea0139f9e9049",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/d2355fe57af66dc8b3a531808df86210?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yjtx_cgcs_4549:gh_tdlyztgh_2020_jsydgzq_py_latest_3_0"
                                },
                                {
                                    "id": "gh_tdlyztgh_2011_ghyt_py_latest_3_0",
                                    "layerName": "TDLYGH_GHYT_2011",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "规划用途2011",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/7fa49870e3652408c63d51984344057b",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/d2355fe57af66dc8b3a531808df86210?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yjtx_cgcs_4549:gh_tdlyztgh_2011_ghyt_py_latest_3_0"
                                },
                                {
                                    "id": "gh_tdlyztgh_2011_jsydgzbj_ln_latest_3_0",
                                    "layerName": "TDLYGH_JSYDGZQBJ_2011",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "建设用地管制边界2011",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/e55999c0b1076a078af3bb881c40c7ad",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/d2355fe57af66dc8b3a531808df86210?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yjtx_cgcs_4549:gh_tdlyztgh_2011_jsydgzbj_ln_latest_3_0"
                                },
                                {
                                    "id": "gh_tdlyztgh_2011_jsydgzq_py_latest_3_0",
                                    "layerName": "TDLYGH_JSYDGZQ_2011",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "建设用地管制区2011",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/4c59971ff0240c42f825665c193ae8d1",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/d2355fe57af66dc8b3a531808df86210?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yjtx_cgcs_4549:gh_tdlyztgh_2011_jsydgzq_py_latest_3_0"
                                },
                                {
                                    "id": "gh_tdlyztgh_2012_ghyt_py_latest_3_0",
                                    "layerName": "TDLYGH_GHYT_2012",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "规划用途2012",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/c47e28c2584ef84bbb27560755d696ba",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/d2355fe57af66dc8b3a531808df86210?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yjtx_cgcs_4549:gh_tdlyztgh_2012_ghyt_py_latest_3_0"
                                },
                                {
                                    "id": "gh_tdlyztgh_2012_jsydgzbj_ln_latest_3_0",
                                    "layerName": "TDLYGH_JSYDGZQBJ_2012",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "建设用地管制边界2012",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/ea7213611ca0abfdc6bc5668cae950db",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/d2355fe57af66dc8b3a531808df86210?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yjtx_cgcs_4549:gh_tdlyztgh_2012_jsydgzbj_ln_latest_3_0"
                                },
                                {
                                    "id": "gh_tdlyztgh_2012_jsydgzq_py_latest_3_0",
                                    "layerName": "TDLYGH_JSYDGZQ_2012",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "建设用地管制区2012",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/baabebccef08a2cc469a1006243964a2",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/d2355fe57af66dc8b3a531808df86210?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yjtx_cgcs_4549:gh_tdlyztgh_2012_jsydgzq_py_latest_3_0"
                                },
                                {
                                    "id": "gh_tdlyztgh_2017_ghyt_py_latest_3_0",
                                    "layerName": "TDLYGH_GHYT_2017",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "规划用途2017",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/f0a08ba6d30f06ef3d9342614107587e",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/d2355fe57af66dc8b3a531808df86210?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yjtx_cgcs_4549:gh_tdlyztgh_2017_ghyt_py_latest_3_0"
                                },
                                {
                                    "id": "gh_tdlyztgh_2017_jsydgzbj_ln_latest_3_0",
                                    "layerName": "TDLYGH_JSYDGZQBJ_2017",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "建设用地管制边界2017",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/1367cda689a41db3255b055c0a8e7528",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/d2355fe57af66dc8b3a531808df86210?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yjtx_cgcs_4549:gh_tdlyztgh_2017_jsydgzbj_ln_latest_3_0"
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
                                    "layerName": "DXYDZKF_XMHX",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "低效用地再开发项目红线_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/b6d7f0b557891d01125a2fd1a9b47738",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/d2355fe57af66dc8b3a531808df86210?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yjtx_cgcs_4549:xz_dxydzkf_dxydzkfxmhx_py_latest_3_0"
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
                                    "layerName": "GHJT_GHJBTZ_L",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "规划局部调整L_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/b02f1d3cbd69f655734d0c9ff00c9a07",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/d2355fe57af66dc8b3a531808df86210?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yjtx_cgcs_4549:gl_gtkjytgzhkfly_ghjbtzl_py_latest_3_0"
                                },
                                {
                                    "id": "gl_gtkjytgzhkfly_ghjbtzx_py_latest_3_0",
                                    "layerName": "GHJT_GHJBTZ_X",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "规划局部调整X_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/6f8874311e3ecba93fb8c2eb15b5a415",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/d2355fe57af66dc8b3a531808df86210?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yjtx_cgcs_4549:gl_gtkjytgzhkfly_ghjbtzx_py_latest_3_0"
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
                                    "layerName": "JSYDBP_NZYDK_L",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "建设用地报批（农转用地块）L_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/c7b1fa91129583c1a7ab86217e9bea56",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/d2355fe57af66dc8b3a531808df86210?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yjtx_cgcs_4549:gl_nzybp_jsydbpl_py_latest_3_0"
                                },
                                {
                                    "id": "gl_nzybp_jsydbpx_py_latest_3_0",
                                    "layerName": "JSYDBP_NZYDK_X",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "建设用地报批（农转用地块）X_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/441771a139c867cfb58c6aa0bce8cada",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/d2355fe57af66dc8b3a531808df86210?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yjtx_cgcs_4549:gl_nzybp_jsydbpx_py_latest_3_0"
                                },
                                {
                                    "id": "gl_nzybp_jsydbp_pzwh_py_latest_3_0",
                                    "layerName": "JSYDBP_PZWH",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "建设用地报批（批准文号）",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/88956ff0f55f26dba601d9e19831c15e",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/d2355fe57af66dc8b3a531808df86210?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yjtx_cgcs_4549:gl_nzybp_jsydbp_pzwh_py_latest_3_0"
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
                                    "layerName": "JSYDYS_YSDK_X",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "建设用地预审（预审地块）_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/711692bc9d5399c500c1d5ba9ee05c2b",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/d2355fe57af66dc8b3a531808df86210?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yjtx_cgcs_4549:gl_gtkjytgzhkfly_jsydys_py_latest_3_0"
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
                                    "layerName": "SSNYD_BHYNFW",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "补划基本农田_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/98b98cb0b3afc808a8d9f737265ad7cb",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/d2355fe57af66dc8b3a531808df86210?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yjtx_cgcs_4549:gl_ssnydba_bhjbnt_py_latest_3_0"
                                },
                                {
                                    "id": "gl_ssnydba_phgzcfw_py_latest_3_0",
                                    "layerName": "SSNYD_GZCPHJZD",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "破坏耕作层范围_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/484cd885d2533d92d4949e8e6c8f2fb5",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/d2355fe57af66dc8b3a531808df86210?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yjtx_cgcs_4549:gl_ssnydba_phgzcfw_py_latest_3_0"
                                },
                                {
                                    "id": "gl_ssnydba_nydfw_py_latest_3_0",
                                    "layerName": "SSNYD_NYDJZD",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "农用地范围_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/5fefd14473716129ab7f20e988c89629",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/d2355fe57af66dc8b3a531808df86210?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yjtx_cgcs_4549:gl_ssnydba_nydfw_py_latest_3_0"
                                },
                                {
                                    "id": "gl_ssnydba_phynfw_py_latest_3_0",
                                    "layerName": "SSNYD_PHYNJZD",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "破坏永农范围_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/d19746aac680c02f90db349a7e19d06f",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/d2355fe57af66dc8b3a531808df86210?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yjtx_cgcs_4549:gl_ssnydba_phynfw_py_latest_3_0"
                                },
                                {
                                    "id": "gl_ssnydba_zyynfw_py_latest_3_0",
                                    "layerName": "SSNYD_ZYYNJZD",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "占用永农范围_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/85e7d00e2dcf5162a1d93a632e3e671c",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/d2355fe57af66dc8b3a531808df86210?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yjtx_cgcs_4549:gl_ssnydba_zyynfw_py_latest_3_0"
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
                                    "layerName": "TDCB",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "土地储备_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/41aaec274790a8e207e388519b89b96e",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/d2355fe57af66dc8b3a531808df86210?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yjtx_cgcs_4549:gl_tdcb_tdcb_py_latest_3_0"
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
                                    "id": "gl_tdgy_gddkj_py_latest_3_0",
                                    "layerName": "GL_TDGY_GDDKJ_PY",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "供地地块（旧）_离线",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/b7334ab5c5fe90003ded8e2963214acd",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/d2355fe57af66dc8b3a531808df86210?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yjtx_cgcs_4549:gl_tdgy_gddkj_py_latest_3_0"
                                },                                
                                {
                                    "id": "gl_tdgy_gddk_py_latest_3_0",
                                    "layerName": "TDGY_GDDK_X",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "供地地块_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/901f3f65738ba1f4fa1b82c3789ee709",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/d2355fe57af66dc8b3a531808df86210?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yjtx_cgcs_4549:gl_tdgy_gddk_py_latest_3_0"
                                },
                                {
                                    "id": "gl_tdgy_zpgcrdk_py_latest_3_0",
                                    "layerName": "TDGY_TDJY_ZPGCR",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "土地交易-招拍挂出让地块_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/79f5ad838ded8963fdb694fea4361269",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/d2355fe57af66dc8b3a531808df86210?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yjtx_cgcs_4549:gl_tdgy_zpgcrdk_py_latest_3_0"
                                },
                                {
                                    "id": "gl_tdgy_gddk_hsy_py_latest_3_0",
                                    "layerName": "TDGY_GDDK_HSY",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "供地地块-历史",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/23a70fa92821194dac0dda1bb7fdacec",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/d2355fe57af66dc8b3a531808df86210?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yjtx_cgcs_4549:gl_tdgy_gddk_hsy_py_latest_3_0"
                                },
                            ]
                        },
                        {
                            ayerType: "GroupLayer",
                            name: "NZYBP",
                            caption: "农转用报批",
                            thematicMap: true,
                            subLayers: [
                                {
                                    "id": "gl_nzybp_nzytc_21_17_lx_latest_3_0",
                                    "layerName": "gl_nzybp_nzytc_21_17_py",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "农转用图层（更新至21年17批次）_离线",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/986526b57bd8008415d9bb769c4ae6f4",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/287b156961b7ecc16e8fa52a6e765d03?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yqtx_cgcs_4549:gl_nzybp_nzytc_21_17_lx_latest_3_0"
                                }
                                
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
                            "layerName": "TDZZ_GBZJS_LX_X",
                            "layerType": "SuperMapWMTS",
                            "caption": "高标准建设地块-立项_省级下发",
                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/a64c54ec83d3498ffe3409aeedb07804",
                            "visible": false,
                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/d2355fe57af66dc8b3a531808df86210?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yjtx_cgcs_4549:gl_tdzz_gbzjsdk_lx_py_latest_3_0"
                        },
                        {
                            "id": "gl_tdzz_gbzjsdk_ys_py_latest_3_0",
                            "layerName": "TDZZ_GBZJS_YS_X",
                            "layerType": "SuperMapWMTS",
                            "caption": "高标准建设地块-验收_省级下发",
                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/9334505680c93340f2ebc80d97e6c0cd",
                            "visible": false,
                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/d2355fe57af66dc8b3a531808df86210?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yjtx_cgcs_4549:gl_tdzz_gbzjsdk_ys_py_latest_3_0"
                        },
                        {
                            "id": "gl_tdzz_gbztsdk_lx_py_latest_3_0",
                            "layerName": "TDZZ_GBZTS_LX_X",
                            "layerType": "SuperMapWMTS",
                            "caption": "高标准提升地块-立项_省级下发",
                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/9598e69d5021cc196dee60ebdb8c06f6",
                            "visible": false,
                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/d2355fe57af66dc8b3a531808df86210?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yjtx_cgcs_4549:gl_tdzz_gbztsdk_lx_py_latest_3_0"
                        },
                        {
                            "id": "gl_tdzz_gbztsdk_ys_py_latest_3_0",
                            "layerName": "TDZZ_GBZTS_YS_X",
                            "layerType": "SuperMapWMTS",
                            "caption": "高标准提升地块-验收_省级下发",
                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/5159f63ee87224ebde81f74aaa7448d9",
                            "visible": false,
                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/d2355fe57af66dc8b3a531808df86210?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yjtx_cgcs_4549:gl_tdzz_gbztsdk_ys_py_latest_3_0"
                        },
                        {
                            "id": "gl_tdzz_jsydfkdk_lx_py_latest_3_0",
                            "layerName": "TDZZ_JSYDFK_LX_",
                            "layerType": "SuperMapWMTS",
                            "caption": "建设用地复垦地块-立项_省级下发",
                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/7322a38b60273fac992bb39e3aa5965c",
                            "visible": false,
                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/d2355fe57af66dc8b3a531808df86210?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yjtx_cgcs_4549:gl_tdzz_jsydfkdk_lx_py_latest_3_0"
                        },
                        {
                            "id": "gl_jdzz_jsydfkdk_ys_py_latest_3_0",
                            "layerName": "TDZZ_JSYDFK_YS_",
                            "layerType": "SuperMapWMTS",
                            "caption": "建设用地复垦地块-验收_省级下发",
                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/80a21d9c1a5bf0a1d39c157e590c4c0e",
                            "visible": false,
                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/d2355fe57af66dc8b3a531808df86210?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yjtx_cgcs_4549:gl_jdzz_jsydfkdk_ys_py_latest_3_0"
                        },
                        {
                            "id": "gl_tdzz_kzgd_lx_py_latest_3_0",
                            "layerName": "TDZZ_KZGD_LX_X",
                            "layerType": "SuperMapWMTS",
                            "caption": "垦造耕地-立项_省级下发",
                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/c936f4193688ae689d46573adef6adcf",
                            "visible": false,
                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/d2355fe57af66dc8b3a531808df86210?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yjtx_cgcs_4549:gl_tdzz_kzgd_lx_py_latest_3_0"
                        },
                        {
                            "id": "gl_tdzz_kzgd_ys_py_latest_3_0",
                            "layerName": "TDZZ_KZGD_YS_X",
                            "layerType": "SuperMapWMTS",
                            "caption": "垦造耕地-验收_省级下发",
                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/3439b5a09f85ad77e643c86273e2fc5b",
                            "visible": false,
                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/d2355fe57af66dc8b3a531808df86210?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yjtx_cgcs_4549:gl_tdzz_kzgd_ys_py_latest_3_0"
                        },
                        {
                            layerType: "GroupLayer",
                            name: "ZJGG",
                            caption: "增减挂钩",
                            thematicMap: true,
                            subLayers: [
                                {
                                    "id": "gl_zjgg_cjdkl_py_latest_3_0",
                                    "layerName": "NCTDZHZZ_CJDK_L",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "拆旧地块L_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/a974b42bec89fc61647424b1db3b3fcf",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/d2355fe57af66dc8b3a531808df86210?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yjtx_cgcs_4549:gl_zjgg_cjdkl_py_latest_3_0"
                                },
                                {
                                    "id": "gl_zjgg_jxdkl_py_latest_3_0",
                                    "layerName": "NCTDZHZZ_JXDK_L",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "建新地块L_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/0089b88f9dd78e85087df998b122135e",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/d2355fe57af66dc8b3a531808df86210?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yjtx_cgcs_4549:gl_zjgg_jxdkl_py_latest_3_0"
                                },
                                {
                                    "id": "gl_zjgg_jxdkx_py_latest_3_0",
                                    "layerName": "NCTDZHZZ_JXDK_X",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "建新地块X_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/c68fa52743a428d31454af4a8af517c2",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/d2355fe57af66dc8b3a531808df86210?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yjtx_cgcs_4549:gl_zjgg_jxdkx_py_latest_3_0"
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
                                    "layerName": "TDZZ_GDZLTS_LX",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "耕地质量提升-立项_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/f1a966a9a65251d7a86c34ecd350f61f",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/d2355fe57af66dc8b3a531808df86210?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yjtx_cgcs_4549:gl_tzgzdk_gdzlts_lx_py_latest_3_0"
                                },
                                {
                                    "id": "gl_tzgzdk_gdzlts_ys_py_latest_3_0",
                                    "layerName": "TDZZ_GDZLTS_YS",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "耕地质量提升-验收_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/15b078ae311b0e6a7d9c3cd19c9b7455",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/d2355fe57af66dc8b3a531808df86210?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yjtx_cgcs_4549:gl_tzgzdk_gdzlts_ys_py_latest_3_0"
                                },
                                {
                                    "id": "gl_tzgzdk_hgsdk_lx_py_latest_3_0",
                                    "layerName": "TDZZ_HGSDK_LX_X",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "旱改水地块-立项_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/f1447bdfdd37cb82d7f329004dd94cee",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/d2355fe57af66dc8b3a531808df86210?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yjtx_cgcs_4549:gl_tzgzdk_hgsdk_lx_py_latest_3_0"
                                },
                                {
                                    "id": "gl_tzgzdk_hgsdk_ys_py_latest_3_0",
                                    "layerName": "TDZZ_HGSDK_YS_X",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "旱改水地块-验收_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/9dd01b2d63d8ac1c49ab5a17b612d1bb",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/d2355fe57af66dc8b3a531808df86210?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yjtx_cgcs_4549:gl_tzgzdk_hgsdk_ys_py_latest_3_0"
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
                            "layerName": "LSKS_LSKS_X",
                            "layerType": "SuperMapWMTS",
                            "caption": "绿色矿山_省级下发",
                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/5728897d8b8a8a7f70735eb8d6d4ac40",
                            "visible": false,
                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/d2355fe57af66dc8b3a531808df86210?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yjtx_cgcs_4549:gl_ksgl_lsks_py_latest_3_0"
                        },
                        {
                            layerType: "GroupLayer",
                            name: "CKQ",
                            caption: "采矿权",
                            thematicMap: true,
                            subLayers: [
                                {
                                    "id": "gl_ckq_ckqdj_py_latest_3_0",
                                    "layerName": "CKQ_CKQDJ_X",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "采矿权登记_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/4185b28364a7b006bc5ac1eedcfb769d",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/d2355fe57af66dc8b3a531808df86210?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yjtx_cgcs_4549:gl_ckq_ckqdj_py_latest_3_0"
                                },
                                {
                                    "id": "gl_ckq_hdkqfw_py_latest_3_0",
                                    "layerName": "CKQ_HDKQFW",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "划定矿区范围_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/7dc6669c9f72de6c70507246f4951fa2",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/d2355fe57af66dc8b3a531808df86210?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yjtx_cgcs_4549:gl_ckq_hdkqfw_py_latest_3_0"
                                },
                                {
                                    "id": "gl_ckq_ckqdj_ls_py_latest_3_0",
                                    "layerName": "CKQDJ_LSX",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "采矿权登记-历史_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/e4ccd79e9ccca7f96d8ceac0fc46daf9",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/d2355fe57af66dc8b3a531808df86210?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yjtx_cgcs_4549:gl_ckq_ckqdj_ls_py_latest_3_0"
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
                                    "layerName": "CLDJ_CMDJ_X",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "查明登记_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/1b2592ff8c10256156aeec97e53be39d",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/d2355fe57af66dc8b3a531808df86210?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yjtx_cgcs_4549:gl_cldj_cmdj_py_latest_3_0"
                                },
                                {
                                    "id": "gl_cldj_drkqsdj_py_latest_3_0",
                                    "layerName": "CLDJ_DRKQS",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "地热矿泉水登记_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/76814763ac7bad74dcd4973a0adf1dd0",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/d2355fe57af66dc8b3a531808df86210?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yjtx_cgcs_4549:gl_cldj_drkqsdj_py_latest_3_0"
                                },
                                {
                                    "id": "gl_cldj_jsydyf_py_latest_3_0",
                                    "layerName": "CLDJ_JSYDYF_X",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "建设用地压覆_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/4fb568922693abeba067cfc582b05659",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/d2355fe57af66dc8b3a531808df86210?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yjtx_cgcs_4549:gl_cldj_jsydyf_py_latest_3_0"
                                },
                                {
                                    "id": "gl_cldj_yfdj_py_latest_3_0",
                                    "layerName": "CLDJ_YFDJ_X",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "压覆登记_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/d3b27950d02882f6637388044dfb31ad",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/d2355fe57af66dc8b3a531808df86210?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yjtx_cgcs_4549:gl_cldj_yfdj_py_latest_3_0"
                                },
                                {
                                    "id": "gl_cldj_zydj_pt_latest_3_0",
                                    "layerName": "CLDJ_ZYDJ_X",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "占用登记_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/c9b7cd211925502d1a265453432853ba",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/d2355fe57af66dc8b3a531808df86210?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yjtx_cgcs_4549:gl_cldj_zydj_pt_latest_3_0"
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
                                    "layerName": "TKQ_DZDC_X",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "探矿权地质调查_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/8f56007f24290321e3cbb45786ad042a",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/d2355fe57af66dc8b3a531808df86210?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yjtx_cgcs_4549:gl_tkq_tkqdzdc_py_latest_3_0"
                                },
                                {
                                    "id": "gl_tkq_tkqkcdj_ls_py_latest_3_0",
                                    "layerName": "TKQ_KCDJ_LSX",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "探矿权勘查登记_历史_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/4dd1730019187f542d43c550f2fa305b",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/d2355fe57af66dc8b3a531808df86210?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yjtx_cgcs_4549:gl_tkq_tkqkcdj_ls_py_latest_3_0"
                                },
                                {
                                    "id": "gl_tkq_tkqkcdj_py_latest_3_0",
                                    "layerName": "TKQ_KCDJ_X",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "探矿权勘查登记_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/6bebfb8db54182d09b14908683bd9b4b",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/d2355fe57af66dc8b3a531808df86210?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yjtx_cgcs_4549:gl_tkq_tkqkcdj_py_latest_3_0"
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
                                    "layerName": "FQKS_FQKS_X",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "废弃矿山_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/784423b007f85884e19078633d756052",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/d2355fe57af66dc8b3a531808df86210?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yjtx_cgcs_4549:gl_stxf_fqks_py_latest_3_0"
                                },
                                {
                                    "id": "gl_fqks_ksstxf_pt_latest_3_0",
                                    "layerName": "KS",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "矿山生态修复_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/070aeff4df8a287da9d8129de586eb1b",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/d2355fe57af66dc8b3a531808df86210?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yjtx_cgcs_4549:gl_fqks_ksstxf_pt_latest_3_0"
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
                            "layerName": "WTZZ_DPFWTZZX",
                            "layerType": "SuperMapWMTS",
                            "caption": "大棚房问题整治_省级下发",
                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/15f79f2a5731da622ec6adb1e34fd3cb",
                            "visible": false,
                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/d2355fe57af66dc8b3a531808df86210?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yjtx_cgcs_4549:gl_wtzz_dpfwtzz_pt_latest_3_0"
                        },
                        {
                            "id": "gl_wtzz_ssnydzz_pt_latest_3_0",
                            "layerName": "WTZZ_SSNYDZZX",
                            "layerType": "SuperMapWMTS",
                            "caption": "设施农用地整治_省级下发",
                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/58c5f31792a60d34a3b2f5761407e9e4",
                            "visible": false,
                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/d2355fe57af66dc8b3a531808df86210?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yjtx_cgcs_4549:gl_wtzz_ssnydzz_pt_latest_3_0"
                        },
                    ]
                }
               
            ]
        }
    ]

});

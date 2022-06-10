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
                    name: "SLZY",
                    caption: "森林资源",
                    thematicMap: true,
                    subLayers:[
                        {
                            "id": "xz_slzy_xjejdcslzy_py_latest_3_0",
                            "layerName": "xz_slzy_xjejdcslzy_py_latest_3_0",
                            "layerType": "SuperMapWMTS",
                            "caption": "县级二级调查森林资源_省级下发",
                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/82e0179ad9d38269fcf66336ae5db792",
                            "visible": false,
                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/287b156961b7ecc16e8fa52a6e765d03?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yqtx_cgcs_4549:xz_slzy_xjejdcslzy_py_latest_3_0"
                        },
                        {
                            layerType: "GroupLayer",
                            name: "GYL",
                            caption: "公益林",
                            thematicMap: true,
                            subLayers: [
                                {
                                    "id": "xz_slzy_2018_gjjgyl_py_latest_3_0",
                                    "layerName": "xz_slzy_2018_gjjgyl_py_latest_3_0",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "国家级公益林2018_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/6974535aa1676e924ca791c519481961",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/287b156961b7ecc16e8fa52a6e765d03?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yqtx_cgcs_4549:xz_slzy_2018_gjjgyl_py_latest_3_0"
                                },
                                {
                                    "id": "xz_slzy_2018_sjstgyl_py_latest_3_0",
                                    "layerName": "xz_slzy_2018_sjstgyl_py_latest_3_0",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "省级生态公益林2018_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/a01151155c1022d8a8cd012884aa7e35",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/287b156961b7ecc16e8fa52a6e765d03?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yqtx_cgcs_4549:xz_slzy_2018_sjstgyl_py_latest_3_0"
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
                                    "layerName": "xz_slzy_2018_sydbhq_py_latest_3_0",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "水源地保护区2018_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/efb6c957d68b7a3feadc68cdb0088171",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/287b156961b7ecc16e8fa52a6e765d03?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yqtx_cgcs_4549:xz_slzy_2018_sydbhq_py_latest_3_0"
                                },
                                {
                                    "id": "xz_slzy_2020_zrbhd_py_latest_3_0",
                                    "layerName": "xz_slzy_2020_zrbhd_py_latest_3_0",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "自然保护地2020_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/4a8c7a61751c43a31e1cc19b84af8d31",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/287b156961b7ecc16e8fa52a6e765d03?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yqtx_cgcs_4549:xz_slzy_2020_zrbhd_py_latest_3_0"
                                },
                                {
                                    "id": "xz_zrbhd_yqqhsjsdgy_py_latest_3_0",
                                    "layerName": "sdgy",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "乐清市和省级湿地公园",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/eb9a592468a8fe2b6166c3aec4ea6bf7",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/287b156961b7ecc16e8fa52a6e765d03?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yqtx_cgcs_4549:xz_zrbhd_yqqhsjsdgy_py_latest_3_0"
                                },
                                {
                                    "id": "xz_zrbhd_lswzsjfjmsq_py_latest_3_0",
                                    "layerName": "fjmsq",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "灵山温州市级风景名胜区",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/2608cdf8e1b30306ea9a767a93bc2eb9",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/287b156961b7ecc16e8fa52a6e765d03?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yqtx_cgcs_4549:xz_zrbhd_lswzsjfjmsq_py_latest_3_0"
                                },
                                {
                                    "id": "xz_zrbhd_xmdgjjhytbbhq_py_latest_3_0",
                                    "layerName": "hytbbhq",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "西门岛国家级海洋特别保护区",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/2ef31ba5ce576f251b612bf826a171b0",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/287b156961b7ecc16e8fa52a6e765d03?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yqtx_cgcs_4549:xz_zrbhd_xmdgjjhytbbhq_py_latest_3_0"
                                },
                                {
                                    "id": "xz_zrbhd_88_ydsfjmsq_py_latest_3_0",
                                    "layerName": "fjmsq_88",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "雁荡山风景名胜区88版",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/455382456d4f560b43ea399b38f64611",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/287b156961b7ecc16e8fa52a6e765d03?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yqtx_cgcs_4549:xz_zrbhd_88_ydsfjmsq_py_latest_3_0"
                                },
                                {
                                    "id": "xz_zrbhd_ydsgjdzgy_py_latest_3_0",
                                    "layerName": "gjdzgy",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "雁荡山国家地质公园",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/2bd40803bc1d1d9f3b6cbbfd6cd5eae2",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/287b156961b7ecc16e8fa52a6e765d03?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yqtx_cgcs_4549:xz_zrbhd_ydsgjdzgy_py_latest_3_0"
                                },
                                {
                                    "id": "xz_zrbhd_ydsgjslgy_py_latest_3_0",
                                    "layerName": "gjslgy",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "雁荡山国家森林公园",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/46f43ff6db49873859f5f0f2fdc1f60c",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/287b156961b7ecc16e8fa52a6e765d03?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yqtx_cgcs_4549:xz_zrbhd_ydsgjslgy_py_latest_3_0"
                                },

                            ]
                        }
        
                    ]
                },
                {
                    layerType: "GroupLayer",
                    name: "TDZY",
                    caption: "土地资源",
                    thematicMap: true,
                    subLayers: [
                        {
                            "id": "xz_tdzy_2018_bznt_py_latest_3_0",
                            "layerName": "BZNT_BZNT_2018",
                            "layerType": "SuperMapWMTS",
                            "caption": "标准农田2018",
                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/754da1ed985a55ea211cde9ec1603462",
                            "visible": false,
                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/287b156961b7ecc16e8fa52a6e765d03?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yqtx_cgcs_4549:xz_tdzy_2018_bznt_py_latest_3_0"
                        },
                        {
                            "id": "xz_tdzy_2019_bznt_py_latest_3_0",
                            "layerName": "BZNT_BZNT_2019",
                            "layerType": "SuperMapWMTS",
                            "caption": "标准农田2019",
                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/7031d061323f2b15466c7b252b037de3",
                            "visible": false,
                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/287b156961b7ecc16e8fa52a6e765d03?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yqtx_cgcs_4549:xz_tdzy_2019_bznt_py_latest_3_0"
                        },
                        {
                            layerType: "GroupLayer",
                            name: "DXYDZXDC",
                            caption: "低效用地专项调查",
                            thematicMap: true,
                            subLayers: [
                                {
                                    "id": "xz_dxydzxdc_2019_dxdcdytb_py_latest_3_0",
                                    "layerName": "xz_dxydzxdc_2019_dxdcdytb_py_latest_3_0",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "低效调查单元图斑2019_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/e7eba2d0ba1abcd04b929ac4a51f9081",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/287b156961b7ecc16e8fa52a6e765d03?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yqtx_cgcs_4549:xz_dxydzxdc_2019_dxdcdytb_py_latest_3_0"
                                },
                                {
                                    "id": "xz_dxydzxdc_2019_dxdcqtb_py_latest_3_0",
                                    "layerName": "xz_dxydzxdc_2019_dxdcqtb_py_latest_3_0",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "低效调查区图斑2019_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/13dc9644681009c793db7a9b772ccf95",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/287b156961b7ecc16e8fa52a6e765d03?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yqtx_cgcs_4549:xz_dxydzxdc_2019_dxdcqtb_py_latest_3_0"
                                },
                                {
                                    "id": "xz_dxydzxdc_2020_dxdcdytb_py_latest_3_0",
                                    "layerName": "xz_dxydzxdc_2020_dxdcdytb_py_latest_3_0",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "低效调查单元图斑2020_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/10de923ae9384b937debba63b498bbea",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/287b156961b7ecc16e8fa52a6e765d03?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yqtx_cgcs_4549:xz_dxydzxdc_2020_dxdcdytb_py_latest_3_0"
                                },
                                {
                                    "id": "xz_dxydzxdc_2020_dxdcqtb_py_latest_3_0",
                                    "layerName": "xz_dxydzxdc_2020_dxdcqtb_py_latest_3_0",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "低效调查区图斑2020_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/5f9a9131bc073d7490aebd1ff0fcb2f0",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/287b156961b7ecc16e8fa52a6e765d03?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yqtx_cgcs_4549:xz_dxydzxdc_2020_dxdcqtb_py_latest_3_0"
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
                                    name: "LNTDBGDC",
                                    caption: "历年土地变更调查",
                                    thematicMap: true,
                                    subLayers: [
                                        {
                                            "id": "xz_tdbg_2017_dljx_ln_latest_3_0",
                                            "layerName": "TDLYXZ_DLJX_2017",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "地类界线2017",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/c6a31adad5ffd1a49286e45e02a70066",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/287b156961b7ecc16e8fa52a6e765d03?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yqtx_cgcs_4549:xz_tdbg_2017_dljx_ln_latest_3_0"
                                        },
                                        {
                                            "id": "xz_tdbg_2017_dltb_py_latest_3_0",
                                            "layerName": "TDLYXZ_DLTB_2017",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "地类图斑2017",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/1208c9e40e2ac3f24fddb71259673578",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/287b156961b7ecc16e8fa52a6e765d03?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yqtx_cgcs_4549:xz_tdbg_2017_dltb_py_latest_3_0"
                                        },
                                        {
                                            "id": "xz_tdbg_2017_lxdw_pt_latest_3_0",
                                            "layerName": "TDLYXZ_LXDW_2017",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "零星地物2017",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/dd5335bae56c9ec7c9c0c81dbbe0e02a",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/287b156961b7ecc16e8fa52a6e765d03?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yqtx_cgcs_4549:xz_tdbg_2017_lxdw_pt_latest_3_0"
                                        },
                                        {
                                            "id": "xz_tdbg_2017_xzdw_ln_latest_3_0",
                                            "layerName": "TDLYXZ_XZDW_2017",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "线状地物2017",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/372fe47280c309195b731aeb89adc822",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/287b156961b7ecc16e8fa52a6e765d03?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yqtx_cgcs_4549:xz_tdbg_2017_xzdw_ln_latest_3_0"
                                        },
                                        {
                                            "id": "xz_tdbg_1996_dljx_ln_latest_3_0",
                                            "layerName": "TDLYXZ_DLJX_1996",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "地类界线_1996",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/f89ea051d34cc218f2603a479791214f",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/287b156961b7ecc16e8fa52a6e765d03?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yqtx_cgcs_4549:xz_tdbg_1996_dljx_ln_latest_3_0"
                                        },
                                        {
                                            "id": "xz_tdbg_1996_dltb_py_latest_3_0",
                                            "layerName": "TDLYZY_DLTB_1996",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "地类图斑1996",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/9d253076d6fa73628abc4fba48a9cf99",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/287b156961b7ecc16e8fa52a6e765d03?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yqtx_cgcs_4549:xz_tdbg_1996_dltb_py_latest_3_0"
                                        },
                                        {
                                            "id": "xz_tdbg_1996_lxdw_pt_latest_3_0",
                                            "layerName": "TDLYXZ_LXDW_1996",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "零星地物1996",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/225cf41ab85c65364b401295649edcc0",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/287b156961b7ecc16e8fa52a6e765d03?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yqtx_cgcs_4549:xz_tdbg_1996_lxdw_pt_latest_3_0"
                                        },
                                        {
                                            "id": "xz_tdbg_1996_tbbh_pt_latest_3_0",
                                            "layerName": "TDLYZY_TBBH_1996",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "图斑编号1996",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/fe04d067301b608821661b23115bbc2e",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/287b156961b7ecc16e8fa52a6e765d03?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yqtx_cgcs_4549:xz_tdbg_1996_tbbh_pt_latest_3_0"
                                        },
                                        {
                                            "id": "xz_tdbg_1996_xzdw_ln_latest_3_0",
                                            "layerName": "TDLYZY_XZDW_1996",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "线状地物1996",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/2a719392ebfef66c9a79c8a779fa0645",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/287b156961b7ecc16e8fa52a6e765d03?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yqtx_cgcs_4549:xz_tdbg_1996_xzdw_ln_latest_3_0"
                                        },
                                        {
                                            "id": "xz_tdbg_2004_dlfh_pt_latest_3_0",
                                            "layerName": "TDLYZY_DLFH_2004",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "地类符号2004",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/2d3d4326b09fa8fc8078a95041dc31b6",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/287b156961b7ecc16e8fa52a6e765d03?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yqtx_cgcs_4549:xz_tdbg_2004_dlfh_pt_latest_3_0"
                                        },
                                        {
                                            "id": "xz_tdbg_2004_dltb_py_latest_3_0",
                                            "layerName": "TDLYZY_DLTB_2004",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "地类图斑2004",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/ceb439eaf55416cb003dedd9851a7b89",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/287b156961b7ecc16e8fa52a6e765d03?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yqtx_cgcs_4549:xz_tdbg_2004_dltb_py_latest_3_0"
                                        },
                                        {
                                            "id": "xz_tdbg_2004_lxdw_pt_latest_3_0",
                                            "layerName": "TDLYZY_LXDW_2004",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "零星地物2004",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/270b09d54df90c830eefa25046919658",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/287b156961b7ecc16e8fa52a6e765d03?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yqtx_cgcs_4549:xz_tdbg_2004_lxdw_pt_latest_3_0"
                                        },
                                        {
                                            "id": "xz_tdbg_2004_xzdw_ln_latest_3_0",
                                            "layerName": "TDLYZY_XZDW_2004",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "线状地物2004",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/5b7cb1b779329b9a46f35eb4b1712be2",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/287b156961b7ecc16e8fa52a6e765d03?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yqtx_cgcs_4549:xz_tdbg_2004_xzdw_ln_latest_3_0"
                                        },
                                        {
                                            "id": "xz_tdbg_2010_dljx_ln_latest_3_0",
                                            "layerName": "TDLYXZ_DLJX_2010",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "地类界线2010",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/cfcbfed7728ff76b61aa44094f754e65",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/287b156961b7ecc16e8fa52a6e765d03?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yqtx_cgcs_4549:xz_tdbg_2010_dljx_ln_latest_3_0"
                                        },
                                        {
                                            "id": "xz_tdbg_2010_dltb_py_latest_3_0",
                                            "layerName": "TDLYXZ_DLTB_2010",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "地类图斑2010",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/b2bf1d9aaaf8cbacf1b3a18a12c2dca0",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/287b156961b7ecc16e8fa52a6e765d03?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yqtx_cgcs_4549:xz_tdbg_2010_dltb_py_latest_3_0"
                                        },
                                        {
                                            "id": "xz_tdbg_2010_lxdw_pt_latest_3_0",
                                            "layerName": "TDLYXZ_LXDW_2010",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "零星地物2010",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/0a7b7fdce50d3de4408a70e225c3c2db",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/287b156961b7ecc16e8fa52a6e765d03?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yqtx_cgcs_4549:xz_tdbg_2010_lxdw_pt_latest_3_0"
                                        },
                                        {
                                            "id": "xz_tdbg_2010_xzdw_ln_latest_3_0",
                                            "layerName": "TDLYXZ_XZDW_2010",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "线状地物2010",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/825b507765eada84867877fc2c432728",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/287b156961b7ecc16e8fa52a6e765d03?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yqtx_cgcs_4549:xz_tdbg_2010_xzdw_ln_latest_3_0"
                                        },
                                        {
                                            "id": "xz_tdbg_2011_dljx_ln_latest_3_0",
                                            "layerName": "TDLYXZ_DLJX_2011",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "地类界线2011",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/503c521d7d8d683d3ccb00df8902f6b6",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/287b156961b7ecc16e8fa52a6e765d03?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yqtx_cgcs_4549:xz_tdbg_2011_dljx_ln_latest_3_0"
                                        },
                                        {
                                            "id": "xz_tdbg_2011_dltb_py_latest_3_0",
                                            "layerName": "TDLYXZ_DLTB_2011",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "地类图斑2011",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/dc1ba4f21d44ed78c81c4e6e89f67915",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/287b156961b7ecc16e8fa52a6e765d03?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yqtx_cgcs_4549:xz_tdbg_2011_dltb_py_latest_3_0"
                                        },
                                        {
                                            "id": "xz_tdbg_2011_lxdw_pt_latest_3_0",
                                            "layerName": "TDLYXZ_LXDW_2011",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "零星地物2011",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/50260e52c53c1feb62e5e794b4213ce5",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/287b156961b7ecc16e8fa52a6e765d03?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yqtx_cgcs_4549:xz_tdbg_2011_lxdw_pt_latest_3_0"
                                        },
                                        {
                                            "id": "xz_tdbg_2011_xzdw_ln_latest_3_0",
                                            "layerName": "TDLYXZ_XZDW_2011",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "线状地物2011",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/d64d16d715027e3e601a68348f98b822",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/287b156961b7ecc16e8fa52a6e765d03?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yqtx_cgcs_4549:xz_tdbg_2011_xzdw_ln_latest_3_0"
                                        },
                                        {
                                            "id": "xz_tdbg_2012_dljx_ln_latest_3_0",
                                            "layerName": "TDLYXZ_DLJX_2012",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "地类界线2012",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/1f4e73a055f4d11c2dbb641429873297",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/287b156961b7ecc16e8fa52a6e765d03?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yqtx_cgcs_4549:xz_tdbg_2012_dljx_ln_latest_3_0"
                                        },
                                        {
                                            "id": "xz_tdbg_2012_dltb_py_latest_3_0",
                                            "layerName": "TDLYXZ_DLTB_2012",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "地类图斑2012",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/78edec11a8801cbf128109263de116b7",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/287b156961b7ecc16e8fa52a6e765d03?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yqtx_cgcs_4549:xz_tdbg_2012_dltb_py_latest_3_0"
                                        },
                                        {
                                            "id": "xz_tdbg_2012_lxdw_pt_latest_3_0",
                                            "layerName": "TDLYXZ_LXDW_2012",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "零星地物2012",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/004a546cdcf894e68d6d601aefef24fa",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/287b156961b7ecc16e8fa52a6e765d03?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yqtx_cgcs_4549:xz_tdbg_2012_lxdw_pt_latest_3_0"
                                        },
                                        {
                                            "id": "xz_tdbg_2012_xzdw_ln_latest_3_0",
                                            "layerName": "TDLYXZ_XZDW_2012",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "线状地物2012",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/dd2db637872afde853c69c2a93687b9e",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/287b156961b7ecc16e8fa52a6e765d03?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yqtx_cgcs_4549:xz_tdbg_2012_xzdw_ln_latest_3_0"
                                        },
                                        {
                                            "id": "xz_tdbg_2013_dljx_ln_latest_3_0",
                                            "layerName": "TDLYXZ_DLJX_2013",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "地类界线2013",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/828f2507abaf6750f99bc4d16e7a019a",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/287b156961b7ecc16e8fa52a6e765d03?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yqtx_cgcs_4549:xz_tdbg_2013_dljx_ln_latest_3_0"
                                        },
                                        {
                                            "id": "xz_tdbg_2013_dltb_py_latest_3_0",
                                            "layerName": "TDLYXZ_DLTB_2013",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "地类图斑2013",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/bd70465f22a3536b4a3132e8c7980e97",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/287b156961b7ecc16e8fa52a6e765d03?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yqtx_cgcs_4549:xz_tdbg_2013_dltb_py_latest_3_0"
                                        },
                                        {
                                            "id": "xz_tdbg_2013_lxdw_pt_latest_3_0",
                                            "layerName": "TDLYXZ_LXDW_2013",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "零星地物2013",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/f85a9a3a20b168d7848e61c08428956f",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/287b156961b7ecc16e8fa52a6e765d03?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yqtx_cgcs_4549:xz_tdbg_2013_lxdw_pt_latest_3_0"
                                        },
                                        {
                                            "id": "xz_tdbg_2013_xzdw_ln_latest_3_0",
                                            "layerName": "TDLYXZ_XZDW_2013",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "线状地物2013",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/ceb17219acf1e2b765d1d7de0d472228",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/287b156961b7ecc16e8fa52a6e765d03?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yqtx_cgcs_4549:xz_tdbg_2013_xzdw_ln_latest_3_0"
                                        },
                                        {
                                            "id": "xz_tdbg_2014_dljx_ln_latest_3_0",
                                            "layerName": "TDLYXZ_DLJX_2014",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "地类界线2014",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/17179492df04255d6fe0213c431b8a72",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/287b156961b7ecc16e8fa52a6e765d03?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yqtx_cgcs_4549:xz_tdbg_2014_dljx_ln_latest_3_0"
                                        },
                                        {
                                            "id": "xz_tdbg_2014_dltb_py_latest_3_0",
                                            "layerName": "TDLYXZ_DLTB_2014",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "地类图斑2014",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/19264385e0442c79ba6d4f27d27010a3",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/287b156961b7ecc16e8fa52a6e765d03?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yqtx_cgcs_4549:xz_tdbg_2014_dltb_py_latest_3_0"
                                        },
                                        {
                                            "id": "xz_tdbg_2014_lxdw_pt_latest_3_0",
                                            "layerName": "TDLYXZ_LXDW_2014",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "零星地物2014",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/cc30e3e8ce2e5f1f731f295ac9b5cdaa",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/287b156961b7ecc16e8fa52a6e765d03?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yqtx_cgcs_4549:xz_tdbg_2014_lxdw_pt_latest_3_0"
                                        },
                                        {
                                            "id": "xz_tdbg_2014_xzdw_ln_latest_3_0",
                                            "layerName": "TDLYXZ_XZDW_2014",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "线状地物2014",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/19d8e22d91869d9b681098d95463ad3a",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/287b156961b7ecc16e8fa52a6e765d03?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yqtx_cgcs_4549:xz_tdbg_2014_xzdw_ln_latest_3_0"
                                        },
                                        {
                                            "id": "xz_tdbg_2015_dljx_ln_latest_3_0",
                                            "layerName": "TDLYXZ_DLJX_2015",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "地类界线2015",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/36ed17a17b7a861476e8ea20773225e5",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/287b156961b7ecc16e8fa52a6e765d03?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yqtx_cgcs_4549:xz_tdbg_2015_dljx_ln_latest_3_0"
                                        },
                                        {
                                            "id": "xz_tdbg_2015_dltb_py_latest_3_0",
                                            "layerName": "TDLYXZ_DLTB_2015",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "地类图斑2015",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/f32d0b9d22d27835f612bf3073741b18",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/287b156961b7ecc16e8fa52a6e765d03?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yqtx_cgcs_4549:xz_tdbg_2015_dltb_py_latest_3_0"
                                        },
                                        {
                                            "id": "xz_tdbg_2015_lxdw_pt_latest_3_0",
                                            "layerName": "TDLYXZ_LXDW_2015",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "零星地物2015",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/218718cede99e1207fb5a462698d3174",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/287b156961b7ecc16e8fa52a6e765d03?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yqtx_cgcs_4549:xz_tdbg_2015_lxdw_pt_latest_3_0"
                                        },
                                        {
                                            "id": "xz_tdbg_2015_xzdw_ln_latest_3_0",
                                            "layerName": "TDLYXZ_XZDW_2015",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "线状地物2015",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/5a3c9149b54b4b1383248985d17f328a",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/287b156961b7ecc16e8fa52a6e765d03?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yqtx_cgcs_4549:xz_tdbg_2015_xzdw_ln_latest_3_0"
                                        },
                                        {
                                            "id": "xz_tdbg_2016_dljx_ln_latest_3_0",
                                            "layerName": "TDLYXZ_DLJX_2016",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "地类界线2016",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/29f5d8068bc250aa558f2a2fa82bfa13",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/287b156961b7ecc16e8fa52a6e765d03?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yqtx_cgcs_4549:xz_tdbg_2016_dljx_ln_latest_3_0"
                                        },
                                        {
                                            "id": "xz_tdbg_2016_dltb_py_latest_3_0",
                                            "layerName": "TDLYXZ_DLTB_2016",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "地类图斑2016",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/8a309b780b2a69b8dcf0221d4db0c16d",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/287b156961b7ecc16e8fa52a6e765d03?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yqtx_cgcs_4549:xz_tdbg_2016_dltb_py_latest_3_0"
                                        },
                                        {
                                            "id": "xz_tdbg_2016_lxdw_pt_latest_3_0",
                                            "layerName": "TDLYXZ_LXDW_2016",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "零星地物2016",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/d8eeec832824872712c182ddedc6a307",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/287b156961b7ecc16e8fa52a6e765d03?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yqtx_cgcs_4549:xz_tdbg_2016_lxdw_pt_latest_3_0"
                                        },
                                        {
                                            "id": "xz_tdbg_2016_xzdw_ln_latest_3_0",
                                            "layerName": "TDLYXZ_XZDW_2016",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "线状地物2016",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/bd1e9f08bd436de0e4825d09363d4c69",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/287b156961b7ecc16e8fa52a6e765d03?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yqtx_cgcs_4549:xz_tdbg_2016_xzdw_ln_latest_3_0"
                                        },
                                        {
                                            "id": "xz_tdbg_2018_dljx_ln_latest_3_0",
                                            "layerName": "TDLYXZ_DLJX_2018",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "地类界线2018",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/e8838abeda838da815d1a096fbb39667",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/287b156961b7ecc16e8fa52a6e765d03?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yqtx_cgcs_4549:xz_tdbg_2018_dljx_ln_latest_3_0"
                                        },
                                        {
                                            "id": "xz_tdbg_2018_dltb_py_latest_3_0",
                                            "layerName": "TDLYXZ_DLTB_2018",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "地类图斑2018",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/05c66a90a2a2c4c9cb4bb77a1766caab",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/287b156961b7ecc16e8fa52a6e765d03?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yqtx_cgcs_4549:xz_tdbg_2018_dltb_py_latest_3_0"
                                        },
                                        {
                                            "id": "xz_tdbg_2018_lxdw_pt_latest_3_0",
                                            "layerName": "TDLYXZ_LXDW_2018",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "零星地物2018",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/70afabb21afae04cbfe86c133a7ef1f5",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/287b156961b7ecc16e8fa52a6e765d03?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yqtx_cgcs_4549:xz_tdbg_2018_lxdw_pt_latest_3_0"
                                        },
                                        {
                                            "id": "xz_tdbg_2018_xzdw_ln_latest_3_0",
                                            "layerName": "TDLYXZ_XZDW_2018",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "线状地物2018",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/41a0314d7c11d3d4ec105912ee7ffa34",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/287b156961b7ecc16e8fa52a6e765d03?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yqtx_cgcs_4549:xz_tdbg_2018_xzdw_ln_latest_3_0"
                                        },
                                        {
                                            "id": "xz_tdbg_2019_dljx_ln_latest_3_0",
                                            "layerName": "TDLYXZ_DLJX_2019",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "地类界线2019",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/314bf5ff903d266d17c81a832165a9aa",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/287b156961b7ecc16e8fa52a6e765d03?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yqtx_cgcs_4549:xz_tdbg_2019_dljx_ln_latest_3_0"
                                        },
                                        {
                                            "id": "xz_tdbg_2019_dltb_py_latest_3_0",
                                            "layerName": "TDLYXZ_DLTB_2019",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "地类图斑2019",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/ddb52c6da298b6ac92b356bcb07a8955",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/287b156961b7ecc16e8fa52a6e765d03?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yqtx_cgcs_4549:xz_tdbg_2019_dltb_py_latest_3_0"
                                        },
                                        {
                                            "id": "xz_tdbg_2019_lxdw_pt_latest_3_0",
                                            "layerName": "TDLYXZ_LXDW_2019",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "零星地物2019",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/f99800de6673acc3f72acce6ae3193e3",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/287b156961b7ecc16e8fa52a6e765d03?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yqtx_cgcs_4549:xz_tdbg_2019_lxdw_pt_latest_3_0"
                                        },
                                        {
                                            "id": "xz_tdbg_2019_xzdw_ln_latest_3_0",
                                            "layerName": "TDLYXZ_XZDW_2019",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "线状地物2019",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/4d9e250d542d89a45937ac667fbd3df4",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/287b156961b7ecc16e8fa52a6e765d03?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yqtx_cgcs_4549:xz_tdbg_2019_xzdw_ln_latest_3_0"
                                        },
                                        {
                                            "id": "xz_tdbg_2020_dltb_py_latest_3_0",
                                            "layerName": "TDLYXZ_DLTB_2020",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "地类图斑2020",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/8e39f727dc32d278ff79b0e391f1f383",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/287b156961b7ecc16e8fa52a6e765d03?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yqtx_cgcs_4549:xz_tdbg_2020_dltb_py_latest_3_0"
                                        },

                                    ]
                                },
                                {
                                    layerType: "GroupLayer",
                                    name: "DECQGTDDC",
                                    caption: "第二次全国土地调查",
                                    thematicMap: true,
                                    subLayers: [
                                        {
                                            "id": "xz_decqgtddc_2009_dljx_ln_latest_3_0",
                                            "layerName": "TDLYXZ_DLJX_2009",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "地类界线2009",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/c4ed96bd763a0603c6a3a081d1b2e8b3",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/287b156961b7ecc16e8fa52a6e765d03?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yqtx_cgcs_4549:xz_decqgtddc_2009_dljx_ln_latest_3_0"
                                        },
                                        {
                                            "id": "xz_decqgtddc_2009_dltb_py_latest_3_0",
                                            "layerName": "TDLYXZ_DLTB_2009",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "地类图斑2009",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/b4263674dd960bd4fe12ef1ce1606276",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/287b156961b7ecc16e8fa52a6e765d03?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yqtx_cgcs_4549:xz_decqgtddc_2009_dltb_py_latest_3_0"
                                        },
                                        {
                                            "id": "xz_decqgtddc_2009_lxdw_pt_latest_3_0",
                                            "layerName": "TDLYXZ_LXDW_2009",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "零星地物2009",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/f727046be69ef453671079c210b1f999",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/287b156961b7ecc16e8fa52a6e765d03?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yqtx_cgcs_4549:xz_decqgtddc_2009_lxdw_pt_latest_3_0"
                                        },
                                        {
                                            "id": "xz_decqgtddc_2009_xzdw_ln_latest_3_0",
                                            "layerName": "TDLYXZ_XZDW_2009",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "线状地物2009",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/5bb9b86dccc332542da78b7d827ef1e8",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/287b156961b7ecc16e8fa52a6e765d03?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yqtx_cgcs_4549:xz_decqgtddc_2009_xzdw_ln_latest_3_0"
                                        },
                                    ]
                                },

                            ]
                        },
                        {
                            layerType: "GroupLayer",
                            name: "YJJBNT",
                            caption: "永久基本农田",
                            thematicMap: true,
                            subLayers: [
                                {
                                    "id": "xz_tdzy_2016_gbzjbnt_py_latest_3_0",
                                    "layerName": "JBNT_GBZJBNT_2016",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "高标准基本农田2016",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/d3a8b69bb795dba40df725d6836a1324",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/287b156961b7ecc16e8fa52a6e765d03?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yqtx_cgcs_4549:xz_tdzy_2016_gbzjbnt_py_latest_3_0"
                                },
                                {
                                    "id": "xz_tdzy_2016_yjjbnt_py_latest_3_0",
                                    "layerName": "JBNT_YJJBNT_2016",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "永久基本农田2016",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/08d3797945339d606e887b9c8a1dd279",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/287b156961b7ecc16e8fa52a6e765d03?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yqtx_cgcs_4549:xz_tdzy_2016_yjjbnt_py_latest_3_0"
                                },
                                {
                                    "id": "xz_yyjbnt_2009_jbntbhpk_py_latest_3_0",
                                    "layerName": "JBNT_JBNTBHPK_2009",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "基本农田保护片区（块）2009",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/c8f997aa6ec8592db27bd14d462d9935",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/287b156961b7ecc16e8fa52a6e765d03?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yqtx_cgcs_4549:xz_yyjbnt_2009_jbntbhpk_py_latest_3_0"
                                },
                                {
                                    "id": "xz_yyjbnt_2009_jbntbhtb_py_latest_3_0",
                                    "layerName": "JBNT_JBNTBHTB_2009",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "基本农田保护图斑2009",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/15b6a5983db08062b23f54c90d012cd0",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/287b156961b7ecc16e8fa52a6e765d03?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yqtx_cgcs_4549:xz_yyjbnt_2009_jbntbhtb_py_latest_3_0"
                                },
                                {
                                    "id": "xz_yyjbnt_2011_jbntbhpk_py_latest_3_0",
                                    "layerName": "JBNT_JBNTBHPK_2011",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "基本农田保护片区（块）2011",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/3cbbaedf757fb5d09cd6e3bee679455b",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/287b156961b7ecc16e8fa52a6e765d03?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yqtx_cgcs_4549:xz_yyjbnt_2011_jbntbhpk_py_latest_3_0"
                                },
                                {
                                    "id": "xz_yyjbnt_2011_jbntbhtb_py_latest_3_0",
                                    "layerName": "JBNT_JBNTBHTB_2011",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "基本农田保护图斑2011",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/97ea57b705ce61e925ba7f24f9b4208a",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/287b156961b7ecc16e8fa52a6e765d03?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yqtx_cgcs_4549:xz_yyjbnt_2011_jbntbhtb_py_latest_3_0"
                                },
                                {
                                    "id": "xz_yyjbnt_tzhctb_py_latest_3_0",
                                    "layerName": "tzhctb",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "调整划出图斑",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/ddec787d1ed0210cf7cdb1e8a0c06673",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/287b156961b7ecc16e8fa52a6e765d03?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yqtx_cgcs_4549:xz_yyjbnt_tzhctb_py_latest_3_0"
                                },
                                {
                                    "id": "xz_yyjbnt_yjjbntbhtb_py_latest_3_0",
                                    "layerName": "yjjbntbhtb_2017",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "永久基本农田保护图斑2017",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/63f3ce547449366a5c8eef12def1f092",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/287b156961b7ecc16e8fa52a6e765d03?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yqtx_cgcs_4549:xz_yyjbnt_yjjbntbhtb_py_latest_3_0"
                                },

                            ]
                        },
                        {
                            layerType: "GroupLayer",
                            name: "TDPJ",
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
                                            "id": "xz_gdzldbndgx_bctrzd_py_latest_3_0",
                                            "layerName": "TDZY_GDZLPJ_BCTRZD",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "表层土壤质地分布区",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/b4391187d4bbdeee7f6a3b30dcb1fc6a",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/287b156961b7ecc16e8fa52a6e765d03?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yqtx_cgcs_4549:xz_gdzldbndgx_bctrzd_py_latest_3_0"
                                        },
                                        {
                                            "id": "xz_gdzldbndgx_bzyd_pt_latest_3_0",
                                            "layerName": "TDZY_GDZLPJ_BZYD",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "标准样地",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/4fabfc222f1cfc585ce16b01fca45b6e",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/287b156961b7ecc16e8fa52a6e765d03?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yqtx_cgcs_4549:xz_gdzldbndgx_bzyd_pt_latest_3_0"
                                        },
                                        {
                                            "id": "xz_gdzldbndgx_ggbzl_py_latest_3_0",
                                            "layerName": "TDZY_GDZLPJ_GGBZL",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "灌溉保证率分布区",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/1330d4023ba7b7816fdc2b9ca7b55088",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/287b156961b7ecc16e8fa52a6e765d03?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yqtx_cgcs_4549:xz_gdzldbndgx_ggbzl_py_latest_3_0"
                                        },
                                        {
                                            "id": "xz_gdzldbndgx_gzzdfb_py_latest_3_0",
                                            "layerName": "TDZY_GDZLPJ_GZZDFB",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "耕作制度分布区",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/7a12f75d8da09f86b22fabe049048439",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/287b156961b7ecc16e8fa52a6e765d03?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yqtx_cgcs_4549:xz_gdzldbndgx_gzzdfb_py_latest_3_0"
                                        },
                                        {
                                            "id": "xz_gdzldbndgx_hbgd_py_latest_3_0",
                                            "layerName": "TDZY_GDZLPJ_HBGD",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "海拔高度分布区",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/dfb5878cff1a07eb960c1422334548fd",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/287b156961b7ecc16e8fa52a6e765d03?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yqtx_cgcs_4549:xz_gdzldbndgx_hbgd_py_latest_3_0"
                                        },
                                        {
                                            "id": "xz_gdzldbndgx_jjxs_py_latest_3_0",
                                            "layerName": "TDZY_GDZLPJ_JJXS",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "土地经济系数等值区",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/bd6c64a61a0ef1b328a39430963ad734",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/287b156961b7ecc16e8fa52a6e765d03?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yqtx_cgcs_4549:xz_gdzldbndgx_jjxs_py_latest_3_0"
                                        },
                                        {
                                            "id": "xz_gdzldbndgx_lyxs_py_latest_3_0",
                                            "layerName": "TDZY_GDZLPJ_LYXS",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "利用系数分布区",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/84ece4ef4961cd8903cfb1853817794b",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/287b156961b7ecc16e8fa52a6e765d03?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yqtx_cgcs_4549:xz_gdzldbndgx_lyxs_py_latest_3_0"
                                        },
                                        {
                                            "id": "xz_gdzldbndgx_pstj_py_latest_3_0",
                                            "layerName": "TDZY_GDZLPJ_PSTJ",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "排水条件分布区",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/a1bd5b9016f38632e15a92409e63fbad",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/287b156961b7ecc16e8fa52a6e765d03?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yqtx_cgcs_4549:xz_gdzldbndgx_pstj_py_latest_3_0"
                                        },
                                        {
                                            "id": "xz_gdzldbndgx_trfl_py_latest_3_0",
                                            "layerName": "TDZY_GDZLPJ_TRFL",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "土壤肥力分布区",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/6f34dcd97a4ab3206c1968ee0478fd8f",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/287b156961b7ecc16e8fa52a6e765d03?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yqtx_cgcs_4549:xz_gdzldbndgx_trfl_py_latest_3_0"
                                        },
                                        {
                                            "id": "xz_gdzldbndgx_tryjzhl_py_latest_3_0",
                                            "layerName": "TDZY_GDZLPJ_TRYJZHL",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "土壤有机质含量分布区",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/9cb22d9b6bba0325cd48ca1f7476c7ab",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/287b156961b7ecc16e8fa52a6e765d03?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yqtx_cgcs_4549:xz_gdzldbndgx_tryjzhl_py_latest_3_0"
                                        },
                                        {
                                            "id": "xz_gdzldbndgx_xjfddy_py_latest_3_0",
                                            "layerName": "TDZY_GDZLPJ_XJFDDY",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "县级分等单元",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/fa2547ec1f66b620457b07e882a57ed0",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/287b156961b7ecc16e8fa52a6e765d03?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yqtx_cgcs_4549:xz_gdzldbndgx_xjfddy_py_latest_3_0"
                                        },
                                        {
                                            "id": "xz_gdzldbndgx_xjlxfddy_pt_latest_3_0",
                                            "layerName": "TDZY_GDZLPJ_XJLXFDDY",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "县级零星分等单元",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/1b31ee0f3b497f24b1abc0a52b5360bc",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/287b156961b7ecc16e8fa52a6e765d03?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yqtx_cgcs_4549:xz_gdzldbndgx_xjlxfddy_pt_latest_3_0"
                                        },
                                        {
                                            "id": "xz_gdzldbndgx_zacjdbsd_py_latest_3_0",
                                            "layerName": "TDZY_GDZLPJ_ZACJDBSD",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "障碍层距地表深度分布区",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/2e157ec63286c98041d1c74fd7666ce0",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/287b156961b7ecc16e8fa52a6e765d03?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yqtx_cgcs_4549:xz_gdzldbndgx_zacjdbsd_py_latest_3_0"
                                        },
                                        {
                                            "id": "xz_gdzldbndgx_zbq_py_latest_3_0",
                                            "layerName": "TDZY_GDZLPJ_ZBQ",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "分等因素指标区",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/11d8ed32376fd677873cb9c2e8215446",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/287b156961b7ecc16e8fa52a6e765d03?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yqtx_cgcs_4549:xz_gdzldbndgx_zbq_py_latest_3_0"
                                        },
                                        {
                                            "id": "xz_gdzldbndgx_2016_gdzldj_py_latest_3_0",
                                            "layerName": "GDZLDJ_2016",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "耕地质量等级2016",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/d1d50c756cf88331810823835d60b72e",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/287b156961b7ecc16e8fa52a6e765d03?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yqtx_cgcs_4549:xz_gdzldbndgx_2016_gdzldj_py_latest_3_0"
                                        },
                                    ]
                                }
                            ]
                        },
                        {
                            layerType: "GroupLayer",
                            name: "BZNT",
                            caption: "标准农田",
                            thematicMap: true,
                            subLayers: [
                                {
                                    "id": "xz_tdzy_2016_bznt_py_latest_3_0",
                                    "layerName": "BZNT_BZNT_2016",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "标准农田2016",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/9ac957c3b4e9eab0bce359fad61e68c4",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/287b156961b7ecc16e8fa52a6e765d03?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yqtx_cgcs_4549:xz_tdzy_2016_bznt_py_latest_3_0"
                                },
                                {
                                    "id": "xz_bznt_yqbt20180703_latest_3_0",
                                    "layerName": "BZNT_YQNT_20180703",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "乐清标田20180703",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/2ea1b4dc2f622218d4af8cf6e5d9192f",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/287b156961b7ecc16e8fa52a6e765d03?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yqtx_cgcs_4549:xz_bznt_yqbt20180703_latest_3_0"
                                },
                                {
                                    "id": "xz_bznt_yqbt20180718_latest_3_0",
                                    "layerName": "BZNT_YQNT_20180718",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "乐清标田20180718",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/96a1e716fa7b3c8e7e1efdadc7001d69",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/287b156961b7ecc16e8fa52a6e765d03?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yqtx_cgcs_4549:xz_bznt_yqbt20180718_latest_3_0"
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
                                    "layerName": "xz_sdzy_2018_gjzysd_pt_latest_3_0",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "国家重要湿地2018_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/bbe4bd0a78d65798fa27b30d21e5cb06",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/287b156961b7ecc16e8fa52a6e765d03?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yqtx_cgcs_4549:xz_sdzy_2018_gjzysd_pt_latest_3_0"
                                },
                            
                
                            ]
                        },
        
                    ]
                },
                {
                    layerType: "GroupLayer",
                    name: "DZSJ",
                    caption: "地质数据",
                    thematicMap: true,
                    subLayers:  [
                        {
                            "id": "xz_dzsj_dzyjbhq_pt_latest_3_0",
                            "layerName": "xz_dzsj_dzyjbhq_pt_latest_3_0",
                            "layerType": "SuperMapWMTS",
                            "caption": "地质遗迹保护区_省级下发",
                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/d958b5fb9647b2779566df5a13ee0f6f",
                            "visible": false,
                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/287b156961b7ecc16e8fa52a6e765d03?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yqtx_cgcs_4549:xz_dzsj_dzyjbhq_pt_latest_3_0"
                        }, 
                        {
                            layerType: "GroupLayer",
                            name: "DZZH",
                            caption: "地质灾害",
                            thematicMap: true,
                            subLayers:  [
                                {
                                    "id": "xz_dzzh_yhd_pt_latest_3_0",
                                    "layerName": "xz_dzzh_yhd_pt_latest_3_0",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "隐患点_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/0f9903d14cfe1a938fddf82b747ff153",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/287b156961b7ecc16e8fa52a6e765d03?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yqtx_cgcs_4549:xz_dzzh_yhd_pt_latest_3_0"
                                },
                                {
                                    "id": "xz_dzzh_zqd_pt_latest_3_0",
                                    "layerName": "xz_dzzh_zqd_pt_latest_3_0",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "灾情点_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/8fb3510da1cf6c9230cc213645d640fc",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/287b156961b7ecc16e8fa52a6e765d03?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yqtx_cgcs_4549:xz_dzzh_zqd_pt_latest_3_0"
                                },
                            ]
                        }
                    ]
                },
                {
                    layerType: "GroupLayer",
                    name: "HYZY",
                    caption: "海洋资源",
                    thematicMap: true,
                    subLayers:  [
                        {
                            "id": "xz_hyzy_hygnqfaR_WGS1984_py_latest_3_0",
                            "layerName": "hygnqfar",
                            "layerType": "SuperMapWMTS",
                            "caption": "海洋功能区方案R_WGS1984",
                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/159fa33aadbe3aea64bb8a632501f4f4",
                            "visible": false,
                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/287b156961b7ecc16e8fa52a6e765d03?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yqtx_cgcs_4549:xz_hyzy_hygnqfaR_WGS1984_py_latest_3_0"
                        },
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
                                    "layerName": "gh_zykzx_2018_stbhhx_py_latest_3_0",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "生态保护红线2018_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/861ada1d52c2ba1b2834c4bf38c1e0bd",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/287b156961b7ecc16e8fa52a6e765d03?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yqtx_cgcs_4549:gh_zykzx_2018_stbhhx_py_latest_3_0"
                                },
                                {
                                    "id": "gh_zykzx_2020_yjjbntbhhx_py_latest_3_0",
                                    "layerName": "gh_zykzx_2020_yjjbntbhhx_py_latest_3_0",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "永久基本农田保护红线2020_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/05f94e1e5370a036fb8c90d89d2a2bdf",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/287b156961b7ecc16e8fa52a6e765d03?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yqtx_cgcs_4549:gh_zykzx_2020_yjjbntbhhx_py_latest_3_0"
                                },
                                {
                                    "id": "xz_zykzx_yqsstbhhx_py_latest_3_0",
                                    "layerName": "STBHHX",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "乐清市生态保护红线",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/59447cce8a3fe6aeafe7efae19637f7f",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/287b156961b7ecc16e8fa52a6e765d03?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yqtx_cgcs_4549:xz_zykzx_yqsstbhhx_py_latest_3_0"
                                },
                                {
                                    "id": "xz_zykzx_zjsstbhhx_py_latest_3_0",
                                    "layerName": "zjsstbhhx",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "浙江省生态保护红线",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/f20f82693cc7c2dbcd307ec39fd7aa48",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/287b156961b7ecc16e8fa52a6e765d03?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yqtx_cgcs_4549:xz_zykzx_zjsstbhhx_py_latest_3_0"
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
                    subLayers:  [
                        {
                            layerType: "GroupLayer",
                            name: "TDLYZTGH",
                            caption: "土地利用总体规划",
                            thematicMap: true,
                            subLayers:  [
                                {
                                    "id": "gh_tdlyztgh_2016_ghjbnbhq_py_latest_3_0",
                                    "layerName": "JBNT_JBNTBHQ_2016",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "规划基本农田保护区2016",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/e1580066fe96ac4f20f3af33fa177cae",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/287b156961b7ecc16e8fa52a6e765d03?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yqtx_cgcs_4549:gh_tdlyztgh_2016_ghjbnbhq_py_latest_3_0"
                                },
                                {
                                    "id": "gh_tdlyztgh_2016_ghjbnttz_py_latest_3_0",
                                    "layerName": "ghjbnttz_2016",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "规划基本农田调整2016",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/ccb60affc40efe5f08c899c762e9db0c",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/287b156961b7ecc16e8fa52a6e765d03?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yqtx_cgcs_4549:gh_tdlyztgh_2016_ghjbnttz_py_latest_3_0"
                                },
                                {
                                    "id": "gh_tdlyztgh_2016_ghyt_py_latest_3_0",
                                    "layerName": "TDLYGH_GHYT_2016",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "规划用途2016",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/71eef3698ab8e59c7ea47b5770b11df8",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/287b156961b7ecc16e8fa52a6e765d03?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yqtx_cgcs_4549:gh_tdlyztgh_2016_ghyt_py_latest_3_0"
                                },
                                {
                                    "id": "gh_tdlyztgh_2016_jqdljx_ln_latest_3_0",
                                    "layerName": "jqdljx_2016",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "基期地类界线2016",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/1321d977becc0188438ba405c9fe9b93",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/287b156961b7ecc16e8fa52a6e765d03?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yqtx_cgcs_4549:gh_tdlyztgh_2016_jqdljx_ln_latest_3_0"
                                },
                                {
                                    "id": "gh_tdlyztgh_2016_jqdltb_py_latest_3_0",
                                    "layerName": "TDLYGH_JQDLTB_2016",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "基期地类图斑2016",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/64114df722911368d5abb04214f80f4b",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/287b156961b7ecc16e8fa52a6e765d03?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yqtx_cgcs_4549:gh_tdlyztgh_2016_jqdltb_py_latest_3_0"
                                },
                                {
                                    "id": "gh_tdlyztgh_2016_jqlxdw_pt_latest_3_0",
                                    "layerName": "TDLYGH_JQLXDW_2016",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "基期零星地物2016",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/360afcc8c2750b94d1f5479dbe180eed",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/287b156961b7ecc16e8fa52a6e765d03?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yqtx_cgcs_4549:gh_tdlyztgh_2016_jqlxdw_pt_latest_3_0"
                                },
                                {
                                    "id": "gh_tdlyztgh_2016_jqxzdw_ln_latest_3_0",
                                    "layerName": "TDLYGH_JQXZDW_2016",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "基期线状地物2016",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/1b554cd51e0062d3fc2519d0dbdf1432",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/287b156961b7ecc16e8fa52a6e765d03?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yqtx_cgcs_4549:gh_tdlyztgh_2016_jqxzdw_ln_latest_3_0"
                                },
                                {
                                    "id": "gh_tdlyztgh_2016_jsydgzbj_ln_latest_3_0",
                                    "layerName": "TDLYGH_JSYDGZQBJ_2016",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "建设用地管制边界2016",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/ffa5771f2413bc3ed18c2b1f35502904",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/287b156961b7ecc16e8fa52a6e765d03?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yqtx_cgcs_4549:gh_tdlyztgh_2016_jsydgzbj_ln_latest_3_0"
                                },
                                {
                                    "id": "gh_tdlyztgh_2016_jsydgzq_py_latest_3_0",
                                    "layerName": "TDLYGH_JSYDGZQ_2016",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "建设用地管制区2016",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/6ea96ab1bad1beda1d112afe9ef960bf",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/287b156961b7ecc16e8fa52a6e765d03?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yqtx_cgcs_4549:gh_tdlyztgh_2016_jsydgzq_py_latest_3_0"
                                },
                                {
                                    "id": "gh_tdlyztgh_2016_jszh_py_latest_3_0",
                                    "layerName": "jszh_2016",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "建设证号2016",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/9ba55151758053c0c9f0b28cd9e8b907",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/287b156961b7ecc16e8fa52a6e765d03?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yqtx_cgcs_4549:gh_tdlyztgh_2016_jszh_py_latest_3_0"
                                },
                                {
                                    "id": "gh_tdlyztgh_2016_kzbjm_py_latest_3_0",
                                    "layerName": "kzbjm_2016",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "控制表界面2016",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/8904f2414aa93bb81e3650d6f2850221",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/287b156961b7ecc16e8fa52a6e765d03?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yqtx_cgcs_4549:gh_tdlyztgh_2016_kzbjm_py_latest_3_0"
                                },
                                {
                                    "id": "gh_tdlyztgh_2016_mzzdjsxm_py_latest_3_0",
                                    "layerName": "mzzdjsxm_2016",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "面状重点建设项目2016",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/ecf61e6ccc19d0e1a31687112253d81f",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/287b156961b7ecc16e8fa52a6e765d03?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yqtx_cgcs_4549:gh_tdlyztgh_2016_mzzdjsxm_py_latest_3_0"
                                },
                                {
                                    "id": "gh_tdlyztgh_2016_qwycxzjs_py_latest_3_0",
                                    "layerName": "qwycxzjs_2016",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "QWYCXZJS2016",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/160033d413b49ecc3450500ee6878220",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/287b156961b7ecc16e8fa52a6e765d03?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yqtx_cgcs_4549:gh_tdlyztgh_2016_qwycxzjs_py_latest_3_0"
                                },
                                {
                                    "id": "gh_tdlyztgh_2016_tdghdl_py_latest_3_0",
                                    "layerName": "TDLYGH_TDGHDL_2016",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "土地规划地类2016",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/0f4ba1f0735553ca048830c7a0d45bdd",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/287b156961b7ecc16e8fa52a6e765d03?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yqtx_cgcs_4549:gh_tdlyztgh_2016_tdghdl_py_latest_3_0"
                                },
                                {
                                    "id": "gh_tdlyztgh_2016_tdytq_py_latest_3_0",
                                    "layerName": "tdytq_2016",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "土地用途区2016",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/269faac22a7d40d18c2129de6b4940e7",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/287b156961b7ecc16e8fa52a6e765d03?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yqtx_cgcs_4549:gh_tdlyztgh_2016_tdytq_py_latest_3_0"
                                },
                                {
                                    "id": "gh_tdlyztgh_2016_xzjcq_py_latest_3_0",
                                    "layerName": "xzjcq_2016",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "XZJCQ2016",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/02f05ae722ce751ef585a803c499337e",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/287b156961b7ecc16e8fa52a6e765d03?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yqtx_cgcs_4549:gh_tdlyztgh_2016_xzjcq_py_latest_3_0"
                                },
                                {
                                    "id": "gh_tdlyztgh_2016_xzlw_pt_latest_3_0",
                                    "layerName": "xzlw_2016",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "XZLW2016",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/f2a0faf70889559953d4cbea5fedc547",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/287b156961b7ecc16e8fa52a6e765d03?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yqtx_cgcs_4549:gh_tdlyztgh_2016_xzlw_pt_latest_3_0"
                                },
                                {
                                    "id": "gh_tdlyztgh_2016_xzq_py_latest_3_0",
                                    "layerName": "xzq_2016",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "行政区2016",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/6074061283a3f004fe0b34dcc26d5c37",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/287b156961b7ecc16e8fa52a6e765d03?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yqtx_cgcs_4549:gh_tdlyztgh_2016_xzq_py_latest_3_0"
                                },
                                {
                                    "id": "gh_tdlyztgh_2016_xzqjx_py_latest_3_0",
                                    "layerName": "xzqjx_2016",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "行政区界线2016",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/2f4db4f6d494819a2a22c95e80970674",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/287b156961b7ecc16e8fa52a6e765d03?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yqtx_cgcs_4549:gh_tdlyztgh_2016_xzqjx_py_latest_3_0"
                                },
                                {
                                    "id": "gh_tdlyztgh_2016_xztb_py_latest_3_0",
                                    "layerName": "xztb_2016",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "行政图斑2016",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/1d30b356e343ed66bc66653727d27603",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/287b156961b7ecc16e8fa52a6e765d03?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yqtx_cgcs_4549:gh_tdlyztgh_2016_xztb_py_latest_3_0"
                                },
                                {
                                    "id": "gh_tdlyztgh_2016_xzxw_ln_latest_3_0",
                                    "layerName": "xzxw_2016",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "XZXW2016",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/7d39c709b6e007234f3961eb3285b17d",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/287b156961b7ecc16e8fa52a6e765d03?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yqtx_cgcs_4549:gh_tdlyztgh_2016_xzxw_ln_latest_3_0"
                                },
                                {
                                    "id": "gh_tdlyztgh_2016_ycxzjsyd_py_latest_3_0",
                                    "layerName": "ycxzjsyd_2016",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "有偿新增建设用地2016",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/8382bac7daca85d8ad8c1f9cd68b8ffb",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/287b156961b7ecc16e8fa52a6e765d03?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yqtx_cgcs_4549:gh_tdlyztgh_2016_ycxzjsyd_py_latest_3_0"
                                },
                                {
                                    "id": "gh_tdlyztgh_2016_yjjbnsfq_py_latest_3_0",
                                    "layerName": "yjjbntsfq_2016",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "永久基本农田示范区2016",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/b8189cb06ea7e7d7f47a2175f5539c40",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/287b156961b7ecc16e8fa52a6e765d03?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yqtx_cgcs_4549:gh_tdlyztgh_2016_yjjbnsfq_py_latest_3_0"
                                },
                                {
                                    "id": "gh_tdlyztgh_2016_yncbk_py_latest_3_0",
                                    "layerName": "yncbk_2016",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "YNCBK2016",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/b34830cb811309876b1c69fce32110eb",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/287b156961b7ecc16e8fa52a6e765d03?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yqtx_cgcs_4549:gh_tdlyztgh_2016_yncbk_py_latest_3_0"
                                },
                               
                                {
                                    "id": "gh_tdlyztgh_2017_jsydgzq_py_latest_3_0",
                                    "layerName": "gh_tdlyztgh_2017_jsydgzq_py_latest_3_0",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "建设用地管制区2017_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/61029459208dae084bac7314c36c67e7",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/287b156961b7ecc16e8fa52a6e765d03?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yqtx_cgcs_4549:gh_tdlyztgh_2017_jsydgzq_py_latest_3_0"
                                },
                                {
                                    "id": "gh_tdlyztgh_2020_jsydgzq_py_latest_3_0",
                                    "layerName": "gh_tdlyztgh_2020_jsydgzq_py_latest_3_0",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "建设用地管制区2020_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/989077557b52120278ba09dae38626cd",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/287b156961b7ecc16e8fa52a6e765d03?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yqtx_cgcs_4549:gh_tdlyztgh_2020_jsydgzq_py_latest_3_0"
                                },
                                {
                                    "id": "gh_tdlyztgh_2005_jqdltb_py_latest_3_0",
                                    "layerName": "TDLYGH_JQDLTB_2005",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "基期地类图斑2005",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/19a2504d29963b4ffafa41db2102fed3",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/287b156961b7ecc16e8fa52a6e765d03?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yqtx_cgcs_4549:gh_tdlyztgh_2005_jqdltb_py_latest_3_0"
                                },
                                {
                                    "id": "gh_tdlyztgh_2005_jqlxdw_pt_latest_3_0",
                                    "layerName": "TDLYGH_JQLXDW_2005",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "基期零星地物2005",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/fb97e2c052f4889d9d33bbc87e7ab055",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/287b156961b7ecc16e8fa52a6e765d03?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yqtx_cgcs_4549:gh_tdlyztgh_2005_jqlxdw_pt_latest_3_0"
                                },
                                {
                                    "id": "gh_tdlyztgh_2005_jqxzdw_ln_latest_3_0",
                                    "layerName": "TDLYGH_JQXZDW_2005",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "基期线状地物2005",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/2a3325c1bf740e93aebda4631139677d",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/287b156961b7ecc16e8fa52a6e765d03?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yqtx_cgcs_4549:gh_tdlyztgh_2005_jqxzdw_ln_latest_3_0"
                                }

                                               
                            ]
                        },
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
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/f55771844da0fa50718d48a5b1f5e537",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/287b156961b7ecc16e8fa52a6e765d03?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yqtx_cgcs_4549:gh_kg_ydgh_py_latest_3_0"
                                        },
                                        {
                                            "id": "gh_kg_dkfh_pt_latest_3_0",
                                            "layerName": "BKY_DKFH_PT",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "控规_地块符号",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/2ccd7c52e8dbf29529c6c1aaa864474a",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/287b156961b7ecc16e8fa52a6e765d03?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yqtx_cgcs_4549:gh_kg_dkfh_pt_latest_3_0"
                                        },
                                        {
                                            "id": "gh_kg_dkbh_ap_latest_3_0",
                                            "layerName": "BKY_DKBH_AP",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "控规_地块编号",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/5b935cd6a8dc939e232b499656300a27",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/287b156961b7ecc16e8fa52a6e765d03?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yqtx_cgcs_4549:gh_kg_dkbh_ap_latest_3_0"
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
                                        "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/e960dd0ce733b522afe8f38fe0273487",
                                        "visible": false,
                                        "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/287b156961b7ecc16e8fa52a6e765d03?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yqtx_cgcs_4549:gh_kg_lhlx_py_latest_3_0"
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
                                                "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/10b17ade4dc8c510abf82f1a4c7e3bdd",
                                                "visible": false,
                                                "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/287b156961b7ecc16e8fa52a6e765d03?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yqtx_cgcs_4549:gh_kg_sshx_py_latest_3_0"
                                            },
                                            {
                                                "id": "gh_kg_sshx_ln_latest_3_0",
                                                "layerName": "BKK_SSHX_LN",
                                                "layerType": "SuperMapWMTS",
                                                "caption": "控规_基础设施黄线",
                                                "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/ae97567766b8b837f8d318ad0c3918a0",
                                                "visible": false,
                                                "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/287b156961b7ecc16e8fa52a6e765d03?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yqtx_cgcs_4549:gh_kg_sshx_ln_latest_3_0"
                                            },
                                        ]
                                    },
                                    {
                                        "id": "gh_kg_sxlx_ln_latest_3_0",
                                        "layerName": "BKK_SXLX_LN",
                                        "layerType": "SuperMapWMTS",
                                        "caption": "控规_水系蓝线",
                                        "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/794bc9e486394367c4a3c51577bd0c72",
                                        "visible": false,
                                        "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/287b156961b7ecc16e8fa52a6e765d03?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yqtx_cgcs_4549:gh_kg_sxlx_ln_latest_3_0"
                                    },
                                    {
                                        "id": "gh_kg_wbzx_py_latest_3_0",
                                        "layerName": "BKK_WBZX_PY",
                                        "layerType": "SuperMapWMTS",
                                        "caption": "控规_文保紫线",
                                        "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/51a2d2d90df3cc42495313218531babe",
                                        "visible": false,
                                        "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/287b156961b7ecc16e8fa52a6e765d03?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yqtx_cgcs_4549:gh_kg_wbzx_py_latest_3_0"
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
                                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/89d585cb3c55dcb3dbc4e922c6af07e9",
                                                    "visible": false,
                                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/287b156961b7ecc16e8fa52a6e765d03?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yqtx_cgcs_4549:gh_kg_dlzx_ln_latest_3_0"
                                                },
                                                {
                                                    "id": "gh_kg_dlbx_ln_latest_3_0",
                                                    "layerName": "BKJ_DLBX_LN",
                                                    "layerType": "SuperMapWMTS",
                                                    "caption": "控规_道路边线",
                                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/e92a837f20f6f758d078cde6120dadd3",
                                                    "visible": false,
                                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/287b156961b7ecc16e8fa52a6e765d03?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yqtx_cgcs_4549:gh_kg_dlbx_ln_latest_3_0"
                                                },
                                            ]
                                        },
                                        {
                                            "id": "gh_kg_gdx_ln_latest_3_0",
                                            "layerName": "BKJ_GDX_LN",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "控规_轨道线",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/66106fc44b35c664a70853c7ab789aeb",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/287b156961b7ecc16e8fa52a6e765d03?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yqtx_cgcs_4549:gh_kg_gdx_ln_latest_3_0"
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
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/a1a5ca2afd249160af53847f113c3f98",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/287b156961b7ecc16e8fa52a6e765d03?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yqtx_cgcs_4549:gh_kg_gpss_py_latest_3_0"
                                        },
                                        {
                                            "id": "gh_kg_gpss_pt_latest_3_0",
                                            "layerName": "BKP_GPSS_PT",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "控规_公共配套设施点",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/98bbedfb9605ee0a3accd071557309b2",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/287b156961b7ecc16e8fa52a6e765d03?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yqtx_cgcs_4549:gh_kg_gpss_pt_latest_3_0"
                                        },
                                        {
                                            "id": "gh_kg_gpfh_pt_latest_3_0",
                                            "layerName": "BKP_GPFH_PT",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "控规_公共配套设施符号",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/1b474327cc80752d5b6972e88c031225",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/287b156961b7ecc16e8fa52a6e765d03?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yqtx_cgcs_4549:gh_kg_gpfh_pt_latest_3_0"
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
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/65edcfb8386195543948853b43ddc611",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/287b156961b7ecc16e8fa52a6e765d03?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yqtx_cgcs_4549:gh_kg_xmfw_py_latest_3_0"
                                        },
                                    ]
                                }
                            ]
                        }, 
                        {
                            layerType: "GroupLayer",
                            name: "CXGH",
                            caption: "城乡规划",
                            thematicMap: true,
                            subLayers: [
                                {
                                    "id": "gh_cxgh_2017_lsscgnq_py_latest_3_0",
                                    "layerName": "lsscgnq",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "粮食生产功能区2017",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/207fa704611eb7f5c0a37c2b2524c627",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/287b156961b7ecc16e8fa52a6e765d03?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yqtx_cgcs_4549:gh_cxgh_2017_lsscgnq_py_latest_3_0"
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
                    name: "GTKJYTGZHKFLY",
                    caption: "国土空间用途管制和开发利用",
                    thematicMap: true,
                    subLayers:  [
                        {
                            "id": "gl_gtkjytgz_2020_lsyd_py_latest_3_0",
                            "layerName": "lsyd_2020",
                            "layerType": "SuperMapWMTS",
                            "caption": "2020年临时用地",
                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/9cab9ec185a4c077c8cdd965a2d9c81e",
                            "visible": false,
                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/287b156961b7ecc16e8fa52a6e765d03?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yqtx_cgcs_4549:gl_gtkjytgz_2020_lsyd_py_latest_3_0"
                        },
                        {
                            layerType: "GroupLayer",
                            name: "DXLYZKF",
                            caption: "低效用地再开发",
                            thematicMap: true,
                            subLayers:  [
                                {
                                    "id": "xz_dxydzkf_dxydzkfxmhx_py_latest_3_0",
                                    "layerName": "xz_dxydzkf_dxydzkfxmhx_py_latest_3_0",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "低效用地再开发项目红线_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/8d688f380d5d5b01a333695b86a9a6f5",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/287b156961b7ecc16e8fa52a6e765d03?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yqtx_cgcs_4549:xz_dxydzkf_dxydzkfxmhx_py_latest_3_0"
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
                                    "layerName": "gl_gtkjytgzhkfly_ghjbtzl_py_latest_3_0",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "规划局部调整L_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/33ee5150b40c75de4948adc276a3bc28",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/287b156961b7ecc16e8fa52a6e765d03?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yqtx_cgcs_4549:gl_gtkjytgzhkfly_ghjbtzl_py_latest_3_0"
                                },
                                {
                                    "id": "gl_gtkjytgzhkfly_ghjbtzx_py_latest_3_0",
                                    "layerName": "gl_gtkjytgzhkfly_ghjbtzx_py_latest_3_0",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "规划局部调整X_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/a6449a4c1e810c052c0025ef7673075e",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/287b156961b7ecc16e8fa52a6e765d03?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yqtx_cgcs_4549:gl_gtkjytgzhkfly_ghjbtzx_py_latest_3_0"
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
                                    "layerName": "gl_nzybp_jsydbpl_py_latest_3_0",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "建设用地报批（农转用地块）L_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/7b206c2af103322bcc4610645be578b3",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/287b156961b7ecc16e8fa52a6e765d03?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yqtx_cgcs_4549:gl_nzybp_jsydbpl_py_latest_3_0"
                                },
                                {
                                    "id": "gl_nzybp_jsydbpx_py_latest_3_0",
                                    "layerName": "gl_nzybp_jsydbpx_py_latest_3_0",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "建设用地报批（农转用地块）X_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/7d2f60151af48e952ab11d506b6dc0c3",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/287b156961b7ecc16e8fa52a6e765d03?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yqtx_cgcs_4549:gl_nzybp_jsydbpx_py_latest_3_0"
                                },
                                {
                                    "id": "gl_nzybp_nzytc_21_17_py_latest_3_0",
                                    "layerName": "gl_nzybp_nzytc_21_17_py",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "农转用2021（第17批次）",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/986526b57bd8008415d9bb769c4ae6f4",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/287b156961b7ecc16e8fa52a6e765d03?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yqtx_cgcs_4549:gl_nzybp_nzytc_21_17_py_latest_3_0"
                                }
                                
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
                                    "layerName": "gl_gtkjytgzhkfly_jsydys_py_latest_3_0",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "建设用地预审（预审地块）_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/13bed39d4dd1b5ed16805d3f5a8039d7",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/287b156961b7ecc16e8fa52a6e765d03?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yqtx_cgcs_4549:gl_gtkjytgzhkfly_jsydys_py_latest_3_0"
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
                                    "layerName": "gl_ssnydba_bhjbnt_py_latest_3_0",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "补划基本农田_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/e7a222880b6283a0145dcda39544897e",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/287b156961b7ecc16e8fa52a6e765d03?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yqtx_cgcs_4549:gl_ssnydba_bhjbnt_py_latest_3_0"
                                },
                                {
                                    "id": "gl_ssnydba_phgzcfw_py_latest_3_0",
                                    "layerName": "gl_ssnydba_phgzcfw_py_latest_3_0",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "破坏耕作层范围_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/ff65776153ed50a82bdad2a82b0f20dc",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/287b156961b7ecc16e8fa52a6e765d03?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yqtx_cgcs_4549:gl_ssnydba_phgzcfw_py_latest_3_0"
                                },
                                {
                                    "id": "gl_ssnydba_nydfw_py_latest_3_0",
                                    "layerName": "gl_ssnydba_nydfw_py_latest_3_0",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "农用地范围_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/2559e068597a580a0723f0a361afb038",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/287b156961b7ecc16e8fa52a6e765d03?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yqtx_cgcs_4549:gl_ssnydba_nydfw_py_latest_3_0"
                                },
                                {
                                    "id": "gl_ssnydba_phynfw_py_latest_3_0",
                                    "layerName": "gl_ssnydba_phynfw_py_latest_3_0",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "破坏永农范围_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/0d0e196317af9253312a4c545fd5775f",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/287b156961b7ecc16e8fa52a6e765d03?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yqtx_cgcs_4549:gl_ssnydba_phynfw_py_latest_3_0"
                                },
                                {
                                    "id": "gl_ssnydba_zyynfw_py_latest_3_0",
                                    "layerName": "gl_ssnydba_zyynfw_py_latest_3_0",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "占用永农范围_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/2522a02a10c8d557f24ede2529154c3b",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/287b156961b7ecc16e8fa52a6e765d03?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yqtx_cgcs_4549:gl_ssnydba_zyynfw_py_latest_3_0"
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
                                    "layerName": "gl_tdcb_tdcb_py_latest_3_0",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "土地储备_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/d09cd48ed761649ea44cf631260ad9fb",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/287b156961b7ecc16e8fa52a6e765d03?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yqtx_cgcs_4549:gl_tdcb_tdcb_py_latest_3_0"
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
                                    "layerName": "gl_tdgy_gddk_py_latest_3_0",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "供地地块_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/ec2f119f55811618eff6560044b9ea95",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/287b156961b7ecc16e8fa52a6e765d03?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yqtx_cgcs_4549:gl_tdgy_gddk_py_latest_3_0"
                                },
                                {
                                    "id": "gl_tdgy_zpgcrdk_py_latest_3_0",
                                    "layerName": "gl_tdgy_zpgcrdk_py_latest_3_0",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "土地交易-招拍挂出让地块_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/6bb626286f57fdb278e9ec31d8cbb7a3",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/287b156961b7ecc16e8fa52a6e765d03?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yqtx_cgcs_4549:gl_tdgy_zpgcrdk_py_latest_3_0"
                                },
                            ]
                        },
                        {
                            layerType: "GroupLayer",
                            name: "LYGL",
                            caption: "林业管理",
                            thematicMap: true,
                            subLayers: [
                                {
                                    layerType: "GroupLayer",
                                    name: "LQSJ",
                                    caption: "林权数据",
                                    thematicMap: true,
                                    subLayers: [
                                        {
                                            "id": "gl_lqsj_gysys_py_latest_3_0",
                                            "layerName": "gysys",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "国有使用山",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/237a5c05a34ba3a5a24c72c962902900",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/287b156961b7ecc16e8fa52a6e765d03?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yqtx_cgcs_4549:gl_lqsj_gysys_py_latest_3_0"
                                        },
                                        {
                                            "id": "gl_lqsj_lzs_py_latest_3_0",
                                            "layerName": "lzs",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "流转山",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/610cf19bf52614cadec73f70fb94127b",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/287b156961b7ecc16e8fa52a6e765d03?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yqtx_cgcs_4549:gl_lqsj_lzs_py_latest_3_0"
                                        },
                                        {
                                            "id": "gl_lqsj_lqqt_py_latest_3_0",
                                            "layerName": "lqqt",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "林权其他",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/5b1fcde17ce4e45018951ee152f8f798",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/287b156961b7ecc16e8fa52a6e765d03?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yqtx_cgcs_4549:gl_lqsj_lqqt_py_latest_3_0"
                                        },
                                        {
                                            "id": "gl_lqsj_lqsyq_py_latest_3_0",
                                            "layerName": "lqsyq",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "林权所有权",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/9634499d0307618abcd7be227fed56ff",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/287b156961b7ecc16e8fa52a6e765d03?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yqtx_cgcs_4549:gl_lqsj_lqsyq_py_latest_3_0"
                                        },
                                        {
                                            "id": "gl_lqsj_tgs_py_latest_3_0",
                                            "layerName": "tgs",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "统管山",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/fa02a9b5ecb6749e0bea2a5a7cd55c4f",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/287b156961b7ecc16e8fa52a6e765d03?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yqtx_cgcs_4549:gl_lqsj_tgs_py_latest_3_0"
                                        },
                                        {
                                            "id": "gl_lqsj_zrs_py_latest_3_0",
                                            "layerName": "zrs",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "责任山",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/740b0e54b6fb0c017dcdd5b67620b295",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/287b156961b7ecc16e8fa52a6e765d03?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yqtx_cgcs_4549:gl_lqsj_zrs_py_latest_3_0"
                                        },
                                        {
                                            "id": "gl_lqsj_zls_py_latest_3_0",
                                            "layerName": "zls",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "自留山",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/30c5a044c418e9cc49da9026b12c4d39",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/287b156961b7ecc16e8fa52a6e765d03?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yqtx_cgcs_4549:gl_lqsj_zls_py_latest_3_0"
                                        },
                                        {
                                            "id": "gl_lqsj_lqzh_py_latest_3_0",
                                            "layerName": "lqzh",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "林权综合",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/d4c49bfb96767889472c76109a016068",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/287b156961b7ecc16e8fa52a6e765d03?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yqtx_cgcs_4549:gl_lqsj_lqzh_py_latest_3_0"
                                        },
                                    ]
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
                    subLayers:  [
                        {
                            "id": "gl_tdzz_gbzjsdk_lx_py_latest_3_0",
                            "layerName": "gl_tdzz_gbzjsdk_lx_py_latest_3_0",
                            "layerType": "SuperMapWMTS",
                            "caption": "高标准建设地块-立项_省级下发",
                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/f59b1928a64b1b150b4d67f471dc0f92",
                            "visible": false,
                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/287b156961b7ecc16e8fa52a6e765d03?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yqtx_cgcs_4549:gl_tdzz_gbzjsdk_lx_py_latest_3_0"
                        },
                        {
                            "id": "gl_tdzz_gbzjsdk_ys_py_latest_3_0",
                            "layerName": "gl_tdzz_gbzjsdk_ys_py_latest_3_0",
                            "layerType": "SuperMapWMTS",
                            "caption": "高标准建设地块-验收_省级下发",
                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/2329122585115fea70c1f13e949e2d2f",
                            "visible": false,
                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/287b156961b7ecc16e8fa52a6e765d03?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yqtx_cgcs_4549:gl_tdzz_gbzjsdk_ys_py_latest_3_0"
                        },
                        {
                            "id": "gl_tdzz_gbztsdk_lx_py_latest_3_0",
                            "layerName": "gl_tdzz_gbztsdk_lx_py_latest_3_0",
                            "layerType": "SuperMapWMTS",
                            "caption": "高标准提升地块-立项_省级下发",
                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/b399da594c38b73afbc0531a512f79c0",
                            "visible": false,
                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/287b156961b7ecc16e8fa52a6e765d03?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yqtx_cgcs_4549:gl_tdzz_gbztsdk_lx_py_latest_3_0"
                        },
                        {
                            "id": "gl_tdzz_gbztsdk_ys_py_latest_3_0",
                            "layerName": "gl_tdzz_gbztsdk_ys_py_latest_3_0",
                            "layerType": "SuperMapWMTS",
                            "caption": "高标准提升地块-验收_省级下发",
                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/5592c2b5d16112d89dacf0b10486bb7d",
                            "visible": false,
                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/287b156961b7ecc16e8fa52a6e765d03?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yqtx_cgcs_4549:gl_tdzz_gbztsdk_ys_py_latest_3_0"
                        },
                        {
                            "id": "gl_tdzz_jsydfkdk_lx_py_latest_3_0",
                            "layerName": "gl_tdzz_jsydfkdk_lx_py_latest_3_0",
                            "layerType": "SuperMapWMTS",
                            "caption": "建设用地复垦地块-立项_省级下发",
                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/849ad957631dfb7ca75a57fe6b9ca753",
                            "visible": false,
                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/287b156961b7ecc16e8fa52a6e765d03?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yqtx_cgcs_4549:gl_tdzz_jsydfkdk_lx_py_latest_3_0"
                        },
                        {
                            "id": "gl_jdzz_jsydfkdk_ys_py_latest_3_0",
                            "layerName": "gl_jdzz_jsydfkdk_ys_py_latest_3_0",
                            "layerType": "SuperMapWMTS",
                            "caption": "建设用地复垦地块-验收_省级下发",
                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/95bfb76bffb6edbaf0a27e32dd5d782f",
                            "visible": false,
                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/287b156961b7ecc16e8fa52a6e765d03?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yqtx_cgcs_4549:gl_jdzz_jsydfkdk_ys_py_latest_3_0"
                        },
                        {
                            "id": "gl_tdzz_kzgd_lx_py_latest_3_0",
                            "layerName": "gl_tdzz_kzgd_lx_py_latest_3_0",
                            "layerType": "SuperMapWMTS",
                            "caption": "垦造耕地-立项_省级下发",
                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/1fc22bbafc1e33547edf586668ceb485",
                            "visible": false,
                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/287b156961b7ecc16e8fa52a6e765d03?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yqtx_cgcs_4549:gl_tdzz_kzgd_lx_py_latest_3_0"
                        },
                        {
                            "id": "gl_tdzz_kzgd_ys_py_latest_3_0",
                            "layerName": "gl_tdzz_kzgd_ys_py_latest_3_0",
                            "layerType": "SuperMapWMTS",
                            "caption": "垦造耕地-验收_省级下发",
                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/71eda843c7b9e23d401aa80403005cd2",
                            "visible": false,
                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/287b156961b7ecc16e8fa52a6e765d03?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yqtx_cgcs_4549:gl_tdzz_kzgd_ys_py_latest_3_0"
                        },
                        {
                            layerType: "GroupLayer",
                            name: "ZJGG",
                            caption: "增减挂钩",
                            thematicMap: true,
                            subLayers:  [
                                {
                                    "id": "gl_zjgg_cjdkl_py_latest_3_0",
                                    "layerName": "gl_zjgg_cjdkl_py_latest_3_0",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "拆旧地块L_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/a02d4e211150a8a2da20a732256d6be8",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/287b156961b7ecc16e8fa52a6e765d03?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yqtx_cgcs_4549:gl_zjgg_cjdkl_py_latest_3_0"
                                },
                                {
                                    "id": "gl_zjgg_jxdkl_py_latest_3_0",
                                    "layerName": "gl_zjgg_jxdkl_py_latest_3_0",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "建新地块L_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/3abdc6c559c7d6797047de7055128862",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/287b156961b7ecc16e8fa52a6e765d03?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yqtx_cgcs_4549:gl_zjgg_jxdkl_py_latest_3_0"
                                },
                                {
                                    "id": "gl_zjgg_jxdkx_py_latest_3_0",
                                    "layerName": "gl_zjgg_jxdkx_py_latest_3_0",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "建新地块X_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/28944683c4fc23dd55910f6d8c8905c4",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/287b156961b7ecc16e8fa52a6e765d03?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yqtx_cgcs_4549:gl_zjgg_jxdkx_py_latest_3_0"
                                },
                            ]
                        },
                        {
                            layerType: "GroupLayer",
                            name: "TZGZDK",
                            caption: "提质改造地块",
                            thematicMap: true,
                            subLayers:  [
                                {
                                    "id": "gl_tzgzdk_gdzlts_lx_py_latest_3_0",
                                    "layerName": "gl_tzgzdk_gdzlts_lx_py_latest_3_0",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "耕地质量提升-立项_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/79a34006a207e0c2d530981158fb9fd0",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/287b156961b7ecc16e8fa52a6e765d03?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yqtx_cgcs_4549:gl_tzgzdk_gdzlts_lx_py_latest_3_0"
                                },
                                {
                                    "id": "gl_tzgzdk_gdzlts_ys_py_latest_3_0",
                                    "layerName": "gl_tzgzdk_gdzlts_ys_py_latest_3_0",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "耕地质量提升-验收_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/d1611352991206d136f6ddf299733256",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/287b156961b7ecc16e8fa52a6e765d03?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yqtx_cgcs_4549:gl_tzgzdk_gdzlts_ys_py_latest_3_0"
                                },
                                {
                                    "id": "gl_tzgzdk_hgsdk_lx_py_latest_3_0",
                                    "layerName": "gl_tzgzdk_hgsdk_lx_py_latest_3_0",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "旱改水地块-立项_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/153d6a678fafa21fe495d73e6771dd62",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/287b156961b7ecc16e8fa52a6e765d03?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yqtx_cgcs_4549:gl_tzgzdk_hgsdk_lx_py_latest_3_0"
                                },
                                {
                                    "id": "gl_tzgzdk_hgsdk_ys_py_latest_3_0",
                                    "layerName": "gl_tzgzdk_hgsdk_ys_py_latest_3_0",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "旱改水地块-验收_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/047e177c45040bc46d5142477e62d753",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/287b156961b7ecc16e8fa52a6e765d03?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yqtx_cgcs_4549:gl_tzgzdk_hgsdk_ys_py_latest_3_0"
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
                    subLayers:  [
                        {
                            "id": "gl_ksgl_lsks_py_latest_3_0",
                            "layerName": "gl_ksgl_lsks_py_latest_3_0",
                            "layerType": "SuperMapWMTS",
                            "caption": "绿色矿山_省级下发",
                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/673bb2be9322c65931f1cba78fe5135d",
                            "visible": false,
                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/287b156961b7ecc16e8fa52a6e765d03?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yqtx_cgcs_4549:gl_ksgl_lsks_py_latest_3_0"
                        },
                        {
                            layerType: "GroupLayer",
                            name: "CKQ",
                            caption: "采矿权",
                            thematicMap: true,
                            subLayers:  [
                                {
                                    "id": "gl_ckq_ckqdj_py_latest_3_0",
                                    "layerName": "gl_ckq_ckqdj_py_latest_3_0",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "采矿权登记_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/c39ee26175b1558b1dbc18bfefec1587",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/287b156961b7ecc16e8fa52a6e765d03?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yqtx_cgcs_4549:gl_ckq_ckqdj_py_latest_3_0"
                                },
                                {
                                    "id": "gl_ckq_hdkqfw_py_latest_3_0",
                                    "layerName": "gl_ckq_hdkqfw_py_latest_3_0",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "划定矿区范围_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/77fd20e8ff1bc564d2d5e1331baa7c0f",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/287b156961b7ecc16e8fa52a6e765d03?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yqtx_cgcs_4549:gl_ckq_hdkqfw_py_latest_3_0"
                                },
                                {
                                    "id": "gl_ckq_ckqdj_ls_py_latest_3_0",
                                    "layerName": "gl_ckq_ckqdj_ls_py_latest_3_0",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "采矿权登记-历史_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/b60e2e6b9af216399ee1e74e8529007b",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/287b156961b7ecc16e8fa52a6e765d03?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yqtx_cgcs_4549:gl_ckq_ckqdj_ls_py_latest_3_0"
                                },
                            ]
                        },
                        {
                            layerType: "GroupLayer",
                            name: "CCDJ",
                            caption: "储量登记",
                            thematicMap: true,
                            subLayers:  [
                                {
                                    "id": "gl_cldj_cmdj_py_latest_3_0",
                                    "layerName": "gl_cldj_cmdj_py_latest_3_0",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "查明登记_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/d73ebda4c5d45d0cf9310f3c801b5269",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/287b156961b7ecc16e8fa52a6e765d03?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yqtx_cgcs_4549:gl_cldj_cmdj_py_latest_3_0"
                                },
                                {
                                    "id": "gl_cldj_drkqsdj_py_latest_3_0",
                                    "layerName": "gl_cldj_drkqsdj_py_latest_3_0",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "地热矿泉水登记_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/92eab05a3f5e8b61bae6073ea7d8c075",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/287b156961b7ecc16e8fa52a6e765d03?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yqtx_cgcs_4549:gl_cldj_drkqsdj_py_latest_3_0"
                                },
                                {
                                    "id": "gl_cldj_jsydyf_py_latest_3_0",
                                    "layerName": "gl_cldj_jsydyf_py_latest_3_0",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "建设用地压覆_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/168df6b23a121e31a7ff437cfb7072d6",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/287b156961b7ecc16e8fa52a6e765d03?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yqtx_cgcs_4549:gl_cldj_jsydyf_py_latest_3_0"
                                },
                                {
                                    "id": "gl_cldj_yfdj_py_latest_3_0",
                                    "layerName": "gl_cldj_yfdj_py_latest_3_0",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "压覆登记_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/4388b151509d7e48b5a437535730fd74",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/287b156961b7ecc16e8fa52a6e765d03?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yqtx_cgcs_4549:gl_cldj_yfdj_py_latest_3_0"
                                },
                                {
                                    "id": "gl_cldj_zydj_pt_latest_3_0",
                                    "layerName": "gl_cldj_zydj_pt_latest_3_0",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "占用登记_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/a879beefe94cf76c12c28c1d3bacc5e8",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/287b156961b7ecc16e8fa52a6e765d03?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yqtx_cgcs_4549:gl_cldj_zydj_pt_latest_3_0"
                                },
                            ]
                        },
                        
                        {
                            layerType: "GroupLayer",
                            name: "TKQ",
                            caption: "探矿权",
                            thematicMap: true,
                            subLayers:  [
                                {
                                    "id": "gl_tkq_tkqdzdc_py_latest_3_0",
                                    "layerName": "gl_tkq_tkqdzdc_py_latest_3_0",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "探矿权地质调查_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/4bd812f2b0366348a05eec7cdc447b92",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/287b156961b7ecc16e8fa52a6e765d03?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yqtx_cgcs_4549:gl_tkq_tkqdzdc_py_latest_3_0"
                                },
                                {
                                    "id": "gl_tkq_tkqkcdj_ls_py_latest_3_0",
                                    "layerName": "gl_tkq_tkqkcdj_ls_py_latest_3_0",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "探矿权勘查登记_历史_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/c41300b5c2850f97c34a6444490070f2",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/287b156961b7ecc16e8fa52a6e765d03?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yqtx_cgcs_4549:gl_tkq_tkqkcdj_ls_py_latest_3_0"
                                },
                                {
                                    "id": "gl_tkq_tkqkcdj_py_latest_3_0",
                                    "layerName": "gl_tkq_tkqkcdj_py_latest_3_0",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "探矿权勘查登记_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/4e7e814c68d674f408c19fae3bd9a091",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/287b156961b7ecc16e8fa52a6e765d03?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yqtx_cgcs_4549:gl_tkq_tkqkcdj_py_latest_3_0"
                                },
                            ]
                        }
                    ]
                    
                },
                {
                    layerType: "GroupLayer",
                    name: "STXJ",
                    caption: "生态修复",
                    thematicMap: true,
                    subLayers:  [
                        {
                            layerType: "GroupLayer",
                            name: "FQKS",
                            caption: "废弃矿山_省级下发",
                            thematicMap: true,
                            subLayers:  [
                                {
                                    "id": "gl_stxf_fqks_py_latest_3_0",
                                    "layerName": "gl_stxf_fqks_py_latest_3_0",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "废弃矿山",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/cea73303c3eca88cd583964d1ef8c051",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/287b156961b7ecc16e8fa52a6e765d03?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yqtx_cgcs_4549:gl_stxf_fqks_py_latest_3_0"
                                },
                                {
                                    "id": "gl_fqks_ksstxf_pt_latest_3_0",
                                    "layerName": "gl_fqks_ksstxf_pt_latest_3_0",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "矿山生态修复_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/686e189d6b170dc652d94dbecf3a339d",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/287b156961b7ecc16e8fa52a6e765d03?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yqtx_cgcs_4549:gl_fqks_ksstxf_pt_latest_3_0"
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
                    subLayers:  [
                        {
                            "id": "gl_wtzz_dpfwtzz_pt_latest_3_0",
                            "layerName": "gl_wtzz_dpfwtzz_pt_latest_3_0",
                            "layerType": "SuperMapWMTS",
                            "caption": "大棚房问题整治_省级下发",
                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/4ded428492cc3d58a35030fe9bfb6090",
                            "visible": false,
                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/287b156961b7ecc16e8fa52a6e765d03?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yqtx_cgcs_4549:gl_wtzz_dpfwtzz_pt_latest_3_0"
                        },
                        {
                            "id": "gl_wtzz_ssnydzz_pt_latest_3_0",
                            "layerName": "gl_wtzz_ssnydzz_pt_latest_3_0",
                            "layerType": "SuperMapWMTS",
                            "caption": "设施农用地整治_省级下发",
                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/097647429a9e8e5e2bd6a36ef8f23928",
                            "visible": false,
                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/287b156961b7ecc16e8fa52a6e765d03?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yqtx_cgcs_4549:gl_wtzz_ssnydzz_pt_latest_3_0"
                        },
                    ]
                },
                {
                    layerType: "GroupLayer",
                    name: "QQDJ",
                    caption: "确权登记",
                    thematicMap: true,
                    subLayers:  [
                        {
                            layerType: "GroupLayer",
                            name: "HYDJ",
                            caption: "海域登记",
                            thematicMap: true,
                            subLayers:  [
                                {
                                    "id": "gl_hydj_2020_yqqqyhxm_py_latest_3_0",
                                    "layerName": "qqyhxm_2020",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "乐清市确权用海项目（2020年）",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/112d86f41fd21d2487b88f7606dabf0e",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/287b156961b7ecc16e8fa52a6e765d03?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yqtx_cgcs_4549:gl_hydj_2020_yqqqyhxm_py_latest_3_0"
                                },
                            ]
                        }
                    ]
                },
                {
                    layerType: "GroupLayer",
                    name: "KCGL",
                    caption: "矿产管理",
                    thematicMap: true,
                    subLayers:  [
                        {
                            "id": "gl_kcgl_fqks_pt_latest_3_0",
                            "layerName": "fqks",
                            "layerType": "SuperMapWMTS",
                            "caption": "废弃矿山",
                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/0937837b2f984d2169b83cba9beebba1",
                            "visible": false,
                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/287b156961b7ecc16e8fa52a6e765d03?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yqtx_cgcs_4549:gl_kcgl_fqks_pt_latest_3_0"
                        },
                        {
                            "id": "gl_kcgl_gbks_pt_latest_3_0",
                            "layerName": "gbks",
                            "layerType": "SuperMapWMTS",
                            "caption": "关闭矿山",
                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/9c397bd2581b5192ef0e242a05923c9c",
                            "visible": false,
                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/287b156961b7ecc16e8fa52a6e765d03?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yqtx_cgcs_4549:gl_kcgl_gbks_pt_latest_3_0"
                        },
                        {
                            "id": "gl_kcgl_ghjdc_py_latest_3_0",
                            "layerName": "ghjdc",
                            "layerType": "SuperMapWMTS",
                            "caption": "规划及调查",
                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/bc2758aaa889377478d23a944d0435d7",
                            "visible": false,
                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/287b156961b7ecc16e8fa52a6e765d03?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yqtx_cgcs_4549:gl_kcgl_ghjdc_py_latest_3_0"
                        },
                        {
                            "id": "gl_kcgl_kcghq_py_latest_3_0",
                            "layerName": "kcghq",
                            "layerType": "SuperMapWMTS",
                            "caption": "矿产规划区",
                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/4a38e92477f09e5f936877a53c9ed70f",
                            "visible": false,
                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/287b156961b7ecc16e8fa52a6e765d03?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yqtx_cgcs_4549:gl_kcgl_kcghq_py_latest_3_0"
                        },
                        {
                            "id": "gl_kcgl_kcghqbh_pt_latest_3_0",
                            "layerName": "kcghqbh",
                            "layerType": "SuperMapWMTS",
                            "caption": "矿产规划区编号",
                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/9ef63a7f6ffdf44f3eb01fec0aa2bc35",
                            "visible": false,
                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/287b156961b7ecc16e8fa52a6e765d03?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yqtx_cgcs_4549:gl_kcgl_kcghqbh_pt_latest_3_0"
                        },
                        {
                            "id": "gl_kcgl_kckd_pt_latest_3_0",
                            "layerName": "kckd",
                            "layerType": "SuperMapWMTS",
                            "caption": "矿床矿点",
                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/68e37c10b5062bac820bb336e8747007",
                            "visible": false,
                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/287b156961b7ecc16e8fa52a6e765d03?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yqtx_cgcs_4549:gl_kcgl_kckd_pt_latest_3_0"
                        },
                        {
                            "id": "gl_kcgl_lsks_pt_latest_3_0",
                            "layerName": "lsks",
                            "layerType": "SuperMapWMTS",
                            "caption": "绿色矿山",
                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/1b5af7bce780e6f7967d790386defb8b",
                            "visible": false,
                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/287b156961b7ecc16e8fa52a6e765d03?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yqtx_cgcs_4549:gl_kcgl_lsks_pt_latest_3_0"
                        },
                    ]
                }

                


				               
            ]
        }
    ]

});

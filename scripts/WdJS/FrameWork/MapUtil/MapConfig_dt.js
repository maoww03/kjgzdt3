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
                    subLayers: [
                        {
                            "id": "xz_slzy_xjejdcslzy_py_latest_3_0",
                            "layerName": "XJELCSLZY_20",
                            "layerType": "SuperMapWMTS",
                            "caption": "县级二级调查森林资源_省级下发",
                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/36a0aa4ac9fcbef1e2640eb552217ad3",
                            "visible": false,
                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/5a56e52ca27fea6b32ae862aa51c8751?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_dttx_cgcs_4549:xz_slzy_xjejdcslzy_py_latest_3_0"
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
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/e08b2962a5f4245ceb369d2bdd7aed9d",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/5a56e52ca27fea6b32ae862aa51c8751?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_dttx_cgcs_4549:xz_slzy_2018_gjjgyl_py_latest_3_0"
                                },
                                {
                                    "id": "xz_slzy_2018_sjstgyl_py_latest_3_0",
                                    "layerName": "SJSTGYL_2018",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "省级生态公益林2018_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/bb47d5525af725d26d3ec5b4eb6729a2",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/5a56e52ca27fea6b32ae862aa51c8751?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_dttx_cgcs_4549:xz_slzy_2018_sjstgyl_py_latest_3_0"
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
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/dcdb7db9bb52193c8322710f3400519c",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/5a56e52ca27fea6b32ae862aa51c8751?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_dttx_cgcs_4549:xz_slzy_2018_sydbhq_py_latest_3_0"
                                },
                                {
                                    "id": "xz_slzy_2020_zrbhd_py_latest_3_0",
                                    "layerName": "ZRBHD_2020",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "自然保护地2020_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/8f2f7df8b145394c5fe8cf3698b5de7e",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/5a56e52ca27fea6b32ae862aa51c8751?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_dttx_cgcs_4549:xz_slzy_2020_zrbhd_py_latest_3_0"
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
							layerType: "GroupLayer",
							name: "TDZYDXYDZXDC",
							caption: "低效用地专项调查",
							thematicMap: true,
							subLayers: [
                                {
                                    "id": "xz_dxydzxdc_2019_dxdcdytb_py_latest_3_0",
                                    "layerName": "DCDYTB_2019",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "低效调查单元图斑2019_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/1748e4dd926b429cc4c17df57cf88c86",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/5a56e52ca27fea6b32ae862aa51c8751?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_dttx_cgcs_4549:xz_dxydzxdc_2019_dxdcdytb_py_latest_3_0"
                                },
                                {
                                    "id": "xz_dxydzxdc_2019_dxdcqtb_py_latest_3_0",
                                    "layerName": "DCQTB_2019",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "低效调查区图斑2019_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/57542275c66955c521d82f4fd3e11804",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/5a56e52ca27fea6b32ae862aa51c8751?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_dttx_cgcs_4549:xz_dxydzxdc_2019_dxdcqtb_py_latest_3_0"
                                },
                                {
                                    "id": "xz_dxydzxdc_2020_dxdcdytb_py_latest_3_0",
                                    "layerName": "DCDYTB_2020",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "低效调查单元图斑2020_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/67aa515f7e6bb519cd93c2c3d7224652",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/5a56e52ca27fea6b32ae862aa51c8751?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_dttx_cgcs_4549:xz_dxydzxdc_2020_dxdcdytb_py_latest_3_0"
                                },
                                {
                                    "id": "xz_dxydzxdc_2020_dxdcqtb_py_latest_3_0",
                                    "layerName": "DCQTB_2020",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "低效调查区图斑2020_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/3353a8f0b2a6bf7b5e2244e181796c35",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/5a56e52ca27fea6b32ae862aa51c8751?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_dttx_cgcs_4549:xz_dxydzxdc_2020_dxdcqtb_py_latest_3_0"
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
                                            "id": "xz_tdpj_2016_gdzldj_py_latest_3_0",
                                            "layerName": "GDZLDJ_2016",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "耕地质量等级2016",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/b4a01a37de20339a102a273c7205c75d",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/5a56e52ca27fea6b32ae862aa51c8751?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_dttx_cgcs_4549:xz_tdpj_2016_gdzldj_py_latest_3_0"
                                        },
                                    ]
                                },
                                // 耕地后备资源
                                {
                                    layerType: "GroupLayer",
                                    name: "GDHBZY",
                                    caption: "耕地后备资源",
                                    thematicMap: true,
                                    subLayers: [
                                        {
                                            "id": "xz_tdzy_wzsqczkfbj_py_latest_3_0",
                                            "layerName": "XZ_TDZY_WZSQCZKFBJ_PY",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "温州市区城镇开发边界_离线",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/c21b57783700842793c2c31000c9b616",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/5a56e52ca27fea6b32ae862aa51c8751?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_dttx_cgcs_4549:xz_tdzy_wzsqczkfbj_py_latest_3_0"
                                        },
                                        {
                                            "id": "xz_tdzy_pdt_py_latest_3_0",
                                            "layerName": "XZ_TDZY_PDT_PY",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "坡度图_离线",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/41a332705afbd71b24762d61fcae2684",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/5a56e52ca27fea6b32ae862aa51c8751?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_dttx_cgcs_4549:xz_tdzy_pdt_py_latest_3_0"
                                        },
                                        {
                                            "id": "xz_tdzy_xmfwx_py_latest_3_0",
                                            "layerName": "XZ_TDZY_XMFWX_PY",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "项目范围_离线",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/4651061282edd4746b1d6195f6a3b257",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/5a56e52ca27fea6b32ae862aa51c8751?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_dttx_cgcs_4549:xz_tdzy_xmfwx_py_latest_3_0"
                                        },
                                    ]
                                }
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
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/23e0200384580917da22fb97c49ffd20",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/5a56e52ca27fea6b32ae862aa51c8751?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_dttx_cgcs_4549:xz_decqgtddc_2009_dltb_py_latest_3_0"
                                        },
                                        {
                                            "id": "xz_decqgtddc_2009_lxdw_pt_latest_3_0",
                                            "layerName": "TDLYXZ_LXDW_2009",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "零星地物2009",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/f36e53569b2097b4aec36cb262f31b31",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/5a56e52ca27fea6b32ae862aa51c8751?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_dttx_cgcs_4549:xz_decqgtddc_2009_lxdw_pt_latest_3_0"
                                        },
                                        {
                                            "id": "xz_decqgtddc_2009_xzdw_ln_latest_3_0",
                                            "layerName": "TDLYXZ_XZDW_2009",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "线状地物2009",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/82f5ff0453dcec75dbe5ef809ec19d75",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/5a56e52ca27fea6b32ae862aa51c8751?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_dttx_cgcs_4549:xz_decqgtddc_2009_xzdw_ln_latest_3_0"
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
                                            "id": "xz_tdbg_2010_xzdw_ln_latest_3_0",
                                            "layerName": "TDLYXZ_XZDW_2010",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "线状地物2010",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/c3bf7325a23f843e901d70c4e45a7395",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/5a56e52ca27fea6b32ae862aa51c8751?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_dttx_cgcs_4549:xz_tdbg_2010_xzdw_ln_latest_3_0"
                                        },
                                        {
                                            "id": "xz_tdbg_2010_lxdw_pt_latest_3_0",
                                            "layerName": "TDLYXZ_LXDW_2010",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "零星地物2010",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/f993fc47912bf5bfe31e37b6a7035b2d",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/5a56e52ca27fea6b32ae862aa51c8751?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_dttx_cgcs_4549:xz_tdbg_2010_lxdw_pt_latest_3_0"
                                        },
                                        {
                                            "id": "xz_tdbg_2012_lxdw_pt_latest_3_0",
                                            "layerName": "TDLYXZ_LXDW_2012",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "零星地物2012",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/88e2a55acb905be80848da0552b9ae40",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/5a56e52ca27fea6b32ae862aa51c8751?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_dttx_cgcs_4549:xz_tdbg_2012_lxdw_pt_latest_3_0"
                                        },
                                        {
                                            "id": "xz_tdbg_2012_xzdw_ln_latest_3_0",
                                            "layerName": "TDLYXZ_XZDW_2012",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "线状地物2012",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/f8101f58bf80843e76bab1e3616425f4",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/5a56e52ca27fea6b32ae862aa51c8751?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_dttx_cgcs_4549:xz_tdbg_2012_xzdw_ln_latest_3_0"
                                        },
                                        {
                                            "id": "xz_tdbg_2013_lxdw_pt_latest_3_0",
                                            "layerName": "TDLYXZ_LXDW_2013",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "零星地物2013",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/5712ac293d399fe82490f4e6dc303dec",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/5a56e52ca27fea6b32ae862aa51c8751?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_dttx_cgcs_4549:xz_tdbg_2013_lxdw_pt_latest_3_0"
                                        },
                                        {
                                            "id": "xz_tdbg_2013_xzdw_ln_latest_3_0",
                                            "layerName": "TDLYXZ_XZDW_2013",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "线状地物2013",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/21c435b210de4128914cf3dab892b53a",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/5a56e52ca27fea6b32ae862aa51c8751?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_dttx_cgcs_4549:xz_tdbg_2013_xzdw_ln_latest_3_0"
                                        },
                                        {
                                            "id": "xz_tdbg_2014_xzdw_ln_latest_3_0",
                                            "layerName": "TDLYXZ_XZDW_2014",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "线状地物2014",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/1240f4cc40920a4365d980641049967b",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/5a56e52ca27fea6b32ae862aa51c8751?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_dttx_cgcs_4549:xz_tdbg_2014_xzdw_ln_latest_3_0"
                                        },
                                        {
                                            "id": "xz_tdbg_2014_lxdw_pt_latest_3_0",
                                            "layerName": "TDLYXZ_LXDW_2014",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "零星地物2014",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/bb6a8ad0cfcbf021a99ab1e5baede289",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/5a56e52ca27fea6b32ae862aa51c8751?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_dttx_cgcs_4549:xz_tdbg_2014_lxdw_pt_latest_3_0"
                                        },
                                        {
                                            "id": "xz_tdbg_2015_xzdw_ln_latest_3_0",
                                            "layerName": "TDLYXZ_XZDW_2015",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "线状地物2015",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/435db211d4e0f7193f32a8b089b6b846",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/5a56e52ca27fea6b32ae862aa51c8751?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_dttx_cgcs_4549:xz_tdbg_2015_xzdw_ln_latest_3_0"
                                        },
                                        {
                                            "id": "xz_tdbg_2015_lxdw_pt_latest_3_0",
                                            "layerName": "TDLYXZ_LXDW_2015",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "零星地物2015",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/2ba5106184d3a6fce3884274db441fcd",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/5a56e52ca27fea6b32ae862aa51c8751?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_dttx_cgcs_4549:xz_tdbg_2015_lxdw_pt_latest_3_0"
                                        },
                                        {
                                            "id": "xz_tdbg_2016_dltb_py_latest_3_0",
                                            "layerName": "TDLYXZ_DLTB_2016",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "地类图斑2016",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/77ff03536fefc8ffe25e958814d737ab",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/5a56e52ca27fea6b32ae862aa51c8751?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_dttx_cgcs_4549:xz_tdbg_2016_dltb_py_latest_3_0"
                                        },
                                        {
                                            "id": "xz_tdbg_2016_lxdw_pt_latest_3_0",
                                            "layerName": "TDLYXZ_LXDW_2016",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "零星地物2016",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/310980e715579fb437d6f7d81ba121e2",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/5a56e52ca27fea6b32ae862aa51c8751?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_dttx_cgcs_4549:xz_tdbg_2016_lxdw_pt_latest_3_0"
                                        },
                                        {
                                            "id": "xz_tdbg_2016_xzdw_ln_latest_3_0",
                                            "layerName": "TDLYXZ_XZDW_2016",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "线状地物2016",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/cb071a60ff4a2bc750f410cdd0c65c89",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/5a56e52ca27fea6b32ae862aa51c8751?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_dttx_cgcs_4549:xz_tdbg_2016_xzdw_ln_latest_3_0"
                                        },
                                        {
                                            "id": "xz_tdbg_2017_lxdw_pt_latest_3_0",
                                            "layerName": "TDLYXZ_LXDW_2017",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "零星地物2017",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/c17c48fbf484c94a6e1743f198a6c2ee",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/5a56e52ca27fea6b32ae862aa51c8751?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_dttx_cgcs_4549:xz_tdbg_2017_lxdw_pt_latest_3_0"
                                        },
                                        {
                                            "id": "xz_tdbg_2017_xzdw_ln_latest_3_0",
                                            "layerName": "TDLYXZ_XZDW_2017",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "线状地物2017",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/343b20524531ee2e3a903fadca00d25a",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/5a56e52ca27fea6b32ae862aa51c8751?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_dttx_cgcs_4549:xz_tdbg_2017_xzdw_ln_latest_3_0"
                                        },
                                    ]
                                }
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
                            "id": "xz_sdzy_2018_gjzysd_pt_latest_3_0",
                            "layerName": "GJZYSD_2018",
                            "layerType": "SuperMapWMTS",
                            "caption": "国家重要湿地2018_省级下发",
                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/caa3452271503819449cd553b32b2019",
                            "visible": false,
                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/5a56e52ca27fea6b32ae862aa51c8751?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_dttx_cgcs_4549:xz_sdzy_2018_gjzysd_pt_latest_3_0"
                        },
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
                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/c12d93cbd03ac4de64d192f215b09402",
                            "visible": false,
                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/5a56e52ca27fea6b32ae862aa51c8751?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_dttx_cgcs_4549:xz_dzsj_dzyjbhq_pt_latest_3_0"
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
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/0a256d60fedc9708e560655f4f260f67",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/5a56e52ca27fea6b32ae862aa51c8751?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_dttx_cgcs_4549:xz_dzzh_yhd_pt_latest_3_0"
                                },
                                {
                                    "id": "xz_dzzh_zqd_pt_latest_3_0",
                                    "layerName": "ZXQD_ZQD_X",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "灾情点_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/4ee9a5e20ec684e3c15156327b61ec66",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/5a56e52ca27fea6b32ae862aa51c8751?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_dttx_cgcs_4549:xz_dzzh_zqd_pt_latest_3_0"
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
                                            id: "gh_kg_ydgh_py_latest_3_0",
                                            layerType: "SuperMapWMTS",
                                            caption: "用地规划",
                                            mapUrl: "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/450726d179a2b9009fddc546edc988bc",
                                            visible: false,
                                            queryUrl: "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/5a56e52ca27fea6b32ae862aa51c8751?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_dttx_cgcs_4549:gh_kg_ydgh_py_latest_3_0"
                                            
                                            
                                        },
                                        {
                                            "id": "gh_kg_dkfh_pt_latest_3_0",
                                            "layerName": "BKY_DKFH_PT",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "控规_地块符号",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/647d685c8ee53265ef9c326751a1634b",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/5a56e52ca27fea6b32ae862aa51c8751?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_dttx_cgcs_4549:gh_kg_dkfh_pt_latest_3_0"
                                        },
                                        {
                                            "id": "gh_kg_dkbh_ap_latest_3_0",
                                            "layerName": "BKY_DKBH_AP",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "控规_地块编号",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/314b5cc14c3bd3e993e99b134a0c2ad5",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/5a56e52ca27fea6b32ae862aa51c8751?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_dttx_cgcs_4549:gh_kg_dkbh_ap_latest_3_0"
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
                                        "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/fb04757f0facfe1f9aac6f1f01eb8939",
                                        "visible": false,
                                        "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/5a56e52ca27fea6b32ae862aa51c8751?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_dttx_cgcs_4549:gh_kg_lhlx_py_latest_3_0"
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
                                                "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/1b3767059e85eea3857349ffd33b9b2d",
                                                "visible": false,
                                                "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/5a56e52ca27fea6b32ae862aa51c8751?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_dttx_cgcs_4549:gh_kg_sshx_py_latest_3_0"
                                            },
                                            {
                                                "id": "gh_kg_sshx_ln_latest_3_0",
                                                "layerName": "BKK_SSHX_LN",
                                                "layerType": "SuperMapWMTS",
                                                "caption": "控规_基础设施黄线",
                                                "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/16a7233cb62a1494e25596f69b2370dd",
                                                "visible": false,
                                                "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/5a56e52ca27fea6b32ae862aa51c8751?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_dttx_cgcs_4549:gh_kg_sshx_ln_latest_3_0"
                                            },
                                        ]
                                    },
                                    {
                                        "id": "gh_kg_sxlx_ln_latest_3_0",
                                        "layerName": "BKK_SXLX_LN",
                                        "layerType": "SuperMapWMTS",
                                        "caption": "控规_水系蓝线",
                                        "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/dd796b269f547e15a194b1c2d0839be2",
                                        "visible": false,
                                        "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/5a56e52ca27fea6b32ae862aa51c8751?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_dttx_cgcs_4549:gh_kg_sxlx_ln_latest_3_0"
                                    },
                                    {
                                        "id": "gh_kg_wbzx_py_latest_3_0",
                                        "layerName": "BKK_WBZX_PY",
                                        "layerType": "SuperMapWMTS",
                                        "caption": "控规_文保紫线",
                                        "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/48ea93b93c27a206a1e57b6c85dbec3c",
                                        "visible": false,
                                        "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/5a56e52ca27fea6b32ae862aa51c8751?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_dttx_cgcs_4549:gh_kg_wbzx_py_latest_3_0"
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
                                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/8ef054accab2a145be11c7df19fc39b9",
                                                    "visible": false,
                                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/5a56e52ca27fea6b32ae862aa51c8751?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_dttx_cgcs_4549:gh_kg_dlzx_ln_latest_3_0"
                                                },
                                                {
                                                    "id": "gh_kg_dlbx_ln_latest_3_0",
                                                    "layerName": "BKJ_DLBX_LN",
                                                    "layerType": "SuperMapWMTS",
                                                    "caption": "控规_道路边线",
                                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/e6b3faa2c2ae6965aec15870443b5bf2",
                                                    "visible": false,
                                                    "queryUrl": "?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_dttx_cgcs_4549:gh_kg_dlbx_ln_latest_3_0"
                                                },
                                            ]
                                        },
                                        {
                                            "id": "gh_kg_gdx_ln_latest_3_0",
                                            "layerName": "BKJ_GDX_LN",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "控规_轨道线",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/7bdba772f980c8c7629ffc34f20e296c",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/5a56e52ca27fea6b32ae862aa51c8751?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_dttx_cgcs_4549:gh_kg_gdx_ln_latest_3_0"
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
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/894f3eee29f2adea7145842d0f2cfa16",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/5a56e52ca27fea6b32ae862aa51c8751?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_dttx_cgcs_4549:gh_kg_gpss_py_latest_3_0"
                                        },
                                        {
                                            "id": "gh_kg_gpss_pt_latest_3_0",
                                            "layerName": "BKP_GPSS_PT",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "控规_公共配套设施点",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/0a0ab7031a80a35a3dcbad3b0b9fb63f",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/5a56e52ca27fea6b32ae862aa51c8751?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_dttx_cgcs_4549:gh_kg_gpss_pt_latest_3_0"
                                        },
                                        {
                                            "id": "gh_kg_gpfh_pt_latest_3_0",
                                            "layerName": "BKP_GPFH_PT",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "控规_公共配套设施符号",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/0f86fba1d64dda7ffc38812b52209157",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/5a56e52ca27fea6b32ae862aa51c8751?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_dttx_cgcs_4549:gh_kg_gpfh_pt_latest_3_0"
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
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/f69224a617a2f642eb88a3a8f783eb8f",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/5a56e52ca27fea6b32ae862aa51c8751?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_dttx_cgcs_4549:gh_kg_xmfw_py_latest_3_0"
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
                            subLayers: [
                                
                                {
                                    "id": "gh_tdlyztgh_2017_jsydgzq_py_latest_3_0",
                                    "layerName": "JSYDGZQ_2017",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "建设用地管制区2017_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/ab2712cf9414b9c893d960d47da955cc",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/5a56e52ca27fea6b32ae862aa51c8751?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_dttx_cgcs_4549:gh_tdlyztgh_2017_jsydgzq_py_latest_3_0"
                                },
                                {
                                    "id": "gh_tdlyztgh_2020_jsydgzq_py_latest_3_0",
                                    "layerName": "JSYDGZQ_2020",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "建设用地管制区2020_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/ccca08446c6648dac67bbc68bf51d85e",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/5a56e52ca27fea6b32ae862aa51c8751?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_dttx_cgcs_4549:gh_tdlyztgh_2020_jsydgzq_py_latest_3_0"
                                },
                            ]
                        }
                    ]
                },
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
                                    "layerName": "STBHHX_2018",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "生态保护红线2018_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/ba43b1964613a93d6633dd62405d5419",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/5a56e52ca27fea6b32ae862aa51c8751?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_dttx_cgcs_4549:gh_zykzx_2018_stbhhx_py_latest_3_0"
                                },
                                {
                                    "id": "xz_zykzx_2016_yjjbntbhhx_py_latest_3_0",
                                    "layerName": "YJJBNTBHHX_YJJBNTHX_2016",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "永久基本农田保护红线2016",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/8e6b8e2d0770211cd5cf61bfe89ac9f2",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/5a56e52ca27fea6b32ae862aa51c8751?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_dttx_cgcs_4549:xz_zykzx_2016_yjjbntbhhx_py_latest_3_0"
                                },
                                {
                                    "id": "gh_zykzx_2020_yjjbntbhhx_py_latest_3_0",
                                    "layerName": "YJJBNTHX_2020",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "永久基本农田保护红线2020_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/77d6c8b2f9921c3b3a2a1a0dc3300232",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/5a56e52ca27fea6b32ae862aa51c8751?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_dttx_cgcs_4549:gh_zykzx_2020_yjjbntbhhx_py_latest_3_0"
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
					caption: "国土空间用途管制和开发利用",
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
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/c4913e3d4f6474fa96cfdc16c770dba4",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/5a56e52ca27fea6b32ae862aa51c8751?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_dttx_cgcs_4549:xz_dxydzkf_dxydzkfxmhx_py_latest_3_0"
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
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/4ba5348f4364c9ff78e160c52b2cd253",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/5a56e52ca27fea6b32ae862aa51c8751?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_dttx_cgcs_4549:gl_gtkjytgzhkfly_ghjbtzl_py_latest_3_0"
                                },
                                {
                                    "id": "gl_gtkjytgzhkfly_ghjbtzx_py_latest_3_0",
                                    "layerName": "GHJT_GHJBTZ_X",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "规划局部调整X_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/86f4b3b5fbcc7ce42e64a0f36b0551fd",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/5a56e52ca27fea6b32ae862aa51c8751?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_dttx_cgcs_4549:gl_gtkjytgzhkfly_ghjbtzx_py_latest_3_0"
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
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/7b9c50673bc8d4c1c7532d9b94e9a3a5",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/5a56e52ca27fea6b32ae862aa51c8751?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_dttx_cgcs_4549:gl_nzybp_jsydbpl_py_latest_3_0"
                                },
                                {
                                    "id": "gl_nzybp_jsydbpx_py_latest_3_0",
                                    "layerName": "JSYDBP_NZYDK_X",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "建设用地报批（农转用地块）X_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/e402c3bc8c09477e669e02b7df45f8b6",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/5a56e52ca27fea6b32ae862aa51c8751?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_dttx_cgcs_4549:gl_nzybp_jsydbpx_py_latest_3_0"
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
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/c311b236482a177f6336177a5ee3b440",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/5a56e52ca27fea6b32ae862aa51c8751?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_dttx_cgcs_4549:gl_gtkjytgzhkfly_jsydys_py_latest_3_0"
                                },
                                {
                                    "id": "gl_ssnydba_bhjbnt_py_latest_3_0",
                                    "layerName": "SSNYD_BHYNFW",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "补划基本农田_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/5f5fb087d839b00db02d5aca22afce08",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/5a56e52ca27fea6b32ae862aa51c8751?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_dttx_cgcs_4549:gl_ssnydba_bhjbnt_py_latest_3_0"
                                },
                                {
                                    "id": "gl_ssnydba_phgzcfw_py_latest_3_0",
                                    "layerName": "SSNYD_GZCPHJZD",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "破坏耕作层范围_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/aa0582da7fb1cb6dc63f971f7d74b3fb",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/5a56e52ca27fea6b32ae862aa51c8751?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_dttx_cgcs_4549:gl_ssnydba_phgzcfw_py_latest_3_0"
                                },
                                {
                                    "id": "gl_ssnydba_nydfw_py_latest_3_0",
                                    "layerName": "SSNYD_NYDJZD",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "农用地范围_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/c9f42e45d3e0ec82851cf902526229e2",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/5a56e52ca27fea6b32ae862aa51c8751?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_dttx_cgcs_4549:gl_ssnydba_nydfw_py_latest_3_0"
                                },
                                {
                                    "id": "gl_ssnydba_phynfw_py_latest_3_0",
                                    "layerName": "SSNYD_PHYNJZD",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "破坏永农范围_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/f1a409252cae48747d5c70d648a33a34",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/5a56e52ca27fea6b32ae862aa51c8751?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_dttx_cgcs_4549:gl_ssnydba_phynfw_py_latest_3_0"
                                },
                                {
                                    "id": "gl_ssnydba_zyynfw_py_latest_3_0",
                                    "layerName": "SSNYD_ZYYNJZD",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "占用永农范围_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/183bc2e74534b636573d711d585b90de",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/5a56e52ca27fea6b32ae862aa51c8751?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_dttx_cgcs_4549:gl_ssnydba_zyynfw_py_latest_3_0"
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
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/8ac4c40450611799230abb3962c5033d",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/5a56e52ca27fea6b32ae862aa51c8751?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_dttx_cgcs_4549:gl_tdcb_tdcb_py_latest_3_0"
                                },
                            ]
                        },
                        {
                            layerType: "GroupLayer",
                            name: "TDGY",
                            caption: "土地供应",
                            thematicMap: true,
                            subLayers:[
                                {
                                    "id": "gl_tdgy_gddk_py_latest_3_0",
                                    "layerName": "TDGY_GDDK_X",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "供地地块_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/eeedcce703b3c73f7407942d4ff0fbd3",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/5a56e52ca27fea6b32ae862aa51c8751?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_dttx_cgcs_4549:gl_tdgy_gddk_py_latest_3_0"
                                },
                                {
                                    "id": "gl_tdgy_zpgcrdk_py_latest_3_0",
                                    "layerName": "TDGY_TDJY_ZPGCR",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "土地交易-招拍挂出让地块_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/9d72790518866f736d731344fad7de34",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/5a56e52ca27fea6b32ae862aa51c8751?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_dttx_cgcs_4549:gl_tdgy_zpgcrdk_py_latest_3_0"
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
                            "layerName": "TDZZ_GBZJS_LX_X",
                            "layerType": "SuperMapWMTS",
                            "caption": "高标准建设地块-立项_省级下发",
                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/9e55f5817ec7f5ef8888bbdf4009fe38",
                            "visible": false,
                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/5a56e52ca27fea6b32ae862aa51c8751?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_dttx_cgcs_4549:gl_tdzz_gbzjsdk_lx_py_latest_3_0"
                        },
                        {
                            "id": "gl_tdzz_gbzjsdk_ys_py_latest_3_0",
                            "layerName": "TDZZ_GBZJS_YS_X",
                            "layerType": "SuperMapWMTS",
                            "caption": "高标准建设地块-验收_省级下发",
                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/7b69fe61f19937c934c71d375f84ee6a",
                            "visible": false,
                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/5a56e52ca27fea6b32ae862aa51c8751?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_dttx_cgcs_4549:gl_tdzz_gbzjsdk_ys_py_latest_3_0"
                        },
                        {
                            "id": "gl_tdzz_gbztsdk_lx_py_latest_3_0",
                            "layerName": "TDZZ_GBZTS_LX_X",
                            "layerType": "SuperMapWMTS",
                            "caption": "高标准提升地块-立项_省级下发",
                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/67ca1aecb641194863cb3d5370483dde",
                            "visible": false,
                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/5a56e52ca27fea6b32ae862aa51c8751?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_dttx_cgcs_4549:gl_tdzz_gbztsdk_lx_py_latest_3_0"
                        },
                        {
                            "id": "gl_tdzz_gbztsdk_ys_py_latest_3_0",
                            "layerName": "TDZZ_GBZTS_YS_X",
                            "layerType": "SuperMapWMTS",
                            "caption": "高标准提升地块-验收_省级下发",
                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/958226fb8533ecc64218249298d84b73",
                            "visible": false,
                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/5a56e52ca27fea6b32ae862aa51c8751?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_dttx_cgcs_4549:gl_tdzz_gbztsdk_ys_py_latest_3_0"
                        },
                        {
                            "id": "gl_tdzz_jsydfkdk_lx_py_latest_3_0",
                            "layerName": "TDZZ_JSYDFK_LX_",
                            "layerType": "SuperMapWMTS",
                            "caption": "建设用地复垦地块-立项_省级下发",
                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/569e71c58463edc24b9ae8567e0ea2eb",
                            "visible": false,
                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/5a56e52ca27fea6b32ae862aa51c8751?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_dttx_cgcs_4549:gl_tdzz_jsydfkdk_lx_py_latest_3_0"
                        },
                        {
                            "id": "gl_jdzz_jsydfkdk_ys_py_latest_3_0",
                            "layerName": "TDZZ_JSYDFK_YS_",
                            "layerType": "SuperMapWMTS",
                            "caption": "建设用地复垦地块-验收_省级下发",
                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/c3052b2e9598770e2cfe9acc84229741",
                            "visible": false,
                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/5a56e52ca27fea6b32ae862aa51c8751?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_dttx_cgcs_4549:gl_jdzz_jsydfkdk_ys_py_latest_3_0"
                        },
                        {
                            "id": "gl_tdzz_kzgd_lx_py_latest_3_0",
                            "layerName": "TDZZ_KZGD_LX_X",
                            "layerType": "SuperMapWMTS",
                            "caption": "垦造耕地-立项_省级下发",
                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/d76ff43281cd26d360cd5154c37040cf",
                            "visible": false,
                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/5a56e52ca27fea6b32ae862aa51c8751?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_dttx_cgcs_4549:gl_tdzz_kzgd_lx_py_latest_3_0"
                        },
                        {
                            "id": "gl_tdzz_kzgd_ys_py_latest_3_0",
                            "layerName": "TDZZ_KZGD_YS_X",
                            "layerType": "SuperMapWMTS",
                            "caption": "垦造耕地-验收_省级下发",
                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/57242644116c84b15caca42092998416",
                            "visible": false,
                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/5a56e52ca27fea6b32ae862aa51c8751?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_dttx_cgcs_4549:gl_tdzz_kzgd_ys_py_latest_3_0"
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
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/d12a0011bd469fa2410f013c07095a4c",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/5a56e52ca27fea6b32ae862aa51c8751?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_dttx_cgcs_4549:gl_zjgg_cjdkl_py_latest_3_0"
                                },
                                {
                                    "id": "gl_zjgg_jxdkl_py_latest_3_0",
                                    "layerName": "NCTDZHZZ_JXDK_L",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "建新地块L_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/0f5402d4f854d8622497c7a8398c7ffe",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/5a56e52ca27fea6b32ae862aa51c8751?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_dttx_cgcs_4549:gl_zjgg_jxdkl_py_latest_3_0"
                                },
                                {
                                    "id": "gl_zjgg_jxdkx_py_latest_3_0",
                                    "layerName": "NCTDZHZZ_JXDK_X",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "建新地块X_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/78e4cccb4b9e8f4b69c680144a5351d4",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/5a56e52ca27fea6b32ae862aa51c8751?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_dttx_cgcs_4549:gl_zjgg_jxdkx_py_latest_3_0"
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
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/72d163940e6746b3f764e67c4a5345f9",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/5a56e52ca27fea6b32ae862aa51c8751?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_dttx_cgcs_4549:gl_tzgzdk_gdzlts_lx_py_latest_3_0"
                                },
                                {
                                    "id": "gl_tzgzdk_gdzlts_ys_py_latest_3_0",
                                    "layerName": "TDZZ_GDZLTS_YS",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "耕地质量提升-验收_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/ef8b16dcb8545792b449a19ef10333e8",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/5a56e52ca27fea6b32ae862aa51c8751?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_dttx_cgcs_4549:gl_tzgzdk_gdzlts_ys_py_latest_3_0"
                                },
                                {
                                    "id": "gl_tzgzdk_hgsdk_lx_py_latest_3_0",
                                    "layerName": "TDZZ_HGSDK_LX_X",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "旱改水地块-立项_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/91544b865287c6dffe7cd9eed35dd1da",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/5a56e52ca27fea6b32ae862aa51c8751?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_dttx_cgcs_4549:gl_tzgzdk_hgsdk_lx_py_latest_3_0"
                                },
                                {
                                    "id": "gl_tzgzdk_hgsdk_ys_py_latest_3_0",
                                    "layerName": "TDZZ_HGSDK_YS_X",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "旱改水地块-验收_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/70f2838330b4bedbff85e44fa2526ae9",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/5a56e52ca27fea6b32ae862aa51c8751?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_dttx_cgcs_4549:gl_tzgzdk_hgsdk_ys_py_latest_3_0"
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
                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/0329ef317ee843490f0e74b9eddb11f2",
                            "visible": false,
                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/5a56e52ca27fea6b32ae862aa51c8751?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_dttx_cgcs_4549:gl_ksgl_lsks_py_latest_3_0"
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
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/a21b133ce890b726a6cd5f63f74b40d9",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/5a56e52ca27fea6b32ae862aa51c8751?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_dttx_cgcs_4549:gl_ckq_ckqdj_py_latest_3_0"
                                },
                                {
                                    "id": "gl_ckq_hdkqfw_py_latest_3_0",
                                    "layerName": "CKQ_HDKQFW",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "划定矿区范围_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/1a95cc34507c3bad173a23594ed8b958",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/5a56e52ca27fea6b32ae862aa51c8751?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_dttx_cgcs_4549:gl_ckq_hdkqfw_py_latest_3_0"
                                },
                                {
                                    "id": "gl_ckq_ckqdj_ls_py_latest_3_0",
                                    "layerName": "CKQDJ_LSX",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "采矿权登记-历史_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/a8753f173245fc5160e64ee342b5cd90",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/5a56e52ca27fea6b32ae862aa51c8751?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_dttx_cgcs_4549:gl_ckq_ckqdj_ls_py_latest_3_0"
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
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/e23c72c44d913dffeb6e23e81990cc14",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/5a56e52ca27fea6b32ae862aa51c8751?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_dttx_cgcs_4549:gl_cldj_cmdj_py_latest_3_0"
                                },
                                {
                                    "id": "gl_cldj_drkqsdj_py_latest_3_0",
                                    "layerName": "CLDJ_DRKQS",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "地热矿泉水登记_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/2a5aa9599c6350f48f56e4ac798927c9",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/5a56e52ca27fea6b32ae862aa51c8751?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_dttx_cgcs_4549:gl_cldj_drkqsdj_py_latest_3_0"
                                },
                                {
                                    "id": "gl_cldj_jsydyf_py_latest_3_0",
                                    "layerName": "CLDJ_JSYDYF_X",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "建设用地压覆_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/e22b5409d12c4ff53a50bc363218a743",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/5a56e52ca27fea6b32ae862aa51c8751?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_dttx_cgcs_4549:gl_cldj_jsydyf_py_latest_3_0"
                                },
                                {
                                    "id": "gl_cldj_yfdj_py_latest_3_0",
                                    "layerName": "CLDJ_YFDJ_X",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "压覆登记_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/3b36ae369f6f7fccd7be5e4d8c303c78",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/5a56e52ca27fea6b32ae862aa51c8751?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_dttx_cgcs_4549:gl_cldj_yfdj_py_latest_3_0"
                                },
                                {
                                    "id": "gl_cldj_zydj_pt_latest_3_0",
                                    "layerName": "CLDJ_ZYDJ_X",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "占用登记_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/7fa7f505630f7d8bd9f7cd783024d784",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/5a56e52ca27fea6b32ae862aa51c8751?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_dttx_cgcs_4549:gl_cldj_zydj_pt_latest_3_0"
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
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/b9bad9b1299ba30d76c8b84aff3679be",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/5a56e52ca27fea6b32ae862aa51c8751?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_dttx_cgcs_4549:gl_tkq_tkqdzdc_py_latest_3_0"
                                },
                                {
                                    "id": "gl_tkq_tkqkcdj_ls_py_latest_3_0",
                                    "layerName": "TKQ_KCDJ_LSX",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "探矿权勘查登记_历史_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/08df4a85a62569c3aa112509d981c815",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/5a56e52ca27fea6b32ae862aa51c8751?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_dttx_cgcs_4549:gl_tkq_tkqkcdj_ls_py_latest_3_0"
                                },
                                {
                                    "id": "gl_tkq_tkqkcdj_py_latest_3_0",
                                    "layerName": "TKQ_KCDJ_X",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "探矿权勘查登记_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/4b4669922dbe4f17a740cf218978a134",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/5a56e52ca27fea6b32ae862aa51c8751?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_dttx_cgcs_4549:gl_tkq_tkqkcdj_py_latest_3_0"
                                },
                            ]
                        }
                    ]
                },
                {
					layerType: "GroupLayer",
					name: "STXF",
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
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/ed0a8b120b3129d68cf62085d3d7f3f6",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/5a56e52ca27fea6b32ae862aa51c8751?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_dttx_cgcs_4549:gl_stxf_fqks_py_latest_3_0"
                                },
                                {
                                    "id": "gl_fqks_ksstxf_pt_latest_3_0",
                                    "layerName": "KS",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "矿山生态修复_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/ba7612a0733da01f42d7a1dd8fe813cc",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/5a56e52ca27fea6b32ae862aa51c8751?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_dttx_cgcs_4549:gl_fqks_ksstxf_pt_latest_3_0"
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
                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/298f687ce69c5a0b92ea0d2e7dbbd87e",
                            "visible": false,
                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/5a56e52ca27fea6b32ae862aa51c8751?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_dttx_cgcs_4549:gl_wtzz_dpfwtzz_pt_latest_3_0"
                        },
                        {
                            "id": "gl_wtzz_ssnydzz_pt_latest_3_0",
                            "layerName": "WTZZ_SSNYDZZX",
                            "layerType": "SuperMapWMTS",
                            "caption": "设施农用地整治_省级下发",
                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/f84ccb23678b93e1dc50bc0f72345acb",
                            "visible": false,
                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/5a56e52ca27fea6b32ae862aa51c8751?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_dttx_cgcs_4549:gl_wtzz_ssnydzz_pt_latest_3_0"
                        },
                        {
                            layerType: "GroupLayer",
                            name: "WPJCTBWFTB",
                            caption: "卫片监测图斑违法图斑",
                            thematicMap: true,
                            subLayers: [
                                {
                                    "id": "gl_phjg_2020_wpjctb_py_latest_3_0",
                                    "layerName": "GL_PHJG_2020_WPJCTB_PY",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "2020年第一二季度违法图斑_离线",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/886f5c4e98452fc332caee1a41f40f28",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/5a56e52ca27fea6b32ae862aa51c8751?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_dttx_cgcs_4549:gl_phjg_2020_wpjctb_py_latest_3_0"
                                },
                            ]
                        }
                    ]
                },
                {
                    layerType: "GroupLayer",
                    name: "GHBZSJ",
                    caption: "规划编制数据",
                    thematicMap: true,
                    subLayers: [
                        {
                            "id": "gl_ghbzsj_whpyq_py_latest_3_0",
                            "layerName": "PCS330300_GL_GHBZSJ_WHPYQ_PY",
                            "layerType": "SuperMapWMTS",
                            "caption": "危化品园区",
                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/17e9411220b0a5c64bf6962aeb85be3f",
                            "visible": false,
                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/486250386a3f6b25423d6b459cd10b28?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_qs_cgcs_4549:gl_ghbzsj_whpyq_py_latest_3_0"
                        },
                        {
                            "id": "gl_ghbzsj_whpqy_pt_latest_3_0",
                            "layerName": "PCS330300_GL_GHBZSJ_WHPQY_PT",
                            "layerType": "SuperMapWMTS",
                            "caption": "危化品企业",
                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/6ec8b26a006464bc581afbe46284110c",
                            "visible": false,
                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/486250386a3f6b25423d6b459cd10b28?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_qs_cgcs_4549:gl_ghbzsj_whpqy_pt_latest_3_0"
                        }                   
                    ]
                }
               
            ]
        }
    ]

});

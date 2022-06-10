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
                            "id": "xz_tdzy_2017_bznt_py_latest_3_0",
                            "layerName": "BZNT_BZNT_2017",
                            "layerType": "SuperMapWMTS",
                            "caption": "标准农田2017",
                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/e7aeba0aa45258638a07f3e4e908d4af",
                            "visible": false,
                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/2cce934beb1db0964729c4513519a026?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_cntx_cgcs_4549:xz_tdzy_2017_bznt_py_latest_3_0"
                        },
                        {
                            "id": "xz_tdzy_2017_gyyd_py_latest_3_0",
                            "layerName": "GYYD_2017",
                            "layerType": "SuperMapWMTS",
                            "caption": "供应用地2017",
                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/b02c991a7557b12e4595d85720e498ab",
                            "visible": false,
                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/2cce934beb1db0964729c4513519a026?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_cntx_cgcs_4549:xz_tdzy_2017_gyyd_py_latest_3_0"
                        },
                        {
                            "id": "xz_tdzy_2017_dcdytb_py_latest_3_0",
                            "layerName": "JSYDDCDYTB_2017",
                            "layerType": "SuperMapWMTS",
                            "caption": "农村存量建设用地调查2017",
                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/ff0df38acf953ac265b6a828bfca47c6",
                            "visible": false,
                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/2cce934beb1db0964729c4513519a026?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_cntx_cgcs_4549:xz_tdzy_2017_dcdytb_py_latest_3_0"
                        },
						{
							layerType: "GroupLayer",
							name: "TDZYDXYDZXDC",
							caption: "低效用地专项调查",
							thematicMap: true,
							subLayers: [
                                {
                                    "id": "xz_dxydzxdc_2019_dxdcdytb_py_latest_3_0",
                                    "layerName": "GCS330300G100209_DCDYTB_2019",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "低效调查单元图斑2019_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/61306868830eb47bec12adefbf0a53ca",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/2cce934beb1db0964729c4513519a026?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_cntx_cgcs_4549:xz_dxydzxdc_2019_dxdcdytb_py_latest_3_0"
                                },
                                {
                                    "id": "xz_dxydzxdc_2019_dxdcqtb_py_latest_3_0",
                                    "layerName": "GCS330300G100209_DCQTB_2019",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "低效调查区图斑2019_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/5ffe3318587416a5ea5365510b2661fd",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/2cce934beb1db0964729c4513519a026?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_cntx_cgcs_4549:xz_dxydzxdc_2019_dxdcqtb_py_latest_3_0"
                                },
                                {
                                    "id": "xz_dxydzxdc_2020_dxdcdytb_py_latest_3_0",
                                    "layerName": "GCS330300G100209_DCDYTB_2020",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "低效调查单元图斑2020_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/0185866493ad74655e7101c9f383489c",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/2cce934beb1db0964729c4513519a026?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_cntx_cgcs_4549:xz_dxydzxdc_2020_dxdcdytb_py_latest_3_0"
                                },
                                {
                                    "id": "xz_dxydzxdc_2020_dxdcqtb_py_latest_3_0",
                                    "layerName": "GCS330300G100209_DCQTB_2020",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "低效调查区图斑2020_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/d12840716f748f069f06aa60ff5311e5",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/2cce934beb1db0964729c4513519a026?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_cntx_cgcs_4549:xz_dxydzxdc_2020_dxdcqtb_py_latest_3_0"
                                },
                                {
                                    "id": "xz_dxydzxdc_2017_dcdytb_py_latest_3_0",
                                    "layerName": "DCDYTB_2017",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "低效调查单元图斑2017",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/c8c5282446f72da9b234db26f127fcc2",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/2cce934beb1db0964729c4513519a026?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_cntx_cgcs_4549:xz_dxydzxdc_2017_dcdytb_py_latest_3_0"
                                },
                                {
                                    "id": "xz_dxydzxdc_2017_dcqtb_py_latest_3_0",
                                    "layerName": "DCQTB_2017",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "低效调查区图斑2017",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/d7b5e176cf4b6912262bfe1bc20c64d4",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/2cce934beb1db0964729c4513519a026?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_cntx_cgcs_4549:xz_dxydzxdc_2017_dcqtb_py_latest_3_0"
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
                                    "id": "xz_tdzy_2017_gbzjbnt_py_latest_3_0",
                                    "layerName": "GBZJBNT_2017",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "高标准基本农田2017",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/866929a84b6fb33d0210225ce80b3ebc",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/2cce934beb1db0964729c4513519a026?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_cntx_cgcs_4549:xz_tdzy_2017_gbzjbnt_py_latest_3_0"
                                },
                                {
                                    "id": "xz_tdzy_2016_yjjbnt_py_latest_3_0",
                                    "layerName": "YJJBNT_2016",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "永久基本农田2016",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/735f98103d0f5397470d230e47b437dc",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/2cce934beb1db0964729c4513519a026?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_cntx_cgcs_4549:xz_tdzy_2016_yjjbnt_py_latest_3_0"
                                },
                                {
                                    "id": "xz_yjjbnt_2016_gbzjbnt_py_latest_3_0",
                                    "layerName": "GBZJBNT_2016",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "高标准基本农田2016",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/94f3d1cc261279afadf562caf1bac1bb",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/2cce934beb1db0964729c4513519a026?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_cntx_cgcs_4549:xz_yjjbnt_2016_gbzjbnt_py_latest_3_0"
                                },
                                {
                                    "id": "xz_tdlyztgh_2016_ghjbnttz_py_latest_3_0",
                                    "layerName": "GHJBNTTZ_2016",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "规划基本农田调整2016",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/ca32711ae8ed8dbff5f8f2169f6b0c88",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/2cce934beb1db0964729c4513519a026?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_cntx_cgcs_4549:xz_tdlyztgh_2016_ghjbnttz_py_latest_3_0"
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
                                    "id": "xz_tdpj_2017_hbtc_py_latest_3_0",
                                    "layerName": "HBTC_2017",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "耕地后备资源2017",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/58a31d57e6c5b61dd39a44fafa8a9f1c",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/2cce934beb1db0964729c4513519a026?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_cntx_cgcs_4549:xz_tdpj_2017_hbtc_py_latest_3_0"
                                },
                                {
                                    "id": "xz_gdzldbndgx_2017_xjfddy_py_latest_3_0",
                                    "layerName": "XJFDDY_2017",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "县级分等单元2017",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/9f7aa7e71cfe8de2b17018e19c26584c",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/2cce934beb1db0964729c4513519a026?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_cntx_cgcs_4549:xz_gdzldbndgx_2017_xjfddy_py_latest_3_0"
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
                                    name: "TDLYXZSJ2009",
                                    caption: "2009",
                                    thematicMap: true,
                                    
                                    subLayers: [
                                        {
                                            "id": "xz_decqgtddc_2009_dltb_py_latest_3_0",
                                            "layerName": "TDLYXZ_DLTB_2009",
                                            "layerType": "VectorTileSuperMapRest",
                                            "caption": "地类图斑2009",
                                            "mapUrl": "http://10.36.128.48:8090/iserver/services/map-mvt-TDLYXZDLTB2009/restjsr/v1/vectortile/maps/TDLYXZ_DLTB_2009/style.json",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/2cce934beb1db0964729c4513519a026?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_cntx_cgcs_4549:xz_decqgtddc_2009_dltb_py_latest_3_0",
                                            "addtoken":false,
                                            "minZoom":8,
                                        }
                                    ]
                                },
                                {
                                    layerType: "GroupLayer",
                                    name: "TDLYXZSJ2010",
                                    caption: "2010",
                                    thematicMap: true,
                                    
                                    subLayers: [
                                        {
                                            "id": "xz_tdbg_2010_dljx_ln_latest_3_0",
                                            "layerName": "TDLYXZ_DLJX_2010",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "地类界线2010",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/d2252a97a78ac97029abf7eeabc323f2",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/2cce934beb1db0964729c4513519a026?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_cntx_cgcs_4549:xz_tdbg_2010_dljx_ln_latest_3_0"
                                        },
                                        {
                                            "id": "xz_tdbg_2010_dltb_py_latest_3_0",
                                            "layerName": "TDLYXZ_DLTB_2010",
                                            "layerType": "VectorTileSuperMapRest",
                                            "caption": "地类图斑2010",
                                            "mapUrl": "http://10.36.128.48:8090/iserver/services/map-mvt-TDLYXZDLTB2010/restjsr/v1/vectortile/maps/TDLYXZ_DLTB_2010/style.json",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/2cce934beb1db0964729c4513519a026?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_cntx_cgcs_4549:xz_tdbg_2010_dltb_py_latest_3_0",
                                            "minZoom":8,
                                            
                                            
                                        },
                                        {
                                            "id": "xz_tdbg_2010_lxdw_pt_latest_3_0",
                                            "layerName": "TDLYXZ_LXDW_2010",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "零星地物2010",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/10a8d87c8faa1611cd549ae4962df94d",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/2cce934beb1db0964729c4513519a026?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_cntx_cgcs_4549:xz_tdbg_2010_lxdw_pt_latest_3_0"
                                        },
                                        {
                                            "id": "xz_tdbg_2010_xzdw_ln_latest_3_0",
                                            "layerName": "TDLYXZ_XZDW_2010",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "线状地物2010",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/92041267a41db30466318a8717bc00ac",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/2cce934beb1db0964729c4513519a026?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_cntx_cgcs_4549:xz_tdbg_2010_xzdw_ln_latest_3_0"
                                        }
                                    ]
                                },
                                {
                                    layerType: "GroupLayer",
                                    name: "TDLYXZSJ2011",
                                    caption: "2011",
                                    thematicMap: true,
                                    
                                    subLayers: [
                                        {
                                            "id": "xz_tdbg_2011_dljx_ln_latest_3_0",
                                            "layerName": "TDLYXZ_DLJX_2011",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "地类界线2011",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/af74b5976c059f723a8cd7a492292b6d",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/2cce934beb1db0964729c4513519a026?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_cntx_cgcs_4549:xz_tdbg_2011_dljx_ln_latest_3_0"
                                        },
                                        {
                                            "id": "xz_tdbg_2011_dltb_py_latest_3_0",
                                            "layerName": "TDLYXZ_DLTB_2011",
                                            "layerType": "VectorTileSuperMapRest",
                                            "caption": "地类图斑2011",
                                            "mapUrl": "http://10.36.128.48:8090/iserver/services/map-mvt-TDLYXZDLTB2011/restjsr/v1/vectortile/maps/TDLYXZ_DLTB_2011/style.json",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/2cce934beb1db0964729c4513519a026?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_cntx_cgcs_4549:xz_tdbg_2011_dltb_py_latest_3_0",
                                            "addtoken":false,
                                            "minZoom":8,
                                            
                                            
                                        },
                                        {
                                            "id": "xz_tdbg_2011_lxdw_pt_latest_3_0",
                                            "layerName": "TDLYXZ_LXDW_2011",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "零星地物2011",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/9c015dba2810c5ea3875701ba3f0affb",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/2cce934beb1db0964729c4513519a026?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_cntx_cgcs_4549:xz_tdbg_2011_lxdw_pt_latest_3_0"
                                        },
                                        {
                                            "id": "xz_tdbg_2011_xzdw_ln_latest_3_0",
                                            "layerName": "TDLYXZ_XZDW_2011",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "线状地物2011",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/b06a23dfc6f3837c4bbc02946c44e204",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/2cce934beb1db0964729c4513519a026?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_cntx_cgcs_4549:xz_tdbg_2011_xzdw_ln_latest_3_0"
                                        }
                                    ]
                                },
                               {
                                    layerType: "GroupLayer",
                                    name: "TDLYXZSJ2012",
                                    caption: "2012",
                                    thematicMap: true,
                                    
                                    subLayers: [
                                        {
                                            "id": "xz_tdbg_2012_dljx_ln_latest_3_0",
                                            "layerName": "TDLYXZ_DLJX_2012",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "地类界线2012",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/c0de8fffabf362957deb295ec414d56e",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/2cce934beb1db0964729c4513519a026?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_cntx_cgcs_4549:xz_tdbg_2012_dljx_ln_latest_3_0"
                                        },
                                        {
                                            "id": "xz_tdbg_2012_dltb_py_latest_3_0",
                                            "layerName": "TDLYXZ_DLTB_2012",
                                            "layerType": "VectorTileSuperMapRest",
                                            "caption": "地类图斑2012",
                                            "mapUrl": "http://10.36.128.48:8090/iserver/services/map-mvt-TDLYXZDLTB2012/restjsr/v1/vectortile/maps/TDLYXZ_DLTB_2012/style.json",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/2cce934beb1db0964729c4513519a026?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_cntx_cgcs_4549:xz_tdbg_2012_dltb_py_latest_3_0",
                                            "addtoken":false,
                                            "minZoom":8,
                                            
                                            
                                        },
                                        {
                                            "id": "xz_tdbg_2012_lxdw_pt_latest_3_0",
                                            "layerName": "TDLYXZ_LXDW_2012",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "零星地物2012",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/a6196a0d1efb3773d05897dd436c8e8a",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/2cce934beb1db0964729c4513519a026?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_cntx_cgcs_4549:xz_tdbg_2012_lxdw_pt_latest_3_0"
                                        },
                                        {
                                            "id": "xz_tdbg_2012_xzdw_ln_latest_3_0",
                                            "layerName": "TDLYXZ_XZDW_2012",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "线状地物2012",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/e6c5db8e2c75a95a8a174daf4f18cd75",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/2cce934beb1db0964729c4513519a026?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_cntx_cgcs_4549:xz_tdbg_2012_xzdw_ln_latest_3_0"
                                        }
                                    ]
                               },
                               {
                                    layerType: "GroupLayer",
                                    name: "TDLYXZSJ2013",
                                    caption: "2013",
                                    thematicMap: true,
                                    
                                    subLayers:[
                                        {
                                            "id": "xz_tdbg_2013_dljx_ln_latest_3_0",
                                            "layerName": "TDLYXZ_DLJX_2013",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "地类界线2013",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/bd5c3b23459b5791159364a939558347",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/2cce934beb1db0964729c4513519a026?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_cntx_cgcs_4549:xz_tdbg_2013_dljx_ln_latest_3_0"
                                        },
                                        {
                                            "id": "xz_tdbg_2013_dltb_py_latest_3_0",
                                            "layerName": "TDLYXZ_DLTB_2013",
                                            "layerType": "VectorTileSuperMapRest",
                                            "caption": "地类图斑2013",
                                            "mapUrl": "http://10.36.128.48:8090/iserver/services/map-mvt-TDLYXZDLTB2013/restjsr/v1/vectortile/maps/TDLYXZ_DLTB_2013/style.json",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/2cce934beb1db0964729c4513519a026?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_cntx_cgcs_4549:xz_tdbg_2013_dltb_py_latest_3_0",
                                            "addtoken":false,
                                            "minZoom":8,
                                            
                                            
                                        },
                                        {
                                            "id": "xz_tdbg_2013_lxdw_pt_latest_3_0",
                                            "layerName": "TDLYXZ_LXDW_2013",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "零星地物2013",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/a84fa264126dfb91a4f0126743f90d1b",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/2cce934beb1db0964729c4513519a026?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_cntx_cgcs_4549:xz_tdbg_2013_lxdw_pt_latest_3_0"
                                        },
                                        {
                                            "id": "xz_tdbg_2013_xzdw_ln_latest_3_0",
                                            "layerName": "TDLYXZ_XZDW_2013",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "线状地物2013",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/7257fe47866213214b901ba3e35e0162",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/2cce934beb1db0964729c4513519a026?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_cntx_cgcs_4549:xz_tdbg_2013_xzdw_ln_latest_3_0"
                                        }
                                    ]
                                },
                                {
                                    layerType: "GroupLayer",
                                    name: "TDLYXZSJ2014",
                                    caption: "2014",
                                    thematicMap: true,
                                    
                                    subLayers:[
                                        {
                                            "id": "xz_tdbg_2014_dljx_ln_latest_3_0",
                                            "layerName": "TDLYXZ_DLJX_2014",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "地类界线2014",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/85aabc1caf335848483e5a8b3c15ccd8",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/2cce934beb1db0964729c4513519a026?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_cntx_cgcs_4549:xz_tdbg_2014_dljx_ln_latest_3_0"
                                        },
                                        {
                                            "id": "xz_tdbg_2014_dltb_py_latest_3_0",
                                            "layerName": "TDLYXZ_DLTB_2014",
                                            "layerType": "VectorTileSuperMapRest",
                                            "caption": "地类图斑2014",
                                            "mapUrl": "http://10.36.128.48:8090/iserver/services/map-mvt-TDLYXZDLTB2014/restjsr/v1/vectortile/maps/TDLYXZ_DLTB_2014/style.json",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/2cce934beb1db0964729c4513519a026?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_cntx_cgcs_4549:xz_tdbg_2014_dltb_py_latest_3_0",
                                            "addtoken":false,
                                            "minZoom":8,
                                            
                                            
                                        },
                                        {
                                            "id": "xz_tdbg_2014_lxdw_pt_latest_3_0",
                                            "layerName": "TDLYXZ_LXDW_2014",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "零星地物2014",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/1320e24e108fdfc99ad9cf39e894c6b3",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/2cce934beb1db0964729c4513519a026?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_cntx_cgcs_4549:xz_tdbg_2014_lxdw_pt_latest_3_0"
                                        },
                                        {
                                            "id": "xz_tdbg_2014_xzdw_ln_latest_3_0",
                                            "layerName": "TDLYXZ_XZDW_2014",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "线状地物2014",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/21d280fc17170735ba1cadab9a6b02e7",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/2cce934beb1db0964729c4513519a026?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_cntx_cgcs_4549:xz_tdbg_2014_xzdw_ln_latest_3_0"
                                        }
                                    ]
                                },
                                {
                                    layerType: "GroupLayer",
                                    name: "TDLYXZSJ2015",
                                    caption: "2015",
                                    thematicMap: true,
                                    
                                    subLayers:[
     
                                
                                        {
                                            "id": "xz_tdbg_2015_dljx_ln_latest_3_0",
                                            "layerName": "TDLYXZ_DLJX_2015",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "地类界线2015",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/5fd4cc310f9614f3ba714ad1c9e2ef03",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/2cce934beb1db0964729c4513519a026?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_cntx_cgcs_4549:xz_tdbg_2015_dljx_ln_latest_3_0"
                                        },
                                        {
                                            "id": "xz_tdbg_2015_dltb_py_latest_3_0",
                                            "layerName": "TDLYXZ_DLTB_2015",
                                            "layerType": "VectorTileSuperMapRest",
                                            "caption": "地类图斑2015",
                                            "mapUrl": "http://10.36.128.48:8090/iserver/services/map-mvt-TDLYXZDLTB2015/restjsr/v1/vectortile/maps/TDLYXZ_DLTB_2015/style.json",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/2cce934beb1db0964729c4513519a026?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_cntx_cgcs_4549:xz_tdbg_2015_dltb_py_latest_3_0",
                                            "addtoken":false,
                                            "minZoom":8,
                                            
                                            
                                        },
                                        {
                                            "id": "xz_tdbg_2015_lxdw_pt_latest_3_0",
                                            "layerName": "TDLYXZ_LXDW_2015",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "零星地物2015",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/ea7ff539f307dc469baf53736a922d91",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/2cce934beb1db0964729c4513519a026?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_cntx_cgcs_4549:xz_tdbg_2015_lxdw_pt_latest_3_0"
                                        },
                                        {
                                            "id": "xz_tdbg_2015_xzdw_ln_latest_3_0",
                                            "layerName": "TDLYXZ_XZDW_2015",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "线状地物2015",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/d753cebe32793a168c2e45ecb487eb04",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/2cce934beb1db0964729c4513519a026?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_cntx_cgcs_4549:xz_tdbg_2015_xzdw_ln_latest_3_0"
                                        }
                                    ]
                                },
                                {
                                    layerType: "GroupLayer",
                                    name: "TDLYXZSJ2016",
                                    caption: "2016",
                                    thematicMap: true,
                                    
                                    subLayers:[

                                        {
                                            "id": "xz_tdbg_2016_dljx_ln_latest_3_0",
                                            "layerName": "TDLYXZ_DLJX_2016",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "地类界线2016",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/fb48ace03b8383804f7033daac9f469b",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/2cce934beb1db0964729c4513519a026?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_cntx_cgcs_4549:xz_tdbg_2016_dljx_ln_latest_3_0"
                                        },
                                        {
                                            "id": "xz_tdbg_2016_dltb_py_latest_3_0",
                                            "layerName": "TDLYXZ_DLTB_2016",
                                            "layerType": "VectorTileSuperMapRest",
                                            "caption": "地类图斑2016",
                                            "mapUrl": "http://10.36.128.48:8090/iserver/services/map-mvt-TDLYXZDLTB2016/restjsr/v1/vectortile/maps/TDLYXZ_DLTB_2016/style.json",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/2cce934beb1db0964729c4513519a026?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_cntx_cgcs_4549:xz_tdbg_2016_dltb_py_latest_3_0",
                                            "addtoken":false,
                                            "minZoom":8,
                                            
                                            
                                        },
                                        {
                                            "id": "xz_tdbg_2016_lxdw_pt_latest_3_0",
                                            "layerName": "TDLYXZ_LXDW_2016",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "零星地物2016",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/20bc48832189d61cc86927bccfe497ce",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/2cce934beb1db0964729c4513519a026?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_cntx_cgcs_4549:xz_tdbg_2016_lxdw_pt_latest_3_0"
                                        },
                                        {
                                            "id": "xz_tdbg_2016_xzdw_ln_latest_3_0",
                                            "layerName": "TDLYXZ_XZDW_2016",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "线状地物2016",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/451db7769c3ebdf806d987092a6e5f1d",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/2cce934beb1db0964729c4513519a026?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_cntx_cgcs_4549:xz_tdbg_2016_xzdw_ln_latest_3_0"
                                        }
                                    ]
                                },
                                {
                                    layerType: "GroupLayer",
                                    name: "TDLYXZSJ2017",
                                    caption: "2017",
                                    thematicMap: true,
                                    
                                    subLayers:[
                                        {
                                            "id": "xz_tdbg_2017_dljx_ln_latest_3_0",
                                            "layerName": "TDLYXZ_DLJX_2017",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "地类界线2017",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/163f201ecc21ecb1eb8a6bf6da16bb8b",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/2cce934beb1db0964729c4513519a026?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_cntx_cgcs_4549:xz_tdbg_2017_dljx_ln_latest_3_0"
                                        },
                                        {
                                            "id": "xz_tdbg_2017_dltb_py_latest_3_0",
                                            "layerName": "TDLYXZ_DLTB_2017",
                                            "layerType": "VectorTileSuperMapRest",
                                            "caption": "地类图斑2017",
                                            "mapUrl": "http://10.36.128.48:8090/iserver/services/map-mvt-TDLYXZDLTB2017/restjsr/v1/vectortile/maps/TDLYXZ_DLTB_2017/style.json",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/2cce934beb1db0964729c4513519a026?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_cntx_cgcs_4549:xz_tdbg_2017_dltb_py_latest_3_0",
                                            "addtoken":false,
                                            "minZoom":8,
                                            
                                            
                                        },
                                        {
                                            "id": "xz_tdbg_2017_lxdw_pt_latest_3_0",
                                            "layerName": "TDLYXZ_LXDW_2017",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "零星地物2017",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/132da88eca28b9f0276b2f8c3de0814c",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/2cce934beb1db0964729c4513519a026?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_cntx_cgcs_4549:xz_tdbg_2017_lxdw_pt_latest_3_0"
                                        },
                                        {
                                            "id": "xz_tdbg_2017_xzdw_ln_latest_3_0",
                                            "layerName": "TDLYXZ_XZDW_2017",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "线状地物2017",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/e75ea4e8be9f6f17b671e33a0f97f57d",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/2cce934beb1db0964729c4513519a026?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_cntx_cgcs_4549:xz_tdbg_2017_xzdw_ln_latest_3_0"
                                        }
                                    ]
                                }
                               
                           
                               
                            ]
                        },
                        {
							layerType: "GroupLayer",
							name: "GYYDDC",
							caption: "工业用地调查",
							thematicMap: true,
                            subLayers:[
                                {
                                    "id": "gl_gygddc_gyyd_py_latest_3_0",
                                    "layerName": "GL_GYGDDC_GYYD_PY",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "工业用地_离线",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/be4e3525d7b26a33c18e9cc00554f42a",
                                    "visible": false,
                                    "queryUrl": "http://http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/2cce934beb1db0964729c4513519a026?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_cntx_cgcs_4549:gl_gygddc_gyyd_py_latest_3_0"
                                },
                                {
                                    "id": "gl_gygddc_kfqfw_py_latest_3_0",
                                    "layerName": "GL_GYGDDC_KFQFW_PY",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "开发区范围_离线",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/f13842dab4bb4254f84d07a749ff74dd",
                                    "visible": false,
                                    "queryUrl": "http://http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/2cce934beb1db0964729c4513519a026?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_cntx_cgcs_4549:gl_gygddc_kfqfw_py_latest_3_0"
                                },

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
                            "layerName": "GCS330300G1001_XJELCSLZY_20",
                            "layerType": "SuperMapWMTS",
                            "caption": "县级二级调查森林资源_省级下发",
                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/864e5fe48e8ae5c55620fefa264c0583",
                            "visible": false,
                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/2cce934beb1db0964729c4513519a026?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_cntx_cgcs_4549:xz_slzy_xjejdcslzy_py_latest_3_0"
                        },
                        {
                            "id": "xz_slzy_2018_slzyfbt_py_latest_3_0",
                            "layerName": "SLZYFBT_2018",
                            "layerType": "SuperMapWMTS",
                            "caption": "森林资源分布图2018",
                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/57f2b54da33aed49a88ff0b1defc04ef",
                            "visible": false,
                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/2cce934beb1db0964729c4513519a026?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_cntx_cgcs_4549:xz_slzy_2018_slzyfbt_py_latest_3_0"
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
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/92d4f6b3b29e09f8241e25f660e88008",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/2cce934beb1db0964729c4513519a026?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_cntx_cgcs_4549:xz_slzy_2018_gjjgyl_py_latest_3_0"
                                },
                                {
                                    "id": "xz_slzy_2018_sjstgyl_py_latest_3_0",
                                    "layerName": "GCS330300G100401_SJSTGYL_2018",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "省级生态公益林2018_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/22f441d2fe0c0f2a5ede2a081f6441c9",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/2cce934beb1db0964729c4513519a026?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_cntx_cgcs_4549:xz_slzy_2018_sjstgyl_py_latest_3_0"
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
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/416e285107cc366c9904a4177a5ccfeb",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/2cce934beb1db0964729c4513519a026?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_cntx_cgcs_4549:xz_slzy_2018_sydbhq_py_latest_3_0"
                                },
                                {
                                    "id": "xz_slzy_2020_zrbhd_py_latest_3_0",
                                    "layerName": "GCS330300G1099_ZRBHD_2020",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "自然保护地2020_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/abe2569f235ca26472531d1d20b08ded",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/2cce934beb1db0964729c4513519a026?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_cntx_cgcs_4549:xz_slzy_2020_zrbhd_py_latest_3_0"
                                },
                            ]
                        },
                        {
                            layerType: "GroupLayer",
                            name: "GYLC",
                            caption: "国有林场",
                            thematicMap: true,
                            subLayers: [
                                {
                                    "id": "xz_slzy_2021_fjqtzhbj_py_latest_3_0",
                                    "layerName": "XZ_SLZY_2021_FJQTZHBJ_PY",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "风景区调整后边界20210526_离线",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/2d0901ccfc6413af4b8580e9014830d9",
                                    "visible": false,
                                    "queryUrl": "http://http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/2cce934beb1db0964729c4513519a026?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_cntx_cgcs_4549:xz_slzy_2021_fjqtzhbj_py_latest_3_0"
                                },
                                {
                                    "id": "xz_slzy_2020_cnxxwzy_py_latest_3_0",
                                    "layerName": "XZ_SLZY_2020_CNXXWZY_PY",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "纤维资源2020_离线",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/77a667db39b5fcaf81f31be9c62aefed",
                                    "visible": false,
                                    "queryUrl": "http://http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/2cce934beb1db0964729c4513519a026?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_cntx_cgcs_4549:xz_slzy_2020_cnxxwzy_py_latest_3_0"
                                },
                                {
                                    "id": "xz_slzy_lc_py_latest_3_0",
                                    "layerName": "XZ_SLZY_LC_PY",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "林场_离线",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/c1d6a66214eef3a4ca899245c6ef8042",
                                    "visible": false,
                                    "queryUrl": "http://http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/2cce934beb1db0964729c4513519a026?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_cntx_cgcs_4549:xz_slzy_lc_py_latest_3_0"
                                },
                                {
                                    "id": "xz_slzy_2021_cnxlcjyjx_py_latest_3_0",
                                    "layerName": "XZ_SLZY_2021_CNXLCJYJX_PY",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "林场_经营界线数据库_2021_离线",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/17748ea2fdee9cc7a8fd0ee2174b6986",
                                    "visible": false,
                                    "queryUrl": "http://http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/2cce934beb1db0964729c4513519a026?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_cntx_cgcs_4549:xz_slzy_2021_cnxlcjyjx_py_latest_3_0"
                                },
                                {
                                    "id": "xz_slzy_2021_cnxlcqqfw_py_latest_3_0",
                                    "layerName": "XZ_SLZY_2021_CNXLCQQFW_PY",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "林场_确权范围数据库_2021_离线",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/61ee9351d1193cdd1a3d63e3c587d019",
                                    "visible": false,
                                    "queryUrl": "http://http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/2cce934beb1db0964729c4513519a026?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_cntx_cgcs_4549:xz_slzy_2021_cnxlcqqfw_py_latest_3_0"
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
                            subLayers:[
                                {
                                    "id": "xz_sdzy_2018_gjzysd_pt_latest_3_0",
                                    "layerName": "GCS330300G100604_GJZYSD_2018",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "国家重要湿地2018_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/973010b1e493c2d0aa58be7023ce2a73",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/2cce934beb1db0964729c4513519a026?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_cntx_cgcs_4549:xz_sdzy_2018_gjzysd_pt_latest_3_0"
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
                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/082beb791ae7ce545114724235877b6a",
                            "visible": false,
                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/2cce934beb1db0964729c4513519a026?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_cntx_cgcs_4549:xz_dzsj_dzyjbhq_pt_latest_3_0"
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
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/73d50e0275608c5f38f1744b0f4dd536",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/2cce934beb1db0964729c4513519a026?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_cntx_cgcs_4549:xz_dzzh_yhd_pt_latest_3_0"
                                },
                                {
                                    "id": "xz_dzzh_zqd_pt_latest_3_0",
                                    "layerName": "GCS330300K3005_ZXQD_ZQD_X",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "灾情点_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/487b63c633228f9257ba3db35e20dbe1",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/2cce934beb1db0964729c4513519a026?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_cntx_cgcs_4549:xz_dzzh_zqd_pt_latest_3_0"
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
                                    "id": "xz_dzzh_2017_yhd_pt_latest_3_0",
                                    "layerName": "YHD_2017",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "隐患点2017",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/b82c7340a4fb19d742deb39d853fa76c",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/2cce934beb1db0964729c4513519a026?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_cntx_cgcs_4549:xz_dzzh_2017_yhd_pt_latest_3_0"
                                },
                            ]
                        }
                    ]
                },
                // 海洋资源
                {
                    layerType: "GroupLayer",
					name: "HYZY",
					caption: "海洋资源",
					thematicMap: true,
					subLayers: [
                        {
                            layerType: "GroupLayer",
                            name: "HAXTJ",
                            caption: "海岸线调查",
                            thematicMap: true,
                            subLayers: [
                                {
                                    "id": "xz_hyzy_2021_cndlax_ln_latest_3_0",
                                    "layerName": "XZ_HYZY_2021_CNDLAX_LN",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "苍南大陆岸线202106_离线",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/904a55790eece9df7ea0fe1b907e8fee",
                                    "visible": false,
                                    "queryUrl": "http://http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/2cce934beb1db0964729c4513519a026?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_cntx_cgcs_4549:xz_hyzy_2021_cndlax_ln_latest_3_0"
                                },
                            ]
                        },
                        {
                            layerType: "GroupLayer",
                            name: "WJMHDDC",
                            caption: "无居民海岛调查",
                            thematicMap: true,
                            subLayers: [
                                {
                                    "id": "xz_hyzy_cn2gyjmhdaxfz_ln_latest_3_0",
                                    "layerName": "XZ_HYZY_CN2GYJMHDAXFZ_LN",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "苍南2个有居民海岛岸线复制_离线",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/44e64be09c98bbb8d6f12f8d080222e1",
                                    "visible": false,
                                    "queryUrl": "http://http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/2cce934beb1db0964729c4513519a026?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_cntx_cgcs_4549:xz_hyzy_cn2gyjmhdaxfz_ln_latest_3_0"
                                },
                                {
                                    "id": "xz_hyzy_cnwjmhdaxfz_ln_latest_3_0",
                                    "layerName": "XZ_HYZY_CNWJMHDAXFZ_LN",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "苍南无居民海岛岸线复制_离线",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/2b9dbdadddbe560613fa26a7d27f133d",
                                    "visible": false,
                                    "queryUrl": "http://http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/2cce934beb1db0964729c4513519a026?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_cntx_cgcs_4549:xz_hyzy_cnwjmhdaxfz_ln_latest_3_0"
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
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/a5b699eb5643e995b2a00cc0f5c68c6c",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/2cce934beb1db0964729c4513519a026?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_cntx_cgcs_4549:gh_zykzx_2018_stbhhx_py_latest_3_0"
                                },
                                {
                                    "id": "gh_zykzx_2020_yjjbntbhhx_py_latest_3_0",
                                    "layerName": "GCS330300G200105_YJJBNTHX_2020",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "永久基本农田保护红线2020_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/834ef408c11b09119965ea0d1ee8e4c2",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/2cce934beb1db0964729c4513519a026?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_cntx_cgcs_4549:gh_zykzx_2020_yjjbntbhhx_py_latest_3_0"
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
                            name: "TDLYZTGH",
                            caption: "土地利用总体规划",
                            thematicMap: true,
                            subLayers: [
                                
                                {
                                    "id": "gh_tdlyztgh_2017_jsydgzq_py_latest_3_0",
                                    "layerName": "GCS330300G200201_JSYDGZQ_2017",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "建设用地管制区2017_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/502b359431ed12fe03e644afb3ec16dd",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/2cce934beb1db0964729c4513519a026?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_cntx_cgcs_4549:gh_tdlyztgh_2017_jsydgzq_py_latest_3_0"
                                },
                                {
                                    "id": "gh_tdlyztgh_2020_jsydgzq_py_latest_3_0",
                                    "layerName": "GCS330300G200201_JSYDGZQ_2020",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "建设用地管制区2020_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/8a16f9dccf7c374f8c019c2e9d7dee3a",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/2cce934beb1db0964729c4513519a026?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_cntx_cgcs_4549:gh_tdlyztgh_2020_jsydgzq_py_latest_3_0"
                                },
                                {
                                    "id": "xz_tdlyztgh_2011_ghyt_py_latest_3_0",
                                    "layerName": "TDLYGH_GHYT_2011",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "规划用途2011",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/52947df286a6e2346c938811d7823558",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/2cce934beb1db0964729c4513519a026?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_cntx_cgcs_4549:xz_tdlyztgh_2011_ghyt_py_latest_3_0"
                                },
                                {
                                    "id": "xz_tdlyztgh_2011_jsydgzbj_py_latest_3_0",
                                    "layerName": "TDLYGH_JSYDGZQBJ_2011",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "建设用地管制边界2011",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/3106690f43660fcc2d95d31aa5cecd48",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/2cce934beb1db0964729c4513519a026?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_cntx_cgcs_4549:xz_tdlyztgh_2011_jsydgzbj_py_latest_3_0"
                                },
                                {
                                    "id": "xz_tdlyztgh_2011_jsydgzq_ln_latest_3_0",
                                    "layerName": "TDLYGH_JSYDGZQ_2011",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "建设用地管制区2011",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/156680cddaa5e92d977dc695abc83334",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/2cce934beb1db0964729c4513519a026?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_cntx_cgcs_4549:xz_tdlyztgh_2011_jsydgzq_ln_latest_3_0"
                                },
                                {
                                    "id": "xz_tdlyztgh_2011_jszh_py_latest_3_0",
                                    "layerName": "JSZH_2011",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "建设整合2011",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/b4460a7d521a055a93b59fe33cdfa3eb",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/2cce934beb1db0964729c4513519a026?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_cntx_cgcs_4549:xz_tdlyztgh_2011_jszh_py_latest_3_0"
                                },
                                {
                                    "id": "xz_tdlyztgh_2011_tdghdl_py_latest_3_0",
                                    "layerName": "TDLYGH_TDGHDL_2011",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "土地规划地类2011",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/2efae547a272ee92c5d630813546f125",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/2cce934beb1db0964729c4513519a026?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_cntx_cgcs_4549:xz_tdlyztgh_2011_tdghdl_py_latest_3_0"
                                },
                                {
                                    "id": "xz_tdlyztgh_2012_ghyt_py_latest_3_0",
                                    "layerName": "TDLYGH_GHYT_2012",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "规划用途2012",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/188bb35eac78e589734a38b8c535b6fa",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/2cce934beb1db0964729c4513519a026?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_cntx_cgcs_4549:xz_tdlyztgh_2012_ghyt_py_latest_3_0"
                                },
                                {
                                    "id": "xz_tdlyztgh_2012_jsydgzbj_ln_latest_3_0",
                                    "layerName": "TDLYGH_JSYDGZQBJ_2012",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "建设用地管制边界2012",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/926183f89feab8fb33706a1a9b673a62",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/2cce934beb1db0964729c4513519a026?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_cntx_cgcs_4549:xz_tdlyztgh_2012_jsydgzbj_ln_latest_3_0"
                                },
                                {
                                    "id": "xz_tdlyztgh_2012_jsydgzq_py_latest_3_0",
                                    "layerName": "TDLYGH_JSYDGZQ_2012",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "建设用地管制区2012",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/b1cd739180d1a1a049d2836fc17aff96",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/2cce934beb1db0964729c4513519a026?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_cntx_cgcs_4549:xz_tdlyztgh_2012_jsydgzq_py_latest_3_0"
                                },
                                {
                                    "id": "xz_tdlyztgh_2012_jszh_py_latest_3_0",
                                    "layerName": "JSZH_2012",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "建设整合2012",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/a791ad089cbc175a80f7bfc122e04b00",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/2cce934beb1db0964729c4513519a026?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_cntx_cgcs_4549:xz_tdlyztgh_2012_jszh_py_latest_3_0"
                                },
                                {
                                    "id": "xz_tdlyztgh_2012_tdghdl_py_latest_3_0",
                                    "layerName": "TDLYGH_TDGHDL_2012",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "土地规划地类2012",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/7147ce36d64dd5fa9c48106a4a827350",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/2cce934beb1db0964729c4513519a026?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_cntx_cgcs_4549:xz_tdlyztgh_2012_tdghdl_py_latest_3_0"
                                },
                                {
                                    "id": "xz_tdlyztgh_2016_ghyt_py_latest_3_0",
                                    "layerName": "TDLYGH_GHYT_2016",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "规划用途2016",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/7a6710ec1b51453754f67b08375326c9",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/2cce934beb1db0964729c4513519a026?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_cntx_cgcs_4549:xz_tdlyztgh_2016_ghyt_py_latest_3_0"
                                },
                                {
                                    "id": "xz_yjjbnt_2016_jbntbhq_py_latest_3_0",
                                    "layerName": "JBNT_JBNTBHQ_2016",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "基本农田保护区2016",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/551f71bac6cdda98ce745ae57a551230",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/2cce934beb1db0964729c4513519a026?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_cntx_cgcs_4549:xz_yjjbnt_2016_jbntbhq_py_latest_3_0"
                                },
                                {
                                    "id": "xz_yjjbnt_2016_jbntsfq_py_latest_3_0",
                                    "layerName": "JBNTSFQ_2016",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "基本农田示范区2016",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/c529c68f6ea99648e71b6989411525d9",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/2cce934beb1db0964729c4513519a026?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_cntx_cgcs_4549:xz_yjjbnt_2016_jbntsfq_py_latest_3_0"
                                },
                                {
                                    "id": "xz_tdlyztgh_2016_jqdljx_ln_latest_3_0",
                                    "layerName": "TDLYXZ_JQDLJX_2016",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "基期地类界线2016",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/b7e3b1a13e001b500f0fedff13caf1ec",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/2cce934beb1db0964729c4513519a026?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_cntx_cgcs_4549:xz_tdlyztgh_2016_jqdljx_ln_latest_3_0"
                                },
                                {
                                    "id": "xz_tdlyztgh_2016_jqdltb_py_latest_3_0",
                                    "layerName": "TDLYXZ_JQDLTB_2016",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "基期地类图斑2016",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/7e292b533ab4ce6e2afadbbcfe4b3801",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/2cce934beb1db0964729c4513519a026?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_cntx_cgcs_4549:xz_tdlyztgh_2016_jqdltb_py_latest_3_0"
                                },
                                {
                                    "id": "xz_tdlyztgh_2016_jqlxdw_pt_latest_3_0",
                                    "layerName": "TDLYXZ_JQLXDW_2016",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "基期零星地物2016",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/f01ea820b72686ad46ede8615b67c5d6",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/2cce934beb1db0964729c4513519a026?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_cntx_cgcs_4549:xz_tdlyztgh_2016_jqlxdw_pt_latest_3_0"
                                },
                                {
                                    "id": "xz_tdlyztgh_2016_jqxzdw_ln_latest_3_0",
                                    "layerName": "TDLYXZ_JQXZDW_2016",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "基期线状地物2016",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/177655bf100c673d4c5a6f13ad848d31",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/2cce934beb1db0964729c4513519a026?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_cntx_cgcs_4549:xz_tdlyztgh_2016_jqxzdw_ln_latest_3_0"
                                },
                                {
                                    "id": "xz_tdlyztgh_2016_jsydgzbj_ln_latest_3_0",
                                    "layerName": "TDLYGH_JSYDGZQBJ_2016",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "建设用地管制边界2016",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/59e86bfcc0ceb80343bfbfe308d3fcf4",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/2cce934beb1db0964729c4513519a026?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_cntx_cgcs_4549:xz_tdlyztgh_2016_jsydgzbj_ln_latest_3_0"
                                },
                                {
                                    "id": "xz_tdlyztgh_2016_jsydgzq_py_latest_3_0",
                                    "layerName": "TDLYGH_JSYDGZQ_2016",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "建设用地管制区2016",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/35a09a417701e98aec5dd5803230b1f6",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/2cce934beb1db0964729c4513519a026?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_cntx_cgcs_4549:xz_tdlyztgh_2016_jsydgzq_py_latest_3_0"
                                },
                                {
                                    "id": "xz_tdlyztgh_2016_jszh_py_latest_3_0",
                                    "layerName": "JSZH_2016",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "建设整合2016",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/7ef090768d006031bfae8a9d72b7b8eb",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/2cce934beb1db0964729c4513519a026?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_cntx_cgcs_4549:xz_tdlyztgh_2016_jszh_py_latest_3_0"
                                },
                                {
                                    "id": "xz_tdlyztgh_2016_kzbjm_py_latest_3_0",
                                    "layerName": "KZBJM_2016",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "控制边界面2016",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/78f034be46733983e2b3d849bebc75e7",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/2cce934beb1db0964729c4513519a026?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_cntx_cgcs_4549:xz_tdlyztgh_2016_kzbjm_py_latest_3_0"
                                },
                                {
                                    "id": "xz_tdlyztgh_2016_tdghdl_py_latest_3_0",
                                    "layerName": "TDLYGH_TDGHDL_2016",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "土地规划地类2016",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/502bcd3e823db5ad2b0f8e69d8169244",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/2cce934beb1db0964729c4513519a026?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_cntx_cgcs_4549:xz_tdlyztgh_2016_tdghdl_py_latest_3_0"
                                },
                                {
                                    "id": "xz_tdlyztgh_2016_tdytq_py_latest_3_0",
                                    "layerName": "TDYTQ_2016",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "土地用途区2016",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/de89d3e2869bd488c7819bfa1a7b05cb",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/2cce934beb1db0964729c4513519a026?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_cntx_cgcs_4549:xz_tdlyztgh_2016_tdytq_py_latest_3_0"
                                },

                            ]
                        },
                        {
                            layerType: "GroupLayer",
                            name: "ZXGH",
                            caption: "专项规划",
                            thematicMap: true,
                            subLayers: [
                                {
                                    "id": "gh_zxgh_2016_kaicqk_py_latest_3_0",
                                    "layerName": "KAICQK_2016",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "矿产资源开采规划区块2016",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/5d25d8b3563e8b285e57c8bd16a2c415",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/2cce934beb1db0964729c4513519a026?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_cntx_cgcs_4549:gh_zxgh_2016_kaicqk_py_latest_3_0"
                                },
                                {
                                    "id": "gh_kczygh_2016_kaicqst_py_latest_3_0",
                                    "layerName": "KAICQST_2016",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "砂石粘土开采分区2016",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/1fa784e47f7fb5dbc4166753665f753e",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/2cce934beb1db0964729c4513519a026?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_cntx_cgcs_4549:gh_kczygh_2016_kaicqst_py_latest_3_0"
                                },
                                {
                                    "id": "gh_zxgh_2016_kaicqxz_py_latest_3_0",
                                    "layerName": "KAICQXZ_2016",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "矿产资源限制开采区2016",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/1260d462e847af657954914de92a9d8f",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/2cce934beb1db0964729c4513519a026?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_cntx_cgcs_4549:gh_zxgh_2016_kaicqxz_py_latest_3_0"
                                },
                                {
                                    "id": "gh_kczygh_2016_kszlxmdz_pt_latest_3_0",
                                    "layerName": "KSZLXMDZ_2016",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "矿山地质环境治理恢复重点项目2016",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/775ef9f0326b844ce1586bc895b61ea6",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/2cce934beb1db0964729c4513519a026?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_cntx_cgcs_4549:gh_kczygh_2016_kszlxmdz_pt_latest_3_0"
                                },
                                {
                                    "id": "gh_zxgh_2016_kaicqjz_py_latest_3_0",
                                    "layerName": "KAICQJZ_2016",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "矿产资源禁止开采区2016",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/7c882292c2f0d073e214f6412df07d09",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/2cce934beb1db0964729c4513519a026?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_cntx_cgcs_4549:gh_zxgh_2016_kaicqjz_py_latest_3_0"
                                },
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
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/36bc2c0c6485d736cd3c52e7a187d29c",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/2cce934beb1db0964729c4513519a026?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_cntx_cgcs_4549:gh_kg_ydgh_py_latest_3_0"
                                        },
                                        {
                                            "id": "gh_kg_dkfh_pt_latest_3_0",
                                            "layerName": "BKY_DKFH_PT",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "控规_地块符号",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/3ae9a50101d3a9b64c0d1944afb748b3",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/2cce934beb1db0964729c4513519a026?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_cntx_cgcs_4549:gh_kg_dkfh_pt_latest_3_0"
                                        },
                                        {
                                            "id": "gh_kg_dkbh_ap_latest_3_0",
                                            "layerName": "BKY_DKBH_AP",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "控规_地块编号",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/295840a62e5f85a4d95750c3d3c5ac43",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/2cce934beb1db0964729c4513519a026?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_cntx_cgcs_4549:gh_kg_dkbh_ap_latest_3_0"
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
                                        "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/b5216a9c69ff12309a300d076f3049b5",
                                        "visible": false,
                                        "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/2cce934beb1db0964729c4513519a026?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_cntx_cgcs_4549:gh_kg_lhlx_py_latest_3_0"
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
                                                "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/6386bb3d0f058b856c42a3adde347507",
                                                "visible": false,
                                                "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/2cce934beb1db0964729c4513519a026?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_cntx_cgcs_4549:gh_kg_sshx_py_latest_3_0"
                                            },
                                            {
                                                "id": "gh_kg_sshx_ln_latest_3_0",
                                                "layerName": "BKK_SSHX_LN",
                                                "layerType": "SuperMapWMTS",
                                                "caption": "控规_基础设施黄线",
                                                "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/ba7dbcf683a293910a78e05c96c78b0a",
                                                "visible": false,
                                                "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/2cce934beb1db0964729c4513519a026?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_cntx_cgcs_4549:gh_kg_sshx_ln_latest_3_0"
                                            },
                                        ]
                                    },
                                    {
                                        "id": "gh_kg_sxlx_ln_latest_3_0",
                                        "layerName": "BKK_SXLX_LN",
                                        "layerType": "SuperMapWMTS",
                                        "caption": "控规_水系蓝线",
                                        "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/1c593d35f93dadb2ba497badc85e1e85",
                                        "visible": false,
                                        "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/2cce934beb1db0964729c4513519a026?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_cntx_cgcs_4549:gh_kg_sxlx_ln_latest_3_0"
                                    },
                                    {
                                        "id": "gh_kg_wbzx_py_latest_3_0",
                                        "layerName": "BKK_WBZX_PY",
                                        "layerType": "SuperMapWMTS",
                                        "caption": "控规_文保紫线",
                                        "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/58d3671c19766d6dab119c826b6a67f4",
                                        "visible": false,
                                        "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/2cce934beb1db0964729c4513519a026?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_cntx_cgcs_4549:gh_kg_wbzx_py_latest_3_0"
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
                                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/803c470afe83ec1a85ddbca3cce0161d",
                                                    "visible": false,
                                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/2cce934beb1db0964729c4513519a026?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_cntx_cgcs_4549:gh_kg_dlzx_ln_latest_3_0"
                                                },
                                                {
                                                    "id": "gh_kg_dlbx_ln_latest_3_0",
                                                    "layerName": "BKJ_DLBX_LN",
                                                    "layerType": "SuperMapWMTS",
                                                    "caption": "控规_道路边线",
                                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/bbf5ba180d76924c104ebeb892d736b9",
                                                    "visible": false,
                                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/2cce934beb1db0964729c4513519a026?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_cntx_cgcs_4549:gh_kg_dlbx_ln_latest_3_0"
                                                },
                                            ]
                                        },
                                        {
                                            "id": "gh_kg_gdx_ln_latest_3_0",
                                            "layerName": "BKJ_GDX_LN",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "控规_轨道线",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/0b2f72e7600679c766a2035d0d18e94d",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/2cce934beb1db0964729c4513519a026?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_cntx_cgcs_4549:gh_kg_gdx_ln_latest_3_0"
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
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/909b860a2dbb42eba8920e0f74b6a11c",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/2cce934beb1db0964729c4513519a026?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_cntx_cgcs_4549:gh_kg_gpss_py_latest_3_0"
                                        },
                                        {
                                            "id": "gh_kg_gpss_pt_latest_3_0",
                                            "layerName": "BKP_GPSS_PT",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "控规_公共配套设施点",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/e1bb67e8047b789b9c29364cbbc027e9",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/2cce934beb1db0964729c4513519a026?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_cntx_cgcs_4549:gh_kg_gpss_pt_latest_3_0"
                                        },
                                        {
                                            "id": "gh_kg_gpfh_pt_latest_3_0",
                                            "layerName": "BKP_GPFH_PT",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "控规_公共配套设施符号",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/47bbf73385fa767c43af261f510e04fc",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/2cce934beb1db0964729c4513519a026?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_cntx_cgcs_4549:gh_kg_gpfh_pt_latest_3_0"
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
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/6d1c030f0ed6baa46966674595990ee5",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/2cce934beb1db0964729c4513519a026?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_cntx_cgcs_4549:gh_kg_xmfw_py_latest_3_0"
                                        },
                                    ]
                                }
                            ]
                        },
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
					name: "GTKJYTGZ",
					caption: "国土空间用途管制和开发利用",
					thematicMap: true,
					subLayers: [
                        {
                            layerType: "GroupLayer",
                            name: "DXYDZKF",
                            caption: "低效用地再开发",
                            thematicMap: true,
                            subLayers:[
                                {
                                    "id": "xz_dxydzkf_dxydzkfxmhx_py_latest_3_0",
                                    "layerName": "GCS330300K3003_DXYDZKF_XMHX",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "低效用地再开发项目红线_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/58549a81c57c7a3cdd47dffbd7f949f5",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/2cce934beb1db0964729c4513519a026?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_cntx_cgcs_4549:xz_dxydzkf_dxydzkfxmhx_py_latest_3_0"
                                },
                            ]
                        },
                        {
                            layerType: "GroupLayer",
                            name: "TDLYZTGHJBTZ",
                            caption: "土地利用总体规划局部调整",
                            thematicMap: true,
                            subLayers:[
                                {
                                    "id": "gl_gtkjytgzhkfly_ghjbtzl_py_latest_3_0",
                                    "layerName": "GCS330300K3003_GHJT_GHJBTZ_L",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "规划局部调整L_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/34d57f4341d4d3ef691989687e4e0b45",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/2cce934beb1db0964729c4513519a026?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_cntx_cgcs_4549:gl_gtkjytgzhkfly_ghjbtzl_py_latest_3_0"
                                },
                                {
                                    "id": "gl_gtkjytgzhkfly_ghjbtzx_py_latest_3_0",
                                    "layerName": "GCS330300K3003_GHJT_GHJBTZ_X",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "规划局部调整X_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/065e653e9c13b4f80a10eb8a98ee7992",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/2cce934beb1db0964729c4513519a026?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_cntx_cgcs_4549:gl_gtkjytgzhkfly_ghjbtzx_py_latest_3_0"
                                },
                            ]
                        },
                        {
                            layerType: "GroupLayer",
                            name: "NZYBP",
                            caption: "农转用报批",
                            thematicMap: true,
                            subLayers:[
                                {
                                    "id": "gl_nzybp_jsydbpl_py_latest_3_0",
                                    "layerName": "GCS330300K3003_JSYDBP_NZYDK_L",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "建设用地报批（农转用地块）L_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/b50018b1db79827299e4ab39f56871ed",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/2cce934beb1db0964729c4513519a026?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_cntx_cgcs_4549:gl_nzybp_jsydbpl_py_latest_3_0"
                                },
                                {
                                    "id": "gl_nzybp_jsydbpx_py_latest_3_0",
                                    "layerName": "GCS330300k3003_JSYDBP_NZYDK_X",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "建设用地报批（农转用地块）X_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/563378d6ec6afc390379f1f56ad36e6d",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/2cce934beb1db0964729c4513519a026?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_cntx_cgcs_4549:gl_nzybp_jsydbpx_py_latest_3_0"
                                },
                                {
                                    "id": "gl_nzybp_09_20_nzyfw_py_latest_3_0",
                                    "layerName": "GL_NZYBP_09_20_NZYFW_PY",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "农转用（09至20）_离线",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/e2a431055dde1fcb7d0939115597f7fd",
                                    "visible": false,
                                    "queryUrl": "http://http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/2cce934beb1db0964729c4513519a026?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_cntx_cgcs_4549:gl_nzybp_09_20_nzyfw_py_latest_3_0"
                                },
                                {
                                    "id": "gl_nzybp_09_21_wgfw_py_latest_3_0",
                                    "layerName": "GL_NZYBP_09_21_WGFW_PY",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "未供（09至21）A_离线",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/a31c786edbea1b4003f191f704e38d8a",
                                    "visible": false,
                                    "queryUrl": "http://http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/2cce934beb1db0964729c4513519a026?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_cntx_cgcs_4549:gl_nzybp_09_21_wgfw_py_latest_3_0"
                                },
                                {
                                    "id": "gl_nzybp_09_21_ygfw_py_latest_3_0",
                                    "layerName": "GL_NZYBP_09_21_YGFW_PY",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "已供（09至21）_离线",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/4440e1b8f32a20e123c78b4e645399ee",
                                    "visible": false,
                                    "queryUrl": "http://http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/2cce934beb1db0964729c4513519a026?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_cntx_cgcs_4549:gl_nzybp_09_21_ygfw_py_latest_3_0"
                                },
                                {
                                    "id": "gl_nzybp_gd_py_latest_3_0",
                                    "layerName": "GL_NZYBP_GD_PY",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "供地（99至08）_离线",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/715b19fcac9ba34609961cac1a2a0643",
                                    "visible": false,
                                    "queryUrl": "http://http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/2cce934beb1db0964729c4513519a026?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_cntx_cgcs_4549:gl_nzybp_gd_py_latest_3_0"
                                },
                                {
                                    "id": "gl_nzybp_nzy_py_latest_3_0",
                                    "layerName": "GL_NZYBP_NZY_PY",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "农转用（99至08）_离线",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/949e9e66f11f94d2d5d2a6e792258a0b",
                                    "visible": false,
                                    "queryUrl": "http://http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/2cce934beb1db0964729c4513519a026?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_cntx_cgcs_4549:gl_nzybp_nzy_py_latest_3_0"
                                },
                                {
                                    "id": "gl_nzybp_wg_py_latest_3_0",
                                    "layerName": "GL_NZYBP_WG_PY",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "未供（99至08）_离线",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/bc54e9dc7c50958a5ffff4356bd85cf6",
                                    "visible": false,
                                    "queryUrl": "http://http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/2cce934beb1db0964729c4513519a026?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_cntx_cgcs_4549:gl_nzybp_wg_py_latest_3_0"
                                },
                                {
                                    "id": "gl_nzybp_2020_nzy_py_latest_3_0",
                                    "layerName": "GL_NZYBP_2020_NZY_PY",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "农转用2020_离线",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/d3747d12d45bb20f0fa260222e885759",
                                    "visible": false,
                                    "queryUrl": "http://http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/2cce934beb1db0964729c4513519a026?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_cntx_cgcs_4549:gl_nzybp_2020_nzy_py_latest_3_0"
                                },

                            ]
                        },
                        {
                            layerType: "GroupLayer",
                            name: "JSYDYSHXZ",
                            caption: "建设用地预审和选址",
                            thematicMap: true,
                            subLayers:[
                                {
                                    "id": "gl_gtkjytgzhkfly_jsydys_py_latest_3_0",
                                    "layerName": "GCS330300K3003_JSYDYS_YSDK_X",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "建设用地预审（预审地块）_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/6dbab4cc57ac1db28cea6c5ed61743ef",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/2cce934beb1db0964729c4513519a026?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_cntx_cgcs_4549:gl_gtkjytgzhkfly_jsydys_py_latest_3_0"
                                },
                            ]
                        },
                        {
                            layerType: "GroupLayer",
                            name: "SSNYDBA",
                            caption: "设施农用地备案",
                            thematicMap: true,
                            subLayers:[
                                {
                                    "id": "gl_ssnydba_bhjbnt_py_latest_3_0",
                                    "layerName": "GCS330300K3003_SSNYD_BHYNFW",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "补划基本农田_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/0367ae15501784634493dca680ffaf61",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/2cce934beb1db0964729c4513519a026?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_cntx_cgcs_4549:gl_ssnydba_bhjbnt_py_latest_3_0"
                                },
                                {
                                    "id": "gl_ssnydba_phgzcfw_py_latest_3_0",
                                    "layerName": "GCS330300K3003_SSNYD_GZCPHJZD",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "破坏耕作层范围_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/522b54b12cb65055aa34d5b34ede615a",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/2cce934beb1db0964729c4513519a026?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_cntx_cgcs_4549:gl_ssnydba_phgzcfw_py_latest_3_0"
                                },
                                {
                                    "id": "gl_ssnydba_nydfw_py_latest_3_0",
                                    "layerName": "GCS330300K3003_SSNYD_NYDJZD",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "农用地范围_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/6d29fc2db6bfe1b4f6760000ce1d6b36",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/2cce934beb1db0964729c4513519a026?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_cntx_cgcs_4549:gl_ssnydba_nydfw_py_latest_3_0"
                                },
                                {
                                    "id": "gl_ssnydba_phynfw_py_latest_3_0",
                                    "layerName": "GCS330300K3003_SSNYD_PHYNJZD",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "破坏永农范围_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/876cd0014843ce2d540d9b6bcc954372",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/2cce934beb1db0964729c4513519a026?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_cntx_cgcs_4549:gl_ssnydba_phynfw_py_latest_3_0"
                                },
                                {
                                    "id": "gl_ssnydba_zyynfw_py_latest_3_0",
                                    "layerName": "GCS330300K3003_SSNYD_ZYYNJZD",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "占用永农范围_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/322e4e0c5966969310c2855778678573",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/2cce934beb1db0964729c4513519a026?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_cntx_cgcs_4549:gl_ssnydba_zyynfw_py_latest_3_0"
                                },
                                {
                                    "id": "gl_gtkjytgzhkfly_ssnydba_py_latest_3_0",
                                    "layerName": "SSNYDBA_BADK",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "设施农用地备案",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/9d6847e02fac9c18827a097e7295222d",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/2cce934beb1db0964729c4513519a026?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_cntx_cgcs_4549:gl_gtkjytgzhkfly_ssnydba_py_latest_3_0"
                                },
                            ]
                        },
                        {
                            layerType: "GroupLayer",
                            name: "TSCB",
                            caption: "土地储备",
                            thematicMap: true,
                            subLayers: [
                                {
                                    "id": "gl_tdcb_tdcb_py_latest_3_0",
                                    "layerName": "GCS330300K3003_TDCB",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "土地储备_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/7f57d22f08e41c2963dd3caffa66bcca",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/2cce934beb1db0964729c4513519a026?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_cntx_cgcs_4549:gl_tdcb_tdcb_py_latest_3_0"
                                },
                            ]
                        },
                        {
                            layerType: "GroupLayer",
                            name: "TSGY",
                            caption: "土地供应",
                            thematicMap: true,
                            subLayers: [
                                {
                                    "id": "gl_tdgy_gddk_py_latest_3_0",
                                    "layerName": "GCS330300K3003_TDGY_GDDK_X",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "供地地块_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/2980b24abfc74b326831e724cbe62e5e",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/2cce934beb1db0964729c4513519a026?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_cntx_cgcs_4549:gl_tdgy_gddk_py_latest_3_0"
                                },
                                {
                                    "id": "gl_tdgy_zpgcrdk_py_latest_3_0",
                                    "layerName": "GCS330300K3003_TDGY_TDJY_ZPGCR",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "土地交易-招拍挂出让地块_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/b1cf6f249345e5a1a6cb36f5e1fcbeda",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/2cce934beb1db0964729c4513519a026?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_cntx_cgcs_4549:gl_tdgy_zpgcrdk_py_latest_3_0"
                                },
                            ]
                        }
					]
				},
                {
					layerType: "GroupLayer",
					name: "TSZZ",
					caption: "土地整治",
					thematicMap: true,
					subLayers: [
                        {
                            "id": "gl_tdzz_gbzjsdk_lx_py_latest_3_0",
                            "layerName": "GCS330300K3003_TDZZ_GBZJS_LX_X",
                            "layerType": "SuperMapWMTS",
                            "caption": "高标准建设地块-立项_省级下发",
                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/d2414775a384968c7635a3084afd1f80",
                            "visible": false,
                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/2cce934beb1db0964729c4513519a026?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_cntx_cgcs_4549:gl_tdzz_gbzjsdk_lx_py_latest_3_0"
                        },
                        {
                            "id": "gl_tdzz_gbzjsdk_ys_py_latest_3_0",
                            "layerName": "GCS330300K3003_TDZZ_GBZJS_YS_X",
                            "layerType": "SuperMapWMTS",
                            "caption": "高标准建设地块-验收_省级下发",
                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/9a84362c2f1666329184c5a52a827cb9",
                            "visible": false,
                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/2cce934beb1db0964729c4513519a026?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_cntx_cgcs_4549:gl_tdzz_gbzjsdk_ys_py_latest_3_0"
                        },
                        {
                            "id": "gl_tdzz_gbztsdk_lx_py_latest_3_0",
                            "layerName": "GCS330300K3003_TDZZ_GBZTS_LX_X",
                            "layerType": "SuperMapWMTS",
                            "caption": "高标准提升地块-立项_省级下发",
                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/69e3add0cf8241e15605973b1c58d21d",
                            "visible": false,
                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/2cce934beb1db0964729c4513519a026?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_cntx_cgcs_4549:gl_tdzz_gbztsdk_lx_py_latest_3_0"
                        },
                        {
                            "id": "gl_tdzz_gbztsdk_ys_py_latest_3_0",
                            "layerName": "GCS330300K3003_TDZZ_GBZTS_YS_X",
                            "layerType": "SuperMapWMTS",
                            "caption": "高标准提升地块-验收_省级下发",
                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/2436f66113367d2412436edc982bc4c4",
                            "visible": false,
                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/2cce934beb1db0964729c4513519a026?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_cntx_cgcs_4549:gl_tdzz_gbztsdk_ys_py_latest_3_0"
                        },
                        {
                            "id": "gl_tdzz_jsydfkdk_lx_py_latest_3_0",
                            "layerName": "GCS330300K3003_TDZZ_JSYDFK_LX_",
                            "layerType": "SuperMapWMTS",
                            "caption": "建设用地复垦地块-立项_省级下发",
                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/c40eba4053a19e159fdfec4c9e024f9e",
                            "visible": false,
                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/2cce934beb1db0964729c4513519a026?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_cntx_cgcs_4549:gl_tdzz_jsydfkdk_lx_py_latest_3_0"
                        },
                        {
                            "id": "gl_jdzz_jsydfkdk_ys_py_latest_3_0",
                            "layerName": "GCS330300K3003_TDZZ_JSYDFK_YS_",
                            "layerType": "SuperMapWMTS",
                            "caption": "建设用地复垦地块-验收_省级下发",
                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/fc36fdb6794dbbce2137cdd31da483e2",
                            "visible": false,
                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/2cce934beb1db0964729c4513519a026?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_cntx_cgcs_4549:gl_jdzz_jsydfkdk_ys_py_latest_3_0"
                        },
                        {
                            "id": "gl_tdzz_kzgd_lx_py_latest_3_0",
                            "layerName": "GCS330300K3003_TDZZ_KZGD_LX_X",
                            "layerType": "SuperMapWMTS",
                            "caption": "垦造耕地-立项_省级下发",
                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/ddca764dcee04eacf8264f44a17e06ed",
                            "visible": false,
                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/2cce934beb1db0964729c4513519a026?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_cntx_cgcs_4549:gl_tdzz_kzgd_lx_py_latest_3_0"
                        },
                        {
                            "id": "gl_tdzz_kzgd_ys_py_latest_3_0",
                            "layerName": "GCS330300K3003_TDZZ_KZGD_YS_X",
                            "layerType": "SuperMapWMTS",
                            "caption": "垦造耕地-验收_省级下发",
                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/58766bf2e7825755c5f7cbea2f993976",
                            "visible": false,
                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/2cce934beb1db0964729c4513519a026?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_cntx_cgcs_4549:gl_tdzz_kzgd_ys_py_latest_3_0"
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
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/edf2b2164eae877311aba369f2d051a0",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/2cce934beb1db0964729c4513519a026?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_cntx_cgcs_4549:gl_zjgg_cjdkl_py_latest_3_0"
                                },
                                {
                                    "id": "gl_zjgg_jxdkl_py_latest_3_0",
                                    "layerName": "GCS330300K3003_NCTDZHZZ_JXDK_L",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "建新地块L_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/e79dcd03b1da30f111051728a9d2839b",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/2cce934beb1db0964729c4513519a026?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_cntx_cgcs_4549:gl_zjgg_jxdkl_py_latest_3_0"
                                },
                                {
                                    "id": "gl_zjgg_jxdkx_py_latest_3_0",
                                    "layerName": "GCS330300K3003_NCTDZHZZ_JXDK_X",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "建新地块X_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/cc07cd1d7837d3500c3d9e96e4ffcf54",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/2cce934beb1db0964729c4513519a026?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_cntx_cgcs_4549:gl_zjgg_jxdkx_py_latest_3_0"
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
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/f4e12e6d5ca8164c0f199c4dbb7bd04d",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/2cce934beb1db0964729c4513519a026?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_cntx_cgcs_4549:gl_tzgzdk_gdzlts_lx_py_latest_3_0"
                                },
                                {
                                    "id": "gl_tzgzdk_gdzlts_ys_py_latest_3_0",
                                    "layerName": "GCS330300K3003_TDZZ_GDZLTS_YS",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "耕地质量提升-验收_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/64fed021cddc56c5645f91f74ce141a8",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/2cce934beb1db0964729c4513519a026?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_cntx_cgcs_4549:gl_tzgzdk_gdzlts_ys_py_latest_3_0"
                                },
                                {
                                    "id": "gl_tzgzdk_hgsdk_lx_py_latest_3_0",
                                    "layerName": "GCS330300K3003_TDZZ_HGSDK_LX_X",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "旱改水地块-立项_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/018fb247ab759439cd08a2bb9da965dd",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/2cce934beb1db0964729c4513519a026?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_cntx_cgcs_4549:gl_tzgzdk_hgsdk_lx_py_latest_3_0"
                                },
                                {
                                    "id": "gl_tzgzdk_hgsdk_ys_py_latest_3_0",
                                    "layerName": "GCS330300K3003_TDZZ_HGSDK_YS_X",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "旱改水地块-验收_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/b1339b5fc4872f5b0ed292d4aee52219",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/2cce934beb1db0964729c4513519a026?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_cntx_cgcs_4549:gl_tzgzdk_hgsdk_ys_py_latest_3_0"
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
                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/232bb82a8b8a144ddeb91d614717c707",
                            "visible": false,
                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/2cce934beb1db0964729c4513519a026?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_cntx_cgcs_4549:gl_ksgl_lsks_py_latest_3_0"
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
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/82a3fd91188bf8ba2bca54de063dc052",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/2cce934beb1db0964729c4513519a026?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_cntx_cgcs_4549:gl_ckq_ckqdj_py_latest_3_0"
                                },
                                {
                                    "id": "gl_ckq_hdkqfw_py_latest_3_0",
                                    "layerName": "GCS330300K3004_CKQ_HDKQFW",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "划定矿区范围_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/5dc8c9ee0e46d4e2b047f32d5cb2d264",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/2cce934beb1db0964729c4513519a026?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_cntx_cgcs_4549:gl_ckq_hdkqfw_py_latest_3_0"
                                },
                                {
                                    "id": "gl_ckq_ckqdj_ls_py_latest_3_0",
                                    "layerName": "GCS330300K3004_CKQDJ_LSX",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "采矿权登记-历史_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/a46146d8e2dcf6e1f05bd7daee0d6e7b",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/2cce934beb1db0964729c4513519a026?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_cntx_cgcs_4549:gl_ckq_ckqdj_ls_py_latest_3_0"
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
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/2da82501aa983e12334e30f892d3e0fe",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/2cce934beb1db0964729c4513519a026?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_cntx_cgcs_4549:gl_cldj_cmdj_py_latest_3_0"
                                },
                                {
                                    "id": "gl_cldj_drkqsdj_py_latest_3_0",
                                    "layerName": "GCS330300K3004_CLDJ_DRKQS",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "地热矿泉水登记_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/5b997ae15fd2357751d022e5a5330ae3",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/2cce934beb1db0964729c4513519a026?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_cntx_cgcs_4549:gl_cldj_drkqsdj_py_latest_3_0"
                                },
                                {
                                    "id": "gl_cldj_jsydyf_py_latest_3_0",
                                    "layerName": "GCS330300K3004_CLDJ_JSYDYF_X",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "建设用地压覆_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/aa860e1dc2568937c9322750031cde72",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/2cce934beb1db0964729c4513519a026?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_cntx_cgcs_4549:gl_cldj_jsydyf_py_latest_3_0"
                                },
                                {
                                    "id": "gl_cldj_yfdj_py_latest_3_0",
                                    "layerName": "GCS330300K3004_CLDJ_YFDJ_X",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "压覆登记_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/af2d213c27625821c9561f4f478797c7",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/2cce934beb1db0964729c4513519a026?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_cntx_cgcs_4549:gl_cldj_yfdj_py_latest_3_0"
                                },
                                {
                                    "id": "gl_cldj_zydj_pt_latest_3_0",
                                    "layerName": "GCS330300K3004_CLDJ_ZYDJ_X",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "占用登记_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/cd967969bf9a19444efe2a5a54bee0e8",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/2cce934beb1db0964729c4513519a026?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_cntx_cgcs_4549:gl_cldj_zydj_pt_latest_3_0"
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
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/232bb82a8b8a144ddeb91d614717c707",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/2cce934beb1db0964729c4513519a026?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_cntx_cgcs_4549:gl_tkq_tkqdzdc_py_latest_3_0"
                                },
                                {
                                    "id": "gl_tkq_tkqkcdj_ls_py_latest_3_0",
                                    "layerName": "GCS330300K3004_TKQ_KCDJ_LSX",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "探矿权勘查登记_历史_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/20298b9f48d7a1410a0c1effdc8cc0ee",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/2cce934beb1db0964729c4513519a026?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_cntx_cgcs_4549:gl_tkq_tkqkcdj_ls_py_latest_3_0"
                                },
                                {
                                    "id": "gl_tkq_tkqkcdj_py_latest_3_0",
                                    "layerName": "GCS330300K3004_TKQ_KCDJ_X",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "探矿权勘查登记_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/47f7a110f52ed46e5c6f3a2989e75149",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/2cce934beb1db0964729c4513519a026?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_cntx_cgcs_4549:gl_tkq_tkqkcdj_py_latest_3_0"
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
                                    "layerName": "GCS330300K3004_FQKS_FQKS_X",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "废弃矿山_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/2e52d9f78590f008d82f3ddd2a25f05d",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/2cce934beb1db0964729c4513519a026?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_cntx_cgcs_4549:gl_stxf_fqks_py_latest_3_0"
                                },
                                {
                                    "id": "gl_fqks_ksstxf_pt_latest_3_0",
                                    "layerName": "GCS330300K302001_KS",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "矿山生态修复_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/83f55877b0777d71e630a9c6e7fd3839",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/2cce934beb1db0964729c4513519a026?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_cntx_cgcs_4549:gl_fqks_ksstxf_pt_latest_3_0"
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
                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/edf9b0fe3745f1979d7a180f702549af",
                            "visible": false,
                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/2cce934beb1db0964729c4513519a026?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_cntx_cgcs_4549:gl_wtzz_dpfwtzz_pt_latest_3_0"
                        },
                        {
                            "id": "gl_wtzz_ssnydzz_pt_latest_3_0",
                            "layerName": "GCS330300K3099_WTZZ_SSNYDZZX",
                            "layerType": "SuperMapWMTS",
                            "caption": "设施农用地整治_省级下发",
                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/f6c51a0b3a9a9715451f4c2d64c6a9cf",
                            "visible": false,
                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/2cce934beb1db0964729c4513519a026?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_cntx_cgcs_4549:gl_wtzz_ssnydzz_pt_latest_3_0"
                        },
                        {
                            "id": "gl_phjg_yq_gewy_py_latest_3_0",
                            "layerName": "PHJG_GEWY",
                            "layerType": "SuperMapWMTS",
                            "caption": "供而未用",
                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/dc47f0283801469d4cb39189b7e81c84",
                            "visible": false,
                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/2cce934beb1db0964729c4513519a026?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_cntx_cgcs_4549:gl_phjg_yq_gewy_py_latest_3_0"
                        },
                        {
                            "id": "gl_phjg_yq_pewg_py_latest_3_0",
                            "layerName": "PHJG_PEWG",
                            "layerType": "SuperMapWMTS",
                            "caption": "批而未供",
                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/b7cfe13bc7c225aefd10aa54a6e441ad",
                            "visible": false,
                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/2cce934beb1db0964729c4513519a026?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_cntx_cgcs_4549:gl_phjg_yq_pewg_py_latest_3_0"
                        },
                        {
                            "id": "gl_phjg_yq_xztd_py_latest_3_0",
                            "layerName": "PHJG_XZTD",
                            "layerType": "SuperMapWMTS",
                            "caption": "闲置土地",
                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/f0003e28b7e4f325e70ba1524c7db6d0",
                            "visible": false,
                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/2cce934beb1db0964729c4513519a026?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_cntx_cgcs_4549:gl_phjg_yq_xztd_py_latest_3_0"
                        },
                        {
                            "id": "gl_phjg_yq_yewj_py_latest_3_0",
                            "layerName": "PHJG_YEWJ",
                            "layerType": "SuperMapWMTS",
                            "caption": "用而未尽",
                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/fe8207de3fca0f71938c32ce07bb8976",
                            "visible": false,
                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/2cce934beb1db0964729c4513519a026?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_cntx_cgcs_4549:gl_phjg_yq_yewj_py_latest_3_0"
                        },
                        {
                            "id": "gl_phjg_yq_ypyy_py_latest_3_0",
                            "layerName": "PHJG_YPYY",
                            "layerType": "SuperMapWMTS",
                            "caption": "已批已用",
                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/d772e549560532dc8d30d174ece8ad44",
                            "visible": false,
                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/2cce934beb1db0964729c4513519a026?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_cntx_cgcs_4549:gl_phjg_yq_ypyy_py_latest_3_0"
                        },                       
                    ]
                },
                // 自然资源监管 用地基准地价图
                {
					layerType: "GroupLayer",
					name: "ZRZYJG",
					caption: "自然资源监管",
					thematicMap: true,
					subLayers: [
                        {
                            layerType: "GroupLayer",
                            name: "YDJZDJT",
                            caption: "用地基准地价图",
                            thematicMap: true,
                            subLayers: [      
                                {
                                    "id": "gl_tdcb_ydjzdjt_py_latest_3_0",
                                    "layerName": "GL_TDCB_YDJZDJT_PY",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "用地基准地价图_离线",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/dce93eab718bd60f350a3275f0c473a6",
                                    "visible": false,
                                    "queryUrl": "http://http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/2cce934beb1db0964729c4513519a026?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_cntx_cgcs_4549:gl_tdcb_ydjzdjt_py_latest_3_0"
                                },
        
                            ]
                        }
                    ]
                }
               
                
                
               
            ]
        },
        {
            layerType: "GroupLayer",
            name: "GXXD",
            caption: "2022土地要素保障七大攻坚行动",
            thematicMap: true,
            subLayers:[
                {
                    "id": "gl_tdjh_zdcrrwfjb_py_latest_3_0",
                    "layerName": "GL_TDJH_ZDCRRWFJB_PY",
                    "layerType": "SuperMapWMTS",
                    "caption": "做地出让",
                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/6e59bd4590b5e35ba5c24b03a372e65e",
                    "visible": false,
                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/2cce934beb1db0964729c4513519a026?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_cntx_cgcs_4549:gl_tdjh_zdcrrwfjb_py_latest_3_0",
                    "showList":true
                },
                {
                    "id": "gl_phjg_pewg_py_latest_3_0_cn",
                    "layerName": "GL_PHJG_PEWG_PY",
                    "layerType": "SuperMapWMTS",
                    "caption": "批而未供",
                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/1359d38943dbe2cafd5a770d39a0bd67",
                    "visible": false,
                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/2cce934beb1db0964729c4513519a026?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_cntx_cgcs_4549:gl_phjg_pewg_py_latest_3_0",
                    "showList":true,
                    "findConfig":"cn",
                },
                {
                    "id": "gl_tdzz_hgsdk_py_latest_3_0",
                    "layerName": "GL_TDZZ_HGSDK_PY",
                    "layerType": "SuperMapWMTS",
                    "caption": "旱改水地块",
                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/2e399b3b94099ccf31113ff77c84f74c",
                    "visible": false,
                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/2cce934beb1db0964729c4513519a026?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_cntx_cgcs_4549:gl_tdzz_hgsdk_py_latest_3_0",
                    "showList":true
                },
                {
                    "id": "gl_tdzz_hqgh_py_latest_3_0",
                    "layerName": "GL_TDZZ_HQGH_PY",
                    "layerType": "SuperMapWMTS",
                    "caption": "土地整治管护",
                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/56329599d302c6fd5c051cd46254a938",
                    "visible": false,
                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/2cce934beb1db0964729c4513519a026?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_cntx_cgcs_4549:gl_tdzz_hqgh_py_latest_3_0",
                    "showList":true
                },
                {
                    "id": "gl_tdzz_jsydfkdk_py_latest_3_0",
                    "layerName": "GL_TDZZ_JSYDFKDK_PY",
                    "layerType": "SuperMapWMTS",
                    "caption": "建设用地复垦地块",
                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/1c08b2baffe2eed4e962f5d7fc8e5718",
                    "visible": false,
                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/2cce934beb1db0964729c4513519a026?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_cntx_cgcs_4549:gl_tdzz_jsydfkdk_py_latest_3_0",
                    "showList":true
                },
                {
                    "id": "gl_tdzz_tdzhzz_py_latest_3_0",
                    "layerName": "GL_TDZZ_JSYDFKDK_PY",
                    "layerType": "SuperMapWMTS",
                    "caption": "土地综合整治",
                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/5b96ae8798f37e0c5433768342257356",
                    "visible": false,
                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/2cce934beb1db0964729c4513519a026?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_cntx_cgcs_4549:gl_tdzz_tdzhzz_py_latest_3_0",
                    "showList":true
                },
                {
                    "id": "gl_gtkjytgzhkfly_dxydzkf_py_latest_3_0",
                    "layerName": "GL_GTKJYTGZHKFLY_DXYDZKF_PY",
                    "layerType": "SuperMapWMTS",
                    "caption": "低效用地再开发",
                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/44257b2084feea7d244405ee2cc6f3f7",
                    "visible": false,
                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/2cce934beb1db0964729c4513519a026?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_cntx_cgcs_4549:gl_gtkjytgzhkfly_dxydzkf_py_latest_3_0",
                    "showList":true
                }           
            ]
            
        }
    ]

});

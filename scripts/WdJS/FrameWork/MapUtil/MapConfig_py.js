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
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/5e5bf6e80996319dea2ac28c60ba92c6",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/fe4b37e51076226302ac688d3657dab4?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_pytx_cgcs_4549:xz_dxydzxdc_2019_dxdcdytb_py_latest_3_0"
                                },
                                {
                                    "id": "xz_dxydzxdc_2019_dxdcqtb_py_latest_3_0",
                                    "layerName": "DCQTB_2019",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "低效调查区图斑2019_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/c2eec44dd0c336712cba2a7ce02f46c5",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/fe4b37e51076226302ac688d3657dab4?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_pytx_cgcs_4549:xz_dxydzxdc_2019_dxdcqtb_py_latest_3_0"
                                },
                                {
                                    "id": "xz_dxydzxdc_2020_dxdcdytb_py_latest_3_0",
                                    "layerName": "DCDYTB_2020",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "低效调查单元图斑2020_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/09bc9afba4b21f4515c0d2ff2c0a3f1b",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/fe4b37e51076226302ac688d3657dab4?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_pytx_cgcs_4549:xz_dxydzxdc_2020_dxdcdytb_py_latest_3_0"
                                },
                                {
                                    "id": "xz_dxydzxdc_2020_dxdcqtb_py_latest_3_0",
                                    "layerName": "DCQTB_2020",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "低效调查区图斑2020_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/84755ab1b0e2dce71addcd5e2855d38b",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/fe4b37e51076226302ac688d3657dab4?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_pytx_cgcs_4549:xz_dxydzxdc_2020_dxdcqtb_py_latest_3_0"
                                },
							]
						},
                        {
							layerType: "GroupLayer",
							name: "BZNT",
							caption: "标准农田",
							thematicMap: true,
							subLayers: [
                                {
                                    "id": "xz_tdzy_bznt_py_latest_3_0",
                                    "layerName": "BZNT_BZNT",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "标准农田",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/3b41818be6b71aa5c382e93265ed3c77",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/fe4b37e51076226302ac688d3657dab4?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_pytx_cgcs_4549:xz_tdzy_bznt_py_latest_3_0"
                                },
                            ]
                        },
                        {
							layerType: "GroupLayer",
							name: "DXYDZXDC",
							caption: "低效用地专项调查",
							thematicMap: true,
							subLayers: [
                                {
                                    "id": "xz_tdzy_dxyddcdy_py_latest_3_0",
                                    "layerName": "CZDXYDZXDC_DXYDDCDY",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "低效调查用地调查单元",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/c20849ba1a17a49eff8f1e6e4530e8ef",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/fe4b37e51076226302ac688d3657dab4?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_pytx_cgcs_4549:xz_tdzy_dxyddcdy_py_latest_3_0"
                                },
                                {
                                    "id": "xz_tdzy_dxyddcq_py_latest_3_0",
                                    "layerName": "CZDXYDZXDC_DXYDDCQ",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "低效调查用地调查区",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/30557e1cd9fa5d8f7154797e0846c4cd",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/fe4b37e51076226302ac688d3657dab4?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_pytx_cgcs_4549:xz_tdzy_dxyddcq_py_latest_3_0"
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
                                            "id": "xz_tdbg_gdzldb_py_latest_3_0",
                                            "layerName": "GDZLDJ",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "耕地质量等别",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/dd8c9cde8739c16dca03ec94bc2d2a1f",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/fe4b37e51076226302ac688d3657dab4?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_pytx_cgcs_4549:xz_tdbg_gdzldb_py_latest_3_0"
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
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/4945c465b3067531a22fe14480f49a1d",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/fe4b37e51076226302ac688d3657dab4?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_pytx_cgcs_4549:xz_decqgtddc_2009_dltb_py_latest_3_0"
                                        },
                                    ]
                                }
                            ]
                        },
                        {
							layerType: "GroupLayer",
							name: "LNTDBGDC",
							caption: "历年土地变更调查",
							thematicMap: true,
							subLayers: [
                                {
                                    "id": "xz_tdbg_2010_dltb_py_latest_3_0",
                                    "layerName": "TDLYXZ_DLTB_2010",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "地类图斑2010",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/07aa3061074b274c31c66b846b47aedc",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/fe4b37e51076226302ac688d3657dab4?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_pytx_cgcs_4549:xz_tdbg_2010_dltb_py_latest_3_0"
                                },
                                {
                                    "id": "xz_tdbg_2010_lxdw_pt_latest_3_0",
                                    "layerName": "TDLYXZ_LXDW_2010",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "零星地物2010",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/9197165b9bda2cb2c57020c0ae2b8f9d",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/fe4b37e51076226302ac688d3657dab4?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_pytx_cgcs_4549:xz_tdbg_2010_lxdw_pt_latest_3_0"
                                },
                                {
                                    "id": "xz_tdbg_2010_xzdw_ln_latest_3_0",
                                    "layerName": "TDLYXZ_XZDW_2010",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "线状地物2010",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/ecf9e3feb91ea69a2618056f4cf7af69",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/fe4b37e51076226302ac688d3657dab4?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_pytx_cgcs_4549:xz_tdbg_2010_xzdw_ln_latest_3_0"
                                },
                                {
                                    "id": "xz_tdbg_2012_dltb_py_latest_3_0",
                                    "layerName": "TDLYXZ_DLTB_2012",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "地类图斑2012",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/c67a744b6aaadbf82dffac9158363783",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/fe4b37e51076226302ac688d3657dab4?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_pytx_cgcs_4549:xz_tdbg_2012_dltb_py_latest_3_0"
                                },
                                {
                                    "id": "xz_tdbg_2012_lxdw_pt_latest_3_0",
                                    "layerName": "TDLYXZ_LXDW_2012",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "零星地物2012",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/add6f759f2c19084fc366fcc5cec8a78",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/fe4b37e51076226302ac688d3657dab4?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_pytx_cgcs_4549:xz_tdbg_2012_lxdw_pt_latest_3_0"
                                },
                                {
                                    "id": "xz_tdbg_2012_xzdw_ln_latest_3_0",
                                    "layerName": "TDLYXZ_XZDW_2012",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "线状地物2012",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/5ca29119da7d3f089fb6c5562aa396ab",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/fe4b37e51076226302ac688d3657dab4?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_pytx_cgcs_4549:xz_tdbg_2012_xzdw_ln_latest_3_0"
                                },
                                {
                                    "id": "xz_tdbg_2013_dltb_py_latest_3_0",
                                    "layerName": "TDLYXZ_DLTB_2013",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "地类图斑2013",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/ac0e32769e53e69a20e780b37baf83eb",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/fe4b37e51076226302ac688d3657dab4?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_pytx_cgcs_4549:xz_tdbg_2013_dltb_py_latest_3_0"
                                },
                                {
                                    "id": "xz_tdbg_2013_lxdw_pt_latest_3_0",
                                    "layerName": "TDLYXZ_LXDW_2013",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "零星地物2013",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/070be54a9712eb8d70d383bdc88267ff",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/fe4b37e51076226302ac688d3657dab4?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_pytx_cgcs_4549:xz_tdbg_2013_lxdw_pt_latest_3_0"
                                },
                                {
                                    "id": "xz_tdbg_2013_xzdw_ln_latest_3_0",
                                    "layerName": "TDLYXZ_XZDW_2013",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "线状地物2013",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/57fcadec1391cdd8a1ef8b4223439d03",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/fe4b37e51076226302ac688d3657dab4?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_pytx_cgcs_4549:xz_tdbg_2013_xzdw_ln_latest_3_0"
                                },
                                {
                                    "id": "xz_tdbg_2014_dltb_py_latest_3_0",
                                    "layerName": "TDLYXZ_DLTB_2014",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "地类图斑2014",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/be12c764cb856f42da774f32bfd51da1",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/fe4b37e51076226302ac688d3657dab4?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_pytx_cgcs_4549:xz_tdbg_2014_dltb_py_latest_3_0"
                                },
                                {
                                    "id": "xz_tdbg_2014_lxdw_pt_latest_3_0",
                                    "layerName": "TDLYXZ_LXDW_2014",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "零星地物2014",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/85548838bf27cceccec1498ac3642ad1",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/fe4b37e51076226302ac688d3657dab4?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_pytx_cgcs_4549:xz_tdbg_2014_lxdw_pt_latest_3_0"
                                },
                                {
                                    "id": "xz_tdbg_2014_xzdw_ln_latest_3_0",
                                    "layerName": "TDLYXZ_XZDW_2014",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "线状地物2014",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/15942785706fc78e15c3959a7994bb16",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/fe4b37e51076226302ac688d3657dab4?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_pytx_cgcs_4549:xz_tdbg_2014_xzdw_ln_latest_3_0"
                                },
                                {
                                    "id": "xz_tdbg_2015_dltb_py_latest_3_0",
                                    "layerName": "TDLYXZ_DLTB_2015",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "地类图斑2015",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/6250bf617ab19f35cdd07dcdd98ce33a",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/fe4b37e51076226302ac688d3657dab4?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_pytx_cgcs_4549:xz_tdbg_2015_dltb_py_latest_3_0"
                                },
                                {
                                    "id": "xz_tdbg_2015_lxdw_pt_latest_3_0",
                                    "layerName": "TDLYXZ_LXDW_2015",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "零星地物2015",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/60d647088b6e7d0861e68daac1b486cc",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/fe4b37e51076226302ac688d3657dab4?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_pytx_cgcs_4549:xz_tdbg_2015_lxdw_pt_latest_3_0"
                                },
                                {
                                    "id": "xz_tdbg_2015_xzdw_ln_latest_3_0",
                                    "layerName": "TDLYXZ_XZDW_2015",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "线状地物2015",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/8abca5f2d7996f4e9ee2821dcbe8c3cb",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/fe4b37e51076226302ac688d3657dab4?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_pytx_cgcs_4549:xz_tdbg_2015_xzdw_ln_latest_3_0"
                                },
                                {
                                    "id": "xz_tdbg_2016_dltb_py_latest_3_0",
                                    "layerName": "TDLYXZ_DLTB_2016",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "地类图斑2016",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/844a61863b5b1ae8f516aed1b62decd4",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/fe4b37e51076226302ac688d3657dab4?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_pytx_cgcs_4549:xz_tdbg_2016_dltb_py_latest_3_0"
                                },
                                {
                                    "id": "xz_tdbg_2016_lxdw_pt_latest_3_0",
                                    "layerName": "TDLYXZ_LXDW_2016",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "零星地物2016",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/72b817514961c61f9a093541b1f10288",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/fe4b37e51076226302ac688d3657dab4?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_pytx_cgcs_4549:xz_tdbg_2016_lxdw_pt_latest_3_0"
                                },
                                {
                                    "id": "xz_tdbg_2016_xzdw_ln_latest_3_0",
                                    "layerName": "TDLYXZ_XZDW_2016",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "线状地物2016",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/bf4ba5ea32ed4c0edd4ade879be1bc74",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/fe4b37e51076226302ac688d3657dab4?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_pytx_cgcs_4549:xz_tdbg_2016_xzdw_ln_latest_3_0"
                                },
                                {
                                    "id": "xz_tdbg_2017_dltb_py_latest_3_0",
                                    "layerName": "TDLYXZ_DLTB_2017",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "地类图斑2017",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/62fe8021ae6c7bbf4c13f7ae134e834c",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/fe4b37e51076226302ac688d3657dab4?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_pytx_cgcs_4549:xz_tdbg_2017_dltb_py_latest_3_0"
                                },
                                {
                                    "id": "xz_tdbg_2017_lxdw_pt_latest_3_0",
                                    "layerName": "TDLYXZ_LXDW_2017",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "零星地物2017",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/84147fd5dd7d6c1e815ed18a71072733",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/fe4b37e51076226302ac688d3657dab4?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_pytx_cgcs_4549:xz_tdbg_2017_lxdw_pt_latest_3_0"
                                },
                                {
                                    "id": "xz_tdbg_2017_xzdw_ln_latest_3_0",
                                    "layerName": "TDLYXZ_XZDW_2017",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "线状地物2017",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/0b3546b052b1dfd0c8a7e78aaab92b69",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/fe4b37e51076226302ac688d3657dab4?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_pytx_cgcs_4549:xz_tdbg_2017_xzdw_ln_latest_3_0"
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
                            "layerName": "XJELCSLZY_20",
                            "layerType": "SuperMapWMTS",
                            "caption": "县级二级调查森林资源_省级下发",
                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/d38f02a09a155560568f0db0134013a7",
                            "visible": false,
                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/fe4b37e51076226302ac688d3657dab4?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_pytx_cgcs_4549:xz_slzy_xjejdcslzy_py_latest_3_0"
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
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/c7be1675ec0a7581ec8700dbf227565b",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/fe4b37e51076226302ac688d3657dab4?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_pytx_cgcs_4549:xz_slzy_2018_gjjgyl_py_latest_3_0"
                                },
                                {
                                    "id": "xz_slzy_2018_sjstgyl_py_latest_3_0",
                                    "layerName": "SJSTGYL_2018",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "省级生态公益林2018_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/b9d68c37d67a9f3c4a45ef18909e5565",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/fe4b37e51076226302ac688d3657dab4?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_pytx_cgcs_4549:xz_slzy_2018_sjstgyl_py_latest_3_0"
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
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/87129bcd844915d0ca435f3bd09240b1",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/fe4b37e51076226302ac688d3657dab4?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_pytx_cgcs_4549:xz_slzy_2018_sydbhq_py_latest_3_0"
                                },
                                {
                                    "id": "xz_slzy_2020_zrbhd_py_latest_3_0",
                                    "layerName": "ZRBHD_2020",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "自然保护地2020_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/512d11961c5cd6d754e76b3dd3e4d0d1",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/fe4b37e51076226302ac688d3657dab4?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_pytx_cgcs_4549:xz_slzy_2020_zrbhd_py_latest_3_0"
                                },
                            ]
                        },
                        {
                            layerType: "GroupLayer",
                            name: "GTLH",
                            caption: "国土绿化",
                            thematicMap: true,
                            subLayers: [
                                {
                                    "id": "xz_slzy_fxzzl_py_latest_3_0",
                                    "layerName": "XZ_SLZY_FXZZL_PY",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "非新增造林_离线",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/52b1745d84b02e520f24751664715905",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/fe4b37e51076226302ac688d3657dab4?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_pytx_cgcs_4549:xz_slzy_fxzzl_py_latest_3_0"
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
                                    "id": "xz_slzy_zlysz_py_latest_3_0",
                                    "layerName": "XZ_SLZY_ZLYSZ_PY",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "平阳造林验收总_离线",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/9bba51727f6948e458ff67bf6b524743",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/fe4b37e51076226302ac688d3657dab4?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_pytx_cgcs_4549:xz_slzy_zlysz_py_latest_3_0"
                                },
                            ]
                        },
                        {
                            layerType: "GroupLayer",
                            name: "XZL",
                            caption: "新造林",
                            thematicMap: true,
                            subLayers: [
                                {
                                    "id": "xz_slzy_xzbwmzl_py_latest_3_0",
                                    "layerName": "XZ_SLZY_XZBWMZL_PY",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "新增百万亩造林_离线",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/b42c18e597eac7ffa3324c4fb351481c",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/fe4b37e51076226302ac688d3657dab4?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_pytx_cgcs_4549:xz_slzy_xzbwmzl_py_latest_3_0"
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
                                    "layerName": "GJZYSD_2018",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "国家重要湿地2018_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/83818fdbfc8bb7e1e9b151650111a0c2",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/fe4b37e51076226302ac688d3657dab4?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_pytx_cgcs_4549:xz_sdzy_2018_gjzysd_pt_latest_3_0"
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
                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/8f0c6e1fc5e5464e81726a3f9e0beaf8",
                            "visible": false,
                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/fe4b37e51076226302ac688d3657dab4?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_pytx_cgcs_4549:xz_dzsj_dzyjbhq_pt_latest_3_0"
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
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/36724253a4b8db2a8102a9843ec260aa",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/fe4b37e51076226302ac688d3657dab4?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_pytx_cgcs_4549:xz_dzzh_yhd_pt_latest_3_0"
                                },
                                {
                                    "id": "xz_dzzh_zqd_pt_latest_3_0",
                                    "layerName": "ZXQD_ZQD_X",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "灾情点_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/c6ffa8d22816c3b012d5a9ff0a0261d8",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/fe4b37e51076226302ac688d3657dab4?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_pytx_cgcs_4549:xz_dzzh_zqd_pt_latest_3_0"
                                },
                            ]
                        }
                    ]
                },
                {
                    layerType: "GroupLayer",
					name: "DLGQPCSJ",
					caption: "地理国情普查数据",
					thematicMap: true,
					subLayers: [
                        {
                            "id": "xz_dlgqpc_pyxjcq_py_latest_3_0",
                            "layerName": "XZ_DLGQPC_2015_PYXJCQ_PY",
                            "layerType": "SuperMapWMTS",
                            "caption": "平阳县建成区2015_离线",
                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/8a2b47669fc400aac596b3c5e9e24cd1",
                            "visible": false,
                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/fe4b37e51076226302ac688d3657dab4?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_pytx_cgcs_4549:xz_dlgqpc_pyxjcq_py_latest_3_0"
                        },
                        {
                            "id": "xz_dlgqpc_2015_pyxjcqldxz_py_latest_3_0",
                            "layerName": "XZ_DLGQPC_2015_PYXJCQLDXZ_PY",
                            "layerType": "SuperMapWMTS",
                            "caption": "平阳县绿地现状2015_离线",
                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/40e7370dff5fae29a9c20f5e449f004b",
                            "visible": false,
                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/fe4b37e51076226302ac688d3657dab4?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_pytx_cgcs_4549:xz_dlgqpc_2015_pyxjcqldxz_py_latest_3_0"
                        },
                        {
                            "id": "xz_dlgqpc_2015_pyxjcqlhfg_py_latest_3_0",
                            "layerName": "XZ_DLGQPC_2015_PYXJCQLHFG_PY",
                            "layerType": "SuperMapWMTS",
                            "caption": "平阳县绿化覆盖2015_离线",
                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/768981364b225439a93ed8c7eee8f260",
                            "visible": false,
                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/fe4b37e51076226302ac688d3657dab4?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_pytx_cgcs_4549:xz_dlgqpc_2015_pyxjcqlhfg_py_latest_3_0"
                        },
                        {
                            "id": "xz_dlgqpc_2016_pyxjcq_py_latest_3_0",
                            "layerName": "XZ_DLGQPC_2016_PYXJCQ_PY",
                            "layerType": "SuperMapWMTS",
                            "caption": "平阳县建成区2016_离线",
                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/52ebb2572da011569e5d158a280b3693",
                            "visible": false,
                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/fe4b37e51076226302ac688d3657dab4?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_pytx_cgcs_4549:xz_dlgqpc_2016_pyxjcq_py_latest_3_0"
                        },
                        {
                            "id": "xz_dlgqpc_2016_pyxjcqldxz_py_latest_3_0",
                            "layerName": "XZ_DLGQPC_2016_PYXJCQLDXZ_PY",
                            "layerType": "SuperMapWMTS",
                            "caption": "平阳县绿地现状2016_离线",
                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/8a465822f3f61cb9755b8fdb1afa9950",
                            "visible": false,
                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/fe4b37e51076226302ac688d3657dab4?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_pytx_cgcs_4549:xz_dlgqpc_2016_pyxjcqldxz_py_latest_3_0"
                        },
                        {
                            "id": "xz_dlgqpc_2016_pyxjcqlhfg_py_latest_3_0",
                            "layerName": "XZ_DLGQPC_2016_PYXJCQLHFG_PY",
                            "layerType": "SuperMapWMTS",
                            "caption": "平阳县绿化覆盖2016_离线",
                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/36006af0071837d2a3c0d824701f076d",
                            "visible": false,
                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/fe4b37e51076226302ac688d3657dab4?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_pytx_cgcs_4549:xz_dlgqpc_2016_pyxjcqlhfg_py_latest_3_0"
                        },
                        {
                            "id": "xz_dlgqpc_wy_py_latest_3_0",
                            "layerName": "XZ_DLGQPC_WY_PY",
                            "layerType": "SuperMapWMTS",
                            "caption": "外业_离线",
                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/46814f45ec174ba0826f890c3b7018fd",
                            "visible": false,
                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/fe4b37e51076226302ac688d3657dab4?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_pytx_cgcs_4549:xz_dlgqpc_wy_py_latest_3_0"
                        },
                        {
                            "id": "xz_dlgqpc_2017_pyxjcqldxz_py_latest_3_0",
                            "layerName": "XZ_DLGQPC_2017_PYXJCQLDXZ_PY",
                            "layerType": "SuperMapWMTS",
                            "caption": "平阳县绿地现状2017_离线",
                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/d3e2e291b46ca7992973ae63d1c9fdb8",
                            "visible": false,
                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/fe4b37e51076226302ac688d3657dab4?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_pytx_cgcs_4549:xz_dlgqpc_2017_pyxjcqldxz_py_latest_3_0"
                        },
                        {
                            "id": "xz_dlgqpc_2017_pyxjcqlhfg_py_latest_3_0",
                            "layerName": "XZ_DLGQPC_2017_PYXJCQLHFG_PY",
                            "layerType": "SuperMapWMTS",
                            "caption": "平阳县绿化覆盖2017_离线",
                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/08f27ee92b22d169de40dcf26ec7f849",
                            "visible": false,
                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/fe4b37e51076226302ac688d3657dab4?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_pytx_cgcs_4549:xz_dlgqpc_2017_pyxjcqlhfg_py_latest_3_0"
                        },
                        {
                            "id": "xz_dlgqpc_2018_pyxjcq_py_latest_3_0",
                            "layerName": "XZ_DLGQPC_2018_PYXJCQ_PY",
                            "layerType": "SuperMapWMTS",
                            "caption": "平阳县建成区2018_离线",
                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/3d0aae33330cbacb364aad54564c14ef",
                            "visible": false,
                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/fe4b37e51076226302ac688d3657dab4?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_pytx_cgcs_4549:xz_dlgqpc_2018_pyxjcq_py_latest_3_0"
                        },
                        {
                            "id": "xz_dlgqpc_2018_pyxjcqldxz_py_latest_3_0",
                            "layerName": "XZ_DLGQPC_2018_PYXJCQLDXZ_PY",
                            "layerType": "SuperMapWMTS",
                            "caption": "平阳县绿地现状2018_离线",
                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/a7ebc3264dee0559aefc7babcb754c53",
                            "visible": false,
                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/fe4b37e51076226302ac688d3657dab4?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_pytx_cgcs_4549:xz_dlgqpc_2018_pyxjcqldxz_py_latest_3_0"
                        },
                        {
                            "id": "xz_dlgqpc_2018_pyxjcqlhfg_py_latest_3_0",
                            "layerName": "XZ_DLGQPC_2018_PYXJCQLHFG_PY",
                            "layerType": "SuperMapWMTS",
                            "caption": "平阳县绿化覆盖2018_离线",
                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/d3c2507025968d32c8038886dce24834",
                            "visible": false,
                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/fe4b37e51076226302ac688d3657dab4?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_pytx_cgcs_4549:xz_dlgqpc_2018_pyxjcqlhfg_py_latest_3_0"
                        },
                    ]
                },
                // 海洋资源
                {
                    layerType: "GroupLayer",
					name: "HYSJ",
					caption: "海洋资源",
					thematicMap: true,
					subLayers: [
                        {
                            layerType: "GroupLayer",
                            name: "HAX",
                            caption: "海岸线",
                            thematicMap: true,
                            subLayers: [
                                {
                                    "id": "xz_hyzy_2021_pyxcdlax_ln_latest_3_0",
                                    "layerName": "XZ_HYZY_2021_PYXCDLAX_LN",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "平阳修测大陆岸线2021_离线",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/2462645b56a28c06004c25844bf156bb",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/fe4b37e51076226302ac688d3657dab4?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_pytx_cgcs_4549:xz_hyzy_2021_pyxcdlax_ln_latest_3_0"
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
                                    "id": "xz_hyzy_pykfly_py_latest_3_0",
                                    "layerName": "XZ_HYZY_PYKFLY_PY",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "平阳开发利用_离线",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/f4028c830fcadc516f063d4728c08345",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/fe4b37e51076226302ac688d3657dab4?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_pytx_cgcs_4549:xz_hyzy_pykfly_py_latest_3_0"
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
                            "id": "gh_zykzx_2018_stbhhx_py_latest_3_0",
                            "layerName": "STBHHX_2018",
                            "layerType": "SuperMapWMTS",
                            "caption": "生态保护红线2018_省级下发",
                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/840ffe21e58c30f3f29ab29a11b246f3",
                            "visible": false,
                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/fe4b37e51076226302ac688d3657dab4?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_pytx_cgcs_4549:gh_zykzx_2018_stbhhx_py_latest_3_0"
                        },
                        {
                            layerType: "GroupLayer",
                            name: "ZYKZX",
                            caption: "重要控制线",
                            thematicMap: true,
                            subLayers: [
                                {
                                    "id": "gh_zykzx_2017_yjjbnthx_py_latest_3_0",
                                    "layerName": "YJJBNTBHHX_YJJBNTHX_2017",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "永久基本农田保护红线2017",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/f17808644ac04bef3bcbddaf5e8c6659",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/fe4b37e51076226302ac688d3657dab4?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_pytx_cgcs_4549:gh_zykzx_2017_yjjbnthx_py_latest_3_0"
                                },
                                {
                                    "id": "gh_zykzx_2020_yjjbntbhhx_py_latest_3_0",
                                    "layerName": "YJJBNTHX_2020",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "永久基本农田保护红线2020_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/ac462e43b0eb7fc8c091b5d9e9b7e105",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/fe4b37e51076226302ac688d3657dab4?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_pytx_cgcs_4549:gh_zykzx_2020_yjjbntbhhx_py_latest_3_0"
                                }
                            ]
                        }
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
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/fe5860e26cce899c0ff224905f7c324c",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/fe4b37e51076226302ac688d3657dab4?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_pytx_cgcs_4549:gh_kg_ydgh_py_latest_3_0"
                                        },
                                        {
                                            "id": "gh_kg_dkfh_pt_latest_3_0",
                                            "layerName": "BKY_DKFH_PT",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "控规_地块符号",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/d54c2cf9020ab1a9ca10f6c261f63994",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/fe4b37e51076226302ac688d3657dab4?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_pytx_cgcs_4549:gh_kg_dkfh_pt_latest_3_0"
                                        },
                                        {
                                            "id": "gh_kg_dkbh_ap_latest_3_0",
                                            "layerName": "BKY_DKBH_AP",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "控规_地块编号",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/d59e0b4b9ed4d4131c49b2e9cfbdd8be",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/fe4b37e51076226302ac688d3657dab4?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_pytx_cgcs_4549:gh_kg_dkbh_ap_latest_3_0"
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
                                        "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/dbe115c9dfbc571a1c9f0109846dbd82",
                                        "visible": false,
                                        "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/fe4b37e51076226302ac688d3657dab4?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_pytx_cgcs_4549:gh_kg_lhlx_py_latest_3_0"
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
                                                "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/617c1346f76613a61bf2ad8c8ef4391e",
                                                "visible": false,
                                                "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/fe4b37e51076226302ac688d3657dab4?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_pytx_cgcs_4549:gh_kg_sshx_py_latest_3_0"
                                            },
                                            {
                                                "id": "gh_kg_sshx_ln_latest_3_0",
                                                "layerName": "BKK_SSHX_LN",
                                                "layerType": "SuperMapWMTS",
                                                "caption": "控规_基础设施黄线",
                                                "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/806ff32137a327c4d3bcc962b8cf3eaa",
                                                "visible": false,
                                                "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/fe4b37e51076226302ac688d3657dab4?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_pytx_cgcs_4549:gh_kg_sshx_ln_latest_3_0"
                                            },
                                        ]
                                    },
                                    {
                                        "id": "gh_kg_sxlx_ln_latest_3_0",
                                        "layerName": "BKK_SXLX_LN",
                                        "layerType": "SuperMapWMTS",
                                        "caption": "控规_水系蓝线",
                                        "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/8e01ef7f09326e752c8fc9e74339d4c6",
                                        "visible": false,
                                        "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/fe4b37e51076226302ac688d3657dab4?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_pytx_cgcs_4549:gh_kg_sxlx_ln_latest_3_0"
                                    },
                                    {
                                        "id": "gh_kg_wbzx_py_latest_3_0",
                                        "layerName": "BKK_WBZX_PY",
                                        "layerType": "SuperMapWMTS",
                                        "caption": "控规_文保紫线",
                                        "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/a225fe742881eb296242085a78f25ceb",
                                        "visible": false,
                                        "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/fe4b37e51076226302ac688d3657dab4?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_pytx_cgcs_4549:gh_kg_wbzx_py_latest_3_0"
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
                                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/7ad0d39cc6f4eba1a187e99724d7fb9c",
                                                    "visible": false,
                                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/fe4b37e51076226302ac688d3657dab4?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_pytx_cgcs_4549:gh_kg_dlzx_ln_latest_3_0"
                                                },
                                                {
                                                    "id": "gh_kg_dlbx_ln_latest_3_0",
                                                    "layerName": "BKJ_DLBX_LN",
                                                    "layerType": "SuperMapWMTS",
                                                    "caption": "控规_道路边线",
                                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/6262d5d17fd656cf041217ecf9e7cf4e",
                                                    "visible": false,
                                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/fe4b37e51076226302ac688d3657dab4?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_pytx_cgcs_4549:gh_kg_dlbx_ln_latest_3_0"
                                                },
                                            ]
                                        },
                                        {
                                            "id": "gh_kg_gdx_ln_latest_3_0",
                                            "layerName": "BKJ_GDX_LN",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "控规_轨道线",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/d9f9b00598cc7fc242abd64f694bfe9f",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/fe4b37e51076226302ac688d3657dab4?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_pytx_cgcs_4549:gh_kg_gdx_ln_latest_3_0"
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
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/5a2a4544251788b61f3bb7880557282b",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/fe4b37e51076226302ac688d3657dab4?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_pytx_cgcs_4549:gh_kg_gpss_py_latest_3_0"
                                        },
                                        {
                                            "id": "gh_kg_gpss_pt_latest_3_0",
                                            "layerName": "BKP_GPSS_PT",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "控规_公共配套设施点",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/2dc4b9ac06970dc9b19b07b7728a8e94",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/fe4b37e51076226302ac688d3657dab4?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_pytx_cgcs_4549:gh_kg_gpss_pt_latest_3_0"
                                        },
                                        {
                                            "id": "gh_kg_gpfh_pt_latest_3_0",
                                            "layerName": "BKP_GPFH_PT",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "控规_公共配套设施符号",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/4804dc015aa6836450d04455e7a0024a",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/fe4b37e51076226302ac688d3657dab4?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_pytx_cgcs_4549:gh_kg_gpfh_pt_latest_3_0"
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
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/6e481b1c2be76ecc8ede83e50984d0f5",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/fe4b37e51076226302ac688d3657dab4?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_pytx_cgcs_4549:gh_kg_xmfw_py_latest_3_0"
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
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/ac3af9bd654747d7e946ad2b41d59fc2",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/fe4b37e51076226302ac688d3657dab4?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_pytx_cgcs_4549:gh_tdlyztgh_2017_jsydgzq_py_latest_3_0"
                                },
                                {
                                    "id": "gh_tdlyztgh_2020_jsydgzq_py_latest_3_0",
                                    "layerName": "JSYDGZQ_2020",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "建设用地管制区2020_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/bd4e5006044fb2ea5e893cab1a482f7b",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/fe4b37e51076226302ac688d3657dab4?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_pytx_cgcs_4549:gh_tdlyztgh_2020_jsydgzq_py_latest_3_0"
                                },
                                {
                                    "id": "gh_tdlyztgh_2011_jsydgzq_py_latest_3_0",
                                    "layerName": "TDLYGH_JSYDGZQ_2011",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "建设用地管制区2011",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/c417a8c71181a211e73648bf628bf1c3",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/fe4b37e51076226302ac688d3657dab4?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_pytx_cgcs_4549:gh_tdlyztgh_2011_jsydgzq_py_latest_3_0"
                                },
                                {
                                    "id": "gh_tdlyztgh_2011_ghyt_py_latest_3_0",
                                    "layerName": "TDLYGH_GHYT_2011",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "规划用途2011",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/7e1817bb25ce99ba1f7e61b8f0258f23",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/fe4b37e51076226302ac688d3657dab4?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_pytx_cgcs_4549:gh_tdlyztgh_2011_ghyt_py_latest_3_0"
                                },
                                {
                                    "id": "gh_tdlyztgh_2011_jsydgzbj_ln_latest_3_0",
                                    "layerName": "TDLYGH_JSYDGZQBJ_2011",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "建设用地管制边界2011",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/f21d71758ec253315dbb43d913db9c9b",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/fe4b37e51076226302ac688d3657dab4?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_pytx_cgcs_4549:gh_tdlyztgh_2011_jsydgzbj_ln_latest_3_0"
                                },
                                {
                                    "id": "gh_tdlyztgh_2011_tdghdl_py_latest_3_0",
                                    "layerName": "TDLYGH_TDGHDL_2011",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "土地规划地类2011",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/58c00b33218d07640c5513d3e56439ed",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/fe4b37e51076226302ac688d3657dab4?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_pytx_cgcs_4549:gh_tdlyztgh_2011_tdghdl_py_latest_3_0"
                                },
                                {
                                    "id": "gh_tdlyztgh_2016_jsydgzq_py_latest_3_0",
                                    "layerName": "TDLYGH_JSYDGZQ_2016",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "建设用地管制区2016",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/a3c135fc99971f01392e22e11625b2d0",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/fe4b37e51076226302ac688d3657dab4?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_pytx_cgcs_4549:gh_tdlyztgh_2016_jsydgzq_py_latest_3_0"
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
                                    layerType: "GroupLayer",
                                    name: "DZZHFZGH",
                                    caption: "地质灾害防治规划",
                                    thematicMap: true,
                                    subLayers: [
                                        {
                                            "id": "gh_zxgh_tf2330327_py_latest_3_0",
                                            "layerName": "GH_ZXGH_TF2330327_PY",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "地灾防治区_离线",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/3c36ef8fd88e5b3a6b7dfbf90cedbe89",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/fe4b37e51076226302ac688d3657dab4?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_pytx_cgcs_4549:gh_zxgh_tf2330327_py_latest_3_0"
                                        },
                                        {
                                            "id": "gh_zxgh_tq2330327_py_latest_3_0",
                                            "layerName": "GH_ZXGH_TQ2330327_PY",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "地灾风险区_离线",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/8dca01406ffa3eaa517d53ff0bf8a9bc",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/fe4b37e51076226302ac688d3657dab4?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_pytx_cgcs_4549:gh_zxgh_tq2330327_py_latest_3_0"
                                        },
                                    ]
                                },
                                {
                                    layerType: "GroupLayer",
                                    name: "DZGH",
                                    caption: "地质规划",
                                    thematicMap: true,
                                    subLayers: [
                                        {
                                            "id": "gh_zxgh_dzzhfxpcq_py_latest_3_0",
                                            "layerName": "GH_ZXGH_DZZHFXPCQ_PY",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "地质灾害风险普查区_离线",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/7ad5364aaacf521c446c88e6dc04f8e0",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/fe4b37e51076226302ac688d3657dab4?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_pytx_cgcs_4549:gh_zxgh_dzzhfxpcq_py_latest_3_0"
                                        },
                                        {
                                            "id": "gh_zxgh_dzzhfxpjdc_py_latest_3_0",
                                            "layerName": "GH_ZXGH_DZZHFXPJDC_PY",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "地质灾害风险调查评价区_离线",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/4aefb6ff04285a75101a5bf54d1e3e3f",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/fe4b37e51076226302ac688d3657dab4?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_pytx_cgcs_4549:gh_zxgh_dzzhfxpjdc_py_latest_3_0"
                                        },
                                        {
                                            "id": "gh_zxgh_fxffq_py_latest_3_0",
                                            "layerName": "GH_ZXGH_FXFFQ_PY",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "防范分区_离线",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/84eddd8398685da73ac610cfbc517134",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/fe4b37e51076226302ac688d3657dab4?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_pytx_cgcs_4549:gh_zxgh_fxffq_py_latest_3_0"
                                        },
                                        {
                                            "id": "gh_zxgh_fzcs_pt_latest_3_0",
                                            "layerName": "GH_ZXGH_FZCS_PT",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "防治措施_离线",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/129258d5c693e60d608e5c10c7378046",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/fe4b37e51076226302ac688d3657dab4?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_pytx_cgcs_4549:gh_zxgh_fzcs_pt_latest_3_0"
                                        },
                                        {
                                            "id": "gh_zxgh_gcyz_ln_latest_3_0",
                                            "layerName": "GH_ZXGH_GCYZ_LN",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "工程岩组_离线",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/3b17536088021bc6d23c26b9bfc30f11",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/fe4b37e51076226302ac688d3657dab4?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_pytx_cgcs_4549:gh_zxgh_gcyz_ln_latest_3_0"
                                        },
                                        {
                                            "id": "gh_zxgh_gcyzdh_pt_latest_3_0",
                                            "layerName": "GH_ZXGH_GCYZDH_PT",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "工程岩组代号_离线",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/e6ee88be1966b5511300356ae9aeb87d",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/fe4b37e51076226302ac688d3657dab4?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_pytx_cgcs_4549:gh_zxgh_gcyzdh_pt_latest_3_0"
                                        },
                                        {
                                            "id": "gh_zxgh_gz_ln_latest_3_0",
                                            "layerName": "GH_ZXGH_GZ_LN",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "构造_离线",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/9ac9042f2eb815f9b948745cc2f33b54",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/fe4b37e51076226302ac688d3657dab4?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_pytx_cgcs_4549:gh_zxgh_gz_ln_latest_3_0"
                                        },
                                        {
                                            "id": "gh_zxgh_pyxfxffq_pt_latest_3_0",
                                            "layerName": "GH_ZXGH_PYXFXFFQ_PT",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "平阳县风险防范区_离线",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/7b26ec6355126f964362f2a64f91a5d8",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/fe4b37e51076226302ac688d3657dab4?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_pytx_cgcs_4549:gh_zxgh_pyxfxffq_pt_latest_3_0"
                                        },
                                        {
                                            "id": "gh_zxgh_fxffqjyfq_pt_latest_3_0",
                                            "layerName": "GH_ZXGH_FXFFQJYFQ_PT",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "平阳县地灾易发区_离线",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/b6c599f6ba94b6094ba061898aed17b3",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/fe4b37e51076226302ac688d3657dab4?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_pytx_cgcs_4549:gh_zxgh_fxffqjyfq_pt_latest_3_0"
                                        },
                                        {
                                            "id": "gh_zxgh_yfcdbh_pt_latest_3_0",
                                            "layerName": "GH_ZXGH_YFCDBH_PT",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "易发程度编号_离线",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/0be3d9cfcb6ec93a2f7800c9fa7fb636",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/fe4b37e51076226302ac688d3657dab4?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_pytx_cgcs_4549:gh_zxgh_yfcdbh_pt_latest_3_0"
                                        },
                                        {
                                            "id": "gh_zxgh_yfcdfq_py_latest_3_0",
                                            "layerName": "GH_ZXGH_YFCDFQ_PY",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "易发程度分区_离线",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/e05f3e6d6632dc29f1da127a07311db5",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/fe4b37e51076226302ac688d3657dab4?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_pytx_cgcs_4549:gh_zxgh_yfcdfq_py_latest_3_0"
                                        },
                                        {
                                            "id": "gh_zxgh_yhd_pt_latest_3_0",
                                            "layerName": "GH_ZXGH_YHD_PT",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "隐患点_离线",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/7ab6b15a2e942b7c5182abf20a4c7851",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/fe4b37e51076226302ac688d3657dab4?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_pytx_cgcs_4549:gh_zxgh_yhd_pt_latest_3_0"
                                        },
                                        {
                                            "id": "gh_zxgh_zdc_pt_latest_3_0",
                                            "layerName": "GH_ZXGH_ZDC_PT",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "重点村_离线",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/899bc3d8f9e99e6daa944889af23f4bc",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/fe4b37e51076226302ac688d3657dab4?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_pytx_cgcs_4549:gh_zxgh_zdc_pt_latest_3_0"
                                        },
                                        {
                                            "id": "gh_zxgh_zdxz_py_latest_3_0",
                                            "layerName": "GH_ZXGH_ZDXZ_PY",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "重点乡镇_离线",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/969cc19d5502aeb8fb0a2fef894abf1e",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/fe4b37e51076226302ac688d3657dab4?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_pytx_cgcs_4549:gh_zxgh_zdxz_py_latest_3_0"
                                        },
                                    ]
                                }
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
					name: "GTKJYTGZ",
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
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/16e84798ccd1354927a4ed1f69569e39",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/fe4b37e51076226302ac688d3657dab4?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_pytx_cgcs_4549:xz_dxydzkf_dxydzkfxmhx_py_latest_3_0"
                                },
                            ]
                        },
                        {
                            layerType: "GroupLayer",
                            name: "TDLYZTGHJVTZ",
                            caption: "土地利用总体规划局部调整",
                            thematicMap: true,
                            subLayers: [
                                {
                                    "id": "gl_gtkjytgzhkfly_ghjbtzl_py_latest_3_0",
                                    "layerName": "GHJT_GHJBTZ_L",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "规划局部调整L_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/74c80e56f431eda95a189d39cf60a419",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/fe4b37e51076226302ac688d3657dab4?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_pytx_cgcs_4549:gl_gtkjytgzhkfly_ghjbtzl_py_latest_3_0"
                                },
                                {
                                    "id": "gl_gtkjytgzhkfly_ghjbtzx_py_latest_3_0",
                                    "layerName": "GHJT_GHJBTZ_X",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "规划局部调整X_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/4a626ee90464b16446793dedd98a266a",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/fe4b37e51076226302ac688d3657dab4?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_pytx_cgcs_4549:gl_gtkjytgzhkfly_ghjbtzx_py_latest_3_0"
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
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/daa00cf661cf2c05500a98a7dc3dd0ab",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/fe4b37e51076226302ac688d3657dab4?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_pytx_cgcs_4549:gl_nzybp_jsydbpl_py_latest_3_0"
                                },
                                {
                                    "id": "gl_nzybp_jsydbpx_py_latest_3_0",
                                    "layerName": "JSYDBP_NZYDK_X",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "建设用地报批（农转用地块）X_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/f9c1ff6c1298d0ce51a8dace9e12f9de",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/fe4b37e51076226302ac688d3657dab4?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_pytx_cgcs_4549:gl_nzybp_jsydbpx_py_latest_3_0"
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
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/f4249c61aa3b5896d6608036296a2237",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/fe4b37e51076226302ac688d3657dab4?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_pytx_cgcs_4549:gl_gtkjytgzhkfly_jsydys_py_latest_3_0"
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
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/a73e1cb2e3257f5110fd32c2874e4f27",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/fe4b37e51076226302ac688d3657dab4?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_pytx_cgcs_4549:gl_ssnydba_bhjbnt_py_latest_3_0"
                                },
                                {
                                    "id": "gl_ssnydba_phgzcfw_py_latest_3_0",
                                    "layerName": "SSNYD_GZCPHJZD",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "破坏耕作层范围_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/d715593207e7c7bdde4fea5eee1076ad",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/fe4b37e51076226302ac688d3657dab4?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_pytx_cgcs_4549:gl_ssnydba_phgzcfw_py_latest_3_0"
                                },
                                {
                                    "id": "gl_ssnydba_nydfw_py_latest_3_0",
                                    "layerName": "SSNYD_NYDJZD",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "农用地范围_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/673244ebe0f377cec94d60ebcb825638",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/fe4b37e51076226302ac688d3657dab4?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_pytx_cgcs_4549:gl_ssnydba_nydfw_py_latest_3_0"
                                },
                                {
                                    "id": "gl_ssnydba_phynfw_py_latest_3_0",
                                    "layerName": "SSNYD_PHYNJZD",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "破坏永农范围_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/92144020ceda9057a386f874b593b699",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/fe4b37e51076226302ac688d3657dab4?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_pytx_cgcs_4549:gl_ssnydba_phynfw_py_latest_3_0"
                                },
                                {
                                    "id": "gl_ssnydba_zyynfw_py_latest_3_0",
                                    "layerName": "SSNYD_ZYYNJZD",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "占用永农范围_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/ad38d2aedf783e984a2a6e532b773c6f",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/fe4b37e51076226302ac688d3657dab4?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_pytx_cgcs_4549:gl_ssnydba_zyynfw_py_latest_3_0"
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
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/54783ec9a936f23df2f912120e467cf6",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/fe4b37e51076226302ac688d3657dab4?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_pytx_cgcs_4549:gl_tdcb_tdcb_py_latest_3_0"
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
                                    "layerName": "TDGY_GDDK_X",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "供地地块_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/48c5441faa6b1d2b3d1da802f88c757f",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/fe4b37e51076226302ac688d3657dab4?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_pytx_cgcs_4549:gl_tdgy_gddk_py_latest_3_0"
                                },
                                {
                                    "id": "gl_tdgy_zpgcrdk_py_latest_3_0",
                                    "layerName": "TDGY_TDJY_ZPGCR",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "土地交易-招拍挂出让地块_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/34c367017d042c2c16aa32cd282bf8c3",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/fe4b37e51076226302ac688d3657dab4?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_pytx_cgcs_4549:gl_tdgy_zpgcrdk_py_latest_3_0"
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
                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/ef7a0065bf7be04d50c14be03473ccfd",
                            "visible": false,
                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/fe4b37e51076226302ac688d3657dab4?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_pytx_cgcs_4549:gl_tdzz_gbzjsdk_lx_py_latest_3_0"
                        },
                        {
                            "id": "gl_tdzz_gbzjsdk_ys_py_latest_3_0",
                            "layerName": "TDZZ_GBZJS_YS_X",
                            "layerType": "SuperMapWMTS",
                            "caption": "高标准建设地块-验收_省级下发",
                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/ac7f9a25a9e16d65dbc6af9b7f64d0ba",
                            "visible": false,
                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/fe4b37e51076226302ac688d3657dab4?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_pytx_cgcs_4549:gl_tdzz_gbzjsdk_ys_py_latest_3_0"
                        },
                        {
                            "id": "gl_tdzz_gbztsdk_lx_py_latest_3_0",
                            "layerName": "TDZZ_GBZTS_LX_X",
                            "layerType": "SuperMapWMTS",
                            "caption": "高标准提升地块-立项_省级下发",
                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/f2d945ec64237475f00961aebcf58586",
                            "visible": false,
                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/fe4b37e51076226302ac688d3657dab4?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_pytx_cgcs_4549:gl_tdzz_gbztsdk_lx_py_latest_3_0"
                        },
                        {
                            "id": "gl_tdzz_gbztsdk_ys_py_latest_3_0",
                            "layerName": "TDZZ_GBZTS_YS_X",
                            "layerType": "SuperMapWMTS",
                            "caption": "高标准提升地块-验收_省级下发",
                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/07aff3038dd864ea820933e5d961a074",
                            "visible": false,
                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/fe4b37e51076226302ac688d3657dab4?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_pytx_cgcs_4549:gl_tdzz_gbztsdk_ys_py_latest_3_0"
                        },
                        {
                            "id": "gl_tdzz_jsydfkdk_lx_py_latest_3_0",
                            "layerName": "TDZZ_JSYDFK_LX_",
                            "layerType": "SuperMapWMTS",
                            "caption": "建设用地复垦地块-立项_省级下发",
                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/05a40d89e0dc89c851d6cb8b7c5f1997",
                            "visible": false,
                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/fe4b37e51076226302ac688d3657dab4?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_pytx_cgcs_4549:gl_tdzz_jsydfkdk_lx_py_latest_3_0"
                        },
                        {
                            "id": "gl_jdzz_jsydfkdk_ys_py_latest_3_0",
                            "layerName": "TDZZ_JSYDFK_YS_",
                            "layerType": "SuperMapWMTS",
                            "caption": "建设用地复垦地块-验收_省级下发",
                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/39d4b929d0bf795a726f64b58214f550",
                            "visible": false,
                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/fe4b37e51076226302ac688d3657dab4?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_pytx_cgcs_4549:gl_jdzz_jsydfkdk_ys_py_latest_3_0"
                        },
                        {
                            "id": "gl_tdzz_kzgd_lx_py_latest_3_0",
                            "layerName": "TDZZ_KZGD_LX_X",
                            "layerType": "SuperMapWMTS",
                            "caption": "垦造耕地-立项_省级下发",
                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/0988af67afc08d0a49ac3b77db6b083f",
                            "visible": false,
                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/fe4b37e51076226302ac688d3657dab4?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_pytx_cgcs_4549:gl_tdzz_kzgd_lx_py_latest_3_0"
                        },
                        {
                            "id": "gl_tdzz_kzgd_ys_py_latest_3_0",
                            "layerName": "TDZZ_KZGD_YS_X",
                            "layerType": "SuperMapWMTS",
                            "caption": "垦造耕地-验收_省级下发",
                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/cc1ce63331ed66a0f0172f9ae2e2c38c",
                            "visible": false,
                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/fe4b37e51076226302ac688d3657dab4?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_pytx_cgcs_4549:gl_tdzz_kzgd_ys_py_latest_3_0"
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
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/0623610c16a1eaddf0474f98ef387b3b",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/fe4b37e51076226302ac688d3657dab4?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_pytx_cgcs_4549:gl_zjgg_cjdkl_py_latest_3_0"
                                },
                                {
                                    "id": "gl_zjgg_jxdkl_py_latest_3_0",
                                    "layerName": "NCTDZHZZ_JXDK_L",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "建新地块L_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/5863ee9c5b48deca6f627a9139627b78",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/fe4b37e51076226302ac688d3657dab4?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_pytx_cgcs_4549:gl_zjgg_jxdkl_py_latest_3_0"
                                },
                                {
                                    "id": "gl_zjgg_jxdkx_py_latest_3_0",
                                    "layerName": "NCTDZHZZ_JXDK_X",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "建新地块X_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/41fd36f0184442aa2ef2997a7bbeedfa",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/fe4b37e51076226302ac688d3657dab4?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_pytx_cgcs_4549:gl_zjgg_jxdkx_py_latest_3_0"
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
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/ff0a2d9fd4ebf78f6e9c24d9863bb3f0",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/fe4b37e51076226302ac688d3657dab4?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_pytx_cgcs_4549:gl_tzgzdk_gdzlts_lx_py_latest_3_0"
                                },
                                {
                                    "id": "gl_tzgzdk_gdzlts_ys_py_latest_3_0",
                                    "layerName": "TDZZ_GDZLTS_YS",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "耕地质量提升-验收_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/3ae648775efe7e58339b95093233eddd",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/fe4b37e51076226302ac688d3657dab4?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_pytx_cgcs_4549:gl_tzgzdk_gdzlts_ys_py_latest_3_0"
                                },
                                {
                                    "id": "gl_tzgzdk_hgsdk_lx_py_latest_3_0",
                                    "layerName": "TDZZ_HGSDK_LX_X",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "旱改水地块-立项_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/401b2569d8a07a64f3e4023e5dab75e6",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/fe4b37e51076226302ac688d3657dab4?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_pytx_cgcs_4549:gl_tzgzdk_hgsdk_lx_py_latest_3_0"
                                },
                                {
                                    "id": "gl_tzgzdk_hgsdk_ys_py_latest_3_0",
                                    "layerName": "TDZZ_HGSDK_YS_X",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "旱改水地块-验收_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/41b3027e3788b5c21374c20759380bf8",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/fe4b37e51076226302ac688d3657dab4?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_pytx_cgcs_4549:gl_tzgzdk_hgsdk_ys_py_latest_3_0"
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
                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/c2f9da25188e05e5c4f94a4c0ba02aa7",
                            "visible": false,
                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/fe4b37e51076226302ac688d3657dab4?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_pytx_cgcs_4549:gl_ksgl_lsks_py_latest_3_0"
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
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/bec30656eac58f16291bf08c7c26bd39",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/fe4b37e51076226302ac688d3657dab4?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_pytx_cgcs_4549:gl_ckq_ckqdj_py_latest_3_0"
                                },
                                {
                                    "id": "gl_ckq_hdkqfw_py_latest_3_0",
                                    "layerName": "CKQ_HDKQFW",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "划定矿区范围_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/c3d157bcf2c212e4bd217ea551bb6932",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/fe4b37e51076226302ac688d3657dab4?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_pytx_cgcs_4549:gl_ckq_hdkqfw_py_latest_3_0"
                                },
                                {
                                    "id": "gl_ckq_ckqdj_ls_py_latest_3_0",
                                    "layerName": "CKQDJ_LSX",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "采矿权登记-历史_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/9c50d4ef7eca81218627809ccda224fc",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/fe4b37e51076226302ac688d3657dab4?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_pytx_cgcs_4549:gl_ckq_ckqdj_ls_py_latest_3_0"
                                },
                            ]
                        },
                        {
                            layerType: "GroupLayer",
                            name: "CXDJ",
                            caption: "储量登记",
                            thematicMap: true,
                            subLayers: [
                                {
                                    "id": "gl_cldj_cmdj_py_latest_3_0",
                                    "layerName": "CLDJ_CMDJ_X",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "查明登记_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/13b51fdb8e1befc398941d80311991d3",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/fe4b37e51076226302ac688d3657dab4?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_pytx_cgcs_4549:gl_cldj_cmdj_py_latest_3_0"
                                },
                                {
                                    "id": "gl_cldj_drkqsdj_py_latest_3_0",
                                    "layerName": "CLDJ_DRKQS",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "地热矿泉水登记_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/8bfc5518aacb3a21b028e4930e454e46",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/fe4b37e51076226302ac688d3657dab4?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_pytx_cgcs_4549:gl_cldj_drkqsdj_py_latest_3_0"
                                },
                                {
                                    "id": "gl_cldj_jsydyf_py_latest_3_0",
                                    "layerName": "CLDJ_JSYDYF_X",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "建设用地压覆_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/e730223fa5c531462bcedc1f17b4fab9",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/fe4b37e51076226302ac688d3657dab4?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_pytx_cgcs_4549:gl_cldj_jsydyf_py_latest_3_0"
                                },
                                {
                                    "id": "gl_cldj_yfdj_py_latest_3_0",
                                    "layerName": "CLDJ_YFDJ_X",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "压覆登记_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/92a5f561b8b733a84d7c73f39ba42f9d",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/fe4b37e51076226302ac688d3657dab4?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_pytx_cgcs_4549:gl_cldj_yfdj_py_latest_3_0"
                                },
                                {
                                    "id": "gl_cldj_zydj_pt_latest_3_0",
                                    "layerName": "CLDJ_ZYDJ_X",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "占用登记_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/86a3a52c05892cb970271e62277249ab",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/fe4b37e51076226302ac688d3657dab4?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_pytx_cgcs_4549:gl_cldj_zydj_pt_latest_3_0"
                                },
                            ]
                        },
                        {
                            layerType: "GroupLayer",
                            name: "CXDJ",
                            caption: "探矿权",
                            thematicMap: true,
                            subLayers: [
                                {
                                    "id": "gl_tkq_tkqdzdc_py_latest_3_0",
                                    "layerName": "TKQ_DZDC_X",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "探矿权地质调查_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/798745908840616194a9ab2f6bc65c73",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/fe4b37e51076226302ac688d3657dab4?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_pytx_cgcs_4549:gl_tkq_tkqdzdc_py_latest_3_0"
                                },
                                {
                                    "id": "gl_tkq_tkqkcdj_ls_py_latest_3_0",
                                    "layerName": "TKQ_KCDJ_LSX",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "探矿权勘查登记_历史_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/8ded6b173626604fa4dd691508216bea",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/fe4b37e51076226302ac688d3657dab4?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_pytx_cgcs_4549:gl_tkq_tkqkcdj_ls_py_latest_3_0"
                                },
                                {
                                    "id": "gl_tkq_tkqkcdj_py_latest_3_0",
                                    "layerName": "TKQ_KCDJ_X",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "探矿权勘查登记_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/45e0fbf61f943c9823c7a7e3f7a4700b",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/fe4b37e51076226302ac688d3657dab4?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_pytx_cgcs_4549:gl_tkq_tkqkcdj_py_latest_3_0"
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
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/46ccbcd1e378ad17b3f56cf32ddb7360",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/fe4b37e51076226302ac688d3657dab4?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_pytx_cgcs_4549:gl_stxf_fqks_py_latest_3_0"
                                },
                                {
                                    "id": "gl_fqks_ksstxf_pt_latest_3_0",
                                    "layerName": "KS",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "矿山生态修复_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/d5c86b6b131b3ddc23c585381f1139c3",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/fe4b37e51076226302ac688d3657dab4?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_pytx_cgcs_4549:gl_fqks_ksstxf_pt_latest_3_0"
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
                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/334ab2e3b6be2c8f2ccfab44a6d2e785",
                            "visible": false,
                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/fe4b37e51076226302ac688d3657dab4?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_pytx_cgcs_4549:gl_wtzz_dpfwtzz_pt_latest_3_0"
                        },
                        {
                            "id": "gl_wtzz_ssnydzz_pt_latest_3_0",
                            "layerName": "WTZZ_SSNYDZZX",
                            "layerType": "SuperMapWMTS",
                            "caption": "设施农用地整治_省级下发",
                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/96c69a8741e5fa77ed845e032d6e9fe9",
                            "visible": false,
                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/fe4b37e51076226302ac688d3657dab4?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_pytx_cgcs_4549:gl_wtzz_ssnydzz_pt_latest_3_0"
                        },
                        {
                            layerType: "GroupLayer",
                            name: "WPJCTBWFTB",
                            caption: "卫片监测图斑违法图斑",
                            thematicMap: true,
                            subLayers: [
                                {
                                    "id": "gl_phjg_2020_wftb_py_latest_3_0",
                                    "layerName": "GL_PHJG_2020_WFTB_PY",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "违法图斑2019_离线",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/0728be604b3ae8b31d5622b790dd3bdb",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/fe4b37e51076226302ac688d3657dab4?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_pytx_cgcs_4549:gl_phjg_2020_wftb_py_latest_3_0"
                                },
                            ]
                        },
                        {
                            layerType: "GroupLayer",
                            name: "PEWG",
                            caption: "批而未供",
                            thematicMap: true,
                            subLayers: [
                                {
                                    "id": "gl_phjg_2009_2020_pewg_py_latest_3_0",
                                    "layerName": "GL_PHJG_2009_2020_PEWG_PY",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "批而未供09_20_离线",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/742160f03c3902d62fe90490e1559b9c",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/fe4b37e51076226302ac688d3657dab4?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_pytx_cgcs_4549:gl_phjg_2009_2020_pewg_py_latest_3_0"
                                },
                            ]
                        }
                    ]
                }
             
            ]
        }
    ]

});

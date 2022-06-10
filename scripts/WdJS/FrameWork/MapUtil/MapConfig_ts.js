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
                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/2ceb6d87d59c1075e62f8826dbba052d",
                            "visible": false,
                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/40110a793a16af450bf54167c8eb89e0?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_tstx_cgcs_4549:xz_dxydzxdc_2019_dxdcdytb_py_latest_3_0"
                        },
                        {
                            "id": "xz_dxydzxdc_2019_dxdcqtb_py_latest_3_0",
                            "layerName": "DCQTB_2019",
                            "layerType": "SuperMapWMTS",
                            "caption": "低效调查区图斑2019_省级下发",
                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/d52cce06de3c20e4ceddf7e01d92d851",
                            "visible": false,
                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/40110a793a16af450bf54167c8eb89e0?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_tstx_cgcs_4549:xz_dxydzxdc_2019_dxdcqtb_py_latest_3_0"
                        },
                        {
                            "id": "xz_dxydzxdc_2020_dxdcdytb_py_latest_3_0",
                            "layerName": "DCDYTB_2020",
                            "layerType": "SuperMapWMTS",
                            "caption": "低效调查单元图斑2020_省级下发",
                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/e63a20388f8888e3019c353a0e6ecd22",
                            "visible": false,
                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/40110a793a16af450bf54167c8eb89e0?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_tstx_cgcs_4549:xz_dxydzxdc_2020_dxdcdytb_py_latest_3_0"
                        },
                        {
                            "id": "xz_dxydzxdc_2020_dxdcqtb_py_latest_3_0",
                            "layerName": "DCQTB_2020",
                            "layerType": "SuperMapWMTS",
                            "caption": "低效调查区图斑2020_省级下发",
                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/c9ba4fe2097938447f822bef9d7b0f3f",
                            "visible": false,
                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/40110a793a16af450bf54167c8eb89e0?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_tstx_cgcs_4549:xz_dxydzxdc_2020_dxdcqtb_py_latest_3_0"
                        },
                        {
                            layerType: "GroupLayer",
                            name: "BZNT",
                            caption: "标准农田",
                            thematicMap: true,
                            subLayers: [
                                {
                                    "id": "xz_tdzy_2011_bznt_py_latest_3_0",
                                    "layerName": "BZNT_BZNT_2011",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "标准农田2011",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/c79307be2739d551f9ed6860cbe6076a",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/40110a793a16af450bf54167c8eb89e0?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_tstx_cgcs_4549:xz_tdzy_2011_bznt_py_latest_3_0"
                                },
                                {
                                    "id": "xz_tdzy_2017_bznt_py_latest_3_0",
                                    "layerName": "BZNT_BZNT_2017",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "标准农田2017",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/ca4a6c8689ef2a8f7bfc1c518933a6cd",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/40110a793a16af450bf54167c8eb89e0?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_tstx_cgcs_4549:xz_tdzy_2017_bznt_py_latest_3_0"
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
                                    "id": "xz_yjjbnt_2012_gbzjbnt_2018_py_latest_3_0",
                                    "layerName": "GBZJBNT_2018",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "高标准基本农田2018",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/b326718a0caa93d43193888a8ad8001b",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/40110a793a16af450bf54167c8eb89e0?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_tstx_cgcs_4549:xz_yjjbnt_2012_gbzjbnt_2018_py_latest_3_0"
                                },
                                {
                                    "id": "xz_yjjbnt_yjjbntbhtb_py_latest_3_0",
                                    "layerName": "XZ_YJJBNT_YJJBNTBHTB_PY",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "永久基本农田保护图斑_离线",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/9bcd47a006201cebf7710a8193ae696f",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/40110a793a16af450bf54167c8eb89e0?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_tstx_cgcs_4549:xz_yjjbnt_yjjbntbhtb_py_latest_3_0"
                                },
                                {
                                    "id": "xz_yjjbnt_jbnthrhc_py_latest_3_0",
                                    "layerName": "XZ_YJJBNT_JBNTHRHC_PY",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "基本农田划入划出_离线",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/686b3f82441935183ce169685f137308",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/40110a793a16af450bf54167c8eb89e0?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_tstx_cgcs_4549:xz_yjjbnt_jbnthrhc_py_latest_3_0"
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
                                            "id": "xz_tdbg_2010_dltb_py_latest_3_0",
                                            "layerName": "TDLYXZ_DLTB_2010",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "地类图斑2010",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/d54af86ff3ac813312c8bcf2ef17ccb4",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/40110a793a16af450bf54167c8eb89e0?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_tstx_cgcs_4549:xz_tdbg_2010_dltb_py_latest_3_0"
                                        },
                                        {
                                            "id": "xz_tdbg_2010_lxdw_pt_latest_3_0",
                                            "layerName": "TDLYXZ_LXDW_2010",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "零星地物2010",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/f80ea870aef2383e7e54f48e6e20399f",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/40110a793a16af450bf54167c8eb89e0?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_tstx_cgcs_4549:xz_tdbg_2010_lxdw_pt_latest_3_0"
                                        },
                                        {
                                            "id": "xz_tdbg_2010_xzdw_ln_latest_3_0",
                                            "layerName": "TDLYXZ_XZDW_2010",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "线状地物2010",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/11f7d78c7149f14417f796f6238dd4a5",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/40110a793a16af450bf54167c8eb89e0?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_tstx_cgcs_4549:xz_tdbg_2010_xzdw_ln_latest_3_0"
                                        },
                                        {
                                            "id": "xz_tdbg_2011_dltb_py_latest_3_0",
                                            "layerName": "TDLYXZ_DLTB_2011",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "地类图斑2011",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/a8fc09097739513edcf1f46372ec9cf2",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/40110a793a16af450bf54167c8eb89e0?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_tstx_cgcs_4549:xz_tdbg_2011_dltb_py_latest_3_0"
                                        },
                                        {
                                            "id": "xz_tdbg_2011_lxdw_pt_latest_3_0",
                                            "layerName": "TDLYXZ_LXDW_2011",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "零星地物2011",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/3c3ea00771798d363c1a4ba0867bc21b",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/40110a793a16af450bf54167c8eb89e0?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_tstx_cgcs_4549:xz_tdbg_2011_lxdw_pt_latest_3_0"
                                        },
                                        {
                                            "id": "xz_tdbg_2011_xzdw_ln_latest_3_0",
                                            "layerName": "TDLYXZ_XZDW_2011",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "线状地物2011",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/59cd4b7fdfa41cab26882e3ca24f5c59",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/40110a793a16af450bf54167c8eb89e0?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_tstx_cgcs_4549:xz_tdbg_2011_xzdw_ln_latest_3_0"
                                        },
                                        {
                                            "id": "xz_tdbg_2012_dltb_py_latest_3_0",
                                            "layerName": "TDLYXZ_DLTB_2012",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "地类图斑2012",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/6ad619d05d19816d64907633919d5059",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/40110a793a16af450bf54167c8eb89e0?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_tstx_cgcs_4549:xz_tdbg_2012_dltb_py_latest_3_0"
                                        },
                                        {
                                            "id": "xz_tdbg_2012_lxdw_pt_latest_3_0",
                                            "layerName": "TDLYXZ_LXDW_2012",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "零星地物2012",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/49a9998dbd940700df21695d9739d152",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/40110a793a16af450bf54167c8eb89e0?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_tstx_cgcs_4549:xz_tdbg_2012_lxdw_pt_latest_3_0"
                                        },
                                        {
                                            "id": "xz_tdbg_2012_xzdw_ln_latest_3_0",
                                            "layerName": "TDLYXZ_XZDW_2012",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "线状地物2012",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/a3b91bfbc5b9740ab300191eb25840a2",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/40110a793a16af450bf54167c8eb89e0?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_tstx_cgcs_4549:xz_tdbg_2012_xzdw_ln_latest_3_0"
                                        },
                                        {
                                            "id": "xz_tdbg_2013_dltb_py_latest_3_0",
                                            "layerName": "TDLYXZ_DLTB_2013",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "地类图斑2013",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/f47514ad26852b23349f56ff94820c82",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/40110a793a16af450bf54167c8eb89e0?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_tstx_cgcs_4549:xz_tdbg_2013_dltb_py_latest_3_0"
                                        },
                                        {
                                            "id": "xz_tdbg_2013_lxdw_pt_latest_3_0",
                                            "layerName": "TDLYXZ_LXDW_2013",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "零星地物2013",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/01ee0106868722c6b653cec447334fb3",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/40110a793a16af450bf54167c8eb89e0?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_tstx_cgcs_4549:xz_tdbg_2013_lxdw_pt_latest_3_0"
                                        },
                                        {
                                            "id": "xz_tdbg_2013_xzdw_ln_latest_3_0",
                                            "layerName": "TDLYXZ_XZDW_2013",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "线状地物2013",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/79c94d7c100cf03eed50bcc39724ab5b",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/40110a793a16af450bf54167c8eb89e0?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_tstx_cgcs_4549:xz_tdbg_2013_xzdw_ln_latest_3_0"
                                        },
                                        {
                                            "id": "xz_tdbg_2014_dltb_py_latest_3_0",
                                            "layerName": "TDLYXZ_DLTB_2014",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "地类图斑2014",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/a3c31d1cb872b4cd0bb99e6029ebf1f4",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/40110a793a16af450bf54167c8eb89e0?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_tstx_cgcs_4549:xz_tdbg_2014_dltb_py_latest_3_0"
                                        },
                                        {
                                            "id": "xz_tdbg_2014_lxdw_pt_latest_3_0",
                                            "layerName": "TDLYXZ_LXDW_2014",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "零星地物2014",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/93bc1ffc6adfa938d9417b5d80600636",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/40110a793a16af450bf54167c8eb89e0?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_tstx_cgcs_4549:xz_tdbg_2014_lxdw_pt_latest_3_0"
                                        },
                                        {
                                            "id": "xz_tdbg_2014_xzdw_ln_latest_3_0",
                                            "layerName": "TDLYXZ_XZDW_2014",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "线状地物2014",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/db54520c965a200322eb7f694b58ab8b",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/40110a793a16af450bf54167c8eb89e0?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_tstx_cgcs_4549:xz_tdbg_2014_xzdw_ln_latest_3_0"
                                        },
                                        {
                                            "id": "xz_tdbg_2015_dltb_py_latest_3_0",
                                            "layerName": "TDLYXZ_DLTB_2015",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "地类图斑2015",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/f78cea980437cd37872efc8c5a6a33e7",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/40110a793a16af450bf54167c8eb89e0?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_tstx_cgcs_4549:xz_tdbg_2015_dltb_py_latest_3_0"
                                        },
                                        {
                                            "id": "xz_tdbg_2015_lxdw_pt_latest_3_0",
                                            "layerName": "TDLYXZ_LXDW_2015",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "零星地物2015",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/fefa3d68cc115946b133ea0fe1961231",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/40110a793a16af450bf54167c8eb89e0?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_tstx_cgcs_4549:xz_tdbg_2015_lxdw_pt_latest_3_0"
                                        },
                                        {
                                            "id": "xz_tdbg_2015_xzdw_ln_latest_3_0",
                                            "layerName": "TDLYXZ_XZDW_2015",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "线状地物2015",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/52dfad6182d6c15c84b87138de9d762a",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/40110a793a16af450bf54167c8eb89e0?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_tstx_cgcs_4549:xz_tdbg_2015_xzdw_ln_latest_3_0"
                                        },
                                        {
                                            "id": "xz_tdbg_2016_dltb_py_latest_3_0",
                                            "layerName": "TDLYXZ_DLTB_2016",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "地类图斑2016",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/ced4bbff1013873ef733c4586a6233d3",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/40110a793a16af450bf54167c8eb89e0?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_tstx_cgcs_4549:xz_tdbg_2016_dltb_py_latest_3_0"
                                        },
                                        {
                                            "id": "xz_tdbg_2016_lxdw_pt_latest_3_0",
                                            "layerName": "TDLYXZ_LXDW_2016",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "零星地物2016",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/450fc8547f6001c2ac7565f89950500e",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/40110a793a16af450bf54167c8eb89e0?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_tstx_cgcs_4549:xz_tdbg_2016_lxdw_pt_latest_3_0"
                                        },
                                        {
                                            "id": "xz_tdbg_2016_xzdw_ln_latest_3_0",
                                            "layerName": "TDLYXZ_XZDW_2016",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "线状地物2016",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/60b6231f1bb65edf3353eb864ee96cfe",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/40110a793a16af450bf54167c8eb89e0?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_tstx_cgcs_4549:xz_tdbg_2016_xzdw_ln_latest_3_0"
                                        },
                                        {
                                            "id": "xz_tdbg_2017_dltb_py_latest_3_0",
                                            "layerName": "TDLYXZ_DLTB_2017",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "地类图斑2017",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/c7ae33346abf8b738e0c45605c36e2b4",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/40110a793a16af450bf54167c8eb89e0?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_tstx_cgcs_4549:xz_tdbg_2017_dltb_py_latest_3_0"
                                        },
                                        {
                                            "id": "xz_tdbg_2017_lxdw_pt_latest_3_0",
                                            "layerName": "TDLYXZ_LXDW_2017",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "零星地物2017",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/24ecfe1d67a5a6781bd25095fe2e228d",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/40110a793a16af450bf54167c8eb89e0?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_tstx_cgcs_4549:xz_tdbg_2017_lxdw_pt_latest_3_0"
                                        },
                                        {
                                            "id": "xz_tdbg_2017_xzdw_ln_latest_3_0",
                                            "layerName": "TDLYXZ_XZDW_2017",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "线状地物2017",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/ee43b4723cebc49ad519f2f81692498c",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/40110a793a16af450bf54167c8eb89e0?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_tstx_cgcs_4549:xz_tdbg_2017_xzdw_ln_latest_3_0"
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
                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/92faa334468f0524e04f2be21c5cdcc2",
                            "visible": false,
                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/40110a793a16af450bf54167c8eb89e0?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_tstx_cgcs_4549:xz_slzy_xjejdcslzy_py_latest_3_0"
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
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/a4075ddd9742707ea4173d7c9b9553c9",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/40110a793a16af450bf54167c8eb89e0?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_tstx_cgcs_4549:xz_slzy_2018_gjjgyl_py_latest_3_0"
                                },
                                {
                                    "id": "xz_slzy_2018_sjstgyl_py_latest_3_0",
                                    "layerName": "SJSTGYL_2018",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "省级生态公益林2018_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/4f7e1ced316104080527f88a0a84a685",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/40110a793a16af450bf54167c8eb89e0?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_tstx_cgcs_4549:xz_slzy_2018_sjstgyl_py_latest_3_0"
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
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/28303937db55b6ae48f434f007d30b3c",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/40110a793a16af450bf54167c8eb89e0?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_tstx_cgcs_4549:xz_slzy_2018_sydbhq_py_latest_3_0"
                                },
                                {
                                    "id": "xz_slzy_2020_zrbhd_py_latest_3_0",
                                    "layerName": "ZRBHD_2020",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "自然保护地2020_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/60bffc4aef2b3d6324f36466a15ed908",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/40110a793a16af450bf54167c8eb89e0?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_tstx_cgcs_4549:xz_slzy_2020_zrbhd_py_latest_3_0"
                                },
                            ]
                        },
                        // 森林资源一张图
                        {
                            layerType: "GroupLayer",
                            name: "SLZYYZT",
                            caption: "森林资源一张图",
                            thematicMap: true,
                            subLayers: [
                                {
                                    "id": "xz_slzy_2017_slzyyzt_py_latest_3_0",
                                    "layerName": "XZ_SLZY_2017_SLZYYZT_PY",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "森林资源一张图2017_离线",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/89d4cc5be3cc94cc618d37d7f95b572a",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/40110a793a16af450bf54167c8eb89e0?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_tstx_cgcs_4549:xz_slzy_2017_slzyyzt_py_latest_3_0"
                                },
                                {
                                    "id": "xz_slzy_2018_slzyyzt_py_latest_3_0",
                                    "layerName": "XZ_SLZY_2018_SLZYYZT_PY",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "森林资源一张图2018_离线",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/451ac10b77d642b371611110dcb48206",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/40110a793a16af450bf54167c8eb89e0?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_tstx_cgcs_4549:xz_slzy_2018_slzyyzt_py_latest_3_0"
                                },
                                {
                                    "id": "xz_slzy_2019_slzyyzt_py_latest_3_0",
                                    "layerName": "XZ_SLZY_2019_SLZYYZT_PY",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "森林资源一张图2019_离线",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/cc8f9d43fcd693c16aeed871d26ae030",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/40110a793a16af450bf54167c8eb89e0?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_tstx_cgcs_4549:xz_slzy_2019_slzyyzt_py_latest_3_0"
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
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/08c02958dcec94a50c6b2d34e82f347a",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/40110a793a16af450bf54167c8eb89e0?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_tstx_cgcs_4549:xz_sdzy_2018_gjzysd_pt_latest_3_0"
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
                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/19f1449ee84da4e8292f7561b5348d51",
                            "visible": false,
                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/40110a793a16af450bf54167c8eb89e0?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_tstx_cgcs_4549:xz_dzsj_dzyjbhq_pt_latest_3_0"
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
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/d13767b0a026e1f4d8fe240c00bbf7a7",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/40110a793a16af450bf54167c8eb89e0?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_tstx_cgcs_4549:xz_dzzh_yhd_pt_latest_3_0"
                                },
                                {
                                    "id": "xz_dzzh_zqd_pt_latest_3_0",
                                    "layerName": "ZXQD_ZQD_X",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "灾情点_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/6c67002d935f6209b96041ba822bdc4b",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/40110a793a16af450bf54167c8eb89e0?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_tstx_cgcs_4549:xz_dzzh_zqd_pt_latest_3_0"
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
                                    "layerName": "STBHHX_2018",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "生态保护红线2018_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/a64e93966ccf349f8bc8357aa4c56c0e",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/40110a793a16af450bf54167c8eb89e0?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_tstx_cgcs_4549:gh_zykzx_2018_stbhhx_py_latest_3_0"
                                },
                                {
                                    "id": "gh_zykzx_2020_yjjbntbhhx_py_latest_3_0",
                                    "layerName": "YJJBNTHX_2020",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "永久基本农田保护红线2020_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/0a46315af45fba63a25601afa7f4cd41",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/40110a793a16af450bf54167c8eb89e0?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_tstx_cgcs_4549:gh_zykzx_2020_yjjbntbhhx_py_latest_3_0"
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
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/c4879159def0a96201156e66c3534b73",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/40110a793a16af450bf54167c8eb89e0?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_tstx_cgcs_4549:gh_kg_ydgh_py_latest_3_0"
                                        },
                                        {
                                            "id": "gh_kg_dkfh_pt_latest_3_0",
                                            "layerName": "BKY_DKFH_PT",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "控规_地块符号",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/a98b82be8200434aff06209e6c3224ed",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/40110a793a16af450bf54167c8eb89e0?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_tstx_cgcs_4549:gh_kg_dkfh_pt_latest_3_0"
                                        },
                                        {
                                            "id": "gh_kg_dkbh_ap_latest_3_0",
                                            "layerName": "BKY_DKBH_AP",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "控规_地块编号",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/d5849498bd25ef6e1485df0160b4f292",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/40110a793a16af450bf54167c8eb89e0?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_tstx_cgcs_4549:gh_kg_dkbh_ap_latest_3_0"
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
                                        "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/5429583795217cbf7aafd874806042fd",
                                        "visible": false,
                                        "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/40110a793a16af450bf54167c8eb89e0?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_tstx_cgcs_4549:gh_kg_lhlx_py_latest_3_0"
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
                                                "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/5920bfc481c5e95e5aa24ae1b74a68da",
                                                "visible": false,
                                                "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/40110a793a16af450bf54167c8eb89e0?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_tstx_cgcs_4549:gh_kg_sshx_py_latest_3_0"
                                            },
                                            {
                                                "id": "gh_kg_sshx_ln_latest_3_0",
                                                "layerName": "BKK_SSHX_LN",
                                                "layerType": "SuperMapWMTS",
                                                "caption": "控规_基础设施黄线",
                                                "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/21f3bf54f96e96e8b2d792c764061bcf",
                                                "visible": false,
                                                "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/40110a793a16af450bf54167c8eb89e0?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_tstx_cgcs_4549:gh_kg_sshx_ln_latest_3_0"
                                            },
                                        ]
                                    },
                                    {
                                        "id": "gh_kg_sxlx_ln_latest_3_0",
                                        "layerName": "BKK_SXLX_LN",
                                        "layerType": "SuperMapWMTS",
                                        "caption": "控规_水系蓝线",
                                        "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/28e90c600360e973bb51372e66dc2e8a",
                                        "visible": false,
                                        "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/40110a793a16af450bf54167c8eb89e0?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_tstx_cgcs_4549:gh_kg_sxlx_ln_latest_3_0"
                                    },
                                    {
                                        "id": "gh_kg_wbzx_py_latest_3_0",
                                        "layerName": "BKK_WBZX_PY",
                                        "layerType": "SuperMapWMTS",
                                        "caption": "控规_文保紫线",
                                        "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/7c5919344ab0b6efb1cfb698fdfa6599",
                                        "visible": false,
                                        "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/40110a793a16af450bf54167c8eb89e0?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_tstx_cgcs_4549:gh_kg_wbzx_py_latest_3_0"
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
                                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/36e10ea73abd170f23c0f57b55f979e5",
                                                    "visible": false,
                                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/40110a793a16af450bf54167c8eb89e0?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_tstx_cgcs_4549:gh_kg_dlzx_ln_latest_3_0"
                                                },
                                                {
                                                    "id": "gh_kg_dlbx_ln_latest_3_0",
                                                    "layerName": "BKJ_DLBX_LN",
                                                    "layerType": "SuperMapWMTS",
                                                    "caption": "控规_道路边线",
                                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/85cb8a61d2e0b1cd02aadbff52fd70b7",
                                                    "visible": false,
                                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/40110a793a16af450bf54167c8eb89e0?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_tstx_cgcs_4549:gh_kg_dlbx_ln_latest_3_0"
                                                },
                                            ]
                                        },
                                        {
                                            "id": "gh_kg_gdx_ln_latest_3_0",
                                            "layerName": "BKJ_GDX_LN",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "控规_轨道线",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/4ab3476d2e46236562e1ab5c357db375",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/40110a793a16af450bf54167c8eb89e0?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_tstx_cgcs_4549:gh_kg_gdx_ln_latest_3_0"
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
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/8ae322b6431b96b61ed220f3d9acd6e4",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/40110a793a16af450bf54167c8eb89e0?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_tstx_cgcs_4549:gh_kg_gpss_py_latest_3_0"
                                        },
                                        {
                                            "id": "gh_kg_gpss_pt_latest_3_0",
                                            "layerName": "BKP_GPSS_PT",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "控规_公共配套设施点",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/40e19c423552ac0a61e6d6379aa64de7",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/40110a793a16af450bf54167c8eb89e0?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_tstx_cgcs_4549:gh_kg_gpss_pt_latest_3_0"
                                        },
                                        {
                                            "id": "gh_kg_gpfh_pt_latest_3_0",
                                            "layerName": "BKP_GPFH_PT",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "控规_公共配套设施符号",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/38d72970fd22d5d2a82b17bde370caac",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/40110a793a16af450bf54167c8eb89e0?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_tstx_cgcs_4549:gh_kg_gpfh_pt_latest_3_0"
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
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/662931429e1611b5ba544d265fb2c770",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/40110a793a16af450bf54167c8eb89e0?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_tstx_cgcs_4549:gh_kg_xmfw_py_latest_3_0"
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
                                    "layerName": "JSYDGZQ_2017",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "建设用地管制区2017_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/a46d88ee6162ceb8e320b37f6696c2f2",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/40110a793a16af450bf54167c8eb89e0?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_tstx_cgcs_4549:gh_tdlyztgh_2017_jsydgzq_py_latest_3_0"
                                },
                                {
                                    "id": "gh_tdlyztgh_2020_jsydgzq_py_latest_3_0",
                                    "layerName": "JSYDGZQ_2020",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "建设用地管制区2020_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/99edb4a4da813b91098afcb0de71a569",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/40110a793a16af450bf54167c8eb89e0?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_tstx_cgcs_4549:gh_tdlyztgh_2020_jsydgzq_py_latest_3_0"
                                },
                                {
                                    "id": "gh_tdlyztgh_2011_ghyt_py_latest_3_0",
                                    "layerName": "TDLYGH_GHYT_2011",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "规划用途2011",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/f35b554cec0a1b80397c4e7478aa8432",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/40110a793a16af450bf54167c8eb89e0?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_tstx_cgcs_4549:gh_tdlyztgh_2011_ghyt_py_latest_3_0"
                                },
                                {
                                    "id": "gh_tdlyztgh_2011_jsydgzbj_ln_latest_3_0",
                                    "layerName": "TDLYGH_JSYDGZQBJ_2011",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "建设用地管制边界2011",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/33805995b2a456608cbe7c72c6fb1ed8",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/40110a793a16af450bf54167c8eb89e0?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_tstx_cgcs_4549:gh_tdlyztgh_2011_jsydgzbj_ln_latest_3_0"
                                },
                                {
                                    "id": "gh_tdlyztgh_2011_jsydgzq_py_latest_3_0",
                                    "layerName": "TDLYGH_JSYDGZQ_2011",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "建设用地管制区2011",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/d4f18f43be3bdb8555a7f769f9ab3a82",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/40110a793a16af450bf54167c8eb89e0?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_tstx_cgcs_4549:gh_tdlyztgh_2011_jsydgzq_py_latest_3_0"
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
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/85677bc90d5eaf23ec50da973e2a18b1",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/40110a793a16af450bf54167c8eb89e0?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_tstx_cgcs_4549:xz_dxydzkf_dxydzkfxmhx_py_latest_3_0"
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
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/b58c77f66d40a9fbd16abe42435f31ac",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/40110a793a16af450bf54167c8eb89e0?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_tstx_cgcs_4549:gl_gtkjytgzhkfly_ghjbtzl_py_latest_3_0"
                                },
                                {
                                    "id": "gl_gtkjytgzhkfly_ghjbtzx_py_latest_3_0",
                                    "layerName": "GHJT_GHJBTZ_X",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "规划局部调整X_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/732cf80f0a2f6a2f801fc3c3bcd324ab",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/40110a793a16af450bf54167c8eb89e0?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_tstx_cgcs_4549:gl_gtkjytgzhkfly_ghjbtzx_py_latest_3_0"
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
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/67d24fb0253b92ad47ec3e701e47d0c5",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/40110a793a16af450bf54167c8eb89e0?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_tstx_cgcs_4549:gl_nzybp_jsydbpl_py_latest_3_0"
                                },
                                {
                                    "id": "gl_nzybp_jsydbpx_py_latest_3_0",
                                    "layerName": "JSYDBP_NZYDK_X",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "建设用地报批（农转用地块）X_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/59720c8f3c9c64b6b7509062c0ed2bfa",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/40110a793a16af450bf54167c8eb89e0?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_tstx_cgcs_4549:gl_nzybp_jsydbpx_py_latest_3_0"
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
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/3a63ee9fadfa1efce191578d0ffcaa0f",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/40110a793a16af450bf54167c8eb89e0?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_tstx_cgcs_4549:gl_gtkjytgzhkfly_jsydys_py_latest_3_0"
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
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/da290f0d33f44688b06ace5aadf2c5dc",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/40110a793a16af450bf54167c8eb89e0?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_tstx_cgcs_4549:gl_ssnydba_bhjbnt_py_latest_3_0"
                                },
                                {
                                    "id": "gl_ssnydba_phgzcfw_py_latest_3_0",
                                    "layerName": "SSNYD_GZCPHJZD",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "破坏耕作层范围_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/c64cbd4dca1eba76dbe4f1bc4b831ee2",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/40110a793a16af450bf54167c8eb89e0?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_tstx_cgcs_4549:gl_ssnydba_phgzcfw_py_latest_3_0"
                                },
                                {
                                    "id": "gl_ssnydba_nydfw_py_latest_3_0",
                                    "layerName": "SSNYD_NYDJZD",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "农用地范围_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/ff1c16c47d9ee8401b74c77247c1c23b",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/40110a793a16af450bf54167c8eb89e0?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_tstx_cgcs_4549:gl_ssnydba_nydfw_py_latest_3_0"
                                },
                                {
                                    "id": "gl_ssnydba_phynfw_py_latest_3_0",
                                    "layerName": "SSNYD_PHYNJZD",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "破坏永农范围_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/1f264f623ed16c8e5dc3b01a8329bcd4",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/40110a793a16af450bf54167c8eb89e0?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_tstx_cgcs_4549:gl_ssnydba_phynfw_py_latest_3_0"
                                },
                                {
                                    "id": "gl_ssnydba_zyynfw_py_latest_3_0",
                                    "layerName": "SSNYD_ZYYNJZD",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "占用永农范围_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/2d8d3e874b7b531c6e5962064389c8d8",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/40110a793a16af450bf54167c8eb89e0?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_tstx_cgcs_4549:gl_ssnydba_zyynfw_py_latest_3_0"
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
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/a9eb2d9a0c89feb8343253faadf64eed",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/40110a793a16af450bf54167c8eb89e0?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_tstx_cgcs_4549:gl_tdcb_tdcb_py_latest_3_0"
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
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/7d753a9605b15e7159f83d1d75c5041e",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/40110a793a16af450bf54167c8eb89e0?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_tstx_cgcs_4549:gl_tdgy_gddk_py_latest_3_0"
                                },
                                {
                                    "id": "gl_tdgy_zpgcrdk_py_latest_3_0",
                                    "layerName": "TDGY_TDJY_ZPGCR",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "土地交易-招拍挂出让地块_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/4e146e3a0ca6689c9a969f15292fb4c3",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/40110a793a16af450bf54167c8eb89e0?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_tstx_cgcs_4549:gl_tdgy_zpgcrdk_py_latest_3_0"
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
                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/7d7b70569f4dc2d08e3db698a19c86ee",
                            "visible": false,
                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/40110a793a16af450bf54167c8eb89e0?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_tstx_cgcs_4549:gl_tdzz_gbzjsdk_lx_py_latest_3_0"
                        },
                        {
                            "id": "gl_tdzz_gbzjsdk_ys_py_latest_3_0",
                            "layerName": "TDZZ_GBZJS_YS_X",
                            "layerType": "SuperMapWMTS",
                            "caption": "高标准建设地块-验收_省级下发",
                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/8432b3cbc885f262103d8f2a782dcf73",
                            "visible": false,
                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/40110a793a16af450bf54167c8eb89e0?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_tstx_cgcs_4549:gl_tdzz_gbzjsdk_ys_py_latest_3_0"
                        },
                        {
                            "id": "gl_tdzz_gbztsdk_lx_py_latest_3_0",
                            "layerName": "TDZZ_GBZTS_LX_X",
                            "layerType": "SuperMapWMTS",
                            "caption": "高标准提升地块-立项_省级下发",
                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/e96e1a374c1ef1d9fbf1ea23d78d3adc",
                            "visible": false,
                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/40110a793a16af450bf54167c8eb89e0?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_tstx_cgcs_4549:gl_tdzz_gbztsdk_lx_py_latest_3_0"
                        },
                        {
                            "id": "gl_tdzz_gbztsdk_ys_py_latest_3_0",
                            "layerName": "TDZZ_GBZTS_YS_X",
                            "layerType": "SuperMapWMTS",
                            "caption": "高标准提升地块-验收_省级下发",
                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/5926fc79c8b73729b5879c536899d6ee",
                            "visible": false,
                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/40110a793a16af450bf54167c8eb89e0?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_tstx_cgcs_4549:gl_tdzz_gbztsdk_ys_py_latest_3_0"
                        },
                        {
                            "id": "gl_tdzz_jsydfkdk_lx_py_latest_3_0",
                            "layerName": "TDZZ_JSYDFK_LX_",
                            "layerType": "SuperMapWMTS",
                            "caption": "建设用地复垦地块-立项_省级下发",
                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/e3ca7e93133d26a6ac530b87111fb115",
                            "visible": false,
                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/40110a793a16af450bf54167c8eb89e0?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_tstx_cgcs_4549:gl_tdzz_jsydfkdk_lx_py_latest_3_0"
                        },
                        {
                            "id": "gl_jdzz_jsydfkdk_ys_py_latest_3_0",
                            "layerName": "TDZZ_JSYDFK_YS_",
                            "layerType": "SuperMapWMTS",
                            "caption": "建设用地复垦地块-验收_省级下发",
                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/d04cf0411c227cbb676c2cf09356506e",
                            "visible": false,
                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/40110a793a16af450bf54167c8eb89e0?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_tstx_cgcs_4549:gl_jdzz_jsydfkdk_ys_py_latest_3_0"
                        },
                        {
                            "id": "gl_tdzz_kzgd_lx_py_latest_3_0",
                            "layerName": "TDZZ_KZGD_LX_X",
                            "layerType": "SuperMapWMTS",
                            "caption": "垦造耕地-立项_省级下发",
                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/e646fc2f3f2efa16594a677b1e43ba2a",
                            "visible": false,
                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/40110a793a16af450bf54167c8eb89e0?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_tstx_cgcs_4549:gl_tdzz_kzgd_lx_py_latest_3_0"
                        },
                        {
                            "id": "gl_tdzz_kzgd_ys_py_latest_3_0",
                            "layerName": "TDZZ_KZGD_YS_X",
                            "layerType": "SuperMapWMTS",
                            "caption": "垦造耕地-验收_省级下发",
                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/402d576b7af851418b64fe0ff9243351",
                            "visible": false,
                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/40110a793a16af450bf54167c8eb89e0?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_tstx_cgcs_4549:gl_tdzz_kzgd_ys_py_latest_3_0"
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
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/a361e1c18f4e3b6ae77a048d20af2f3c",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/40110a793a16af450bf54167c8eb89e0?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_tstx_cgcs_4549:gl_zjgg_cjdkl_py_latest_3_0"
                                },
                                {
                                    "id": "gl_zjgg_jxdkl_py_latest_3_0",
                                    "layerName": "NCTDZHZZ_JXDK_L",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "建新地块L_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/db3e29689645b043677cdcc3f630f270",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/40110a793a16af450bf54167c8eb89e0?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_tstx_cgcs_4549:gl_zjgg_jxdkl_py_latest_3_0"
                                },
                                {
                                    "id": "gl_zjgg_jxdkx_py_latest_3_0",
                                    "layerName": "NCTDZHZZ_JXDK_X",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "建新地块X_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/04163a9c1722d9ad63e487144812755d",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/40110a793a16af450bf54167c8eb89e0?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_tstx_cgcs_4549:gl_zjgg_jxdkx_py_latest_3_0"
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
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/4e305f5da8b28dceda8bfc6109958f38",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/40110a793a16af450bf54167c8eb89e0?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_tstx_cgcs_4549:gl_tzgzdk_gdzlts_lx_py_latest_3_0"
                                },
                                {
                                    "id": "gl_tzgzdk_gdzlts_ys_py_latest_3_0",
                                    "layerName": "TDZZ_GDZLTS_YS",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "耕地质量提升-验收_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/ef9e9f02f8a54133e79650e558bf89ef",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/40110a793a16af450bf54167c8eb89e0?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_tstx_cgcs_4549:gl_tzgzdk_gdzlts_ys_py_latest_3_0"
                                },
                                {
                                    "id": "gl_tzgzdk_hgsdk_lx_py_latest_3_0",
                                    "layerName": "TDZZ_HGSDK_LX_X",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "旱改水地块-立项_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/0fa3a20fd979efe447fe6ffb6ef876d5",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/40110a793a16af450bf54167c8eb89e0?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_tstx_cgcs_4549:gl_tzgzdk_hgsdk_lx_py_latest_3_0"
                                },
                                {
                                    "id": "gl_tzgzdk_hgsdk_ys_py_latest_3_0",
                                    "layerName": "TDZZ_HGSDK_YS_X",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "旱改水地块-验收_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/090e4dcce2d6f5d5bde8feb88dc39e2d",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/40110a793a16af450bf54167c8eb89e0?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_tstx_cgcs_4549:gl_tzgzdk_hgsdk_ys_py_latest_3_0"
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
                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/bf2bbbd16fe827a7b3531df7897f36d7",
                            "visible": false,
                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/40110a793a16af450bf54167c8eb89e0?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_tstx_cgcs_4549:gl_ksgl_lsks_py_latest_3_0"
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
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/80e2b6365a83815c83ea1d7bb0d3f1c7",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/40110a793a16af450bf54167c8eb89e0?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_tstx_cgcs_4549:gl_ckq_ckqdj_py_latest_3_0"
                                },
                                {
                                    "id": "gl_ckq_hdkqfw_py_latest_3_0",
                                    "layerName": "CKQ_HDKQFW",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "划定矿区范围_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/0fbc409cf7832122f33708e826ae5efe",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/40110a793a16af450bf54167c8eb89e0?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_tstx_cgcs_4549:gl_ckq_hdkqfw_py_latest_3_0"
                                },
                                {
                                    "id": "gl_ckq_ckqdj_ls_py_latest_3_0",
                                    "layerName": "CKQDJ_LSX",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "采矿权登记-历史_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/a511d1d3a4aa8943b3da1739b724ed57",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/40110a793a16af450bf54167c8eb89e0?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_tstx_cgcs_4549:gl_ckq_ckqdj_ls_py_latest_3_0"
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
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/33d5a64c1a5d15a97cb69a73f266c4f1",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/40110a793a16af450bf54167c8eb89e0?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_tstx_cgcs_4549:gl_cldj_cmdj_py_latest_3_0"
                                },
                                {
                                    "id": "gl_cldj_drkqsdj_py_latest_3_0",
                                    "layerName": "CLDJ_DRKQS",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "地热矿泉水登记_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/9292b52e80fd64e183c80050d37c9599",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/40110a793a16af450bf54167c8eb89e0?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_tstx_cgcs_4549:gl_cldj_drkqsdj_py_latest_3_0"
                                },
                                {
                                    "id": "gl_cldj_jsydyf_py_latest_3_0",
                                    "layerName": "CLDJ_JSYDYF_X",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "建设用地压覆_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/3552a07e9aca977fd5f80b2baecb3247",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/40110a793a16af450bf54167c8eb89e0?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_tstx_cgcs_4549:gl_cldj_jsydyf_py_latest_3_0"
                                },
                                {
                                    "id": "gl_cldj_yfdj_py_latest_3_0",
                                    "layerName": "CLDJ_YFDJ_X",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "压覆登记_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/2c110a06037bfc9eb852540f1c08fa77",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/40110a793a16af450bf54167c8eb89e0?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_tstx_cgcs_4549:gl_cldj_yfdj_py_latest_3_0"
                                },
                                {
                                    "id": "gl_cldj_zydj_pt_latest_3_0",
                                    "layerName": "CLDJ_ZYDJ_X",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "占用登记_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/350a966bb2e278438ff11117779c259d",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/40110a793a16af450bf54167c8eb89e0?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_tstx_cgcs_4549:gl_cldj_zydj_pt_latest_3_0"
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
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/b91209b0725e1f13e0176846e1172259",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/40110a793a16af450bf54167c8eb89e0?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_tstx_cgcs_4549:gl_tkq_tkqdzdc_py_latest_3_0"
                                },
                                {
                                    "id": "gl_tkq_tkqkcdj_ls_py_latest_3_0",
                                    "layerName": "TKQ_KCDJ_LSX",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "探矿权勘查登记_历史_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/e0af6f7d70f4039bd06f0476a139263e",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/40110a793a16af450bf54167c8eb89e0?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_tstx_cgcs_4549:gl_tkq_tkqkcdj_ls_py_latest_3_0"
                                },
                                {
                                    "id": "gl_tkq_tkqkcdj_py_latest_3_0",
                                    "layerName": "TKQ_KCDJ_X",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "探矿权勘查登记_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/e3916dd3920cd5677c26793861178cc6",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/40110a793a16af450bf54167c8eb89e0?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_tstx_cgcs_4549:gl_tkq_tkqkcdj_py_latest_3_0"
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
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/4420d129a002d2d1015c75115f976bbc",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/40110a793a16af450bf54167c8eb89e0?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_tstx_cgcs_4549:gl_stxf_fqks_py_latest_3_0"
                                },
                                {
                                    "id": "gl_fqks_ksstxf_pt_latest_3_0",
                                    "layerName": "KS",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "矿山生态修复_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/a1417835fd1864d249fc566f45261b72",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/40110a793a16af450bf54167c8eb89e0?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_tstx_cgcs_4549:gl_fqks_ksstxf_pt_latest_3_0"
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
                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/f52a2e63cacd0a2a30179d38e0bd0c74",
                            "visible": false,
                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/40110a793a16af450bf54167c8eb89e0?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_tstx_cgcs_4549:gl_wtzz_dpfwtzz_pt_latest_3_0"
                        },
                        {
                            "id": "gl_wtzz_ssnydzz_pt_latest_3_0",
                            "layerName": "WTZZ_SSNYDZZX",
                            "layerType": "SuperMapWMTS",
                            "caption": "设施农用地整治_省级下发",
                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/e56954ed617763c8b83877e9a98246bc",
                            "visible": false,
                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/40110a793a16af450bf54167c8eb89e0?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_tstx_cgcs_4549:gl_wtzz_ssnydzz_pt_latest_3_0"
                        },               
                    ]
                }
               
            ]
        }
    ]

});

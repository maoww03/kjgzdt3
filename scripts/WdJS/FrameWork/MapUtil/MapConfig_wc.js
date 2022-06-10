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
                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/56701fd1c063332ace2e166c849d23f1",
                            "visible": false,
                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/9cab06ef3ada06fc065b649bbfd64cb2?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wctx_cgcs_4549:xz_dxydzxdc_2019_dxdcdytb_py_latest_3_0"
                        },
                        {
                            "id": "xz_dxydzxdc_2019_dxdcqtb_py_latest_3_0",
                            "layerName": "DCQTB_2019",
                            "layerType": "SuperMapWMTS",
                            "caption": "低效调查区图斑2019_省级下发",
                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/de97b49f8d3f01a28805fe785eac9c80",
                            "visible": false,
                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/9cab06ef3ada06fc065b649bbfd64cb2?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wctx_cgcs_4549:xz_dxydzxdc_2019_dxdcqtb_py_latest_3_0"
                        },
                        {
                            "id": "xz_dxydzxdc_2020_dxdcdytb_py_latest_3_0",
                            "layerName": "DCDYTB_2020",
                            "layerType": "SuperMapWMTS",
                            "caption": "低效调查单元图斑2020_省级下发",
                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/262a7c3c257a850e0e6349165b6d91b9",
                            "visible": false,
                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/9cab06ef3ada06fc065b649bbfd64cb2?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wctx_cgcs_4549:xz_dxydzxdc_2020_dxdcdytb_py_latest_3_0"
                        },
                        {
                            "id": "xz_dxydzxdc_2020_dxdcqtb_py_latest_3_0",
                            "layerName": "DCQTB_2020",
                            "layerType": "SuperMapWMTS",
                            "caption": "低效调查区图斑2020_省级下发",
                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/f79f8c9644408f7af0e6d392b9f8ae46",
                            "visible": false,
                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/9cab06ef3ada06fc065b649bbfd64cb2?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wctx_cgcs_4549:xz_dxydzxdc_2020_dxdcqtb_py_latest_3_0"
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
                                            "id": "xz_tdbg_2010_2011_dljx_ln_latest_3_0",
                                            "layerName": "TDLYXZ_DLJX_2010",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "地类界线2010",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/fce186f2df326cc9446262e4a360d7eb",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/9cab06ef3ada06fc065b649bbfd64cb2?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wctx_cgcs_4549:xz_tdbg_2010_2011_dljx_ln_latest_3_0"
                                        },
                                        {
                                            "id": "xz_tdbg_2010_2011_dltb_py_latest_3_0",
                                            "layerName": "TDLYXZ_DLTB_2010",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "地类图斑2010",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/bcfc5828f1cebb5be530bb56c003b860",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/9cab06ef3ada06fc065b649bbfd64cb2?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wctx_cgcs_4549:xz_tdbg_2010_2011_dltb_py_latest_3_0"
                                        },
                                        {
                                            "id": "xz_tdbg_2010_2011_lxdw_pt_latest_3_0",
                                            "layerName": "TDLYXZ_LXDW_2010",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "零星地物2010",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/bb0102e6c4e541e1ca6d0cd49ce2ae00",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/9cab06ef3ada06fc065b649bbfd64cb2?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wctx_cgcs_4549:xz_tdbg_2010_2011_lxdw_pt_latest_3_0"
                                        },
                                        {
                                            "id": "xz_tdbg_2010_2011_xzdw_ln_latest_3_0",
                                            "layerName": "TDLYXZ_XZDW_2010",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "线状地物2010",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/1580aad6e7e9182fc1f0493dfd94d9f4",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/9cab06ef3ada06fc065b649bbfd64cb2?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wctx_cgcs_4549:xz_tdbg_2010_2011_xzdw_ln_latest_3_0"
                                        },
                                        {
                                            "id": "xz_tdbg_2011_dltb_py_latest_3_0",
                                            "layerName": "TDLYXZ_DLTB_2011",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "地类图斑2011",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/04de076245895cf4a0dfe0dafa774122",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/9cab06ef3ada06fc065b649bbfd64cb2?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wctx_cgcs_4549:xz_tdbg_2011_dltb_py_latest_3_0"
                                        },
                                        {
                                            "id": "xz_tdbg_2011_lxdw_pt_latest_3_0",
                                            "layerName": "TDLYXZ_LXDW_2011",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "零星地物2011",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/ecdfd72486f911fb111da5dc5c783fc4",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/9cab06ef3ada06fc065b649bbfd64cb2?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wctx_cgcs_4549:xz_tdbg_2011_lxdw_pt_latest_3_0"
                                        },
                                        {
                                            "id": "xz_tdbg_2011_xzdw_ln_latest_3_0",
                                            "layerName": "TDLYXZ_XZDW_2011",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "线状地物2011",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/ebf86d15633e5ed3735fbf514171ef65",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/9cab06ef3ada06fc065b649bbfd64cb2?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wctx_cgcs_4549:xz_tdbg_2011_xzdw_ln_latest_3_0"
                                        },
                                        {
                                            "id": "xz_tdbg_2012_dljx_ln_latest_3_0",
                                            "layerName": "TDLYXZ_DLJX_2012",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "地类界线2012",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/46896e26703613896b7635d54b875900",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/9cab06ef3ada06fc065b649bbfd64cb2?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wctx_cgcs_4549:xz_tdbg_2012_dljx_ln_latest_3_0"
                                        },
                                        {
                                            "id": "xz_tdbg_2012_dltb_py_latest_3_0",
                                            "layerName": "TDLYXZ_DLTB_2012",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "地类图斑2012",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/cec5a95c493a81801ad3cc9738a52859",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/9cab06ef3ada06fc065b649bbfd64cb2?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wctx_cgcs_4549:xz_tdbg_2012_dltb_py_latest_3_0"
                                        },
                                        {
                                            "id": "xz_tdbg_2012_lxdw_pt_latest_3_0",
                                            "layerName": "TDLYXZ_LXDW_2012",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "零星地物2012",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/c2a3c5ad98b26b55daf85140154bcb7a",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/9cab06ef3ada06fc065b649bbfd64cb2?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wctx_cgcs_4549:xz_tdbg_2012_lxdw_pt_latest_3_0"
                                        },
                                        {
                                            "id": "xz_tdbg_2012_xzdw_ln_latest_3_0",
                                            "layerName": "TDLYXZ_XZDW_2012",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "线状地物2012",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/150ba73eb5fb3aebc5ca057aeaf52064",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/9cab06ef3ada06fc065b649bbfd64cb2?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wctx_cgcs_4549:xz_tdbg_2012_xzdw_ln_latest_3_0"
                                        },
                                        {
                                            "id": "xz_tdbg_2013_dljx_ln_latest_3_0",
                                            "layerName": "TDLYXZ_DLJX_2013",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "地类界线2013",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/5bf28896f9e1aaeeb89c6f3517fab059",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/9cab06ef3ada06fc065b649bbfd64cb2?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wctx_cgcs_4549:xz_tdbg_2013_dljx_ln_latest_3_0"
                                        },
                                        {
                                            "id": "xz_tdbg_2013_dltb_py_latest_3_0",
                                            "layerName": "TDLYXZ_DLTB_2013",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "地类图斑2013",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/0444f3acf57342ebfdbdc065b780b866",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/9cab06ef3ada06fc065b649bbfd64cb2?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wctx_cgcs_4549:xz_tdbg_2013_dltb_py_latest_3_0"
                                        },
                                        {
                                            "id": "xz_tdbg_2013_lxdw_pt_latest_3_0",
                                            "layerName": "TDLYXZ_LXDW_2013",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "零星地物2013",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/f3b8a716a944076e0a5f10de803adb55",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/9cab06ef3ada06fc065b649bbfd64cb2?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wctx_cgcs_4549:xz_tdbg_2013_lxdw_pt_latest_3_0"
                                        },
                                        {
                                            "id": "xz_tdbg_2013_xzdw_ln_latest_3_0",
                                            "layerName": "TDLYXZ_XZDW_2013",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "线状地物2013",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/ca30bf4b1e5ed956950541241d16cd95",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/9cab06ef3ada06fc065b649bbfd64cb2?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wctx_cgcs_4549:xz_tdbg_2013_xzdw_ln_latest_3_0"
                                        },
                                        {
                                            "id": "xz_tdbg_2014_dljx_ln_latest_3_0",
                                            "layerName": "TDLYXZ_DLJX_2014",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "地类界线2014",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/24e2fd5a2f1f4c89dcf2ba931b828c98",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/9cab06ef3ada06fc065b649bbfd64cb2?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wctx_cgcs_4549:xz_tdbg_2014_dljx_ln_latest_3_0"
                                        },
                                        {
                                            "id": "xz_tdbg_2014_dltb_py_latest_3_0",
                                            "layerName": "TDLYXZ_DLTB_2014",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "地类图斑2014",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/6a6ca1f9b773bd27936d6b2407c50e85",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/9cab06ef3ada06fc065b649bbfd64cb2?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wctx_cgcs_4549:xz_tdbg_2014_dltb_py_latest_3_0"
                                        },
                                        {
                                            "id": "xz_tdbg_2014_lxdw_pt_latest_3_0",
                                            "layerName": "TDLYXZ_LXDW_2014",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "零星地物2014",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/d1cded2c5720af054668b7d0a9078f85",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/9cab06ef3ada06fc065b649bbfd64cb2?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wctx_cgcs_4549:xz_tdbg_2014_lxdw_pt_latest_3_0"
                                        },
                                        {
                                            "id": "xz_tdbg_2014_xzdw_ln_latest_3_0",
                                            "layerName": "TDLYXZ_XZDW_2014",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "线状地物2014",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/6464a914616c71233929719adfb88163",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/9cab06ef3ada06fc065b649bbfd64cb2?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wctx_cgcs_4549:xz_tdbg_2014_xzdw_ln_latest_3_0"
                                        },
                                        {
                                            "id": "xz_tdbg_2015_dljx_ln_latest_3_0",
                                            "layerName": "TDLYXZ_DLJX_2015",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "地类界线2015",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/057e183fadb8bc2d1462c86e814a7904",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/9cab06ef3ada06fc065b649bbfd64cb2?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wctx_cgcs_4549:xz_tdbg_2015_dljx_ln_latest_3_0"
                                        },
                                        {
                                            "id": "xz_tdbg_2015_dltb_py_latest_3_0",
                                            "layerName": "TDLYXZ_DLTB_2015",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "地类图斑2015",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/e5808906e906d1289b63b49682ac296d",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/9cab06ef3ada06fc065b649bbfd64cb2?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wctx_cgcs_4549:xz_tdbg_2015_dltb_py_latest_3_0"
                                        },
                                        {
                                            "id": "xz_tdbg_2015_lxdw_pt_latest_3_0",
                                            "layerName": "TDLYXZ_LXDW_2015",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "零星地物2015",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/a226f0ed3f0b9e8b86f99bfa2528df13",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/9cab06ef3ada06fc065b649bbfd64cb2?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wctx_cgcs_4549:xz_tdbg_2015_lxdw_pt_latest_3_0"
                                        },
                                        {
                                            "id": "xz_tdbg_2015_xzdw_ln_latest_3_0",
                                            "layerName": "TDLYXZ_XZDW_2015",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "线状地物2015",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/c9b18ffca14b99aa75e16f03545d80cc",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/9cab06ef3ada06fc065b649bbfd64cb2?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wctx_cgcs_4549:xz_tdbg_2015_xzdw_ln_latest_3_0"
                                        },
                                        {
                                            "id": "xz_tdbg_2016_dljx_ln_latest_3_0",
                                            "layerName": "TDLYXZ_DLJX_2016",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "地类界线2016",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/3b3f12c3b5522bdd5a9dfdc98dd35b60",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/9cab06ef3ada06fc065b649bbfd64cb2?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wctx_cgcs_4549:xz_tdbg_2016_dljx_ln_latest_3_0"
                                        },
                                        {
                                            "id": "xz_tdbg_2016_dltb_py_latest_3_0",
                                            "layerName": "TDLYXZ_DLTB_2016",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "地类图斑2016",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/2f3c6ab1b2990a0b023fdb3860fe40af",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/9cab06ef3ada06fc065b649bbfd64cb2?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wctx_cgcs_4549:xz_tdbg_2016_dltb_py_latest_3_0"
                                        },
                                        {
                                            "id": "xz_tdbg_2016_lxdw_pt_latest_3_0",
                                            "layerName": "TDLYXZ_LXDW_2016",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "零星地物2016",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/40462c8beadc2c5ee63b7f0ac7c90ff9",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/9cab06ef3ada06fc065b649bbfd64cb2?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wctx_cgcs_4549:xz_tdbg_2016_lxdw_pt_latest_3_0"
                                        },
                                        {
                                            "id": "xz_tdbg_2016_xzdw_ln_latest_3_0",
                                            "layerName": "TDLYXZ_XZDW_2016",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "线状地物2016",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/e532c70c5f0dfa6a49ae6744909f44ce",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/9cab06ef3ada06fc065b649bbfd64cb2?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wctx_cgcs_4549:xz_tdbg_2016_xzdw_ln_latest_3_0"
                                        },
                                        {
                                            "id": "xz_tdbg_2017_dljx_ln_latest_3_0",
                                            "layerName": "TDLYXZ_DLJX_2017",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "地类界线2017",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/791ab9960d8ee67aca9e028364fed2ef",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/9cab06ef3ada06fc065b649bbfd64cb2?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wctx_cgcs_4549:xz_tdbg_2017_dljx_ln_latest_3_0"
                                        },
                                        {
                                            "id": "xz_tdbg_2017_dltb_py_latest_3_0",
                                            "layerName": "TDLYXZ_DLTB_2017",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "地类图斑2017",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/401082493a8828ae33d0ebea8582391d",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/9cab06ef3ada06fc065b649bbfd64cb2?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wctx_cgcs_4549:xz_tdbg_2017_dltb_py_latest_3_0"
                                        },
                                        {
                                            "id": "xz_tdbg_2017_lxdw_pt_latest_3_0",
                                            "layerName": "TDLYXZ_LXDW_2017",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "零星地物2017",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/7d1b5a7e094a7e99b0724bb018863b14",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/9cab06ef3ada06fc065b649bbfd64cb2?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wctx_cgcs_4549:xz_tdbg_2017_lxdw_pt_latest_3_0"
                                        },
                                        {
                                            "id": "xz_tdbg_2017_xzdw_ln_latest_3_0",
                                            "layerName": "TDLYXZ_XZDW_2017",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "线状地物2017",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/61401e4338236e0613deb216cd8646ef",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/9cab06ef3ada06fc065b649bbfd64cb2?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wctx_cgcs_4549:xz_tdbg_2017_xzdw_ln_latest_3_0"
                                        },
                                        {
                                            "id": "xz_tdbg_2018_dljx_ln_latest_3_0",
                                            "layerName": "TDLYXZ_DLJX_2018",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "地类界线2018",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/39d4ac3f37da25519424f039e1510952",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/9cab06ef3ada06fc065b649bbfd64cb2?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wctx_cgcs_4549:xz_tdbg_2018_dljx_ln_latest_3_0"
                                        },
                                        {
                                            "id": "xz_tdbg_2018_dltb_py_latest_3_0",
                                            "layerName": "TDLYXZ_DLTB_2018",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "地类图斑2018",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/2c3b54b7b7563f1f55b284e3ecdf795c",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/9cab06ef3ada06fc065b649bbfd64cb2?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wctx_cgcs_4549:xz_tdbg_2018_dltb_py_latest_3_0"
                                        },
                                        {
                                            "id": "xz_tdbg_2018_lxdw_pt_latest_3_0",
                                            "layerName": "TDLYXZ_LXDW_2018",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "零星地物2018",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/057807577b53bda89be620776ab41c17",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/9cab06ef3ada06fc065b649bbfd64cb2?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wctx_cgcs_4549:xz_tdbg_2018_lxdw_pt_latest_3_0"
                                        },
                                        {
                                            "id": "xz_tdbg_2018_xzdw_ln_latest_3_0",
                                            "layerName": "TDLYXZ_XZDW_2018",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "线状地物2018",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/971c45aa1c2e15b7019ad5a1693e9dcf",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/9cab06ef3ada06fc065b649bbfd64cb2?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wctx_cgcs_4549:xz_tdbg_2018_xzdw_ln_latest_3_0"
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
                                    "id": "xz_tdzy_ghtsqdctc_py_latest_3_0",
                                    "layerName": "XZ_TDZY_GHTSQDCTC_PY",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "规划提升区调出_删除千万亩_离线",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/c62b86d3e96c57350c70519578a97a65",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/9cab06ef3ada06fc065b649bbfd64cb2?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wctx_cgcs_4549:xz_tdzy_ghtsqdctc_py_latest_3_0"
                                },
                                {
                                    "id": "xz_tdzy_ghtsqdrtc_py_latest_3_0",
                                    "layerName": "XZ_TDZY_GHTSQDRTC_PY",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "规划提升区调入_添加到千万亩_离线",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/68cf0d583dc4b422f09c48f98f78dff0",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/9cab06ef3ada06fc065b649bbfd64cb2?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wctx_cgcs_4549:xz_tdzy_ghtsqdrtc_py_latest_3_0"
                                },
                                {
                                    "id": "xz_tdzy_ysstsqdctc_py_latest_3_0",
                                    "layerName": "XZ_TDZY_YSSTSQDCTC_PY",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "已实施提升区调出_删除标田_离线",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/d95fefb8c8e39b20a548872b24275b50",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/9cab06ef3ada06fc065b649bbfd64cb2?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wctx_cgcs_4549:xz_tdzy_ysstsqdctc_py_latest_3_0"
                                },
                                {
                                    "id": "xz_tdzy_ysstsqdc_py_latest_3_0",
                                    "layerName": "XZ_TDZY_YSSTSQDC_PY",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "已实施提升区调出_删除千万亩_离线",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/5d0fe8b4cf758060e533643ba7192efd",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/9cab06ef3ada06fc065b649bbfd64cb2?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wctx_cgcs_4549:xz_tdzy_ysstsqdc_py_latest_3_0"
                                },
                                {
                                    "id": "xz_tdzy_ysstsqdrtc_py_latest_3_0",
                                    "layerName": "XZ_TDZY_YSSTSQDRCT_PY",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "已实施提升区调入_添加到千万亩_离线",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/c483a65ae42bd17804e2469b6cca7ffd",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/9cab06ef3ada06fc065b649bbfd64cb2?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wctx_cgcs_4549:xz_tdzy_ysstsqdrtc_py_latest_3_0"
                                },
                                {
                                    "id": "xz_tdzy_2019_btzrcbtc_py_latest_3_0",
                                    "layerName": "XZ_TDZY_2019_BTZRCBTC_PY",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "2019年标田转任储备_离线",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/8a2f125ed2ae96f1ce3b5a15caf7965a",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/9cab06ef3ada06fc065b649bbfd64cb2?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wctx_cgcs_4549:xz_tdzy_2019_btzrcbtc_py_latest_3_0"
                                },
                                {
                                    "id": "xz_tdzy_2017_wcxlsgnq_py_latest_3_0",
                                    "layerName": "XZ_TDZY_2017_WCXLSGNQ_PY",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "文成县粮食功能区_离线",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/f49b7f9c5bfcd0d351de4dd5f197e427",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/9cab06ef3ada06fc065b649bbfd64cb2?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wctx_cgcs_4549:xz_tdzy_2017_wcxlsgnq_py_latest_3_0"
                                },
                                {
                                    "id": "xz_tdzy_wcxlsscgnqfbt_py_latest_3_0",
                                    "layerName": "XZ_TDZY_WCXLSSCGNQFBT_PY",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "文成县粮食生产功能区分布图_离线",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/81fe7513fc20e800cc7d6325153667b8",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/9cab06ef3ada06fc065b649bbfd64cb2?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wctx_cgcs_4549:xz_tdzy_wcxlsscgnqfbt_py_latest_3_0"
                                },
                                {
                                    "id": "xz_tdzy_wcxqwmtsq_py_latest_3_0",
                                    "layerName": "XZ_TDZY_WCXQWMTSQ_PY",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "文成县千万亩提升区_离线",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/a222d0d9737ba8eeddaf649c3be0cb78",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/9cab06ef3ada06fc065b649bbfd64cb2?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wctx_cgcs_4549:xz_tdzy_wcxqwmtsq_py_latest_3_0"
                                },
                                {
                                    "id": "xz_tdzy_2019_btzcrwtc_py_latest_3_0",
                                    "layerName": "XZ_TDZY_2019_BTZCRWTC_PY",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "2019年标田转储任务_离线",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/99ba15b8c7266c76df67be7bac425bec",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/9cab06ef3ada06fc065b649bbfd64cb2?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wctx_cgcs_4549:xz_tdzy_2019_btzcrwtc_py_latest_3_0"
                                },
                                {
                                    "id": "xz_tdzy_bznt_py_latest_3_0",
                                    "layerName": "XZ_TDZY_BZNT_PY",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "标准农田_离线",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/9ab6883867be2686915ae7f40aee9293",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/9cab06ef3ada06fc065b649bbfd64cb2?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wctx_cgcs_4549:xz_tdzy_bznt_py_latest_3_0"
                                },
                                {
                                    "id": "xz_tdzy_gbzntcg_py_latest_3_0",
                                    "layerName": "XZ_TDZY_GBZNTCG_PY",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "高标准农田_离线",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/b12da1e1aed95ffd3b62043ff98a0443",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/9cab06ef3ada06fc065b649bbfd64cb2?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wctx_cgcs_4549:xz_tdzy_gbzntcg_py_latest_3_0"

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
                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/3f3be74b554a23de89022a33bee5504d",
                            "visible": false,
                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/9cab06ef3ada06fc065b649bbfd64cb2?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wctx_cgcs_4549:xz_slzy_xjejdcslzy_py_latest_3_0"
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
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/1610c5089618fd2c3f5ab6a228cfab2a",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/9cab06ef3ada06fc065b649bbfd64cb2?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wctx_cgcs_4549:xz_slzy_2018_gjjgyl_py_latest_3_0"
                                },
                                {
                                    "id": "xz_slzy_2018_sjstgyl_py_latest_3_0",
                                    "layerName": "SJSTGYL_2018",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "省级生态公益林2018_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/bf9de2065abb6d161c4c1bb6b22480c4",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/9cab06ef3ada06fc065b649bbfd64cb2?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wctx_cgcs_4549:xz_slzy_2018_sjstgyl_py_latest_3_0"
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
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/7222b5f519e1a785b064559163c800b2",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/9cab06ef3ada06fc065b649bbfd64cb2?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wctx_cgcs_4549:xz_slzy_2018_sydbhq_py_latest_3_0"
                                },
                                {
                                    "id": "xz_slzy_2020_zrbhd_py_latest_3_0",
                                    "layerName": "ZRBHD_2020",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "自然保护地2020_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/136f586d8a91afc5eaacf10f62b8ad70",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/9cab06ef3ada06fc065b649bbfd64cb2?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wctx_cgcs_4549:xz_slzy_2020_zrbhd_py_latest_3_0"
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
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/be13a9cb7c55f4eb36c2ef497abfe658",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/9cab06ef3ada06fc065b649bbfd64cb2?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wctx_cgcs_4549:xz_sdzy_2018_gjzysd_pt_latest_3_0"
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
                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/823f361e12fcd39e3ae12dea6b23c1a2",
                            "visible": false,
                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/9cab06ef3ada06fc065b649bbfd64cb2?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wctx_cgcs_4549:xz_dzsj_dzyjbhq_pt_latest_3_0"
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
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/5786d1421de08188d481980a2544a3b5",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/9cab06ef3ada06fc065b649bbfd64cb2?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wctx_cgcs_4549:xz_dzzh_yhd_pt_latest_3_0"
                                },
                                {
                                    "id": "xz_dzzh_zqd_pt_latest_3_0",
                                    "layerName": "ZXQD_ZQD_X",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "灾情点_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/c2af2e638e90d1b07857ff880ce2fa03",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/9cab06ef3ada06fc065b649bbfd64cb2?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wctx_cgcs_4549:xz_dzzh_zqd_pt_latest_3_0"
                                },
                            ]
                        }
                    ]
                },
                {
                    layerType: "GroupLayer",
					name: "JCDL",
					caption: "基础地理",
					thematicMap: true,
					subLayers: [
                        {
                            layerType: "GroupLayer",
                            name: "TDTRH",
                            caption: "天地图融合",
                            thematicMap: true,
                            subLayers: [
                                {
                                    "id": "xz_tdtrh_2018_xzqjx_ln_latest_3_0",
                                    "layerName": "DLKJKJ_XZQJX",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "行政区界线2018",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/2f39544c6429f67f2a0911be9a2334db",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/9cab06ef3ada06fc065b649bbfd64cb2?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wctx_cgcs_4549:xz_tdtrh_2018_xzqjx_ln_latest_3_0"
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
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/5b90955d25a189c73048e7debf0ea494",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/9cab06ef3ada06fc065b649bbfd64cb2?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wctx_cgcs_4549:gh_zykzx_2018_stbhhx_py_latest_3_0"
                                },
                                {
                                    "id": "xz_zykzx_2017_yjjbnthx_py_latest_3_0",
                                    "layerName": "YJJBNTBHHX_YJJBNTHX_2017",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "永久基本农田保护红线2017",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/398d83ce6ee531b94ea85df5b1909310",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/9cab06ef3ada06fc065b649bbfd64cb2?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wctx_cgcs_4549:xz_zykzx_2017_yjjbnthx_py_latest_3_0"
                                },
                                {
                                    "id": "gh_zykzx_2020_yjjbntbhhx_py_latest_3_0",
                                    "layerName": "YJJBNTHX_2020",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "永久基本农田保护红线2020_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/fc1812f951adb022cc2ee80c7278ae38",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/9cab06ef3ada06fc065b649bbfd64cb2?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wctx_cgcs_4549:gh_zykzx_2020_yjjbntbhhx_py_latest_3_0"
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
                                    subLayers: [{
                                        "id": "gh_kg_ydgh_py_latest_3_0",
                                        "layerName": "BKY_YDGH_PY",
                                        "layerType": "SuperMapWMTS",
                                        "caption": "控规_用地规划",
                                        "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/5eaa215fa37eefea8791d6c2fff9f71a",
                                        "visible": false,
                                        "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/9cab06ef3ada06fc065b649bbfd64cb2?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wctx_cgcs_4549:gh_kg_ydgh_py_latest_3_0"
                                    },
                                        {
                                            "id": "gh_kg_dkfh_pt_latest_3_0",
                                            "layerName": "BKY_DKFH_PT",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "控规_地块符号",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/ba511017f481aa56ad7b512b5c6a13fd",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/9cab06ef3ada06fc065b649bbfd64cb2?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wctx_cgcs_4549:gh_kg_dkfh_pt_latest_3_0"
                                        },
                                        {
                                            "id": "gh_kg_dkbh_ap_latest_3_0",
                                            "layerName": "BKY_DKBH_AP",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "控规_地块编号",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/cac73ba741e4c1e4948c2b725c2732c1",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/9cab06ef3ada06fc065b649bbfd64cb2?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wctx_cgcs_4549:gh_kg_dkbh_ap_latest_3_0"
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
                                        "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/ff1e396a7d102aca84d7c3b4532540ac",
                                        "visible": false,
                                        "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/9cab06ef3ada06fc065b649bbfd64cb2?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wctx_cgcs_4549:gh_kg_lhlx_py_latest_3_0"
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
                                                "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/62e91d2b67335c7042ea3375de48321a",
                                                "visible": false,
                                                "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/9cab06ef3ada06fc065b649bbfd64cb2?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wctx_cgcs_4549:gh_kg_sshx_py_latest_3_0"
                                            },
                                            {
                                                "id": "gh_kg_sshx_ln_latest_3_0",
                                                "layerName": "BKK_SSHX_LN",
                                                "layerType": "SuperMapWMTS",
                                                "caption": "控规_基础设施黄线",
                                                "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/9434fb726c4a1888d85d177c93dd3f05",
                                                "visible": false,
                                                "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/9cab06ef3ada06fc065b649bbfd64cb2?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wctx_cgcs_4549:gh_kg_sshx_ln_latest_3_0"
                                            },
                                        ]
                                    },
                                    {
                                        "id": "gh_kg_sxlx_ln_latest_3_0",
                                        "layerName": "BKK_SXLX_LN",
                                        "layerType": "SuperMapWMTS",
                                        "caption": "控规_水系蓝线",
                                        "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/4676b84bda7f87d8b5b6c095bcaed2e0",
                                        "visible": false,
                                        "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/9cab06ef3ada06fc065b649bbfd64cb2?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wctx_cgcs_4549:gh_kg_sxlx_ln_latest_3_0"
                                    },
                                    {
                                        "id": "gh_kg_wbzx_py_latest_3_0",
                                        "layerName": "BKK_WBZX_PY",
                                        "layerType": "SuperMapWMTS",
                                        "caption": "控规_文保紫线",
                                        "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/9e9e658018d141dd15a706ed7c4d422c",
                                        "visible": false,
                                        "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/9cab06ef3ada06fc065b649bbfd64cb2?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wctx_cgcs_4549:gh_kg_wbzx_py_latest_3_0"
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
                                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/4f721ef8668d47859896f05db85f1370",
                                                    "visible": false,
                                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/9cab06ef3ada06fc065b649bbfd64cb2?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wctx_cgcs_4549:gh_kg_dlzx_ln_latest_3_0"
                                                },
                                                {
                                                    "id": "gh_kg_dlbx_ln_latest_3_0",
                                                    "layerName": "BKJ_DLBX_LN",
                                                    "layerType": "SuperMapWMTS",
                                                    "caption": "控规_道路边线",
                                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/a656eb3649d066dd2b5ac89730694600",
                                                    "visible": false,
                                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/9cab06ef3ada06fc065b649bbfd64cb2?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wctx_cgcs_4549:gh_kg_dlbx_ln_latest_3_0"
                                                },
                                            ]
                                        },
                                        {
                                            "id": "gh_kg_gdx_ln_latest_3_0",
                                            "layerName": "BKJ_GDX_LN",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "控规_轨道线",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/64522ed2688fc3c07dd6571851e5d4ef",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/9cab06ef3ada06fc065b649bbfd64cb2?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wctx_cgcs_4549:gh_kg_gdx_ln_latest_3_0"
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
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/3fe75f2654e6728a1614797f68b12ecb",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/9cab06ef3ada06fc065b649bbfd64cb2?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wctx_cgcs_4549:gh_kg_gpss_py_latest_3_0"
                                        },
                                        {
                                            "id": "gh_kg_gpss_pt_latest_3_0",
                                            "layerName": "BKP_GPSS_PT",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "控规_公共配套设施点",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/844a4515e35c360db3faa8bc7044aa7e",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/9cab06ef3ada06fc065b649bbfd64cb2?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wctx_cgcs_4549:gh_kg_gpss_pt_latest_3_0"
                                        },
                                        {
                                            "id": "gh_kg_gpfh_pt_latest_3_0",
                                            "layerName": "BKP_GPFH_PT",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "控规_公共配套设施符号",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/b4d3cc367b767b80263574bbc8a1214b",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/9cab06ef3ada06fc065b649bbfd64cb2?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wctx_cgcs_4549:gh_kg_gpfh_pt_latest_3_0"
                                        },
                                    
                                    ]
                                },
                                {
                                    layerType: "GroupLayer",
                                    name: "SYLGHKZXXXGHGHQW",
                                    caption: "规划区域",
                                    thematicMap: true,
                                    subLayers: [{
                                                "id": "gh_kg_xmfw_py_latest_3_0",
                                                "layerName": "BKY_XMFW_PY",
                                                "layerType": "SuperMapWMTS",
                                                "caption": "控规_项目范围",
                                                "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/d3f2f6ccca79ba4c30fc23a6fd8a409f",
                                                "visible": false,
                                                "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/9cab06ef3ada06fc065b649bbfd64cb2?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wctx_cgcs_4549:gh_kg_xmfw_py_latest_3_0"
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
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/a13a6876fdbbce946c865ae50a16ed56",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/9cab06ef3ada06fc065b649bbfd64cb2?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wctx_cgcs_4549:gh_tdlyztgh_2017_jsydgzq_py_latest_3_0"
                                },
                                {
                                    "id": "gh_tdlyztgh_2020_jsydgzq_py_latest_3_0",
                                    "layerName": "JSYDGZQ_2020",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "建设用地管制区2020_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/feda43fc8bd5fa4fc15da989b13058fa",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/9cab06ef3ada06fc065b649bbfd64cb2?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wctx_cgcs_4549:gh_tdlyztgh_2020_jsydgzq_py_latest_3_0"
                                },
                                {
                                    "id": "xz_tdlyztgh_2017_ghyt_py_latest_3_0",
                                    "layerName": "TDLYGH_GHYT_2017",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "规划用途2017",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/c86e8e32b48d7d95305656edc1b46ebf",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/9cab06ef3ada06fc065b649bbfd64cb2?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wctx_cgcs_4549:xz_tdlyztgh_2017_ghyt_py_latest_3_0"
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
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/7d3a6a7062a227d5eeedff9bb374eb82",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/9cab06ef3ada06fc065b649bbfd64cb2?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wctx_cgcs_4549:xz_dxydzkf_dxydzkfxmhx_py_latest_3_0"
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
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/c5ee5ac0a60d5c7e395040ce86963038",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/9cab06ef3ada06fc065b649bbfd64cb2?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wctx_cgcs_4549:gl_gtkjytgzhkfly_ghjbtzl_py_latest_3_0"
                                },
                                {
                                    "id": "gl_gtkjytgzhkfly_ghjbtzx_py_latest_3_0",
                                    "layerName": "GHJT_GHJBTZ_X",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "规划局部调整X_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/df195cff677825ce224c3a8dd04d7544",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/9cab06ef3ada06fc065b649bbfd64cb2?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wctx_cgcs_4549:gl_gtkjytgzhkfly_ghjbtzx_py_latest_3_0"
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
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/19077b0ef3b8e664dd33764f366810aa",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/9cab06ef3ada06fc065b649bbfd64cb2?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wctx_cgcs_4549:gl_nzybp_jsydbpl_py_latest_3_0"
                                },
                                {
                                    "id": "gl_nzybp_jsydbpx_py_latest_3_0",
                                    "layerName": "JSYDBP_NZYDK_X",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "建设用地报批（农转用地块）X_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/244173721824f0ae2dad1e18ef37fe80",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/9cab06ef3ada06fc065b649bbfd64cb2?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wctx_cgcs_4549:gl_nzybp_jsydbpx_py_latest_3_0"
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
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/840453d774a42c41bc4f1384aa42f0b4",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/9cab06ef3ada06fc065b649bbfd64cb2?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wctx_cgcs_4549:gl_gtkjytgzhkfly_jsydys_py_latest_3_0"
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
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/b3ae6a30f1aec2d81caa19e335b3ddfb",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/9cab06ef3ada06fc065b649bbfd64cb2?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wctx_cgcs_4549:gl_ssnydba_bhjbnt_py_latest_3_0"
                                },
                                {
                                    "id": "gl_ssnydba_phgzcfw_py_latest_3_0",
                                    "layerName": "SSNYD_GZCPHJZD",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "破坏耕作层范围_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/1abea81469ac4b1f38612106807dc5bd",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/9cab06ef3ada06fc065b649bbfd64cb2?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wctx_cgcs_4549:gl_ssnydba_phgzcfw_py_latest_3_0"
                                },
                                {
                                    "id": "gl_ssnydba_nydfw_py_latest_3_0",
                                    "layerName": "SSNYD_NYDJZD",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "农用地范围_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/3c02fb1f773f81e511d6c3a1067f70f0",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/9cab06ef3ada06fc065b649bbfd64cb2?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wctx_cgcs_4549:gl_ssnydba_nydfw_py_latest_3_0"
                                },
                                {
                                    "id": "gl_ssnydba_phynfw_py_latest_3_0",
                                    "layerName": "SSNYD_PHYNJZD",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "破坏永农范围_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/4d5855c88b13e45f5c9875a3a9d504d9",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/9cab06ef3ada06fc065b649bbfd64cb2?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wctx_cgcs_4549:gl_ssnydba_phynfw_py_latest_3_0"
                                },
                                {
                                    "id": "gl_ssnydba_zyynfw_py_latest_3_0",
                                    "layerName": "SSNYD_ZYYNJZD",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "占用永农范围_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/5c392a50639a407858c24485ec1f4a8e",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/9cab06ef3ada06fc065b649bbfd64cb2?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wctx_cgcs_4549:gl_ssnydba_zyynfw_py_latest_3_0"
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
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/ce8f360cf5c0bea187196e53b97fd29d",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/9cab06ef3ada06fc065b649bbfd64cb2?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wctx_cgcs_4549:gl_tdcb_tdcb_py_latest_3_0"
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
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/8c599d8695cc1c0ad536eb5ce4216885",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/9cab06ef3ada06fc065b649bbfd64cb2?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wctx_cgcs_4549:gl_tdgy_gddk_py_latest_3_0"
                                },
                                {
                                    "id": "gl_tdgy_zpgcrdk_py_latest_3_0",
                                    "layerName": "TDGY_TDJY_ZPGCR",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "土地交易-招拍挂出让地块_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/f372a745c508dabf677265322f089454",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/9cab06ef3ada06fc065b649bbfd64cb2?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wctx_cgcs_4549:gl_tdgy_zpgcrdk_py_latest_3_0"
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
                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/d0f94e6e3c506fcda4d98eb83f6e2fbc",
                            "visible": false,
                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/9cab06ef3ada06fc065b649bbfd64cb2?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wctx_cgcs_4549:gl_tdzz_gbzjsdk_lx_py_latest_3_0"
                        },
                        {
                            "id": "gl_tdzz_gbzjsdk_ys_py_latest_3_0",
                            "layerName": "TDZZ_GBZJS_YS_X",
                            "layerType": "SuperMapWMTS",
                            "caption": "高标准建设地块-验收_省级下发",
                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/757cdadf304c2db08477d0e7a45fb7d1",
                            "visible": false,
                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/9cab06ef3ada06fc065b649bbfd64cb2?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wctx_cgcs_4549:gl_tdzz_gbzjsdk_ys_py_latest_3_0"
                        },
                        {
                            "id": "gl_tdzz_gbztsdk_lx_py_latest_3_0",
                            "layerName": "TDZZ_GBZTS_LX_X",
                            "layerType": "SuperMapWMTS",
                            "caption": "高标准提升地块-立项_省级下发",
                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/636ee2e73fb109f4dd909324a774c3b0",
                            "visible": false,
                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/9cab06ef3ada06fc065b649bbfd64cb2?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wctx_cgcs_4549:gl_tdzz_gbztsdk_lx_py_latest_3_0"
                        },
                        {
                            "id": "gl_tdzz_gbztsdk_ys_py_latest_3_0",
                            "layerName": "TDZZ_GBZTS_YS_X",
                            "layerType": "SuperMapWMTS",
                            "caption": "高标准提升地块-验收_省级下发",
                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/b6a12182e7e09006a7534e620cfd5e52",
                            "visible": false,
                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/9cab06ef3ada06fc065b649bbfd64cb2?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wctx_cgcs_4549:gl_tdzz_gbztsdk_ys_py_latest_3_0"
                        },
                        {
                            "id": "gl_tdzz_jsydfkdk_lx_py_latest_3_0",
                            "layerName": "TDZZ_JSYDFK_LX_",
                            "layerType": "SuperMapWMTS",
                            "caption": "建设用地复垦地块-立项_省级下发",
                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/3becb5e0b12b74d68885343acb799272",
                            "visible": false,
                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/9cab06ef3ada06fc065b649bbfd64cb2?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wctx_cgcs_4549:gl_tdzz_jsydfkdk_lx_py_latest_3_0"
                        },
                        {
                            "id": "gl_jdzz_jsydfkdk_ys_py_latest_3_0",
                            "layerName": "TDZZ_JSYDFK_YS_",
                            "layerType": "SuperMapWMTS",
                            "caption": "建设用地复垦地块-验收_省级下发",
                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/70b3cbce602fee3377e3506147025e46",
                            "visible": false,
                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/9cab06ef3ada06fc065b649bbfd64cb2?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wctx_cgcs_4549:gl_jdzz_jsydfkdk_ys_py_latest_3_0"
                        },
                        {
                            "id": "gl_tdzz_kzgd_lx_py_latest_3_0",
                            "layerName": "TDZZ_KZGD_LX_X",
                            "layerType": "SuperMapWMTS",
                            "caption": "垦造耕地-立项_省级下发",
                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/b069943cccf1af8089ab64597cc38cce",
                            "visible": false,
                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/9cab06ef3ada06fc065b649bbfd64cb2?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wctx_cgcs_4549:gl_tdzz_kzgd_lx_py_latest_3_0"
                        },
                        {
                            "id": "gl_tdzz_kzgd_ys_py_latest_3_0",
                            "layerName": "TDZZ_KZGD_YS_X",
                            "layerType": "SuperMapWMTS",
                            "caption": "垦造耕地-验收_省级下发",
                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/d4248627559c58b27a2914f1a1d8639e",
                            "visible": false,
                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/9cab06ef3ada06fc065b649bbfd64cb2?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wctx_cgcs_4549:gl_tdzz_kzgd_ys_py_latest_3_0"
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
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/deb6a4f7a6c675006b8d6abef776aa70",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/9cab06ef3ada06fc065b649bbfd64cb2?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wctx_cgcs_4549:gl_zjgg_cjdkl_py_latest_3_0"
                                },
                                {
                                    "id": "gl_zjgg_jxdkl_py_latest_3_0",
                                    "layerName": "NCTDZHZZ_JXDK_L",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "建新地块L_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/50ef1d7e91ffa7371209514913d41787",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/9cab06ef3ada06fc065b649bbfd64cb2?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wctx_cgcs_4549:gl_zjgg_jxdkl_py_latest_3_0"
                                },
                                {
                                    "id": "gl_zjgg_jxdkx_py_latest_3_0",
                                    "layerName": "NCTDZHZZ_JXDK_X",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "建新地块X_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/049ab9d9d46149156cc9e4da29402da5",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/9cab06ef3ada06fc065b649bbfd64cb2?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wctx_cgcs_4549:gl_zjgg_jxdkx_py_latest_3_0"
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
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/37fe2faafef7cba599a394f052a406cf",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/9cab06ef3ada06fc065b649bbfd64cb2?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wctx_cgcs_4549:gl_tzgzdk_gdzlts_lx_py_latest_3_0"
                                },
                                {
                                    "id": "gl_tzgzdk_gdzlts_ys_py_latest_3_0",
                                    "layerName": "TDZZ_GDZLTS_YS",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "耕地质量提升-验收_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/740e2d10bc249f734c173cfd725c1f50",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/9cab06ef3ada06fc065b649bbfd64cb2?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wctx_cgcs_4549:gl_tzgzdk_gdzlts_ys_py_latest_3_0"
                                },
                                {
                                    "id": "gl_tzgzdk_hgsdk_lx_py_latest_3_0",
                                    "layerName": "TDZZ_HGSDK_LX_X",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "旱改水地块-立项_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/7028a9803c8107299f8ddb7d335b597c",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/9cab06ef3ada06fc065b649bbfd64cb2?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wctx_cgcs_4549:gl_tzgzdk_hgsdk_lx_py_latest_3_0"
                                },
                                {
                                    "id": "gl_tzgzdk_hgsdk_ys_py_latest_3_0",
                                    "layerName": "TDZZ_HGSDK_YS_X",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "旱改水地块-验收_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/71af7018192901ed0fe92e83378dd2a2",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/9cab06ef3ada06fc065b649bbfd64cb2?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wctx_cgcs_4549:gl_tzgzdk_hgsdk_ys_py_latest_3_0"
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
                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/eca40cf3377663f4b930fa768a69886d",
                            "visible": false,
                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/9cab06ef3ada06fc065b649bbfd64cb2?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wctx_cgcs_4549:gl_ksgl_lsks_py_latest_3_0"
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
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/7c8fa015ce9801e1475128151ca312c1",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/9cab06ef3ada06fc065b649bbfd64cb2?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wctx_cgcs_4549:gl_ckq_ckqdj_py_latest_3_0"
                                },
                                {
                                    "id": "gl_ckq_hdkqfw_py_latest_3_0",
                                    "layerName": "CKQ_HDKQFW",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "划定矿区范围_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/06aeda87fcd56e655ff9055a1de8ba7c",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/9cab06ef3ada06fc065b649bbfd64cb2?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wctx_cgcs_4549:gl_ckq_hdkqfw_py_latest_3_0"
                                },
                                {
                                    "id": "gl_ckq_ckqdj_ls_py_latest_3_0",
                                    "layerName": "CKQDJ_LSX",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "采矿权登记-历史_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/968d4b62e6d859163d52dab9f33855bd",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/9cab06ef3ada06fc065b649bbfd64cb2?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wctx_cgcs_4549:gl_ckq_ckqdj_ls_py_latest_3_0"
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
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/9ddbb8690a6866e12630e80c1741bd7f",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/9cab06ef3ada06fc065b649bbfd64cb2?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wctx_cgcs_4549:gl_cldj_cmdj_py_latest_3_0"
                                },
                                {
                                    "id": "gl_cldj_drkqsdj_py_latest_3_0",
                                    "layerName": "CLDJ_DRKQS",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "地热矿泉水登记_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/45eb680df68b5098bf483f39542bf6d7",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/9cab06ef3ada06fc065b649bbfd64cb2?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wctx_cgcs_4549:gl_cldj_drkqsdj_py_latest_3_0"
                                },
                                {
                                    "id": "gl_cldj_jsydyf_py_latest_3_0",
                                    "layerName": "CLDJ_JSYDYF_X",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "建设用地压覆_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/870272cece40ab8bf1da42696b593b02",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/9cab06ef3ada06fc065b649bbfd64cb2?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wctx_cgcs_4549:gl_cldj_jsydyf_py_latest_3_0"
                                },
                                {
                                    "id": "gl_cldj_yfdj_py_latest_3_0",
                                    "layerName": "CLDJ_YFDJ_X",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "压覆登记_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/740721c951a5f07fe67530491e9132cf",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/9cab06ef3ada06fc065b649bbfd64cb2?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wctx_cgcs_4549:gl_cldj_yfdj_py_latest_3_0"
                                },
                                {
                                    "id": "gl_cldj_zydj_pt_latest_3_0",
                                    "layerName": "CLDJ_ZYDJ_X",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "占用登记_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/7aaa870786d272dc39390350d0f1e9c3",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/9cab06ef3ada06fc065b649bbfd64cb2?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wctx_cgcs_4549:gl_cldj_zydj_pt_latest_3_0"
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
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/067d4cacd8a617523c047e36b70afeda",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/9cab06ef3ada06fc065b649bbfd64cb2?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wctx_cgcs_4549:gl_tkq_tkqdzdc_py_latest_3_0"
                                },
                                {
                                    "id": "gl_tkq_tkqkcdj_ls_py_latest_3_0",
                                    "layerName": "TKQ_KCDJ_LSX",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "探矿权勘查登记_历史_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/03a6b24a83ff520a0e2862052f667ec4",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/9cab06ef3ada06fc065b649bbfd64cb2?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wctx_cgcs_4549:gl_tkq_tkqkcdj_ls_py_latest_3_0"
                                },
                                {
                                    "id": "gl_tkq_tkqkcdj_py_latest_3_0",
                                    "layerName": "TKQ_KCDJ_X",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "探矿权勘查登记_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/e3aeeec0463613d70b94bf4811101a98",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/9cab06ef3ada06fc065b649bbfd64cb2?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wctx_cgcs_4549:gl_tkq_tkqkcdj_py_latest_3_0"
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
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/005021cd62ca4d01ac93344e64900094",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/9cab06ef3ada06fc065b649bbfd64cb2?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wctx_cgcs_4549:gl_stxf_fqks_py_latest_3_0"
                                },
                                {
                                    "id": "gl_fqks_ksstxf_pt_latest_3_0",
                                    "layerName": "KS",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "矿山生态修复_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/76253dc6f36db06cb2061a759b5d39bc",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/9cab06ef3ada06fc065b649bbfd64cb2?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wctx_cgcs_4549:gl_fqks_ksstxf_pt_latest_3_0"
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
                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/1eea4e78eecb46d4ccfba1dbf28d44fa",
                            "visible": false,
                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/9cab06ef3ada06fc065b649bbfd64cb2?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wctx_cgcs_4549:gl_wtzz_dpfwtzz_pt_latest_3_0"
                        },
                        {
                            "id": "gl_wtzz_ssnydzz_pt_latest_3_0",
                            "layerName": "WTZZ_SSNYDZZX",
                            "layerType": "SuperMapWMTS",
                            "caption": "设施农用地整治_省级下发",
                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/6978c20ed1a9a809ed938d5da261432b",
                            "visible": false,
                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/9cab06ef3ada06fc065b649bbfd64cb2?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wctx_cgcs_4549:gl_wtzz_ssnydzz_pt_latest_3_0"
                        },
                        
                    ]
                }
               
            ]
        }
    ]


});

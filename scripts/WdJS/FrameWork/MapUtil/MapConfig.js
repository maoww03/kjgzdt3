define({
    token:false,
    option: {
        view: {
            center: [567813.634, 3096556.623],
            zoom: 3,
            resolution: 39091.947994829316
        }
    },
    extent: [423788.27389814425, 2935769.3486772366, 719810.8880697023, 3188104.0327783935],
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
            subLayers: [

                {
                    layerType: "GroupLayer",
                    name: "SLZY",
                    caption: "森林资源",
                    thematicMap: true,
                    subLayers: [
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
                                     "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/99df156b824ede7e655d3e5fa762133e",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/486250386a3f6b25423d6b459cd10b28?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_qs_cgcs_4549:xz_slzy_2018_gjjgyl_py_latest_3_0"
                                },
                                {
                                    "id": "xz_slzy_2018_sjstgyl_py_latest_3_0",
                                    "layerName": "xz_slzy_2018_sjstgyl_py_latest_3_0",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "省级生态公益林2018_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/12768971a8308595948913859198ff00",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/486250386a3f6b25423d6b459cd10b28?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_qs_cgcs_4549:xz_slzy_2018_sjstgyl_py_latest_3_0"
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
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/d5e583756e8f4c737e751cb6e5f9375e",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/486250386a3f6b25423d6b459cd10b28?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_qs_cgcs_4549:xz_slzy_2018_sydbhq_py_latest_3_0"
                                },
                                {
                                    "id": "xz_slzy_2020_zrbhd_py_latest_3_0",
                                    "layerName": "xz_slzy_2020_zrbhd_py_latest_3_0",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "自然保护地2020_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/61b09037dba7cf957e8d259ea017d41a",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/486250386a3f6b25423d6b459cd10b28?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_qs_cgcs_4549:xz_slzy_2020_zrbhd_py_latest_3_0"
                                },
                                {
                                    "id": "xz_slzy_2016_zrbhd_xz_py_latest_3_0",
                                    "layerName": "xz_slzy_2016_zrbhd_xz_py_latest_3_0",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "自然保护地_现状2016",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/629d142779a3fffbb12068c8ce4010d1",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/486250386a3f6b25423d6b459cd10b28?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_qs_cgcs_4549:xz_slzy_2016_zrbhd_xz_py_latest_3_0"
                                },
                                {
                                    "id": "xz_slzy_2016_zrbhd_yhh_py_latest_3_0",
                                    "layerName": "xz_slzy_2016_zrbhd_yhh_py_latest_3_0",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "自然保护地_优化后2016",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/bbe7e08322002977a1982af8ce5d4596",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/486250386a3f6b25423d6b459cd10b28?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_qs_cgcs_4549:xz_slzy_2016_zrbhd_yhh_py_latest_3_0"
                                }
                            ]
                        },
                        {
                            "id": "xz_slzy_xjejdcslzy_py_latest_3_0",
                            "layerName": "xz_slzy_xjejdcslzy_py_latest_3_0",
                            "layerType": "SuperMapWMTS",
                            "caption": "县级二级调查森林资源_省级下发",
                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/81258249f592e86afda82d83ca17bd5e",
                            "visible": false,
                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/486250386a3f6b25423d6b459cd10b28?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_qs_cgcs_4549:xz_slzy_xjejdcslzy_py_latest_3_0"
                        },
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
                            name: "DXYDZXDC",
                            caption: "低效用地专项调查",
                            thematicMap: true,
                            subLayers: [
                                {
                                    "id": "xz_dxydzxdc_2019_dxdcdytb_py_latest_3_0",
                                    "layerName": "xz_dxydzxdc_2019_dxdcdytb_py_latest_3_0",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "低效调查单元图斑2019_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/8448d84910296bdc97da569f53c1031b",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/486250386a3f6b25423d6b459cd10b28?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_qs_cgcs_4549:xz_dxydzxdc_2019_dxdcdytb_py_latest_3_0"
                                },
                                {
                                    "id": "xz_dxydzxdc_2019_dxdcqtb_py_latest_3_0",
                                    "layerName": "xz_dxydzxdc_2019_dxdcqtb_py_latest_3_0",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "低效调查区图斑2019_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/5b10dd5a0c782bbf7b480ee9b764b156",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/486250386a3f6b25423d6b459cd10b28?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_qs_cgcs_4549:xz_dxydzxdc_2019_dxdcqtb_py_latest_3_0"
                                },
                                {
                                    "id": "xz_dxydzxdc_2020_dxdcdytb_py_latest_3_0",
                                    "layerName": "xz_dxydzxdc_2020_dxdcdytb_py_latest_3_0",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "低效调查单元图斑2020_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/5dadbe6261fa7fd70a465265d642bcf3",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/486250386a3f6b25423d6b459cd10b28?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_qs_cgcs_4549:xz_dxydzxdc_2020_dxdcdytb_py_latest_3_0"
                                },
                                {
                                    "id": "xz_dxydzxdc_2020_dxdcqtb_py_latest_3_0",
                                    "layerName": "xz_dxydzxdc_2020_dxdcqtb_py_latest_3_0",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "低效调查区图斑2020_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/560a74d4ff6d4f9f99fac9c069e98fc9",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/486250386a3f6b25423d6b459cd10b28?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_qs_cgcs_4549:xz_dxydzxdc_2020_dxdcqtb_py_latest_3_0"
                                },
                                {
                                    "id": "xz_dxydzxdc_2018_dcdytb_py_latest_3_0",
                                    "layerName": "xz_dxydzxdc_2018_dcdytb_py_latest_3_0",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "低效调查单元图斑2018",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/a8f186651630568e915f8640504909e8",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/acaa0391ebe1546424200246d0cd2f1b?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_sbj_cgcs_4549:xz_dxydzxdc_2018_dcdytb_py_latest_3_0"
                                },
                                {
                                    "id": "xz_dxydzxdc_2018_dcqtb_py_latest_3_0",
                                    "layerName": "xz_dxydzxdc_2018_dcqtb_py_latest_3_0",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "低效调查区图斑2018",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/41825d2f54b0ae12427f309ca1d641b0",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/acaa0391ebe1546424200246d0cd2f1b?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_sbj_cgcs_4549:xz_dxydzxdc_2018_dcqtb_py_latest_3_0"
                                },
                                {
                                    "id": "xz_dxydzxdc_2018_dcqtbqs_py_latest_3_0",
                                    "layerName": "xz_dxydzxdc_2018_dcqtbqs_py_latest_3_0",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "低效调查区图斑权属2018",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/625872e4bb6a861a7a9ad8d9555bb5cd",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/486250386a3f6b25423d6b459cd10b28?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_qs_cgcs_4549:xz_dxydzxdc_2018_dcqtbqs_py_latest_3_0"
                                },
                                {
                                    "id": "xz_dxydzxdc_2018_dcdytbqs_py_latest_3_0",
                                    "layerName": "GCS330300_1002_CZDXYDZXDC_DXYDDCDYQS_2018",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "低效调查单元图斑权属2018",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/f059e3a6cfa4e5c2c4ed4de3092ad9d9",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/486250386a3f6b25423d6b459cd10b28?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_qs_cgcs_4549:xz_dxydzxdc_2018_dcdytbqs_py_latest_3_0"
                                },
                            ]
                        },
                        {
                            layerType: "GroupLayer",
                            name: "ZDQPZHDJ",
                            caption: "征地区片综合地价",
                            thematicMap: true,
                            subLayers: [
                                {
                                    "id": "xz_tdzy_zdqpzhdj_cj_py_latest_3_0",
                                    "layerName": "xz_tdzy_zdqpzhdj_cj_py_latest_3_0",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "征地区片综合地价_村界",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/eb6d287be3b00226341be5e969485935",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/486250386a3f6b25423d6b459cd10b28?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_qs_cgcs_4549:xz_tdzy_zdqpzhdj_cj_py_latest_3_0"
                                },
                                {
                                    "id": "xz_tdzy_zdqpzhdj_xj_py_latest_3_0",
                                    "layerName": "xz_tdzy_zdqpzhdj_xj_py_latest_3_0",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "征地区片综合地价_区县界",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/9b47ffb8d4f64480694887ea4734551e",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/486250386a3f6b25423d6b459cd10b28?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_qs_cgcs_4549:xz_tdzy_zdqpzhdj_xj_py_latest_3_0"
                                }
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
                                            "id": "xz_gdzldbndgx_2019_dxpd_py_latest_3_0",
                                            "layerName": "PCS330300_XZ_GDZLDBNDGX_2019_DXPD_PY",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "地形坡度2019_离线",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/7c79ee87d333b6a028f37c4c42dd6254",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/486250386a3f6b25423d6b459cd10b28?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_qs_cgcs_4549:xz_gdzldbndgx_2019_dxpd_py_latest_3_0"
                                        },
                                        {
                                            "id": "xz_gdzldbndgx_2019_dxsms_py_latest_3_0",
                                            "layerName": "PCS330300_XZ_GDZLDBNDGX_2019_DXSMS_PY",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "地下水埋深2019_离线",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/03100451f3cf3bb234f3d2616ce5895f",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/486250386a3f6b25423d6b459cd10b28?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_qs_cgcs_4549:xz_gdzldbndgx_2019_dxsms_py_latest_3_0"
                                        },
                                        {
                                            "id": "xz_gdzldbndgx_2019_fztb_py_latest_3_0",
                                            "layerName": "PCS330300_XZ_GDZLDBNDGX_2019_FZTB_PY",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "辅助图斑2019_离线",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/10ab1d17ca490571d575a65c05dc0dcd",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/486250386a3f6b25423d6b459cd10b28?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_qs_cgcs_4549:xz_gdzldbndgx_2019_fztb_py_latest_3_0"
                                        },
                                        {
                                            "id": "xz_gdzldbndgx_2019_trsjd_py_latest_3_0",
                                            "layerName": "PCS330300_XZ_GDZLDBNDGX_2019_TRSJD_PY",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "土壤酸碱度分布区2019_离线",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/f2146627182641ac2aa5a3644fe7d3cf",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/486250386a3f6b25423d6b459cd10b28?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_qs_cgcs_4549:xz_gdzldbndgx_2019_trsjd_py_latest_3_0"
                                        },
                                        {
                                            "id": "xz_gdzldbndgx_2019_xjfddy_py_latest_3_0",
                                            "layerName": "PCS330300_XZ_GDZLDBNDGX_2019_TRYJZHL_PY",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "县级分等单元2019_离线",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/917553d4a15acef246963db6ddc87a49",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/486250386a3f6b25423d6b459cd10b28?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_qs_cgcs_4549:xz_gdzldbndgx_2019_xjfddy_py_latest_3_0"
                                        },
                                        {
                                            "id": "xz_gdzldbndgx_2019_hbqxjfddy_p_latest_3_0",
                                            "layerName": "xz_gdzldbndgx_2019_hbqxjfddy_p_latest_3_0",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "合并前县级分等单元2019",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/be448f60182b39edeb7008bc0087c888",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/486250386a3f6b25423d6b459cd10b28?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_qs_cgcs_4549:xz_gdzldbndgx_2019_hbqxjfddy_p_latest_3_0"
                                        },
                                        {
                                            "id": "xz_gdzldbndgx_2019_jjxs_py_latest_3_0",
                                            "layerName": "xz_gdzldbndgx_2019_jjxs_py_latest_3_0",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "土地经济系数等值区2019",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/010f8057d7a08460cbf357fb7382b879",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/486250386a3f6b25423d6b459cd10b28?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_qs_cgcs_4549:xz_gdzldbndgx_2019_jjxs_py_latest_3_0"
                                        },
                                        {
                                            "id": "xz_gdzldbndgx_2019_lyxs_py_latest_3_0",
                                            "layerName": "xz_gdzldbndgx_2019_lyxs_py_latest_3_0",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "利用系数分布区2019",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/0e1d209ebfba00ad757658ed3ce5b328",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/486250386a3f6b25423d6b459cd10b28?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_qs_cgcs_4549:xz_gdzldbndgx_2019_lyxs_py_latest_3_0"
                                        },
                                        {
                                            "id": "xz_gdzldbndgx_2019_pstj_py_latest_3_0",
                                            "layerName": "xz_gdzldbndgx_2019_pstj_py_latest_3_0",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "排水条件分布区2019",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/24b0e85a2056388e5e227468767abefe",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/486250386a3f6b25423d6b459cd10b28?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_qs_cgcs_4549:xz_gdzldbndgx_2019_pstj_py_latest_3_0"
                                        },
                                        {
                                            "id": "xz_gdzldbndgx_2019_trfl_py_latest_3_0",
                                            "layerName": "xz_gdzldbndgx_2019_trfl_py_latest_3_0",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "土壤肥力分布区2019",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/cca333216e2b39c85377b5efab2f3473",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/486250386a3f6b25423d6b459cd10b28?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_qs_cgcs_4549:xz_gdzldbndgx_2019_trfl_py_latest_3_0"
                                        },
                                        {
                                            "id": "xz_gdzldbndgx_2019_tryjzhl_py_latest_3_0",
                                            "layerName": "xz_gdzldbndgx_2019_tryjzhl_py_latest_3_0",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "土壤有机质含量分布区2019",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/1fe3fd8ca9672a8b3f397628daa1108f",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/486250386a3f6b25423d6b459cd10b28?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_qs_cgcs_4549:xz_gdzldbndgx_2019_tryjzhl_py_latest_3_0"
                                        },
                                        {
                                            "id": "xz_gdzldbndgx_2019_xjlxfddy_pt_latest_3_0",
                                            "layerName": "xz_gdzldbndgx_2019_xjlxfddy_pt_latest_3_0",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "县级零星分等单元2019",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/80ab0c14775bebd227f659e3733af29b",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/486250386a3f6b25423d6b459cd10b28?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_qs_cgcs_4549:xz_gdzldbndgx_2019_xjlxfddy_pt_latest_3_0"
                                        },
                                        {
                                            "id": "xz_gdzldbndgx_2019_bctrzd_py_latest_3_0",
                                            "layerName": "xz_gdzldbndgx_2019_bctrzd_py_latest_3_0",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "表层土壤质地分布区2019",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/8675e873f40763b7b2fbea37c7a36a2b",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/486250386a3f6b25423d6b459cd10b28?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_qs_cgcs_4549:xz_gdzldbndgx_2019_bctrzd_py_latest_3_0"
                                        },
                                        {
                                            "id": "xz_gdzldbndgx_2019_bzyd_pt_latest_3_0",
                                            "layerName": "xz_gdzldbndgx_2019_bzyd_pt_latest_3_0",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "标准样地2019",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/5e5f0ea09253f4b062cbf48310694bb9",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/486250386a3f6b25423d6b459cd10b28?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_qs_cgcs_4549:xz_gdzldbndgx_2019_bzyd_pt_latest_3_0"
                                        },
                                        {
                                            "id": "xz_gdzldbndgx_2019_ggbzl_py_latest_3_0",
                                            "layerName": "xz_gdzldbndgx_2019_ggbzl_py_latest_3_0",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "灌溉保证率分布区2019",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/5de38e5504bab049bd393be1fc3afc3f",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/486250386a3f6b25423d6b459cd10b28?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_qs_cgcs_4549:xz_gdzldbndgx_2019_ggbzl_py_latest_3_0"
                                        },
                                        {
                                            "id": "xz_gdzldbndgx_2019_gzzdfb_py_latest_3_0",
                                            "layerName": "xz_gdzldbndgx_2019_gzzdfb_py_latest_3_0",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "耕作制度分布区2019",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/6889fd378c9ed1e8f7bc767e0dd8006e",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/486250386a3f6b25423d6b459cd10b28?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_qs_cgcs_4549:xz_gdzldbndgx_2019_gzzdfb_py_latest_3_0"
                                        },
                                        {
                                            "id": "xz_gdzldbndgx_2019_hbgd_py_latest_3_0",
                                            "layerName": "xz_gdzldbndgx_2019_hbgd_py_latest_3_0",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "海拔高度分布区2019",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/4ee1b764c3af2b32cb5c1849299115e2",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/486250386a3f6b25423d6b459cd10b28?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_qs_cgcs_4549:xz_gdzldbndgx_2019_hbgd_py_latest_3_0"
                                        },
                                        {
                                            "id": "xz_gdzldbndgx_2019_zacjdbsd_py_latest_3_0",
                                            "layerName": "xz_gdzldbndgx_2019_zacjdbsd_py_latest_3_0",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "障碍层距地表深度分布区2019",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/e23053674aa65f5a07ee7e063ad294a7",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/486250386a3f6b25423d6b459cd10b28?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_qs_cgcs_4549:xz_gdzldbndgx_2019_zacjdbsd_py_latest_3_0"
                                        },
                                        {
                                            "id": "xz_gdzldbndgx_2019_zbq_py_latest_3_0",
                                            "layerName": "xz_gdzldbndgx_2019_zbq_py_latest_3_0",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "分等因素指标区2019",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/296b83b55b77a0cc77f879796031af24",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/486250386a3f6b25423d6b459cd10b28?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_qs_cgcs_4549:xz_gdzldbndgx_2019_zbq_py_latest_3_0"
                                        }
                                        
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
                                    "id": "xz_tdzy_2018_bznt_py_latest_3_0",
                                    "layerName": "xz_tdzy_2018_bznt_py_latest_3_0",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "标准农田2018",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/042fec544a2046426b7148a596e61867",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/486250386a3f6b25423d6b459cd10b28?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_qs_cgcs_4549:xz_tdzy_2018_bznt_py_latest_3_0"
                                },
                            ]
                        },
                        {
                            layerType: "GroupLayer",
                            name: "YJJBNT",
                            caption: "永久基本农田",
                            thematicMap: true,
                            subLayers:[
                                {
                                    "id": "xz_tdzy_2017_jbntbhpk_py_latest_3_0",
                                    "layerName": "xz_tdzy_2017_jbntbhpk_py_latest_3_0",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "基本农田保护片（块）2017",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/d0c126cfdbd0c7df91386511766d1d9d",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/acaa0391ebe1546424200246d0cd2f1b?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_sbj_cgcs_4549:xz_tdzy_2017_jbntbhpk_py_latest_3_0"
                                },
                                {
                                    "id": "xz_tdzy_2017_jbntbhq_py_latest_3_0",
                                    "layerName": "xz_tdzy_2017_jbntbhq_py_latest_3_0",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "基本农田保护区2017",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/410a99379032c58b018d3a3ef92b0ba2",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/acaa0391ebe1546424200246d0cd2f1b?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_sbj_cgcs_4549:xz_tdzy_2017_jbntbhq_py_latest_3_0"
                                },
                                {
                                    "id": "xz_tdzy_2017_jbntbhtb_py_latest_3_0",
                                    "layerName": "xz_tdzy_2017_jbntbhtb_py_latest_3_0",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "基本农田保护图斑2017",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/e9d68594d934fca0d7944b17926276ac",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/acaa0391ebe1546424200246d0cd2f1b?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_sbj_cgcs_4549:xz_tdzy_2017_jbntbhtb_py_latest_3_0"
                                },
                                {
                                    "id": "xz_tdzy_2017_jbntbzp_pt_latest_3_0",
                                    "layerName": "xz_tdzy_2017_jbntbzp_pt_latest_3_0",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "基本农田标志牌2017",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/de7ef109036d70c7a28b4d50373c2238",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/acaa0391ebe1546424200246d0cd2f1b?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_sbj_cgcs_4549:xz_tdzy_2017_jbntbzp_pt_latest_3_0"
                                },
                                {
                                    "id": "xz_tdzy_2017_jbnthrhc_py_latest_3_0",
                                    "layerName": "xz_tdzy_2017_jbnthrhc_py_latest_3_0",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "基本农田划入划出2017",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/7d6881b6203bd709d1981e40e5e81557",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/acaa0391ebe1546424200246d0cd2f1b?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_sbj_cgcs_4549:xz_tdzy_2017_jbnthrhc_py_latest_3_0"
                                },
                                {
                                    "id": "xz_tdzy_tzhctb_py_latest_3_0",
                                    "layerName": "PCS330300_XZ_TDZY_TZHCTB_PY",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "永农调整划出图斑（全市）",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/4df67a0783c52df26e135d95edf54a6e",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/486250386a3f6b25423d6b459cd10b28?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_qs_cgcs_4549:xz_tdzy_tzhctb_py_latest_3_0"
                                },
                                {
                                    "id": "xz_tdzy_yjjbntbhtb_py_latest_3_0",
                                    "layerName": "PCS330300_XZ_TDZY_YJJBNTBHTB_PY",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "永久基本农田保护图斑（全市）",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/f6a9e96b6cc302f7992de89599d13bf9",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/486250386a3f6b25423d6b459cd10b28?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_qs_cgcs_4549:xz_tdzy_yjjbntbhtb_py_latest_3_0"
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
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/2c7ba4b1dd7cfb4d54159ceec06d0671",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/486250386a3f6b25423d6b459cd10b28?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_qs_cgcs_4549:xz_sdzy_2018_gjzysd_pt_latest_3_0"
                                }
                            ]
                        },
                        {
                            layerType: "GroupLayer",
                            name: "SDZYDC",
                            caption: "湿地资源调查",
                            thematicMap: true,
                            subLayers: [
                                {
                                    "id": "xz_sdzydc_2015_sdcl20_py_latest_3_0",
                                    "layerName": "xz_sdzydc_2015_sdcl20_py_latest_3_0",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "湿地存量_20度带2015",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/b86077d243a70ee8c36ff54a831703b5",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/486250386a3f6b25423d6b459cd10b28?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_qs_cgcs_4549:xz_sdzydc_2015_sdcl20_py_latest_3_0"
                                },
                                {
                                    "id": "xz_sdzydc_2016_sdcl20_py_latest_3_0",
                                    "layerName": "xz_sdzydc_2016_sdcl20_py_latest_3_0",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "湿地存量_20度带2016",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/312bae6ada0479eef83a3a223c6f3f1c",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/486250386a3f6b25423d6b459cd10b28?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_qs_cgcs_4549:xz_sdzydc_2016_sdcl20_py_latest_3_0"
                                },
                                {
                                    "id": "xz_sdzydc_2017_sdcl20_py_latest_3_0",
                                    "layerName": "xz_sdzydc_2017_sdcl20_py_latest_3_0",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "湿地存量_20度带2017",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/32f612ce3e21a435f946d044de555055",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/486250386a3f6b25423d6b459cd10b28?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_qs_cgcs_4549:xz_sdzydc_2017_sdcl20_py_latest_3_0"
                                },
                                {
                                    "id": "xz_sdzydc_2018_sdcl20_py_latest_3_0",
                                    "layerName": "xz_sdzydc_2018_sdcl20_py_latest_3_0",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "湿地存量_20度带2018",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/8cefde33c045349f2347ca13cf53b337",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/486250386a3f6b25423d6b459cd10b28?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_qs_cgcs_4549:xz_sdzydc_2018_sdcl20_py_latest_3_0"
                                },
                                {
                                    "id": "xz_sdzydc_2015_sdcl21_py_latest_3_0",
                                    "layerName": "xz_sdzydc_2015_sdcl21_py_latest_3_0",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "湿地存量_21度带2015",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/c807f2bfb53b47ea8c18fb1f4810a4ea",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/486250386a3f6b25423d6b459cd10b28?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_qs_cgcs_4549:xz_sdzydc_2015_sdcl21_py_latest_3_0"
                                },
                                {
                                    "id": "xz_sdzydc_2016_sdcl21_py_latest_3_0",
                                    "layerName": "xz_sdzydc_2016_sdcl21_py_latest_3_0",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "湿地存量_21度带2016",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/51b2e817556c210b87a60dededa93fb6",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/486250386a3f6b25423d6b459cd10b28?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_qs_cgcs_4549:xz_sdzydc_2016_sdcl21_py_latest_3_0"
                                },
                                {
                                    "id": "xz_sdzydc_2017_sdcl21_py_latest_3_0",
                                    "layerName": "xz_sdzydc_2017_sdcl21_py_latest_3_0",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "湿地存量_21度带2017",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/a4f48b39109f9ac4e011414b9450f94a",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/486250386a3f6b25423d6b459cd10b28?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_qs_cgcs_4549:xz_sdzydc_2017_sdcl21_py_latest_3_0"
                                },
                                {
                                    "id": "xz_sdzydc_2018_sdcl21_py_latest_3_0",
                                    "layerName": "xz_sdzydc_2018_sdcl21_py_latest_3_0",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "湿地存量_21度带2018",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/b463b29059f164419c586861f6d7e56b",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/486250386a3f6b25423d6b459cd10b28?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_qs_cgcs_4549:xz_sdzydc_2018_sdcl21_py_latest_3_0"
                                }
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
                            layerType: "GroupLayer",
                            name: "DZZH",
                            caption: "地质灾害",
                            thematicMap: true,
                            subLayers: [
                                {
                                    "id": "xz_dzzh_yhd_pt_latest_3_0",
                                    "layerName": "xz_dzzh_yhd_pt_latest_3_0",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "隐患点_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/5e873963f2934d6596f8dc083397f37d",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/486250386a3f6b25423d6b459cd10b28?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_qs_cgcs_4549:xz_dzzh_yhd_pt_latest_3_0"
                                },
                                {
                                    "id": "xz_dzzh_zqd_pt_latest_3_0",
                                    "layerName": "xz_dzzh_zqd_pt_latest_3_0",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "灾情点_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/867250cae9f1b568dea72566c3423e4d",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/486250386a3f6b25423d6b459cd10b28?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_qs_cgcs_4549:xz_dzzh_zqd_pt_latest_3_0"
                                },
                                {
                                    
                                    // xz_dzzh_dzyhd_pt_latest_3_0
                                    "id": "xz_dzzh_dzyhd_pt_latest_3_0",
                                    "layerName": "xz_dzzh_dzyhd_pt",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "地灾隐患点",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/173e9f71aeedc33268b46156d0d729a7",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/aacf3da749d744eeb323d29021d9dd67?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=wz_data_cgcs2000_4549:xz_dzzh_dzyhd_pt_latest_3_0"
                                },
                                {
                                    "id": "xz_dzzh_dzyfq_pt_latest_3_0",
                                    "layerName": "xz_dzzh_dzyfq_pt",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "地灾易发区",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/0ec965232eb888e914ec400234e9d14e",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/aacf3da749d744eeb323d29021d9dd67?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=wz_data_cgcs2000_4549:xz_dzzh_dzyfq_pt_latest_3_0"
                                },
                                {
                                    "id": "xz_dzzh_dzfxffq_pt_latest_3_0",
                                    "layerName": "xz_dzzh_dzfxffq_pt",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "风险防范区",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/243a2cae7c96e66fcac65036f38b708a",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/aacf3da749d744eeb323d29021d9dd67?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=wz_data_cgcs2000_4549:xz_dzzh_dzfxffq_pt_latest_3_0"
                                },
                                {
                                    "id": "xz_dzzh_dzzyjcd_pt_latest_3_0",
                                    "layerName": "xz_dzzh_dzzyjcd_pt",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "地灾专业监测点",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/854ef744af0a8b47bb874afeee9e03d7",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/aacf3da749d744eeb323d29021d9dd67?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=wz_data_cgcs2000_4549:xz_dzzh_dzzyjcd_pt_latest_3_0"
                                },

                            ]
                        },
                        {
                            "id": "xz_dzsj_dzyjbhq_pt_latest_3_0",
                            "layerName": "xz_dzsj_dzyjbhq_pt_latest_3_0",
                            "layerType": "SuperMapWMTS",
                            "caption": "地质遗迹保护区_省级下发",
                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/fcbd28a2f3a014e8131ccaec0f9083dc",
                            "visible": false,
                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/486250386a3f6b25423d6b459cd10b28?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_qs_cgcs_4549:xz_dzsj_dzyjbhq_pt_latest_3_0"
                        },

                        
                    ]
                },
                {
                    layerType: "GroupLayer",
                    name: "DLGQPCSJ",
                    caption: "地理国情普查数据",
                    thematicMap: true,
                    subLayers: [
                        {
                            layerType: "GroupLayer",
                            name: "CSJCQ",
                            caption: "城市建成区",
                            thematicMap: true,
                            subLayers: [
                                {
                                    "id": "xz_dlgqpc_2015_jcq_py_latest_3_0",
                                    "layerName": "xz_dlgqpc_2015_jcq_py_latest_3_0",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "市区建成区2015",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/85ad45b86ec968622925a27483d9c401",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/acaa0391ebe1546424200246d0cd2f1b?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_sbj_cgcs_4549:xz_dlgqpc_2015_jcq_py_latest_3_0"
                                },
                                {
                                    "id": "xz_dlgqpc_2017_jcq_py_latest_3_0",
                                    "layerName": "xz_dlgqpc_2017_jcq_py_latest_3_0",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "市区建成区2017",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/4e8e0962470cdf739f18ac0f25a700a7",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/acaa0391ebe1546424200246d0cd2f1b?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_sbj_cgcs_4549:xz_dlgqpc_2017_jcq_py_latest_3_0"
                                },
                                {
                                    "id": "xz_dlgqpc_2018_jcq_py_latest_3_0",
                                    "layerName": "xz_dlgqpc_2018_jcq_py_latest_3_0",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "市区建成区2018",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/6f1cc089f39693a6d47d2ee0b51b5729",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/acaa0391ebe1546424200246d0cd2f1b?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_sbj_cgcs_4549:xz_dlgqpc_2018_jcq_py_latest_3_0"
                                },
                                {
                                    "id": "xz_dlgqpc_2019_jcq_py_latest_3_0",
                                    "layerName": "xz_dlgqpc_2019_jcq_py_latest_3_0",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "市区建成区2019",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/5248d45d48b6f3e2f5ff188b4bfab598",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/acaa0391ebe1546424200246d0cd2f1b?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_sbj_cgcs_4549:xz_dlgqpc_2019_jcq_py_latest_3_0"
                                },
                                {
                                    "id": "xz_dlgqpc_2020_jcq_py_latest_3_0",
                                    "layerName": "xz_dlgqpc_2020_jcq_py_latest_3_0",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "市区建成区2020",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/8ef490006c9c34e7ce6913a97e6828a3",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/acaa0391ebe1546424200246d0cd2f1b?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_sbj_cgcs_4549:xz_dlgqpc_2020_jcq_py_latest_3_0"
                                },
                                {
                                    "id": "xz_dlgqpc_2020_jcq_tj_py_latest_3_0",
                                    "layerName": "xz_dlgqpc_2020_jcq_tj_py_latest_3_0",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "市区建成区统计2020",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/e6127c9ba1e8151e75adad40f82705a7",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/acaa0391ebe1546424200246d0cd2f1b?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_sbj_cgcs_4549:xz_dlgqpc_2020_jcq_tj_py_latest_3_0"
                                }
                            ]
                        },
                        {
                            layerType: "GroupLayer",
                            name: "LLDC",
                            caption: "两率调查",
                            thematicMap: true,
                            subLayers: [
                                {
                                    "id": "xz_dlgqpc_2019_ldl_py_latest_3_0",
                                    "layerName": "GCS330300G01_SQLDXZ_2019_PY",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "绿地率2019_离线",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/492e2ebc0cd428765c8ee1685fcf5695",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/acaa0391ebe1546424200246d0cd2f1b?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_sbj_cgcs_4549:xz_dlgqpc_2019_ldl_py_latest_3_0"
                                },
                                {
                                    "id": "xz_dlgqpc_2020_ldl_py_latest_3_0",
                                    "layerName": "GCS330300G01_DLGQPCSJ_LDL_2020",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "绿地率2020_离线",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/2e6f76e157e9056fd44751f68d948359",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/acaa0391ebe1546424200246d0cd2f1b?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_sbj_cgcs_4549:xz_dlgqpc_2020_ldl_py_latest_3_0"
                                },
                                {
                                    "id": "xz_dlgqpc_2015_ldfgl_py_latest_3_0",
                                    "layerName": "xz_dlgqpc_2015_ldfgl_py_latest_3_0",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "绿地覆盖率2015",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/4e5f62796850999187131e5bc7676d51",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/acaa0391ebe1546424200246d0cd2f1b?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_sbj_cgcs_4549:xz_dlgqpc_2015_ldfgl_py_latest_3_0"
                                },
                                {
                                    "id": "xz_dlgqpc_2017_ldfgl_py_latest_3_0",
                                    "layerName": "xz_dlgqpc_2017_ldfgl_py_latest_3_0",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "绿地覆盖率2017",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/f22174bb288dfbcf5e746be7c55fe1a9",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/acaa0391ebe1546424200246d0cd2f1b?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_sbj_cgcs_4549:xz_dlgqpc_2017_ldfgl_py_latest_3_0"
                                },
                                {
                                    "id": "xz_dlgqpc_2017_ldl_py_latest_3_0",
                                    "layerName": "xz_dlgqpc_2017_ldl_py_latest_3_0",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "绿地率2017",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/01618012cb617956753ce67eb9113c7b",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/acaa0391ebe1546424200246d0cd2f1b?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_sbj_cgcs_4549:xz_dlgqpc_2017_ldl_py_latest_3_0"
                                },
                                {
                                    "id": "xz_dlgqpc_2019_ldfgl_py_latest_3_0",
                                    "layerName": "xz_dlgqpc_2019_ldfgl_py_latest_3_0",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "绿地覆盖率2019",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/4496de3e63d8d822e0435b0c2a1ca414",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/acaa0391ebe1546424200246d0cd2f1b?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_sbj_cgcs_4549:xz_dlgqpc_2019_ldfgl_py_latest_3_0"
                                },
                                {
                                    "id": "xz_dlgqpc_2020_ldfgl_py_latest_3_0",
                                    "layerName": "xz_dlgqpc_2020_ldfgl_py_latest_3_0",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "绿地覆盖率2020",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/2e391b9e6f96fb4f54e93276964ed963",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/acaa0391ebe1546424200246d0cd2f1b?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_sbj_cgcs_4549:xz_dlgqpc_2020_ldfgl_py_latest_3_0"
                                },
                                {
                                    "id": "xz_dlgqpc_2018_ldfgl_py_latest_3_0",
                                    "layerName": "SQLDFG_2018_PY",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "绿地覆盖率2018",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/0fce70c361e079e7b72a49de1c210e3f",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/acaa0391ebe1546424200246d0cd2f1b?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_sbj_cgcs_4549:xz_dlgqpc_2018_ldfgl_py_latest_3_0"
                                },
                                {
                                    "id": "xz_dlgqpc_2015_ldl_py_latest_3_0",
                                    "layerName": "SQLDXZ_2015_PY",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "绿地率2015",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/3b6a3be33b883ec82f03ee4b4e501d35",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/acaa0391ebe1546424200246d0cd2f1b?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_sbj_cgcs_4549:xz_dlgqpc_2015_ldl_py_latest_3_0"
                                },
                                {
                                    "id": "xz_dlgqpc_2018_ldl_py_latest_3_0",
                                    "layerName": "SQLDXZ_2018_PY",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "绿地率2018",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/7878d6436ac0af70eb132a813577a4ce",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/acaa0391ebe1546424200246d0cd2f1b?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_sbj_cgcs_4549:xz_dlgqpc_2018_ldl_py_latest_3_0"
                                },

                                
                            ]
                        }

                    ]
                },
                {
                    layerType: "GroupLayer",
                    name: "DXKJ",
                    caption: "地下空间",
                    thematicMap: true,
                    subLayers: [
                        {
                            layerType: "GroupLayer",
                            name: "DXGX",
                            caption: "地下管线",
                            thematicMap: true,
                            subLayers: [
                                {
                                    layerType: "GroupLayer",
                                    name: "XZGX",
                                    caption: "现状管线",
                                    thematicMap: true,
                                    subLayers: [
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    layerType: "GroupLayer",
                    name: "JCCH",
                    caption: "基础测绘",
                    thematicMap: true,
                    subLayers: [
                        {
                            layerType: "GroupLayer",
                            name: "JCDL",
                            caption: "基础地理",
                            thematicMap: true,
                            subLayers: [
                                {
                                    layerType: "GroupLayer",
                                    name: "XZJX",
                                    caption: "行政界线",
                                    thematicMap: true,
                                    subLayers: [
                                        {
                                            "id": "xz_jcch_2022_xzqh_qx_py_latest_3_0",
                                            "layerName": "PCS330300_XZ_JCCH_2022_XZQH_QX_PY",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "行政区划-区县",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/763ede2f6ae089de5b401fb8a9d419af",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/486250386a3f6b25423d6b459cd10b28?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_qs_cgcs_4549:xz_jcch_2022_xzqh_qx_py_latest_3_0"
                                        },
                                        {
                                            "id": "xz_jcch_2022_xzqh_xz_py_latest_3_0",
                                            "layerName": "PCS330300_XZ_JCCH_2022_XZQH_XZ_PY",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "行政区划-乡镇",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/51acab48ab38de602a8dff9e5f5ca758",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/486250386a3f6b25423d6b459cd10b28?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_qs_cgcs_4549:xz_jcch_2022_xzqh_xz_py_latest_3_0"
                                        },
                                        {
                                            "id": "xz_tdtrh_2018_jcdl_ds_py_latest_3_0",
                                            "layerName": "xz_tdtrh_2018_jcdl_ds_py_latest_3_0",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "行政区划-地市",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/fc67cbcd925865a8d7a358b978411220",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/486250386a3f6b25423d6b459cd10b28?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_qs_cgcs_4549:xz_tdtrh_2018_jcdl_ds_py_latest_3_0"
                                        },
                                        {
                                            "id": "xz_jcdl_ojkfw_py_latest_3_0",
                                            "layerName": "xz_jcdl_ojkfw_py",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "功能区界线_瓯江口",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/e469c2786bf15f4e2f832c5991e708a6",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/acaa0391ebe1546424200246d0cd2f1b?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_sbj_cgcs_4549:xz_jcdl_ojkfw_py_latest_3_0"
                                        },
                                        {
                                            "id": "xz_jcdl_znkjcfw_py_latest_3_0",
                                            "layerName": "xz_jcdl_znkjcfw_py",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "功能区界线_浙南科技城",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/85dea380b6ac98642932ef7a27d3f9a1",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/acaa0391ebe1546424200246d0cd2f1b?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_sbj_cgcs_4549:xz_jcdl_znkjcfw_py_latest_3_0"
                                        },

                                        // {
                                        //     "id": "xz_tdtrh_2018_jcdl_qx_py_latest_3_0",
                                        //     "layerName": "xz_tdtrh_2018_jcdl_qx_py_latest_3_0",
                                        //     "layerType": "SuperMapWMTS",
                                        //     "caption": "行政区划-区县",
                                        //     "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/18c12cae14b609cf5d53c889085c05e5",
                                        //     "visible": false,
                                        //     "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/486250386a3f6b25423d6b459cd10b28?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_qs_cgcs_4549:xz_tdtrh_2018_jcdl_qx_py_latest_3_0"
                                        // },
                                        // {
                                        //     "id": "xz_tdtrh_2018_jcdl_xz_py_latest_3_0",
                                        //     "layerName": "xz_tdtrh_2018_jcdl_xz_py_latest_3_0",
                                        //     "layerType": "SuperMapWMTS",
                                        //     "caption": "行政区划-乡镇",
                                        //     "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/49241a1eb6e6f8802932fde59af6e0a0",
                                        //     "visible": false,
                                        //     "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/486250386a3f6b25423d6b459cd10b28?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_qs_cgcs_4549:xz_tdtrh_2018_jcdl_xz_py_latest_3_0"
                                        // },
                                        // {
                                        //     "id": "xz_tdtrh_2018_jcdl_xzc_py_latest_3_0",
                                        //     "layerName": "xz_tdtrh_2018_jcdl_xzc_py_latest_3_0",
                                        //     "layerType": "SuperMapWMTS",
                                        //     "caption": "行政区划-行政村",
                                        //     "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/648e1ffd7f85d7b27e65f9287489dde8",
                                        //     "visible": false,
                                        //     "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/486250386a3f6b25423d6b459cd10b28?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_qs_cgcs_4549:xz_tdtrh_2018_jcdl_xzc_py_latest_3_0"
                                        // },
                                        {
                                            id: "xz_jcdl_styfw_py_latest_3_0",
                                            layerType: "SuperMapWMTS",
                                            caption: "功能区界线_生态园",
                                            mapUrl: "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/9751c432b760f4c28c5ad196e808c020",
                                            visible: false,
                                            queryUrl: "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/acaa0391ebe1546424200246d0cd2f1b?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_sbj_cgcs_4549:xz_jcdl_styfw_py_latest_3_0"
                                        }
                                    
                                    ]
                                },
                            ]
                        },
                        {
                            layerType: "GroupLayer",
                            name: "YGYX",
                            caption: "遥感影像",
                            thematicMap: true,
                            subLayers: [
                                {
                                    layerType: "GroupLayer",
                                    name: "WXYG",
                                    caption: "卫星遥感",
                                    thematicMap: true,
                                    subLayers: [
                                        {
                                            "id": "xz_ygyx_2mjyxsx_py_latest_3_0",
                                            "layerName": "xz_ygyx_2mjyxsx_py",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "遥感影像_2米级影像时相_省级下发",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/390cd99374076a240cd3e95de1f84ac9",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/486250386a3f6b25423d6b459cd10b28?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_qs_cgcs_4549:xz_ygyx_2mjyxsx_py_latest_3_0"
                                        },
                                        {
                                            "id": "xz_ygyx_1mjyxsx_py_latest_3_0",
                                            "layerName": "xz_ygyx_1mjyxsx_py",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "遥感影像_1米级影像时相_省级下发",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/5448cf993acf4735bcc0a19eb3471d32",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/486250386a3f6b25423d6b459cd10b28?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_qs_cgcs_4549:xz_ygyx_1mjyxsx_py_latest_3_0"
                                        },
                                        {
                                            "id": "xz_ygyx_bhtb_py_latest_3_0",
                                            "layerName": "xz_ygyx_bhtb_py",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "变化图斑_省级下发",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/8b2355dacd0c21b0181738f7e6aa3b2e",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/486250386a3f6b25423d6b459cd10b28?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_qs_cgcs_4549:xz_ygyx_bhtb_py_latest_3_0"
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
                                    "id": "gh_zykzx_2020_yjjbntbhhx_py_latest_3_0",
                                    "layerName": "gh_zykzx_2020_yjjbntbhhx_py_latest_3_0",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "永久基本农田保护红线2020_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/d41b8314cc70452f18039b495ec60cd4",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/486250386a3f6b25423d6b459cd10b28?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_qs_cgcs_4549:gh_zykzx_2020_yjjbntbhhx_py_latest_3_0"
                                },
                                {
                                    "id": "gh_zykzx_2017_czkfbj_py_latest_3_0",
                                    "layerName": "gh_zykzx_2017_czkfbj_py_latest_3_0",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "城镇开发边界2017",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/f196e0c4aa2c4409757b8d3f76154fe6",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/486250386a3f6b25423d6b459cd10b28?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_qs_cgcs_4549:gh_zykzx_2017_czkfbj_py_latest_3_0"
                                },
                                {
                                    "id": "gh_zykzx_2017_yjjbnthx_py_latest_3_0",
                                    "layerName": "gh_zykzx_2017_yjjbnthx_py_latest_3_0",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "永久基本农田保护红线2017",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/9b8194bb1b6fa558be7d0e4c5ae7856f",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/acaa0391ebe1546424200246d0cd2f1b?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_sbj_cgcs_4549:gh_zykzx_2017_yjjbnthx_py_latest_3_0"
                                },
                                {
                                    "id": "gh_zykzx_2021_czkfbj_py_latest_3_0",
                                    "layerName": "GCS330300_2001_CZKFBJ_CZKFBJ_2021",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "城镇开发边界2021",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/96b7bfe35b6c09f11c23dc4805a95df4",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/486250386a3f6b25423d6b459cd10b28?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_qs_cgcs_4549:gh_zykzx_2021_czkfbj_py_latest_3_0"
                                },
                                {
                                    "id": "gh_zykzx_2018_stbhhx_py_latest_3_0",
                                    "layerName": "gh_zykzx_2018_stbhhx_py_latest_3_0",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "生态保护红线2018_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/0944621ef6e880c75083f966332e907a",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/486250386a3f6b25423d6b459cd10b28?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_qs_cgcs_4549:gh_zykzx_2018_stbhhx_py_latest_3_0"
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
                            name: "KZXXXGH",
                            caption: "控制性详细规划",
                            thematicMap: true,
                            subLayers: [
                                {
                                    layerType: "GroupLayer",
                                    name: "KZXXXGHJT",
                                    caption: "交通",
                                    thematicMap: true,
                                    subLayers: [
                                        {
                                            id: "gh_kg_dlbx_ln_latest_3_0",
                                            layerName: "gh_kg_dlbx_ln_latest_3_0",
                                            layerType: "SuperMapWMTS",
                                            caption: "道路边线",
                                            mapUrl: "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/dc46e13ad4613d15e79e3b0779a86dfb",
                                            visible: false,
                                            queryUrl: "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/acaa0391ebe1546424200246d0cd2f1b?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_sbj_cgcs_4549:gh_kg_dlbx_ln_latest_3_0"
                                        },
                                        {
                                            id: "gh_kg_dlzx_ln_latest_3_0",
                                            layerName: "gh_kg_dlzx_ln_latest_3_0",
                                            layerType: "SuperMapWMTS",
                                            caption: "道路中心线",
                                            mapUrl: "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/271f62d4c6cfd1fbb4c1dd3d047bb56d",
                                            visible: false,
                                            queryUrl: "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/acaa0391ebe1546424200246d0cd2f1b?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_sbj_cgcs_4549:gh_kg_dlzx_ln_latest_3_0"
                                        },
                                        {
                                            id: "gh_kg_gdx_ln_latest_3_0",
                                            layerName: "gh_kg_gdx_ln_latest_3_0",
                                            layerType: "SuperMapWMTS",
                                            caption: "轨道线",
                                            mapUrl: "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/7cbbe77b514fa7ac9303a94ceabaeaf3",
                                            visible: false,
                                            queryUrl:"http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/486250386a3f6b25423d6b459cd10b28?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_qs_cgcs_4549:gh_kg_gdx_ln_latest_3_0"
                                        },
                                        {
                                            id: "gh_kg_jydl_ln_latest_3_0",
                                            layerName: "GCS330300K02_BKJ_JYDL_LN",
                                            layerType: "SuperMapWMTS",
                                            caption: "控规_建议道路",
                                            mapUrl: "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/ffc9769867fa2eb152f3efb62757ef96",
                                            visible: false,
                                            queryUrl:"http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/acaa0391ebe1546424200246d0cd2f1b?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_sbj_cgcs_4549:gh_kg_jydl_ln_latest_3_0"
                                        }
                                    ]
                                },
                                {
                                    layerType: "GroupLayer",
                                    name: "KZXXXGHSX",
                                    caption: "四线",
                                    thematicMap: true,
                                    subLayers: [
                                        {
                                            id: "gh_kg_lhlx_py_latest_3_0",
                                            layerName: "gh_kg_lhlx_py_latest_3_0",
                                            layerType: "SuperMapWMTS",
                                            caption: "绿化绿线",
                                            mapUrl: "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/448a95291b9feb4c6711805449a7a161",
                                            visible: false,
                                            queryUrl: "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/acaa0391ebe1546424200246d0cd2f1b?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_sbj_cgcs_4549:gh_kg_lhlx_py_latest_3_0"
                                        },
                                        {
                                            id: "gh_kg_sshx_ln_latest_3_0",
                                            layerName: "gh_kg_sshx_ln_latest_3_0",
                                            layerType: "SuperMapWMTS",
                                            caption: "基础设施黄线",
                                            // mapUrl: "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/f2371fa1f1b6726b7c441650364c20ed",
                                            mapUrl: "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/0c068e0c63da3626a719e0786165d978",

                                            visible: false,
                                            queryUrl: "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/acaa0391ebe1546424200246d0cd2f1b?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_sbj_cgcs_4549:gh_kg_sshx_ln_latest_3_0"
                                        },
                                        {
                                            id: "gh_kg_sshx_py_latest_3_0",
                                            layerName: "gh_kg_sshx_py_latest_3_0",
                                            layerType: "SuperMapWMTS",
                                            caption: "基础设施黄线面",
                                            mapUrl: "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/9e7e5e1f417171c5d2e7bd454d0609dd",
                                            visible: false,
                                            queryUrl: "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/acaa0391ebe1546424200246d0cd2f1b?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_sbj_cgcs_4549:gh_kg_sshx_py_latest_3_0"
                                        },
                                        {
                                            id: "gh_kg_sxlx_ln_latest_3_0",
                                            layerName: "gh_kg_sxlx_ln_latest_3_0",
                                            layerType: "SuperMapWMTS",
                                            caption: "水系蓝线",
                                            mapUrl: "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/db43d874b7211cef41f2bd7ce28b0487",
                                            visible: false,
                                            queryUrl: "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/acaa0391ebe1546424200246d0cd2f1b?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_sbj_cgcs_4549:gh_kg_sxlx_ln_latest_3_0"
                                        },
                                        {
                                            id: "gh_kg_wbzx_py_latest_3_0",
                                            layerName: "gh_kg_wbzx_py_latest_3_0",
                                            layerType: "SuperMapWMTS",
                                            caption: "文保紫线",
                                            mapUrl: "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/d404704e58de32bf0fafe1c08fb40978",
                                            visible: false,
                                            queryUrl: "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/acaa0391ebe1546424200246d0cd2f1b?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_sbj_cgcs_4549:gh_kg_wbzx_py_latest_3_0"
                                        }
                                    ]
                                },
                                {
                                    layerType: "GroupLayer",
                                    name: "KZXXXGHGGPTSS",
                                    caption: "公共配套设施",
                                    thematicMap: true,
                                    subLayers: [
                                        {
                                            id: "gh_kg_gpfh_pt_latest_3_0",
                                            layerName: "gh_kg_gpfh_pt_latest_3_0",
                                            layerType: "SuperMapWMTS",
                                            caption: "公共配套设施符号",
                                            mapUrl: "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/48885b5ed8dd26473f617edec4b64dcc",
                                            visible: false,
                                            queryUrl: "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/acaa0391ebe1546424200246d0cd2f1b?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_sbj_cgcs_4549:gh_kg_gpfh_pt_latest_3_0"
                                        },
                                        {
                                            id: "gh_kg_gpss_pt_latest_3_0",
                                            layerName: "gh_kg_gpss_pt_latest_3_0",
                                            layerType: "SuperMapWMTS",
                                            caption: "公共配套设施点_市域",
                                            mapUrl: "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/3f673728603ad2862f0762fb6e34b764",
                                            visible: false,
                                            queryUrl: "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/acaa0391ebe1546424200246d0cd2f1b?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_sbj_cgcs_4549:gh_kg_gpss_pt_latest_3_0"
                                        },
                                        {
                                            id: "gh_kg_gpss_py_latest_3_0",
                                            layerName: "gh_kg_gpss_py_latest_3_0",
                                            layerType: "SuperMapWMTS",
                                            caption: "公共配套设施面_市域",
                                            mapUrl: "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/1ed5020923cc384b2adcb83c05d1aa50",
                                            visible: false,
                                            queryUrl: "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/acaa0391ebe1546424200246d0cd2f1b?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_sbj_cgcs_4549:gh_kg_gpss_py_latest_3_0"
                                        }
                                        
                                    ]
                                },
                                {
                                    layerType: "GroupLayer",
                                    name: "KZXXXGHGHYD",
                                    caption: "规划用地",
                                    thematicMap: true,
                                    subLayers: [
                                        {
                                            id: "gh_kg_dkbh_ap_latest_3_0",
                                            layerName: "gh_kg_dkbh_ap_latest_3_0",
                                            layerType: "SuperMapWMTS",
                                            caption: "地块编号",
                                            mapUrl: "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/f046411e9774ea62d19c559e921c8f74",
                                            visible: false,
                                            queryUrl: "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/acaa0391ebe1546424200246d0cd2f1b?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_sbj_cgcs_4549:gh_kg_dkbh_ap_latest_3_0"
                                        },
                                        {
                                            id: "gh_kg_dkfh_pt_latest_3_0",
                                            layerName: "gh_kg_dkfh_pt_latest_3_0",
                                            layerType: "SuperMapWMTS",
                                            caption: "地块符号",
                                            mapUrl: "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/418b63774f074f1a01684d24806aa5ca",
                                            visible: false,
                                            queryUrl: "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/acaa0391ebe1546424200246d0cd2f1b?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_sbj_cgcs_4549:gh_kg_dkfh_pt_latest_3_0"
                                        },
                                        {
                                            id: "gh_kg_xmfw_py_latest_3_0",
                                            layerType: "SuperMapWMTSGroupLayer",
                                            layerName: "gh_kg_dkfh_pt_latest_3_0",
                                            caption: "项目范围",
                                            layerids: ["gh_kg_xmfw_py_latest_3_0-1","gh_kg_xmfw_py_latest_3_0-2","gh_kg_xmfw_py_latest_3_0-3","gh_kg_xmfw_py_latest_3_0-4","gh_kg_xmfw_py_latest_3_0-5","gh_kg_xmfw_py_latest_3_0-6","gh_kg_xmfw_py_latest_3_0-7","gh_kg_xmfw_py_latest_3_0-8","gh_kg_xmfw_py_latest_3_0-9", "gh_kg_xmfw_py_latest_3_0"],
                                            mapUrl: "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/fc677dd16ff51d9f78bd9d8a2b789b0c",
                                            visible: false,
                                            queryUrl:"http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/acaa0391ebe1546424200246d0cd2f1b?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_sbj_cgcs_4549:gh_kg_xmfw_py_latest_3_0"
                                        },
                                        {
                                            id: "gh_kg_ydgh_py_latest_3_0",
                                            layerType: "SuperMapWMTSGroupLayer",
                                            caption: "用地规划",
                                            layerids: ["gh_kg_ydgh_py_latest_3_0-1", "gh_kg_ydgh_py_latest_3_0-2", "gh_kg_ydgh_py_latest_3_0-3", "gh_kg_ydgh_py_latest_3_0-4", "gh_kg_ydgh_py_latest_3_0-5", "gh_kg_ydgh_py_latest_3_0-6", "gh_kg_ydgh_py_latest_3_0-7","gh_kg_ydgh_py_latest_3_0-8","gh_kg_ydgh_py_latest_3_0-9","gh_kg_ydgh_py_latest_3_0"],
                                            mapUrl: "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/165a686804c54f4fc5ff13055ded9885",
                                            queryUrl:"http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/acaa0391ebe1546424200246d0cd2f1b?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_sbj_cgcs_4549:gh_kg_ydgh_py_latest_3_0"
                                             
                                        }
                                    ]
                                },
                                {
                                    layerType: "GroupLayer",
                                    name: "KZXXXGHFQ",
                                    caption: "分区",
                                    thematicMap: true,
                                    subLayers: [
                                        {
                                            id: "gh_kg_ghdy_py_latest_3_0",
                                            layerName: "gh_kg_ghdy_py_latest_3_0",
                                            layerType: "SuperMapWMTS",
                                            caption: "规划单元",
                                            mapUrl: "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/f14918e37f5cb915536f611a627480fc",
                                            visible: false,
                                            queryUrl: "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/acaa0391ebe1546424200246d0cd2f1b?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_sbj_cgcs_4549:gh_kg_ghdy_py_latest_3_0"
                                        },
                                        {
                                            id: "gh_kg_ghjf_py_latest_3_0",
                                            layerName: "gh_kg_ghjf_py_latest_3_0",
                                            layerType: "SuperMapWMTS",
                                            caption: "规划街坊",
                                            mapUrl: "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/75e498dabd449a5204968aa30d2f8e27",
                                            visible: false,
                                            queryUrl: "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/acaa0391ebe1546424200246d0cd2f1b?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_sbj_cgcs_4549:gh_kg_ghjf_py_latest_3_0"
                                        },
                                        {
                                            id: "gh_kg_ghpq_py_latest_3_0",
                                            layerName: "gh_kg_ghpq_py_latest_3_0",
                                            layerType: "SuperMapWMTS",
                                            caption: "规划片区",
                                            mapUrl: "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/2b46754d4d2a9c0b37aee743c3d2465c",
                                            visible: false,
                                            queryUrl: "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/acaa0391ebe1546424200246d0cd2f1b?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_sbj_cgcs_4549:gh_kg_ghpq_py_latest_3_0"
                                        }
                                    ]
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
                                    name: "SZZXGH",
                                    caption: "市政专项规划",
                                    thematicMap: true,
                                    subLayers: [
                                        {
                                            "id": "gh_zxgh_zxhx_py_latest_3_0",
                                            "layerName": "gh_zxgh_zxhx_py_latest_3_0",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "专项规划黄线",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/680fe123cb466387b49c9c7f0acc011c",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/acaa0391ebe1546424200246d0cd2f1b?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_sbj_cgcs_4549:gh_zxgh_zxhx_py_latest_3_0"
                                        },
                                        {
                                            "id": "gh_zxgh_zxzx_py_latest_3_0",
                                            "layerName": "gh_zxgh_zxzx_py_latest_3_0",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "专项规划紫线",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/7fc006ad95099386f0063413120d3701",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/acaa0391ebe1546424200246d0cd2f1b?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_sbj_cgcs_4549:gh_zxgh_zxzx_py_latest_3_0"
                                        },
                                        {
                                            "id": "xz_dxgx_zxdl_ln_latest_3_0",
                                            "layerName": "xz_dxgx_zxdl_ln_latest_3_0",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "专项电力",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/65872f61346bd36a9ed0959dad2100c6",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/acaa0391ebe1546424200246d0cd2f1b?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_sbj_cgcs_4549:xz_dxgx_zxdl_ln_latest_3_0"
                                        },
                                        {
                                            "id": "xz_dxgx_zxjs_ln_latest_3_0",
                                            "layerName": "xz_dxgx_zxjs_ln_latest_3_0",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "专项给水",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/fb147baabb4184e2dcd8cd01bba73d1b",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/acaa0391ebe1546424200246d0cd2f1b?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_sbj_cgcs_4549:xz_dxgx_zxjs_ln_latest_3_0"
                                        },
                                        {
                                            "id": "xz_dxgx_zxqt_ln_latest_3_0",
                                            "layerName": "xz_dxgx_zxqt_ln_latest_3_0",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "专项其他",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/cbb5a25a5c44ee375b25496de5ef591d",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/acaa0391ebe1546424200246d0cd2f1b?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_sbj_cgcs_4549:xz_dxgx_zxqt_ln_latest_3_0"
                                        },
                                        {
                                            "id": "xz_dxgx_zxrq_ln_latest_3_0",
                                            "layerName": "xz_dxgx_zxrq_ln_latest_3_0",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "专项燃气",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/6e08f078e07c2edfa0bcd813303e1077",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/acaa0391ebe1546424200246d0cd2f1b?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_sbj_cgcs_4549:xz_dxgx_zxrq_ln_latest_3_0"
                                        },
                                        {
                                            "id": "xz_dxgx_zxsy_ln_latest_3_0",
                                            "layerName": "xz_dxgx_zxsy_ln_latest_3_0",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "专项石油",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/cb15d6b34ca3dd12883029ae7788624f",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/acaa0391ebe1546424200246d0cd2f1b?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_sbj_cgcs_4549:xz_dxgx_zxsy_ln_latest_3_0"
                                        },
                                        {
                                            "id": "xz_dxgx_zxtx_ln_latest_3_0",
                                            "layerName": "xz_dxgx_zxtx_ln_latest_3_0",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "专项通讯",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/cd5ea8fff36c199e14205c713330551b",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/acaa0391ebe1546424200246d0cd2f1b?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_sbj_cgcs_4549:xz_dxgx_zxtx_ln_latest_3_0"
                                        },
                                        {
                                            "id": "xz_dxgx_zxws_ln_latest_3_0",
                                            "layerName": "xz_dxgx_zxws_ln_latest_3_0",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "专项污水",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/1a5d8e8b910457f60711140089d58dc8",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/acaa0391ebe1546424200246d0cd2f1b?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_sbj_cgcs_4549:xz_dxgx_zxws_ln_latest_3_0"
                                        },
                                        {
                                            "id": "xz_dxgx_zxys_ln_latest_3_0",
                                            "layerName": "xz_dxgx_zxys_ln_latest_3_0",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "专项雨水",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/fd3cb9b952b4e23420dcb5188d010d67",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/acaa0391ebe1546424200246d0cd2f1b?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_sbj_cgcs_4549:xz_dxgx_zxys_ln_latest_3_0"
                                        }
                                    ]
                                },
                                {
                                    layerType: "GroupLayer",
                                    name: "KCZYKCGHQK",
                                    caption: "矿产资源开采规划区块",
                                    thematicMap: true,
                                    subLayers: [
                                        {
                                            "id": "gh_zxgh_2016_kaicqk_py_latest_3_0",
                                            "layerName": "gh_zxgh_2016_kaicqk_py_latest_3_0",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "矿产资源开采规划区块2016",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/7c4bb52a7ab4cbb9d55bc9e0bc2d7639",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/acaa0391ebe1546424200246d0cd2f1b?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_sbj_cgcs_4549:gh_zxgh_2016_kaicqk_py_latest_3_0"
                                        },
                                        {
                                            "id": "gh_zxgh_2016_kanchqk_py_latest_3_0",
                                            "layerName": "gh_zxgh_2016_kanchqk_py_latest_3_0",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "矿产资源勘查规划区块2016",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/6256273e21cfee5e84a5df5b5a13e6e2",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/486250386a3f6b25423d6b459cd10b28?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_qs_cgcs_4549:gh_zxgh_2016_kanchqk_py_latest_3_0"
                                        }
                                    ]
                                },
                                {
                                    layerType: "GroupLayer",
                                    name: "KCZYGH",
                                    caption: "矿产资源规划",
                                    thematicMap: true,
                                    subLayers: [
                                        {
                                            "id": "gh_kczygh_2016_kszlxmdz_pt_latest_3_0",
                                            "layerName": "gh_kczygh_2016_kszlxmdz_pt_latest_3_0",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "矿山地质环境治理恢复重点项目2016",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/7ff706de782d0fc0d3f53d6811384123",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/486250386a3f6b25423d6b459cd10b28?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_qs_cgcs_4549:gh_kczygh_2016_kszlxmdz_pt_latest_3_0"
                                        },
                                        {
                                            "id": "gh_kczygh_2017_bbfw_py_latest_3_0",
                                            "layerName": "gh_kczygh_2017_bbfw_py_latest_3_0",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "报部范围2017",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/e46550eed85483022f133ea92c92c71b",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/acaa0391ebe1546424200246d0cd2f1b?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_sbj_cgcs_4549:gh_kczygh_2017_bbfw_py_latest_3_0"
                                        },
                                        {
                                            "id": "gh_kczygh_2016_kaicqst_py_latest_3_0",
                                            "layerName": "gh_kczygh_2016_kaicqst_py_latest_3_0",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "砂石粘土开采分区2016",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/c906406aed445973b82da2e00769efe8",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/acaa0391ebe1546424200246d0cd2f1b?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_sbj_cgcs_4549:gh_kczygh_2016_kaicqst_py_latest_3_0"
                                        },
                                        {
                                            "id": "gh_kczygh_2016_kshjzlq_py_latest_3_0",
                                            "layerName": "gh_kczygh_2016_kshjzlq_py_latest_3_0",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "矿山环境治理区2016",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/5fb6624cf967887bfab1f15895377fd1",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/486250386a3f6b25423d6b459cd10b28?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_qs_cgcs_4549:gh_kczygh_2016_kshjzlq_py_latest_3_0"
                                        }
                                    ]
                                },
                                {
                                    layerType: "GroupLayer",
                                    name: "KCZYJZKCQ",
                                    caption: "矿产资源禁止开采区",
                                    thematicMap: true,
                                    subLayers: [
                                        {
                                            "id": "gh_zxgh_2016_kaicqjz_py_latest_3_0",
                                            "layerName": "gh_zxgh_2016_kaicqjz_py_latest_3_0",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "矿产资源禁止开采区2016",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/16459ebf393f3b97e634804699889985",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/acaa0391ebe1546424200246d0cd2f1b?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_sbj_cgcs_4549:gh_zxgh_2016_kaicqjz_py_latest_3_0"
                                        }
                                    ]
                                },
                                {
                                    layerType: "GroupLayer",
                                    name: "KCZYXZKCQ",
                                    caption: "矿产资源限制开采区",
                                    thematicMap: true,
                                    subLayers: [
                                        {
                                            "id": "gh_zxgh_2016_kaicqxz_py_latest_3_0",
                                            "layerName": "gh_zxgh_2016_kaicqxz_py_latest_3_0",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "矿产资源限制开采区2016",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/1eecece9cb9cb87a7abea1d1d414b49e",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/acaa0391ebe1546424200246d0cd2f1b?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_sbj_cgcs_4549:gh_zxgh_2016_kaicqxz_py_latest_3_0"
                                        }
                                    ]
                                },
                                {
                                    layerType: "GroupLayer",
                                    name: "LSWHMCBHGH",
                                    caption: "历史文化名城保护规划",
                                    thematicMap: true,
                                    subLayers: [
                                        {
                                            "id": "gh_zxgh_lscqfw_py_latest_3_0",
                                            "layerName": "gh_zxgh_lscqfw_py_latest_3_0",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "历史城区范围",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/931dc305566ab929edbe421c4987123e",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/acaa0391ebe1546424200246d0cd2f1b?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_sbj_cgcs_4549:gh_zxgh_lscqfw_py_latest_3_0"
                                        },
                                        {
                                            "id": "gh_zxgh_lsjz_py_latest_3_0",
                                            "layerName": "gh_zxgh_lsjz_py_latest_3_0",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "历史建筑",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/207532e04a116029ad1db70a815187db",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/acaa0391ebe1546424200246d0cd2f1b?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_sbj_cgcs_4549:gh_zxgh_lsjz_py_latest_3_0"
                                        },
                                        {
                                            "id": "gh_zxgh_ntjlsjz_py_latest_3_0",
                                            "layerName": "gh_zxgh_ntjlsjz_py_latest_3_0",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "拟推荐历史建筑",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/d1f05a14a3234f18c81d3b3183056aa2",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/acaa0391ebe1546424200246d0cd2f1b?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_sbj_cgcs_4549:gh_zxgh_ntjlsjz_py_latest_3_0"
                                        },
                                        {
                                            "id": "gh_zxgh_wbdw_py_latest_3_0",
                                            "layerName": "gh_zxgh_wbdw_py_latest_3_0",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "文保单位",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/95fd26f66d75c3525300391b6e943a31",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/acaa0391ebe1546424200246d0cd2f1b?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_sbj_cgcs_4549:gh_zxgh_wbdw_py_latest_3_0"
                                        }
                                    ]
                                },
                                {
                                    layerType: "GroupLayer",
                                    name: "FJMSQZTGH",
                                    caption: "风景名胜区总体规划",
                                    thematicMap: true,
                                    subLayers: [
                                        {
                                            "id": "gh_zxgh_fjqfw_py_latest_3_0",
                                            "layerName": "gh_zxgh_fjqfw_py_latest_3_0",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "风景区范围",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/94225f71002026f44ab9cbcf941e7944",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/486250386a3f6b25423d6b459cd10b28?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_qs_cgcs_4549:gh_zxgh_fjqfw_py_latest_3_0"
                                        },
                                        {
                                            "id": "gh_zxgh_fjqjx_ln_latest_3_0",
                                            "layerName": "gh_zxgh_fjqjx_ln_latest_3_0",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "风景区界线",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/c1b504f8fe2b9da4da1f68e4f0c4c791",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/486250386a3f6b25423d6b459cd10b28?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_qs_cgcs_4549:gh_zxgh_fjqjx_ln_latest_3_0"
                                        },
                                        {
                                            "id": "gh_zxgh_fjqmc_pt_latest_3_0",
                                            "layerName": "gh_zxgh_fjqmc_pt_latest_3_0",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "风景区名称",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/e33c32db887392b495553f60d1c4a818",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/486250386a3f6b25423d6b459cd10b28?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_qs_cgcs_4549:gh_zxgh_fjqmc_pt_latest_3_0"
                                        },
                                        {
                                            "id": "gh_zxgh_hxqfw_py_latest_3_0",
                                            "layerName": "gh_zxgh_hxqfw_py_latest_3_0",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "核心区面积",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/5bd4aac5ac5f0398883c27432c327854",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/486250386a3f6b25423d6b459cd10b28?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_qs_cgcs_4549:gh_zxgh_hxqfw_py_latest_3_0"
                                        },
                                        {
                                            "id": "gh_zxgh_jq_py_latest_3_0",
                                            "layerName": "gh_zxgh_jq_py_latest_3_0",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "景区",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/7c723bfb8e5d138b0a2c48764ef518c9",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/486250386a3f6b25423d6b459cd10b28?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_qs_cgcs_4549:gh_zxgh_jq_py_latest_3_0"
                                        },
                                        {
                                            "id": "gh_zxgh_jqjx_ln_latest_3_0",
                                            "layerName": "gh_zxgh_jqjx_ln_latest_3_0",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "景区界线",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/3d6be5575ee740dfd961541857860854",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/486250386a3f6b25423d6b459cd10b28?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_qs_cgcs_4549:gh_zxgh_jqjx_ln_latest_3_0"
                                        },
                                        {
                                            "id": "gh_zxgh_jqmc_pt_latest_3_0",
                                            "layerName": "gh_zxgh_jqmc_pt_latest_3_0",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "景区名称",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/f32afe2a9eb2dcbec80c8354116603b0",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/486250386a3f6b25423d6b459cd10b28?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_qs_cgcs_4549:gh_zxgh_jqmc_pt_latest_3_0"
                                        },
                                        {
                                            "id": "gh_zxgh_jqrk_pt_latest_3_0",
                                            "layerName": "gh_zxgh_jqrk_pt_latest_3_0",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "景区入口",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/3bc150bca40e92b643f310932fea2f3c",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/486250386a3f6b25423d6b459cd10b28?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_qs_cgcs_4549:gh_zxgh_jqrk_pt_latest_3_0"
                                        },
                                        {
                                            "id": "gh_zxgh_lswhmc_pt_latest_3_0",
                                            "layerName": "gh_zxgh_lswhmc_pt_latest_3_0",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "历史文化名称",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/ee3fa83d375a5615effbbe19a35568e9",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/486250386a3f6b25423d6b459cd10b28?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_qs_cgcs_4549:gh_zxgh_lswhmc_pt_latest_3_0"
                                        },
                                        {
                                            "id": "gh_zxgh_wwbhd_py_latest_3_0",
                                            "layerName": "gh_zxgh_wwbhd_py_latest_3_0",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "文物保护点",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/2e5d35d9c5b4e95a1dd93d949ec49d4b",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/486250386a3f6b25423d6b459cd10b28?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_qs_cgcs_4549:gh_zxgh_wwbhd_py_latest_3_0"
                                        },
                                        {
                                            "id": "gh_zxgh_zgctcl_pt_latest_3_0",
                                            "layerName": "gh_zxgh_zgctcl_pt_latest_3_0",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "中国传统村落",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/87353fb6016ab992d4c67033fca66bdb",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/486250386a3f6b25423d6b459cd10b28?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_qs_cgcs_4549:gh_zxgh_zgctcl_pt_latest_3_0"
                                        }
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
                                    "id": "gh_zg_ydgh_py_latest_3_0",
                                    "layerName": "GCS330300G02_BZY_YDGH_PY",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "总规_用地规划（全市）",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/e855055eff7daa85ec22c4897f57ff44",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/486250386a3f6b25423d6b459cd10b28?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_qs_cgcs_4549:gh_zg_ydgh_py_latest_3_0"
                                },
                                {
                                    "id": "gh_zg_ydgh_py_latest_3_0_2",
                                    "layerName": "gh_zg_ydgh_py_latest_3_0_2",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "总规_用地规划",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/2dd40d9fa4ac5ee99ea88748ccd5139e",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/acaa0391ebe1546424200246d0cd2f1b?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_sbj_cgcs_4549:gh_zg_ydgh_py_latest_3_0"
                                },
                                {
                                    "id": "gh_cxgh_2017_hx_ln_latest_3_0",
                                    "layerName": "gh_cxgh_2017_hx_ln_latest_3_0",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "城市总体规划-黄线2017",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/7e0a9bb21fe965d7162b87f88c29f12b",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/acaa0391ebe1546424200246d0cd2f1b?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_sbj_cgcs_4549:gh_cxgh_2017_hx_ln_latest_3_0"
                                },
                                {
                                    "id": "gh_cxgh_2017_lvx_ln_latest_3_0",
                                    "layerName": "gh_cxgh_2017_lvx_ln_latest_3_0",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "城市总体规划-绿线2017",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/b0775baa0854051d07aacb1b84e32b13",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/acaa0391ebe1546424200246d0cd2f1b?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_sbj_cgcs_4549:gh_cxgh_2017_lvx_ln_latest_3_0"
                                },
                                {
                                    "id": "gh_cxgh_2017_lx_ln_latest_3_0",
                                    "layerName": "gh_cxgh_2017_lx_ln_latest_3_0",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "城市总体规划-蓝线2017",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/868f8bfeb50913605f4e3c4232dabbb3",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/acaa0391ebe1546424200246d0cd2f1b?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_sbj_cgcs_4549:gh_cxgh_2017_lx_ln_latest_3_0"
                                },
                                {
                                    "id": "gh_cxgh_2018_ghdk_py_latest_3_0",
                                    "layerName": "gh_cxgh_2018_ghdk_py_latest_3_0",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "规划地块2018",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/9ac3b4c99348f69196cce740d6897979",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/acaa0391ebe1546424200246d0cd2f1b?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_sbj_cgcs_4549:gh_cxgh_2018_ghdk_py_latest_3_0"
                                },
                                {
                                    "id": "gh_cxgh_2017_jqbhfw_py_latest_3_0",
                                    "layerName": "gh_cxgh_2017_jqbhfw_py_latest_3_0",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "历史文化街区保护范围2017",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/fbf5a91c53420e55720962425e68fc00",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/acaa0391ebe1546424200246d0cd2f1b?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_sbj_cgcs_4549:gh_cxgh_2017_jqbhfw_py_latest_3_0"
                                },
                                {
                                    "id": "gh_cxgh_2017_ghyd_py_latest_3_0",
                                    "layerName": "gh_cxgh_2017_ghyd_py_latest_3_0",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "规划用地2017",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/ac67e321f9eda7e4b32096e0c270d4aa",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/486250386a3f6b25423d6b459cd10b28?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_qs_cgcs_4549:gh_cxgh_2017_ghyd_py_latest_3_0"
                                },
                                {
                                    "id": "gh_cxgh_2017_stkzx_py_latest_3_0",
                                    "layerName": "gh_cxgh_2017_stkzx_py_latest_3_0",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "生态控制线2017",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/27020af822be5917f30d6a0b9cef26e9",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/486250386a3f6b25423d6b459cd10b28?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_qs_cgcs_4549:gh_cxgh_2017_stkzx_py_latest_3_0"
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
                                    "id": "gh_tdlyztgh_2011_ghyt_py_latest_3_0",
                                    "layerName": "gh_tdlyztgh_2011_ghyt_py_latest_3_0",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "规划用途2011",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/d9b1752f601ec17bbbbf2235a731491f",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/acaa0391ebe1546424200246d0cd2f1b?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_sbj_cgcs_4549:gh_tdlyztgh_2011_ghyt_py_latest_3_0"
                                },
                                {
                                    "id": "gh_tdlyztgh_2011_jqdltb_py_latest_3_0",
                                    "layerName": "gh_tdlyztgh_2011_jqdltb_py_latest_3_0",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "基期地类图斑2011",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/22a5696ead2ac98300740e2defa13ecd",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/acaa0391ebe1546424200246d0cd2f1b?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_sbj_cgcs_4549:gh_tdlyztgh_2011_jqdltb_py_latest_3_0"
                                },
                                {
                                    "id": "gh_tdlyztgh_2011_jsydgzbj_ln_latest_3_0",
                                    "layerName": "gh_tdlyztgh_2011_jsydgzbj_ln_latest_3_0",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "建设用地管制边界2011",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/5d9c79d99c410d06b66da8b0199e4534",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/acaa0391ebe1546424200246d0cd2f1b?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_sbj_cgcs_4549:gh_tdlyztgh_2011_jsydgzbj_ln_latest_3_0"
                                },
                                {
                                    "id": "gh_tdlyztgh_2011_jsydgzq_py_latest_3_0",
                                    "layerName": "gh_tdlyztgh_2011_jsydgzq_py_latest_3_0",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "建设用地管制区2011",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/435093abc330c4c0ca08fa77dd1afac7",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/acaa0391ebe1546424200246d0cd2f1b?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_sbj_cgcs_4549:gh_tdlyztgh_2011_jsydgzq_py_latest_3_0"
                                },
                                {
                                    "id": "gh_tdlyztgh_2011_tdghdl_py_latest_3_0",
                                    "layerName": "gh_tdlyztgh_2011_tdghdl_py_latest_3_0",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "土地规划地类2011",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/3f7828977a986f901c12b07b3048fb68",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/acaa0391ebe1546424200246d0cd2f1b?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_sbj_cgcs_4549:gh_tdlyztgh_2011_tdghdl_py_latest_3_0"
                                },
                                {
                                    "id": "gh_tdlyztgh_2012_ghyt_py_latest_3_0",
                                    "layerName": "gh_tdlyztgh_2012_ghyt_py_latest_3_0",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "规划用途2012",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/0394b1fcf4f229637d143aab7438b3e3",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/acaa0391ebe1546424200246d0cd2f1b?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_sbj_cgcs_4549:gh_tdlyztgh_2012_ghyt_py_latest_3_0"
                                },
                                {
                                    "id": "gh_tdlyztgh_2012_jqdltb_py_latest_3_0",
                                    "layerName": "gh_tdlyztgh_2012_jqdltb_py_latest_3_0",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "基期地类图斑2012",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/3fa8dba681e01b369614c8c51b35c3db",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/acaa0391ebe1546424200246d0cd2f1b?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_sbj_cgcs_4549:gh_tdlyztgh_2012_jqdltb_py_latest_3_0"
                                },
                                {
                                    "id": "gh_tdlyztgh_2012_jsydgzbj_ln_latest_3_0",
                                    "layerName": "gh_tdlyztgh_2012_jsydgzbj_ln_latest_3_0",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "建设用地管制边界2012",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/08846f045b948585a397b8e089baee4d",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/acaa0391ebe1546424200246d0cd2f1b?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_sbj_cgcs_4549:gh_tdlyztgh_2012_jsydgzbj_ln_latest_3_0"
                                },
                                {
                                    "id": "gh_tdlyztgh_2012_jsydgzq_py_latest_3_0",
                                    "layerName": "gh_tdlyztgh_2012_jsydgzq_py_latest_3_0",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "建设用地管制区2012",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/87ac7c5cc3ed2391d2b8950e9ce08d3a",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/acaa0391ebe1546424200246d0cd2f1b?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_sbj_cgcs_4549:gh_tdlyztgh_2012_jsydgzq_py_latest_3_0"
                                },
                                {
                                    "id": "gh_tdlyztgh_2012_tdghdl_py_latest_3_0",
                                    "layerName": "gh_tdlyztgh_2012_tdghdl_py_latest_3_0",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "土地规划地类2012",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/0d3a858d8f52f7daabe3bca6f8974640",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/acaa0391ebe1546424200246d0cd2f1b?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_sbj_cgcs_4549:gh_tdlyztgh_2012_tdghdl_py_latest_3_0"
                                },
                                {
                                    "id": "gh_tdlyztgh_2013_ghyt_py_latest_3_0",
                                    "layerName": "gh_tdlyztgh_2013_ghyt_py_latest_3_0",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "规划用途2013",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/70ffc34b71863795b492f4478e339c5b",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/acaa0391ebe1546424200246d0cd2f1b?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_sbj_cgcs_4549:gh_tdlyztgh_2013_ghyt_py_latest_3_0"
                                },
                                {
                                    "id": "gh_tdlyztgh_2013_jqdltb_py_latest_3_0",
                                    "layerName": "gh_tdlyztgh_2013_jqdltb_py_latest_3_0",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "基期地类图斑2013",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/496f08b75d46416d4ff99ab0c49850a9",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/acaa0391ebe1546424200246d0cd2f1b?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_sbj_cgcs_4549:gh_tdlyztgh_2013_jqdltb_py_latest_3_0"
                                },
                                {
                                    "id": "gh_tdlyztgh_2013_jqxzdw_ln_latest_3_0",
                                    "layerName": "gh_tdlyztgh_2013_jqxzdw_ln_latest_3_0",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "基期线状地物2013",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/20b861f6deb60cee67de5587de8310f9",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/acaa0391ebe1546424200246d0cd2f1b?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_sbj_cgcs_4549:gh_tdlyztgh_2013_jqxzdw_ln_latest_3_0"
                                },
                                {
                                    "id": "gh_tdlyztgh_2013_jsydgzq_py_latest_3_0",
                                    "layerName": "gh_tdlyztgh_2013_jsydgzq_py_latest_3_0",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "建设用地管制区2013",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/92141a711d71dd20a832f96e88f497bf",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/acaa0391ebe1546424200246d0cd2f1b?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_sbj_cgcs_4549:gh_tdlyztgh_2013_jsydgzq_py_latest_3_0"
                                },
                                {
                                    "id": "gh_tdlyztgh_2013_tdghdl_py_latest_3_0",
                                    "layerName": "gh_tdlyztgh_2013_tdghdl_py_latest_3_0",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "土地规划地类2013",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/148699a78ef9857cebe062f2d5e909ea",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/acaa0391ebe1546424200246d0cd2f1b?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_sbj_cgcs_4549:gh_tdlyztgh_2013_tdghdl_py_latest_3_0"
                                },
                                {
                                    "id": "gh_tdlyztgh_2016_ghyt_py_latest_3_0",
                                    "layerName": "gh_tdlyztgh_2016_ghyt_py_latest_3_0",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "规划用途2016",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/dc60a6bfcd8c3149536d7397c959bd98",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/acaa0391ebe1546424200246d0cd2f1b?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_sbj_cgcs_4549:gh_tdlyztgh_2016_ghyt_py_latest_3_0"
                                },
                                {
                                    "id": "gh_tdlyztgh_2016_jsydgqs_py_latest_3_0",
                                    "layerName": "gh_tdlyztgh_2016_jsydgqs_py_latest_3_0",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "建设用地管制区-全市2016",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/93534392030eb03bec9c3987f84ff5a3",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/486250386a3f6b25423d6b459cd10b28?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_qs_cgcs_4549:gh_tdlyztgh_2016_jsydgqs_py_latest_3_0"
                                },
                                {
                                    "id": "gh_tdlyztgh_2016_jsydgzq_py_latest_3_0",
                                    "layerName": "gh_tdlyztgh_2016_jsydgzq_py_latest_3_0",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "建设用地管制区2016",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/4bdd7b334f425068669dcb816a13b338",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/acaa0391ebe1546424200246d0cd2f1b?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_sbj_cgcs_4549:gh_tdlyztgh_2016_jsydgzq_py_latest_3_0"
                                },
                                {
                                    "id": "gh_tdlyztgh_2011_jqlxdw_pt_latest_3_0",
                                    "layerName": "gh_tdlyztgh_2011_jqlxdw_pt_latest_3_0",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "基期零星地物2011",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/8cceae284a911c11c8668d0cb510e4d4",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/acaa0391ebe1546424200246d0cd2f1b?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_sbj_cgcs_4549:gh_tdlyztgh_2011_jqlxdw_pt_latest_3_0"
                                },
                                {
                                    "id": "gh_tdlyztgh_2011_jqxzdw_ln_latest_3_0",
                                    "layerName": "gh_tdlyztgh_2011_jqxzdw_ln_latest_3_0",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "基期线状地物2011",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/ce8018e5688b1804f19c4073c263974b",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/acaa0391ebe1546424200246d0cd2f1b?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_sbj_cgcs_4549:gh_tdlyztgh_2011_jqxzdw_ln_latest_3_0"
                                },
                                {
                                    "id": "gh_tdlyztgh_2012_jqlxdw_pt_latest_3_0",
                                    "layerName": "gh_tdlyztgh_2012_jqlxdw_pt_latest_3_0",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "基期零星地物2012",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/5303c8b41774566b68eb38feef11d9c9",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/acaa0391ebe1546424200246d0cd2f1b?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_sbj_cgcs_4549:gh_tdlyztgh_2012_jqlxdw_pt_latest_3_0"
                                },
                                {
                                    "id": "gh_tdlyztgh_2012_jqxzdw_ln_latest_3_0",
                                    "layerName": "gh_tdlyztgh_2012_jqxzdw_ln_latest_3_0",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "基期线状地物2012",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/7fef2db1cb28edbfbcc2b680475de2c2",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/acaa0391ebe1546424200246d0cd2f1b?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_sbj_cgcs_4549:gh_tdlyztgh_2012_jqxzdw_ln_latest_3_0"
                                },
                                {
                                    "id": "gh_tdlyztgh_2013_jqlxdw_pt_latest_3_0",
                                    "layerName": "gh_tdlyztgh_2013_jqlxdw_pt_latest_3_0",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "基期零星地物2013",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/1bfcd237e2bf3514f7a6ae426fbd61e5",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/acaa0391ebe1546424200246d0cd2f1b?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_sbj_cgcs_4549:gh_tdlyztgh_2013_jqlxdw_pt_latest_3_0"
                                },
                                {
                                    "id": "gh_tdlyztgh_2013_jsydgzbj_ln_latest_3_0",
                                    "layerName": "gh_tdlyztgh_2013_jsydgzbj_ln_latest_3_0",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "建设用地管制边界2013",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/08cd6cac39fc037e136e44b5721ad320",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/acaa0391ebe1546424200246d0cd2f1b?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_sbj_cgcs_4549:gh_tdlyztgh_2013_jsydgzbj_ln_latest_3_0"
                                },
                                {
                                    "id": "gh_tdlyztgh_2017_jsydgzq_py_latest_3_0",
                                    "layerName": "gh_tdlyztgh_2017_jsydgzq_py_latest_3_0",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "建设用地管制区2017_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/92162ff529c0cb60fc402eed80c26b14",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/486250386a3f6b25423d6b459cd10b28?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_qs_cgcs_4549:gh_tdlyztgh_2017_jsydgzq_py_latest_3_0"
                                },
                                {
                                    "id": "gh_tdlyztgh_2020_jsydgzq_py_latest_3_0",
                                    "layerName": "gh_tdlyztgh_2020_jsydgzq_py_latest_3_0",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "建设用地管制区2020_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/94ebef860725494dbada22ffdbf45e77",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/486250386a3f6b25423d6b459cd10b28?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_qs_cgcs_4549:gh_tdlyztgh_2020_jsydgzq_py_latest_3_0"
                                },
                                {
                                    "id": "gh_tdlyztgh_2016_ghyt_qs_py_latest_3_0",
                                    "layerName": "GCS330300_2002_TDLYGH_GHYT_QS_2016",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "规划用途-全市2016",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/e5ee15ef614a142e93ba7380f49d1f5e",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/486250386a3f6b25423d6b459cd10b28?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_qs_cgcs_4549:gh_tdlyztgh_2016_ghyt_qs_py_latest_3_0"
                                },

                            ]
                        }



                    ]
                },
                {
                    layerType: "GroupLayer",
                    name: "SPJ",
                    caption: "双评价",
                    thematicMap: true,
                    subLayers: [
                        {
                            "id": "gh_spj_2021_csjsbsyq_py_latest_3_0",
                            "layerName": "gh_spj_2021_csjsbsyq_py_latest_3_0",
                            "layerType": "SuperMapWMTS",
                            "caption": "城镇建设不适宜区2021",
                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/0afeb2a543b872038bbe1ab4a208c595",
                            "visible": false,
                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/486250386a3f6b25423d6b459cd10b28?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_qs_cgcs_4549:gh_spj_2021_csjsbsyq_py_latest_3_0"
                        },
                        {
                            "id": "gh_spj_2021_csjssyq_py_latest_3_0",
                            "layerName": "gh_spj_2021_csjssyq_py_latest_3_0",
                            "layerType": "SuperMapWMTS",
                            "caption": "城镇建设适宜区2021",
                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/0c4ab8b11ad2f9091e19a231bbf1d241",
                            "visible": false,
                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/486250386a3f6b25423d6b459cd10b28?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_qs_cgcs_4549:gh_spj_2021_csjssyq_py_latest_3_0"
                        },
                        {
                            "id": "gh_spj_2021_hygkkj_py_latest_3_0",
                            "layerName": "gh_spj_2021_hygkkj_py_latest_3_0",
                            "layerType": "SuperMapWMTS",
                            "caption": "海洋港口空间2021",
                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/766f17091aae57b43b136e43980c1b99",
                            "visible": false,
                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/486250386a3f6b25423d6b459cd10b28?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_qs_cgcs_4549:gh_spj_2021_hygkkj_py_latest_3_0"
                        },
                        {
                            "id": "gh_spj_2021_hystq_py_latest_3_0",
                            "layerName": "gh_spj_2021_hystq_py_latest_3_0",
                            "layerType": "SuperMapWMTS",
                            "caption": "海洋生态区2021",
                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/a796ce9197cb6fe74527065127c3cc2b",
                            "visible": false,
                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/486250386a3f6b25423d6b459cd10b28?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_qs_cgcs_4549:gh_spj_2021_hystq_py_latest_3_0"
                        },
                        {
                            "id": "gh_spj_2021_hyyzsyq_py_latest_3_0",
                            "layerName": "gh_spj_2021_hyyzsyq_py_latest_3_0",
                            "layerType": "SuperMapWMTS",
                            "caption": "海洋养殖适宜区2021",
                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/6de0f5b7f572bf7a10bbb89fbb143cc6",
                            "visible": false,
                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/486250386a3f6b25423d6b459cd10b28?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_qs_cgcs_4549:gh_spj_2021_hyyzsyq_py_latest_3_0"
                        },
                        {
                            "id": "gh_spj_2021_nyscbsyq_py_latest_3_0",
                            "layerName": "gh_spj_2021_nyscbsyq_py_latest_3_0",
                            "layerType": "SuperMapWMTS",
                            "caption": "农业生产不适宜区2021",
                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/488ebf075492068f1dc68cff43cb1951",
                            "visible": false,
                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/486250386a3f6b25423d6b459cd10b28?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_qs_cgcs_4549:gh_spj_2021_nyscbsyq_py_latest_3_0"
                        },
                        {
                            "id": "gh_spj_2021_nyscsyq_py_latest_3_0",
                            "layerName": "gh_spj_2021_nyscsyq_py_latest_3_0",
                            "layerType": "SuperMapWMTS",
                            "caption": "农业生产适宜区2021",
                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/ec0d4a465e095c05fa154d31bbb2cdc2",
                            "visible": false,
                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/486250386a3f6b25423d6b459cd10b28?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_qs_cgcs_4549:gh_spj_2021_nyscsyq_py_latest_3_0"
                        },
                        {
                            "id": "gh_spj_2021_stbhzyq_py_latest_3_0",
                            "layerName": "gh_spj_2021_stbhzyq_py_latest_3_0",
                            "layerType": "SuperMapWMTS",
                            "caption": "生态保护重要区2021",
                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/31e73d14580d764d1eeb46d2381ed32b",
                            "visible": false,
                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/486250386a3f6b25423d6b459cd10b28?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_qs_cgcs_4549:gh_spj_2021_stbhzyq_py_latest_3_0"
                        },
                        {
                            "id": "gh_spj_2021_stjzyq_py_latest_3_0",
                            "layerName": "gh_spj_2021_stjzyq_py_latest_3_0",
                            "layerType": "SuperMapWMTS",
                            "caption": "生态极重要区2021",
                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/7e777b62f019d089852204c0a74469e0",
                            "visible": false,
                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/486250386a3f6b25423d6b459cd10b28?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_qs_cgcs_4549:gh_spj_2021_stjzyq_py_latest_3_0"
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
            subLayers: [
                {
                    layerType: "GroupLayer",
                    name: "GTKJYTGZHKFLY",
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
                                    "layerName": "xz_dxydzkf_dxydzkfxmhx_py_latest_3_0",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "低效用地再开发项目红线_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/67a7914bfabe47deb4137455db72aed8",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/486250386a3f6b25423d6b459cd10b28?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_qs_cgcs_4549:xz_dxydzkf_dxydzkfxmhx_py_latest_3_0"
                                }
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
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/0e68a48fce331a5d349050750d974a5a",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/486250386a3f6b25423d6b459cd10b28?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_qs_cgcs_4549:gl_gtkjytgzhkfly_ghjbtzl_py_latest_3_0"
                                },
                                {
                                    "id": "gl_gtkjytgzhkfly_ghjbtzx_py_latest_3_0",
                                    "layerName": "gl_gtkjytgzhkfly_ghjbtzx_py_latest_3_0",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "规划局部调整X_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/47a5248122a3f8ec79abc0ddbd2c47ca",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/486250386a3f6b25423d6b459cd10b28?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_qs_cgcs_4549:gl_gtkjytgzhkfly_ghjbtzx_py_latest_3_0"
                                }
                            ]
                        },
                        {
                            layerType: "GroupLayer",
                            name: "NZYBP",
                            caption: "农转用报批",
                            thematicMap: true,
                            subLayers: [                                                                                                                        
                                {
                                    id: "gl_nzybp_nzy_bj_py_latest_3_0",
                                    layerName: "gl_nzybp_nzy_bj_py_latest_3_0",
                                    layerType: "SuperMapWMTS",
                                    caption: "农转用_部级",
                                    mapUrl: "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/17fd643955a33e6303d7f730f1b677ae",
                                    visible: false,
                                    queryUrl: "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/486250386a3f6b25423d6b459cd10b28?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_qs_cgcs_4549:gl_nzybp_nzy_bj_py_latest_3_0"
                                },
                                {
                                    layerType: "GroupLayer",
                                    name: "NZYBP_SJ",
                                    caption: "农转用_省级",
                                    thematicMap: true,
                                    subLayers: [
                                        {
                                            "id": "gl_nzybp_jsydbpl_py_latest_3_0",
                                            "layerName": "gl_nzybp_jsydbpl_py_latest_3_0",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "农转用_旧地政系统",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/124757436f3106c0df30d736a4ed2b54",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/486250386a3f6b25423d6b459cd10b28?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_qs_cgcs_4549:gl_nzybp_jsydbpl_py_latest_3_0"
                                        },
                                        {
                                            "id": "gl_nzybp_jsydbpx_py_latest_3_0",
                                            "layerName": "gl_nzybp_jsydbpx_py_latest_3_0",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "农转用_新地政系统",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/a2050bf96c683ff3f01e880c47e42075",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/486250386a3f6b25423d6b459cd10b28?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_qs_cgcs_4549:gl_nzybp_jsydbpx_py_latest_3_0"

                                        },

                                    ]   
                                },
                                {
                                    id: "gl_nzybp_nzy_sj_py_latest_3_0",
                                    layerName: "gl_nzybp_nzy_sj_py_latest_3_0",
                                    layerType: "SuperMapWMTS",
                                    caption: "农转用_市级",
                                    mapUrl: "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/50e723ce780932f5c9e4480505a93a80",
                                    visible: false,
                                    queryUrl: "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/acaa0391ebe1546424200246d0cd2f1b?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_sbj_cgcs_4549:gl_nzybp_nzy_sj_py_latest_3_0"
                                },       
                                 
                                // {
                                //     id: "GCS330000K3003_JSYDBP_NZYDK_X",
                                //     layerName: "GCS330000K3003_JSYDBP_NZYDK_X",
                                //     layerType: "SuperMapWMTS",
                                //     caption: "农转用_省级",
                                //     mapUrl: "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/4141970fadd76d4415e6e4ef2b6a74f4",
                                //     visible: false,
                                //     queryUrl: "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/aacf3da749d744eeb323d29021d9dd67?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=wz_data_cgcs2000_4549:GCS330000K3003_JSYDBP_NZYDK_X"
                                // },

                               

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
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/51497f527c50091076f68e8453019f0b",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/486250386a3f6b25423d6b459cd10b28?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_qs_cgcs_4549:gl_gtkjytgzhkfly_jsydys_py_latest_3_0"
                                },
                                {
                                    "id": "gl_gtkjytgzhkfly_ssh_hxsj_py_latest_3_0",
                                    "layerName": "gl_gtkjytgzhkfly_ssh_hxsj_py_latest_3_0",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "面状红线数据（选址意见书）",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/c7903da2cb99e120daf624f2b9ff700e",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/acaa0391ebe1546424200246d0cd2f1b?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_sbj_cgcs_4549:gl_gtkjytgzhkfly_ssh_hxsj_py_latest_3_0"
                                },
                                {
                                    "id": "gl_gtkjytgzhkfly_ssd_djsj_py_latest_3_0",
                                    "layerName": "SSD_DJSJ_PY",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "面状地籍数据（用地规划许可证）",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/309146b08f744844beb1520b78b3686c",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/acaa0391ebe1546424200246d0cd2f1b?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_sbj_cgcs_4549:gl_gtkjytgzhkfly_ssd_djsj_py_latest_3_0"
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
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/bf7c0759c4ebd1b2375fe7b9f43e28b9",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/486250386a3f6b25423d6b459cd10b28?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_qs_cgcs_4549:gl_ssnydba_bhjbnt_py_latest_3_0"
                                },
                                {
                                    "id": "gl_ssnydba_phgzcfw_py_latest_3_0",
                                    "layerName": "gl_ssnydba_phgzcfw_py_latest_3_0",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "破坏耕作层范围_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/3213b11dcbf3847e21097f47af8ea422",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/486250386a3f6b25423d6b459cd10b28?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_qs_cgcs_4549:gl_ssnydba_phgzcfw_py_latest_3_0"
                                },
                                {
                                    "id": "gl_ssnydba_nydfw_py_latest_3_0",
                                    "layerName": "gl_ssnydba_nydfw_py_latest_3_0",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "农用地范围_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/22d82b5a4a652f13d83281d4d9dd9215",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/486250386a3f6b25423d6b459cd10b28?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_qs_cgcs_4549:gl_ssnydba_nydfw_py_latest_3_0"
                                },
                                {
                                    "id": "gl_ssnydba_phynfw_py_latest_3_0",
                                    "layerName": "gl_ssnydba_phynfw_py_latest_3_0",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "破坏永农范围_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/e0e9640e401b388d5fe099d802efd2c5",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/486250386a3f6b25423d6b459cd10b28?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_qs_cgcs_4549:gl_ssnydba_phynfw_py_latest_3_0"
                                },
                                {
                                    "id": "gl_ssnydba_zyynfw_py_latest_3_0",
                                    "layerName": "gl_ssnydba_zyynfw_py_latest_3_0",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "占用永农范围_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/4bd83046c1d5ab6553e2ffebf0a2ce08",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/486250386a3f6b25423d6b459cd10b28?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_qs_cgcs_4549:gl_ssnydba_zyynfw_py_latest_3_0"
                                }
                            ]
                        },
                        {
                            layerType: "GroupLayer",
                            name: "JSGCSJFA",
                            caption: "建设工程设计方案",
                            thematicMap: true,
                            subLayers: [
                                {
                                    "id": "gl_gtkjytgzhkfly_spdl_fa_ln_latest_3_0",
                                    "layerName": "gl_gtkjytgzhkfly_spdl_fa_ln_latest_3_0",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "综合电力-审批-方案",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/f2b1458b8a835ba5759c8764a48b1e97",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/acaa0391ebe1546424200246d0cd2f1b?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_sbj_cgcs_4549:gl_gtkjytgzhkfly_spdl_fa_ln_latest_3_0"
                                },
                                {
                                    "id": "gl_gtkjytgzhkfly_spdl_ln_latest_3_0",
                                    "layerName": "gl_gtkjytgzhkfly_spdl_ln_latest_3_0",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "综合电力-审批",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/bdc9df2fce4f54bb13afd4573132306c",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/acaa0391ebe1546424200246d0cd2f1b?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_sbj_cgcs_4549:gl_gtkjytgzhkfly_spdl_ln_latest_3_0"
                                },
                                {
                                    "id": "gl_gtkjytgzhkfly_spgl_fa_ln_latest_3_0",
                                    "layerName": "gl_gtkjytgzhkfly_spgl_fa_ln_latest_3_0",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "综合管廊-审批-方案",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/2e3305db22990a87dfe74e8cae5dad04",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/acaa0391ebe1546424200246d0cd2f1b?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_sbj_cgcs_4549:gl_gtkjytgzhkfly_spgl_fa_ln_latest_3_0"
                                },
                                {
                                    "id": "gl_gtkjytgzhkfly_spgl_ln_latest_3_0",
                                    "layerName": "gl_gtkjytgzhkfly_spgl_ln_latest_3_0",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "综合管廊-审批",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/0737959d1cacbf7f60e10645cf6c7262",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/acaa0391ebe1546424200246d0cd2f1b?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_sbj_cgcs_4549:gl_gtkjytgzhkfly_spgl_ln_latest_3_0"
                                },
                                {
                                    "id": "gl_gtkjytgzhkfly_spjs_fa_ln_latest_3_0",
                                    "layerName": "gl_gtkjytgzhkfly_spjs_fa_ln_latest_3_0",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "综合给水-审批-方案",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/99a46fc7f8363270f4b5e2608abc0842",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/acaa0391ebe1546424200246d0cd2f1b?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_sbj_cgcs_4549:gl_gtkjytgzhkfly_spjs_fa_ln_latest_3_0"
                                },
                                {
                                    "id": "gl_gtkjytgzhkfly_spjs_ln_latest_3_0",
                                    "layerName": "gl_gtkjytgzhkfly_spjs_ln_latest_3_0",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "综合给水-审批",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/ad195353fd0f8135005ae5b7a93c5904",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/acaa0391ebe1546424200246d0cd2f1b?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_sbj_cgcs_4549:gl_gtkjytgzhkfly_spjs_ln_latest_3_0"
                                },
                                {
                                    "id": "gl_gtkjytgzhkfly_spld_fa_ln_latest_3_0",
                                    "layerName": "gl_gtkjytgzhkfly_spld_fa_ln_latest_3_0",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "综合路灯-审批-方案",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/d7b92482a0332968d3f9b4c3acc267d0",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/acaa0391ebe1546424200246d0cd2f1b?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_sbj_cgcs_4549:gl_gtkjytgzhkfly_spld_fa_ln_latest_3_0"
                                },
                                {
                                    "id": "gl_gtkjytgzhkfly_spld_ln_latest_3_0",
                                    "layerName": "gl_gtkjytgzhkfly_spld_ln_latest_3_0",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "综合路灯-审批",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/4b2c2d7003e2fba729214c237b9b893e",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/acaa0391ebe1546424200246d0cd2f1b?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_sbj_cgcs_4549:gl_gtkjytgzhkfly_spld_ln_latest_3_0"
                                },
                                {
                                    "id": "gl_gtkjytgzhkfly_spqt_fa_ln_latest_3_0",
                                    "layerName": "gl_gtkjytgzhkfly_spqt_fa_ln_latest_3_0",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "综合其他-审批-方案",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/c5dfeaaa296c4b56f2ccc0955ee9b752",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/acaa0391ebe1546424200246d0cd2f1b?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_sbj_cgcs_4549:gl_gtkjytgzhkfly_spqt_fa_ln_latest_3_0"
                                },
                                {
                                    "id": "gl_gtkjytgzhkfly_spqt_ln_latest_3_0",
                                    "layerName": "gl_gtkjytgzhkfly_spqt_ln_latest_3_0",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "综合其他-审批",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/97502b9bc890f512255fccd1f401d796",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/acaa0391ebe1546424200246d0cd2f1b?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_sbj_cgcs_4549:gl_gtkjytgzhkfly_spqt_ln_latest_3_0"
                                },
                                {
                                    "id": "gl_gtkjytgzhkfly_sprq_fa_ln_latest_3_0",
                                    "layerName": "gl_gtkjytgzhkfly_sprq_fa_ln_latest_3_0",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "综合燃气-审批-方案",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/0bf1baca0417881532963e3a6dfae2fb",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/acaa0391ebe1546424200246d0cd2f1b?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_sbj_cgcs_4549:gl_gtkjytgzhkfly_sprq_fa_ln_latest_3_0"
                                },
                                {
                                    "id": "gl_gtkjytgzhkfly_sprq_ln_latest_3_0",
                                    "layerName": "gl_gtkjytgzhkfly_sprq_ln_latest_3_0",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "综合燃气-审批",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/17699eb2862f4d6cdce661c80342a9d3",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/acaa0391ebe1546424200246d0cd2f1b?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_sbj_cgcs_4549:gl_gtkjytgzhkfly_sprq_ln_latest_3_0"
                                },
                                {
                                    "id": "gl_gtkjytgzhkfly_spsy_fa_ln_latest_3_0",
                                    "layerName": "gl_gtkjytgzhkfly_spsy_fa_ln_latest_3_0",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "综合石油-审批-方案",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/00fd9433bc4518c69c84203c03b39631",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/acaa0391ebe1546424200246d0cd2f1b?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_sbj_cgcs_4549:gl_gtkjytgzhkfly_spsy_fa_ln_latest_3_0"
                                },
                                {
                                    "id": "gl_gtkjytgzhkfly_spsy_ln_latest_3_0",
                                    "layerName": "gl_gtkjytgzhkfly_spsy_ln_latest_3_0",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "综合石油-审批",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/7ac19042cd716247f9dc8c08e6d4848a",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/acaa0391ebe1546424200246d0cd2f1b?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_sbj_cgcs_4549:gl_gtkjytgzhkfly_spsy_ln_latest_3_0"
                                },
                                {
                                    "id": "gl_gtkjytgzhkfly_sptx_fa_ln_latest_3_0",
                                    "layerName": "gl_gtkjytgzhkfly_sptx_fa_ln_latest_3_0",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "综合通讯-审批-方案",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/ab8d67917040e07280bab27cf0ce9c7a",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/acaa0391ebe1546424200246d0cd2f1b?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_sbj_cgcs_4549:gl_gtkjytgzhkfly_sptx_fa_ln_latest_3_0"
                                },
                                {
                                    "id": "gl_gtkjytgzhkfly_sptx_ln_latest_3_0",
                                    "layerName": "gl_gtkjytgzhkfly_sptx_ln_latest_3_0",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "综合通讯-审批",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/5072d8d825c91acea177b03a3cb01d20",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/acaa0391ebe1546424200246d0cd2f1b?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_sbj_cgcs_4549:gl_gtkjytgzhkfly_sptx_ln_latest_3_0"
                                },
                                {
                                    "id": "gl_gtkjytgzhkfly_spws_fa_ln_latest_3_0",
                                    "layerName": "gl_gtkjytgzhkfly_spws_fa_ln_latest_3_0",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "综合污水-审批-方案",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/9433374936e06bc93b9f5ab7c9feb867",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/acaa0391ebe1546424200246d0cd2f1b?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_sbj_cgcs_4549:gl_gtkjytgzhkfly_spws_fa_ln_latest_3_0"
                                },
                                {
                                    "id": "gl_gtkjytgzhkfly_spws_ln_latest_3_0",
                                    "layerName": "gl_gtkjytgzhkfly_spws_ln_latest_3_0",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "综合污水-审批",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/5e16b5908dd839216c642533cb607a6d",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/acaa0391ebe1546424200246d0cd2f1b?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_sbj_cgcs_4549:gl_gtkjytgzhkfly_spws_ln_latest_3_0"
                                },
                                {
                                    "id": "gl_gtkjytgzhkfly_spys_fa_ln_latest_3_0",
                                    "layerName": "gl_gtkjytgzhkfly_spys_fa_ln_latest_3_0",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "综合雨水-审批-方案",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/252d2486342fe8f4301d1a34ad5a7649",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/acaa0391ebe1546424200246d0cd2f1b?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_sbj_cgcs_4549:gl_gtkjytgzhkfly_spys_fa_ln_latest_3_0"
                                },
                                {
                                    "id": "gl_gtkjytgzhkfly_spys_ln_latest_3_0",
                                    "layerName": "gl_gtkjytgzhkfly_spys_ln_latest_3_0",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "综合雨水-审批",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/4c1a7f120d465c502a4c433ecdcda873",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/acaa0391ebe1546424200246d0cd2f1b?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_sbj_cgcs_4549:gl_gtkjytgzhkfly_spys_ln_latest_3_0"
                                }
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
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/11872a5a6aff8dc0ea7bef8face57f21",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/486250386a3f6b25423d6b459cd10b28?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_qs_cgcs_4549:gl_tdcb_tdcb_py_latest_3_0"
                                }
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
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/c8874e7a20e1a38d812d76e27a96b410",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/486250386a3f6b25423d6b459cd10b28?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_qs_cgcs_4549:gl_tdgy_gddk_py_latest_3_0"
                                },
                                {
                                    "id": "gl_tdgy_zpgcrdk_py_latest_3_0",
                                    "layerName": "gl_tdgy_zpgcrdk_py_latest_3_0",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "土地交易-招拍挂出让地块_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/c5af2c492d8204d47138835322843dd7",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/486250386a3f6b25423d6b459cd10b28?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_qs_cgcs_4549:gl_tdgy_zpgcrdk_py_latest_3_0"
                                },
                                {
                                    "id": "gl_tdgy_gddk_ls_py_latest_3_0",
                                    "layerName": "gl_tdgy_gddk_ls_py_latest_3_0",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "供地地块-历史",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/d0502c52637303ed32576ffd1c487ab8",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/486250386a3f6b25423d6b459cd10b28?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_qs_cgcs_4549:gl_tdgy_gddk_ls_py_latest_3_0"
                                },
                                
                            ]
                        },
                        {
                            layerType: "GroupLayer",
                            name: "JSGCGHXK",
                            caption: "建设工程规划许可",
                            thematicMap: true,
                            subLayers: [
                                {
                                    "id": "gl_gtkjytgzhkfly_ssg_ghzyd_py_latest_3_0",
                                    "layerName": "gl_gtkjytgzhkfly_ssg_ghzyd_py_latest_3_0",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "工业企业_规划总用地（工程证）",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/3452dbf641b9758ec074781ec8dfe628",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/acaa0391ebe1546424200246d0cd2f1b?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_sbj_cgcs_4549:gl_gtkjytgzhkfly_ssg_ghzyd_py_latest_3_0"
                                },
                                {
                                    "id": "gl_gtkjytgzhkfly_ssg_jzjd_py_latest_3_0",
                                    "layerName": "gl_gtkjytgzhkfly_ssg_jzjd_py_latest_3_0",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "工业企业_建筑基底",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/380d8525053d91d90c04fedd3860d01f",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/acaa0391ebe1546424200246d0cd2f1b?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_sbj_cgcs_4549:gl_gtkjytgzhkfly_ssg_jzjd_py_latest_3_0"
                                },
                                {
                                    "id": "gl_gtkjytgzhkfly_ssg_zjd_ap_latest_3_0",
                                    "layerName": "gl_gtkjytgzhkfly_ssg_zjd_ap_latest_3_0",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "工业企业_注记点",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/ec3706b48b3cf2c995da94393b6725a4",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/acaa0391ebe1546424200246d0cd2f1b?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_sbj_cgcs_4549:gl_gtkjytgzhkfly_ssg_zjd_ap_latest_3_0"
                                },
                                {
                                    "id": "gl_gtkjytgzhkfly_ssg_zjx_ln_latest_3_0",
                                    "layerName": "SSG_ZJX_LN",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "工业企业_注记线",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/98e644045572877b87a2b31e5d2e2262",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/acaa0391ebe1546424200246d0cd2f1b?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_sbj_cgcs_4549:gl_gtkjytgzhkfly_ssg_zjx_ln_latest_3_0"
                                },
                                {
                                    "id": "gl_gtkjytgzhkfly_ssg_dxs_py_latest_3_0",
                                    "layerName": "GCS330300G03_SSG_DXS_PY",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "工业企业_地下室",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/7f079bb152a8bdbef7c96e0782c0d15c",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/acaa0391ebe1546424200246d0cd2f1b?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_sbj_cgcs_4549:gl_gtkjytgzhkfly_ssg_dxs_py_latest_3_0"
                                },
                                {
                                    "id": "gl_gtkjytgzhkfly_ssj_ghzyd_py_latest_3_0",
                                    "layerName": "gl_gtkjytgzhkfly_ssj_ghzyd_py_latest_3_0",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "居住公建_规划总用地",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/50abef83b37455748ff6d2c60f2d7354",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/acaa0391ebe1546424200246d0cd2f1b?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_sbj_cgcs_4549:gl_gtkjytgzhkfly_ssj_ghzyd_py_latest_3_0"
                                },
                                {
                                    "id": "gl_gtkjytgzhkfly_ssj_jzjd_py_latest_3_0",
                                    "layerName": "gl_gtkjytgzhkfly_ssj_jzjd_py_latest_3_0",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "居住公建_建筑基底",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/fbb2638ef8d05376f1db1198c28a541c",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/acaa0391ebe1546424200246d0cd2f1b?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_sbj_cgcs_4549:gl_gtkjytgzhkfly_ssj_jzjd_py_latest_3_0"
                                },
                                {
                                    "id": "gl_gtkjytgzhkfly_ssj_zjd_ap_latest_3_0",
                                    "layerName": "gl_gtkjytgzhkfly_ssj_zjd_ap_latest_3_0",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "居住公建_注记点",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/46db24c42e5781daf8283d295a0c8ca4",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/acaa0391ebe1546424200246d0cd2f1b?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_sbj_cgcs_4549:gl_gtkjytgzhkfly_ssj_zjd_ap_latest_3_0"
                                },
                                {
                                    "id": "gl_gtkjytgzhkfly_ssj_zjx_ln_latest_3_0",
                                    "layerName": "SSJ_ZJX_LN",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "居住公建_注记线",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/2e331cf600240400869bce04557b3027",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/acaa0391ebe1546424200246d0cd2f1b?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_sbj_cgcs_4549:gl_gtkjytgzhkfly_ssj_zjx_ln_latest_3_0"
                                },
                                {
                                    "id": "gl_gtkjytgzhkfly_ssj_dxs_py_latest_3_0",
                                    "layerName": "GCS330300G03_SSJ_DXS_PY",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "居住公建_地下室",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/b62369001a8e4136baae7c7e7f9c371f",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/acaa0391ebe1546424200246d0cd2f1b?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_sbj_cgcs_4549:gl_gtkjytgzhkfly_ssj_dxs_py_latest_3_0"
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
                            "layerName": "gl_tdzz_gbzjsdk_lx_py_latest_3_0",
                            "layerType": "SuperMapWMTS",
                            "caption": "高标准建设地块-立项_省级下发",
                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/23da73bc6b74256732ad4543f3ed4805",
                            "visible": false,
                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/486250386a3f6b25423d6b459cd10b28?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_qs_cgcs_4549:gl_tdzz_gbzjsdk_lx_py_latest_3_0"
                        },
                        {
                            "id": "gl_tdzz_gbzjsdk_ys_py_latest_3_0",
                            "layerName": "gl_tdzz_gbzjsdk_ys_py_latest_3_0",
                            "layerType": "SuperMapWMTS",
                            "caption": "高标准建设地块-验收_省级下发",
                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/014bfa8ecfc57d2ffe7b45330627ea57",
                            "visible": false,
                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/486250386a3f6b25423d6b459cd10b28?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_qs_cgcs_4549:gl_tdzz_gbzjsdk_ys_py_latest_3_0"
                        },
                        {
                            "id": "gl_tdzz_gbztsdk_lx_py_latest_3_0",
                            "layerName": "gl_tdzz_gbztsdk_lx_py_latest_3_0",
                            "layerType": "SuperMapWMTS",
                            "caption": "高标准提升地块-立项_省级下发",
                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/622f1f5ce2b0661b4c4dc41053dd3e35",
                            "visible": false,
                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/486250386a3f6b25423d6b459cd10b28?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_qs_cgcs_4549:gl_tdzz_gbztsdk_lx_py_latest_3_0"
                        },
                        {
                            "id": "gl_tdzz_gbztsdk_ys_py_latest_3_0",
                            "layerName": "gl_tdzz_gbztsdk_ys_py_latest_3_0",
                            "layerType": "SuperMapWMTS",
                            "caption": "高标准提升地块-验收_省级下发",
                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/3387ffa2ed38555e1e3a7c627ce35305",
                            "visible": false,
                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/486250386a3f6b25423d6b459cd10b28?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_qs_cgcs_4549:gl_tdzz_gbztsdk_ys_py_latest_3_0"
                        },
                        {
                            "id": "gl_tdzz_jsydfkdk_lx_py_latest_3_0",
                            "layerName": "gl_tdzz_jsydfkdk_lx_py_latest_3_0",
                            "layerType": "SuperMapWMTS",
                            "caption": "建设用地复垦地块-立项_省级下发",
                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/14aa4f005f7a2895507d3df929e5b65f",
                            "visible": false,
                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/486250386a3f6b25423d6b459cd10b28?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_qs_cgcs_4549:gl_tdzz_jsydfkdk_lx_py_latest_3_0"
                        },
                        {
                            "id": "gl_jdzz_jsydfkdk_ys_py_latest_3_0",
                            "layerName": "gl_jdzz_jsydfkdk_ys_py_latest_3_0",
                            "layerType": "SuperMapWMTS",
                            "caption": "建设用地复垦地块-验收_省级下发",
                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/93d49cd1b10dd228044316d19dd7a985",
                            "visible": false,
                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/486250386a3f6b25423d6b459cd10b28?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_qs_cgcs_4549:gl_jdzz_jsydfkdk_ys_py_latest_3_0"
                        },
                        {
                            "id": "gl_tdzz_kzgd_lx_py_latest_3_0",
                            "layerName": "gl_tdzz_kzgd_lx_py_latest_3_0",
                            "layerType": "SuperMapWMTS",
                            "caption": "垦造耕地-立项_省级下发",
                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/57036f71d8596c313934a6a955eadd9a",
                            "visible": false,
                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/486250386a3f6b25423d6b459cd10b28?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_qs_cgcs_4549:gl_tdzz_kzgd_lx_py_latest_3_0"
                        },
                        {
                            "id": "gl_tdzz_kzgd_ys_py_latest_3_0",
                            "layerName": "gl_tdzz_kzgd_ys_py_latest_3_0",
                            "layerType": "SuperMapWMTS",
                            "caption": "垦造耕地-验收_省级下发",
                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/901edc86f0805d35bc75778f28c043fe",
                            "visible": false,
                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/486250386a3f6b25423d6b459cd10b28?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_qs_cgcs_4549:gl_tdzz_kzgd_ys_py_latest_3_0"
                        },
                        {
                            layerType: "GroupLayer",
                            name: "TDZZ",
                            caption: "增减挂钩",
                            thematicMap: true,
                            subLayers: [
                                {
                                    "id": "gl_zjgg_cjdkl_py_latest_3_0",
                                    "layerName": "gl_zjgg_cjdkl_py_latest_3_0",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "拆旧地块L_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/4c792eb27fd06d786d523007b706abcb",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/486250386a3f6b25423d6b459cd10b28?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_qs_cgcs_4549:gl_zjgg_cjdkl_py_latest_3_0"
                                },
                                {
                                    "id": "gl_zjgg_cjdkx_py_latest_3_0",
                                    "layerName": "Custom_NCTDZHZZ_CJDK_X",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "拆旧地块X_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/96ba7f213396ad0fb5ea0ff456023fc1",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/486250386a3f6b25423d6b459cd10b28?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_qs_cgcs_4549:gl_zjgg_cjdkx_py_latest_3_0"
                                },

                                {
                                    "id": "gl_zjgg_jxdkl_py_latest_3_0",
                                    "layerName": "gl_zjgg_jxdkl_py_latest_3_0",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "建新地块L_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/e3ceedf6972235fe2be72060e6891b6e",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/486250386a3f6b25423d6b459cd10b28?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_qs_cgcs_4549:gl_zjgg_jxdkl_py_latest_3_0"
                                },
                                {
                                    "id": "gl_zjgg_jxdkx_py_latest_3_0",
                                    "layerName": "gl_zjgg_jxdkx_py_latest_3_0",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "建新地块X_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/2acca43c0144ef365cf1bfe50a0867f8",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/486250386a3f6b25423d6b459cd10b28?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_qs_cgcs_4549:gl_zjgg_jxdkx_py_latest_3_0"
                                },
                                {
                                    "id": "gl_zjgg_jxdk_py_latest_3_0",
                                    "layerName": "gl_zjgg_jxdk_py_latest_3_0",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "建新地块",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/e9e3079deb183b828a70f2844e9b9c96",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/486250386a3f6b25423d6b459cd10b28?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_qs_cgcs_4549:gl_zjgg_jxdk_py_latest_3_0"
                                },
                                {
                                    "id": "gl_zjgg_lxcjfkdk_py_latest_3_0",
                                    "layerName": "gl_zjgg_lxcjfkdk_py_latest_3_0",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "立项拆旧复垦地块",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/f60bc412b0aef1c9a677522a4d47e07d",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/486250386a3f6b25423d6b459cd10b28?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_qs_cgcs_4549:gl_zjgg_lxcjfkdk_py_latest_3_0"
                                },
                                {
                                    "id": "gl_zjgg_yshcjdklyqk_py_latest_3_0",
                                    "layerName": "gl_zjgg_yshcjdklyqk_py_latest_3_0",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "验收后拆旧地块利用情况",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/9cf2f49fab4d31d275c1aa13a17514ea",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/486250386a3f6b25423d6b459cd10b28?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_qs_cgcs_4549:gl_zjgg_yshcjdklyqk_py_latest_3_0"
                                },
                                {
                                    "id": "gl_zjgg_yscjfkdk_py_latest_3_0",
                                    "layerName": "gl_zjgg_yscjfkdk_py_latest_3_0",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "验收拆旧复垦地块",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/90360a00714b5539db273f207f9a268a",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/486250386a3f6b25423d6b459cd10b28?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_qs_cgcs_4549:gl_zjgg_yscjfkdk_py_latest_3_0"
                                }

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
                                    "layerName": "gl_tzgzdk_gdzlts_lx_py_latest_3_0",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "耕地质量提升-立项_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/e67908e35308e9b231b830bc8103b366",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/486250386a3f6b25423d6b459cd10b28?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_qs_cgcs_4549:gl_tzgzdk_gdzlts_lx_py_latest_3_0"
                                },
                                {
                                    "id": "gl_tzgzdk_gdzlts_ys_py_latest_3_0",
                                    "layerName": "gl_tzgzdk_gdzlts_ys_py_latest_3_0",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "耕地质量提升-验收_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/98c61362cc0125287a42bea188b7d991",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/486250386a3f6b25423d6b459cd10b28?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_qs_cgcs_4549:gl_tzgzdk_gdzlts_ys_py_latest_3_0"
                                },
                                {
                                    "id": "gl_tzgzdk_hgsdk_lx_py_latest_3_0",
                                    "layerName": "gl_tzgzdk_hgsdk_lx_py_latest_3_0",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "旱改水地块-立项_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/2589090809a63ac9a969cf6696e81606",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/486250386a3f6b25423d6b459cd10b28?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_qs_cgcs_4549:gl_tzgzdk_hgsdk_lx_py_latest_3_0"
                                },
                                {
                                    "id": "gl_tzgzdk_hgsdk_ys_py_latest_3_0",
                                    "layerName": "gl_tzgzdk_hgsdk_ys_py_latest_3_0",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "旱改水地块-验收_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/6a508f2f9f9c2f16710754f2c1bbbef3",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/486250386a3f6b25423d6b459cd10b28?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_qs_cgcs_4549:gl_tzgzdk_hgsdk_ys_py_latest_3_0"
                                }
                            ]
                        },
                       

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
                            "layerName": "gl_ksgl_lsks_py_latest_3_0",
                            "layerType": "SuperMapWMTS",
                            "caption": "绿色矿山_省级下发",
                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/5a9cd2fc889d27795a265cdb51ecb066",
                            "visible": false,
                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/486250386a3f6b25423d6b459cd10b28?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_qs_cgcs_4549:gl_ksgl_lsks_py_latest_3_0"
                        },
                        {
                            layerType: "GroupLayer",
                            name: "TKQ",
                            caption: "探矿权",
                            thematicMap: true,
                            subLayers: [
                                {
                                    "id": "gl_tkq_tkqdzdc_py_latest_3_0",
                                    "layerName": "gl_tkq_tkqdzdc_py_latest_3_0",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "探矿权地质调查_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/af3fbe9f0bb075d26a43fd7f498e22c6",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/486250386a3f6b25423d6b459cd10b28?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_qs_cgcs_4549:gl_tkq_tkqdzdc_py_latest_3_0"
                                },
                                {
                                    "id": "gl_tkq_tkqkcdj_ls_py_latest_3_0",
                                    "layerName": "gl_tkq_tkqkcdj_ls_py_latest_3_0",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "探矿权勘查登记_历史_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/6953e9bd872c17d3d5eb7d98f3731d8a",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/486250386a3f6b25423d6b459cd10b28?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_qs_cgcs_4549:gl_tkq_tkqkcdj_ls_py_latest_3_0"
                                },
                                {
                                    "id": "gl_tkq_tkqkcdj_py_latest_3_0",
                                    "layerName": "gl_tkq_tkqkcdj_py_latest_3_0",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "探矿权勘查登记_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/8d159411344e86d786135c3a2dc7546f",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/486250386a3f6b25423d6b459cd10b28?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_qs_cgcs_4549:gl_tkq_tkqkcdj_py_latest_3_0"
                                },
                                {
                                    "id": "gl_tkq_2016_tkqfw_py_latest_3_0",
                                    "layerName": "gl_tkq_2016_tkqfw_py_latest_3_0",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "探矿权范围2016",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/51722801566897eabf4bffca3d4de724",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/486250386a3f6b25423d6b459cd10b28?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_qs_cgcs_4549:gl_tkq_2016_tkqfw_py_latest_3_0"
                                },
                            ]
                        },
                        {
                            layerType: "GroupLayer",
                            name: "CKQ",
                            caption: "采矿权",
                            thematicMap: true,
                            subLayers: [
                                {
                                    "id": "gl_ckq_ckqdj_py_latest_3_0",
                                    "layerName": "gl_ckq_ckqdj_py_latest_3_0",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "采矿权登记_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/f3d67dabd8b82e05fae4f529180c37fe",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/486250386a3f6b25423d6b459cd10b28?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_qs_cgcs_4549:gl_ckq_ckqdj_py_latest_3_0"
                                },
                                {
                                    "id": "gl_ckq_hdkqfw_py_latest_3_0",
                                    "layerName": "gl_ckq_hdkqfw_py_latest_3_0",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "划定矿区范围_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/ae1ee73fabaf728a0f32cb9e39561eae",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/486250386a3f6b25423d6b459cd10b28?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_qs_cgcs_4549:gl_ckq_hdkqfw_py_latest_3_0"
                                },
                                {
                                    "id": "gl_ckq_ckqdj_ls_py_latest_3_0",
                                    "layerName": "gl_ckq_ckqdj_ls_py_latest_3_0",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "采矿权登记-历史_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/264dd6713709a160ac1220db05a22bc4",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/486250386a3f6b25423d6b459cd10b28?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_qs_cgcs_4549:gl_ckq_ckqdj_ls_py_latest_3_0"
                                },
                                {
                                    "id": "gl_ckq_2016_ckqfw_py_latest_3_0",
                                    "layerName": "gl_ckq_2016_ckqfw_py_latest_3_0",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "采矿权范围2016",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/15ace02d4236824cc75c1fb498157a49",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/acaa0391ebe1546424200246d0cd2f1b?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_sbj_cgcs_4549:gl_ckq_2016_ckqfw_py_latest_3_0"
                                },
                                {
                                    "id": "gl_ckq_2016_ksdz_pt_latest_3_0",
                                    "layerName": "gl_ckq_2016_ksdz_pt_latest_3_0",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "矿山地址2016",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/d61cca8a1cef498b4223db26e47f7e9a",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/486250386a3f6b25423d6b459cd10b28?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_qs_cgcs_4549:gl_ckq_2016_ksdz_pt_latest_3_0"
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
                                    "layerName": "gl_cldj_cmdj_py_latest_3_0",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "查明登记_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/8d0397e01040b0ab5ba48c0994ac8478",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/486250386a3f6b25423d6b459cd10b28?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_qs_cgcs_4549:gl_cldj_cmdj_py_latest_3_0"
                                },
                                {
                                    "id": "gl_cldj_drkqsdj_py_latest_3_0",
                                    "layerName": "gl_cldj_drkqsdj_py_latest_3_0",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "地热矿泉水登记_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/22d80e6d489b98a3c7165dc3ef964754",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/486250386a3f6b25423d6b459cd10b28?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_qs_cgcs_4549:gl_cldj_drkqsdj_py_latest_3_0"
                                },
                                {
                                    "id": "gl_cldj_jsydyf_py_latest_3_0",
                                    "layerName": "gl_cldj_jsydyf_py_latest_3_0",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "建设用地压覆_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/41212e076e79771ef2bc5460939cd438",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/486250386a3f6b25423d6b459cd10b28?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_qs_cgcs_4549:gl_cldj_jsydyf_py_latest_3_0"
                                },
                                {
                                    "id": "gl_cldj_yfdj_py_latest_3_0",
                                    "layerName": "gl_cldj_yfdj_py_latest_3_0",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "压覆登记_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/7b7b5ae67a3bedc26d75aefec05e4857",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/486250386a3f6b25423d6b459cd10b28?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_qs_cgcs_4549:gl_cldj_yfdj_py_latest_3_0"
                                },
                                {
                                    "id": "gl_cldj_zydj_pt_latest_3_0",
                                    "layerName": "gl_cldj_zydj_pt_latest_3_0",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "占用登记_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/4b78cad3ad0bc92e49c0b67f7c292525",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/486250386a3f6b25423d6b459cd10b28?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_qs_cgcs_4549:gl_cldj_zydj_pt_latest_3_0"
                                }
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
                                    "id": "gl_fqks_ksstxf_pt_latest_3_0",
                                    "layerName": "gl_fqks_ksstxf_pt_latest_3_0",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "矿山生态修复_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/c28e38efa873fc0a1bb5dc2563aa30ef",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/486250386a3f6b25423d6b459cd10b28?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_qs_cgcs_4549:gl_fqks_ksstxf_pt_latest_3_0"
                                },
                                {
                                    "id": "gl_stxf_fqks_py_latest_3_0",
                                    "layerName": "gl_stxf_fqks_py_latest_3_0",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "废弃矿山_省级下发",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/d3e898eeb653ff04d0c0497ce2f17cc9",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/486250386a3f6b25423d6b459cd10b28?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_qs_cgcs_4549:gl_stxf_fqks_py_latest_3_0"
                                }
                                
                            ]
                        },
                        {
                            layerType: "GroupLayer",
                            name: "HYXF",
                            caption: "海洋修复",
                            thematicMap: true,
                            subLayers: [
                                {
                                    layerType: "GroupLayer",
                                    name: "HAXZZXF",
                                    caption: "海岸线整治修复",
                                    thematicMap: true,
                                    subLayers: [
                                        {
                                            "id": "gl_hyxf_2018_2020_haxzzxf_ln_latest_3_0",
                                            "layerName": "PCS330300_GL_HYXF_2018_2020_HAXZZXF_LN",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "海岸线整治修复2018_2020_离线",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/f1420b43cddd8c0cbed3af66ce8e26ce",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/486250386a3f6b25423d6b459cd10b28?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_qs_cgcs_4549:gl_hyxf_2018_2020_haxzzxf_ln_latest_3_0"
                                        },
                                        {
                                            "id": "gl_hyxf_2018_2020_stax_ln_latest_3_0",
                                            "layerName": "PCS330300_GL_HYXF_2018_2020_STAX_LN",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "生态岸线2018_2020_离线",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/c4b0f73f9d87662efafe279932ff49aa",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/486250386a3f6b25423d6b459cd10b28?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_qs_cgcs_4549:gl_hyxf_2018_2020_stax_ln_latest_3_0"
                                        },
                                        {
                                            "id": "gl_hyxf_2018_haxzzxf_py_latest_3_0",
                                            "layerName": "gl_hyxf_2018_haxzzxf_py_latest_3_0",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "海岸线整治修复面2018",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/a26c76574daaf2d19c701e36d87afebe",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/486250386a3f6b25423d6b459cd10b28?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_qs_cgcs_4549:gl_hyxf_2018_haxzzxf_py_latest_3_0"
                                        },
                                        {
                                            "id": "gl_hyxf_2020_rdax_ln_latest_3_0",
                                            "layerName": "gl_hyxf_2020_rdax_ln_latest_3_0",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "认定岸线2020",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/3b27f1387aeec9d6e0dce5795c745cdf",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/486250386a3f6b25423d6b459cd10b28?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_qs_cgcs_4549:gl_hyxf_2020_rdax_ln_latest_3_0"
                                        },
                                    ]
                                },
                                {
                                    layerType: "GroupLayer",
                                    name: "LSHWZZXD",
                                    caption: "蓝色海湾整治行动",
                                    thematicMap: true,
                                    subLayers: [
                                        {
                                            "id": "gl_hyxf_2020_lshw_pt_latest_3_0",
                                            "layerName": "gl_hyxf_2020_lshw_pt_latest_3_0",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "蓝色海湾点2020",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/2ead5ad5b9c5039ba47d9da86935071a",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/486250386a3f6b25423d6b459cd10b28?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_qs_cgcs_4549:gl_hyxf_2020_lshw_pt_latest_3_0"
                                        },
                                        {
                                            "id": "gl_hyxf_2020_lshw_py_latest_3_0",
                                            "layerName": "gl_hyxf_2020_lshw_py_latest_3_0",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "蓝色海湾面2020",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/106e358aee4021c692aed2cc7d2fccd9",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/486250386a3f6b25423d6b459cd10b28?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_qs_cgcs_4549:gl_hyxf_2020_lshw_py_latest_3_0"
                                        },
                                        {
                                            "id": "gl_hyxf_2020_lshw_ln_latest_3_0",
                                            "layerName": "gl_hyxf_2020_lshw_ln_latest_3_0",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "蓝色海湾线2020",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/6f99342305e3cd487b01d53f062d8c6f",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/486250386a3f6b25423d6b459cd10b28?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_qs_cgcs_4549:gl_hyxf_2020_lshw_ln_latest_3_0"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            layerType: "GroupLayer",
                            name: "QYTD",
                            caption: "全域土地",
                            thematicMap: true,
                            subLayers: [
                                {
                                    layerType: "GroupLayer",
                                    name: "YYSXM",
                                    caption: "已验收项目",
                                    thematicMap: true,
                                    subLayers: [
                                        {
                                            "id": "gl_qytd_yysxm_py_latest_3_0",
                                            "layerName": "gl_qytd_yysxm_py_latest_3_0",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "全域土地_已验收项目2019",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/e87248ac5ad62e3b581c6e2f17050357",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/486250386a3f6b25423d6b459cd10b28?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_qs_cgcs_4549:gl_qytd_yysxm_py_latest_3_0"
                                        },
                                        {
                                            "id": "gl_qytd_yyszxm_py_latest_3_0",
                                            "layerName": "gl_qytd_yyszxm_py_latest_3_0",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "全域土地_已验收子项目2019",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/49251ce85cbe55fae8f231fb14063762",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/486250386a3f6b25423d6b459cd10b28?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_qs_cgcs_4549:gl_qytd_yyszxm_py_latest_3_0"
                                        }
                                        
                                    ]
                                },
                                {
                                    layerType: "GroupLayer",
                                    name: "ZSSXM",
                                    caption: "在实施项目",
                                    thematicMap: true,
                                    subLayers: [
                                        {
                                            "id": "gl_qytd_zssxm_py_latest_3_0",
                                            "layerName": "gl_qytd_zssxm_py_latest_3_0",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "全域土地_在实施项目2019",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/a6eecb3b073769590926c3ca3598622f",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/486250386a3f6b25423d6b459cd10b28?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_qs_cgcs_4549:gl_qytd_zssxm_py_latest_3_0"
                                        },
                                        {
                                            "id": "gl_qytd_zsszxm_py_latest_3_0",
                                            "layerName": "gl_qytd_zsszxm_py_latest_3_0",
                                            "layerType": "SuperMapWMTS",
                                            "caption": "全域土地_在实施子项目2019",
                                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/7a5cefb0a590167e1fa1890415645298",
                                            "visible": false,
                                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/486250386a3f6b25423d6b459cd10b28?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_qs_cgcs_4549:gl_qytd_zsszxm_py_latest_3_0"
                                        }
                                    ]
                                }
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
                            "layerName": "gl_wtzz_dpfwtzz_pt_latest_3_0",
                            "layerType": "SuperMapWMTS",
                            "caption": "大棚房问题整治_省级下发",
                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/6d70b5c59e2d4c62014bfd0f77764ffb",
                            "visible": false,
                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/486250386a3f6b25423d6b459cd10b28?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_qs_cgcs_4549:gl_wtzz_dpfwtzz_pt_latest_3_0"
                        },
                        {
                            "id": "gl_wtzz_ssnydzz_pt_latest_3_0",
                            "layerName": "gl_wtzz_ssnydzz_pt_latest_3_0",
                            "layerType": "SuperMapWMTS",
                            "caption": "设施农用地整治_省级下发",
                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/56b6967563a8e4bc6315c5a3e9e95b60",
                            "visible": false,
                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/486250386a3f6b25423d6b459cd10b28?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_qs_cgcs_4549:gl_wtzz_ssnydzz_pt_latest_3_0"
                        },
                        {
                            "id": "gl_phjg_2020_3_wpjctb_py_latest_3_0",
                            "layerName": "gl_phjg_2020_3_wpjctb_py_latest_3_0",
                            "layerType": "SuperMapWMTS",
                            "caption": "卫片监测图斑、违法图斑2020第3季度",
                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/3e3449167ec5d28b7c8f8098f7e2bda9",
                            "visible": false,
                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/486250386a3f6b25423d6b459cd10b28?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_qs_cgcs_4549:gl_phjg_2020_3_wpjctb_py_latest_3_0"
                        },
                        {
                            "id": "gl_phjg_2020_4_wpjctb_py_latest_3_0",
                            "layerName": "gl_phjg_2020_4_wpjctb_py_latest_3_0",
                            "layerType": "SuperMapWMTS",
                            "caption": "卫片监测图斑、违法图斑2020第4季度",
                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/25eb8c50b238b464236a4ba494db96b0",
                            "visible": false,
                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/486250386a3f6b25423d6b459cd10b28?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_qs_cgcs_4549:gl_phjg_2020_4_wpjctb_py_latest_3_0"
                        },
                        {
                            "id": "gl_phjg_ypyy_py_latest_3_0",
                            "layerName": "gl_phjg_ypyy_py_latest_3_0",
                            "layerType": "SuperMapWMTS",
                            "caption": "已批已用_全市",
                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/94060b1dd6d41195b39a3ecb91f1bff4",
                            "visible": false,
                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/486250386a3f6b25423d6b459cd10b28?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_qs_cgcs_4549:gl_phjg_ypyy_py_latest_3_0"
                        },
                        {
                            "id": "gl_phjg_pewg_py_latest_3_0",
                            "layerName": "gl_phjg_pewg_py_latest_3_0",
                            "layerType": "SuperMapWMTS",
                            "caption": "批而未供_全市",
                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/7aced8486fbe9691d47b7fa46ca3b70a",
                            "visible": false,
                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/486250386a3f6b25423d6b459cd10b28?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_qs_cgcs_4549:gl_phjg_pewg_py_latest_3_0"
                        }


                    ]
                },
                {
                    layerType: "GroupLayer",
                    name: "QQDJ",
                    caption: "确权登记",
                    thematicMap: true,
                    subLayers: [
                        {
                            layerType: "GroupLayer",
                            name: "FDDJ",
                            caption: "房地登记",
                            thematicMap: true,
                            subLayers: [
                                {
                                    "id": "gl_qqdj_st_zd_pt_latest_3_0",
                                    "layerName": "gl_qqdj_st_zd_pt_latest_3_0",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "宗地点",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/86864804f1aba466e9615808895180b0",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/acaa0391ebe1546424200246d0cd2f1b?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_sbj_cgcs_4549:gl_qqdj_st_zd_pt_latest_3_0"
                                },
                                {
                                    "id": "gl_qqdj_st_zrz_pt_latest_3_0",
                                    "layerName": "gl_qqdj_st_zrz_pt_latest_3_0",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "自然幢点",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/dbe94acd7a4839b5dd7ad86e5080c3d6",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/acaa0391ebe1546424200246d0cd2f1b?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_sbj_cgcs_4549:gl_qqdj_st_zrz_pt_latest_3_0"
                                },
                            ]
                        }
                    ]
                },
                {
                    layerType: "GroupLayer",
                    name: "zrzyjg",
                    caption: "自然资源监管",
                    thematicMap: true,
                    subLayers: [
                        {
                            layerType: "GroupLayer",
                            name: "YDJZDJ",
                            caption: "用地基准地价图",
                            thematicMap: true,
                            subLayers: [
                                {
                                    "id": "gl_zrzyjg_gyydjzdj_py_latest_3_0",
                                    "layerName": "gl_zrzyjg_gyydjzdj_py_latest_3_0",
                                    "layerType": "SuperMapWMTS",
                                    "caption": "工业用地基准地价",
                                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/41ee34d26d0201e738d4dcdde94a2be5",
                                    "visible": false,
                                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/acaa0391ebe1546424200246d0cd2f1b?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_sbj_cgcs_4549:gl_zrzyjg_gyydjzdj_py_latest_3_0"
                                }
                            ]
                        }
                    ]
                },
                {
                    layerType: "GroupLayer",
                    name: "STK",
                    caption: "实体库",
                    thematicMap: true,
                    subLayers: [
                        {
                            layerType: "GroupLayer",
                            name: "DLSTK",
                            caption: "地理实体库",
                            thematicMap: true,
                            subLayers: [
                                {
                                    id: "GCS330300G02_DLSKT_BOU_PY_I",
                                    layerType: "SuperMapWMTS",
                                    caption: "政区实体",
                                    mapUrl:"http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/a833593f0962023e81b998a47c2ac64c",
                                    visible: false,
                                    queryUrl: "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/aacf3da749d744eeb323d29021d9dd67?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=wz_data_cgcs2000_4549:GCS330300G02_DLSKT_BOU_PY_I"
                                },
                                {
                                    id: "GCS330300G02_DLSKT_HYD_PY_I",
                                    layerType: "SuperMapWMTS",
                                    caption: "水系实体",
                                    mapUrl: "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/fc50334cb126c7eac7356ea286a2f1cf",
                                    visible: false,
                                    queryUrl: "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/aacf3da749d744eeb323d29021d9dd67?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=wz_data_cgcs2000_4549:GCS330300G02_DLSKT_HYD_PY_I"
                                },
                                {
                                    id: "GCS330300G02_DLSKT_RES_PY_I",
                                    layerType: "SuperMapWMTS",
                                    caption: "居民地实体",
                                    mapUrl: "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/d3f82e8854375b28c211aadd7f836bcb",
                                    visible: false,
                                    queryUrl: "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/aacf3da749d744eeb323d29021d9dd67?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=wz_data_cgcs2000_4549:GCS330300G02_DLSKT_RES_PY_I"
                                },
                                {
                                    id: "GCS330300G02_DLSKT_TRA_LN_I",
                                    layerType: "SuperMapWMTS",
                                    caption: "铁路实体",
                                    mapUrl: "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/0f2ef9878df3d745d7ffc2656f6a83bd",
                                    visible: false,
                                    queryUrl: "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/aacf3da749d744eeb323d29021d9dd67?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=wz_data_cgcs2000_4549:GCS330300G02_DLSKT_TRA_LN_I"
                                },
                                {
                                    id: "GCS330300G02_DLSKT_TRA_PY_I",
                                    layerType: "SuperMapWMTS",
                                    caption: "道路实体",
                                    mapUrl: "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/452fdf5c4f1c7f59b54812b82354455c",
                                    visible: false,
                                    queryUrl: "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/aacf3da749d744eeb323d29021d9dd67?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=wz_data_cgcs2000_4549:GCS330300G02_DLSKT_TRA_PY_I"
                                },
                                {
                                    id: "GCS330300G02_DLSKT_VEG_PY_I",
                                    layerType: "SuperMapWMTS",
                                    caption: "绿地实体",
                                    mapUrl: "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/5dc0e580de263a82cef15f2128c8b14d",
                                    visible: false,
                                    queryUrl: "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/aacf3da749d744eeb323d29021d9dd67?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=wz_data_cgcs2000_4549:GCS330300G02_DLSKT_VEG_PY_I"
                                }

                            ]
                        },
                        {
                            layerType: "GroupLayer",
                            name: "GHSTK",
                            caption: "规划实体库",
                            thematicMap: true,
                            subLayers: [
                                {
                                    id: "GCS330300G02_GHDLSKT_DJQ_PY",
                                    layerType: "SuperMapWMTS",
                                    caption: "地籍区",
                                    mapUrl: "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/91b6cfb9bbe8d61e2c66a8c3fc71d22c",
                                    visible: false,
                                    queryUrl: "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/aacf3da749d744eeb323d29021d9dd67?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=wz_data_cgcs2000_4549:GCS330300G02_GHDLSKT_DJQ_PY"
                                },
                                {
                                    id: "GCS330300G02_GHDLSKT_DJZQ_PY",
                                    layerType: "SuperMapWMTS",
                                    caption: "地籍子区",
                                    mapUrl: "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/9d9f373df1a2bc4d446e2e6aefb3472a",
                                    visible: false,
                                    queryUrl: "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/aacf3da749d744eeb323d29021d9dd67?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=wz_data_cgcs2000_4549:GCS330300G02_GHDLSKT_DJZQ_PY"
                                },
                                {
                                    id: "GCS330300G02_GHDLSKT_DMDZ_PT",
                                    layerType: "SuperMapWMTS",
                                    caption: "地名地址点",
                                    mapUrl: "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/2833a170ea41dcf8df1f973f3bc76b86",
                                    visible: false,
                                    queryUrl: "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/aacf3da749d744eeb323d29021d9dd67?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=wz_data_cgcs2000_4549:GCS330300G02_GHDLSKT_DMDZ_PT"
                                },
                                {
                                    id: "GCS330300G02_GHDLSKT_JGCH_PY",
                                    layerName: "GCS330300G02_GHDLSKT_JGCH_PY",
                                    layerType: "SuperMapWMTS",
                                    caption: "竣工核实",
                                    mapUrl: "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/8513e03d5e35da5a2982a5833f29b6b1",
                                    visible: false,
                                    queryUrl: "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/aacf3da749d744eeb323d29021d9dd67?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=wz_data_cgcs2000_4549:GCS330300G02_GHDLSKT_JGCH_PY"
                                },
                                {
                                    id: "GCS330300G02_GHDLSKT_JSYD_PY",
                                    layerName: "GCS330300G02_GHDLSKT_JSYD_PY",
                                    layerType: "SuperMapWMTS",
                                    caption: "用地审批",
                                    mapUrl: "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/1f33ece96ef2f486e09051a5495b190e",
                                    visible: false,
                                    queryUrl: "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/aacf3da749d744eeb323d29021d9dd67?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=wz_data_cgcs2000_4549:GCS330300G02_GHDLSKT_JSYD_PY"
                                },
                                {
                                    id: "GCS330300G02_GHDLSKT_POI_PT",
                                    layerType: "SuperMapWMTS",
                                    caption: "兴趣点",
                                    mapUrl: "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/ee5caef9d947ac59bec3b31b7174c407",
                                    visible: false,
                                    queryUrl: "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/aacf3da749d744eeb323d29021d9dd67?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=wz_data_cgcs2000_4549:GCS330300G02_GHDLSKT_POI_PT"
                                },
                                {
                                    id: "GCS330300G02_GHDLSKT_TDGY_PY",
                                    layerName: "GCS330300G02_GHDLSKT_TDGY_PY",
                                    layerType: "SuperMapWMTS",
                                    caption: "土地供应",
                                    mapUrl: "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/17f56da38a2dbc0bc257075b8c8c20e1",
                                    visible: false,
                                    queryUrl: "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/aacf3da749d744eeb323d29021d9dd67?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=wz_data_cgcs2000_4549:GCS330300G02_GHDLSKT_TDGY_PY"
                                },
                                {
                                    id: "GCS330300G02_GHDLSKT_XZHX_PY",
                                    layerName: "GCS330300G02_GHDLSKT_XZHX_PY",
                                    layerType: "SuperMapWMTS",
                                    caption: "规划选址",
                                    mapUrl: "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/c7ebec76a2d1a3965f3090a541389d1f",
                                    visible: false,
                                    queryUrl: "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/aacf3da749d744eeb323d29021d9dd67?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=wz_data_cgcs2000_4549:GCS330300G02_GHDLSKT_XZHX_PY"
                                },

                                {
                                    id: "GCS330300G02_GHDLSKT_ZD_PY",
                                    layerName: "GCS330300G02_GHDLSKT_ZD_PY",
                                    layerType: "SuperMapWMTS",
                                    caption: "宗地/海",
                                    mapUrl: "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/c5c1aee3ed9bc4e33620f7d81b500298",
                                    visible: false,
                                    queryUrl: "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/aacf3da749d744eeb323d29021d9dd67?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=wz_data_cgcs2000_4549:GCS330300G02_GHDLSKT_ZD_PY"
                                },
                                {
                                    id: "GCS330300G02_GHDLSKT_ZPFW_PY",
                                    layerName: "GCS330300G02_GHDLSKT_ZPFW_PY",
                                    layerType: "SuperMapWMTS",
                                    caption: "总平范围",
                                    mapUrl: "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/4f5569854a32bc13b9eec925cd06ccae",
                                    visible: false,
                                    queryUrl: "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/aacf3da749d744eeb323d29021d9dd67?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=wz_data_cgcs2000_4549:GCS330300G02_GHDLSKT_ZPFW_PY"
                                }
                            ]
                        }
                    ]
                },
                // 规划编制数据
                {
                    layerType: "GroupLayer",
                    name: "GHBZSJ",
                    caption: "规划编制数据",
                    thematicMap: true,
                    subLayers: [
                        {
                            "id": "gl_ghbzsj_gyqkx_py_latest_3_0",
                            "layerName": "GCS330300G02_GYQKX_QS_PY",
                            "layerType": "SuperMapWMTS",
                            "caption": "工业区块线",
                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/942ccf85f4c4c0344e0813c1007cd3ac",
                            "visible": false,
                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/486250386a3f6b25423d6b459cd10b28?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_qs_cgcs_4549:gl_ghbzsj_gyqkx_py_latest_3_0"
                        },  
                        
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
                        },
                        {
                            "id": "gl_ghbzsj_whpyqkzx_py_latest_3_0",
                            "layerName": "PCS330300_GL_GHBZSJ_WHPYQKZX_PY",
                            "layerType": "SuperMapWMTS",
                            "caption": "危化品园区控制线",
                            "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/94f752b33422a16652df14ff94d8526b",
                            "visible": false,
                            "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/486250386a3f6b25423d6b459cd10b28?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_qs_cgcs_4549:gl_ghbzsj_whpyqkzx_py_latest_3_0"
                        }                             
                    ]
                }

            ]
        },
        {
            layerType: "GroupLayer",
            name: "gh_kg_xmfw_py_latest_3_0",
            caption: "控规_项目范围",
            subLayers:[
                {
                    id: "gh_kg_xmfw_py_latest_3_0-1",
                    "layerName": "BKY_XMFW_PY",
                    layerType: "SuperMapWMTS",
                    caption: "项目范围_苍南",
                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/6d1c030f0ed6baa46966674595990ee5",
                    "visible": false,
                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/2cce934beb1db0964729c4513519a026?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_cntx_cgcs_4549:gh_kg_xmfw_py_latest_3_0"
                },
                {
                    id: "gh_kg_xmfw_py_latest_3_0-2",
                    layerType: "SuperMapWMTS",
                    caption: "项目范围_洞头",
                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/f69224a617a2f642eb88a3a8f783eb8f",
                    "visible": false,
                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/5a56e52ca27fea6b32ae862aa51c8751?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_dttx_cgcs_4549:gh_kg_xmfw_py_latest_3_0"
                },
                {
                    id: "gh_kg_xmfw_py_latest_3_0-3",
                    layerType: "SuperMapWMTS",
                    caption: "项目范围_龙港",
                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/ffad1334a4e865a42394f47873715f66",
                    "visible": false,
                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/46b1f3acfc953855e95bf6a89294750e?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_lgtx_cgcs_4549:gh_kg_xmfw_py_latest_3_0"
                },
                {
                    id: "gh_kg_xmfw_py_latest_3_0-4",
                    layerType: "SuperMapWMTS",
                    caption: "项目范围_平阳",
                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/6e481b1c2be76ecc8ede83e50984d0f5",
                    "visible": false,
                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/fe4b37e51076226302ac688d3657dab4?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_pytx_cgcs_4549:gh_kg_xmfw_py_latest_3_0"
                },
                {
                    id: "gh_kg_xmfw_py_latest_3_0-5",
                    layerType: "SuperMapWMTS",
                    caption: "项目范围_瑞安",
                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/09888706bc084800ac81ea69084d9678",
                    "visible": false,
                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/6f0dc9fba82d130173b8479f67dfe646?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_ratx_cgcs_4549:gh_kg_xmfw_py_latest_3_0"
                },
                {
                    id: "gh_kg_xmfw_py_latest_3_0-6",
                    layerType: "SuperMapWMTS",
                    caption: "项目范围_泰顺",
                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/662931429e1611b5ba544d265fb2c770",
                    "visible": false,
                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/40110a793a16af450bf54167c8eb89e0?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_tstx_cgcs_4549:gh_kg_xmfw_py_latest_3_0"
                },
                {
                    id: "gh_kg_xmfw_py_latest_3_0-7",
                    layerType: "SuperMapWMTS",
                    caption: "项目范围_文成",
                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/d3f2f6ccca79ba4c30fc23a6fd8a409f",
                    "visible": false,
                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/9cab06ef3ada06fc065b649bbfd64cb2?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wctx_cgcs_4549:gh_kg_xmfw_py_latest_3_0"
                },
                {
                    id: "gh_kg_xmfw_py_latest_3_0-8",
                    layerType: "SuperMapWMTS",
                    caption: "项目范围_永嘉",
                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/f2ab8d46c46eba48c7c8837ca21128ab",
                    "visible": false,
                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/d2355fe57af66dc8b3a531808df86210?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yjtx_cgcs_4549:gh_kg_xmfw_py_latest_3_0"
                },
                {
                    id: "gh_kg_xmfw_py_latest_3_0-9",
                    layerType: "SuperMapWMTS",
                    caption: "项目范围_乐清",
                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/65edcfb8386195543948853b43ddc611",
                    "visible": false,
                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/287b156961b7ecc16e8fa52a6e765d03?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yqtx_cgcs_4549:gh_kg_xmfw_py_latest_3_0"
                },
                {
                    id: "gh_kg_xmfw_py_latest_3_0",
                    layerType: "SuperMapWMTS",
                    caption: "项目范围_市域",
                    mapUrl: "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/fc677dd16ff51d9f78bd9d8a2b789b0c",
                    visible: false,
                    queryUrl: "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/acaa0391ebe1546424200246d0cd2f1b?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_sbj_cgcs_4549:gh_kg_xmfw_py_latest_3_0"
                }
             ]
        },
        {
            layerType: "GroupLayer",
            name: "gh_kg_ydgh_py_latest_3_0",
            caption: "控规_用地规划",
            subLayers:[
                {
                    id: "gh_kg_ydgh_py_latest_3_0-1",
                    "layerName": "BKY_YDGH_PY",
                    layerType: "SuperMapWMTS",
                    caption: "用地规划_苍南",
                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/36bc2c0c6485d736cd3c52e7a187d29c",
                    "visible": false,
                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/2cce934beb1db0964729c4513519a026?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_cntx_cgcs_4549:gh_kg_ydgh_py_latest_3_0"
                },
                {
                    id: "gh_kg_ydgh_py_latest_3_0-2",
                    layerType: "SuperMapWMTS",
                    caption: "用地规划_洞头",
                    mapUrl: "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/450726d179a2b9009fddc546edc988bc",
                    visible: false,
                    queryUrl: "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/5a56e52ca27fea6b32ae862aa51c8751?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_dttx_cgcs_4549:gh_kg_ydgh_py_latest_3_0"
                },
                {
                    id: "gh_kg_ydgh_py_latest_3_0-3",
                    layerType: "SuperMapWMTS",
                    caption: "用地规划_龙港",
                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/8ccd53f5a9aee8b68d78c2b70acf341e",
                    "visible": false,
                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/46b1f3acfc953855e95bf6a89294750e?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_lgtx_cgcs_4549:gh_kg_ydgh_py_latest_3_0"
                },
                {
                    id: "gh_kg_ydgh_py_latest_3_0-4",
                    layerType: "SuperMapWMTS",
                    caption: "用地规划_平阳",
                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/fe5860e26cce899c0ff224905f7c324c",
                    "visible": false,
                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/fe4b37e51076226302ac688d3657dab4?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_pytx_cgcs_4549:gh_kg_ydgh_py_latest_3_0"
                    
                },
                {
                    id: "gh_kg_ydgh_py_latest_3_0-5",
                    layerType: "SuperMapWMTS",
                    caption: "用地规划_瑞安",
                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/3acbe8a727bd1d95852b6e5c483be732",
                    "visible": false,
                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/6f0dc9fba82d130173b8479f67dfe646?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_ratx_cgcs_4549:gh_kg_ydgh_py_latest_3_0"
                    
                },
                {
                    id: "gh_kg_ydgh_py_latest_3_0-6",
                    layerType: "SuperMapWMTS",
                    caption: "用地规划_泰顺",
                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/c4879159def0a96201156e66c3534b73",
                    "visible": false,
                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/40110a793a16af450bf54167c8eb89e0?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_tstx_cgcs_4549:gh_kg_ydgh_py_latest_3_0"
                },
                {
                    id: "gh_kg_ydgh_py_latest_3_0-7",
                    layerType: "SuperMapWMTS",
                    caption: "用地规划_文成",
                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/5eaa215fa37eefea8791d6c2fff9f71a",
                    "visible": false,
                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/9cab06ef3ada06fc065b649bbfd64cb2?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wctx_cgcs_4549:gh_kg_ydgh_py_latest_3_0"
                },
                {
                    id: "gh_kg_ydgh_py_latest_3_0-8",
                    layerType: "SuperMapWMTS",
                    caption: "用地规划_永嘉",
                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/13a9882dc799885e4c72ae3823f2ad33",
                    "visible": false,
                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/d2355fe57af66dc8b3a531808df86210?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yjtx_cgcs_4549:gh_kg_ydgh_py_latest_3_0"
                    
                },
                {
                    id: "gh_kg_ydgh_py_latest_3_0-9",
                    layerType: "SuperMapWMTS",
                    caption: "用地规划_乐清",
                    "mapUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/f55771844da0fa50718d48a5b1f5e537",
                    "visible": false,
                    "queryUrl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/287b156961b7ecc16e8fa52a6e765d03?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_yqtx_cgcs_4549:gh_kg_ydgh_py_latest_3_0"
                },
                {
                    id: "gh_kg_ydgh_py_latest_3_0",
                    layerType: "SuperMapWMTS",
                    caption: "用地规划_市域",
                    mapUrl: "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wmts/165a686804c54f4fc5ff13055ded9885",
                    visible: false,
                    queryUrl: "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/acaa0391ebe1546424200246d0cd2f1b?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_sbj_cgcs_4549:gh_kg_ydgh_py_latest_3_0"
                }
               
            ]
        },
    ]
});

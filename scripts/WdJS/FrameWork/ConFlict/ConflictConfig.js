define( {
    layers:
    [
        {
            "region":["330300"],
            "themeId":"nzy",
            "themeName": "农转用图层",
            "url": [
                {"layerid": "gl_nzybp_jsydbpl_py_latest_3_0",
                "caption" : "农转用_旧地政系统",
                "queryurl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/486250386a3f6b25423d6b459cd10b28?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_qs_cgcs_4549:gl_nzybp_jsydbpl_py_latest_3_0"
                },
                {"layerid": "gl_nzybp_jsydbpx_py_latest_3_0",
                "caption": "农转用_新地政系统",
                "queryurl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/486250386a3f6b25423d6b459cd10b28?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_qs_cgcs_4549:gl_nzybp_jsydbpx_py_latest_3_0"
                },
                {"layerid": "gl_nzybp_nzy_sj_py_latest_3_0",
                "caption": "农转用_市级",
                "queryurl":  "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/acaa0391ebe1546424200246d0cd2f1b?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_sbj_cgcs_4549:gl_nzybp_nzy_sj_py_latest_3_0",
                },
                {"layerid": "gl_nzybp_nzy_bj_py_latest_3_0",
                "caption": "农转用_部级",
                "queryurl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/486250386a3f6b25423d6b459cd10b28?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_qs_cgcs_4549:gl_nzybp_nzy_bj_py_latest_3_0",

                }
            ]
        },
        {
            "region":["330300"],
            "themeId":"xs",
            "themeName": "农转用_省级",
            "url": [
                {"layerid": "gl_nzybp_jsydbpl_py_latest_3_0",
                "caption" : "农转用_旧地政系统",
                "queryurl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/486250386a3f6b25423d6b459cd10b28?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_qs_cgcs_4549:gl_nzybp_jsydbpl_py_latest_3_0"
                },
                {"layerid": "gl_nzybp_jsydbpx_py_latest_3_0",
                "caption": "农转用_新地政系统",
                "queryurl": "http://10.36.128.241:2238/api/esb/esbdataservice/findService/wfs/486250386a3f6b25423d6b459cd10b28?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_qs_cgcs_4549:gl_nzybp_jsydbpx_py_latest_3_0"
                },
            ]
        }    
        
    ]
     
})
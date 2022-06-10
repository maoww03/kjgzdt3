define({
    layers: [
          {id: "GCS330000K3003_JSYDBP_NZYDK_X",
            caption: "农转用_省级",
            queryUrl: "http://10.36.132.216:8090/iserver/services/data-wz_data_cgcs2000_4549/wfs100/utf-8?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=wz_data_cgcs2000_4549:GCS330000K3003_JSYDBP_NZYDK_X",
            field: "xmmc",
            field2:"pzwh"
          },

            {id: "gl_nzybp_nzy_sj_py_latest_3_0",
            caption: "农转用_市级_离线",
            queryUrl:  "http://10.36.132.216:8090/iserver/services/data-c_wztx_sbj_cgcs_4549/wfs100/utf-8?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_sbj_cgcs_4549:gl_nzybp_nzy_sj_py_latest_3_0",
            field: "xmmc" ,
            field2:"pzwh"

          },

            {id: "gl_nzybp_nzy_bj_py_latest_3_0",
            caption: "农转用_部级_离线",
            queryUrl: "http://10.36.132.216:8090/iserver/services/data-c_wztx_qs_cgcs_4549/wfs100/utf-8?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_qs_cgcs_4549:gl_nzybp_nzy_bj_py_latest_3_0",
            field: "xmmc",
            field2:"pzwh"

           }
        
      
    ]
});


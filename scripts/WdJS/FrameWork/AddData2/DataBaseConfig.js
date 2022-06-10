define({
    layers: [
        {
            id: "xz_tdzy_2017_jbntbhq_py_latest_3_0",
            name: "基本农田保护区",
            tableName: "yjjblt_temp_1_0",
            field:"objectid", 
            url: "http://10.36.128.241:10901/api/esb/esbdataservice/findService/wmts/410a99379032c58b018d3a3ef92b0ba2",
            queryUrl: "http://10.36.128.241:10901/api/esb/esbdataservice/findService/wfs/acaa0391ebe1546424200246d0cd2f1b?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_sbj_cgcs_4549:xz_tdzy_2017_jbntbhq_py_latest_3_0"
        },
        {
            id: "xz_tdzy_2017_jbntbhtb_py_latest_3_0",
            name: "基本农田保护图斑",
            tableName: "",
            field:"objectid", 
            url:  "http://10.36.128.241:10901/api/esb/esbdataservice/findService/wmts/e9d68594d934fca0d7944b17926276ac",
            queryUrl: "http://10.36.128.241:10901/api/esb/esbdataservice/findService/wfs/acaa0391ebe1546424200246d0cd2f1b?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_sbj_cgcs_4549:xz_tdzy_2017_jbntbhtb_py_latest_3_0"
        },
        { 
            "id": "xz_slzy_xjejdcslzy_py_latest_3_0",
            "tableName": "xz_slzy_xjejdcslzy_py_latest_3_0",
            "name": "县级二级调查森林资源_省级下发",
            field:"objectid", 
            "url": "http://10.36.128.241:10901/api/esb/esbdataservice/findService/wmts/81258249f592e86afda82d83ca17bd5e?service=wmts&request=GetCapabilities",
            "queryUrl": "http://10.36.128.241:10901/api/esb/esbdataservice/findService/wfs/486250386a3f6b25423d6b459cd10b28?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=c_wztx_qs_cgcs_4549:xz_slzy_xjejdcslzy_py_latest_3_0"
            
        } 
        // 
        // {
        //     id: "xzhx",
        //     name: "规划选址红线",
        //     url: "http://192.168.1.131:8090/iserver/services/map-xzhx/wmts100",
        //     queryUrl: "http://192.168.1.131:8090/iserver/services/data-ghstdata/wfs100/utf-8?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=ghst:xzhx",
        //     tableName: "",
        //     field:"objectid", 
        // }    
    
    
    ]
});

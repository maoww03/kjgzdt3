define({
    layers: [
        // {
        //     name: "城乡低效用地开发潜力分析表",
        //     url:"http://192.168.1.121:8800/kjgzdt/count/downLoadExcel",
        //     show:null,
        // },
        {
            name: "做地出让统计",
            url: "../kjgzdtService2/CNTJ/zdcrtj",
            show: 3,
            department:"苍南县自然资源和规划局",
            layers:""
        },
        {
            name: "批而未供统计",
            url: "../kjgzdtService2/CNTJ/pewgtj",
            show: 4,
            department:"苍南县自然资源和规划局",
            layers:""
        },
        {
            name: "按储备机构统计土储报表",
            url: "../cbdk/cbdk-bbxx/getReportFormByJgmcOrSzxzq?condition=cbjgmc",
            show: 1,
            department:"",
            layers:""
        },
        {
            name: "按行政区域统计土储报表",
            url: "../cbdk/cbdk-bbxx/getReportFormByJgmcOrSzxzq?condition=szxzq",
            show: 1,
            department:"",
            layers:""
        },
        {
            name: "经营性用地拟出让情况土储报表",
            url: "../cbdk/cbdk-bbxx/getMercantileConstructiveLand",
            show: 2,
            department:"",
            layers:""
        },
        {
            name: "住宅用地拟出让情况土储报表",
            url: "../cbdk/cbdk-bbxx/getResidentialLand",
            show: 2,
            department:"",
            layers:""
        },
        {
            name: "商业用地拟出让情况土储报表",
            url: "../cbdk/cbdk-bbxx/getCommercialLand",
            show: 2,
            department:"",
            layers:""
        }
    ]

});

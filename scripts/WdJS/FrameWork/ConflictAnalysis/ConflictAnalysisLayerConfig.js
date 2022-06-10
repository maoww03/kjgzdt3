define({
    // 冲突分析和后台配置的完全不相符合，
    layers: [
        {
            // 分析图层：低效用地调查单元[GCS330300G100209_DCDYTB_2018] 低效用地再开发项目红线[GCS330300K3003_DXYDZKF_ZKFXMHX]
            name: "城乡低效用地开发潜力分析",
            content:['xz_dxydzxdc_2019_dxdcdytb_py_latest_3_0','xz_dxydzkf_dxydzkfxmhx_py_latest_3_0'] ,
            fieldName: "date",
            showFields: [
                { field: "mbbsm", alias: "目标标识码",type:"number" },
                { field: "ysdm", alias: "要素代码",type:"string" },
                { field: "xzdm", alias: "行政代码",type:"string" },
                { field: "cqr", alias: "产权人" ,type:"string"},
                { field: "syqlx", alias: "使用权类型" ,type:"string"},
                { field: "djyt", alias: "登记用途" ,type:"string"},
                { field: "cylx", alias: "产业类型",type:"string" },
                { field: "mj", alias: "面积",type:"number",unit:"㎡" }],
            type:'difference',
        },

        {
            //分析图层： 报批地块[GCS330300K3003_JSYDBP_NZYDK] 土地供应[GCS330300K3003_TDGY_GDDK]
            name: "批而未供分析",
            content:['gl_nzybp_jsydbpx_py_latest_3_0','gl_tdgy_gddk_py_latest_3_0'] ,
            fieldName: "date",
            showFields: [
                { field: "bsm", alias: "标识码",type:"string" },
                { field: "nzyxmbs", alias: "农转用项目标识" ,type:"string"},
                { field: "date", alias: "日期",type:"string" },
                { field: "area", alias: "地块面积",type:"number",unit:"㎡" }],
            type:'difference',
        }, 
       
    ]
});

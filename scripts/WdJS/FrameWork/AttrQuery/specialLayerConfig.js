define({
    layers: [
        // 分类1：实体库
        {
            id: "GCS330300G02_GHDLSKT_XZHX_PY",
            text: "选址阶段",
            caption:"规划选址",
            type:"content_sort2",
            url:'/xzhx/getXzhxBySlbhAndBdcdhy',
            data:['bdcdhy','slbh'],
            order:1,
        },
        {
            id: "GCS330300G02_GHDLSKT_TDGY_PY",
            text: "供应阶段",
            caption:"土地供应",
            type: "content_sort2",
            url:'/tdgy/getTdgyBySlbhAndBdcdhy',
            data:['bdcdhy','slbh'],
            order:2,
        },
        {
            id: "GCS330300G02_GHDLSKT_JSYD_PY",
            text: "用地审批",
            caption:"用地审批",
            type: "content_sort2",
            url:'/jsyd/getJsydBySlbhAndBdcdhy',
            data:['bdcdyh','ywh'],
            order:3,
        },
        {
            id: "GCS330300G02_GHDLSKT_ZPFW_PY",
            text: "工程审批",
            caption:'总平范围',
            type: "content_sort2",
            url:'/zpfw/getZpfwBySlbhAndBdcdhy',
            data:['bdcdhy','slbh'],
            order:4,
        },
        {
            id: "GCS330300G02_GHDLSKT_JGCH_PY",
            text: "竣工核实", 
            caption:"竣工核实",
            type: "content_sort2",
            url:'/jgch/getJgchBySlbhAndBdcdhy',
            data:['bdcdhy','slbh'],
            order:5,
        },
        {
            id: "GCS330300G02_GHDLSKT_ZD_PY",
            text: "确权登记",
            caption:"宗地/海",
            type: "content_sort2",
            url:'/zd/getZdBySlbhAndBdcdhy',
            data:['bdcdy','slbh'],
            order:6,
        },
        // 分类2：农转用
        {
            id: "GCS330000K3003_JSYDBP_NZYDK_X",
            text: "农转用_省级",
            caption:"农转用_省级",
            type: "content_sort_nzy",
            url:null,
            data:[],
            order:null,
        },
        {
            id: "gl_nzybp_jsydbpl_py_latest_3_0",
            text: "农转用_旧地政系统",
            caption:"农转用_旧地政系统",
            type: "content_sort_nzy",
            url:null,
            data:[],
            order:null,
            sorce:"l",
        },
        {
            id: "gl_nzybp_jsydbpx_py_latest_3_0",
            text: "农转用_新地政系统",
            caption:"农转用_新地政系统",
            type: "content_sort_nzy",
            url:null,
            data:[],
            order:null,
            sorce:"x",
        },

        {
            id: "gh_kg_xmfw_py_latest_3_0",
            text: "项目范围",
            caption:"项目范围",
            type: "content_sort_xmfw",
            url:null,
            data:[],
            order:null,
        },
        {
            id: "gh_kg_ydgh_py_latest_3_0",
            text: "用地规划",
            caption:"用地规划",
            type: "content_sort_ydgh",
            url:null,
            data:[],
            order:null,
        },


        // 分类3：土地整
        {
            id: "gl_tdzz_gbzjsdk_lx_py_latest_3_0",
            text: "高标准建设地块-立项_省级下发",
            caption:"高标准建设地块-立项_省级下发",
            type: "content_tdzz",
            tablemsg:[
                {"text":"计划阶段","database":"c_wztx_qs_cgcs_4549","schema":"wzsx","table":"gl_tdzz_jhxx_latest_3_0","search_field":"xm_guid","glzd":"xm_guid"},
                {"text":"实施信息","database":"c_wztx_qs_cgcs_4549","schema":"wzsx","table":"gl_tdzz_ssxx_latest_3_0","search_field":"zzxm_guid","glzd":"xm_guid"},
                {"text":"项目信息","database":"c_wztx_qs_cgcs_4549","schema":"wzsx","table":"gl_tdzz_xmjbxx_latest_3_0","search_field":"xm_guid_old_id","glzd":"xm_guid"},
                {"text":"验收信息","database":"c_wztx_qs_cgcs_4549","schema":"wzsx","table":"gl_tdzz_ysxx_latest_3_0","search_field":"xm_guid","glzd":"xm_guid"},
                {"text":"实施资金","database":"c_wztx_qs_cgcs_4549","schema":"wzsx","table":"gl_tdzz_zj_latest_3_0","search_field":"xm_guid","glzd":"xm_guid"},
            ]
        },
        {
            id: "gl_tdzz_gbzjsdk_ys_py_latest_3_0",
            text: "高标准建设地块-验收_省级下发",
            caption:"高标准建设地块-验收_省级下发",
            type: "content_tdzz",
            tablemsg:[
                {"text":"计划阶段","database":"c_wztx_qs_cgcs_4549","schema":"wzsx","table":"gl_tdzz_jhxx_latest_3_0","search_field":"xm_guid","glzd":"xm_guid"},
                {"text":"实施信息","database":"c_wztx_qs_cgcs_4549","schema":"wzsx","table":"gl_tdzz_ssxx_latest_3_0","search_field":"zzxm_guid","glzd":"xm_guid"},
                {"text":"项目信息","database":"c_wztx_qs_cgcs_4549","schema":"wzsx","table":"gl_tdzz_xmjbxx_latest_3_0","search_field":"xm_guid_old_id","glzd":"xm_guid"},
                {"text":"验收信息","database":"c_wztx_qs_cgcs_4549","schema":"wzsx","table":"gl_tdzz_ysxx_latest_3_0","search_field":"xm_guid","glzd":"xm_guid"},
                {"text":"实施资金","database":"c_wztx_qs_cgcs_4549","schema":"wzsx","table":"gl_tdzz_zj_latest_3_0","search_field":"xm_guid","glzd":"xm_guid"},
            ]
        },
        {
            id: "gl_tdzz_gbztsdk_lx_py_latest_3_0",
            text: "高标准提升地块-立项_省级下发",
            caption:"高标准提升地块-立项_省级下发",
            type: "content_tdzz",
            tablemsg:[
                {"text":"计划阶段","database":"c_wztx_qs_cgcs_4549","schema":"wzsx","table":"gl_tdzz_jhxx_latest_3_0","search_field":"xm_guid","glzd":"xm_guid"},
                {"text":"实施信息","database":"c_wztx_qs_cgcs_4549","schema":"wzsx","table":"gl_tdzz_ssxx_latest_3_0","search_field":"zzxm_guid","glzd":"xm_guid"},
                {"text":"项目信息","database":"c_wztx_qs_cgcs_4549","schema":"wzsx","table":"gl_tdzz_xmjbxx_latest_3_0","search_field":"xm_guid_old_id","glzd":"xm_guid"},
                {"text":"验收信息","database":"c_wztx_qs_cgcs_4549","schema":"wzsx","table":"gl_tdzz_ysxx_latest_3_0","search_field":"xm_guid","glzd":"xm_guid"},
                {"text":"实施资金","database":"c_wztx_qs_cgcs_4549","schema":"wzsx","table":"gl_tdzz_zj_latest_3_0","search_field":"xm_guid","glzd":"xm_guid"},
            ]
        },
        {
            id: "gl_tdzz_gbztsdk_ys_py_latest_3_0",
            text: "高标准提升地块-验收_省级下发",
            caption:"高标准提升地块-验收_省级下发",
            type: "content_tdzz",
            tablemsg:[
                {"text":"计划阶段","database":"c_wztx_qs_cgcs_4549","schema":"wzsx","table":"gl_tdzz_jhxx_latest_3_0","search_field":"xm_guid","glzd":"xm_guid"},
                {"text":"实施信息","database":"c_wztx_qs_cgcs_4549","schema":"wzsx","table":"gl_tdzz_ssxx_latest_3_0","search_field":"zzxm_guid","glzd":"xm_guid"},
                {"text":"项目信息","database":"c_wztx_qs_cgcs_4549","schema":"wzsx","table":"gl_tdzz_xmjbxx_latest_3_0","search_field":"xm_guid_old_id","glzd":"xm_guid"},
                {"text":"验收信息","database":"c_wztx_qs_cgcs_4549","schema":"wzsx","table":"gl_tdzz_ysxx_latest_3_0","search_field":"xm_guid","glzd":"xm_guid"},
                {"text":"实施资金","database":"c_wztx_qs_cgcs_4549","schema":"wzsx","table":"gl_tdzz_zj_latest_3_0","search_field":"xm_guid","glzd":"xm_guid"},
            ]
        },
        {
            id: "gl_tdzz_jsydfkdk_lx_py_latest_3_0",
            text: "建设用地复垦地块-立项_省级下发",
            caption:"建设用地复垦地块-立项_省级下发",
            type: "content_tdzz",
            tablemsg:[
                {"text":"计划阶段","database":"c_wztx_qs_cgcs_4549","schema":"wzsx","table":"gl_tdzz_jhxx_latest_3_0","search_field":"xm_guid","glzd":"xm_guid"},
                {"text":"实施信息","database":"c_wztx_qs_cgcs_4549","schema":"wzsx","table":"gl_tdzz_ssxx_latest_3_0","search_field":"zzxm_guid","glzd":"xm_guid"},
                {"text":"项目信息","database":"c_wztx_qs_cgcs_4549","schema":"wzsx","table":"gl_tdzz_xmjbxx_latest_3_0","search_field":"xm_guid_old_id","glzd":"xm_guid"},
                {"text":"验收信息","database":"c_wztx_qs_cgcs_4549","schema":"wzsx","table":"gl_tdzz_ysxx_latest_3_0","search_field":"xm_guid","glzd":"xm_guid"},
                {"text":"实施资金","database":"c_wztx_qs_cgcs_4549","schema":"wzsx","table":"gl_tdzz_zj_latest_3_0","search_field":"xm_guid","glzd":"xm_guid"},
            ]
        },
        {
            id: "gl_jdzz_jsydfkdk_ys_py_latest_3_0",
            text: "建设用地复垦地块-验收_省级下发",
            caption:"建设用地复垦地块-验收_省级下发",
            type: "content_tdzz",
            tablemsg:[
                {"text":"计划阶段","database":"c_wztx_qs_cgcs_4549","schema":"wzsx","table":"gl_tdzz_jhxx_latest_3_0","search_field":"xm_guid","glzd":"xm_guid"},
                {"text":"实施信息","database":"c_wztx_qs_cgcs_4549","schema":"wzsx","table":"gl_tdzz_ssxx_latest_3_0","search_field":"zzxm_guid","glzd":"xm_guid"},
                {"text":"项目信息","database":"c_wztx_qs_cgcs_4549","schema":"wzsx","table":"gl_tdzz_xmjbxx_latest_3_0","search_field":"xm_guid_old_id","glzd":"xm_guid"},
                {"text":"验收信息","database":"c_wztx_qs_cgcs_4549","schema":"wzsx","table":"gl_tdzz_ysxx_latest_3_0","search_field":"xm_guid","glzd":"xm_guid"},
                {"text":"实施资金","database":"c_wztx_qs_cgcs_4549","schema":"wzsx","table":"gl_tdzz_zj_latest_3_0","search_field":"xm_guid","glzd":"xm_guid"},
            ]
        },
        {
            id: "gl_tdzz_kzgd_lx_py_latest_3_0",
            text: "垦造耕地-立项_省级下发",
            caption:"垦造耕地-立项_省级下发",
            type: "content_tdzz",
            tablemsg:[
                {"text":"计划阶段","database":"c_wztx_qs_cgcs_4549","schema":"wzsx","table":"gl_tdzz_jhxx_latest_3_0","search_field":"xm_guid","glzd":"xm_guid"},
                {"text":"实施信息","database":"c_wztx_qs_cgcs_4549","schema":"wzsx","table":"gl_tdzz_ssxx_latest_3_0","search_field":"zzxm_guid","glzd":"xm_guid"},
                {"text":"项目信息","database":"c_wztx_qs_cgcs_4549","schema":"wzsx","table":"gl_tdzz_xmjbxx_latest_3_0","search_field":"xm_guid_old_id","glzd":"xm_guid"},
                {"text":"验收信息","database":"c_wztx_qs_cgcs_4549","schema":"wzsx","table":"gl_tdzz_ysxx_latest_3_0","search_field":"xm_guid","glzd":"xm_guid"},
                {"text":"实施资金","database":"c_wztx_qs_cgcs_4549","schema":"wzsx","table":"gl_tdzz_zj_latest_3_0","search_field":"xm_guid","glzd":"xm_guid"},
            ]
        },
        {
            id: "gl_tdzz_kzgd_ys_py_latest_3_0",
            text: "垦造耕地-验收_省级下发",
            caption:"垦造耕地-验收_省级下发",
            type: "content_tdzz",
            tablemsg:[
                {"text":"计划阶段","database":"c_wztx_qs_cgcs_4549","schema":"wzsx","table":"gl_tdzz_jhxx_latest_3_0","search_field":"xm_guid","glzd":"xm_guid"},
                {"text":"实施信息","database":"c_wztx_qs_cgcs_4549","schema":"wzsx","table":"gl_tdzz_ssxx_latest_3_0","search_field":"zzxm_guid","glzd":"xm_guid"},
                {"text":"项目信息","database":"c_wztx_qs_cgcs_4549","schema":"wzsx","table":"gl_tdzz_xmjbxx_latest_3_0","search_field":"xm_guid_old_id","glzd":"xm_guid"},
                {"text":"验收信息","database":"c_wztx_qs_cgcs_4549","schema":"wzsx","table":"gl_tdzz_ysxx_latest_3_0","search_field":"xm_guid","glzd":"xm_guid"},
                {"text":"实施资金","database":"c_wztx_qs_cgcs_4549","schema":"wzsx","table":"gl_tdzz_zj_latest_3_0","search_field":"xm_guid","glzd":"xm_guid"},
            ]
        },
        {
            id: "gl_tzgzdk_gdzlts_lx_py_latest_3_0",
            text: "耕地质量提升-立项_省级下发",
            caption:"耕地质量提升-立项_省级下发",
            type: "content_tdzz",
            tablemsg:[
                {"text":"计划阶段","database":"c_wztx_qs_cgcs_4549","schema":"wzsx","table":"gl_tdzz_jhxx_latest_3_0","search_field":"xm_guid","glzd":"xm_guid"},
                {"text":"实施信息","database":"c_wztx_qs_cgcs_4549","schema":"wzsx","table":"gl_tdzz_ssxx_latest_3_0","search_field":"zzxm_guid","glzd":"xm_guid"},
                {"text":"项目信息","database":"c_wztx_qs_cgcs_4549","schema":"wzsx","table":"gl_tdzz_xmjbxx_latest_3_0","search_field":"xm_guid_old_id","glzd":"xm_guid"},
                {"text":"验收信息","database":"c_wztx_qs_cgcs_4549","schema":"wzsx","table":"gl_tdzz_ysxx_latest_3_0","search_field":"xm_guid","glzd":"xm_guid"},
                {"text":"实施资金","database":"c_wztx_qs_cgcs_4549","schema":"wzsx","table":"gl_tdzz_zj_latest_3_0","search_field":"xm_guid","glzd":"xm_guid"},
            ]
        },
        {
            id: "gl_tzgzdk_gdzlts_ys_py_latest_3_0",
            text: "耕地质量提升-验收_省级下发",
            caption:"耕地质量提升-验收_省级下发",
            type: "content_tdzz",
            tablemsg:[
                {"text":"计划阶段","database":"c_wztx_qs_cgcs_4549","schema":"wzsx","table":"gl_tdzz_jhxx_latest_3_0","search_field":"xm_guid","glzd":"xm_guid"},
                {"text":"实施信息","database":"c_wztx_qs_cgcs_4549","schema":"wzsx","table":"gl_tdzz_ssxx_latest_3_0","search_field":"zzxm_guid","glzd":"xm_guid"},
                {"text":"项目信息","database":"c_wztx_qs_cgcs_4549","schema":"wzsx","table":"gl_tdzz_xmjbxx_latest_3_0","search_field":"xm_guid_old_id","glzd":"xm_guid"},
                {"text":"验收信息","database":"c_wztx_qs_cgcs_4549","schema":"wzsx","table":"gl_tdzz_ysxx_latest_3_0","search_field":"xm_guid","glzd":"xm_guid"},
                {"text":"实施资金","database":"c_wztx_qs_cgcs_4549","schema":"wzsx","table":"gl_tdzz_zj_latest_3_0","search_field":"xm_guid","glzd":"xm_guid"},
            ]
        },
        {
            id: "gl_tzgzdk_hgsdk_lx_py_latest_3_0",
            text: "旱改水地块-立项_省级下发",
            caption:"旱改水地块-立项_省级下发",
            type: "content_tdzz",
            tablemsg:[
                {"text":"计划阶段","database":"c_wztx_qs_cgcs_4549","schema":"wzsx","table":"gl_tdzz_jhxx_latest_3_0","search_field":"xm_guid","glzd":"xm_guid"},
                {"text":"实施信息","database":"c_wztx_qs_cgcs_4549","schema":"wzsx","table":"gl_tdzz_ssxx_latest_3_0","search_field":"zzxm_guid","glzd":"xm_guid"},
                {"text":"项目信息","database":"c_wztx_qs_cgcs_4549","schema":"wzsx","table":"gl_tdzz_xmjbxx_latest_3_0","search_field":"xm_guid_old_id","glzd":"xm_guid"},
                {"text":"验收信息","database":"c_wztx_qs_cgcs_4549","schema":"wzsx","table":"gl_tdzz_ysxx_latest_3_0","search_field":"xm_guid","glzd":"xm_guid"},
                {"text":"实施资金","database":"c_wztx_qs_cgcs_4549","schema":"wzsx","table":"gl_tdzz_zj_latest_3_0","search_field":"xm_guid","glzd":"xm_guid"},
            ]
        },
        {
            id: "gl_tzgzdk_hgsdk_ys_py_latest_3_0",
            text: "旱改水地块-验收_省级下发",
            caption:"旱改水地块-验收_省级下发",
            type: "content_tdzz",
            tablemsg:[
                {"text":"计划阶段","database":"c_wztx_qs_cgcs_4549","schema":"wzsx","table":"gl_tdzz_jhxx_latest_3_0","search_field":"xm_guid","glzd":"xm_guid"},
                {"text":"实施信息","database":"c_wztx_qs_cgcs_4549","schema":"wzsx","table":"gl_tdzz_ssxx_latest_3_0","search_field":"zzxm_guid","glzd":"xm_guid"},
                {"text":"项目信息","database":"c_wztx_qs_cgcs_4549","schema":"wzsx","table":"gl_tdzz_xmjbxx_latest_3_0","search_field":"xm_guid_old_id","glzd":"xm_guid"},
                {"text":"验收信息","database":"c_wztx_qs_cgcs_4549","schema":"wzsx","table":"gl_tdzz_ysxx_latest_3_0","search_field":"xm_guid","glzd":"xm_guid"},
                {"text":"实施资金","database":"c_wztx_qs_cgcs_4549","schema":"wzsx","table":"gl_tdzz_zj_latest_3_0","search_field":"xm_guid","glzd":"xm_guid"},
            ]
        },
  

    ]
});


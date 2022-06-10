define({
    subMenus: [
        {
            id: "tcml",
            icon: "image/catalog/tcml.png",
            activeIcon: "image/catalog/tcml_active.png",
            text: "图层目录",
            type: "siderbar",
            subItem: [{
                id: "qml",
                modular: "FrameWork/DataView/View",
                text: "全目录"
            },
            {
                id: "wdml",
                modular: "FrameWork/collectList/Collect",
                text: "我的目录"
            }]
        },
        {
            id: "cygn",
            icon: "image/catalog/cygn.png",
            activeIcon: "image/catalog/cygn_active.png",
            text: "常用功能",
            type: "toolbar",
            subItem: [{
                id: "sjcx",
                text: "数据查询",
                subItem: [
                    {
                        id: "hccx",
                        icon: "image/sidebar/hccx.png",
                        activeIcon: "image/sidebar/mouseover/hccx.png",
                        modular: "FrameWork/AttrQuery/AttrQueryByBuffer",
                        text: "缓冲查询",
                        tooltip: "缓冲查询"
                    }]
            },
            {
                id: "kjfx",
                text: "空间分析",
                subItem: [{
                    id: "dkdj",
                    icon: "image/sidebar/dkdj.png",
                    activeIcon: "image/sidebar/mouseover/dkdj.png",
                    modular: "FrameWork/ConFlict/confilct",
                    text: "地块叠加",
                    tooltip: "地块叠加分析"
                }]
            }]
        },
        {
            id: "yyjs",
            icon: "image/catalog/yyjs.png",
            activeIcon: "image/catalog/yyjs_active.png",
            text: "应用集市",
            type: "toolbar",
            subItem: [{
                id: "sjrk",
                text: "数据入库",
                subItem: [{
                    id: "tcrk",
                    icon: "image/sidebar/tcrk.png",
                    activeIcon: "image/sidebar/mouseover/tcrk.png",
                    modular: "FrameWork/DataStorage/landBank",
                    text: "土储入库",
                    tooltip: "土地储备入库"
                },
                // {
                //     id: "gbrk",
                //     icon: "image/sidebar/gbrk.png",
                //     activeIcon: "image/sidebar/mouseover/gbrk.png",
                //     modular: "FrameWork/DataStorage/cultivatedBank",
                //     text: "耕保入库",
                //     tooltip: "耕保入库"
                // },
                {
                    id: "kgrk",
                    icon: "image/sidebar/kgrk.png",
                    activeIcon: "image/sidebar/mouseover/kgrk.png",
                    modular: "FrameWork/DataStorage/ControlRegulaClk",
                    text: "控规入库",
                    tooltip: "控规入库"
                },
            
            ]
            },
            {
                id: "txcl",
                text: "图形处理",
                subItem: [
                    {
                        id: "zbzh",
                        icon: "image/sidebar/zbzh.png",
                        activeIcon: "image/sidebar/mouseover/zbzh.png",
                        modular: "FrameWork/CoordinatesTransform/CoordinatesTransformClk",
                        text: "坐标转换",
                        tooltip: "平面球面坐标转换"

                    }]
            },
            {
                id: "fjsc",
                text: "附件上传",
                subItem: [
                    {
                        id: "upfile",
                        icon: "image/sidebar/fujian.png",
                        activeIcon: "image/sidebar/mouseover/fujian.png",
                        modular: "FrameWork/Attachment/AttachmentBarClk",
                        text: "附件上传",
                        tooltip: "附件上传"
                    },
                    {
                        id: "downfile",
                        icon: "image/sidebar/xiazai.png",
                        activeIcon: "image/sidebar/mouseover/xiazai.png",
                        modular: "FrameWork/Attachment/AttachmentBarClk_down",
                        text: "附件下载",
                        tooltip: "附件下载"
                    },
                    {
                        id: "downRecord",
                        icon: "image/sidebar/kgrk.png",
                        activeIcon: "image/sidebar/mouseover/kgrk.png",
                        modular: "FrameWork/DownloadRecord/DownRecordBarClk",
                        text: "下载日志",
                        tooltip: "下载日志"
                    }
                ]
            }
        ]

        }
    ]
});


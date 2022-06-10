define({
    subMenus: [
        // {
        //     id: "xzqh",
        //     icon: "qydh.png",
        //     modular: "FrameWork/Region/Region",
        //     text: "区域导航",
        //     type: ""
        // },
        {
            id: "dtgj",
            icon: "dtgj.png",
            text: "地图工具",
            subMenus: [
                {
                    groupName: "视图",
                    subItem: [{
                        id: "dpcy",
                        icon: "dpcy.png",
                        modular: "FrameWork/View/Difference",
                        text: "单屏差异",
                        tooltip:"单屏差异对比"
                    },

                    {
                        id: "lkfd",
                        icon: "lkfd.png",
                        modular: "FrameWork/View/ZoomIn",
                        text: "拉框放大",
                        tooltip:"地图拉框放大"
                    },
                    {
                        id: "lksx",
                        icon: "lksx.png",
                        modular: "FrameWork/View/ZoomOut",
                        text: "拉框缩小",
                        tooltip:"地图拉框缩小"

                    },
                    {
                        id: "qcdt",
                        icon: "qcdt.png",
                        modular: "FrameWork/Clear/Clear",
                        text: "清除地图",
                        tooltip:"地图标记清除"
                        
                    }]
                },
                {
                    groupName: "测量",
                    subItem: [{
                        id: "czb",
                        icon: "czb.png",
                        modular: "FrameWork/Measure/measurePoint",
                        text: "坐标",
                        tooltip:"测量坐标"

                    }, {
                        id: "cj",
                        icon: "cj.png",
                        modular: "FrameWork/Measure/measureLength",
                        text: "测距",
                        tooltip:"测量距离"
                    },
                    {
                        id: "cm",
                        icon: "cm.png",
                        modular: "FrameWork/Measure/measureArea",
                        text: "测面",
                        tooltip:"测量面积"
                    }]
                },
                {
                    groupName: "分屏",
                    subItem: [{
                        id: "shuangp",
                        icon: "shuangpin.png",
                        modular: "FrameWork/View/DoubleScreen",
                        text: "双屏",
                        tooltip:"分屏对比"
                    }, 
                    {
                        id: "sanp",
                        icon: "sanp.png",
                        modular: "FrameWork/View/ThreeScreen",
                        text: "三屏",
                        tooltip:"分屏对比"

                    },
                    {
                        id: "sip",
                        icon: "sipin.png",
                        modular: "FrameWork/View/FourScreen",
                        text: "四屏",
                        tooltip:"分屏对比"

                    },
                    {
                        id: "wp",
                        icon: "wupin.png",
                        modular: "FrameWork/View/FiveScreen",
                        text: "五屏",
                        tooltip:"分屏对比"

                    },
                    {
                        id: "lp",
                        icon: "liupin.png",
                        modular: "FrameWork/View/FixScreen",
                        text: "六屏",
                        tooltip:"分屏对比"

                    }]
                },
                {
                    groupName: "场景",
                    subItem: [{
                        id: "cjsc",
                        icon: "cjsc.png",
                        modular: "FrameWork/SceneCollection/SceneCollection",
                        text: "场景收藏",
                        tooltip:"收藏当前场景"
                    },
                    {
                        id: "cjhy",
                        icon: "cjhy.png",
                        modular: "FrameWork/quickrestore/quickrestore",
                        text: "场景还原",
                        tooltip:"还原收藏场景"

                    }]
                },
                {
                    groupName: "打印",
                    subItem: [{
                        id: "dtdy",
                        icon: "dtdy.png",
                        modular: "FrameWork/Print/Print",
                        text: "地图打印",
                        tooltip: "地图打印"

                    }]
                },
                {
                    groupName: "地名查询",
                    subItem: [{
                        id: "dmcx",
                        icon: "dmcx.png",
                        modular: "FrameWork/AddrQuery/query",
                        text: "地名查询",
                        tooltip: "根据地名查询"

                    },
                    {
                        id: "location",
                        icon: "dtdw.png",
                        modular: "FrameWork/AttrQuery/LocationIn",
                        text: "定位",
                        tooltip: "定位"
                    }
                ]
                },
                {
                    groupName: "其他",
                    subItem: [{
                        id: "daoru",
                        icon: "daoru.png",
                        modular: "FrameWork/CustomizeShape2/CustomizeShapeClk",
                        text: "导入",
                        tooltip: "导入"
                    },
                    {
                        id: "dc",
                        icon: "dc.png",
                        modular: "FrameWork/CustomizeShape2/CustomizeShapeoutClk",
                        text: "导出",
                        tooltip: "导出"
                    },
                    {
                        id: "mbxz",
                        icon: "mbxz.png",
                        modular: "FrameWork/DownFile/DownFile_tempClk",
                        text: "模板下载",
                        tooltip: "模板下载"

                    }
                    
                ]
                },

            ]

        },
        // 反馈：查询模块调整
// 1、属性查询：关键字查询 、自定义查询
// 2、空间查询：点击查询、拉框查询、周边查询、缓冲查询
// 3、关键字查询设置明显提示
        {
            id: "cxtj",
            icon: "cxgj.png",
            text: "查询工具",
            subMenus: [
                {
                    groupName: "属性查询",
                    subItem: [{
                        id: "gjzcx",
                        icon: "gjzcx.png",
                        modular: "FrameWork/ServiceSearch/highlightbox",
                        text: "关键字查询",
                        tooltip: "关键字查询"
                    },
                    {
                        id: "dzcx",
                        icon: "dzcx.png",
                        modular: "FrameWork/AttrQuery/QueryByValueClk",
                        text: "自定义查询",
                        tooltip: "自定义查询"

                    }]
                },
                {
                    groupName: "空间查询",
                    subItem: [{
                        id: "djcx",
                        icon: "djcx.png",
                        modular: "FrameWork/AttrQuery/AttrQueryByPoint",
                        text: "点击查询",
                        tooltip: "点击图斑查询"
                    },
                    {
                        id: "lkcx",
                        icon: "lkcx.png",
                        modular: "FrameWork/AttrQuery/AttrQueryByRectangle",
                        text: "拉框查询",
                        tooltip: "拉框查询"

                    },
                    {
                        id: "zbss",
                        icon: "zbss.png",
                        modular: "FrameWork/SurroundQuery/SurroundQueryClick",
                        text: "周边查询",
                        tooltip: "周边查询"

                    },
                    {
                        id: "dbxcx",
                        icon: "dbxcx.png",
                        modular: "FrameWork/AttrQuery/AttrQueryByPolygon",
                        text: "多边形查询",
                        tooltip: "多边形查询"

                    },
                    {
                        id: "hccx",
                        icon: "hccx.png",
                        modular: "FrameWork/AttrQuery/AttrQueryByBuffer",
                        text: "缓冲查询",
                        tooltip: "缓冲查询"
                    }]
                }
            ]

        },
        {
            id: "ywgj",
            icon: "ywgj.png",
            text: "业务工具",
            subMenus: [
                {
                    groupName: "标注",
                    subItem: [{
                        id: "dbz",
                        icon: "dbz.png",
                        modular: "FrameWork/Mark/draw_point",
                        text: "点",
                        tooltip: "点标注"
                    },
                    {
                        id: "xbz",
                        icon: "xbz.png",
                        modular: "FrameWork/Mark/draw_line",
                        text: "线",
                        tooltip: "线标注"

                    },
                    {
                        id: "mbz",
                        icon: "mbz.png",
                        modular: "FrameWork/Mark/draw_polygon",
                        text: "面",
                        tooltip: "面标注"

                    },
                    {
                        id: "wbbz",
                        icon: "wbbz.png",
                        modular: "FrameWork/Mark/draw_text",
                        text: "文本",
                        tooltip: "文本标注"
                    },
                    {
                        id: "bzzs",
                        icon: "bzzs.png",
                        modular: "FrameWork/Mark/mark_query_btn",
                        text: "标注展示",
                        tooltip: "标注展示"

                    }]
                },
                {
                    groupName: "分析",
                    subItem: [{
                        id: "dkdj",
                        icon: "dkdj.png",
                        modular: "FrameWork/ConFlict/confilct",
                        text: "地块叠加",
                        tooltip: "地块叠加分析"

                    }, 
                    {
                        id: "tj",
                        icon: "tj.png",
                        modular: "FrameWork/Statistical/StatisticalClick",
                        text: "统计",
                        tooltip: "统计分析"

                    },
                   
                    {
                        id: "tjbb",
                        icon: "tjbb.png",
                        modular: "FrameWork/DownLoadExcel/DownLoadExcel",
                        text: "统计报表",
                        tooltip: "统计报表"

                    },
                    // confilct_madeClk
                    // {
                    //     id: "gbfx",
                    //     icon: "dkdj.png",
                    //     modular: "FrameWork/Confilict_made/confilct_madeClk",
                    //     text: "农转用分析",
                    //     tooltip: "农转用分析"
                    // }
                    {
                        id: "ctfx",
                        icon: "ctfx.png",
                        modular: "FrameWork/ConflictAnalysis/ConflictAnalysisClick",
                        text: "冲突分析",
                        tooltip: "冲突分析",
                        unable:true,

                    }
                
                ]
                },
                {
                    groupName: "图形处理",
                    subItem: [{
                        id: "txcl",
                        icon: "txdc.png",
                        modular: "FrameWork/Graph/tx_upload",
                        text: "坐标检查",
                        tooltip:"坐标检查"
                    },
                    {
                        id: "txdc",
                        icon: "txzh.png",
                        modular: "FrameWork/CoordinatesTransform/TxtToShapeClick",
                        text: "格式转换",
                        tooltip:"格式转换"

                    },
                    {
                        id: "zbzh",
                        icon: "zbzh.png",
                        modular: "FrameWork/CoordinatesTransform/CoordinatesTransformClk",
                        text: "坐标转换",
                        tooltip:"平面球面坐标转换"

                    },
                    // TxtTransformClk
                    {
                        id: "sbbzh",
                        icon: "sbb.png",
                        modular: "FrameWork/CoordinatesTransform/TxtTransformClk",
                        text: "省部互转",
                        tooltip:"省标部标之间互相转换"
                    },
                    {
                        id: "shpzh",
                        icon: "shp.png",
                        modular: "FrameWork/shpTransform/shpTransformClk",
                        text: "shp省部",
                        tooltip:"shp省标部标之间互相转换"
                    }
                ]
                }
            ]

        }
    ]
});


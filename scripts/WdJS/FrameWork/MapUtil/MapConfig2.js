define({
    option: {
        view: {
            center: [567813.634, 3096556.623],
            zoom: 3
            //maxZoom: 15,
            //minZoom: 6
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
            name: "VectorMap",
            caption: "行政区划",
            baseMap: true,
            logo: "image/xzq.png",
            opacity: 0.5,
            visible: false,
            subLayers: [
                {
                    "id": "xzq",
                    "layerName": "xzq",
                    "layerType": "VectorTileSuperMapRest",
                    "caption": "行政区_矢量切片",
                    mapUrl:"http://10.36.128.241:28090/iserver/services/map-mvt-PCS3303001001JCDLXZQH2022/restjsr/v1/vectortile/maps/PCS330300_1001_JCDL_XZQH_2022/style.json",
                    "visible": false,
                    opacity: 1,
                    "addtoken":false
                },
            ]
        },
        {
            layerType: "GroupLayer",
            name: "VectorMap",
            caption: "矢量地图",
            baseMap: true,
            logo: "image/tiledVector.png",
            opacity: 0.5,
            visible: true,
            subLayers: [
            {
                id: "WZVectorMap",
                layerType: "ArcgisWMTS",
                caption: "温州矢量地图",
                origin: [-5123200.0, 1.00021E7],
                // http://10.36.128.241:2238
                mapUrl2:"http://10.36.128.241:2238/api/esb/esbdataservice/findService/arcgis_rest_tile/0d4700439deb8bc008d3fc52114f2dfc/WMTS",
                mapUrl: "http://10.36.161.135:6080/arcgis/rest/services/CGCS2000TY/shiliang_cgcs2000/MapServer/WMTS",
                visible: true,
                opacity: 1,
                "addtoken":false
            }
                
            ]
        },
		{
            layerType: "GroupLayer",
            name: "VectorMap",
            caption: "影像地图",
            baseMap: true,
            logo: "image/tiledImage.png",
            opacity: 0.5,
            visible: false,
            subLayers: [
			{
                id: "WZImageMapAnno",
                layerType: "ArcgisWMTS",
                caption: "温州影像地图注记",
                origin: [-5123200.0, 1.00021E7],
                mapUrl2:"http://10.36.128.241:2238/api/esb/esbdataservice/findService/arcgis_rest_tile/cc99cb492bc875a223a7f0c2782b12af/WMTS",
                mapUrl: "http://10.36.161.135:6080/arcgis/rest/services/CGCS2000TY/yingxiangditu_cgcs2000/MapServer/WMTS",
                visible: false,
                opacity: 1,
                "addtoken":false

            },
			 {
                id: "WZImageMap",
                layerType: "ArcgisWMTS",
                caption: "温州影像地图",
                origin: [-5123200.0, 1.00021E7],
                mapUrl2:"http://10.36.128.241:2238/api/esb/esbdataservice/findService/arcgis_rest_tile/4906940f91e5212a3f9873e037c53b0a/WMTS",
                mapUrl: "http://10.36.161.135:6080/arcgis/rest/services/CGCS2000TY/yingxiangbiaozhu_cgcs2000/MapServer/WMTS",
                visible: false,
                opacity: 1,
                "addtoken":false

            }
                
            ]
        },
       
        
       
    ]

});

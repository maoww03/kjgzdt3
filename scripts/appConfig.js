var appConfig = {
    //requireApiUrl: "js/require.min.js",
    dojoApiUrl: "dojo/dojo/dojo.js",
    thirdApiUrls: [
        window.location.pathname.substring(0, window.location.pathname.lastIndexOf('/')) + "/scripts/jquery.min.js",
        window.location.pathname.substring(0, window.location.pathname.lastIndexOf("/")) + "/scripts/echarts.min.js",
        window.location.pathname.substring(0, window.location.pathname.lastIndexOf("/")) + "/scripts/echarts-gl.min.js",
        //window.location.pathname.substring(0, window.location.pathname.lastIndexOf('/')) + "/js/bootstrap.min.js"

    ],
    //CSS
    CssUrls: [
        "css/attrbute.css",
        "css/view.css"
        //"css/layoutit.css"
    ],

    loadJS: function () {
        //加载css
        if (util.isArray(this.CssUrls)) {
            for (var i = 0; i < this.CssUrls.length; i++) {
                document.write('<link rel="stylesheet" type="text/css" href="' + this.CssUrls[i] + '" />');
            }
        }
        //加载第三方api
        if (util.isArray(this.thirdApiUrls)) {
            for (var i = 0; i < this.thirdApiUrls.length; i++) {
                document.write('<script type="text/javascript" src="' + this.thirdApiUrls[i] + '"></script>');
            }
        }

        if (util.isString(this.dojoApiUrl)) {
            //require
            dojoConfig = {
                packages: [
                    { name: "FrameWork", location: "../../scripts/WdJS/FrameWork" }
                ]
            };
            document.write('<script type="text/javascript" src="' + this.dojoApiUrl + '"></script>');

        }
    },
    arcgis_wkt: '"wkid":4549',
    //proj4: { 'name': 'EPSG:4490', 'value': '+proj=longlat +ellps=GRS80 +no_defs' },
    proj4: { 'name': 'EPSG:4549', 'value': '+proj=tmerc +lat_0=0 +lon_0=120 +k=1 +x_0=500000 +y_0=0 +ellps=GRS80 +units=m +no_defs' },
    //{id:layerId,legend:[legend]}
    filterLegent:[], 

    btns: [],
    map: null,
    map2: null,
    region: 'http://10.36.128.241:28090/iserver/services/data-WZGTTX/wfs100/utf-8?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=WZGTTX:GCS330300G1001_QYDH_QX_2018',
    street: 'http://10.36.128.241:28090/iserver/services/data-WZGTTX/wfs100/utf-8?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=WZGTTX:GCS330300G1001_QYDH_XZ_2018',
    village: 'http://10.36.128.241:28090/iserver/services/data-WZGTTX/wfs100/utf-8?service=wfs&version=1.1.0&request=GetFeature&TYPENAME=WZGTTX:GCS330300G1001_QYDH_XZC_2018',
    url: '../kjgzdtService2',
    urlgdb:"../",
    addrurl: '../addrsearch',
    gisocnLogin: '../gisocnLogin',
    gisocnAddData: '../gisocnAddData',
    gisocnServiceQuery: '../gisocnServiceQuery',
    gisocnDataInfo: '../gisocnDataInfo',
    baseMapArr: [],
    isGrey: false,
    // newUrl:"http://localhost:18085/kjgzdt",
    newUrl:"../kjgzdtService2",

    tableUrl:"../farmers2use",

    conflict: null,
};
var util = {
    isString: function (o) {
        return o && (typeof (o) == "string" || o instanceof String);
    },
    isArray: function (o) {
        return o && (typeof (o) == "array" || o instanceof Array);
    },
    isFunction: function (o) {
        return Object.propotype.toString.call(o) === "[object Function]";
    },
    isObject: function (o) {
        return o && typeof (o) == "object";
    }

};
var _Array = {
    PopById: function (list, id) {
        var nList = [];
        for (var i = 0; i < list.length; i++) {
            if (list[i].id != id) {
                nList.push(list[i]);
            }
        }
        return nList;
    }
};
var _Date = {
    getNowDate: function () {
        var date = new Date();
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        if (month < 10) {
            month = "0" + month;
        }
        var day = date.getDate();
        if (day < 10) {
            day = "0" + day;
        }
        return year + '-' + month + '-' + day;
    },
    netDateTimeToString: function (value) {
        if (value != undefined) {
            var date = new Date();
            var time = new Number(value.substr(value.indexOf('(') + 1, 13));
            date.setTime(time);
            var year = date.getFullYear();
            var month = date.getMonth() + 1;
            if (month < 10) {
                month = "0" + month;
            }
            var day = date.getDate();
            if (day < 10) {
                day = "0" + day;
            }
            var hours = date.getHours();
            if (hours < 10) {
                hours = "0" + hours;
            }
            var mintues = date.getMinutes();
            if (mintues < 10) {
                mintues = "0" + mintues;
            }
            var seconds = date.getSeconds();
            if (seconds < 10) {
                seconds = "0" + seconds;
            }
            return year + '-' + month + '-' + day + ' ' + hours + ':' + mintues + ':' + seconds;
        }
    }
};
appConfig.loadJS();
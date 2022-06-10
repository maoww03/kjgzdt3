define(["dojo/_base/declare", "./GaussKruger"],
    function (declare, gaussKruger) {
        return declare("MapUtil.Survey", null, {
            //椭球参数
            _Ellipsoid: {
                name: "CGCS2000",
                semiMajorAxis: 6378137,
                semiMinorAxis: 6356752.3141403561,
                flatRate: 0.00335281068118232
            },
            //中央经度
            _L0: 120.666666667,
            //测量长度
            surveyLength: function (polyline) {
                var len = 0;
                var g = new gaussKruger();
                //先进行坐标转换
                var polyline2 = [];
                for (var i = 0; i < polyline.paths.length; i++) {
                    var pointList = [];
                    for (var j = 0; j < polyline.paths[i].length; j++) {
                        var point = {};
                        point.x = polyline.paths[i][j][0];
                        point.y = polyline.paths[i][j][1];
                        //var point2 = g.BL2XY(this._Ellipsoid, this._L0, point);
                        pointList[j] = point;
                    }
                    polyline2[i] = pointList;
                }
                //在逐个计算长度
                for (var i = 0; i < polyline2.length; i++) {
                    var jlen = 0;
                    for (var j = 0; j < polyline2[i].length - 1; j++) {
                        var point1 = polyline2[i][j];
                        var point2 = polyline2[i][j + 1];
                        jlen += Math.sqrt(Math.pow(point1.x - point2.x, 2) + Math.pow(point1.y - point2.y, 2));
                    }
                    len += jlen;
                }
                return len;
            },
            //测量面积
            surveyArea: function (polygon) {
                var area = 0;
                var g = new gaussKruger();  //先进行坐标转换
                var polygon2 = [];
                for (var i = 0; i < polygon.length; i++) {
                    var pointList = [];
                    for (var j = 0; j < polygon[i].length; j++) {
                        var point = {};
                        point.x = polygon[i][j][0];
                        point.y = polygon[i][j][1]; //var point2 = g.BL2XY(this._Ellipsoid, this._L0, point);
                        pointList[j] = point;
                    }
                    polygon2[i] = pointList;
                }  //再将其拼成一个面
                var pointList = polygon2[0];  //第一个多边形的最后一个点
                var point = pointList[pointList.length - 1];
                for (var i = 1; i < polygon2.length; i++) {
                    for (var j = 0; j < polygon2[i].length; j++) {
                        pointList[pointList.length] = polygon2[i][j];
                    }
                    pointList[pointList.length] = point;
                }      //计算面积
                var s = 0;
                for (var i = 0; i < pointList.length; i++) {
                    var point1 = pointList[i];
                    var point2;
                    if (i < pointList.length - 1) {
                        point2 = pointList[i + 1];
                    }  else {  point2 = pointList[0]; }
                    s += point1.y * point2.x - point2.y * point1.x;
                }
                area = Math.abs(s / 2);
                return area;
            },
            
            surveyDistance: function (point1, point2) {
                var len = 0;
                var g = new gaussKruger();
                //var _point1 = g.BL2XY(this._Ellipsoid, this._L0, point1);
                //var _point2 = g.BL2XY(this._Ellipsoid, this._L0, point2);
                len = Math.sqrt(Math.pow(_point1.x - _point2.x, 2) + Math.pow(_point1.y - _point2.y, 2));
            },
            surveyCircumference: function (polygon) {
                var length = 0;
                var g = new gaussKruger();
                //先进行坐标转换
                for (var i = 0; i < polygon.length; i++) {
                    var pointList = [];
                    for (var j = 0; j < polygon[i].length; j++) {
                        var point = {};
                        point.x = polygon[i][j][0];
                        point.y = polygon[i][j][1];
                        //var point2 = g.BL2XY(this._Ellipsoid, this._L0, point);
                        pointList[j] = point;
                    }
                    var temp = 0;
                    for (var j=0; j <= pointList.length - 1; j++) {
                        var m = pointList[j].x - pointList[(j + 1) % pointList.length].x;
                        var n = pointList[j].y - pointList[(j + 1) % pointList.length].y;
                        temp += Math.sqrt(m * m + n * n);

                    }
                    length += temp;
                }
                return length;
            }
        });
    });

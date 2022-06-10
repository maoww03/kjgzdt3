define(["dojo/_base/declare"],
    function (declare) {
        return declare("FrameWork.Measure.GaussKruger", null, {
            //经纬度转投影坐标
            BL2XY: function (ellipsoid, L0, point) {
                //先判断坐标范围
                if (!(point.x >= -180 && point.x <= 180 && point.y >= -90 && point.y <= 90)) {
                    return point;
                }
                var L02 = L0 / 180 * Math.PI;
                var B = point.y / 180 * Math.PI;
                var L = point.x / 180 * Math.PI;

                var e2 = 2 * ellipsoid.flatRate - ellipsoid.flatRate * ellipsoid.flatRate;
                var ee = e2 * (1.0 - e2);
                var NN = ellipsoid.semiMajorAxis / Math.sqrt(1.0 - e2 * Math.sin(B) * Math.sin(B));
                var T = Math.tan(B) * Math.tan(B);
                var C = ee * Math.cos(B) * Math.cos(B);
                var A = (L - L02) * Math.cos(B);
                var M = ellipsoid.semiMajorAxis * ((1 - e2 / 4 - 3 * e2 * e2 / 64 - 5 * e2 * e2 * e2 / 256) * B - (3 * e2 / 8 + 3 * e2 * e2 / 32 + 45 * e2 * e2 * e2 / 1024) * Math.sin(2 * B) + (15 * e2 * e2 / 256 + 45 * e2 * e2 * e2 / 1024) * Math.sin(4 * B) - (35 * e2 * e2 * e2 / 3072) * Math.sin(6 * B));
                
                var o = {};
                o.x = M + NN * Math.tan(B) * (A * A / 2 + (5 - T + 9 * C + 4 * C * C) * A * A * A * A / 24 + (61 - 58 * T + T * T + 600 * C - 330 * ee) * A * A * A * A * A * A / 720);
                o.y = NN * (A + (1 - T + C) * A * A * A / 6 + (5 - 18 * T + T * T + 72 * C - 58 * ee) * A * A * A * A * A / 120) + 500000;
                return o;
            },
            XY2BL: function (ellipsoid, L0, point) {
                var L02 = L0 / 180 * Math.PI;
                var ProjNo = 0;
                if (point.y > 0)
                {
                    ProjNo = Number(point.y / 1000000); //查找带号
                    if (ProjNo <= 10)
                    {
                        ProjNo = 0;
                    }
                }
                var Y0 = ProjNo * 1000000 + 500000;
                var X0 = 0;
                var xval = point.x - X0;
                var yval = point.y - Y0; //带内大地坐标
                var e2 = 2 * ellipsoid.flatRate - ellipsoid.flatRate * ellipsoid.flatRate;
                var e1 = (1.0 - Math.sqrt(1 - e2)) / (1.0 + Math.sqrt(1 - e2));
                var ee = e2 / (1 - e2);
                var M = xval;
                var u = M / (ellipsoid.semiMajorAxis * (1 - e2 / 4 - 3 * e2 * e2 / 64 - 5 * e2 * e2 * e2 / 256));
                var fai = u + (3 * e1 / 2 - 27 * e1 * e1 * e1 / 32) * Math.sin(2 * u) + (21 * e1 * e1 / 16 - 55 * e1 * e1 * e1 * e1 / 32) * Math.sin(4 * u)
                + (151 * e1 * e1 * e1 / 96) * Math.sin(6 * u) + (1097 * e1 * e1 * e1 * e1 / 512) * Math.sin(8 * u);
                var C = ee * Math.cos(fai) * Math.cos(fai);
                var T = Math.tan(fai) * Math.tan(fai);
                var NN = ellipsoid.semiMajorAxis / Math.sqrt(1.0 - e2 * Math.sin(fai) * Math.sin(fai));
                var R = ellipsoid.semiMajorAxis * (1 - e2) / Math.sqrt((1 - e2 * Math.sin(fai) * Math.sin(fai)) * (1 - e2 * Math.sin(fai) * Math.sin(fai)) * (1 - e2 * Math.sin(fai) * Math.sin(fai)));
                var D = yval / NN;
               
                L = L02 + (D - (1 + 2 * T + C) * D * D * D / 6 + (5 - 2 * C + 28 * T - 3 * C * C + 8 * ee + 24 * T * T) * D * D * D * D * D / 120) / Math.cos(fai);
                B = fai - (NN * Math.tan(fai) / R) * (D * D / 2 - (5 + 3 * T + 10 * C - 4 * C * C - 9 * ee) * D * D * D * D / 24 + (61 + 90 * T + 298 * C + 45 * T * T - 256 * ee - 3 * C * C) * D * D * D * D * D * D / 720);
                //var o = {};
                point.y = L * 180 / Math.PI;
                point.x = B * 180 / Math.PI;

                return point;
            }

        });
    });
define(["dojo/_base/declare"],
    function (declare) {
        return declare("MapUtil.Ellipsoid", null, {
            //名称
            name: "",
            //长半轴
            semiMajorAxis: 0,
            //短半轴
            semiMinorAxis: 0,
            //扁率
            flatRate: 0
        });
    });

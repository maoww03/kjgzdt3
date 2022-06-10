define(["dojo/_base/declare"],
    function (declare) {
        return declare("FrameWork.Dictionary", null, {
            _obj: null,
            _count:0,

            //构造函数
            constructor: function () {
                this._obj = {};
                this._count = 0;
            },
            //添加键值
            add: function (key, value) {
                if (typeof (this._obj[key]) == "undefined") {
                    this._obj[key] = value;
                    this._count += 1;
                }
            },
            //删除键值
            remove: function(key) {
                if (typeof (this._obj[key]) != "undefined") {
                    delete this._obj[key];
                    this._count -= 1;
                }
            },
            //删除全部
            removeAll: function () {
                this._obj = {};
                this._count = 0;
            },
            //是否存在键值
            exists : function(key) {
                if (typeof (this._obj[key]) == "undefined") {
                    return false;
                }
                return true;
            },
            //获取项
            item : function(key) {
                return this._obj[key];
            },
            //获取所有键值
            keys : function() {
                var keys = [];
                for (var p in this._obj) {
                    keys[keys.length] = p;
                }
                return keys;
            },
            //获取所有的值
            values : function() {
                var values = [];
                for (var p in this._obj) {
                    values[values.length] = this._obj[p];
                }
                return values;
            }
        })
    });

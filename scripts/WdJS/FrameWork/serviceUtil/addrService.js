define([
    'dojo/Deferred',
    'dojo/request',
    "dojo/request/iframe"
], function (Deferred, request, iframe) {
    return {
        _url: appConfig.addrurl,
        _urlout:"../permission", 
        /************目录收藏文件夹***************/ 
        //1增加Catalog
        query: function (data) {
            var def = new Deferred();
            request(this._url + '?matchWord=' + encodeURIComponent(data), {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'If-Modified-Since': '0',
                    'Cache-Control': 'no-cache'
                },
                handleAs: 'json',
                method: 'Get'
            }).then(function (data) {
                def.resolve(data);
            }, function (err) {
                def.reject(err);
            });
            return def.promise;
        },
        // 目录权限
        pdPermission: function (layermsg) {
            var def = new Deferred();
            request(this._urlout+'?serviceId=' + layermsg, {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'If-Modified-Since': '0',
                    'Cache-Control': 'no-cache',
                    "Authorization":appConfig.access_token,
                },
                handleAs: 'json',
                method: 'Get'
            }).then(function (data) {
                def.resolve(data);
            }, function (err) {
                def.reject(err);
            });
            return def.promise;
        },
        pdPermission_2:function(layermsg){
            var def = new Deferred();
            $.ajax({
                url: this._urlout+'?serviceId=' + layermsg,
                type: 'GET',
                contentType: 'application/json; charset=UTF-8',
                headers:{"Authorization":appConfig.access_token},
                async: false,
                dataType: "json",
                success: function (data) {
                    def.resolve(data);
                }, error: function (err) {
                    def.reject(err);
                }
            });
            return def.promise;
        },
        // 访问次数
        addVisit: function (time) {
            var def = new Deferred();
            request(`../zsc/visit/addVisit?date=${time}&type=空间工作地图` , {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'If-Modified-Since': '0',
                    'Cache-Control': 'no-cache',
                },
                handleAs: 'json',
                method: 'Get'
            }).then(function (data) {
                def.resolve(data);
            }, function (err) {
                def.reject(err);
            });
            return def.promise;
        },
        getTodayVisit: function (time) {
            var def = new Deferred();
            request(`../zsc/visit/getTodayVisit?date=${time}&type=空间工作地图` , {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'If-Modified-Since': '0',
                    'Cache-Control': 'no-cache',
                },
                handleAs: 'json',
                method: 'Get'
            }).then(function (data) {
                def.resolve(data);
            }, function (err) {
                def.reject(err);
            });
            return def.promise;
        },
        getTotalVisit: function () {
            var def = new Deferred();
            request(`../zsc/visit/getTotalVisit?type=空间工作地图` , {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'If-Modified-Since': '0',
                    'Cache-Control': 'no-cache',
                },
                handleAs: 'json',
                method: 'Get'
            }).then(function (data) {
                def.resolve(data);
            }, function (err) {
                def.reject(err);
            });
            return def.promise;
        },

        // 验证mapurl
        getUrlMsg:function(url){
            var def = new Deferred();
            $.ajax({
                url: url,
                type: 'GET',
                contentType: 'application/json; charset=UTF-8',
                headers:{"Authorization":appConfig.access_token},
                async: false,
                dataType: "json",
                success: function (data) {
                    def.resolve(data);
                }, error: function (err) {
                    def.reject(err);
                }
            });
            return def.promise;
        },
        // 修改密码
        updatePwd:function (oldpwd,newpwd) {
            var def = new Deferred();
            request(`http://10.36.128.244:9001/system/user/profile/updatePwd?oldPassword=${oldpwd}&newPassword=${newpwd}`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'If-Modified-Since': '0',
                    'Cache-Control': 'no-cache',
                    'Authorization':appConfig.access_token
                },
                method: 'PUT'
            }).then(function (data) {
                def.resolve(data);
            }, function (err) {
                def.reject(err);
            });
            return def.promise;
        },
    }

});
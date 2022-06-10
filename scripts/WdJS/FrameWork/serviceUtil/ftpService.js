define([
    'dojo/Deferred',
    'dojo/request'
], function (Deferred, request) {
    return {
         _url1: appConfig.urlgdb,
         _url2: appConfig.url,

        //  1-项目范围
         getftpcont: function (dir) {
            var def = new Deferred();
            request(this._url1+`gdbsave2/ls?dir=${dir}&xzq=&config=ydfw`,{
                headers: {
                    'Accept': 'application/json'
                },
                handleAs: 'json',
                method: 'GET'
            }).then(function (data){
                def.resolve(data);
            }, function (err) {
                def.reject(err);
            });
            return def.promise;
        },

        fileDownload_xmfw: function (path) {
            window.location.href=this._url1+`gdbsave2/get?path=${path}&xzq=&config=ydfw`;
        },

        down_Record:function(filename,userid,username,xsq,time){
            var def = new Deferred();

            request(this._url2+`/attachment/download?bz=ftp&filename=${filename}&userid=${userid}&username=${username}&xsq=${xsq}&time=${time}`,{
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                handleAs: "json",
                method: 'GET'
            }).then(function (data){
                def.resolve(data);
            }, function (err) {
                def.reject(err);
            });
            return def.promise;
        },

        getdownRecord:function(page,size){
            var def = new Deferred();

            request(this._url2+`/attachment/selectDownloadRecordByPage?pageIndex=${page}&pageSize=${size}`,{
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                handleAs: "json",
                method: 'GET'
            }).then(function (data){
                def.resolve(data);
            }, function (err) {
                def.reject(err);
            });
            return def.promise;
        },


        //  1-用地规划
         getftpcont_TZ: function (dir) {
            var def = new Deferred();
            request(this._url1+`gdbsave2/ls?dir=${dir}&xzq=&config=lctz`,{
                headers: {
                    "Content-Type":"application/xml"
                },
                handleAs: 'json',
                method: 'GET'
            }).then(function (data){
                def.resolve(data);
            }, function (err) {
                def.reject(err);
            });
            return def.promise;
        },
        fileDownload_ydgh: function (path) {
            window.location.href=this._url1+`gdbsave2/get?path=${path}&xzq=&config=lctz`;
        },

        //  1-用地规划
        getRouter: function (name) {
            var def = new Deferred();
            request("../wenzhou/distservice.asmx/getArMaterialPathByName?projectName="+encodeURI(name),{
                headers: {
                    'Accept': 'application/xml'
                },
                handleAs: "xml",
                method: 'GET'
            }).then(function (data){
                def.resolve(data);
            }, function (err) {
                def.reject(err);
            });
            return def.promise;
        },
        
        
    }
})
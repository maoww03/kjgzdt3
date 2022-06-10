define([
    'dojo/Deferred',
    'dojo/request'
], function (Deferred, request) {
    return {
        _url1: appConfig.url,
        _urlTest:"http://10.1.12.83:18085/kjgzdt",
        //检测图形_上传multipolygon——string
        check_tx:function(data){
            var def = new Deferred();
            // request(this._url1 + '/graphical/inspect',{
            //     headers: {
            //         'Content-Type': 'application/json',
            //         'Accept': 'application/json'
            //     },
            //     handleAs: 'json',
            //     method: 'POST',
            //     data: data
            // }).then(function (data) {
            //     def.resolve(data);
            // }, function (err) {
            //     def.reject(err);
            // });
            $.ajax({
                url: this._url1 +  '/graphical/inspect',
                type: 'POST',
                contentType: 'application/json; charset=UTF-8',
                // data: data,
                data:dojo.toJson(data),
                async: false,
                dataType: "json",
                success: function (data) {
                    def.resolve(data);
                }, error: function (xhr) {
                    def.reject(err);
                }
            });
            return def.promise;
        },
        // 图形信息处理_部
        upload_part:function(data){ 
            var def = new Deferred();
            request(this._url1 + '/upload',{
                handleAs: 'json',
                method: 'POST',
                data: data
            }).then(function (data) {
                def.resolve(data);
            }, function (err) {
                def.reject(err);
            });
            return def.promise;
        },
        // 图形信息处理_省 
        upload_province:function(data){ 
            var def = new Deferred();
            request(this._url1 + '/upload',{
                handleAs: 'json',
                method: 'POST',
                data: data
            }).then(function (data){
                def.resolve(data);
            }, function (err) {
                def.reject(err);
            });
            return def.promise;
        },
        // 图形缓冲
        graphicalBuffer: function (buffer,wkt) {
            var def = new Deferred();
            request(this._url1 + '/graphical/graphicalBuffer?buffer=' + buffer + "&wkt=" + wkt, {
                handleAs: 'json',
                method: 'POST'
            }).then(function (data) {
                def.resolve(data);
            }, function (err) {
                def.reject(err);
            });
            return def.promise;
        },
        graphicalBuffer_tb: function (buffer,wkt) {
            var def = new Deferred();
            $.ajax({
                url: this._url1 + '/graphical/graphicalBuffer?buffer=' + buffer + "&wkt=" + wkt,
                type: 'POST',
                contentType: 'application/json; charset=UTF-8',
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
        // 
        graphAnalysis: function (data) {
            var def = new Deferred();
            $.ajax({
                url: this._url1 + "/graphical/graphicalAnalysis",
                type: 'POST',
                contentType: 'application/json; charset=UTF-8',
                data: data,
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

    }
});
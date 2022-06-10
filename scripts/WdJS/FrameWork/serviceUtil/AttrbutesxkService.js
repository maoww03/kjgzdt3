define([
    'dojo/Deferred',
    'dojo/request'
], function (Deferred, request) {
    return {
         _url1: appConfig.tableUrl,
         _outurl:"../findService2",

        // 农转用-离线
         getTable_XM:function(xmsy){
            var def = new Deferred();
            $.ajax({
                url: this._url1+`/nzyxm?xmsy=${xmsy}`,
                type: 'GET',
                contentType: 'application/json; charset=UTF-8',
                async: true,
                dataType: "json",
                success: function (data) {
                    def.resolve(data);
                }, error: function (err) {
                    def.reject(err);
                }
            });
            return def.promise;
        },
        getTable_PC:function(xmbh){
            var def = new Deferred();
            $.ajax({
                url:  this._url1+`/nzypcxm?xmbh=${xmbh}`,
                type: 'GET',
                contentType: 'application/json; charset=UTF-8',
                async: true,
                dataType: "json",
                success: function (data) {
                    def.resolve(data);
                }, error: function (err) {
                    def.reject(err);
                }
            });
            return def.promise;
        },

        // 农转用-新地政
        getTable_XM3:function(data){
            var def = new Deferred();
            $.ajax({
                url: this._outurl+`/f418c7361bfd2ff879798693b3445bec`,
                type: 'POST',
                contentType: 'application/json; charset=UTF-8',
                async: true,
                dataType: "json",
                data:data,
                headers:{
                    Authorization:appConfig.access_token,
                },
                success: function (data) {
                    def.resolve(data);
                }, error: function (err) {
                    def.reject(err);
                }
            });
            return def.promise;
        },
        getTable_PC3:function(data){
            var def = new Deferred();
            $.ajax({
                url: this._outurl+`/e017ff5603ce31b6bb317d43cda0c047`,
                type: 'POST',
                contentType: 'application/json; charset=UTF-8',
                headers:{
                    Authorization:appConfig.access_token,
                },
                async: true,
                dataType: "json",
                data:data,
                success: function (data) {
                    def.resolve(data);
                }, error: function (err) {
                    def.reject(err);
                }
            });
            return def.promise;
        },
        // 农转用-旧地政
        getTable_XM4:function(data){
            var def = new Deferred();
            $.ajax({
                url: this._outurl+`/b8cb7ad3597684f6c43b48f2ec74444c`,
                type: 'POST',
                contentType: 'application/json; charset=UTF-8',
                headers:{
                    Authorization:appConfig.access_token,
                },
                async: true,
                dataType: "json",
                data:data,
                success: function (data) {
                    def.resolve(data);
                }, error: function (err) {
                    def.reject(err);
                }
            });
            return def.promise;
        },
        getTable_PC4:function(data){
            var def = new Deferred();
            $.ajax({
                url: this._outurl+`/34e0a0f9c5462839d0b7104fb9d8d08a`,
                type: 'POST',
                contentType: 'application/json; charset=UTF-8',
                headers:{
                    Authorization:appConfig.access_token,
                },
                async: true,
                dataType: "json",
                data:data,
                success: function (data) {
                    def.resolve(data);
                }, error: function (err) {
                    def.reject(err);
                }
            });
            return def.promise;
        }
       
    }
})
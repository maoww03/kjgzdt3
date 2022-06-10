define([
    'dojo/Deferred',
    'dojo/request'
], function (Deferred, request) {
    return {
        //_url: appConfig.url + "/info/",
         _url1: appConfig.url,
        //_url1:"http://192.168.1.121:8800/kjgzdt",
        //添加标记点
        add_mark: function (data) {
            var def = new Deferred();
            request(this._url1 + '/mark/addMark', {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
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
        modify_mark: function (data) {
            var def = new Deferred();
            request(this._url1 + '/mark/updateMark', {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
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
        deleteMark:function(id){
            var def = new Deferred();
            request(this._url1 + '/mark/removeMarkById/'+id,{
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                handleAs: 'json',
                method: 'delete'
            }).then(function (data) {
                def.resolve(data);
            }, function (err) {
                def.reject(err);
            });
            return def.promise;
        },
        mark_page: function (data,id,name) {
            var def = new Deferred();
            var url;
            if(name!=null && name!=undefined && name!=""){
                url=this._url1 + '/mark/selectMarkList?userid='+id+"&labelname="+encodeURI(name);
            }
            else{
                url=this._url1 + '/mark/selectMarkList?userid='+id;
            }
            request(url,{
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                handleAs: 'json',
                method: 'Post',
                data:data
            }).then(function (data) {
                def.resolve(data);
            }, function (err) {
                def.reject(err);
            });
            return def.promise;
        },
        get_all_mark: function (id) {
            var def = new Deferred();
            request(this._url1 + '/mark/selectMarkListByUserId?userid=' + id, {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                handleAs: 'json',
                method: 'Get'
            }).then(function (data) {
                def.resolve(data);
            }, function (err) {
                def.reject(err);
            });
            return def.promise;
        }
    }
})
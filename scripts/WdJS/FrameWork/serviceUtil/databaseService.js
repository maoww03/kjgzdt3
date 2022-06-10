define([
    'dojo/Deferred',
    'dojo/request',
    "dojo/request/iframe",
    "FrameWork/DatabaseConfig",
], function (Deferred, request, iframe,DatabaseConfig) {
    return {
        _url3: appConfig.url,
        _newurl:appConfig.newUrl,
        /************目录收藏文件夹***************/ 
        //1增加Catalog
        getTableInformationByTableName: function (tablename) {
            var def = new Deferred();
            var layers=appConfig.map.getLayers().array_;
            for(var i=0;i<layers.length;i++){
                var layer=layers[i].values_;
                if( layer.id==tablename){
                    var database=layer.queryUrl.split("=")[4].split(":")[0];
                   var obj= DatabaseConfig.database.find(function (obj) {return obj.database == database; })
                    var code=obj.datacode;
                }
            }
            debugger
            request(this._newurl + '/tableinformation/getTableInformationByTableName?tablename=' + tablename, {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'If-Modified-Since': '0',
                    'Cache-Control': 'no-cache',
                    code:code,
                },
                handleAs: 'json',
                method: 'GET'
            }).then(function (data) {
                def.resolve(data);
            }, function (err) {
                def.reject(err);
            });
            return def.promise;
        }

    }

});
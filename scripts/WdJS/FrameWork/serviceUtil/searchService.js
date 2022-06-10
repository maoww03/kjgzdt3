define([
    'dojo/Deferred',
    'dojo/request',
    "dojo/request/iframe",
    "FrameWork/DatabaseConfig","FrameWork/ServiceSearch/LayerConfig"
], function (Deferred, request, iframe,DatabaseConfig,LayerConfig) {
    return {
        _newurl:appConfig.newUrl,

        querty_Feature: function (tablename,where,pageNum,pageSize,dbcode) {
            debugger
            var def = new Deferred();
            // 找到tablename的queryurld database
            var schemaName= "public";
            if(!dbcode){
                var layers=appConfig.map.getLayers().array_;
                for(var i=0;i<layers.length;i++){
                    var layer=layers[i].values_;
                    if( layer.id==tablename){
                        var database=layer.queryUrl.split("=")[4].split(":")[0];
                        var obj= DatabaseConfig.database.find(function (obj) {return obj.database == database; })
                        var code=obj.datacode;
                    }
                } 
            }else{
                var code=dbcode;
            }
            
            var _layer =LayerConfig.layers.find(function(obj2){ return obj2.querytable == tablename; })
            if(_layer!=undefined && _layer != null){
                var code=_layer.dbcode;
                schemaName=_layer.scheme
            }

             var  queryData={
                flag:true,
                tableName:tablename,
                where:where,
                pageNum:pageNum,
                pageSize:pageSize,
                schemaName:schemaName
            }

           
            request(this._newurl + `/count/queryByTableNameAndWhere`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'If-Modified-Since': '0',
                    'Cache-Control': 'no-cache',
                    code:code,
                },
                handleAs: 'json',
                method: 'POST',
                data: dojo.toJson(queryData)
            }).then(function (data) {
                def.resolve(data);
            }, function (err) {
                def.reject(err);
            });
            return def.promise;
        },
    }

});

// ../gisQuery
define([
    'dojo/Deferred',
    'dojo/request',
    "dojo/request/iframe"
], function (Deferred, request, iframe) {
    return {
        _url: appConfig.addrurl,
        _urltep:appConfig.gisocnAddData,
         /**
        * 通用查询，
        * @param db,schema,table,search_field,search_value
        * @url http://10.36.132.217:5000/query/{databasename}/{schema}/entity?table={table}&search_field={search_field}&search_value={search_value}
        */   
        tyquery: function (db,schema,table,search_field,search_value) {
            var def = new Deferred();
            request(`../gisQuery/query/${db}/${schema}/entity?table=${table}&search_field=${search_field}&search_value=${search_value}`, {
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
          /**
        * 全表查询， db,schema,table,limit,offset,order
        * @Body  {"order": [["field1", "ASC"], ["field2", "DESC"]]}
        * @param db,schema,table,limit,offset
        * @url  http://10.36.132.217:5000/query/{databasename}/{schema}/{table}/list?limit={limit}&offset={offset}
        */   
       queryTable:function(db,schema,table,limit,offset,order){
        var def = new Deferred();
        request(`../gisQuery/query/${db}/${schema}/${table}/list?limit=${limit}&offset=${offset}`, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'If-Modified-Since': '0',
                'Cache-Control': 'no-cache'
            },
            handleAs: 'json',
            method: 'Post',
            data:dojo.toJson(order)
        }).then(function (data) {
            def.resolve(data);
        }, function (err) {
            def.reject(err);
        });
        return def.promise;

       },
       queryTableCount:function(db,schema,table){
        var def = new Deferred();
        request(`../gisQuery/query/${db}/${schema}/${table}/count`, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'If-Modified-Since': '0',
                'Cache-Control': 'no-cache'
            },
            handleAs: 'json',
            method: 'GET',
        }).then(function (data) {
            def.resolve(data);
        }, function (err) {
            def.reject(err);
        });
        return def.promise;

       }
       
    }

});
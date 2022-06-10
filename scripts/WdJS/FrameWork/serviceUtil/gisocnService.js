define([
    'dojo/Deferred',
    'dojo/request',
    "dojo/request/iframe"
], function (Deferred, request, iframe) {
    return {
        _addDataUrl: appConfig.gisocnAddData,
        _loginUrl: appConfig.gisocnLogin,
        _serviceUrl: appConfig.gisocnServiceQuery, 
        _dataInfoUrl: appConfig.gisocnDataInfo,
        _getMetaDataItem:"../getMetaDataItem",
        _listForServiceId:"../listForServiceId",

        //1增加Catalog
        insertTemp: function (data) {
            var def = new Deferred();
            // http://192.168.89.44:15555/task/insertTemp
            // ../gisocnAddData/task/insertTemp
            request(this._addDataUrl + '/task/insertTemp', {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'If-Modified-Since': '0',
                    'Cache-Control': 'no-cache',
                    'Authorization': appConfig.access_token
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
        Login: function () {
            var def = new Deferred();
            var data = { "account": "admin", "password": "admin123", "tenantId": "2" };
            request(this._loginUrl + '/ocn/getAccessToken', {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'If-Modified-Since': '0',
                    'Cache-Control': 'no-cache'
                },
                handleAs: 'json',
                method: 'POST',
                data: dojo.toJson(data)
            }).then(function (data) {
                def.resolve(data);
            }, function (err) {
                def.reject(err);
            });
            return def.promise;
        },
        getUserByToken: function () {
            var def = new Deferred();
            request(this._loginUrl + '/ocn/user/getUserByToken', {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'If-Modified-Since': '0',
                    'Cache-Control': 'no-cache',
                    'Authorization': appConfig.access_token
                },
                handleAs: 'json',
                method: 'GET'
            }).then(function (data) {
                def.resolve(data);
            }, function (err) {
                def.reject(err);
            });
            return def.promise;
        },
        destroyAccessToken: function () {
            var def = new Deferred();
            request(this._loginUrl + '/ocn/destroyAccessToken', {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'If-Modified-Since': '0',
                    'Cache-Control': 'no-cache',
                    'Authorization': appConfig.access_token
                },
                handleAs: 'json',
                method: 'DELETE'
            }).then(function (data) {
                def.resolve(data);
            }, function (err) {
                def.reject(err);
            });
            return def.promise;
        },
        queryServiceByPage: function (data) {
            var def = new Deferred();

            request(this._serviceUrl + '/esb/service/page', {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'If-Modified-Since': '0',
                    'Cache-Control': 'no-cache',
                    'Authorization': appConfig.access_token
                },
                handleAs: 'json',
                method: 'POST',
                data: dojo.toJson(data)
            }).then(function (data) {
                def.resolve(data);
            }, function (err) {
                def.reject(err);
            });
            return def.promise;
        },
        // details
        getServiceById: function (id) {
            var def = new Deferred();
            request(this._serviceUrl + '/esb/service/getById?id=' + id, {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'If-Modified-Since': '0',
                    'Cache-Control': 'no-cache',
                    'Authorization': appConfig.access_token
                },
                handleAs: 'json',
                method: 'GET'
            }).then(function (data) {
                def.resolve(data);
            }, function (err) {
                def.reject(err);
            });
            return def.promise;
        },
        restDataInfo: function (dataLayerId, catalogueStandardId) {
            var def = new Deferred();

            request(this._dataInfoUrl + '/provide/restDataInfo?dataLayerId=' + dataLayerId + "&catalogueStandardId=" + catalogueStandardId, {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'If-Modified-Since': '0',
                    'Cache-Control': 'no-cache',
                    'Authorization': appConfig.access_token
                },
                handleAs: 'json',
                method: 'GET'
            }).then(function (data) {
                def.resolve(data);
            }, function (err) {
                def.reject(err);
            });
            return def.promise;
        },
        // getServiceById2: function () {
        //     var def = new Deferred();
        //     request('http://10.36.128.241:10901/esb/esbdataservice/findById?_t=1636430485332&id=452fdf5c4f1c7f59b54812b82354455c' , {
        //         headers: {
        //             'Content-Type': 'application/json',
        //             'Accept': 'application/json',
        //             'If-Modified-Since': '0',
        //             'Cache-Control': 'no-cache',
        //             'Authorization': appConfig.access_token
        //         },
        //         handleAs: 'json',
        //         method: 'GET'
        //     }).then(function (data) {
        //         def.resolve(data);
        //     }, function (err) {
        //         def.reject(err);
        //     });
        //     return def.promise;
        // },
        getDataViewDetail: function (mapUrl) {
            var def = new Deferred();
            request(this._getMetaDataItem+'?serviceId='+mapUrl , {
                headers: {
                    'If-Modified-Since': '0',
                    'Cache-Control': 'no-cache',
                    'Authorization':appConfig.access_token,
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',   
                },
                method: 'GET'
            }).then(function (data) {
                def.resolve(data);
            }, function (err) {
                def.reject(err);
            });
            return def.promise;
        },
        getDataRange: function (serviceId) {
            var def = new Deferred();
            request(this._listForServiceId+'?serviceId='+serviceId , {
                headers: {
                    
                    'If-Modified-Since': '0',
                    'Cache-Control': 'no-cache',
                    'Authorization':appConfig.access_token,
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',   
                },
                method: 'GET'
            }).then(function (data) {
                def.resolve(data);
            }, function (err) {
                def.reject(err);
            });
            return def.promise;
        },
        

    }

});
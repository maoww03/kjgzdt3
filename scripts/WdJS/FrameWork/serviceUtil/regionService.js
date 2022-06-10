define([
    'dojo/Deferred',
    'dojo/request',
    "dojo/request/iframe"
], function (Deferred, request, iframe) {
    return {
        _url3: appConfig.url,
        
     // 1-get_AdministrativeRegion
        get_region2: function () {
            var def = new Deferred();
            request('../kjgzdtService_xzq/AdministrativeRegion/selectAdministrativeRegion', {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
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
        // 1-get_AdministrativeRegion
        get_region: function () {
            var def = new Deferred();
            request(this._url3 + '/AdministrativeRegion/selectAdministrativeRegion', {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
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
        // 2.get_street
        get_street: function (belong,flag) {
            var def = new Deferred();
            if(flag){
                var urlplus=`/AdministrativeRegion/selectAdministrativeRegionTownByBelong?belong=${belong}&flag=${flag}`;
            }else{
                var urlplus=`/AdministrativeRegion/selectAdministrativeRegionTownByBelong?belong=${belong}`;
            }
            request(this._url3 + urlplus, {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
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
        // 3.get_villige
        get_villige: function (belong,flag) {
            var def = new Deferred();
            if(flag){
                var urlplus=`/AdministrativeRegion/selectAdministrativeRegionVillageByBelong?belong=${belong}&flag=${flag}`;
            }else{
                var urlplus=`/AdministrativeRegion/selectAdministrativeRegionVillageByBelong?belong=${belong}`;
            }
            request(this._url3 + urlplus, {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
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
        // 4get_pagescene
        get_RegionbyCode: function (code,flag) {
            var def = new Deferred();
            if(flag){
                var urlplus=`/AdministrativeRegion/selectAdministrativeRegionByCode?code=${code}&flag=${flag}`;
            }else{
                var urlplus=`/AdministrativeRegion/selectAdministrativeRegionByCode?code=${code}`;
            }
            request(this._url3 + urlplus, {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
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
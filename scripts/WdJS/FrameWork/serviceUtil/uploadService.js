define([
    'dojo/Deferred',
    'dojo/request'
], function (Deferred, request) {
    return {

        _url: appConfig.url,

        //area
        area_tb:function(data){
            var def = new Deferred();
            $.ajax({
                url: this._url +  '/area/compute',
                type: 'POST',
                contentType: 'application/json; charset=UTF-8',
                data:dojo.toJson(data),
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

        // check
        check_tx:function(data){
            var def = new Deferred();
            $.ajax({
                url: this._url +  '/graphical/inspect',
                type: 'POST',
                contentType: 'application/json; charset=UTF-8',
                data:dojo.toJson(data),
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


        uploadShp_tb:function(data){
            var def = new Deferred();
            $.ajax({
                url: this._url + '/graphical/readShpToWkt',
                type: 'POST',
                processData: false,
                contentType: false, 
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
        uploadTxt_tb:function(data){
            var def = new Deferred();
            $.ajax({
                url: this._url + '/upload',
                type: 'POST',
                processData: false,
                contentType: false, 
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

        uploadTxt: function (data) {
            var def = new Deferred();
            request(this._url + '/upload', {
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

      

        uploadShp: function (data) {
            var def = new Deferred();
            request(this._url + '/graphical/readShpToWkt', {
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
        uploadCAD: function (data) {
            var def = new Deferred();
            request( '../ConvertCAD', {
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

        shpTotxt: function (data,type,zbx) {
            var def = new Deferred();
            request(this._url + `/graphical/zip2txt?lx=${type}&zbx=${zbx}`, {
                handleAs: 'json',
                method: 'POST',
                data: data
            }).then(function (data) {
                def.resolve(data);
            }, function (err) {
                def.reject(err);
            });
            return def.promise;
        }
    }
});
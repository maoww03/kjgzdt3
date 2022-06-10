define([
    'dojo/Deferred',
    'dojo/request'
], function (Deferred, request) {
    return {
         _url1: appConfig.urlgdb,

         kgrk_Warehousing: function (data) {
            var def = new Deferred();
            request(this._url1+`gdbsave/saveGdb`,{
                headers: {
                    'Accept': 'application/json'
                },
                handleAs: 'json',
                method: 'POST',
                data: data
            }).then(function (data){
                def.resolve(data);
            }, function (err) {
                def.reject(err);
            });
            return def.promise;
        }
    }
})
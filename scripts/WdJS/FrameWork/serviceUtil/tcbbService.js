define([
    'dojo/Deferred',
    'dojo/request',
    "dojo/request/iframe"
], function (Deferred, request, iframe) {
    return {
        _url3: appConfig.url,

        get_tcData: function (url) {
            var def = new Deferred();
            request(url, {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'If-Modified-Since': '0',
                    'Cache-Control': 'no-cache'
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
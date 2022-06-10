define([
    'dojo/Deferred',
    'dojo/request',
    "dojo/request/iframe"
], function (Deferred, request, iframe) {
    return {
        _url: appConfig.addrurl,

        getAllCatalog: function () {
            var def = new Deferred();
            $.ajax({
                url: `./scripts/WdJS/FrameWork/serviceUtil/catalog.json`,
                type: 'Get',
                contentType: 'application/json; charset=UTF-8',
                async: false,
                dataType: "json",
                success: function (data) {
                    def.resolve(data);
                }, error: function (xhr) {
                    def.reject(err);
                }
            });
            return def.promise;
        },
        getAllLater: function () {
            var def = new Deferred();
            $.ajax({
                url: `./scripts/WdJS/FrameWork/serviceUtil/tc.json`,
                type: 'Get',
                contentType: 'application/json; charset=UTF-8',
                async: false,
                dataType: "json",
                success: function (data) {
                    def.resolve(data);
                }, error: function (xhr) {
                    def.reject(err);
                }
            });
            return def.promise;
        },


    }

});
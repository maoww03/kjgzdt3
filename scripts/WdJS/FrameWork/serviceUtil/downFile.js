define([
    'dojo/Deferred',
    'dojo/request'
], function (Deferred, request) {
    return {
         _url1: appConfig.url,
        fileDownload: function (name) {
            debugger
            window.location.href=this._url1+`/templateDownload?fileName=${name}`;
        },
    }
})
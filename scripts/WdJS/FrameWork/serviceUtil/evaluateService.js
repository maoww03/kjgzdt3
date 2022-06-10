define([
    'dojo/Deferred',
    'dojo/request',
    "dojo/request/iframe"
], function (Deferred, request, iframe) {
    return {
        _url3: appConfig.url,
        // add
        addNewEvaluate: function (data) {
            var def = new Deferred();
            request(this._url3+ `/rating/addRating`, {
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                handleAs: "json",
                method: "POST",
                data: data
            }).then(
                function (data) {
                    def.resolve(data);
                },
                function (err) {
                    def.reject(err);
                }
            );
            return def.promise;
        },
        // get
        getEvaluate: function (id) {
            var def = new Deferred();
            request(this._url3+ `/rating/selectRatingByUserId?userid=${id}`, {
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                handleAs: "json",
                method: "GET"
            }).then(
                function (data) {
                    def.resolve(data);
                },
                function (err) {
                    def.reject(err);
                }
            );
            return def.promise;
        },
        // change 
        changeEvaluate: function (data) {
            var def = new Deferred();
            request(this._url3+ `/rating/updateRating`, {
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                handleAs: "json",
                method: "POST",
                data: data
            }).then(
                function (data) {
                    def.resolve(data);
                },
                function (err) {
                    def.reject(err);
                }
            );
            return def.promise;
        },

    }

});


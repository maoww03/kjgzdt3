define([
    'dojo/Deferred',
    'dojo/request',
    "dojo/request/iframe"
], function (Deferred, request, iframe) {
    return {
        _url3: appConfig.url,
        //    add
        addFeedback: function (data) {
            var def = new Deferred();
            request(this._url3+ `/feedback/addFeedback`, {
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
        getFeedback: function (data,userid,content) {
            var def = new Deferred();
            if(content != null){
                var url=`/feedback/selectFeedbackListByUserid?content=${content}&userid=${userid}`;
            }else{
                var url=`/feedback/selectFeedbackListByUserid?userid=${userid}`;
            }
            request(this._url3+ url, {
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
        // del
        deleteFeedback: function (id) {
            var def = new Deferred();
            request(this._url3+ `/feedback/delFeedback?id=${id}`, {
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
        // picPath
        getpicPath: function (img) {
            var def = new Deferred();
            request(this._url3+ `/feedback/fileupload`, {
                handleAs: "json",
                method: "POST",
                data:img
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
        // getall
        getFeedbackReply: function (data,content,replycontent) {
            var def = new Deferred();
            var url=`/feedback/selectMarkList`;
            if(content != null){
                url+=`?content=${content}`;
                if(replycontent != null){
                    url+=`&replycontent=${replycontent}`;
                }
            }else {
                if(replycontent != null){
                    url+=`?replycontent=${replycontent}`;
                }
            }
            request(this._url3+ url, {
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
        // change
        // /feedback/updateFeedback
        getpicPath: function (img) {
            var def = new Deferred();
            request(this._url3+ `/feedback/fileupload`, {
                handleAs: "json",
                method: "POST",
                data:img
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
        // /feedback/updateFeedback
        updatereply: function (data) {
            var def = new Deferred();
            request(this._url3+ `/feedback/updateFeedback`, {
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                handleAs: "json",
                method: "POST",
                data:data
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


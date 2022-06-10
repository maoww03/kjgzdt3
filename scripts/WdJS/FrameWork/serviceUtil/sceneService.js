define([
    'dojo/Deferred',
    'dojo/request',
    "dojo/request/iframe"
], function (Deferred, request, iframe) {
    return {
        _url3: appConfig.url,
        
        //1增加SceneLayer
        add_scenelayers: function (data) {
            var def = new Deferred();
            request(this._url3 + '/scene-layer/insertSceneLayer', {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'If-Modified-Since': '0',
                    'Cache-Control': 'no-cache'
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
         //2增加Scene
        add_scene: function (data) {
            var def = new Deferred();
            request(this._url3 + '/scene/insertScene', {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'If-Modified-Since': '0',
                    'Cache-Control': 'no-cache'
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
        // 3查询用户收藏的场景
        get_scene: function (userid) {
            var def = new Deferred();
            request(this._url3 + '/scene/getSceneByUserId?userId=' + userid, {
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
        get_pagescene: function (pageNum,pageSize,userid,scenename) {
            var def = new Deferred();
            if(scenename){
                var urlplus=`/scene/getScene?scenename=${scenename}&userid=${userid}`;
            }else{
                var urlplus=`/scene/getScene?userid=${userid}`;
            }
            request(this._url3 + urlplus, {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                handleAs: 'json',
                data: dojo.toJson({ pageNum: pageNum, pageSize: pageSize }),
                method: 'POST'
            }).then(function (data) {
                def.resolve(data);
            }, function (err) {
                def.reject(err);
            });
            return def.promise;
        },
        // 5get_scenelayers
        get_scenelayers: function (sceneId) {
            var def = new Deferred();
            request(this._url3 + '/scene-layer/getSceneLayerBySceneId?sceneId=' + sceneId, {
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
        //6.delete_scene
        delete_scene: function (id) {
            var def = new Deferred();
            request(this._url3 + '/scene/deleteScene/'+id, {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'If-Modified-Since': '0',
                    'Cache-Control': 'no-cache'
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
        //7.delete_scenelayers
        delete_scenelayers: function (id) {
            var def = new Deferred();
            request(this._url3 + '/scene-layer/deleteSceneLayer/'+id, {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'If-Modified-Since': '0',
                    'Cache-Control': 'no-cache'
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

    }

});
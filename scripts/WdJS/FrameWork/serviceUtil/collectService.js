define([
    'dojo/Deferred',
    'dojo/request',
    "dojo/request/iframe"
], function (Deferred, request, iframe) {
    return {
        _url3: appConfig.url,
        /************目录收藏文件夹***************/ 
        //1增加Catalog
        add_Catalog: function (data) {
            var def = new Deferred();
            request(this._url3 + '/catalogFolder/addCatalogFolder', {
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
        // 2获取Catalog
        get_Catalog: function (userid) {
            var def = new Deferred();
            request(this._url3 + `/catalogFolder/getCatalogFolderList?userid=${userid}`, {
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
        // 3.获取次级目录
        get_subCata: function (fromid) {
            var def = new Deferred();
            request(this._url3 + `/catalogFolder/getCatalogFolderListByfromId?fromid=${fromid}`, {
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
        // 4.删除目录
        delete_Catalog: function (cataid) {
            var def = new Deferred();
            request(this._url3 + `/catalogFolder/delCatalogFolder?id=${cataid}`, {
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
        // 获取所有
        get_allCataLayers: function (userid) {
            var def = new Deferred();
            $.ajax({
                url: this._url3 + `/catalogFolder/getCatalogFolderLists?userid=${userid}`,
                type: 'GET',
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
        // 修改
        updata_catalogdata:function(data){
            var def = new Deferred();
            request(this._url3 + '/catalog/updateCatalogById', {
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

      
        /************目录收藏***************/ 
        // 5.添加收藏图层
        add_collectLayer: function (data) {
            var def = new Deferred();
            request(this._url3 + '/catalog/addCatalog', {
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
        // 6.获取所有收藏
        get_collectLayer: function (userid) {
            var def = new Deferred();
            request(this._url3 + `/catalog/selectCatalogListByUserId?userid=${userid}`, {
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
        // 7.删除
        delete_collectLayers:function(id){
            var def = new Deferred();
            request(this._url3 + `/catalog/delCatalogById/${id}`, {
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



        /***************************/ 
       

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
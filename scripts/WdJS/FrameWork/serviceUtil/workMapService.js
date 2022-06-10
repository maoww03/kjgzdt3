define([
    'dojo/Deferred',
    'dojo/request',
    "dojo/request/iframe",
    "FrameWork/DatabaseConfig",
], function (Deferred, request, iframe,DatabaseConfig) {
    return {
        _url: '../kjgzdtService2',
        _newurl:appConfig.newUrl,
        get_catalog: function (userid) {
            var def = new Deferred();
            request(this._url + '/catalog/selectCatalogListByUserId?userid=' + userid, {
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
        add_catalog: function (data) {
            var def = new Deferred();
            request(this._url + '/catalog/addCatalog', {
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
        delete_catalog: function (id) {
            var def = new Deferred();
            request(this._url + '/catalog/delCatalogById/' + id, {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'If-Modified-Since': '0',
                    'Cache-Control': 'no-cache'
                },
                handleAs: 'json',
                method: 'delete'
            }).then(function (data) {
                def.resolve(data);
            }, function (err) {
                def.reject(err);
            });

            return def.promise;
        },
        /***********************20210414**************************/
        //根据表名,统计字段获取过滤属性
        getProByTableNameAndFieldName: function (tableName, fieldName) {
            var def = new Deferred();
            request(this._url + "/count/getProByTableNameAndFieldName?tableName=" + tableName + "&fieldName=" + fieldName+"&schemaName=public", {
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                    code:regionCode,
                },
                handleAs: "json",
                method: "GET",
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

        statisticalByTableNameAndWhere: function (data,id) {
            var def = new Deferred();

            var layers=appConfig.map.getLayers().array_;
            for(var i=0;i<layers.length;i++){
                var layer=layers[i].values_;
                if( layer.id==id){
                    var database=layer.queryUrl.split("=")[4].split(":")[0];
                   var obj= DatabaseConfig.database.find(function (obj) {return obj.database == database; })
                    var code=obj.datacode;
                }
            }
            request(this._newurl + "/count/statisticalByTableNameAndWhere", {
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                    code:code,
                },
                handleAs: "json",
                method: "POST",
                data: data,
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
        //查询所有行政区
        selectAdministrativeRegion: function () {
            var def = new Deferred();
            request(this._url + "/AdministrativeRegion/selectAdministrativeRegion", {
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                handleAs: "json",
                method: "GET",
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

        //根据code查询行政区
        selectAdministrativeRegionByCode: function (code, flag) {
            var def = new Deferred();
            request(this._url + "/AdministrativeRegion/selectAdministrativeRegionByCode?code=" + code + "&flag=" + flag, {
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                handleAs: "json",
                method: "GET",
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

        //根据belong查询区县下的乡镇
        selectAdministrativeRegionTownByBelong: function (belong, flag) {
            var def = new Deferred();
            request(this._url + "/AdministrativeRegion/selectAdministrativeRegionTownByBelong?belong=" + belong + "&flag=" + flag, {
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                handleAs: "json",
                method: "GET",
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

        //根据belong查询乡镇下的村
        selectAdministrativeRegionVillageByBelong: function (belong, flag) {
            var def = new Deferred();
            request(this._url + "/AdministrativeRegion/selectAdministrativeRegionVillageByBelong?belong=" + belong + "&flag=" + flag, {
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                handleAs: "json",
                method: "GET",
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

        //根据表名,字段,类型进行冲突分析
        conflictAnalysis: function (tableName, tableName2, fieldName, fieldName2, type) {
            var def = new Deferred();
            request(
                this._newurl +
                "/count/conflictAnalysis?tableName=" +
                tableName +
                "&tableName2=" +
                tableName2 +
                "&fieldName=" +
                fieldName +
                "&fieldName2=" +
                fieldName2 +
                "&type=" +
                type,
                {
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json",
                        code:regionCode,
                    },
                    handleAs: "json",
                    method: "GET",
                }
            ).then(
                function (data) {
                    def.resolve(data);
                },
                function (err) {
                    def.reject(err);
                }
            );
            return def.promise;
        },
        //坐标信息处理-省
        uploadsheng: function (dom) {
            var def = new Deferred();
            request(this._url + "/upload", {
                handleAs: "json",
                method: "POST",
                data: dom,
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

        //坐标信息处理-部
        uploadBu: function (dom) {
            var def = new Deferred();
            request(this._url + "/upload", {
                handleAs: "json",
                method: "POST",
                data: dom,
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

        //zip文件转wkt
        readShpToWkt: function (dom) {
            var def = new Deferred();
            request(this._url + "/graphical/readShpToWkt", {
                handleAs: "json",
                method: "POST",
                data: dom,
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

        //dxf文件转wkt
        readDXFToWkt: function (dom) {
            var def = new Deferred();
            request(this._url + "/graphical/CADtoWKT", {
                handleAs: "json",
                method: "POST",
                data: dom,
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

        //XY转BL
        XY2BL: function (wkt, L02, power) {
            var def = new Deferred();
            request(this._url + "/graphical/XY2BL?L02=" + L02 + "&power=" + power, {
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                handleAs: "json",
                method: "POST",
                data:dojo.toJson(wkt),
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
        //BL转XY
        BL2XY: function (wkt, L02, power) {
            var def = new Deferred();
            request(this._url + "/graphical/BL2XY?L02=" + L02 + "&power=" + power, {
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                handleAs: "json",
                method: "POST",
                data:dojo.toJson(wkt),
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

        BL2XY2: function (wkt, L02, power) {
            var def = new Deferred();
            $.ajax({
                url: this._url + "/graphical/BL2XY?L02=" + L02 + "&power=" + power,
                type: 'POST',
                contentType: 'application/json; charset=UTF-8',
                async: false,
                dataType: "json",
                data:dojo.toJson(wkt),
                success: function (data) {
                    def.resolve(data);
                }, error: function (xhr) {
                    def.reject(err);
                }
            });
            return def.promise;
        },
     
        // //图形下载 wkt转shp文件并下载
        // uploadZip: function (data) {
        //   var def = new Deferred();
        //   request(this._url3 + "/graphical/uploadZip", {
        //     headers: {
        //       "Content-Type": "application/json",
        //       Accept: "application/json",
        //     },
        //     handleAs: "json",
        //     method: "POST",
        //     data: dojo.toJson(data),
        //   }).then(
        //     function (data) {
        //       def.resolve(data);
        //     },
        //     function (err) {
        //       def.reject(err);
        //     }
        //   );
        //   return def.promise;
        // },

        //图形下载 wkt转shp文件并下载
        uploadZip: function (wkt) {

            // fetch(this._url + "/graphical/uploadZip", {
            //     method: "POST",
            //     headers: {
            //         "Content-Type": "application/json",
            //         Accept: "application/json",
            //     },
            //     body: dojo.toJson(data),
            // })
            //     .then((res) => res.blob())
            //     .then((data) => {
            //         var blobUrl = window.URL.createObjectURL(data);
            //         callback(blobUrl);
            //     });
            var def = new Deferred();
            request(this._url + "/graphical/uploadZip", {
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                handleAs: "json",
                method: "POST",
                data:dojo.toJson(wkt),
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
        fileDownloadByPath: function (path) {
            // appConfig.url
            var url=this._url+"/graphical/FileDownloadByPath?path="+ encodeURIComponent(path);
            if (navigator.userAgent.indexOf("MSIE") > 0) {
                window.open(url);
                // window.location.href = url;
            } else {
                window.open(url);
            }
            // window.location.href=this._url+"/graphical/File.loadByPath?path="+ encodeURIComponent(path);
        },
        //图形下载 wkt转txt文件并下载
        WktToTxt: function (wkt,type,zbx) {
            var def = new Deferred();
            var data={
                wkt:wkt,
                type:type||"s",
                zbx:zbx||"cgcs2000",
            }
            request(this._url + "/graphical/WktToTxt", {
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                handleAs: "json",
                method: "POST",
                data:dojo.toJson(data),

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

        //根据用户id 获取查询图层列表
        getQuerylayersByUserid: function (userid) {
            var def = new Deferred();
            request(this._url + "/querylayer/getQuerylayersByUserid?userid=" + userid, {
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                handleAs: "json",
                method: "GET",
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

        //根据表名, 条件分页查询
        queryPageByTableNameAndWhere: function (where, tableName, page, rows, flag) {
            var def = new Deferred();
            var layers=appConfig.map.getLayers().array_;
            for(var i=0;i<layers.length;i++){
                var layer=layers[i].values_;
                if( layer.id==id){
                    var database=layer.queryUrl.split("=")[4].split(":")[0];
                   var obj= DatabaseConfig.database.find(function (obj) {return obj.database == database; })
                    var code=obj.datacode;
                }
            }

            request(this._newurl + "/count/queryPageByTableNameAndWhere?tableName=" + tableName + "&page=" + page + "&rows=" + rows + "&flag=" + flag, {
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                    code:code,
                },
                handleAs: "json",
                method: "POST",
                data: where
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

        //开发利用处,低效调查单元,低效用地再开发
        differenceAnalysis_DCDYTB_DXYDZKF: function (date) {
            var def = new Deferred();
            request(
                this._newurl +
                "/count/differenceAnalysis_DCDYTB_DXYDZKF?date=" + date,
                {
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json",
                        code:regionCode,
                    },
                    handleAs: "json",
                    method: "GET"
                }
            ).then(
                function (data) {
                    def.resolve(data);
                },
                function (err) {
                    def.reject(err);
                }
            );
            return def.promise;
        },
        //开发利用处,低效调查单元,低效用地再开发
        createdifferenceAnalysis_DCDYTB_DXYDZKF: function () {
            var def = new Deferred();
            request(
                this._newurl +
                "/count/createdifferenceAnalysis_DCDYTB_DXYDZKF",
                {
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json",
                        code:regionCode,
                    },
                    handleAs: "json",
                    method: "GET"
                }
            ).then(
                function (data) {
                    def.resolve(data);
                },
                function (err) {
                    def.reject(err);
                }
            );
            return def.promise;
        },
        selectCustomQueryByUserId: function (userid) {
            var def = new Deferred();
            request(
                this._url +
                "/custom-query/selectCustomQuery?userid=" + userid,
                {
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json"
                    },
                    handleAs: "json",
                    method: "GET"
                }
            ).then(
                function (data) {
                    def.resolve(data);
                },
                function (err) {
                    def.reject(err);
                }
            );
            return def.promise;
        },
        
        selectResultsById: function (id) {
            var def = new Deferred();
            request(
                this._newurl +
                "/custom-query/selectResults?id=" + id,
                {
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json",
                        code:regionCode,
                    },
                    handleAs: "json",
                    method: "GET"
                }
            ).then(
                function (data) {
                    def.resolve(data);
                },
                function (err) {
                    def.reject(err);
                }
            );
            return def.promise;
        },
        sbhz: function (zbx, dom) {
            var def = new Deferred();
            request(this._url + "/sbhz?zbx="+zbx, {
                handleAs: "json",
                method: "POST",
                data: dom
            }).then(
                function (data) {
                    def.resolve(data);
                },
                function (err) {
                    def.reject(err);
                }
            );
            return def.promise;
          
        }   
    }

});
define([
    'dojo/Deferred',
    'dojo/request',
    "dojo/request/iframe"
], function (Deferred, request, iframe) {
    return {
        _url3: appConfig.url,
        _newurl:appConfig.newUrl,
        downLoadExcelData: function (layerid) {
            window.location.href=this._newurl + `/tableinformation/downLoadTbExcel?tbName=${layerid}`;
        },
        // /tableinformation/getTabInformaionByTbExcel
        getTabInfor: function (data) {
            var def = new Deferred();
            request(this._newurl + '/tableinformation/getTabInformaionByTbExcel', {
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                    code:regionCode,
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

        // coordinateTemplateDownload
        downLoadExcelMB: function () {
            fetch(this._url3 + `/coordinateTemplateDownload`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                }
            }).then((res) => res.blob())
              .then((data) => {
                    var blobUrl = window.URL.createObjectURL(data);
                    var a = document.createElement("a");
                    a.style.display = "none";
                    a.download = decodeURI(name);
                    a.href = blobUrl;
                    a.click();
                    a.remove();
                });
        },
        // readCoordinateTemplateDownload
        readExcel: function (data) {
            var def = new Deferred();
            request(this._url3 + '/readCoordinateTemplateDownload', {
                
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

    }
});


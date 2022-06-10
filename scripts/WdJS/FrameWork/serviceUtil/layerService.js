define([
    'dojo/Deferred',
    'dojo/request'
], function (Deferred, request) {
    return {
        _url1: appConfig.url,
// ---ajax
        getLayersMsg:function(layerCon,data1,data2){
            var def = new Deferred();
            var url='';
            url+=layerCon.url;
            if(data1!=null && data1 != undefined){
                url+=`?${layerCon.data[0]}=${data1}`;
                if(data2 != null && data2 !=undefined){
                    url+=`&${layerCon.data[1]}=${data2}`;
                }
            }else if(data1==null){
                if(data2 != null && data2 !=undefined){
                    url+=`?${layerCon.data[1]}=${data2}`;
                }
            }
            $.ajax({
                url: this._url1 + url,
                type: 'GET',
                contentType: 'application/json; charset=UTF-8',
                async: false,
                dataType: "json",
                success: function (data) {
                    def.resolve(data);
                }, error: function (err) {
                    def.reject(err);
                }
            });
            // request(this._url1 + url,{
            //     headers: {
            //         'Content-Type': 'application/json',
            //         'Accept': 'application/json'
            //     },
            //     handleAs: 'json',
            //     method: 'GET'
            // }).then(function (data) {
            //     def.resolve(data);
            // }, function (err) {
            //     def.reject(err);
            // });
            return def.promise;
        },

        getFolder:function(slbh){
            var def = new Deferred();
            request(this._url1 + `/folderFile/getFolderFileByFileName?fileName=${slbh}`,{
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
        getFolderFile:function(slbh,FileName){
            FileName=encodeURI(FileName);
            var def = new Deferred();
            var name=`${slbh}/${FileName}`;
            request(this._url1 + `/folderFile/getFolderFileByFileName?fileName=${name}`,{
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
        // 
        AnnexDownload:function(slbh,FileName,name){
            FileName=encodeURI(FileName);
            name=encodeURI(name);
            var url=`${slbh}%2F${FileName}%2F${name}`;
            fetch(this._url1 + `/folderFile/downloadFile?fileName=${url}`, {
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
                    // callback(blobUrl);
                });
        },
        
    }
});
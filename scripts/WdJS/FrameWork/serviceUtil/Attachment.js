define([
    'dojo/Deferred',
    'dojo/request',
    "dojo/request/iframe"
], function (Deferred, request, iframe) {
    return {
        _url3: appConfig.url,
        getAttachmentList:function(pageIndex,page,typedata,type){
            var def = new Deferred();
            var url;
            debugger
            if(type=='region'){
                url =`/attachment/selectByPage?pageIndex=${pageIndex}&pageSize=${page}&xsq=${typedata}`;
            }else  if(type == "userid"){
                url =`/attachment/selectByPage?pageIndex=${pageIndex}&pageSize=${page}&userid=${typedata}`;

            }
                
            request(this._url3+url , {
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
        downAttachmen3: function (filename,xsq,userid,username) {
            // appConfig.url
            var url=this._url3+ `/attachment/download?filename=${filename}&xsq=${xsq}&userid=${userid}&username=${username}&bz=attachment`;
            if (navigator.userAgent.indexOf("MSIE") > 0) {
                window.open(url);
                // window.location.href = url;
            } else {
                window.open(url);
            }
            // window.location.href=this._url+"/graphical/File.loadByPath?path="+ encodeURIComponent(path);
        },
        pdFile:function(region,filename){
            var def = new Deferred();
            request(this._url3+ `/attachment/isExists?filename=${filename}&xsq=${region}`, {
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
        addFile:function(userid,region,file){
            var def = new Deferred();
            request(this._url3+ `/attachment/upload?userid=${userid}&xsq=${region}`, {
                headers: {  
                    'Accept': 'application/json'
                },
                handleAs: "json",
                data:file,
                method: "POST"
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
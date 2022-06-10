define(function () {
    var util = {
         /**
        * 1、setMapConfig()  对应行政区的mapconfig
        * 2、添加token
        * 
        */
        setMapConfig:function(){
            var mapconfig=null;
            require(["FrameWork/RegionTool/selectDataconfig"], function (selectDataconfig) {
                var code=regionCode;
                var obj = selectDataconfig.subMenus.find(function (obj) {
                    return obj.regionCode == code;
                });
              if(obj!=null){
                    region_Name=obj.regionName;
                    if(obj.regionLayer==null){
                        alert("请配置目录！");
                        var obj2 = selectDataconfig.subMenus[0];
                        ztreeName=obj2.ztreeName;
                        
                        appConfig.url=obj2.serverUrl;
                        try{
                            require([obj2.regionLayer], function (regionLayer) {
                            mapconfig = regionLayer;
                            });
                        }catch(ex){
                            alert("请配置目录！");
                            }
                    }else{
                        try{
                            ztreeName=obj.ztreeName;
                            appConfig.url=obj.serverUrl;
                            require([obj.regionLayer], function (regionLayer) {
                                mapconfig = regionLayer;
                            });
                        }catch(ex){
                            alert("请配置目录！");
                            var obj2 = selectDataconfig.subMenus[0];
                                    ztreeName=obj2.ztreeName;
                            appConfig.url=obj2.serverUrl;
                            try{
                                require([obj2.regionLayer], function (regionLayer) {
                                mapconfig = regionLayer;
                                });
                            }catch(ex){
                                alert("请配置目录！");
                            }
                        }
                    }
                }
            });
            //  添加token service 
            // var addtoken=mapconfig.layers;
            // var pd=mapconfig.token;
            // if(!pd || pd == undefined){
            //     mapconfig.token=true;
            //     this.UrladdToken(addtoken);
            // }
            
            return mapconfig
        },

        UrladdToken:function(layers){
            for(var i=0;i<layers.length;i++){
                if(layers[i].layerType == "GroupLayer"){
                    var data=layers[i].subLayers;
                    this.UrladdToken(data);
                }else if(layers[i].layerType != "GroupLayer"){
                    var layer=layers[i];
                    var mapurl=layer.mapUrl+"?service=wmts&request=GetCapabilities&isCheckAuth=0&token="+appConfig.access_token;
                    var queryurl=layer.queryUrl+"&isCheckAuth=0&token="+appConfig.access_token;
                    // layer
                    if(mapurl != null && mapurl != undefined){
                        layer.mapUrl=mapurl;
                    }
                    if(queryurl != null && queryurl != undefined){
                        layer.queryUrl=queryurl;
                    }
                }
            }
        },

        setOneQueryurl(queryUrl){
            var newUrl=queryUrl;
            var pd=queryUrl.indexOf("token");
            if(pd < 0){
                newUrl+="&isCheckAuth=0&token="+appConfig.access_token;
            }
            return newUrl;
        },
        setOneMapurl(Mapurl){
            var newUrl=Mapurl;
            var pd=Mapurl.indexOf("token");
            if(pd < 0){
                newUrl+="?service=wmts&request=GetCapabilities&isCheckAuth=0&token="+appConfig.access_token;
            }
            return newUrl;
        }
        
    }
    return util
});
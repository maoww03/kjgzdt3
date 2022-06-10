define(function () {
    var util = {
        getAttrConfig:function(){
            var attrconfig=null;
            require(["FrameWork/RegionTool/selectDataconfig"], function (selectDataconfig) {
                var code=regionCode;
                var obj = selectDataconfig.subMenus.find(function (obj) {
                    return obj.regionCode == code;
                });
              if(obj!=null){
                    try{
                        ztreeName=obj.ztreeName;
                        appConfig.url=obj.serverUrl;
                        require([obj.regionAttr], function (regionAttr) {
                            attrconfig = regionAttr;
                        });
                    }catch(ex){
                        alert("请配置");
                        var obj2 = selectDataconfig.subMenus[0];
                        try{
                            require([obj2.regionAttr], function (regionAttr) {
                                attrconfig = regionAttr;
                            });
                        }catch(ex){
                            alert("请配置");
                        }
                    }
                    
                }
            });
            return attrconfig
        },
        
    }
    return util
});
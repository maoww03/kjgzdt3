define(function () {
    var util = {
        MapBase:function(){
            require(["FrameWork/MapUtil/MapConfig2","FrameWork/SetMapConfig/SetMapConfig", ], function (MapConfig2,SetMapConfig) {
                for(GruopIndex in MapConfig2.layers){
                    for(layerIndex in MapConfig2.layers[GruopIndex].subLayers){
                        var url = MapConfig2.layers[GruopIndex].subLayers[layerIndex].mapUrl;
                        var should=MapConfig2.layers[GruopIndex].subLayers[layerIndex].addtoken;
                        // addtoken
                        if(should){
                            var queryurl = SetMapConfig.setOneMapurl(url);
                            MapConfig2.layers[GruopIndex].subLayers[layerIndex].mapUrl=queryurl;
                        }
                    }
                } 
            })
        }
    }
    return util;
 
});

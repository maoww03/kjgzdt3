function search(){
     //获取ztree所有节点信息
    // 影像地图4 管线 温州市自然资源专题数据?

     

    for(var i=0;i<=$(".ztree").find('a').length;i++){
        // 获取text
        var con=$(".ztree").find('a').eq(i).text();
    
        $("[title="+con+"]").parent().css("background","white");
        if($("#search").val()==con){   
           

            //1. 改变背景色
            if( $("[title="+con+"]").siblings('ul')){
                $("[title="+con+"]").parent().css("background","#E6F7FF");
                $("[title="+con+"]").siblings('ul').css("background","white");
            }else{
                $("[title="+con+"]").parent().css("background","#E6F7FF");
            }
            //1.定位打开所在目录 
            

       }
    }
}
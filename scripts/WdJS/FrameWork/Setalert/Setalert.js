define(function () {
    var util = {
         /**
        * 弹出式提示框，默认1.2秒自动消失
        * @param message 提示信息
        * @param style 提示样式，有alert-success、alert-danger、alert-warning、alert-info
        * @param time 消失时间
        */
          rompt:function (message, style, time){
            style = (style === undefined) ? 'alert-success' : style;
            time = (time === undefined) ? 1200 : time;
            $('<div>')
                .appendTo('body')
                .addClass('alert ' + style)
                .html(message)
                .show()
                .delay(time)
                .fadeOut();
        },
        success_prompt:function(message, time){
            prompt(message, 'alert-success', time);
        },
        fail_prompt: function(message, time){
            prompt(message, 'alert-danger', time);
        },
        warning_prompt:function(message, time){
            prompt(message, 'alert-warning', time);
        },
        nfo_prompt:function(message, time){
             prompt(message, 'alert-info', time);
        }
    }
    return util
});
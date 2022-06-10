define(["dojo/_base/declare", "FrameWork/Command", "dojo/_base/lang"], function (declare, Command, lang) {
    return declare("FrameWork.ServiceSearch.highlightbox", [Command], {
      frame: null,
      enabled: false,
      parentCommand: null,
      subCommands: null,
      name: null,
      _queryByValue: null,
  
      constructor: function (args) {
        lang.mixin(this, args);
        this.inherited("constructor", arguments);
      },
      onCreate: function (e) {
        this.inherited("onCreate", arguments);
      },
      onClick: function (target) {
        this.inherited("onClick", arguments);
        this.showBox(20);

        
      },
      showBox:function (time){
        debugger
        //  animation:shake-slow 0.5s infinite ease-in-out;
        time = (time === undefined) ? 10 : time;
        // $('.shake')
        //     .addClass('shake-slow')
        //     .delay(time)
        //     .show()
        //     .fadeOut(function(){
        //         $('.shake').removeClass('shake-slow')
        //         $('.shake').css("display","block")
        //     });
        // .fadeIn()
        $('.shake')
        .addClass('shake-slow')
        .delay(time)
        .hide()
        .fadeIn(function(){
            $('.shake').removeClass('shake-slow')
        });
    },
    });
  });
  
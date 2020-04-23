$(function() {
    var screenwidth, screenheight, mytop, getPosLeft, getPosTop ;
	screenwidth = $(window).width();
    screenheight = $(window).height();
    mytop = $(document).scrollTop();
    getPosRight = 0;
    getPosTop = screenheight / 4;
    $("#msg_win").css({
        "right": getPosRight,
        "top": getPosTop + mytop
    });
    onlineLeft = screenwidth / 2 - 280;
    onlineTop = screenheight / 2 - 210;
    $(".online").css({
        "left": onlineLeft,
        "top": onlineTop + mytop
    });
    $(window).resize(function() {
        screenwidth = $(window).width();
        screenheight = $(window).height();
        mytop = $(document).scrollTop();
        getPosRight = 0;
        getPosTop = screenheight / 4;
        $("#msg_win").css({
            "right": getPosRight,
            "top": getPosTop + mytop
        });
        onlineLeft = screenwidth / 2 - 280;
        onlineTop = screenheight / 2 - 210;
        $(".online").css({
            "left": onlineLeft,
            "top": onlineTop + mytop
        });
    }); //窗口大小改变
    $(window).scroll(function() {
        screenwidth = $(window).width();
        screenheight = $(window).height();
        mytop = $(document).scrollTop();
        getPosRight = 0;
        getPosTop = screenheight / 4;
        $("#msg_win").css({
            "right": getPosRight,
            "top": getPosTop + mytop
        });
        onlineLeft = screenwidth / 2 - 280;
        onlineTop = screenheight / 2 - 210;
        $(".online").css({
            "left": onlineLeft,
            "top": onlineTop + mytop
        });
    }); //窗口滚动
    $("#msg_min").click(function() {
        $("#msg_win").hide();
    }); //关闭右侧客服
    $(".close-btn").click(function() {
        $(".online").hide();
    }); //关闭中央客服
});
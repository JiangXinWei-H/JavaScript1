$(document).ready(function(){
    /*======搜索框======*/
    $(".search-text").val("搜索产品.");
    $(".search-text").focus(function() {
        $(this).val("")
    });

    $(".search-text").blur(function() {
        if ($(".search-text").val() == "") {
            $(this).val("搜索产品.");
        }
    });

    /*======背景图切换======*/
    var bodybg = 0;
    var len = $("ul.bodybg").find("li").length;
    function picTimer() {
        bodybg++;
        if (bodybg == len) {
            bodybg = 0;
        }
        $(".bodybg>li:eq(" + bodybg + ")").fadeIn(1500).siblings().fadeOut(1499);
    }; //渐入渐出
    setInterval(picTimer, 6000); //每6秒调用一次PicTimer函数
	
	/*======滚动回顶部==========*/
    $("#totop").hide();
    //当滚动条的位置处于偏移顶部100像素以上，返回按钮显示否则消失
    $(window).scroll(function() {
        if ($(window).scrollTop() > 100) {
            $("#totop").fadeIn();
        } else {
            $("#totop").fadeOut();
        }
    });

    //点击返回按钮事件
    $("#totop").click(function() {
        $('body,html').animate({
            scrollTop: 0
        },500);
    });

    /*======个人头像======*/
    var face = 0;
    var faceTimer
    var facelen = $(".ul-pic").find("li").length / 2;
    var facewidth = $(".ul-pic").find('li').width() * 2 + 46;

    $('.ul-point li').click(function() {
        face = $(".ul-point li").index($(this));
        showPics(face)
    }); //鼠标经常1、2的效果
    function faceTimer() {
        face++;
        if (face == facelen) {
            face = 0;
        }
        showPics(face);
    } //自动切换时间函数
    var facetime = setInterval(faceTimer, 5000); //执行函数	
    $(".r-main").hover(function() {
        clearInterval(facetime); //清除时间函数
    },
    function() {
        facetime = setInterval(faceTimer, 5000); //执行函数	
    });

    function showPics(face) {
        var faceLeft = -face * facewidth;
        $(".ul-pic").stop(true, false).animate({
            "left": faceLeft
        },
        1000);
        $(".ul-point li").eq(face).addClass('cur').siblings().removeClass('cur');
    } //动画函数
    var exa = $(".ul-pic img").length;
    for (r = 0; r <= exa; r++) {
        $("a#example" + r).fancybox();
    } //启动头像放大效果插件
    /*======化妆品，热销品，栏目切换====*/
    var columnindex = 0;
    var columnTimer
    var columnlen = $(".list-product").find("ul").length;
    var columnwidth = $(".list-product").find('ul').width() + 10;

    $('.p-point li').click(function() {
        columnindex = $(".p-point li").index($(this));
        columnPics(columnindex)
    }); //鼠标经常1、2的效果
    function columnTimer() {
        columnindex++;
        if (columnindex == columnlen) {
            columnindex = 0;
        }
        columnPics(columnindex);
    } //自动切换时间函数
    var columntime = setInterval(columnTimer, 5000); //执行函数	
    $(".r-main").hover(function() {
        clearInterval(columntime); //清除时间函数
    },
    function() {
        columntime = setInterval(columnTimer, 5000); //执行函数	
    });

    function columnPics(columnindex) {
        var columnleft = -columnindex * columnwidth;
        $(".list-product").stop(true, false).animate({
            "left": columnleft
        },
        1000);
        $(".p-point li").eq(columnindex).addClass('cur').siblings().removeClass('cur');
    } //动画函数
    /*======奢侈品，栏目切换====*/
    $(".p-point li").click(function() {
        var luxurylindex = $(".p-point>li").index($(this));
        var mun = $(".list-product-luxury>ul:eq(" + luxurylindex + ")>li").length;
        $(".list-product-luxury>ul:eq(" + luxurylindex + ")").show().siblings().hide().end().siblings().hide();
    });

    /*======化妆品LI溢出滚动效果控制=====*/
    var mun = $(".list-product li").length;
    $(".track").hide();
    for (i = 0; i < mun; i++) {
        $('#scrollbar' + i).hover(function() {
            $(this).find(".track").show();
        },
        function() {
            $(".track").hide();
        });
        $('#scrollbar' + i).tinyscrollbar();
    }

    /*======奢侈品，子级产品弹出=====*/
    $(".nav-product li").hover(function() {
        $(this).find(".luxury").show().parent().siblings().find(".luxury").hide();
        var smun = $(".nav-product li").length + 1;
        for (i = 1; i < smun; i++) {
            $('.scrollbar' + i).hover(function() {
                $(this).find(".track").show();
            },
            function() {
                $(".track").hide();
            });
            $('.scrollbar' + i).tinyscrollbar();
        }
    },
    function() {
        $(".luxury").hide()
    })

    /*======产品弹窗效果==========*/
    var productlen = $(".list-product li a").length;

    for (y = 0; y < productlen; y++) {
        $("#various" + y).fancybox({
            'titlePosition': 'inside',
            'transitionIn': 'none',
            'transitionOut': 'none'
        });
    }
    //产品详细弹窗效果
    var luxurylen = $(".list-product-luxury li a").length;
    for (y = 0; y < luxurylen; y++) {
        $("#various" + y).fancybox({
            'titlePosition': 'inside',
            'transitionIn': 'none',
            'transitionOut': 'none'
        });
    }
    //奢侈品产品详细弹窗效果
    /*======弹窗图片切换浏览效果==========*/
    var Dialogindex = 0;
    var DialogTimer
    var Dialoglen = $("div.v_content_list").find("li").length;
    var Dialogwidth = $("div.v_content_list").find('li').width();

    $('span.prev').click(function() {
        Dialogindex -= 1;
        if (Dialogindex == -1) {
            Dialogindex = Dialoglen - 1;
        }
        DialogPics(Dialogindex);
    }); //上一页
    $('span.next').click(function() {
        Dialogindex += 1;
        if (Dialogindex == Dialoglen) {
            Dialogindex = 0;
        }
        DialogPics(Dialogindex);
    }); //下一页
    $('span.prev,span.next').hover(function() {
        $(this).stop().animate({
            opacity: "1"
        },
        400)
    },
    function() {
        $(this).stop().animate({
            opacity: "1"
        },
        400)
    });

    function DialogTimer() {
        Dialogindex++;
        if (Dialogindex == Dialoglen) {
            Dialogindex = 0;
        }
        DialogPics(Dialogindex);
    } //自动切换时间函数
    var Dialogtime = setInterval(DialogTimer, 3000); //执行函数	
    $(".v_show").hover(function() {
        clearInterval(Dialogtime); //清除时间函数
    },
    function() {
        Dialogtime = setInterval(DialogTimer, 3000); //执行函数	
    });

    function DialogPics(Dialogindex) {
        var Dialogleft = -Dialogindex * Dialogwidth;
        $(".v_content_list").stop(true, false).animate({
            "left": Dialogleft
        },
        1000);
        $(".highlight_tip span").eq(Dialogindex).addClass('current').siblings().removeClass('current');
    } //动画函数
    /*======订单提交提示==========*/
    $("#orderbtn").click(function() {
        $("#q_Msgbox").slideDown(200);
    });

    function orderbtn() {
        $("#q_Msgbox").slideUp(200);
    } //自动切换时间函数
    var ordertime = setInterval(orderbtn, 2500); //执行函数	
   

    /*====禁止鼠标右击====*/
    $(document).bind("contextmenu",
    function(e) {
        return false;
    });

    /*====注册、登录弹窗触发事件====*/
    $("#registration,#login").center(); //调用弹窗居中插件
    $(".regedit").click(function() {
        $('#registration').fadeIn();
        $('.online,#login').hide()
    });
	$(".login").click(function() {
        $('#login').fadeIn();
        $('.online,#registration').hide()
    });
    /*=======关闭窗口======*/
    $(".rg-close").click(function() {
        $('#login,#registration').hide()
    });

});

/*====注册、登录弹窗居中插件====*/
;(function($) {
    jQuery.fn.extend({
        "center": function() {
            this.css("position", "absolute").css("z-index", "9999");
            this.css("top", ($(window).height() - this.height()) / 2 + $(window).scrollTop() + "px");
            this.css("left", ($(window).width() - this.width()) / 2 + $(window).scrollLeft() + "px");
        }
    });
})(jQuery)

/*====设置网页高度====*/
$('.bodybg img').load(function() {
		 $(".content").css("height",$(".bodybg img").height());
});
$(window).resize(function() {
	$('.bodybg img').load(function() {
		 $(".content").css("height",$(".bodybg img").height());
	})
});
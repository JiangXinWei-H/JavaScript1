$(function() {
    /*======注册验证====*/
    $("#username").blur(function() {
        if ($("#username").val() == "") {
            $("#a-tip").html("用户名不能为空").removeClass("right")
        } else {
            $("#a-tip").html("用户名可以注册").addClass("right")
        }
    }); //验证用户名
    $("#password").blur(function() {
        if ($("#password").val() == "") {
            $("#b-tip").html("密码不能为空").removeClass("right")
        } else {
            $("#b-tip").html("密码有效").addClass("right")
        }
        if ($("#password").val().length <= 6) {
            $("#b-tip").html("密码不能小于6位数").removeClass("right");
        }
    }); //验证密码
    $("#password2").blur(function() {
        if ($("#password").val() == "") {
            $("#c-tip").html("密码不能为空").removeClass("right")
        }
        if ($("#password").val() != $("#password2").val()) {
            $("#c-tip").html("两次密码不一致").removeClass("right")
        }
        if ($("#password").val() == $("#password2").val() && $("#password2").val().length >= 1) {
            $("#c-tip").html("密码一致").addClass("right")
        }
    }); //验证两次密码
    $('#email').blur(function() {
        var emailreg = /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
        var emailstring = $(this).val();
        if ($("#email").val() == "") {
            $("#d-tip").html("邮箱地址不能为空").removeClass("right")
        }
        if (emailreg.test(emailstring)) {
            $('#d-tip').html('邮箱可以使用').addClass("right")
        } else {
            $('#d-tip').html('邮箱格式无效').removeClass("right")
        }
    }) //验证邮箱地址
    $('#phone').blur(function() {
        var phonereg = /^\d{4,4}?([-]?((\d)|[ ]){0,7})$/;
        var phonestring = $(this).val();
        if ($("#phone").val() == "") {
            $("#e-tip").html("电话号码不能为空");
        }
        if (phonereg.test(phonestring)) {
            $('#e-tip').html('手机号码可以使用').addClass("right")
        } else {
            $('#e-tip').html('手机号码无效')
        }
    }) //验证用户名
    $("#loginuser").focus(function() {
        $("#f-tip").html("")
    });
    $("#loginuser").blur(function() {
        if ($("#loginuser").val() == "") {
            $("#f-tip").html("请输入用户名")
        }
    }); //验证登录名
    $("#loginpass").focus(function() {
        $("#g-tip").html("")
    }); 
	$("#loginpass").blur(function() {
        if ($("#loginpass").val() == "") {
            $("#g-tip").html("请输入密码")
        }
    }); //验证登录密码

});
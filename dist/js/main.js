"use strict";

;(function () {
	//点击跳转到详情页面
	$("#main_classfiy_flex").find("a").click(function () {
		window.location.href = "details.html";
	});
})(); //匿名函数end


;(function () {

	$("#details_left_bottom ul").find("li").mouseover(function () {
		var indexImg = $(this).index();
		$(this).addClass("bordercolor").siblings().removeClass("bordercolor");
		$("#details_left_top").find("img").eq(indexImg).addClass("classfiy_show").siblings().removeClass("classfiy_show");
	});

	//加减购买数量
	$("#plus").click(function () {
		$(this).prev().attr("value", parseInt($(this).prev().attr("value")) + 1);
		$("#nowbuy_left strong").eq(0).text($(this).prev().attr("value"));
	}); //plus end

	$("#reduce").click(function () {
		$(this).next().attr("value", parseInt($(this).next().attr("value")) - 1);
		if ($(this).next().attr("value") <= 0) {
			$(this).next().attr("value", 0);
		}
		$("#nowbuy_left strong").eq(0).text($(this).next().attr("value"));
	}); //reduce end

})();

//搜索框获取焦点
;(function () {
	$(function () {
		$("#txt").focus(function () {
			$(this).addClass("active");
			if ($(this).val() == this.defaultValue) {
				$(this).val("");
			}
		}).blur(function () {
			$(this).removeClass("active");
			if ($(this).val() == "") {
				$(this).val(this.defaultValue);
			}
		});
	});
})();

//所有商品分类
;(function () {

	$.ajax({
		type: "get",
		/*url:"http://datainfo.duapp.com/shopdata/getclass.php?callback=?",*/
		url: "data/json.json",
		async: true,
		success: function success(data) {
			//console.log(data);
			for (var i = 0; i < data.length; i++) {
				var _index = i;
				$("#detailist").append("<li class = 'goods'><a href='http://localhost:8080/classfiy.html'>" + data[i]["name"] + "</a><ul class='secondul'></ul></li>");
			}

			$("#allgods").hover(function () {
				$(this).find("#detailist").css("display", "block");
			}, function () {
				$(this).find("#detailist").css("display", "none");
			});

			$("#detailist").find(".goods").hover(function () {
				var index = $(this).index();
				$(this).find(".secondul").show().parent().addClass("hover").siblings().find(".secondul").css("display", "none").parent().removeClass("hover");
				//console.log(data[index]["city"]);
				for (var j = 0; j < data[index]["city"].length; j++) {
					$(this).find(".secondul").append("<li class='goodstwo'><a href='http://localhost:8080/classfiy.html'>" + data[index]['city'][j]['name'] + "</a><ul class='threeul'></ul></li>");

					for (var k = 0; k < data[index]['city'][j]["area"].length; k++) {
						$(this).find(".secondul").find(".threeul").append("<li><a href='http://localhost:8080/classfiy.html'>" + data[index]["city"][j]["area"][k] + "</a></li>");
					}
				}
			}, function () {
				$(this).find(".secondul").html("");
				$(this).find(".secondul").find(".threeul").html("");
			});
		}
	});
})();

//男子运动下拉菜单
;(function () {
	$(function () {
		$.get("data/mansport.json", function (data) {
			for (var i = 0; i < data.length; i++) {
				$('#mansport').append('<ul><p>' + data[i].name + '</p></ul>');
				for (var j = 0; j < data[i].title.length; j++) {
					if (i < 2) {
						$('#mansport').find('ul').eq(i).append("<li><a href='http://localhost:8080/classfiy.html'>" + data[i].title[j] + "</a></li>");
					}
					if (i >= 2) {
						//console.log(data[i].title[j]); 
						$('#mansport').find("ul").eq(i).append("<li><a href=' http://localhost:8080/classfiy.html'><img src='images/" + data[i].title[j] + "'></a></li>");
					}
				}
			}

			$("#mansportlist").mouseover(function () {
				$("#mansport").css("display", "block");
			}).mouseleave(function () {
				$("#mansport").css("display", "none");
			});
		});
	});
})();

//女子运动下拉菜单
;(function () {
	$(function () {
		$.get("data/mansport.json", function (data) {
			for (var i = 0; i < data.length; i++) {
				$('#womansport').append('<ul><p>' + data[i].name + '</p></ul>');
				for (var j = 0; j < data[i].title.length; j++) {
					if (i < 2) {
						$('#womansport').find('ul').eq(i).append("<li><a href='http://localhost:8080/classfiy.html'>" + data[i].title[j] + "</a></li>");
					}
					if (i >= 2) {
						//console.log(data[i].title[j]); 
						$('#womansport').find("ul").eq(i).append("<li><a href='http://localhost:8080/classfiy.html'><img src='images/" + data[i].title[j] + "'></a></li>");
					}
				}
			}

			$("#womansportlist").mouseover(function () {
				$("#womansport").css("display", "block");
			}).mouseleave(function () {
				$("#womansport").css("display", "none");
			});
		});
	});
})();

//往bottom里面填logo标志
;(function () {
	$(function () {

		for (var i = 0; i < 20; i++) {
			$("#flexband").append("<li><a href='https://www.s.cn/nike-brand.html'></a></li>");
		}
	});
})();

/*//调用数据
;(function(){
	$(function(){
			$.ajax({
				type:"get",
				url:"http://datainfo.duapp.com/shopdata/getGoods.php?callback=?",
				async:true,
				dataType:"jsonp",
				success:function(data){
					console.log(data);
					
					
					
				}
			});
	
	
	
	});
	
	
	
})(); //调用数据end*/

;(function () {
	$("#login_change_btn").click(function () {
		var arr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "G", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "D", "U", "V", "W", "X", "Y", "Z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
		$("#login_changpic").text("");
		for (var i = 0; i < 4; i++) {
			//在a标签里追加一个arr---->存放的是四位随机验证码
			$("#login_changpic").append(arr[Math.floor(Math.random() * 36)]);
		}
	});

	$("#login_change_btn").click();

	//调用登录接口
	$("#login_btn").click(function () {
		$.get("http://datainfo.duapp.com/shopdata/userinfo.php", { "status": "login", "userID": $("#login_username").val(), "password": $("#login_psw1").val() }, function (data) {
			data = JSON.parse(data);
			if (data == 0) {
				$("#login_tishi").text("用户名不存在");
			} else if (data == 2) {
				$("#login_tishi").text("用户名与密码不符");
			} else {
				if ($("#login_psw3").val().toUpperCase() == $("#login_changpic").text()) {
					window.location.href = "http://localhost:8080";
				} else {
					$("#login_tishi").text("验证码输入错误");
				}
			}
		}); //get --end

	});
})();

//注册信息
;(function () {
	//input框获取焦点
	$(function () {
		$("#zhuche").find("input").focus(function () {
			$(this).addClass("active1");
		}).blur(function () {
			$(this).removeClass("active1");
		});
	});

	$("#regist_change_btn").click(function () {
		var arr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "G", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "D", "U", "V", "W", "X", "Y", "Z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
		$("#changpic").text("");
		for (var i = 0; i < 4; i++) {
			//在a标签里追加一个arr---->存放的是四位随机验证码
			$("#changpic").append(arr[Math.floor(Math.random() * 36)]);
		}
	});

	$("#regist_change_btn").click();

	//开始用户注册验证登录
	$("#regist_btn").click(function () {
		//console.log($("#username").val());
		$.get("http://datainfo.duapp.com/shopdata/userinfo.php", { "status": "register", "userID": $("#username").val(), "password": $("#psw1").val() }, function (data) {
			if (data == 0 && $("#username").val() == "") {
				$("#regist_tishi").text("用户名不能为空");
			}

			if (data == 0 && $("#username").val() != "") {
				$("#regist_tishi").text("该用户名已被注册");
			}
			if (data == 1) {
				$("#regist_tishi").text("注册成功");
				window.location.href = "http://localhost:8080/login.html";
			}
		}); //get --end

	});
	//开始写正则判断
	$("#username").change(function () {
		var flag1 = true;
		var flag2 = true;
		var reg = /^1(3|5|7|8)\d{9}$/; //手机号码
		if ($("#username").val().length <= 3) {
			$("#regist_tishi").text("用户名不能小于4个字符");
			flag1 = false;
		}
		if (reg.test($(this).val()) == false && flag1) {
			$("#regist_tishi").text("请正确输入手机号码");
			flag2 = false;
		}

		if (flag1 && flag2) {
			$("#regist_tishi").text("请输入密码");
		}
	}); //用户注册结尾

	//输入密码
	$("#psw1").change(function () {
		var reg1 = /[a-zA-Z0-9_]/g;
		if (reg1.test($(this).val()) == false) {
			$("#regist_tishi").text("密码只能包含数字字母和下划线");
		}
		if (reg1.test($(this).val())) {
			$("#regist_tishi").text("密码格式正确");
		}
	}); //密码结尾

	//确认密码
	$("#psw2").change(function () {
		if ($(this).val() != $("#psw1").val()) {
			$("#regist_tishi").text("两次输入的密码不一致");
		}
	}); //确认密码结尾

	//验证码
	$("#psw3").change(function () {
		if ($(this).val().toUpperCase() != $("#changpic").text()) {
			$("#regist_tishi").text("验证码输入错误");
		}
	}); //验证码结尾
})();
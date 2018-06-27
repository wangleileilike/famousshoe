"use strict";

$(function () {
	$.getJSON("http://datainfo.duapp.com/shopdata/getCar.php?callback=?", { userID: $.cookie("username") }, function (data2) {
		console.log(data2); //获得存入购物车的值
		var cart_str = "";
		var saveID = "";
		$.each(data2, function (index, item) {
			saveID += "goodsID=" + item.goodsID + "&";
			cart_str += "<li>\n\t\t\t\t\t\t\t\t<img src=\"" + item.goodsListImg + "\"/>\n\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t\t\t<a href=\"detail.html?id=" + item.goodsID + "\">" + item.goodsName + "</a><br />\n\t\t\t\t\t\t\t\t\t\t<span>" + item.className + "</span>\n\t\t\t\t\t\t\t\t\t</p>\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<strong>1</strong>\n\t\t\t\t\t\t\t\t<strong>\uFFE5399.00</strong>\n\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t<input type=\"button\"  class=\"reduce\" value=\"-\" />\n\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"num_line_txt\" value=\"" + item.number + "\"/>\n\t\t\t\t\t\t\t\t\t<input type=\"button\"  class=\"plus\" value=\"+\" />\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<strong>" + item.price + "</strong>\n\t\t\t\t\t\t\t<strong>-\uFFE5359.00</strong>\n\t\t\t\t\t\t\t<p class=\"cart_delete\">\n\t\t\t\t\t\t\t\t<a href=\"\">\u6536\u85CF</a>\n\t\t\t\t\t\t\t\t<a href=\"\">\u5220\u9664</a>\n\t\t\t\t\t\t\t</p>\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t</li>";
		});

		$("#cart_list").html(cart_str);
		//加减购买数量
		function foo() {
			var arr = $(".num_line_txt").get(); //取到所有的框放到一个数组中
			//console.log($(".num_line_txt").get());
			var str = 0;
			for (var i = 0; i < arr.length; i++) {
				//console.log(arr[i].value)
				str += parseInt(arr[i].value);
			}
			$("#all_nums b").text(str);
		}

		$(".plus").click(function () {
			console.log("aaa");
			$(this).prev().attr("value", parseInt($(this).prev().attr("value")) + 1);

			foo();
		}); //plus end

		$(".reduce").click(function () {
			$(this).next().attr("value", parseInt($(this).next().attr("value")) - 1);
			if ($(this).next().attr("value") <= 0) {
				$(this).next().attr("value", 0);
			}
			foo();
		}); //reduce end

	} //getjson回调函数的end
	); //$.getjson的end


	//点击购物车图标跳转购物车页面
	$("#cartlogo").click(function () {
		location.href = "cart.html";
	}); //点击事件结尾

}); //最后的结尾

$(function () {
	//点击跳转到详情页面
	var classid = location.search.split("=")[1];
	$.getJSON("http://datainfo.duapp.com/shopdata/getGoods.php?callback=?", { classID: classid }, function (data) {
		//console.log(data);
		var str = "";
		var index_str = "";
		$.each(data, function (index, item) {
			str += "<a href=\"details.html?id=" + item.goodsID + "\" class=\"main_classfiy_flex_list\" target=\"_blank\">\n\t\t\t\t\t\t<dl>\n\t\t\t\t\t\t\t<dt><img src=\"" + item.goodsListImg + "\"/></dt>\n\t\t\t\t\t\t\t<dd>\n\t\t\t\t\t\t\t\t<b>" + item.price + "</b>   <strong>\uFFE5359.00</strong>\n\t\t\t\t\t\t\t\t<span>" + item.goodsName + "</span>\n\t\t\t\t\t\t\t\t<p>\u5DF2\u7ECF\u552E\u51FA<em>149</em>\u4EF6</p>\n\t\t\t\t\t\t\t</dd>\n\t\t\t\t\t\t</dl>\t\t\t\t\t\t\n\t\t\t\t\t</a>";

			index_str += "<a href=\"details.html?id=" + item.goodsID + "\" target=\"_blank\">\n\t\t\t\t\t\t<dl>\n\t\t\t\t\t\t\t<dt><img src=\"" + item.goodsListImg + "\"/></dt>\n\t\t\t\t\t\t\t<dd>\n\t\t\t\t\t\t\t\t<p>" + item.goodsName + "</p>\n\t\t\t\t\t\t\t\t<b>" + item.price + "</b>\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t</dd>\n\t\t\t\t\t\t</dl>\n\t\t\t\t\t</a>";
		});

		var indexAll = "";
		for (var k = 0; k < 4; k++) {
			indexAll += index_str;
		}

		$("#main_classfiy_flex").html(str);
		$("#shortshirt_list").html(indexAll);
	});
}); //匿名函数end


$(function () {

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

	//开始导入详情页数据
	var goodsid = location.search.split("=")[1];
	$.getJSON("http://datainfo.duapp.com/shopdata/getGoods.php?callback=?", { goodsID: goodsid }, function (data) {
		//console.log(data);
		var str1 = "<div id=\"details_left_top\">\n\t\t\t\t\t\t\t<img src=\"images/big1.jpg\"/>\n\t\t\t\t\t\t\t<img src=\"images/big2.jpg\"/>\n\t\t\t\t\t\t\t<img src=\"images/big3.jpg\"/>\n\t\t\t\t\t\t\t<img src=\"images/big4.jpg\"/>\n\t\t\t\t\t\t\t<img src=\"images/big5.jpg\"/>\n\t\t\t\t\t\t\t<img src=\"" + data[0].goodsListImg + "\"/>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div id=\"details_left_bottom\">\n\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t<li><img src=\"images/small1.jpg\"/></li>\n\t\t\t\t\t\t\t\t<li><img src=\"images/small2.jpg\"/></li>\n\t\t\t\t\t\t\t\t<li><img src=\"images/small3.jpg\"/></li>\n\t\t\t\t\t\t\t\t<li><img src=\"images/small4.jpg\"/></li>\n\t\t\t\t\t\t\t\t<li><img src=\"images/small5.jpg\"/></li>\n\t\t\t\t\t\t\t\t<li><img src=\"" + data[0].goodsListImg + "\"/></li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>";
		$("#details_left").html(str1);

		$("#details_left_bottom ul").find("li").mouseover(function () {
			var indexImg = $(this).index();
			$(this).addClass("bordercolor").siblings().removeClass("bordercolor");
			$("#details_left_top").find("img").eq(indexImg).addClass("classfiy_show").siblings().removeClass("classfiy_show");
		});

		$("#details_right_title").text(data[0].goodsName);
		$("#details_price_currt").text(data[0].price);

		//添加购物车start
		$("#jrgwc").click(function () {
			//console.log(data[0].goodsID);			
			$.ajax({
				type: "get",
				url: "http://datainfo.duapp.com/shopdata/updatecar.php",
				async: true,
				//dataType:"jsonp",
				data: { userID: $.cookie("username"), goodsID: data[0].goodsID },
				success: function success(data1) {
					//console.log(data1);
					if (data1 == 1) {
						$("#cart_tong").css("display", "block").text("添 加 成 功");
						location.href = "cart.html";
					} else {
						$("#cart_tong").css("display", "block").text("添 加 失 败");
					}
				} //jrgwc回调函数end

			}); //ajax的end
		}); //jrgwc点击事件end			
		//添加购物车end
	} //$.getJSON回调函数end

	); //getjson   ----end
}) //$(function)-----end


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
					$.cookie("username", data.userID, { expires: 7, path: "/" }); //将登录用户名存入到cookie
					window.location.href = "index.html";
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
				window.location.href = "login.html";
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
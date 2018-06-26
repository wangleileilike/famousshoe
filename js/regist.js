//注册信息
;(function(){
	//input框获取焦点
	$(function(){
		$("#zhuche").find("input").focus(function(){
			$(this).addClass("active1");
		}).blur(function(){
			$(this).removeClass("active1");
		})
	});
	
	
	
	$("#regist_change_btn").click(function(){	
		var arr = ["A","B","C","D","E","F","G","H","I","G","K","L","M","N","O","P","Q","R","S","D","U","V","W","X","Y","Z","0","1","2","3","4","5","6","7","8","9"];
		$("#changpic").text("");
		for(var i=0;i<4;i++){
			//在a标签里追加一个arr---->存放的是四位随机验证码
					$("#changpic").append(arr[Math.floor(Math.random()*36)]);
		}	
	
	});
	
	$("#regist_change_btn").click();
	
	
	//开始用户注册验证登录
	$("#regist_btn").click(function(){	
		//console.log($("#username").val());
	$.get(
		"http://datainfo.duapp.com/shopdata/userinfo.php",
		{"status":"register","userID":$("#username").val(),"password":$("#psw1").val()},
		function(data){
			if(data == 0 && $("#username").val()==""){
				$("#regist_tishi").text("用户名不能为空");
			}
			
			
			if(data == 0 && $("#username").val()!=""){
				$("#regist_tishi").text("该用户名已被注册");
			}
			if(data == 1){
				$("#regist_tishi").text("注册成功");
				window.location.href="http://localhost:8080/login.html";
			}
			


});  //get --end
	
	
});	
			//开始写正则判断
			$("#username").change(function(){
				var flag1 = true;
				var flag2 = true;
				var reg = 	/^1(3|5|7|8)\d{9}$/;//手机号码
				if($("#username").val().length <= 3){
					$("#regist_tishi").text("用户名不能小于4个字符");
					flag1 = false;
				}
				if(reg.test($(this).val())==false && flag1){
					$("#regist_tishi").text("请正确输入手机号码");
					flag2 = false;
				}
				
				
				if(flag1 && flag2){
					$("#regist_tishi").text("请输入密码");
				}			
			});  //用户注册结尾
			
			//输入密码
			$("#psw1").change(function(){
				var reg1 = /[a-zA-Z0-9_]/g;
				if(reg1.test($(this).val()) ==false){
					$("#regist_tishi").text("密码只能包含数字字母和下划线");					
				}
				if(reg1.test($(this).val())){
					$("#regist_tishi").text("密码格式正确");	
				}
							
			});   //密码结尾
			
			//确认密码
			$("#psw2").change(function(){
				if($(this).val() != $("#psw1").val()){
					$("#regist_tishi").text("两次输入的密码不一致");					
				}
											
			});   //确认密码结尾
			 
			 //验证码
			 $("#psw3").change(function(){
				if($(this).val().toUpperCase() != $("#changpic").text()){
					$("#regist_tishi").text("验证码输入错误");					
				}											
			});   //验证码结尾

  })();



;(function(){
	$("#login_change_btn").click(function(){	
		var arr = ["A","B","C","D","E","F","G","H","I","G","K","L","M","N","O","P","Q","R","S","D","U","V","W","X","Y","Z","0","1","2","3","4","5","6","7","8","9"];
		$("#login_changpic").text("");
		for(var i=0;i<4;i++){
			//在a标签里追加一个arr---->存放的是四位随机验证码
					$("#login_changpic").append(arr[Math.floor(Math.random()*36)]);
		}	
	
	});
	
	$("#login_change_btn").click();
	
	//调用登录接口
	$("#login_btn").click(function(){
		$.get(
		"http://datainfo.duapp.com/shopdata/userinfo.php",
		{"status":"login","userID":$("#login_username").val(),"password":$("#login_psw1").val()},
		function(data){
			data = JSON.parse(data);
			if(data == 0){
				$("#login_tishi").text("用户名不存在");
			}
						
			else if(data == 2){
				$("#login_tishi").text("用户名与密码不符");
			}
			else{
				if($("#login_psw3").val().toUpperCase() == $("#login_changpic").text()){
					$.cookie("username",data.userID,{expires:7,path:"/"}); //将登录用户名存入到cookie
					window.location.href="index.html";
				}else{
					$("#login_tishi").text("验证码输入错误");
				}				
			}
			


});  //get --end
	  
	  
		
	})
	
})();

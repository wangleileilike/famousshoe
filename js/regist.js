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
	
	
	
	
	
	
})();

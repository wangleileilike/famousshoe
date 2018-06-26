;(function(){
		
	$("#details_left_bottom ul").find("li").mouseover(function(){
		var indexImg = $(this).index();
		$(this).addClass("bordercolor").siblings().removeClass("bordercolor");
		$("#details_left_top").find("img").eq(indexImg).addClass("classfiy_show").siblings().removeClass("classfiy_show");		
	});
	
	//加减购买数量
	$("#plus").click(function(){
		$(this).prev().attr("value",parseInt($(this).prev().attr("value"))+1);	
		$("#nowbuy_left strong").eq(0).text($(this).prev().attr("value"));
				
	});//plus end
	
	$("#reduce").click(function(){
		$(this).next().attr("value",parseInt($(this).next().attr("value"))-1);	
		if($(this).next().attr("value")<=0){
			$(this).next().attr("value",0);
		}						
		$("#nowbuy_left strong").eq(0).text($(this).next().attr("value"));
				
	});//reduce end
	
	
	
})();

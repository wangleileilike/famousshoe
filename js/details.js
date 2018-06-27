
		
$(function(){
	
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
	
	//开始导入详情页数据
	var goodsid = location.search.split("=")[1];
	$.getJSON(
		"http://datainfo.duapp.com/shopdata/getGoods.php?callback=?",
		{goodsID:goodsid},
		function(data){
			//console.log(data);
			var str1 = `<div id="details_left_top">
							<img src="images/big1.jpg"/>
							<img src="images/big2.jpg"/>
							<img src="images/big3.jpg"/>
							<img src="images/big4.jpg"/>
							<img src="images/big5.jpg"/>
							<img src="${data[0].goodsListImg}"/>
					</div>
					<div id="details_left_bottom">
							<ul>
								<li><img src="images/small1.jpg"/></li>
								<li><img src="images/small2.jpg"/></li>
								<li><img src="images/small3.jpg"/></li>
								<li><img src="images/small4.jpg"/></li>
								<li><img src="images/small5.jpg"/></li>
								<li><img src="${data[0].goodsListImg}"/></li>
							</ul>
					</div>`;
			$("#details_left").html(str1);
				
				$("#details_left_bottom ul").find("li").mouseover(function(){
		var indexImg = $(this).index();
		$(this).addClass("bordercolor").siblings().removeClass("bordercolor");
		$("#details_left_top").find("img").eq(indexImg).addClass("classfiy_show").siblings().removeClass("classfiy_show");		
	});
								
			$("#details_right_title").text(data[0].goodsName);		
			$("#details_price_currt").text(data[0].price);
			
			
			
			//添加购物车start
			$("#jrgwc").click(function(){
				//console.log(data[0].goodsID);			
				$.ajax({
					type:"get",
					url:"http://datainfo.duapp.com/shopdata/updatecar.php",
					async:true,
					//dataType:"jsonp",
					data:{userID:$.cookie("username"),goodsID:data[0].goodsID},
					success:function(data1){
						//console.log(data1);
						if(data1==1){
							$("#cart_tong").css("display","block").text("添 加 成 功");						 		
							 		location.href = "cart.html";					 								 								 													
						}else{
							$("#cart_tong").css("display","block").text("添 加 失 败");
						}												
					}   //jrgwc回调函数end
					
				}) //ajax的end
				
				});		//jrgwc点击事件end			
				//添加购物车end
				
			} //$.getJSON回调函数end
		
	);  //getjson   ----end

})  //$(function)-----end


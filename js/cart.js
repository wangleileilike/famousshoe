$(function(){			
			 		$.getJSON(
							 	"http://datainfo.duapp.com/shopdata/getCar.php?callback=?",
							 	{userID:$.cookie("username")},
							 	function(data2){
							 		console.log(data2);//获得存入购物车的值
							 		var cart_str = "";
							 		var saveID = "";
							 		$.each(data2,function(index,item){
							 			saveID += "goodsID="+item.goodsID+"&";
							 			cart_str += `<li>
								<img src="${item.goodsListImg}"/>
								<div>
									<p>
										<a href="detail.html?id=${item.goodsID}">${item.goodsName}</a><br />
										<span>${item.className}</span>
									</p>									
								</div>
								<strong>1</strong>
								<strong>￥399.00</strong>
								<div>
									<input type="button"  class="reduce" value="-" />
									<input type="text" class="num_line_txt" value="${item.number}"/>
									<input type="button"  class="plus" value="+" />
								</div>
							<strong>${item.price}</strong>
							<strong>-￥359.00</strong>
							<p class="cart_delete">
								<a href="">收藏</a>
								<a href="">删除</a>
							</p>								
							</li>`;
							 					 			
							 		})
							 		
							 		$("#cart_list").html(cart_str);
							 		//加减购买数量
								function foo(){
									var arr = $(".num_line_txt").get(); //取到所有的框放到一个数组中
									//console.log($(".num_line_txt").get());
									var str = 0;
									for(var i=0;i<arr.length;i++){
										//console.log(arr[i].value)
										str+=parseInt(arr[i].value);
										
									}
									$("#all_nums b").text(str);
								}
								
							
								
							
								$(".plus").click(function(){
									console.log("aaa");
									$(this).prev().attr("value",parseInt($(this).prev().attr("value"))+1);	
									
									foo();
									
											
								});//plus end
								
								$(".reduce").click(function(){
									$(this).next().attr("value",parseInt($(this).next().attr("value"))-1);	
									if($(this).next().attr("value")<=0){
										$(this).next().attr("value",0);
									}						
									 foo();
											
								});//reduce end
							 		
							 								 		
							}     //getjson回调函数的end
							 	);   //$.getjson的end
							 	
							 	
							 	//点击购物车图标跳转购物车页面
							 	$("#cartlogo").click(function(){
							 		location.href = "cart.html";
							 	})//点击事件结尾
							 	
							 						 			
})   //最后的结尾

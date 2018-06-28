$(function(){		
	
					
	
			 		$.getJSON(
							 	"http://datainfo.duapp.com/shopdata/getCar.php?callback=?",
							 	{userID:$.cookie("username")},
							 	function(data2){
							 		//console.log(data2);//获得存入购物车的值
							 		var cart_str = "";
							 		var saveID = "";
							 		$.each(data2,function(index,item){
							 			saveID += "goodsID="+item.goodsID+"&";
							 			cart_str += `<li>
								<img src="${item.goodsListImg}"/>
								<div>
									<p>
										<a href="details.html?id=${item.goodsID}">${item.goodsName}</a><br />
										<span>${item.className}</span>
									</p>									
								</div>
								<strong style="color:red;">${item.goodsID}</strong>
								<strong style="color:red;" class="c_price">${item.price}</strong>
								<div>
									<input type="button"  class="reduce" value="-" />
									<input type="text" class="num_line_txt" value="${item.number}"/>
									<input type="button"  class="plus" value="+" />
								</div>
							<strong>${item.price}</strong>
							<strong>${item.price}</strong>
							<p class="cart_delete">
								<a href="">收藏</a>
								<input type="button"  class="delete_button" data-id="${item.goodsID}" value="删除"></a>
							</p>								
							</li>`;
							 					 			
							 		})
							 		
							 		$("#cart_list").html(cart_str);
							 		//加减购买数量
								function foo(){
									var arr = $(".num_line_txt").get(); //取到所有的框中的数量放到一个数组中
									var arr1 = $(".c_price").get();//取到所有的价格放到一个数组中
									//console.log($(".num_line_txt").get());
									//console.log(arr1);
									var str = 0;
									var str_price = 0;
									for(var i=0;i<arr.length;i++){
										//console.log(arr[i].value)
										str+=parseInt(arr[i].value);									
									}
									
									for(var j=0;j<arr1.length;j++){
										//console.log(arr[j].innerHTML);
										str_price += parseInt(arr1[j].innerHTML * arr[j].value)
									}
									
									
									
									
									$("#all_money b").text(str_price);
									$("#all_nums b").text(str);
									$("#cartlogo").find("span").text(str);
								}
								
							
								foo();
							
								$(".plus").click(function(){
									//console.log("aaa");
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
								
									//点击添加和删除购物车的内容
							 	$(".delete_button").click(function(){
							 	var deleteID = $(this).attr("data-id");
								//console.log(deleteID);			
								$.ajax({
									type:"get",
									url:"http://datainfo.duapp.com/shopdata/updatecar.php",
									async:true,
									//dataType:"jsonp",
									data:{userID:$.cookie("username"),goodsID:deleteID,number:0},
									success:function(data3){
										//console.log(data3);
										if(data3==1){					 		
											 		location.reload(); 								 								 													
										}											
									}   //回调函数end
									
								}) //ajax的end
								
								});		//$(".delete_button")点击事件end
								
								
								
								
								
							 		
							 								 		
							}     //getjson回调函数的end
							 	);   //$.getjson的end
							 	
							 	
							 	//点击购物车图标跳转购物车页面
							 	$("#cartlogo").click(function(){
							 		location.href = "cart.html";
							 	})//点击事件结尾
							 	
							 	
							 	
							 	
							 	
							 	
							 						 			
})   //最后的结尾

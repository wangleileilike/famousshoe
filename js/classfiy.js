$(function(){
	//点击跳转到详情页面
	var classid = location.search.split("=")[1];
	$.getJSON(
		"http://datainfo.duapp.com/shopdata/getGoods.php?callback=?",
		{classID:classid},
		function(data){
			//console.log(data);
			var str = "";
			var cbl_str = "";
			var index_str = "";
			$.each(data,function(index,item){
				str += `<a href="details.html?id=${item.goodsID}" class="main_classfiy_flex_list" target="_blank">
						<dl>
							<dt><img src="${item.goodsListImg}"/></dt>
							<dd>
								<b>${item.price}</b>   <strong>￥359.00</strong>
								<span>${item.goodsName}</span>
								<p>已经售出<em>149</em>件</p>
							</dd>
						</dl>						
					</a>`;
					
					index_str += `<a href="details.html?id=${item.goodsID}" target="_blank">
						<dl>
							<dt><img src="${item.goodsListImg}"/></dt>
							<dd>
								<p>${item.goodsName}</p>
								<b>${item.price}</b>															
							</dd>
						</dl>
					</a>`;
					
					cbl_str += `<a href="details.html?id=${item.goodsID}">
						<img src="${item.goodsListImg}" alt="" />				
				</a>`;
					
					
			})
			
			var indexAll = "";
			for(var k=0;k<4;k++){
				indexAll += index_str;
			}
			
			var cbl_str_all = "";
			for(var k=0;k<2;k++){
				cbl_str_all += cbl_str;
			}
			
			$("#main_classfiy_flex").html(str);
			$("#shortshirt_list").html(indexAll);
			$("#cbl_main_right").html(cbl_str_all);
			
		}		
	);
	
	
	
	
	
}) //匿名函数end


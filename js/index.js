//搜索框获取焦点
;(function(){
	$(function(){
		$("#txt").focus(function(){
			$(this).addClass("active");
			if($(this).val()==this.defaultValue){
				$(this).val("");
			}
		}).blur(function(){
			$(this).removeClass("active");
			if($(this).val()==""){
				$(this).val(this.defaultValue);
			}
		})
	})
})();

//所有商品分类
;(function(){

	$.ajax({
		type:"get",
		/*url:"http://datainfo.duapp.com/shopdata/getclass.php?callback=?",*/
		url:"data/json.json",
		async:true,
		success:function(data){
			//console.log(data);
			for(var i=0;i<data.length;i++){
				var _index = i;
				$("#detailist").append("<li class = 'goods'><a href='http://localhost:8080/classfiy.html'>"+data[i]["name"]+"</a><ul class='secondul'></ul></li>");
			}
			
			$("#allgods").hover(function(){
				$(this).find("#detailist").css("display","block");
			},function(){
				$(this).find("#detailist").css("display","none");
			});
			
			$("#detailist").find(".goods").hover(function(){
				var index = $(this).index();
				$(this).find(".secondul").show()
				.parent()
				.addClass("hover")
				.siblings()
				.find(".secondul").css("display","none")
				.parent()
				.removeClass("hover");
				//console.log(data[index]["city"]);
				for(var j=0;j<data[index]["city"].length;j++){
					$(this).find(".secondul").append("<li class='goodstwo'><a href='http://localhost:8080/classfiy.html'>"+data[index]['city'][j]['name']+"</a><ul class='threeul'></ul></li>");		
					
					for(var k=0;k<data[index]['city'][j]["area"].length;k++){
						$(this).find(".secondul").find(".threeul").append("<li><a href='http://localhost:8080/classfiy.html'>"+data[index]["city"][j]["area"][k]+"</a></li>");
					}
			}
							
			},function(){			
					$(this).find(".secondul").html("");	
					$(this).find(".secondul").find(".threeul").html("");
			});			
							
		}		
	});	
})();


//男子运动下拉菜单
;(function(){
	$(function(){
		$.get("data/mansport.json",function(data){
			for(var i=0;i<data.length;i++){
				$('#mansport').append('<ul><p>'+data[i].name+'</p></ul>');
				for(var j=0;j<data[i].title.length;j++){
					if(i<2){
						$('#mansport').find('ul').eq(i).append("<li><a href='http://localhost:8080/classfiy.html'>"+data[i].title[j]+"</a></li>");
					}
					if(i>=2){
						//console.log(data[i].title[j]); 
					$('#mansport').find("ul").eq(i).append("<li><a href=' http://localhost:8080/classfiy.html'><img src='images/"+data[i].title[j]+"'></a></li>");					
					}
												
				}
			
			}
			
			$("#mansportlist").mouseover(function(){
				$("#mansport").css("display","block");
			}).mouseleave(function(){
				$("#mansport").css("display","none");
			})
						
		});		
	});	
})();


//女子运动下拉菜单
;(function(){
	$(function(){
		$.get("data/mansport.json",function(data){
			for(var i=0;i<data.length;i++){
				$('#womansport').append('<ul><p>'+data[i].name+'</p></ul>');
				for(var j=0;j<data[i].title.length;j++){
					if(i<2){
						$('#womansport').find('ul').eq(i).append("<li><a href='http://localhost:8080/classfiy.html'>"+data[i].title[j]+"</a></li>");
					}
					if(i>=2){
						//console.log(data[i].title[j]); 
					$('#womansport').find("ul").eq(i).append("<li><a href='http://localhost:8080/classfiy.html'><img src='images/"+data[i].title[j]+"'></a></li>");					
					}						
						
				}
			
			}
			
			$("#womansportlist").mouseover(function(){
				$("#womansport").css("display","block");
			}).mouseleave(function(){
				$("#womansport").css("display","none");
			})
						
		});		
	});	

})();



//往bottom里面填logo标志
;(function(){
	$(function(){
		
		for(var i=0;i<20;i++){
			$("#flexband").append("<li><a href='https://www.s.cn/nike-brand.html'></a></li>");			
		}		
	})			
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






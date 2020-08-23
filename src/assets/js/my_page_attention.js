$(function(){
	$(".product_category li").click(function(){
		if($(this).hasClass("active")){
		}else{
			$(".product_category li").removeClass("active")
			$(this).addClass("active");
		}
	});

	$(".product_category2 li").click(function(){
		if($(this).hasClass("on")){
		}else{
			$(".product_category2 li").removeClass("on")
			$(this).addClass("on");
		}
	})
});
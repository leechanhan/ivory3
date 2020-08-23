$(function(){
	$(".product_category li").click(function(){
		if($(this).hasClass("active")){
		}else{
			$(".product_category li").removeClass("active")
			$(this).addClass("active");
		}
	})
});

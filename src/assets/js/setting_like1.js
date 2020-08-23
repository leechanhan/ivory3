$(function(){
	$(".like_product li").click(function(){
		var i=$(this).index();
		if($(this).hasClass("active")){
		}else{
			$(".like_product li").removeClass("active")
			$(this).addClass("active");
			$(".content").css("display","none")
			$(".content").eq(i).css("display","block")
		}
	});
});
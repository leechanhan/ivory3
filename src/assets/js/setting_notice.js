$(function(){
	$(".main_nav").click(function(){
		if($(this).hasClass("on")){
			$(this).removeClass("on");
			$(this).find(".sub_nav").slideUp("fast");
			$(this).find(".arrow img").attr("src","../img/setting/down.png");
		}else{
			$(".main_nav").removeClass("on");
			$(".sub_nav").slideUp("fast");
			$(".main_nav").find(".arrow img").attr("src","../img/setting/down.png");
			$(this).addClass("on");
			$(this).find(".sub_nav").slideDown("fast");
			$(this).find(".arrow img").attr("src","../img/setting/up.png")
		}
	});
	$(".notice_product li").click(function(){
		var i=$(this).index();
		if($(this).hasClass("active")){
		}else{
			$(".notice_product li").removeClass("active")
			$(this).addClass("active");
			$(".content").css("display","none")
			$(".content").eq(i).css("display","block")
		}
	});
});
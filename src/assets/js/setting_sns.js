$(function(){
	
	$(".btn").click(function(){
		if($("this").hasClass("active")){
			$(".btn").removeClass("active");
		}else{
			$(".btn").removeClass("active");
			$(this).addClass("active");
		}
	});
	$(".click").click(function(){
		if($(this).hasClass("active")){
			$(this).removeClass("active");
			$(this).next(".link_txt").slideUp("fast");
			$(".click").find(".small").css("opacity","1")
		}else{
			$(".click").removeClass("active");
			$(".link_txt").slideUp("fast");
			$(".click").find(".small").css("opacity","1")
			$(this).addClass("active");
			$(this).next(".link_txt").slideDown("fast");
			$(this).find(".small").css("opacity","0")
		}
	})
});

$(function(){
	/*$(".text_box").focus(function(){
		//$(".text_box").css("color","#a5a5a5");
		//$(".text_box").css("border-bottom","1px solid #a5a5a5");
		$(this).css("color","#000");
		$(this).css("border-bottom","2px solid #000");
	});
	$(".text_box").blur(function(){
		$(this).css("border-bottom","2px solid rgba(165,165,165,0.5)");
	});*/
	$(".choice li").click(function(){
		if($(this).hasClass("active")){
		}else{
			$(".choice li").removeClass("active");
			$(this).addClass("active");
		};
	});
});

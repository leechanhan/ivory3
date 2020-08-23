$(function(){
	$(".text_box").focus(function(){
		/*$(".text_box").css("color","#a5a5a5");
		$(".text_box").css("border-bottom","1px solid #a5a5a5");*/
		$(this).css("color","#000");
		$(this).css("border-bottom","2px solid #000");
	});
	$(".text_box").blur(function(){
		$(this).css("border-bottom","2px solid rgba(165,165,165,0.5)");
	});

	$(".choice li").click(function(){
		if($(this).hasClass("active")){
		}else{
			$(".choice li").removeClass("active");
			$(this).addClass("active");
		};
	});

	$('.date_wrap_inline input[type=date]').change(function(e){
		console.log('(date입력필드) 입력값 변화발생:',e.target);
		var date_value=$(this).val();
		var placeholder_target=e.target.previousElementSibling;
		var input_date_print_target=e.target.nextElementSibling;
		console.log('현재 입력된 변화값,이전 형제요소:',date_value,placeholder_target);
		//input:date요소의 데이터입력필드(노출되어있지않음 직접 못바꿈이게 처음엔 항상 비어있고, ui위젯을 통해 바꾸는 순간이후부터는 항상값이 채워지는 형태이고, 그 이후에는 못 비운다.)
		if(date_value !=''){
			console.log('date_value값이 비어있지 않고,null이 아닌 상태이다.');
			//placeholder:z-index:3이고 처음에 떠있다가 이녀석을 가려야한다.값이 채워진 이후순간부터는 비워준다.date필드값이 비어지는 경우는 사실상 최초로드 시점이후엔 없다.
			placeholder_target.style.display='none';
			input_date_print_target.innerText=date_value;
			input_date_print_target.style.opacity=1;
		}else{
			console.log('date_value값이 빈경우(변경돼었는데 값이 빈경우:)');
			placeholder_target.style.display='block';
			input_date_print_target.innerText='';
			input_date_print_target.style.opacity=0;
		}
	});

	$('.date_wrap input[type=date]').change(function(e){
		console.log('(date입력필드) 입력값 변화발생:',e.target);
		var date_value=$(this).val();
		var placeholder_target=e.target.previousElementSibling;
		var input_date_print_target=e.target.nextElementSibling;
		console.log('현재 입력된 변화값,이전 형제요소:',date_value,placeholder_target);
		//input:date요소의 데이터입력필드(노출되어있지않음 직접 못바꿈이게 처음엔 항상 비어있고, ui위젯을 통해 바꾸는 순간이후부터는 항상값이 채워지는 형태이고, 그 이후에는 못 비운다.)
		if(date_value !=''){
			console.log('date_value값이 비어있지 않고,null이 아닌 상태이다.');
			//placeholder:z-index:3이고 처음에 떠있다가 이녀석을 가려야한다.값이 채워진 이후순간부터는 비워준다.date필드값이 비어지는 경우는 사실상 최초로드 시점이후엔 없다.
			placeholder_target.style.display='none';
			input_date_print_target.innerText=date_value;
			input_date_print_target.style.opacity=1;
		}else{
			console.log('date_value값이 비어있던 경우');

			console.log('date_value값이 빈경우(변경돼었는데 값이 빈경우:)');
			placeholder_target.style.display='block';
			input_date_print_target.innerText='';
			input_date_print_target.style.opacity=0;
		}
	});
});

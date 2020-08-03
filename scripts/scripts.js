jQuery(function () {

	$('.btn_learn_more').click(function(){
		//$('.burger').toggleClass('_active');
		$(this).siblings('.item_text').slideToggle(500);
		
	});
	$('.form_btn').click(function(){
		
		var cur_value = $(this).parent().parent().children('.item_title').text();
		$('.input_0>input').val(cur_value);
	});
	function tabs () {

		$(".tab_item").not(":first").hide();
		$(".__tab").click(function() {
			$(".__tab").removeClass("_active").eq($(this).index()).addClass("_active");
			$(".tab_item").hide().eq($(this).index()).fadeIn()
		}).eq(0).addClass("_active");
	}
	tabs();

});
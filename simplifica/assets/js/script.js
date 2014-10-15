$(document).ready(function(){
		var window_height = $(window).height();
		var window_width = $(window).width();
		$('.window_span').css('height', window_height+'px');//.css('width', window_width+'px');
		$('.intro_wrapper .container').css('height', window_height+'px');
		$(window).resize(function(){
			window_height = $(window).height();
			//window_width = $(window).width();
			$('.window_span').css('height', window_height+'px');//.css('width', window_width_new+'px');
			$('.intro_wrapper .container').css('height', window_height+'px');
			});
		/*if($('.stu_form').is(':visible')){
			$('.college_form').hide();
			}
		if($('.college_form').is(':visible')){
			$('.stu_form').hide();
			}*/
	})
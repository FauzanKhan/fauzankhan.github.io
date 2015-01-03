$(document).ready(function(){
	
		var window_height = $(window).height();
		var window_width = $(window).width();
		
		function goto_link(class_name, e){
			e.preventDefault();
			if(!($(class_name).hasClass('curr_active'))){
				$('.curr_active').css('display', 'none');
				$('.curr_active').removeClass('curr_active');
				$(class_name).css('display', 'block');
				$(class_name).addClass('zoomIn');
				$(class_name).addClass('curr_active');
			}
		}
		
		function doc_width_adjust(){
			if(window_height > 600){
				$('.window_span').css('height', window_height+'px');//.css('width', window_width+'px');
				$('.intro_wrapper .container').css('height', window_height+'px');
			}
			else{
				$('.window_span').css('height', 900+'px');//.css('width', window_width+'px');
				$('.intro_wrapper .container').css('height', 900+'px');
			}
		}
		
		doc_width_adjust();
		
		$(window).resize(function(){
			window_height = $(window).height();
			//window_width = $(window).width();
			doc_width_adjust()
		});
		
		$('a.login_link').click(function(e){
			goto_link('.login_form_container', e);
		});
			
		$('a.student_signup_link').click(function(e){
			goto_link('.student_signup', e);
		});
			
		$('a.college_signup_link').click(function(e){
			goto_link('.college_signup', e);
		});
		
		$('a.intro_link').click(function(e){
			goto_link('.introduction', e);
		});
		
		$('a.forgot_password_link').click(function(e){
			goto_link('.forgot_password_form_container', e);
		});
	})
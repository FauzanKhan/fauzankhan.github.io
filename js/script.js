$(document).ready(function(){
	$(window).stellar();
	var window_height = $(window).height();
	var window_width =  $(window).width();
	if(window_height >= 540){
		$('.slide').not('#skills').css('min-height', window_height+'px');
	}
	else{
		$('.slide').not('#skills').css('min-height', '900px');
		$('#home').css('min-height', '700px');
	}
	if(window_width <= 520){
		$('#portfolio').css('min-height', '1500px');
	}
	else if(window_width < 1030){
		$('#portfolio').css('min-height', '900px');
	}
	$(window).resize(function(){
		window_height = $(window).height();
		window_width =  $(window).width();
		if(window_height >= 540)
			$('.slide').not('#skills').css('min-height', window_height+'px');
		else{
			$('.slide').css('min-height', '900px');
			$('#home').css('min-height', '700px');
		}
		if(window_width <= 520)
			$('#portfolio').css('min-height', '1500px');
		else if(window_width < 1030)
			$('#portfolio').css('min-height', '900px');
	});
	
	var scrolled = $(document).scrollTop();
	$(document).scroll(function(){
		scrolled = $(document).scrollTop();
		if(scrolled > 300){
			$('nav').addClass('hover_nav');
			$('#primary_nav').css('background', 'rgba(29, 54, 93, .4)');
			$('.back_to_top').fadeIn();
		}
		else{
			$('nav').removeClass('hover_nav');
			$('#primary_nav').css('background', 'rgba(29, 54, 93, 0)');
			$('.back_to_top').fadeOut();
		}
	});

	$(function() {
	  $('a[href*=#]:not([href=#])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
		  var target = $(this.hash);
		  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
		  if (target.length) {
			$('html,body').animate({
			  scrollTop: target.offset().top
			}, 900);
			return false;
		  }
		}
	  });
	});
	
		
});

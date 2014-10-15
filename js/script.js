$(document).ready(function(){
	$(window).stellar();
	var window_height = $(window).height();
	var window_width =  $(window).width();
	if(window_height >= 540)
		$('.slide').css('height', window_height+'px');
	else{
		$('.slide').css('height', '900px');
		$('#slide1').css('height', '700px');
	}
	if(window_width <= 520)
			$('#slide2').css('height', '1500px');
	else if(window_width < 1030)
			$('#slide2').css('height', '900px');	
	$(window).resize(function(){
		window_height = $(window).height();
		window_width =  $(window).width();
		if(window_height >= 540)
			$('.slide').css('height', window_height+'px');
		else{
			$('.slide').css('height', '900px');
			$('#slide1').css('height', '700px');
		}
		if(window_width <= 520)
			$('#slide2').css('height', '1500px');
		else if(window_width < 1030)
			$('#slide2').css('height', '900px');
	});
	
	var scrolled = $(document).scrollTop();
	$(document).scroll(function(){
		scrolled = $(document).scrollTop();
		if(scrolled > 300){
			$('nav').addClass('hover_nav');
			$('#primary_nav').css('background', 'rgba(240,78,60,.4)');
			$('.back_to_top').fadeIn();
			}
		else{
			$('nav').removeClass('hover_nav');
			$('#primary_nav').css('background', 'rgba(240,78,60,0)');
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
			}, 1100);
			return false;
		  }
		}
	  });
	});
	
		
});
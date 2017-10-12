$(function() {
    $('body>a').css({'display':'none'});
	$('body').fadeIn();
  	$('body').removeClass('no-js');
	
	var timer;
	
	$('#demo').hover(function() {
		$('#cursor').animate({marginTop:'270px', marginLeft:'395px'}, {queue: false, duration: 1000});
		$('#arrow').animate({opacity:'0'}, {queue: false, duration: 75});
	
		timer = setTimeout(function(){
			$('#icon-small').css({opacity:'1'});
			$('#dropdown').animate({opacity:'1', marginTop:'285px'}, {queue: false, duration: 150});
		}, 1250);
	
	}, function() {
		clearTimeout(timer);
		$('#cursor').animate({marginTop:'375px', marginLeft:'150px'}, {queue: false, duration: 1000});
		$('#icon-small').css({opacity:'0'});
		$('#arrow').animate({opacity:'1'}, {queue: false, duration: 500});
		$('#dropdown').animate({opacity:'0', marginTop:'280px'}, {queue: false, duration: 100});
		
	});
});

$(window).load(function() {
	$('#appended_twitter_scripts').append('<script src="http://twitter.com/javascripts/blogger.js"></script><script src="http://twitter.com/statuses/user_timeline/pickrapp.json?callback=twitterCallback2&count=2"></script>');

	$('.icon').animate({marginTop:'0px'}, 1000);
});
$(document).ready(function(){
	$('#nav-icon3').click(function(){
		$(this).toggleClass('open');
    $('#menu').toggleClass('visible');
	});

  $('.menu-link').click(function(){
    $('#nav-icon3').toggleClass('open');
    $('#menu').toggleClass('visible');
  });

});

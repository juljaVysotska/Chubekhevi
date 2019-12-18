$('.burger-menu').click(()=>{
	$('.burger-menu_modal').toggleClass('show');

	$('body').css('overflow', 'hidden');
});

$('.burger-menu_modal .close').click(()=>{
	$('.burger-menu_modal').removeClass('show');
	$('body').css('overflow', '');

});


$(window).scroll(()=>{
	$('nav').removeClass('white');
	$('nav').addClass('transparent');

	if($(window).scrollTop()){
		$('nav').addClass('white');
		$('nav').removeClass('transparent');
	}
});
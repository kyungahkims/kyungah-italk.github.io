/* 배너 슬라이드 */
$('.swiper_wrap').each(function (t) {
	$(this).find('.swiper, .swiper-pagination').addClass('type' + t);
	const swiper = new Swiper('.swiper.type' + t, {
		effect: 'slide',
		autoplay: {
			delay: 3000,
		},
		loop: true,
		spaceBetween: 10,
		pagination: {
			el: '.swiper-pagination.type' + t,
			type: "fraction",
		},
	});
});

/* nav */
$('nav a').click(function(){
$('nav a').removeClass('active');
$(this).addClass('active');
});
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

/* 알림방 삭제 */
$('.setting_btn').click(function () {
	$('.modal_wrap1').css('display', 'flex');
});

$('.pop .remove_btn').click(function () {
	$('.modal_wrap1').css('display', 'none');
	$('.modal_wrap2').css('display', 'flex');
});

$('.modal_wrap, .pop .cancle_btn, .pop .close_btn').click(function () {
	$('.modal_wrap').css('display', 'none');
});

$('.pop').click(function (e) {
	e.stopPropagation();
});

/* 모바일 resize */
$(document).ready(function () {
	let vh = window.innerHeight * 0.01;
	document.documentElement.style.setProperty('--vh', `${vh}px`);

	$(window).on('resize', function () {
		let vh = window.innerHeight * 0.01;
		document.documentElement.style.setProperty('--vh', `${vh}px`);
	});
});
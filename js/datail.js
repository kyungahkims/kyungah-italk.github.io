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

/* 배너 슬라이드 */
$('.swiper_wrap').each(function (t) {
	$(this).find('.swiper, .swiper-pagination').addClass('type' + t);

	const swiper = new Swiper('.swiper.type' + t, {
		slidesPerView: 'auto',
		effect: 'slide',
		loop: false,
		spaceBetween: 10,

		on: {
			slideChange: function () {
				let totalSlides = this.slides.length;
				let currentIndex = this.activeIndex;

				if (currentIndex === totalSlides - 2) {
					$('.swiper_wrap').eq(t).find('.slide_link').css('display', 'none');
				} else {
					$('.swiper_wrap').eq(t).find('.slide_link').css('display', 'block');

				}
			}
		}
	});
});

/* 슬라이드 높이 동일하게 */
function setEqualSlideHeight() {
	let maxHeight = 0;

	$(".swiper-slide").css("height", "auto");

	$(".swiper-slide").each(function () {
		let height = $(this).outerHeight();
		if (height > maxHeight) {
			maxHeight = height;
		}
	});

	$(".swiper-slide").height(maxHeight);
}

$(window).on("load", setEqualSlideHeight);
$(window).resize(setEqualSlideHeight).trigger('resize');
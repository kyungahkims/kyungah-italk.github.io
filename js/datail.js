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
					$('.swiper_wrap').eq(t).find('.slide_btn').css('display', 'none');
				} else {
					$('.swiper_wrap').eq(t).find('.slide_btn').css('display', 'block');

				}
			}
		}
	});
});

/* 슬라이드 높이 동일하게 */
window.addEventListener("load", function () {
	let slides = document.querySelectorAll(".swiper-slide");
	let maxHeight = 0;

	slides.forEach(slide => {
		let height = slide.offsetHeight;
		if (height > maxHeight) {
			maxHeight = height;
		}
	});

	slides.forEach(slide => {
		slide.style.height = maxHeight + "px";
	});
});
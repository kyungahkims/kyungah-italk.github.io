/* 모바일 resize */
$(document).ready(function () {
	let vh = window.innerHeight * 0.01;
	document.documentElement.style.setProperty('--vh', `${vh}px`);

	$(window).on('resize', function () {
		let vh = window.innerHeight * 0.01;
		document.documentElement.style.setProperty('--vh', `${vh}px`);
	});
});


/* pop_up */
const todayKey = 'hidePopupToday';
const todayDate = new Date().toISOString().slice(0, 10);

if (localStorage.getItem(todayKey) === todayDate) {
	$('.pop_up').hide();
}

$('.pop_up, .pop_up .close_btn').click(function () {

	if ($('#checkbox').is(':checked')) {
		localStorage.setItem(todayKey, todayDate);
	}
	$('.pop_up').hide();
});

$('.pop_up, .pop_up .pop_content').click(function (e) {
	e.stopPropagation();
});

$('.pop_content').on('click', '.img', function () {
	if ($(this).hasClass('active')) {
		window.location.href = 'https://www.naver.com';
		return;
	}
	const newSrc = $(this).attr('src').replace('popup-01.png', 'popup-01-check.png');
	$(this).attr('src', newSrc);
	$(this).attr('alt', '광고성 메시지 수신 동의하기 체크 완료 및 알림 ON 참여하기 이동');
	$(this).addClass('active');
});
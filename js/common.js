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

	if ($('#checkbox2').is(':checked')) {
		localStorage.setItem(todayKey, todayDate);
	}
	$('.pop_up').hide();
});


$('.pop_wrap').click(function (e) {
	e.stopPropagation();
});

$('.pop_up .btn_wrap button').click(function () {
	if ($('#checkbox').is(':checked')) {
		window.location.href = 'https://www.naver.com';
	} else {
		Swal.fire({
			title: "광고성 메시지 수신 <br> 동의를 해주세요.",
			background: "#fff",
			confirmButtonText: "확인",
		});
	}
});
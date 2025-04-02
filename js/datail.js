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
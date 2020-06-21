//способ первый

$(document).ready(function () {
	$('.dictionary__element').click(function (event) {
		$(this).toggleClass('rotated');
	});
});


//способ второй

// $('.dictionary__element').click(function () {
// 	$(this).toggleClass('rotated');
// });

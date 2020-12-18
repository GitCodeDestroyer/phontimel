$('.check .check-button').click(function() {
	if (input.value.match(/\s?<p>\s?.+?\s?.+?br>\s?\S\s?.+?p>/g)) {
		$(this).css({opacity: 0, 'display':'none'});
		$('.check a').css({'display': 'inline-block',opacity: 1});
	}
	else {
		$('.error').css({'display':'inline-block'});
	}
});

$('.check .reload-code').click(function() {
	input.value = '';
	output.innerHTML = input.value;
});
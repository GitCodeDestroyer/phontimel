$('.check .check-button').click(function() {
	if (input.value.match(/<ul>\s?.+?\s<li>\s?.+?\s<ol type="I">\s?.+?\s<li>\s?.+?\S\s?.+?li>\s?.+?\s<li>\s?.+?\S\s?.+?li>\s?.+?\s<li>\s?.+?\S\s?.+?li>\s?.+?ol>\s?.+?li>\s?.+?\s<li>\s?.+?\s<ol type="I">\s?.+?\s<li>\s?.+?\S\s?.+?li>\s?.+?\s<li>\s?.+?\S\s?.+?li>\s?.+?\s<li>\s?.+?\S\s?.+?li>\s?.+?ol>\s?.+?li>\s?.+?ul>\s?/g)) {
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
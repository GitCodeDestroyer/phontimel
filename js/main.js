var input = document.getElementsByClassName('input')[0],
	wer = document.getElementsByClassName('return')[0],
	output = document.getElementsByClassName('output')[0];
output.innerHTML = input.value;

input.addEventListener('keyup', function() {
	output.innerHTML = input.value;
	$('.error').css({'display':'none'});
}, false);

wer.addEventListener('click', function() {
	$('.output').css({left: '80%',height: '40%','overflow': 'hidden','cursor':'pointer',background:'#eee'});
	$('.input').animate({opacity:'1'}, 1000);
	$('.return').css({'display':'none'});
}, false);

output.addEventListener('click', function() {
	$('.input').animate({'opacity':'0'}, 300);
	$('.output').css({left: '0%',height: '100%','overflow': 'scroll','cursor':'default',background:'#fff'});
	$('.return').css({'display':'block'});
}, false);

$('.dark').click(function() {
	$('.input').css({'background': '#1F1F1C','color': '#f92672'});
	$('body').css({'background': '#1F1F1C'});
});

$('.white').click(function() {
	$('.input').css({'background': '#ccc','color': '#444'});
	$('body').css({'background': '#ccc'});
});

$('.black').click(function() {
	$('.input').css({'background': '#111','color': '#eee'});
	$('body').css({'background': '#111'});
});

$('.main a.fa').click(function() {
	$('.side-menu').animate({'left': '80%'}, 300);
	$('.close').css({'left': '0%'}, 300);
});

$('.close').click(function() {
	$('.side-menu').animate({'left': '100%'}, 300);
	$('.close').css({'left': '100%'}, 300);
});
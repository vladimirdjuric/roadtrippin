
$(document).ready(function(){



let text = ['DISCOVER', 'THE NEW', 'WORLD'];
let midText = $('#midText');
for(let i in text){
	midText.append(`<div class="midContent"><h1>${text[i]}</h1></div>`)
}

let midContent = $('.midContent');



function marginAndFade(){

	let count = 0;
	let midTextInterval = setInterval(() => {

	  	$(midContent).eq(count).animate({opacity: 1, left: 0}, 800);
	  	count++
	  	if(count === 0) clearInterval(midTextInterval)
	}, 600);
}



function functionFade(){

	$('.midContent').css({
		display: 'none',
		opacity: 1,
		left: 0
	})

	let count = 0;
let midTextInterval = setInterval(() => {
  	$(midContent).eq(count).fadeIn(1000)
  	count++
  	if(count === 0) clearInterval(midTextInterval)
}, 600)
}


$('#fade').on('click', functionFade);
$('#margin').on('click', marginAndFade);










let midLogo = $('#midLogo');
let navigation = $('nav');
let windowHeight = $(window).height();
let navHeight = navigation.height();
let dimensionForStick = windowHeight - navHeight;
let navLi = $('nav ul li');



$(window).scroll(() => {
	if($(this).scrollTop() > dimensionForStick){
		navigation.addClass('addNav');
		midLogo.fadeIn();
		navigation.css('height', navHeight)
	}else{
		navigation.removeClass('addNav');
		midLogo.css('display', 'none');
		navLi.css('height', navHeight);

	}
})

console.log(navLi.height());






})

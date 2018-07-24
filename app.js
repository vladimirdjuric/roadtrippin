$(document).ready(function(){

// display social media dropdown

let navigation = $('nav');
let dropdown = $('#dropdown');
let navHeight = navigation.height();
let logoContent = $('#logoContent');

dropdown.css('top', navHeight + navHeight * 0.2);


let active = true;
$('#follow').on('click', function(e){
	active = !active;
	if(active === false) {
		dropdown.css('display', 'block');
	}else {
		dropdown.css('display', 'none');

	}
});



// change nav size on scroll

$(window).on('scroll', function(){
	if($(window).scrollTop() > 60){
		$('nav ul').addClass('navUl');
		dropdown.addClass('addDropdown');
		dropdown.css('top', navHeight*0.8);
		$('.dropdownContent').addClass('addDropdownContent');
		//logo.animate({width: '50%'}, 30);
		logoContent.fadeIn(300);
		navigation.addClass('addNav');
	}else{
		$('nav ul').removeClass('navUl');
		dropdown.removeClass('addDropdown');
		dropdown.css('top', navHeight + navHeight * 0.2);
		$('.dropdownContent').removeClass('addDropdownContent');
		//logo.animate({width: '0px'}, 30);
		logoContent.fadeOut(300);
		navigation.removeClass('addNav');
	}
})





})

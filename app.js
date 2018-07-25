$(document).ready(function(){

//set position of dropdown
let navHeight = parseInt($('nav').css('height'));
let dropdown = $('#dropdown');
dropdown.css('top', navHeight/1.5);

$('#follow').hover(() => {
	dropdown.css('display', 'block');
}, () => {
	dropdown.css('display', 'none');
}, 1000)

//mid text fade in
$('#midText').fadeIn(4000)








})

$(document).ready(function(){

// display social media dropdown
let active = true;
$('#follow').on('click', function(){
	active = !active;
	if(active === false) {
		$('#dropdown').css('display', 'block');
	}else {
		$('#dropdown').css('display', 'none');
	}
});




})

$(document).ready(function(){




animeEdge()



function animeEdge(){

		$('#toRight').animate({width: '50%'}, 600);
		$('#toLeft').animate({width: '50%', left: 0}, 600, function(){
		$('#midCont2').addClass('midCont2').animate({bottom: '110px'}, 300)
		$('#midCont').animate({top: '110px'}, 300, function(){
			appendText('Road', 'Trippin\'', 'Channel');
		});
	});

}



function appendText(text1, text2, text3){

	let someText = $('.someText');
	for(i in arguments){
		someText[i].append(arguments[i])
	}

	someText.css({'display':'block', 'opacity':'0'});

	$('#first').animate({opacity: 1, marginLeft: '10%'}, 700);
	setTimeout(() => {
	  	$('#second').animate({opacity: 1, marginRight: '10%'}, 500);
	}, 700);
	setTimeout(() => {
	  	$('#last').animate({opacity: 1},1200);
	}, 1000)

}









})
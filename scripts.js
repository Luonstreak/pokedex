
function poke(attr) {	
	$.get('https://pokeapi.co/api/v2/pokemon/' + attr + '/', function(data){
		var myData = data;
		function isIt (val){
			if(val){return val.type.name;} else{return " ";}; 
		}
		$('.pokedex').html('<h3>' + data.name + '</h3>' + 
	    '<img src="http://pokeapi.co/media/img/' + attr + '.png">' + 
	    '<h5>Types</h5>' +
	    '<ul>' +
	      '<li>' + data.types[0].type.name + '</li>' +
	      '<li>' + isIt(data.types[1]) + '</li>' + 
	    '</ul>' +
	    '<h5>Height</h5>' +
	    '<p>' + data.height + '</p>' +
	    '<h5>Weight</h5>' +
	    '<p>' + data.weight + '</p>'
	  );

	}, 'json');
}

$(document).ready(function(){

	for(var i = 1; i < 152; i++){
		$('.container').append('<img src="' + 'http://pokeapi.co/media/img/' + i + '.png/" alt="' + "pokemon" + i + '" id="' + i + '">');
	}

	$(document).on('click', 'img', function(){
		poke($(this).attr('id'));
	});

});

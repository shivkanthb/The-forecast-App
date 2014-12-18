

var forecast = require('./forecast.js');

var http = require('http');


function printError(error){
	console.log(error.message);
}

var zipcode = "85719";

function get(zipcode){

	var req = http.get("http://api.zippopotam.us/us/"+ zipcode +"", function(response){

		if(response.statusCode == 200){
			var body = "";
			response.on("data", function(chunk){
				body +=chunk;

			});
			response.on("end", function(){
				try{
					var geo = JSON.parse(body);
					forecast.get(geo.places[0].latitude, geo.places[0].longitude);
				}catch(e){
					printError(e);
				}
			});




		}


	});	


 } 

 module.exports.get = get;
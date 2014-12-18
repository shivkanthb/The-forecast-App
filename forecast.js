

var https = require('https');

// var API_KEY = 679dabfb8a1db5a2d53599f4e10db597;

function printForecast(summary,temperature){
	console.log("The forecast summary : " + summary + "\nTemperature : "+ temperature + "");
}


function printError(error){
	console.log(error.message);
}

// var latitude = 37.8267;
// var longitude = -122.423;

function get(latitude, longitude){

	var req = https.get("https://api.forecast.io/forecast/679dabfb8a1db5a2d53599f4e10db597/"+ latitude +","+ longitude +"", function(res){

		if(res.statusCode == 200){
			var body = "";
			res.on("data", function(chunk){
				body +=chunk;

			});
			res.on("end", function(){
				try{
					var fc = JSON.parse(body);
					printForecast(fc.currently.summary, fc.currently.temperature);
				}catch(e){
					printError(e);
				}
			});




		}


	});


}

module.exports.get = get;



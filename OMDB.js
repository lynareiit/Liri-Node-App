// CHALLENGES
var request = require("request");
var nodeArgs = process.argv;
var movieName = "";

	if (nodeArgs[2] === "movie-this") {
		if (nodeArgs[3] === undefined) {
			movieName = "Matrix";
		}else{
			for (var i = 2; i < nodeArgs.length; i++) {
				if (i > 2 && i < nodeArgs.length) {
					movieName = movieName + "+" + nodeArgs[i];
				}else{
					movieName += nodeArgs[i];
				}
			}
		}
// 

		movieName = movieName.replace("movie-this+", "");

			var queryURL = "http://www.ombdpapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";

		request(queryURL, function(err, response, body) {
			if (!error && response.statusCode === 200) {
				console.log("The movie's title is: " + JSON.parse(body).Title);
				console.log("The movie came out in the year: " + JSON.parse(body).Year);
				console.log("The movie's rating is: " + JSON.parse(body).imbdRating);
				console.log("The movie was produced in: " + JSON.parse(body).Country);
				console.log("The movie language is: " + JSON.parse(body).Language);
				console.log("Movie Plot: " + JSON.parse(body).Plot);
				console.log("Movie Actors: " + JSON.parse(body).Actors);
			}
		});
	};
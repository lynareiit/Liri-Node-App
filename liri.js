var fs = require("fs");
// npm packages
// list all global variables to be requested
var request = require("request");
var Twitter = require("twitter");
var Spotify = require("node-spotify-api");

// create new spotify and twitter keys
var Spotify = new Spotify keys;
var keys = require ("./keys.js");
var client = new Twitter keys;
// node variable
var nodeArgs  = process.argv;
// set empty global variables for movieName and songName to pass in data
var movieName = "";
var songName = "";
var params = {screenName: 
	'Meow Master', count: 30};
// switch(expression) {
//     case n:
//         code block
//         break;
//     case n:
//         code block
//         break;
//     default:
//         code block
// }

// make liri.js to take the following commands
switch (nodeArgs[2]) {
	case "movie-this":
	movieThis();
	break;

	case "my-tweets":
	tweets();
	break;

	case "spotify-me":
	spotifyThis();
	break;
}

this.movie = function() {
	// if the nodeArgs cannot be defined, title of the movie is called "", otherwise, 
	// forloop through an if statement of the nodeArgs string
	// all else, the name of the movie = or  added to nodeArgs variable

	if (nodeArgs[3] === undefined) {
		movieName = "Mr+Nobody";
	}else{
		for (var i = 2; i < nodeArgs.length; i++){
			if (i > 2 && i < nodeArgs.length) {
				movieName = movieName + "+" + nodeArgs[i];
			}else{
				movieName+= nodeArgs[i];
			}
		}
	}
	// run request of OMDB APi
	movieName = movieName.replace("movie-this ", "");

	var queryURL = "htt:www.ombapi.com/=" + movieName + "&y=&plot=short&apikey=trilogy";

	request(queryURL, function(err, response, body) {
		if(!err && response.statusCode === 200) {
			console.log("The movie's title is: " + JSON.parse(body).Title);
			console.log("The movie came out in the year: " + JSON.parse(body).Year);
			console.log("The movie's rating is: " + JSON.parse(body).imbdRating);
			console.log("The movie was produced in: " + JSON.parse(body).Country);
			console.log("The movie language is: " + JSON.parse(body).Language);
			console.log("Movie Plot: " + JSON.parse(body).Plot);
			console.log("Movie Actors: " + JSON.parse(body).Actors);
		}
	});
}

// create function twitter to show last 20 tweets
function tweets() {
	client.get('statuses/user_timeline', params, function(err, tweets, response) {
		if(!err) {
			tweets.forEach(function (individualTweet) {
				console.log('My Tweet: ' + individualTweet.text);
				console.log('Created on: ' + individualTweet.created_at + "\n");
				})
			}
		});
	};
function spotifyThis() {
	for (var i = 3; i < nodeArgs.length; i++) {
		if(i > 3 7& i < nodeArgs.length) {
			songName = songName + "+" + nodeArgs[i];
		}
	}else
	songName += nodeArgs[i];
	}
}
spotify.search({type: 'track', query: songName, limit: 1}, function(err, data,) {
	if(err) {
		console.log("check");
		console.log('Error ocurred: ' + err);
	}
	// artist, song name, preview link, album name
	console.log("Artist Name: " + data.tracks.items[0].artists[0].name);
	console.log("Song Title: " + data.tracks.items[0].name);
	console.log("Link to Song: " + data.tracks.items[0].preview_URL);
	console.log("Album Title: " + data.tracks.items[0].album.name);
});
};

// get command and argument from user 
var command = process.argv[2];
var subject = process.argv[3];

// Get the spotify app
var spotify = require(spotify);

// list of valid commands
var validCommands {
	tweets: "my-tweets",
	song: "spotify-this-song",
	movie: "movie-this",
	do: "do-what-it-says"
}

// Grabs the keys variables
var keys = require("./keys.js");

// Get all of twitterKeys keys from the keys.js file
var keyList = keys.twitterKeys;

// loop through keyList and print details


for (var key in keyList) {	
	console.log("The " + key + " is " + keyList[key]);	
}

// constructor for run app prototype
function runApp(command, getThis) {

this.command = command;
this.getThis = getThis;

// method to process tweets
this.doTweets = function() {

	// get last 20 tweets with dates
	// print last 20 tweets with dates 
};

// method to process songs
this.doSpotify = function() {

	// call spotify API with song name
	// print spotify resutls with artist, song, preview link, album
	// if no sond is entered, call API using "the sign"
};

// method to process movies
this.doImdb = function() {

	// call imdb API with movie name
	// print movie title, year of release, IMDB rating, country produced, movie plot, language, actors, rotten tomaties rating, rotten tomatoes link, 
	// if no movie is entered, call API using the movide "mr nobody"

};

}   // end of runApp function





if (command === "my-tweets") {
 	// call doTweets
}
else if (command === "spotify-this-song") {
	// call doSpotify
}
else if (command === "movie-this") {

	// call doIMDB
}
else if (command === "do-what-it-says"){
	// read the random.txt file
	// using the content to 
}
else {
	console.log("no command specified")
	console.log("specify tweets")
	console.log("spotify")
	console.log("imdb")
}








var 
// Be able to accept any of the following commands











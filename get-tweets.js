// Include the twitter module
var Twitter = require('twitter');
var inquirer = require('inquirer');

//var arg1 = process.argv;
// Start function - controls initial prompts to users
function start () {
inquirer.prompt([
		{name: "todo",	
			type: "list",
			message: "What app do you want to run?", 
			choices: ["tweets", "songs", "movies"]
		}
		]).then(function(answer){
		// Process data
		switch(answer.todo){
			case "tweets" :
				getTwitter();
				break;
			case "songs" :
				getSongs();
				break;
			case "movies"	:
				getMovies();
				break;
			default: 
				console.log("did not have argument");
				exit();

		}
	});
} // End start function

// GetTwitter function
function getTwitter() {
var client = new Twitter({
  	consumer_key: "kgJ9j17hjrR69LWelUsX78jeo",
	consumer_secret: "C3MqmdojL2Hm4sk4PvMBtM4Ng9SWFqguPsORsb1FF0XvJIr1BZ",
	access_token_key: "2897919816-BMHtM2ZoEOwzGLY7BGLYT5GmbaMzIT83toPuLSf",
	access_token_secret: "cG9XAByt25gJJVF0YMVROesP9QbCQtic7ARkG2QzU7iPf"
  });
 
// Define the parms for screen name and number of responses to return
var params = {screen_name: 'AnitaPPSCEO', count: 5};

// API call to return tweets from user
client.get('statuses/user_timeline', params, function(error, data) {
  if (!error) {

  	// log the 5 most recent tweets from user
  	console.log("Most recent tweet: " + data[0].text);
  	console.log("2nd most recent tweet: " + data[1].text);
  	console.log("3rd most recent tweet: " + data[2].text);
  	console.log("4th most recent tweet: " + data[3].text);
  	console.log("5th most recent tweet: " + data[4].text);
   } 
});
}  // end of getTwitter function

// getMovies function - runs IMDB
function getMovies(){
// require the IMDB API
const imdb = require('imdb-api');
inquirer.prompt([
	{name: "movies", 
		message: "Enter movie name",
		type: "text"
	}
	]).then(function(answer){
		movieName = answer.movies;
		console.log(movieName);
let movie;
 //movieName="";
imdb.getReq({ name: movieName }, (err, things) => {
    movie = things;
    console.log("=====================================");
    console.log("Title: " + movie.title);
    console.log("Year Released: " + movie.released);
    console.log("IMDB Rating: " + movie.rating);
    console.log("Country Produced: " + movie.country);	
    console.log("Movie Plot: " + movie.plot);
    console.log("Languages: " + movie.languages);
    console.log("Cast: " + movie.actors);
    console.log("====================================");
    
});


}); // end of getMovies function

// getSongs function - Runs spotify
function getSongs(){
var song ="";
inquirer.prompt([
	{name: "song",
		message: "Enter name of song",
		type: "text"
	}
	]).then(function(answer){
		thisSong = answer.song;
		console.log(song);

// Include spotify & setup variables
var spotify = require('spotify');

// call the spotify function
spotifyIt(thisSong);

// SpotifyIt function searches for song passed in thisSong variable and logs artist name, albumn name and preview URL
function spotifyIt() {
  
  spotify.search({ type: 'track', query: thisSong}, function(err, data) {
    if ( err ) {
        // log error
        console.log('Error occurred: ' + err);        
        return;  //from spotify npm docs
    }
    else{
      // log the song info
        var songInfo = data.tracks.items[0];
        var songResult = console.log("Artist : " + songInfo.artists[0].name)
                     console.log("Name of song: " + songInfo.name)
                     console.log("On the album: " + songInfo.album.name)
                     console.log("Preview URL: " + songInfo.preview_url)
    };
  });
}    

})

}// End of songs function

start();
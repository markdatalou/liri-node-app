// Include spotify & setup variables
var spotify = require('spotify');
var song=[];
song = process.argv;
thisSong="";

// this loop assembles the name of the song and stores in a variable called thisSong
for (i=2; i < song.length; i++){

	// console.log("song is " + song.length + " words long");
	thisSong = thisSong + " " + song[i];
	//console.log(thisSong);

}
// log the name of the song
console.log(thisSong);

if (thisSong === ""){thisSong = "thats the way of the world"};

// this function searches for song passed in thisSong variable and logs artist name, albumn name and preview URL
function spotifyIt() {
  spotify.search({ type: 'track', query: thisSong}, function(err, data) {
    if ( err ) {
        // log error
        console.log('Error occurred: ' + err);        
        return;  //from spotify npm docs
    }
    else{
      // log the song info
      //  console.log(data);  /* debug code */
        var songInfo = data.tracks.items[0];
        var songResult = console.log(songInfo.artists[0].name)
                     console.log(songInfo.name)
                     console.log(songInfo.album.name)
                     console.log(songInfo.preview_url)
        // console.log(songResult);
    };
  });
}    

spotifyIt(thisSong);









/*


spotify.search({ type: 'track', query: thisSong }, function(err, data) {
    if ( err ) {
        console.log('Error occurred: ' + err);
        return;
    }
    console.log(data);
   // Do something with 'data' 
});
*/
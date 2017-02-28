// require the IMDB API
const imdb = require('imdb-api');

// movieInput = process.argv[]

let movie;
 
imdb.getReq({ name: 'The Toxic Avenger' }, (err, things) => {
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
//Code needed to grab the data I need from keys.js
var keys = require("./keys.js");
// new indexes
var liriCommands = process.argv[2];
var liriSearch = process.argv[3];
for (var i = 4; i < process.argv.length; i++) {
  liriSearch += " " + process.argv[i];
}


function userCommands() {
  if (liriCommands === "my-tweets"){
    runTweets();
  }

  else if (liriCommands === "spotify-this-song"){
    runSong();
  }

  else if (liriCommands === "movie-this") {
    runMovie();
  }

  else {
    console.log("error")
  }
}


 // Function that pulls tweets and displays when commanded
function runTweets() {
 var userName = "LildickyTom";
 if (liriSearch) {
   userName = liriSearch;
 }
 var Twitter = require('twitter');

  var client = new Twitter({
      consumer_key: keys.twitterKeys.consumer_key,
      consumer_secret: keys.twitterKeys.consumer_secret,
      access_token_key: keys.twitterKeys.access_token_key,
      access_token_secret: keys.twitterKeys.access_token_secret
    });

var params = {screen_name: 'userName'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    console.log(tweets);
  }
});

}

function runSong() {
  var song = 'The Sign';
  if (liriSearch) {
    song = liriSearch;
  }
  var Spotify = require('node-spotify-api');

  var spotify = new Spotify({
    id: keys.spotifyKeys.id,
    secret: keys.spotifyKeys.secret
  });

  spotify.search({ type: 'track', query: song }, function(err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }
    console.log(data);
})
}

function runMovie() {
  var movie = "Mr. Nobody";
  if(liriSearch) {
    movie = liriSearch;
  }
}

var request = require("request");

request("http://www.omdbapi.com/?apikey=" + keys.omdbKey.api + "&t", function(error, response, body) {
  if (!error && response.statusCode === 200) {

    // Parse the body of the site and recover just the imdbRating

    console.log("The movie's rating is: " + JSON.parse(body).imdbRating);
  }
  });








userCommands();

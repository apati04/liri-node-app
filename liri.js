//Code needed to grab the data I need from keys.js
var keys = require("./keys.js");
var Twitter = require('twitter');
var Spotify = require('node-spotify-api');
var request = require("request");
var fs = require("fs");

// new indexes
var liriCommands = process.argv[3];
var liriSearch = process.argv[4];
/*for (var i = 4; i < process.argv.length; i++) {
  liriSearch += " " + process.argv[i];
}*/


function userCommands(command) {
  if (liriCommands === "my-tweets"){

     var userName = "LildickyTom";
     var client = new Twitter(keys.twitterKeys);

    var params = {screen_name: userName};
    client.get('statuses/user_timeline', params, function(error, tweets, response) {
      if (!error) {
        console.log(tweets[0].text);

      }
    });
  }
}
   if (liriCommands === "spotify-this-song"){
    function runSong() {
      var song = 'The Sign';
      if (liriSearch) {
        song = liriSearch;
      }

      var spotify = new Spotify({
        id: keys.spotifyKeys.id,
        secret: keys.spotifyKeys.secret
      });

      spotify.search({ type: 'track', query: song }, function(err, data) {
        if (err) {
          return console.log('Error occurred: ' + err);
        }
        console.log(JSON.parse(data, null, 2));
    })
    }
  }

  if (liriCommands === "movie-this") {
    var movie = "Mr. Nobody";
    if(liriSearch) {
      movie = liriSearch;

    request("http://www.omdbapi.com/?apikey=" + keys.omdbKey.api + "&t", function(error, response, body) {
      if (!error && response.statusCode === 200) {

        // Parse the body of the site and recover just the imdbRating

        console.log("The movie's rating is: " + JSON.parse(body).imdbRating);
      }
      });


  }
}
  else {
    console.log("error")
  }



 // Function that pulls tweets and displays when commanded







if (liriCommand === "do-what-it-says") { fs.readFile("random.txt", "utf8", function(error, data) {

  if (error) {
    return console.log(error);
  }
    console.log(data);
    var dataArr = data.split(",");
});
}
userCommands();

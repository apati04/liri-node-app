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

  else if (liriCommands === "spotify-this-song"){}

  else if (liriCommands === "movie-this") {}

  else {
    console.log("error")
  }
}


 // Function that pulls tweets and displays when commanded
function runTweets() {
 var userName = "LildickyTom";
 if (liriCommands) {
   userName = liriCommands;
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












// Taking commands
function userCommands() {
  if (liriCommands === "my-tweets"){
    runTweets();
  }

  else if (liriCommands === "spotify-this-song"){}

  else if (liriCommands === "movie-this") {}

  else {
    error
  }





}

userCommands();

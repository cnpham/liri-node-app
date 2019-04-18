require("dotenv").config();

var Spotify = require('node-spotify-api');
var spotify = new Spotify({
    id: process.env.SPOTIFY_ID,
    secret: process.env.SPOTIFY_SECRET
});

var fs = require("fs");

var keys = require("./keys.js");

// npm package inclusions
var spotify = new Spotify(keys.spotify);
//var omdb = new Omdb(keys.omdb);
var axios = require("axios");

// take command line args for a command into an array
var inputString = process.argv;

var command = inputString[2];
var input = inputString[3];

if (command === "concert-this") {
    var bands = "https://rest.bandsintown.com/artists/" + input + "/events?app_id=codingbootcamp";
    axios.get(bands).then(
        function (response) {
            console.log("* " + response.data.Name + ".");
            console.log("* " + respoonse.data.Location + ".");
            console.log("* " + response.data.Date + ".");
        }
    );
}

else if (command === "spotify-this-song") {
    var getArtistNames = function (artist) {
        return artist.name;
    }
    if (typeof input === "undefined") {
        input = "The Sign";
    }
    spotify.search({
        type: "track",
        query: input,
    },
        function (err, data) {
            if (err) {
                return console.log('Error occurred: ' + err);
            }

            var songs = data.tracks.items;

            for (var i = 0; i < songs.length; i++) {
                console.log(i)
                console.log("artist(s): " + songs[i].artists.map(getArtistNames));
                console.log("song name: " + songs[i].name);
                console.log("preview song: " + songs[i].preview_url);
                console.log("album: " + songs[i].album.name);
            }
        }
    );
}

else if (command === "movie-this") {
    if (typeof input === "undefined") {
        input = "mr.nobody";
    }
    var omdbUrl = "http://www.omdbapi.com/?t=" + input + "&y=&plot=short&apikey=trilogy";
    axios.get(omdbUrl).then(
        function (response) {
            console.log("* " + response.data.Title + ".");
            console.log("* " + response.data.Year + ".");
            console.log("* " + response.data.imdbRating + ".");
            console.log("* " + response.data.tomatoRotten + ".");
            console.log("* " + response.data.Country + ".");
            console.log("* " + response.data.Language + ".");
            console.log("* " + response.data.Plot + ".");
            console.log("* " + response.data.Actors + ".");
        }
    );
}

else if (command === "do-what-it-says") {
    fs.readFile("random.txt", "utf8", function (error, data) {
        if (error) {
            return console.log(error);
        }

        console.log(data);

        var dataArr = data.split(",");

        console.log(dataArr);
    });
}
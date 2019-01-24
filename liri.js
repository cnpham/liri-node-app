require("dotenv").config();
var fs = require("fs");

var keys = require("./keys.js");

var spotify = new Spotify(keys.spotify);

var inputString = spotify.process.argv;

var command = inputString[2];
var input = inputString[3];

if (command === "concert-this") {
    console.log("https://rest.bandsintown.com/artists/" + input + "/events?app_id=codingbootcamp");    
}

else if (command === "spotify-this-song") {
    output = parseFloat(num1) - parseFloat(num2);
}

else if (command === "movie-this") {
    console.log("* " + title + ".");
    console.log("* " + year + ".");
    console.log("* " + imdbRating + ".");
    console.log("* " + rottenRating + ".");
    console.log("* " + country + ".");
    console.log("* " + language + ".");
    console.log("* " + plot + ".");
    console.log("* " + actors + ".");
}

else if (command === "do-what-it-says") {
    fs.readFile("random.txt", "utf8", function(error, data) {
        if (error) {
            return console.log(error);
        }

        console.log(data);

        var dataArr = data.split(",");

        console.log(dataArr);
    });
}
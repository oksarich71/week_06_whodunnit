// var sports = ["footbal", "tennis", "rugby"];

// sports.push("curling");
// sports.push("darts");
// sports.push("swimming");
//
// sports.unshift("basketball");
// console.log("sports array first item:", sports.shift());

// var lastSport = sport.pop();
// console.log("sports array:", lastSport);

// var removedSport = sports.splice(2, 1);
// console.log("removedSport:", removedSport);
//
// for(var i = 0; i < sports.length; i++ ) {
//  console.log(sports[i]);
// for(var i = sports.length-1; i >= 0; i--) run backwords
//
// };

// for(var currentSport of sports) {
//   console.log(currentSport);
// }
var movie = {
  title: "It's a Wonderful Life",
  year: 1946,
  language: "Spanish"

};
// console.log("movie:", movie.language);

movie.cast = ['James Stewart', "Donna Reed"];
// console.log("movie:", movie);movie.language = "English";
// movie["subtitle-language"] = "German";
// console.log("movie:", movie["subtitle-language"]);
// delete movie.year;
movie.ratings = {
  critic: 90,
  audience: 95
};
// console.log("movie:", movie.ratings.audience);

for(var key in movie) {
  console.log(`The ${key} is ${movie[key]}`);
}
var keys = Object.keys(movie);
console.log(keys);

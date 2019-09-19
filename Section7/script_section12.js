
var movies = [

{
    title: "frozen",
    hasWatched: true,
    rating: 5
},{
    title: "chicken little",
    hasWatched:true,
    rating: 3
},{
    title: "mean girls",
    hasWatched:true,
    rating: 2
},
];

movies.forEach(function(movie){
  var result = "you have ";

if(movie.hasWatched = true){
result+= "watched ";
console.log(result);
}else{
  console.log ("not seen");
}

result +=  movie.title ;
console.log(result);

});

var dogspace = {};
dogspace.speak = function(){
    return "woof"}
var catspace = {};
catspace.speak = function(){
    return "meow"}

dogspace.speak();
catspace.speak();

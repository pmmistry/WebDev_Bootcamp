// Name Game
var firstName = prompt("what is your first name");
var lastName = prompt("what is your last name");
var age = prompt("what is your age");
alert( "nice to meet you " + firstName + lastName + " your " + age + " years old  ");
var days = age*365;
alert( "you have been alive for " + days + " days");
if (age < 18){
  alert("too young");
}else if (age >= 18 && age < 21) {
  alert ("you can come in but no drinking");
}else {
  alert("get drunk");
}

// Guessing Game
var rightNumber = 7;
var guessedNumber = prompt(" guess a number");
if (Number(guessedNumber) === rightNumber) {
alert("you guessed it");
}else if (Number(guessedNumber) > rightNumber) {
  alert( "too high");
}else if ( Number(guessedNumber) < rightNumber) {
  alert ("too low");
}


// while loops
console.log("number b/w  -10 & 19 ");
var counter = -10;
while ( counter < 20){
console.log(counter);
counter++;
}
console.log("even number b/w 10 - 40 ");
var counter = 10;
while ( counter <= 40){
console.log(counter);
counter+=2 ;
}
console.log("even number b/w 300 - 333 ");
var counter = 300;
while ( counter <= 333){
  if (counter% 2 !=0) {
    console.log(counter);
  }
counter+=1 ;
}
console.log("even number b/w 5 - 50 divisible by 5 & 3 ");
var counter = 5;
while ( counter <= 50){
  if (counter % 5 === 0 && counter %3 === 0) {
    console.log(counter);
  }
counter+=1  ;
}


// annoying exercise
var answer = prompt("are we there yet");

while (answer != "yes" && answer != "yeah"){
  var answer = prompt("are we there yet");
}
alert("yay");

var answer = prompt("are we there yet");

while (answer.indexOf("yes") === -1 ){
  var answer = prompt("are we there yet");
}
alert("yay");

// for loop exercise
console.log("number b/w  -10 & 19 ");
for ( i = -10; i < 20; i++){
console.log(i);
}

console.log("even number b/w 10 - 40 ");
for ( i = 10; i <= 40; i+=2 ){
console.log(i);
}
console.log("even number b/w 300 - 333 ");
for( i=300; i <= 333 ; i+=1){
  if (i% 2 !=0) {
    console.log(i);
  }
}
console.log("even number b/w 5 - 50 divisible by 5 & 3 ");
for ( i = 5 ; i<= 50; i+=1){
  if (i % 5 === 0 && i %3 === 0) {
    console.log(i);
  }
}

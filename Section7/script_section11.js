// ///for each demo
// var colors = ["red","green","blue","yellow"];
//
// colors.forEach(function(colors){console.log(colors);})

// /// Todo list demo
// var todo = ["Buy new turtle"];
// var input = prompt("what would you like to do ?");
// while(input !== "quit"){
//   if(input === "list"){
//   listTodo();
//   }else if (input === "new"){
//     addTodo();
//   }else if (input === "delete"){
//   deleteTodo();
//   }
//  input = prompt("what would you like to do ?");
// }
// console.log("ok app is quit");
//
// function listTodo(){
//   console.log("************")
//   todo.forEach(function(todo,i){
//     console.log(i + ":" + todo);
//   })
//   console.log("************")
// }
//
// function addTodo(){
//   var newTodo = prompt("enter new to do");
//   todo.push(newTodo);
//   console.log("added todo");
// }
//
// function deleteTodo(){
//   var index = prompt("Enter index of todo to delete");
//   todo.splice(index,1);
//   console.log("deleted todo");
// }

///Print Reverse Demo
function printReverse(arr){
for (var i = arr.length - 1; i>=0 ; i --) {
  console.log(arr[i]);
}
}


///Is uniform Demo
//returns true if all elements in array are identical
/// if [a,a,a,a] = true
/// if [a,a,a,b] = false
function isUniform(arr){
  var first = arr[0];
for (var i = 1 ; i < arr.length ; i ++){
   if(arr[i] !== first ){
     return false;
   } }
   return true;
}


//Sum Array
//returns sum of all array numbers
// [1,2,3] = 6
function sumArray(arr){
  var total = 0;
  arr.forEach(function (element){
    total+=element;
  });
return total;
}


///Max Array
// returns the max of the array ex. [1,2,3,4]  max is 4
// go through array   array.length and return i > i other numbers

function maxArray (arr){
var max = arr[0];
for (var i = 0; i < arr.length; i++) {
  if (arr[i]>= max){
    max = arr[i];
  }
}
return max;
}

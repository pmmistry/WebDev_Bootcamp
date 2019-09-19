
/// IsEven function
function isEven (x){
  if (x%2 === 0 ){
   return true;
  }
  else{
    return false;
  }
}


/// Factorial Function

function factorial(num){
var results = 1;
for(var i = 2; i <= num; i++){
  results = results*i;
}
return results;
}

// replace - to _
function kebabToSnake(str){
var newStr = str.replace("-" , "_");
return newStr;
}

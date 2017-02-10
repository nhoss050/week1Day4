var wrapLog = function (callback, name) {
  /* your code here */
  //var string = name;
  //var toDo = callback

  return function(x,y){

    var result = callback(x,y)
     console.log(`${name}(${x},${y}) is =>${result}`);
     // return result;
  }
};


var sum = function (a,b) { return a + b; };
var logSum = wrapLog(sum, "sum");

logSum(5,3); // sum(5,3) => 8
logSum(3,2); // sum(3,2) => 5
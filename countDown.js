var countdownGenerator = function (x) {
  /* your code here */
var index = x ;

  return function(){

    if(index > 0) {
      var temp = index ;
      index--;
      console.log(temp);
     // console.log(index);
    }else if (index == 0) {
      console.log("Blast Off!");
      index--;
    } else if(index < 0) {
      console.log("Rockets already gone, bub!");
      //index--;
    }
  }

};



var countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!
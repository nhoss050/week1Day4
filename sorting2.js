var students = [
  { id: 1, name: "alex",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];

students.sort(function(a,b){
console.log(a.name);
  //if(!a.name) {
    var CapitalaizeA = a.name.toUpperCase();
    var CapitalaizeB = b.name.toUpperCase();
    if(CapitalaizeA > CapitalaizeB) {
      return 1;
    }
    if(CapitalaizeA < CapitalaizeB) {
      return -1;
    } else {
      return a.age - b.age;
      //return 0;
    }
});

console.log(students);
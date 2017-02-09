var words = ["ground", "control", "to", "major", "tom"];

map(words, function(word) {
  return word.length;
});

function map( arrayOfWords, Operation) {
  ArrayOfsizes = [];
  for(elements of arrayOfWords) {
    ArrayOfsizes.push( Operation(elements));
  }
  console.log(ArrayOfsizes);
  return ArrayOfsizes;
};
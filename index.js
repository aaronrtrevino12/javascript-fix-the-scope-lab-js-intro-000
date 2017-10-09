var animal = 'dog'

function myAnimal() {
  return animal
}

function yourAnimal() {
  var animal = 'cat'
  return animal
}

function add2(n) {
  const two = 2
  return n + two
}

var funkyFunction = function() {  // funkyFunction
  return function() {  // funkyFunction()
    return "FUNKY!"  // funkyFunction()()
  }
}

// How can we return "FUNKY!"?
// var theFunk = funkyFunction  <-- this returns function without running it
// var theFunk = funkyFunction()  <-- this runs function but only returns the second function "function()"
var theFunk = funkyFunction()()  // this returns "FUNKY!"

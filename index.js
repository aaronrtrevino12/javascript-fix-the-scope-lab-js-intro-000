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

// var theFunk = funkyFunction()()

// function funkyFunction() {
//  return function() {
//    return "FUNKY!"
//  }
// }

var funkyFunction = function() { // funkyFunction
  return function() { // funkyFunction()
    return "FUNKY!" // funkyFunction()()
  }
}

// We want this to return "FUNKY!" -- how can we accomplish that?
var theFunk = funkyFunction()()

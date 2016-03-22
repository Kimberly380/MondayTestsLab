/********************************************************
 * Example of TDD on a feature used in Week 1's labwork *
 ********************************************************/
var question = ['first', 'second', 'third'];

function getQuestion(index) {
  return (question[index]);
}

//exports refers to the "var app = require('../js/app');" in our test.js file. In other words its using the app.js as an object whose method is "getQuestion"
exports.getQuestion = getQuestion;

/***********************************************************
 * Example of TDD on a feature related to Week 2's labwork *
 ***********************************************************/
// function addFive(num) {
//   return num + 5;
// }

// if(addFive(0) == 5) {
//   console.log("test 1 passed!");
// } else {
//   console.log("test 1 failed");
// }
// if(addFive(100) == 105) {
//   console.log("test 2 passed!");
// } else {
//   console.log("test 2 failed");
// }
// if(addFive(11) == 16) {
//   console.log("test 3 passed!");
// } else {
//   console.log("test 3 failed");
// }



//Problem1 sum function

function sumNumbers(a,b) {
  console.log("The sum of " + a + " and " + b + " is " + sumNumbers);
  return a + b;
}
exports.sumNumbers = sumNumbers;

//Problem2 multiply function

function multiplyNumbers(a,b){
  console.log('The product of ' + a + ' and ' + b + ' is ' + multiplyNumbers);
  return a * b;
}
exports.multiplyNumbers = multiplyNumbers;


//Problem 3 sumAndMultiply function

function sumAndMultiply(a,b,c){
  var array1 = [];
  var sumFirstTwo = sumNumbers(a,b);
  var sumAll = sumNumbers(sumFirstTwo,c);
  array1[0] = sumAll;
  var multiFirstTwo = multiplyNumbers(a,b);
  var multiAll = multiplyNumbers(multiFirstTwo,c);
  array1[1] = multiAll
  console.log(a + ' and ' + b + ' and ' + c + ' sum to ' +sumAll + '.');
  console.log('The numbers ' + a + ' and ' + b + ' and ' + c + ' have a product of ' + multiAll + '.');
  return array1;
}

exports.sumAndMultiply = sumAndMultiply;

//Problem 4 sumArray

function sumArray(Array1) {
  var counter = 0;
  for (i=0; i < Array1.length; i++) {
    counter += Array1[i];
  }
  console.log(Array1 + " was passed in as an array of numbers, and " + sumArray + " is their sum.");
  return counter;
}
exports.sumArray = sumArray;

//Problem 5 multiArray

function multiArray(Array2){
  var counter = 1;
  for (i=0; i < Array2.length; i++){
    counter = counter * Array2[i];
  }
  console.log("The numbers " +Array2 + " have a product of " + sumArray + ".");
  return counter;
}

exports.multiArray = multiArray;

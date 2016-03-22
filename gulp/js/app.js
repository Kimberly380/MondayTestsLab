



var Q1 = document.getElementById('Question1');
var Answer1 = document.getElementById('Answer1');
var Q2 = document.getElementById('Question2');
var Answer2 = document.getElementById('Answer2');
var Q3 = document.getElementById('Question3');
var Answer3 = document.getElementById('Answer3');
var Q4 = document.getElementById('Question4');
var Answer4 = document.getElementById('Answer4');
var Q5 = document.getElementById('Question5');
var Answer5 = document.getElementById('Answer5');

document.addEventListener('DOMContentLoaded', function() {

var Func1 = sumNumbers(3,4);
var Func2 = multiplyNumbers(3,4);
var Func3 = sumAndMultiply(3,4,6);
var Array3 = [3,4,6];
var Func4 = sumArray(Array3);
var Func5 = multiArray(Array3);

Answer1.textContent = "The sum of the numbers 3 and 4 is " + Func1 + "!";
Answer2.textContent = "The product of the numbers 3 and 4 is " + Func2 + "!";
Answer3.textContent = "The sum and product - respectively - for the numbers 3, 4 and 6 are " +Func3+ "!";
Answer4.textContent = "The sum of the numbers 3, 4 and 6 (stored in an array) is " +Func4+ "!";
Answer5.textContent = "The product of the numbers 3, 4 and 6 (stored in an array) is " +Func5 + "!";


});

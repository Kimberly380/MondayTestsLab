var assert = require('assert');
var compute = require('../js/compute.js');

describe('My first test', function() {
  it('should check first question', function() {
    assert.deepEqual(compute.getQuestion(0), 'first');
  });

  it('should check third question', function() {
    assert.deepEqual(compute.getQuestion(2), 'third');
  });

  it('should increment 0 to get 5', function() { assert(5 == compute.addFive(0)); });
  it('should increment 4 to get 9', function() { assert(9 == compute.addFive(4)); });
  it('should increment -1008 to get -1003', function() { assert(compute.addFive(-1008) == -1003); });


//First Problem - return the sum of two numbers - Test sum() function

it('should return true because 4 + 7 is 11', function() { assert(11 == compute.sumNumbers(4,7)); });

//Second Problem - Test sum Multiply - that multiplies two numbers

it('should return true because 4 times 7 is 28', function() { assert(28 == compute.multiplyNumbers(4,7)); });
it('should return false because 4 times 4 is not 28', function() { assert(28 !== compute.multiplyNumbers(4,4)); });

//Third Problem - Test sum sumAndMultiply()

it('should return true because 4 plus 7 plus 5 equals 16 and 4 times 7 times times 5 equals 140', function() { assert(16,140 == compute.multiplyNumbers(4,7,5)); });







});

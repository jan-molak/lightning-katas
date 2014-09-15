'use strict';

var expect   = require('chai').expect,
    fizzbuzz = require('../src/fizzbuzz');

describe('"fizzbuzz" function', function () {

    it('returns "Fizz" when called with a number divisible by 3', function () {
        expect(fizzbuzz(3)).to.equal('Fizz');
    });

    // exercise 1: return "Buzz" when called with a number divisible by 5

    // exercise 2: return "FizzBuzz" when called with a number divisible by both 3 and 5
});
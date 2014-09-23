'use strict';

var expect   = require('chai').expect,
    fizzbuzz = require('../src/fizzbuzz');

describe('"fizzbuzz" function', function () {

    it('returns "Fizz" when called with a number divisible by 3', function () {
        expect(fizzbuzz(3)).to.equal('Fizz');
    });

    // exercise 1: return "Buzz" when called with a number divisible by 5
    it('returns "Buzz" when called with a number divisible by 5', function () {
        expect(fizzbuzz(5)).to.equal('Buzz');
    });

    // exercise 2: return "FizzBuzz" when called with a number divisible by both 3 and 5
    it('returns "FizzBuzz" when called with a number divisible by 3 and 15', function () {
        expect(fizzbuzz(15)).to.equal('FizzBuzz');
    });

    // exercise 3: return "Not a FizzBuzz" when not called with a number divisible by both 3 and 5
    it('returns "Not a FizzBuzz" when not called with a number divisible by 3 and 15', function () {
        expect(fizzbuzz(1)).to.equal(1);
    });

    // exercise 3: return "Not a FizzBuzz" when not called with a number divisible by both 3 and 5
    it('returns "Not Valid Input" if it is invalid input', function () {
        expect(function(){ fizzbuzz({}) }).to.throw("Not Valid Input");
    });
});

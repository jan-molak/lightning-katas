'use strict';

var expect = require('chai').expect,
    total  = require('../src/total');

describe('"total" function', function () {

    it('calculates the total of numbers passed to it', function () {
        expect(total([ 1, 2 ])).to.equal(3);
    });

    // exercise 1: should return 0 by default, i.e. total() -> 0

    // exercise 2: should also work with a single number, i.e. total(5) -> 5

    // exercise 3: should work with a variable list of arguments, i.e. total (1, 2, 3) -> 6

    // exercise 4: what should happen when the argument is not a valid? use some defaults? throw an error?
});
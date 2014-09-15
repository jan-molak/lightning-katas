'use strict';

var expect = require('chai').expect,
    only   = require('../src/only'),
    even   = only.even;

describe('"only" function', function () {

    describe('can be configured so that', function () {

        it('can be configured to return only even numbers', function () {
            var onlyEven = only(even);

            expect(onlyEven([0, 1, 2, 3, 4])).to.deep.equal([0, 2, 4]);
        });

        // exercise 1: can you make it return odd numbers too? i.e. only(odd)([ 1, 2, 3 ]) -> [ 1, 3 ]

        // exercise 2: can you make it work with a variable argument list? i.e. only(odd)(1, 2, 3) -> [ 1, 3 ]
    });
});
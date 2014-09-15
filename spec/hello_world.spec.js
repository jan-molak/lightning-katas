'use strict';

var expect = require('chai').expect,
    hello  = require('../src/hello_world');

describe('"hello" function', function () {

    it('greets the world in English', function () {
        expect(hello('en')).to.equal('Hello World!');
    });

    // exercise 1: what should happen by default when hello() is called with no arguments?

    // exercise 2: add more languages! :-)

    // exercise 3: what should happen when the argument is not a valid? use some defaults? throw an error?
});
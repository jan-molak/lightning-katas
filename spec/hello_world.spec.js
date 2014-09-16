'use strict';

var expect = require('chai').expect,
    hello  = require('../src/hello_world');

describe('"hello" function', function () {

    it('greets the world in English', function () {
        expect(hello('en')).to.equal('Hello World!');
    });

    // exercise 1: what should happen by default when hello() is called with no arguments?
    it('greets with Thai by default', function () {
        expect(hello()).to.equal('สวัสดี');
    });
    // exercise 2: add more languages! :-)
    it('greets the world in Polish', function () {
        expect(hello('pl')).to.equal('Witaj Świecie!');
    });

    // exercise 3: what should happen when the argument is not a valid? use some defaults? throw an error?
});
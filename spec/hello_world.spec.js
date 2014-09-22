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

    // exercise 2: add more languages! :-)
    it('greets the world in Turkish', function () {
        expect(hello('tr')).to.equal('Merhaba dunya!');
    });

    // exercise 3: what should happen when the argument is not a valid? use some defaults? throw an error?
    it('greets the world even thought it is invalid input', function () {
        // Test for 'Number', 'Array', 'object', 'boolean true', 'boolean false', 'null' and 'undefined'
        [ 0, [], {}, true, false, null, undefined ].forEach(function (invalid_example){
            expect(hello(invalid_example)).to.equal('สวัสดี', invalid_example);
        });
    });

});
'use strict';
var _ = require('lodash');

module.exports = function (fizzbuzz) {

    if (_.isNumber(fizzbuzz) ) {

        return fizzbuzz % 3 == 0 && fizzbuzz % 5 == 0 ?
            'FizzBuzz'
            : fizzbuzz % 3 == 0
            ? 'Fizz'
            : fizzbuzz % 5 == 0
            ? 'Buzz'
            : fizzbuzz
    } else {
        throw new Error("Not Valid Input");
    }
};

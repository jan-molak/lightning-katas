'use strict';
var _ = require('lodash');

module.exports = function (number) {

    if (!_.isNumber(number)) {
        throw new Error('Not Valid Input');
    }

    /*jshint -W014 */
    return number % 3 === 0 && number % 5 === 0 ?
        'FizzBuzz'
        : number % 3 === 0
        ? 'Fizz'
            : number % 5 === 0
            ? 'Buzz'
                : number;
    /*jshint +W014 */
};

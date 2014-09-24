'use strict';
var _ = require('lodash');

module.exports = function (oddOrEven) {
    return function (input) {
        var numbers = _.isArray(input)
            ? input
            : _.toArray(arguments);

        return _.filter(numbers, oddOrEven);

    };
};

module.exports.even = function (num) {
    return num % 2 === 0;
};

module.exports.odd = function (num) {
    return num % 2 === 1;
};

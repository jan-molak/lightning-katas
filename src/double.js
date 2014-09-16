'use strict';
var _ = require('lodash');

module.exports = function (numbers) {
    return _.isArray(numbers) ?
        _.map(numbers, function (number) {
            return number * 2;
        })
         : numbers*2;
};

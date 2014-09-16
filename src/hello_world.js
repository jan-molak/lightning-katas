'use strict';
var _ = require('lodash');

module.exports = function (language) {
    var greetings = {
        en : 'Hello World!',
        th : 'สวัสดี',
        pl : 'Witaj Świecie!',
        tr : 'Merhaba dunya!'
    };

    return _.isString(language) ? greetings[language] : greetings.th;
};
'use strict';

module.exports = function (language) {
    return !language ? 'สวัสดี':( language === 'en' ? 'Hello World!' : 'Witaj Świecie!');
};
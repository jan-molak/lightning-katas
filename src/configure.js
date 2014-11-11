'use strict';
var _ = require('lodash');

var default_profile =  {
    user:     'user',
    password: 'password',
    url:      'http://github.com'
};
module.exports = function(){
    return default_profile;
};

module.exports.byMerge = function (override) {
   _.merge(default_profile,override);
    return default_profile;
};

module.exports.byDefaults = function (override) {
    _.defaults(default_profile,override);
    return default_profile;
};

module.exports.byHand =  function (override) {
    if (override) {
        default_profile.user     = override.user || default_profile.user;
        default_profile.password = override.password || default_profile.password;
    }
    return default_profile;
};

var _  = require('lodash'),
    fs = require('fs');

console.log('\ntry with spec/' + _(fs.readdirSync('./spec')).sample(), 'good luck! :-)');
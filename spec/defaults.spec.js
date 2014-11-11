'use strict';

var expect    = require('chai').expect,
    configure = require('../src/configure');


describe('configure', function () {



    it('returns a set of sensible defaults', function() {
        expect(configure()).to.deep.equal({ user: 'user', password: 'password', url: 'http://github.com' });
    });

    it('allows user to override defaults', function(){
        var override = {user:'Bob',password: 'MyPassword'};

        expect(configure(override)).to.deep.equal({user:'Bob',password:'MyPassword', url: 'http://github.com' });
    });

    // exercise 1: allow the user to override some defaults,
    //             i.e. configure({ user: 'bob', password: 'secret' }) -> { user: 'bob', password: 'secret', url: 'http://github.com' }
    //
    //             hint: you can use lodash :-)

    // exercise 2: try both _.merge and _.defaults

    // exercise 3: can you do it without lodash?
});

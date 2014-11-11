'use strict';

var chai = require('chai'),
    expect = chai.expect,
    configure = require('../src/configure');


describe('configure', function () {

    it('returns a set of sensible defaults', function () {
        expect(configure()).to.deep.equal({ user: 'user', password: 'password', url: 'http://github.com' });
    });
    // exercise 1: allow the user to override some defaults,
    //             i.e. configure({ user: 'bob', password: 'secret' }) -> { user: 'bob', password: 'secret', url: 'http://github.com' }
    //
    //             hint: you can use lodash :-)

    it('allows user to override defaults', function () {
        var override = {user: 'Bob', password: 'MyPassword'};
        expect(configure.byMerge(override)).to.deep.equal({user: 'Bob', password: 'MyPassword', url: 'http://github.com' });
    });

    describe('doing it with lodash', function () {
        // exercise 2: try both _.merge and _.defaults
        it('allow the user to override some defaults (using _.merge )', function () {
            expect(configure.byMerge({ user: 'fred', password: 'wilma'})).to.deep.equal({ user: 'fred', password: 'wilma', url: 'http://github.com' });
        });

        it('allow the user to override some defaults (using _.defaults )', function () {
            expect(configure.byDefaults({ user: 'fred', password: 'wilma'})).to.deep.equal({ user: 'fred', password: 'wilma', url: 'http://github.com' });
        });
    });
    // exercise 3: can you do it without lodash?
    it('allow the user to override some defaults (without lodash)', function () {
        expect(configure.byHand({ user: 'bob', password: 'secret' })).to.deep.equal({ user: 'bob', password: 'secret', url: 'http://github.com' });
    });
});
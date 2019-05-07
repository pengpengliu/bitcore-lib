"use strict";

var should = require("chai").should();
var bitcore = require("../");

describe('#versionGuard', function() {
  it('global._bitcoreDoge should be defined', function() {
    should.equal(global._bitcoreDoge, bitcore.version);
  });

  it('throw an error if version is already defined', function() {
    (function() {
      bitcore.versionGuard('version');
    }).should.throw('More than one instance of bitcore');
  });
});

var assert = require('assert')
  , tests
  , Profile = geddy.model.Profile;

tests = {

  'after': function (next) {
    // cleanup DB
    Profile.remove({}, function (err, data) {
      if (err) { throw err; }
      next();
    });
  }

, 'simple test if the model saves without a error': function (next) {
    var profile = Profile.create({});
    profile.save(function (err, data) {
      assert.equal(err, null);
      next();
    });
  }

, 'test stub, replace with your own passing test': function () {
    assert.equal(true, false);
  }

};

module.exports = tests;

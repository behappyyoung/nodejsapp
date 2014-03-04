var assert = require('assert')
  , tests
  , PersonalDetail = geddy.model.PersonalDetail;

tests = {

  'after': function (next) {
    // cleanup DB
    PersonalDetail.remove({}, function (err, data) {
      if (err) { throw err; }
      next();
    });
  }

, 'simple test if the model saves without a error': function (next) {
    var personaldetail = PersonalDetail.create({});
    personaldetail.save(function (err, data) {
      assert.equal(err, null);
      next();
    });
  }

, 'test stub, replace with your own passing test': function () {
    assert.equal(true, false);
  }

};

module.exports = tests;

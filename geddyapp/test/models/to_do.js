var assert = require('assert')
  , tests
  , ToDo = geddy.model.ToDo;

tests = {

  'after': function (next) {
    // cleanup DB
    ToDo.remove({}, function (err, data) {
      if (err) { throw err; }
      next();
    });
  }

, 'simple test if the model saves without a error': function (next) {
    var todo = ToDo.create({});
    todo.save(function (err, data) {
      assert.equal(err, null);
      next();
    });
  }

, 'test stub, replace with your own passing test': function () {
    assert.equal(true, false);
  }

};

module.exports = tests;

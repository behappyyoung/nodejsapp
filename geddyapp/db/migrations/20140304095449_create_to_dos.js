var CreateToDos = function () {
  this.up = function (next) {
    var def = function (t) {
          t.column('title', 'string');
          t.column('status', 'string');
        }
      , callback = function (err, data) {
          if (err) {
            throw err;
          }
          else {
            next();
          }
        };
    this.createTable('to_do', def, callback);
  };

  this.down = function (next) {
    var callback = function (err, data) {
          if (err) {
            throw err;
          }
          else {
            next();
          }
        };
    this.dropTable('to_do', callback);
  };
};

exports.CreateToDos = CreateToDos;

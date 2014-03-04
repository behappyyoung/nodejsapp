var CreateNotes = function () {
  this.up = function (next) {
    var def = function (t) {
          t.column('title', 'string');
          t.column('content', 'string');
        }
      , callback = function (err, data) {
          if (err) {
            throw err;
          }
          else {
            next();
          }
        };
    this.createTable('notes', def, callback);
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
    this.dropTable('notes', callback);
  };
};

exports.CreateNotes = CreateNotes;

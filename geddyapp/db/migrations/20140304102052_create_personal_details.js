var CreatePersonalDetails = function () {
  this.up = function (next) {
    var def = function (t) {
        }
      , callback = function (err, data) {
          if (err) {
            throw err;
          }
          else {
            next();
          }
        };
    this.createTable('personal_detail', def, callback);
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
    this.dropTable('personal_detail', callback);
  };
};

exports.CreatePersonalDetails = CreatePersonalDetails;

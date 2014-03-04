var PersonalDetails = function () {
  this.respondsWith = ['html', 'json', 'xml', 'js', 'txt'];

  this.index = function (req, resp, params) {
    var self = this;

    geddy.model.PersonalDetail.all(function(err, personalDetails) {
      if (err) {
        throw err;
      }
      self.respondWith(personalDetails, {type:'PersonalDetail'});
    });
  };

  this.add = function (req, resp, params) {
    this.respond({params: params});
  };

  this.create = function (req, resp, params) {
    var self = this
      , personalDetail = geddy.model.PersonalDetail.create(params);

    if (!personalDetail.isValid()) {
      this.respondWith(personalDetail);
    }
    else {
      personalDetail.save(function(err, data) {
        if (err) {
          throw err;
        }
        self.respondWith(personalDetail, {status: err});
      });
    }
  };

  this.show = function (req, resp, params) {
    var self = this;

    geddy.model.PersonalDetail.first(params.id, function(err, personalDetail) {
      if (err) {
        throw err;
      }
      if (!personalDetail) {
        throw new geddy.errors.NotFoundError();
      }
      else {
        self.respondWith(personalDetail);
      }
    });
  };

  this.edit = function (req, resp, params) {
    var self = this;

    geddy.model.PersonalDetail.first(params.id, function(err, personalDetail) {
      if (err) {
        throw err;
      }
      if (!personalDetail) {
        throw new geddy.errors.BadRequestError();
      }
      else {
        self.respondWith(personalDetail);
      }
    });
  };

  this.update = function (req, resp, params) {
    var self = this;

    geddy.model.PersonalDetail.first(params.id, function(err, personalDetail) {
      if (err) {
        throw err;
      }
      personalDetail.updateProperties(params);

      if (!personalDetail.isValid()) {
        self.respondWith(personalDetail);
      }
      else {
        personalDetail.save(function(err, data) {
          if (err) {
            throw err;
          }
          self.respondWith(personalDetail, {status: err});
        });
      }
    });
  };

  this.remove = function (req, resp, params) {
    var self = this;

    geddy.model.PersonalDetail.first(params.id, function(err, personalDetail) {
      if (err) {
        throw err;
      }
      if (!personalDetail) {
        throw new geddy.errors.BadRequestError();
      }
      else {
        geddy.model.PersonalDetail.remove(params.id, function(err) {
          if (err) {
            throw err;
          }
          self.respondWith(personalDetail);
        });
      }
    });
  };

};

exports.PersonalDetails = PersonalDetails;

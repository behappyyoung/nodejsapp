
exports.index = function(req, res){
  res.render('index', { title: "node -  express - jade - passport - mongo - angular - bootstrap ", user: req.session.user});
};

exports.login = function(req, res){
    res.render('login', { title: " node - express - jade - passport - bootstrap : login ",  user: req.user, message: req.flash('error') });
};

exports.register = function(req, res){
    res.render('register', { title: " node - express - jade - angular  - bootstrap : register ",  message: req.flash('error') });
};


exports.account =  function(req, res){
    req.session.user = req.user;
    res.render('account', { user: req.session.user });
};

exports.logout = function(req, res){
    req.session.destroy();
    res.redirect('/');
}

/*
exports.login_process = function(req, res){
    passport.authenticate('local', { failureRedirect: '/login', failureFlash: true }),
        function(req, res) {
            //res.redirect('/');
            res.render('account', { user: req.user, message: 'GOOD' });
        }
};
*/
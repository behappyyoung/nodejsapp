// dependencies
var fs = require('fs');
var http = require('http');
var express = require('express');
var routes = require('./routes');
var path = require('path');
var mongoose = require('mongoose');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;


// global config
var app = express();
app.set('port', process.env.PORT || 1337);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger());
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.cookieParser('mysecret'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// env config
app.configure('development', function(){
    app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
    app.use(express.errorHandler());
});

// passport config
var Account = require('./models/account');
passport.use(new LocalStrategy(Account.authenticate()));
passport.serializeUser(Account.serializeUser());
passport.deserializeUser(Account.deserializeUser());

// mongo config
//var MONGOLAB_URI= "add_your_mongolab_uri_here"
//var mongo = process.env.MONGOLAB_URI || 'mongodb://localhost/node-bootstrap3-template'
//mongoose.connect(mongo);

// mongo model
// var Model_Name = require('add_your_models_here');

// mongoose
mongoose.connect('mongodb://localhost/passport_local_mongoose');

// routes
require('./routes')(app)

// routes
/*
app.get('/', routes.index);
app.get('/ping', routes.ping);
*/

// run server
app.listen(app.get('port'), function(){
  console.log('\nExpress server listening on port ' + app.get('port'));
});

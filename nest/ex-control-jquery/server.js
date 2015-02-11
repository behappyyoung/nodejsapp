/**
 *  Copyright 2014 Nest Labs Inc. All Rights Reserved.
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *        http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
'use strict';

var express = require('express'),
    session = require('express-session'),
    cookieParser = require('cookie-parser'),
    app = express(),
    passport = require('passport'),
    bodyParser = require('body-parser'),
    NestStrategy = require('passport-nest').Strategy;

/**
  Setup Passport to use the NestStrategy,
  simply pass in the clientID and clientSecret.

  Here we are pulling those in from ENV variables.
*/
passport.use(new NestStrategy({
    clientID: 'e0101285-4b16-4ef8-988f-3adc4d7de30f', //process.env.NEST_ID,
    clientSecret: 'zY5TxdeabgR74qOwi0RXbM7LM' //process.env.NEST_SECRET
  }
));

/**
  No user data is available in the Nest OAuth
  service, just return the empty user object.
*/
passport.serializeUser(function(user, done) {
  done(null, user);
});

/**
  No user data is available in the Nest OAuth
  service, just return the empty user object.
*/
passport.deserializeUser(function(user, done) {
  done(null, user);
});

/**
  Setup the Express app
*/
app.use(cookieParser('cookie_secret_shh')); // Change for production apps
app.use(bodyParser());
app.use(session({secret: 'session_secret_shh'})); // Change for production apps
app.use(passport.initialize());
app.use(passport.session());

/**
  Server our static jQuery app.
*/
app.use(express.static(__dirname + '/app'));
app.use('/bower_components',  express.static(__dirname + '/bower_components'));

/**
  Listen for calls and redirect the user to the Nest OAuth
  URL with the correct parameters.
*/
app.get('/auth/nest', passport.authenticate('nest'));

/**
  Upon return from the Nest OAuth endpoint, grab the user's
  accessToken and set a cookie so jQuery can access, then
  return the user back to the root app.
*/
app.get('/auth/nest/callback',
        passport.authenticate('nest', { }),
        function(req, res) {
          res.cookie('nest_token', req.user.accessToken);
          res.redirect('/');
        }
       );

/**
  Export the app
*/
module.exports = app;

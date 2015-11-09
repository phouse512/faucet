var express = require('express');
var router = express.Router();

var secrets = require('../secrets');
var oauth2 = require('simple-oauth2')({
    clientID: secrets['development']['githubId'],
    clientSecret: secrets['development']['githubSecret'],
    site: 'https://github.com/login',
    tokenPath: '/oauth/access_token',
    authorizationPath: '/oauth/authorize'
});

var authorization_uri = oauth2.authCode.authorizeURL({
    redirect_uri: 'http://107.170.14.18:3000/github/callback',
    scope: 'repo,user',
    state: secrets['development']['githubState']
});

router.get('/auth', function(req, res, next) {
    res.redirect(authorization_uri);
});

module.exports = router;

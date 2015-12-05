var express = require('express');
var router = express.Router();
var URI = require('urijs');
var api = require('../library/api');

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

router.get('/callback', function (req, res, next) {
  var code = req.query.code;
  console.log('/callback');
  oauth2.authCode.getToken({
    code: code,
    redirect_uri: 'http://107.170.14.18:3000/github/callback'
  }, saveToken);

  function saveToken(error, result) {
    if (error) { console.log('Access Token Error', error.message); }
    token = oauth2.accessToken.create(result);
    console.log(token);
    urlToParse = 'http://google.com?' + token.token;
    params = URI(urlToParse).query(true);
    console.log(params.access_token);
    
    // temporarily set user id for pheel hows
    var userId = 1;

    api.saveGithubToken(params.access_token, userId, function(response, body) {
        res.send(body);
    });

    res.send(params);
  }
});

module.exports = router;

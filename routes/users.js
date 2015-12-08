var express = require('express');
var router = express.Router();
var api = require('../library/api');

/* GET users listing. */
router.get('/', function(req, res, next) {
  api.getUsers(function(response, body){
    console.log(body);
    res.render('users/list', { 'users': body });
  });
});

module.exports = router;

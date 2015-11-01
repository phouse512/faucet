var express = require('express');
var router = express.Router();
var api = require('../library/api');

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log(api.getUsers());
  res.render('users/list');
});

module.exports = router;

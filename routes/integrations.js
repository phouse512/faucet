var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('integrations/index', { integrationList: ['github', 'ifttt'] });
});

module.exports = router;

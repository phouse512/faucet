var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/:groupId', function(req, res, next) {
  res.render('groups/group', { groupId: req.params.groupId });
});

module.exports = router;

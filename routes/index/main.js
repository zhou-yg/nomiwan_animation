var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index/main', { title: '糯米丸' });
});

module.exports = router;
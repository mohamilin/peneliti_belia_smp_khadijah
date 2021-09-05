var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.get('/', function(req, res, next) {
  res.render('homepage', { title: 'Express' });
});

router.get('/kamar_mandi', function(req, res, next) {
  res.render('kamar_mandi', { title: 'Express' });
});

module.exports = router;

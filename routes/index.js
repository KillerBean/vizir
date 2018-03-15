var express = require('express');
var router = express.Router();
var model = require('./../model/plans')();
//var prices = require('./../model/standard_prices')();

/* GET home page. */
router.get('/', function(req, res, next) {
    /*{
  "origin": [11,16,11,17,11,18],
  "destiny": [16,11,17,11,18,11],
  "price":[1.9,2.9,1.7,2.7,0.9,1.9]
}*/
    res.render('index', { title: 'Express' });
});

module.exports = router;

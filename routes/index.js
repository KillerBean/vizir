var express = require('express');
var router = express.Router();
var modelPlans = require('./../model/Plan')();
var modelPrices = require('./../model/Price')();

/* GET home page. */
router.get('/', function(req, res, next) {
    modelPlans.find(null, function(err, plans){
        if (err){
            throw err;
        }
        modelPrices.find(null, function(error, prices){
            if (error){
                throw error;
            }
            res.render('index', { title: 'Telzir', Plans: plans, Prices: prices });
        });
    });
});

module.exports = router;

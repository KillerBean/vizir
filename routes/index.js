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

router.post('/prices', function(req, res, next) {
    var obj = req.body;
    console.log(obj.destino);
    modelPrices.find({origin: obj.origem, destiny: obj.destino},function(err, doc){
        if(err){
            throw err;
        }
        newValue = doc[0].price*1.10;
        let prices = {origin: doc[0].origin, destiny: doc[0].destiny, stdValue: doc[0].price, newValue: Math.round(newValue * 100)/100};
        res.send(prices);
    });
});

module.exports = router;

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
    modelPrices.find({origin: obj.origem, destiny: obj.destino},function(err, doc){
        if(err){
            throw err;
        }
        let prices;
        if(doc == ''){
            prices = {origin: null, destiny: null, stdValue: null, newValue: null};
        }else{
            let newValue, stdValue;
            if(obj.plano >= obj.tempo){
                newValue = 0;
            }else{
                newValue = parseFloat(((obj.tempo-obj.plano)*(doc[0].price*1.1)).toFixed(2));
            }
            stdValue = parseFloat((obj.tempo * doc[0].price).toFixed(2));
            prices = {origin: doc[0].origin, destiny: doc[0].destiny, stdValue: stdValue, newValue: newValue};
        }
        res.send(prices);
    });
});

module.exports = router;

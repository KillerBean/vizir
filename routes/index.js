'use strict';
var express = require('express');
var router = express.Router();
var modelPlans = require('./../model/Plan')();
var modelPrices = require('./../model/Price')();

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
    if (!isValidObject(obj)) {
        res.status(400);
        next();
    }else{
        res.status(200);
        let prices = {origin: null, destiny: null, stdValue: null, newValue: null};
        modelPrices.find({origin: obj.origem, destiny: obj.destino},function(err, doc){
            if(err){
                throw err;
            }
            if(isValidObject(doc)){
                let newValue, stdValue;
                if(obj.plano >= obj.tempo){
                    newValue = 0;
                }else{
                    newValue = ((obj.tempo-obj.plano)*(doc[0].price*1.1));
                }
                stdValue = (obj.tempo * doc[0].price);
                prices = {origin: doc[0].origin, destiny: doc[0].destiny, stdValue: parseFloat(stdValue.toFixed(2)), newValue: parseFloat(newValue.toFixed(2))};
            }
            res.send(prices);
        });
    }
}, function(req, res){
    res.send({origin: null, destiny: null, stdValue: null, newValue: null});
});

function isValidObject(obj) {
    if (obj == null) return false;

    if (obj.length > 0)    return true;
    if (obj.length === 0)  return false;

    if (typeof(obj) !== "object") return false;

    for (var key in obj) {
        if(typeof(obj[key]) !== "number")return false;
        if (Object.prototype.hasOwnProperty.call(obj, key)) return true;
    }

    return true;
}

module.exports = router;

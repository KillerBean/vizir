module.exports = function() {
    var db = require('./../libs/connect_db')();
    var Schema = require('mongoose').Schema;

    var standard_price = new Schema({
        origin: Number,
        destiny: Number,
        value: Number
    });

    return db.model('Standard_Price', standard_price);
}

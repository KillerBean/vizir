module.exports = function() {
    var db = require('./../libs/connect_db')();
    var Schema = require('mongoose').Schema;

    var plan = new Schema({
        name: String,
        limit: Number
    });

    var model = db.model('Plans', plan);
    console.log(model);
}

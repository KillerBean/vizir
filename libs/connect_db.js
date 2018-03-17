var mongoose = require('mongoose');
var db;

module.exports = function(){
    if(!db){
        db = mongoose.connect("mongodb://localhost:27017/app_db");
    }
    return db;
}

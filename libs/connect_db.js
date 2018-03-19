var mongoose = require('mongoose');
require('dotenv').config();
var db;

module.exports = function(){
    if(!db){
        let db_host = process.env.DB_HOST || localhost;
        let db_port = process.env.DB_PORT || 27017;
        let db_user = process.env.DB_USER;
        let db_pass = process.env.DB_PASS;
        let db_name = process.env.DB_NAME || app_db;
        if(db_user && db_pass){
            db = mongoose.connect("mongodb://" + db_user + ":" + db_pass + "@" + db_host + ":" + db_port + "/" + db_name);
        }else{
            db = mongoose.connect("mongodb://" + db_host + ":" + db_port + "/" + db_name);
        }
    }
    return db;
}

var mongoose = require('mongoose');
var dotenv = require('dotenv').config();
var db;
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    autoIndex: false, // Don't build indexes
    serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
    socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
    connectTimeoutMS: 1000,
    family: 4 // Use IPv4, skip trying IPv6
  };

module.exports = async function(){
    if(!db){
        let db_host = process.env.DB_HOST || "localhost";
        let db_port = process.env.DB_PORT || 27017;
        let db_user = process.env.DB_USER;
        let db_pass = process.env.DB_PASS;
        let db_name = process.env.DB_NAME || "app_db";
        try{
            if(db_user && db_pass) {
                db = await mongoose.connect("mongodb://" + db_user + ":" + db_pass + "@" + db_host + ":" + db_port + "/" + db_name, options);
            } else {
                db = await mongoose.connect("mongodb://" + db_host + ":" + db_port + "/" + db_name, options);
            }
        } catch (err) {
            console.log(err);
        }
    }
    return db;
}

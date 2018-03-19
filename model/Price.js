module.exports = function() {
    const mongoose = require('mongoose');
    require('./../libs/connect_db')();
    const findOrCreate = require("findorcreate-promise");

    let standardSchema = new mongoose.Schema({
        origin: {
            type: Number,
            unique: false,
            required: true
        },
        destiny: {
            type: Number,
            unique: false,
            required: true
        },
        price: {
            type: Number,
            unique: false,
            required: true
        }
    });

    standardSchema.plugin(findOrCreate);
    const StandardPrice = mongoose.model('prices', standardSchema);
    return StandardPrice;
}

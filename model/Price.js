module.exports = async function() {
    const mongoose = require('mongoose');
    // const db = require('./../libs/connect_db')();
    const findOrCreate = require("findorcreate-promise");
    // const findOrCreate = require('mongoose-findorcreate');

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
    const StandardPrice = mongoose.model('price', standardSchema);
    await StandardPrice.createCollection();
    return StandardPrice;
}

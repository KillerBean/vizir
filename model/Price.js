module.exports = async function() {
    const mongoose = require('mongoose');
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
    const StandardPrice = mongoose.model('price', standardSchema);
    await StandardPrice.createCollection();
    return StandardPrice;
}

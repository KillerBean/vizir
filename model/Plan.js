module.exports = function() {
    const mongoose = require('mongoose');
    require('./../libs/connect_db')();
    const findOrCreate = require("findorcreate-promise");

    let planSchema = new mongoose.Schema({
        name: {
            type: String,
            unique: true,
            required: true
        },
        limit: {
            type: Number,
            unique: true,
            required: true
        }
    });

    planSchema.plugin(findOrCreate);
    const Plan = mongoose.model('plans', planSchema);
    return Plan;
}

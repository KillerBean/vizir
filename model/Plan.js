module.exports = async function() {
    const mongoose = require('mongoose');
    // const db = require('./../libs/connect_db')();
    const findOrCreate = require("findorcreate-promise");
    // const findOrCreate = require('mongoose-findorcreate');

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
    const Plan = mongoose.model('plan', planSchema);
    await Plan.createCollection();
    return Plan;
}

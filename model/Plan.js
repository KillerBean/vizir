module.exports = async function() {
    const mongoose = require('mongoose');
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
    const Plan = mongoose.model('plan', planSchema);
    await Plan.createCollection();
    return Plan;
}

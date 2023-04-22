const mongoose = require('mongoose');

const adsSchema = new mongoose.Schema({
    _id: Number,
    companyId: Number,
    primaryText: String,
    headline: String,
    description: String,
    CTA: String,
    imageUrl: String,
});


module.exports = mongoose.model("Ad", adsSchema);
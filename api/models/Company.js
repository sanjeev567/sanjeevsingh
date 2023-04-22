const mongoose = require('mongoose')

const companySchema = new mongoose.Schema({
    _id: Number,
    name: String,
    url: String
});


module.exports = mongoose.model("Company", companySchema);
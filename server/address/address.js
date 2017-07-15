const mongoose = require('mongoose');
const addressConstants = require('./constants');

const { Schema } = mongoose;
const { ADDRESS_REF } = addressConstants;

const addressSchema = new Schema({
    name: String,
    street: String,
    town: String,
    county: String,
    postcode: String,
    country: String
});

module.exports = mongoose.model(ADDRESS_REF, addressSchema);
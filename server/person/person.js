const mongoose = require('mongoose');
const personConstants = require('./constants');
const addressConstants = require('../address/constants');

const { Schema } = mongoose;
const { PERSON_REF } = personConstants;
const { ADDRESS_REF } = addressConstants;

const personSchema = new Schema({
    name: {
        first: String,
        last: String
    },
    email: String,
    phone: String,
    address: {
        type: Schema.Types.ObjectId,
        ref: ADDRESS_REF
    }
});

personSchema.virtual('fullName').get(() =>
    this.name.first + ' ' + this.name.last
);

module.exports = mongoose.model(PERSON_REF, personSchema);

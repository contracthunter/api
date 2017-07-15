const mongoose = require('mongoose');
const companyConstants = require('./constants');
const addressConstants = require('../address/constants');
const jobConstants = require('../job/constants');
const personConstants = require('../person/constants');

const { Schema } = mongoose;
const { COMPANY_REF } = companyConstants;
const { ADDRESS_REF } = addressConstants;
const { JOB_REF } = jobConstants;
const { PERSON_REF } = personConstants;

console.log('jobConstants', jobConstants);

const companySchema = new Schema({
    name: String,
    address: {
        type: Schema.Types.ObjectId,
        ref: ADDRESS_REF
    },
    contracts: [{
        type: Schema.Types.ObjectId,
        ref: JOB_REF
    }],
    staff: [{
        type: Schema.Types.ObjectId,
        ref: PERSON_REF
    }]
});

module.exports = mongoose.model(COMPANY_REF, companySchema);

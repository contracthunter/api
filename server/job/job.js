const mongoose = require('mongoose');
const jobConstants = require('./constants');
const companyConstants = require('../company/constants');

const { Schema } = mongoose;
const { JOB_REF } = jobConstants;
const { COMPANY_REF } = companyConstants;

const jobSchema = new Schema({
    company: {
        type: Schema.Types.ObjectId,
        ref: COMPANY_REF
    },
    minRate: Number,
    maxRate: Number
});

module.exports = mongoose.model(JOB_REF, jobSchema);
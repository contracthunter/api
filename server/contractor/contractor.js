const mongoose = require('mongoose');
const contractorConstants = require('./constants');
const personConstants = require('../person/constants');
const skillConstants = require('../skill/constants');

const { Schema } = mongoose;
const { CONTRACTOR_REF } = contractorConstants;
const { PERSON_REF } = personConstants;
const { SKILL_REF } = skillConstants;

const contractorSchema = new Schema({
    available: Boolean,
    availableFrom: Date,
    dayRate: Number,
    person: {
        type: Schema.Types.ObjectId,
        ref: PERSON_REF
    },
    skills: [{
        type: Schema.Types.ObjectId,
        ref: SKILL_REF
    }]
});

module.exports = mongoose.model(CONTRACTOR_REF, contractorSchema);

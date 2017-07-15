const mongoose = require('mongoose');
const skillConstants = require('./constants');

const { Schema } = mongoose;
const { SKILL_REF, SKILL_LEVELS } = skillConstants;

const skillSchema = new Schema({
    label: String,
    level: {
        type: String,
        enum: Object.keys(SKILL_LEVELS).map(key => SKILL_LEVELS[key]),
        default: SKILL_LEVELS.JUNIOR
    }
});

module.exports = mongoose.model(SKILL_REF, skillSchema);
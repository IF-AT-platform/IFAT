const mongoose = require('mongoose');

const teamSchema = mongoose.Schema({
    teamAllocationNumber: {
        type: Number,
    },
    teamMembers: {
        type: [{type: mongoose.Schema.ObjectId, ref: 'Student'}],
    },
    teamAnswers: {
        type: [String],
    },
    teamScores: {
        type: Number,
    },
});

module.exports = mongoose.model('team', teamSchema);
module.exports.teamSchema = teamSchema;

const mongoose = require('mongoose');

const studentSchema = mongoose.Schema({
    name: {
        type: String,
    },
    individualAnswers: {
        type: [String],
    },
    individualScores: {
        type: Number,
    },
    teamAllocationNumber: {
        type: Number,
    },
});

module.exports = mongoose.model('Student', studentSchema);
module.exports.studentSchema = studentSchema;

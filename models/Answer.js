const mongoose = require('mongoose');

const answerSchema = mongoose.Schema({
    answers: {
        type: [String],
    },
});

module.exports = mongoose.model('Answer', answerSchema);
module.exports.answerSchema = answerSchema;

const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please provide a course title'],
        trim: true
    },
    subject: {
        type: String,
        required: [true, 'Please provide a subject'],
        trim: true
    },
    description: String,
    content: [{
        type: {
            type: String,
            enum: ['video', 'text'],
            required: true
        },
        title: String,
        url: String
    }],
    exercises: [{
        type: {
            type: String,
            enum: ['mcq', 'qa'],
            required: true
        },
        questions: [{
            question: String,
            options: [String],
            correctAnswer: String
        }]
    }]
}, {
    timestamps: true
});

module.exports = mongoose.model('Course', courseSchema);
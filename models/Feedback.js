const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    Fullname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: 'This field is required.'
    },
    Feedback: {
        type: String,
        required: true
    },
})
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    Countries: {
        type: String,
        required: true
    },
    Specialty: {
        type: Date,
        required: true
    },
    Expectedtimetocome: {
        type: Date,
        required: true
    },
})
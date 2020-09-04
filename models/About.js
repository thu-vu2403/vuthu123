const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    Ourpolicy : {
        type: String,
        required: true
    },
    Yourbenefits: {
        type: Date,
        required: true
    },
    Howtousethisportal: {
        type: Date,
        required: true
    },
})
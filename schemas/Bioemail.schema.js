const mongoose = require('mongoose');

const bioEmailSchema = mongoose.Schema(
    {
    bio_email: [String],   
    of_url: String,
    subscribers: Number,
    }
);


module.exports = bioEmailSchema;
const mongoose = require('mongoose');

const ofDataRawEmailsSchema = mongoose.Schema(
    {
            of_username: String,
            of_url: String,
            ig_username: String,
            ig_url: String,
            is_validated: Boolean,
            is_valid: { type: String, default: null },
            validated_ig_url: String,
            follower_count: Number,
            name: String,
            bio: String,
            likes: Number,
            subscribers: Number,
            emails: Boolean,
            phoneNumbers: Boolean,
            websites: [String]
    }
);


module.exports = ofDataRawEmailsSchema;
const mongoose = require('mongoose');
const ofDataRawEmailsSchema = require('../schemas/Ofdatarawemails.schema');

const OfDataRawEmails = mongoose.model('of_data_raw_emails', ofDataRawEmailsSchema);

module.exports = OfDataRawEmails;
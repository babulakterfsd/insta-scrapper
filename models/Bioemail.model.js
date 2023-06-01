const mongoose = require('mongoose');
const bioEmailSchema = require('../schemas/BioEmail.schema');

const BioEmail = mongoose.model('Bioemail', bioEmailSchema);

module.exports = BioEmail;
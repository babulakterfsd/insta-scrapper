const express = require('express');
const BioemailController = require('../../controllers/Bioemail.controller');
const router = express.Router();


router.route('/').get(BioemailController.getBioEmais).post(BioemailController.addNewBioEmail)

module.exports = router;

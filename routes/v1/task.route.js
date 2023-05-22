const express = require('express');
const { routes } = require('../../app');
const TaskController = require('../../controllers/Task.controller');

const router = express.Router();


router.route('/updateigdatam').get(TaskController.getAllTheUserNames)

module.exports = router;

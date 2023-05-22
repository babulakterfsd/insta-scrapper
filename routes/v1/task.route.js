const express = require('express');
const { routes } = require('../../app');
const TaskController = require('../../controllers/Task.controller');

const router = express.Router();


router.route('/').get(TaskController.getAllTheUserNames)

module.exports = router;

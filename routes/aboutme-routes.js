const express = require('express');
const aboutmeRoute = express.Router();
const aboutmeController = require('../controllers/aboutme-controller');
const aboutemHelper = require('../services/aboutme-helper')

aboutmeRoute.get('/', aboutemHelper.determineResponse, aboutmeController.index)

module.exports = aboutmeRoute;
const express = require('express');
const postRoutes = express.Router();
const postController = require('../controllers/post-controller')
const postHelper = require('../services/post-helpers');

//GET route for all posts.
postRoutes.get('/', postHelper.getAllPosts, postController.index);

module.exports = postRoutes;
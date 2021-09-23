const express = require('express');
const PostsController = require('./controllers/PostsController');

const router = express.Router();
router.get('/ping', (req, res) => res.send({ status: 'pong' }));
router.get('/posts', PostsController.getPosts);

module.exports = router;

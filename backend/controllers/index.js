const express = require('express');
const router = express.Router();

// Load the router module for users.
router.use('/users', require('./users'))
// Load the router module for posts.
router.use('/posts', require('./posts'))

// Define the home page route.
router.get('/', function(req, res) {
    res.send('The backend is running here')
})

module.exports = router
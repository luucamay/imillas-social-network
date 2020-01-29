const express = require('express');
const router = express.Router();

// Load the router module for users.
router.use('/api/users', require('./users'))
// Load the router module for posts.
router.use('/api/posts', require('./posts'))

// Define the home page route.
router.get('/api', function(req, res) {
    res.send('The backend is running here')
})

module.exports = router

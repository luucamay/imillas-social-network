const express = require('express');
const router = express.Router();

// Load the router module for goals.
router.use('/users', require('./users'))

// Define the home page route.
router.get('/', function(req, res) {
    res.send('The backend is running here')
})

module.exports = router
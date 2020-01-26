const express = require('express');
const router = express.Router();
const User = require('../models/user')

// ROUTES FOR THE USERS
// =============================================================================
// POST a new user
// (accessed at POST http://localhost:8080/users)
router.post('/', function (req, res) {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    User.create(username, email, password, function (err, user) {
        if (err) { res.send(err) }
        res.sendStatus(200);
    })
})

// GET all users (Accessed at GET http://localhost:8080/users)
router.get('/', function (req, res) {
    User.all(function (err, users) {
        if (err) res.send(err);
        res.json(users);
    })
});

// DELETE a user
// (accessed at DELETE http://localhost:8080/users/user_id)
router.delete('/:id', function (req, res) {
    const user_id = req.params.id
    User.delete(user_id, function (err, user) {
        if (err) { res.send(err) }
        res.sendStatus(200);
    })
})

module.exports = router
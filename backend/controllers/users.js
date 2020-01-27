const express = require('express');
const router = express.Router();
const User = require('../models/user');
const expressjwt = require('express-jwt');
const jwt = require('jsonwebtoken');

const jwtCheck = expressjwt({
    secret: "MiSecretito"
});

// ROUTES FOR THE USERS
// =============================================================================
// POST login (Accessed at GET http://localhost:8080/users/login)
router.post('/login', function (req, res) {
    const email = req.body.email;
    const password = req.body.password;
    User.login(email, password, function (err, user) {
        if (err) return res.send(err);
        if (!user) {
            res.json('Usuario o password incorrectos')
        } else {
            const token = jwt.sign(
                {
                    sub: 1, email: user.email
                },
                "miSecretito",
                {
                    expiresIn: "3 hours"
                });
            res.json({ token: token, username: user.username, id:user._id })
        }
    });
});

// POST a new user
// (accessed at POST http://localhost:8080/users)
router.post('/', function (req, res) {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    User.create(username, email, password, function (err, user) {
        if (err) { res.send(err) }
        res.sendStatus(200);
    });
});

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
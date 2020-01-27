const express = require('express');
const router = express.Router();
const Post = require('../models/post');
const expressjwt = require('express-jwt');

const jwtCheck = expressjwt({
    secret: "MiSecretito"
});

// ROUTES FOR THE POSTS
// =============================================================================
// POST a new post
router.post('/', function (req, res) {
    const content = req.body.content;
    const type = req.body.type;
    const user_id = req.body.user_id;
    Post.create(user_id, content, type, function (err, user) {
        if (err) { res.send(err) }
        res.sendStatus(200);
    });
});

// GET all the posts
router.get('/', function (req, res) {
    Post.all(function (err, posts) {
        if (err) res.send(err);
        res.json(posts);
    })
});

// GET all posts of a specific type
router.get('/:type', function (req, res) {
    const post_type = req.params.type;
    Post.allOfType(post_type, function (err, posts) {
        if (err) res.send(err);
        res.json(posts);
    })
});

// GET a post by id
router.get('/id/:id', function (req, res){
    const post_id = req.params.id;
    Post.getOne(post_id, function (err, post){
        if (err) res.send(err);
        res.json(post);
    });
});

// Update a post
router.put('/', function (req, res){
    const post = {
        _id: req.body.post_id,
        user_id: req.body.user_id,
        content: req.body.content,
        type:req.body.type
    }
    Post.update(post, function (err, newPost){
        if (err) res.send(err);
        res.json(newPost);
    });
});

// DELETE a post
router.delete('/:id', function (req, res) {
    const post_id = req.params.id;
    Post.delete(post_id, function (err, post) {
        if (err) { res.send(err) }
        res.sendStatus(200);
    })
});

module.exports = router
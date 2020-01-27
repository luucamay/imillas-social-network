const { dbPosts } = require('./db');

// Insert a new post in the database and return its id.
exports.create = function (user_id, content, type, callback) {
    const post = {
        user_id: user_id,
        content: content,
        type: type
    }
    dbPosts.insert(post, callback)
}

// Get all posts.
exports.all = function (callback) {
    dbPosts.find({}).sort({
        updatedAt: -1
    }).exec(callback)
}

// Get all posts from specific type.
exports.allOfType = function (post_type, callback) {
    dbPosts.find({
        type: post_type
    }).sort({
        updatedAt: -1
    }).exec(callback)
}

// Get a post by id.
exports.getOne = function (post_id, callback) {
    const post = {
        _id: post_id
    }
    dbPosts.findOne(post).exec(callback)
}

// Update a post.
exports.update = function(post, callback){
    console.log(post)
    dbPosts.update({
        _id: post._id
    }, post, {}, callback)
}

// Delete the post.
exports.delete = function (post_id, callback) {
    dbPosts.remove({
        _id: post_id
    }, {}, callback)
}
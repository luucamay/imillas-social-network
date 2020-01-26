const { dbUsers } = require('./db');

// Login as a user to the database
exports.login = function (email, password, callback) {
    const user = {
        email: email,
        password: password
    }
    dbUsers.findOne(user).exec(callback)
}

// Insert a new user in the database and return its id.
exports.create = function (username, email, password, callback) {
    const user = {
        username: username,
        email: email,
        password: password
    }
    dbUsers.insert(user, callback)
}

// Get all users.
exports.all = function (callback) {
    dbUsers.find({}).sort({
        updatedAt: -1
    }).exec(callback)
}

// Delete the goal with this slug.
exports.delete = function (user_id, callback) {
    dbUsers.remove({
        _id: user_id
    }, {}, callback)
}
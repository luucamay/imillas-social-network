// DATABASE
var Datastore = require('nedb');

// Users collection
var dbUsers = new Datastore({
    filename: 'users.db', // provide a path to the database file
    autoload: true, // automatically load the database
    timestampData: true // automatically add and manage the fields createdAt and updatedAt
});

// Posts collection
var dbPosts = new Datastore({
    filename: 'posts.db', // provide a path to the database file
    autoload: true, // automatically load the database
    timestampData: true // automatically add and manage the fields createdAt and updatedAt
});

module.exports = {dbUsers, dbPosts}
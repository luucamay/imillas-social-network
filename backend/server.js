// DEPENDENCIES
var express = require('express'),
  app = express(),
  bodyParser = require('body-parser');

// SETUP
var   port = Number(process.env.PORT || 8080);

// Set up body-parser.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.set('view engine', 'handlebars');

// DATABASE
var Datastore = require('nedb');
var db = new Datastore({
  filename: 'users.db', // provide a path to the database file
  autoload: true, // automatically load the database
  timestampData: true // automatically add and manage the fields createdAt and updatedAt
});

// ROUTES
// GET all users (Accessed at GET http://localhost:8080/users)
app.get('/users', function(req, res) {
  db.find({}).sort({
    updatedAt: -1
  }).exec(function(err, users) {
	  if (err) res.send(err);
	  res.json(users);
  });
});

// GET a user (Accessed at GET http://localhosto:8080/users/user_id)
app.get('/users/:id', function(req, res) {
	  var user_id = req.params.id;
	  db.findOne({
		      _id: user_id
		    }, {}, function(err, user) {
			        if (err) res.send(err);
			        res.json(user);
			      });
});

// START THE SERVER
app.listen(port, function() {
  console.log('Listening on port ' + port);
});
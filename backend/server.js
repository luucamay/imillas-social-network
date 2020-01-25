// DEPENDENCIES
var express = require('express'),
  app = express(),
  bodyParser = require('body-parser'),
  cors = require('cors'),
  expressjwt = require('express-jwt'),
  jwt = require('jsonwebtoken');

// SETUP
var   port = Number(process.env.PORT || 8080);

// Set up body-parser.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

// Set up cors
app.use(cors());

// Set up express-jwt
const jwtCheck = expressjwt({
  secret: "MiSecretito"
});

app.set('view engine', 'handlebars');

// DATABASE
var Datastore = require('nedb');
var db = new Datastore({
  filename: 'users.db', // provide a path to the database file
  autoload: true, // automatically load the database
  timestampData: true // automatically add and manage the fields createdAt and updatedAt
});

// ROUTES
// POST login (Accessed at GET http://localhost:8080/login)
app.post('/login', function (req, res) {
  // TODO check email first then password
  db.findOne({
    email: req.body.email,
    password: req.body.password
  }, {}, function (err, user) {
    if (err) return res.send(err);
    if (!user) {
      res.json('Usuario no encontrado')
    }
    const token = jwt.sign(
      {
        sub: 1, email: user.email
      },
      "miSecretito",
      {
        expiresIn: "3 hours"
      });
    res.status(200).json({token: token, username: user.username})
  });
});

// GET all users (Accessed at GET http://localhost:8080/users)
app.get('/users', jwtCheck, function(req, res) {
  db.find({}).sort({
    updatedAt: -1
  }).exec(function(err, users) {
	  if (err) res.send(err);
	  res.json(users);
  });
});

// GET a user (Accessed at GET http://localhosto:8080/users/username)
app.get('/users/:email', function(req, res) {
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
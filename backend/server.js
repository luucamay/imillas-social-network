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

// Use controllers.
app.use(require('./controllers'))

// PROD
app.use(express.static(path.join(__dirname, '../frontend/build')))

app.get('*', (_, res) => {
  res.sendFile(path.join(__dirname, '../frontend/build/index.html'), (err) => {
    if (err) {
      res.status(500).send(err)
    }
  })
})

// START THE SERVER
app.listen(port, function() {
  console.log('Listening on port ' + port);
});
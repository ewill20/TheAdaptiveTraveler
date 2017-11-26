// Here we require the various dependencies //
var http = require('http');
const express = require('express');
const path = require('path');
const mysql = require('mysql');

// Sets up the Express app to handle data parsing //
const app = express();
var passport = require('passport');
var session = require('express-session');
const bodyParser = require('body-parser');


// For Passport
 
app.use(session({ secret: 'keyboard cat',resave: true, saveUninitialized:true})); // session secret

app.use(passport.initialize());

app.use(passport.session()); // persistent login sessions
const PORT = process.env.PORT || 5000;


app.get('/', function(req, res) {
  res.render(path.join(__dirname, "landing.html"))
});
app.get('/about', function(req, res) {
  res.render(path.join(__dirname, "About.html"))
});app.get('/contact', function(req, res) {
  res.render(path.join(__dirname, "Contact.html"))
});app.get('/index1.2', function(req, res) {
  res.render(path.join(__dirname, "index1.2"))
});app.get('/index1.3', function(req, res) {
  res.render(path.join(__dirname, "index1.3"))
});
// Serving up static assets //
app.use(express.static('client/build'));

// Standard code for body-parser //
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
// ROUTER
// This points our server in the right direction via a series of "routes" //
// =======================================================================//
// require("./routes/apiRoutes")(app);
// require("./routes/htmlRoutes")(app);
// Function to handle requests and responses //
var env = require('dotenv').load();

//Models
var models = require("./models");
 
//Sync Database
models.sequelize.sync().then(function() {
 
    console.log('Nice! Database looks fine')
 
}).catch(function(err) {
 
    console.log(err, "Something went wrong with the Database Update!")
 
});
function handleRequest (request, response) {

// Statement triggered (client-side) when the port is visited //

response.end("You're Connected!" + request.url);
}

// Node http package to create server //
var server = http.createServer(handleRequest);

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});


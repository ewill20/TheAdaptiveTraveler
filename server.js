// Here we require the various dependencies //
var http = require('http')
const express = require('express')
var app = express()
var passport = require('passport')
var session = require('express-session')
var bodyParser = require('body-parser')
var env = require('dotenv').load()
var exphbs = require('express-handlebars')
const path = require('path')
const mysql = require('mysql')

const PORT = process.env.PORT || 5000;


// Serving up static assets //
app.use(express.static('public'));

// Standard code for body-parser //
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));


// For Passport //
app.use(session({ secret: 'keyboard cat',resave: true, saveUninitialized:true})); // session secret
    app.use(passport.initialize());
    app.use(passport.session()); // persistent login sessions

//For Handlebars
    app.set('views', './views');
    app.engine('hbs', exphbs({extname: '.hbs', defaultLayout: "main" }));
    app.set('view engine', '.hbs');

  app.get('/', function(req, res){
	res.send('Welcome');
});

//Models
    var models = require("./models");

//Routes
    var authRoute = require('./routes/auth.js')(app,passport);


    //load passport strategies
    require('./config/passport/passport.js')(passport, models.user);


  // For Passport
 
  app.use(session({ secret: 'keyboard cat',resave: true, saveUninitialized:true})); // session secret
 
  app.use(passport.initialize());
 
  app.use(passport.session()); // persistent login sessions
 
 
 
  app.get('/', function(req, res) {
// ROUTER
// This points our server in the right direction via a series of "routes" //
// =======================================================================//
// require("./routes/apiRoutes")(app);
// require("./routes/htmlRoutes")(app);
// Function to handle requests and responses //
var env = require('dotenv').load();
 
//Sync Database
models.sequelize.sync({ force:true }).then(function() {

app.listen(5000, function(err){
    if(!err)
    console.log("Site is live"); else console.log(err)
  console.log('Nice! Database looks fine')
  }); 
    
 
}).catch(function(err) {
 
    console.log(err, "Something went wrong with the Database Update!")
 
});




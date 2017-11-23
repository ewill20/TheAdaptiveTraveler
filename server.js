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


// For Passport
 
app.use(session({ secret: 'keyboard cat',resave: true, saveUninitialized:true})); // session secret

app.use(passport.initialize());

app.use(passport.session()); // persistent login sessions
const PORT = process.env.PORT || 3306;


app.get('/', function(req, res) {
  res.send('Welcome')
});
// Serving up static assets //
app.use(express.static('client/build'));

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
    app.set('views', './app/views')
    app.engine('hbs', exphbs({extname: '.hbs'}));
    app.set('view engine', '.hbs');

app.get('/', function(req, res){
	  res.send('Welcome');
	});

//Models
    var models = require("./app/models");

//Routes
    var authRoute = require('./app/routes/auth.js')(app,passport);


    //load passport strategies
    require('./app/config/passport/passport.js')(passport,models.user);


    //Sync Database
   	models.sequelize.sync().then(function(){
    console.log('Nice! Database looks fine')

    }).catch(function(err){
    console.log(err,"Something went wrong with the Database Update!")
    });



	app.listen(5000, function(err){
		if(!err)
		console.log("Site is live"); else console.log(err)

	});

function handleRequest (request, response) {

// Statement triggered (client-side) when the port is visited //

response.end("You're Connected!" + request.url);
}

// Node http package to create server //
var server = http.createServer(handleRequest);



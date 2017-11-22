// Here we require the various dependencies //
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mysql = require('mysql');

// Sets up the Express app to handle data parsing //
const app = express();
const PORT = process.env.PORT || 3306;

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
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);
// Function to handle requests and responses //

function handleRequest (request, response) {

// Statement triggered (client-side) when the port is visited //

response.end("You're Connected!" + request.url);
}

// Node http package to create server //
var server = http.createServer(handleRequest);

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});


// Here we require/import the HTTP module //
var http = require("http");
var express = require('express');
var bodyParser = require('body-parser');


//Tells node that we are creating an express server //
var app = express();
// Port definition //
var PORT = process.env.PORT || 3306;

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


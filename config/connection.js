// Initializes the npm packages utilized //
var mysql = require("mysql");
var inquirer = require('inquirer');
require ("console.table");

// Intializes the connection variable to sync with MySQL database //
var connection = mysql.createConnection({
	host:"localhost",
	port: 3306,

	// Username //
	user:'root',

	// Password //
	password: '66Mu$t@ng',
	database: 'adaptive_traveler'
});

	// Creates the connection with the server and loads the list of locations //
	connection.connect(function(err) {
		if(err) {
			console.error("error connecting: " + err.stack);
		}
		loadLocationList();
	});

		// Get location list from the database //
		function loadLocationList() {
			connection.query("SELECT * FROM locations", function(err, res) {
				if(err) throw err;

				loadLocationOptions(res);
			});
		}

		// Load the location options and pass in the location information from the database //
		function loadLocationOptions(locations) {
			inquirer.prompt ({
				type: "list",
				name: "choice",
				choices: ["Add Location", "Edit Location", "Delete Location", "View All Locations"],
				message: "Select a Choice"
			})
			.then(function(val) {
				switch (val.choice) {
					case "Add Location":
					console.table(locations);
					loadLocationList();
					break;
					case "Edit Location":
					editLocation(locations);
					break;
					case "Delete Location":
					removeLocation(locations);
					break;
					case "View All Locations":
					loadLocationList(locations);
					break;
				}
			});
		}











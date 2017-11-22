const mongoose = require('mongoose');
const db = require('../models');
mongoose.Promise = global.Promise;

// Empties locations information and inserts the data below //

mongoose.connect(
	process.env.MONGODB_URI || "mongodb://localhost/"
	{
		useMongoClient: true
	}
);

const locationSeed = [
	{
		city: "Berlin",
		state: "Berlin",
		country: "Germany",
		date: new Date(Date.now())
	},
	{
		city: "Hangzhou",
		state: "Zhejiang",
		country: "China",
		date: new Date(Date.now())
	},
	{
		city: "Topeka",
		state: "Kansas",
		country: "USA",
		date: new Date(Date.now())
	},
	{
		city: "Tokyo",
		state: "Tokyo",
		country: "Japan",
		date: new Date(Date.now())
	},
	{
		city: "Bangkok",
		state: "Bangkok",
		country: "Thailand",
		date: new Date(Date.now())
	},
	{
		city: "Manila",
		state: "National Capital Region",
		country: "The Philippines",
		date: new Date(Date.now())
	},
	{
		city: "Paris",
		state: "Île-de-France",
		country: "France",
		date: new Date(Date.now())
	},
	{
		city: "Rome",
		state: "Lazio",
		country: "Italy",
		date: new Date(Date.now())
	},
	{
		city: "Los Angeles",
		state: "California",
		country: "USA",
		date: new Date(Date.now())
	},
	{
		city: "Amsterdam",
		state: "North Holland",
		country: "The Netherlands",
		date: new Date(Date.now())
	}
	];

	db.locations
		.remove({})
		.then(() => db.locations.collection.insertMany(locationSeed))
		.then(data => {
			console.log(data.insertIds.length + " records inserted!");
			process.exit(0);
		})
		.catch(err => {
			console.error(err);
			process.exit(1);
		});






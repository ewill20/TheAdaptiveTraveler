const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const locationsSchema = new Schema({
	city: {type: String, required: true	},
	state: {type: String, required: false },
	country: {type: String, required: true },
	date: { type: Date, default: Date.now }
});

const locations = mongoose.model("Locations", locationsSchema);

module.exports = Locations;
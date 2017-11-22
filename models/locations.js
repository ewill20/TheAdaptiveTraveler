module.exports = function(sequeize, DataTypes) {
	var locations = sequeize.define('locations', {
		text: DataTypes.STRING,
		complete: DataTypes.BOOLEAN
	});
	return locations;
};
// models/user.js
module.exports = function(sequelize, DataTypes) {

var User = sequelize.define('User', {
    handle: DataTypes.STRING,
    password: DataTypes.STRING,

  });

return User;

};
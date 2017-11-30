// models/user.js
module.exports = function(sequelize, DataTypes) {

var User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    location: DataTypes.STRING,
    handle: DataTypes.STRING,
    password: DataTypes.STRING
    
    
  });

return User;

};

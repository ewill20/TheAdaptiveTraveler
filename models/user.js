// models/user.js
module.exports = function(sequelize, Sequelize) {

var User = sequelize.define('User', {
    username: Sequelize.STRING,
    password: Sequelize.STRING,

  });

return User;

};
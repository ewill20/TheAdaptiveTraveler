// models/user.js
module.exports = function(sequelize, Sequelize) {

var User = sequelize.define('user', {
    username: Sequelize.STRING,
    password: Sequelize.STRING,

  });

return User;

};
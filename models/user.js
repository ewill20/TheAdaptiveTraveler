// models/user.js
module.exports = function(sequelize, DataTypes) {

const User = sequelize.define('user', {
    id: {
      type: DataTypes.UUID,
      autoIncrement: true,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    name: {
      type: DataTypes.STRING,
      required: true
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true
      }
    },
    location: {
      type: DataTypes.STRING,
    },
    handle: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        is: /^[a-z0-9\_\-]+$/i
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    status: {
      type: DataTypes.ENUM('active', 'inactive'),
      defaultValue: 'active'
    }, 
  
  });

return User;

};

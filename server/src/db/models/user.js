'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.belongsTo(models.Deck, {
        foreignKey: 'deck_id',
        as: 'deck'
      });
    }
  }
  User.init({
    username: DataTypes.STRING,
    score: DataTypes.INTEGER,
    deck_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
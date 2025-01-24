'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Deck extends Model {
    static associate(models) {
      Deck.hasMany(models.User, {
        foreignKey: 'deck_id',
        as: 'users'
      });
      Deck.hasMany(models.Card, {
        foreignKey: 'deck_id',
        as: 'cards'
      });
    }
  }
  Deck.init({
    title: DataTypes.STRING,
    img_path: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Deck',
  });
  return Deck;
};
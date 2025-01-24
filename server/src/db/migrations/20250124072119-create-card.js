'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Cards', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      question: {
        type: Sequelize.STRING,
        allowNull: false
      },
      option1: {
        type: Sequelize.STRING,
        allowNull: false
      },
      option2: {
        type: Sequelize.STRING,
        allowNull: false
      },
      option3: {
        type: Sequelize.STRING,
        allowNull: false
      },
      option4: {
        type: Sequelize.STRING,
        allowNull: false
      },
      right_answer: {
        type: Sequelize.STRING,
        allowNull: false
      },
      points: {
        type: Sequelize.BIGINT,
        defaultValue: 0
      },
      img_path: {
        type: Sequelize.STRING,
        defaultValue: ''
      },
      deck_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Decks',
          key: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Cards');
  }
};
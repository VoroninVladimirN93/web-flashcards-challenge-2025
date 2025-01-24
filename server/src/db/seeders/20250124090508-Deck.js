'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Decks',
      [
        {
          id: 2, // Соответствует topic_id из вашего примера
          title: 'Игры', // Название темы/колоды
          img_path: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Dice.jpg/640px-Dice.jpg', // Путь к изображению (если нужно)
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Decks', null, {});
  },
};
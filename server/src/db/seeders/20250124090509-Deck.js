'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Decks',
      [
        {
          id: 3, // Уникальный идентификатор колоды
          title: 'Эльбрус и не только', // Название колоды
          img_path: '', // Путь к изображению (если нужно)
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Decks', { id: 3 }, {});
  },
};
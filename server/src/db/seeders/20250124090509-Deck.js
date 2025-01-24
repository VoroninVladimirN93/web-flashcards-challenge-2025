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
          img_path: 'https://habrastorage.org/getpro/moikrug/uploads/company/100/007/092/7/logo/medium_a88920f785a30e86c6e4a0cebbc66644.png', // Путь к изображению (если нужно)
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
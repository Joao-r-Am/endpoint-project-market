'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('People', [
      {
        createdAt: '2022-04-17',
        updatedAt: new Date()
     },
      {
        createdAt: '2022-04-17',
        updatedAt: new Date()
     },
      {
        createdAt: '2022-04-17',
        updatedAt: new Date()
     },
      {
        createdAt: '2022-04-20',
        updatedAt: new Date()
     },
      {
        createdAt: '2022-04-21',
        updatedAt: new Date()
     },
      {
        createdAt: '2022-04-22',
        updatedAt: new Date()
     },
      {
        createdAt: '2022-04-23',
        updatedAt: new Date()
     },
      {
        createdAt: '2022-04-24',
        updatedAt: new Date()
     },
      {
        createdAt: '2022-04-25',
        updatedAt: new Date()
     },
      {
        createdAt: '2022-04-26',
        updatedAt: new Date()
     },
    ], {});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('Compras', null, {});
  }
};

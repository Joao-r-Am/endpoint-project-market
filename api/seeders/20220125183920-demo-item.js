'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('People', [
      {
        compra_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
        },
      {
        compra_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
        },
      {
        compra_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
        },
      {
        compra_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
        },
      {
        compra_id: 5,
        createdAt: new Date(),
        updatedAt: new Date()
        },
      {
        compra_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
        },
      {
        compra_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
        },
      {
        compra_id: 8,
        createdAt: new Date(),
        updatedAt: new Date()
        },
      {
        compra_id: 9,
        createdAt: new Date(),
        updatedAt: new Date()
        },
      {
        compra_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
        },
      {
        compra_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
        },
    ], {});

  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('Item-compras', null, {});
  }
};

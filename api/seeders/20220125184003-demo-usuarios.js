'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('People', [
      {
        nome: 'Otávio',
        createdAt: new Date(),
        updatedAt: new Date()
     },
      {
        nome: 'Renan',
        createdAt: new Date(),
        updatedAt: new Date()
     },
      {
        nome: 'Christian',
        createdAt: new Date(),
        updatedAt: new Date()
     },
      {
        nome: 'Willian',
        createdAt: new Date(),
        updatedAt: new Date()
     },
      {
        nome: 'Giovany',
        createdAt: new Date(),
        updatedAt: new Date()
     },
      {
        nome: 'Raul',
        createdAt: new Date(),
        updatedAt: new Date()
     },
      {
        nome: 'Lon',
        createdAt: new Date(),
        updatedAt: new Date()
     },
      {
        nome: 'Geyse',
        createdAt: new Date(),
        updatedAt: new Date()
     },
      {
        nome: 'Andressa',
        createdAt: new Date(),
        updatedAt: new Date()
     },
      {
        nome: 'Felipe',
        createdAt: new Date(),
        updatedAt: new Date()
     },
    ], {});
  },

  async down (queryInterface, Sequelize) {  
    await queryInterface.bulkDelete('Usuarios', null, {});
  }
};

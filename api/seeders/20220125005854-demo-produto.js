'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
   
     await queryInterface.bulkInsert('produtos', [
    {
     nome: 'Leite em pó',
     preco: 5,
     createdAt: new Date(),
     updatedAt: new Date()
     },
    {
     nome: 'Leite Desntado',
     preco: 9,
     createdAt: new Date(),
     updatedAt: new Date()
     },
    {
     nome: 'Arroz',
     preco: 5,
     createdAt: new Date(),
     updatedAt: new Date()
     },
    {
     nome: 'Feijão',
     preco: 8,
     createdAt: new Date(),
     updatedAt: new Date()
     },
    {
     nome: 'Batata',
     preco: 2,
     createdAt: new Date(),
     updatedAt: new Date()
     },
    {
     nome: 'Leite Condensado',
     preco: 10,
     createdAt: new Date(),
     updatedAt: new Date()
     },
    {
     nome: 'Leite de coco',
     preco: 50,
     createdAt: new Date(),
     updatedAt: new Date()
     },
    {
     nome: 'Banana',
     preco: 1,
     createdAt: new Date(),
     updatedAt: new Date()
     },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('produtos', null, {});
  }
};

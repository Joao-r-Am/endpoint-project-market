'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Usuarios', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nome_usuario: {
        type: Sequelize.STRING
      },
      produto_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Produtos', key: 'id' }
      },
      comprador_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Compras', key: 'id' }
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Usuarios');
  }
};
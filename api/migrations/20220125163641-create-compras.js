'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Compras', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      data_compra: {
        type: Sequelize.DATEONLY
      },
      cliente_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Produtos', key: 'id' }
      },
      compra_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Item_compras', key: 'id' }
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
    await queryInterface.dropTable('Compras');
  }
};
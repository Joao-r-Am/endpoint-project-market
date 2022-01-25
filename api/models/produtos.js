'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Produtos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Produtos.hasMany(models.Compras, {
        foreignKey: 'produto_id'
      })
      Produtos.belongsTo(models.Usuarios, {
        foreignKey: 'cliente_id'
      })
    }
  }
  Produtos.init({
    nome: DataTypes.STRING,
    preco: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Produtos',
  });
  return Produtos;
};
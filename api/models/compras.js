'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Compras extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Compras.hasMany(models.Usuarios, {
        foreignKey: 'produto_id'
      })
      Compras.belongsTo(models.Produtos, {
        foreignKey: 'comprador_id'
      });
      Compras.belongsTo(models.Item_compras, {
        foreignKey: 'item_id'
      });
    }
  }
  Compras.init({
    data_compra: DataTypes.DATEONLY
  }, {
    sequelize,
    modelName: 'Compras',
  });
  return Compras;
};
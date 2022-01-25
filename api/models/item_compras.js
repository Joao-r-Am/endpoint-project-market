'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Item_compras extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Item_compras.belongsTo(models.Compras, {
        foreignKey: 'compra_id'
      })
    }
  }
  Item_compras.init({
    nome_item: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Item_compras',
  });
  return Item_compras;
};
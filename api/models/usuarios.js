'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Usuarios extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Usuarios.belongsTo(models.Produtos, {
        foreignKey: 'id_compra'
      });
      Usuarios.belongsTo(models.Compras, {
        foreignKey: 'id_comprado'
      });
    }
  }
  Usuarios.init({
    nome_usuario: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Usuarios',
  });
  return Usuarios;
};
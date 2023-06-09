"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Cart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, Product }) {
      // define association here
      Cart.belongsTo(User, { foreignKey: "idUser" });
      Cart.belongsTo(Product, { foreignKey: "idProduct" });
    }
  }
  Cart.init(
    {
      idUser: DataTypes.STRING,
      idProduct: DataTypes.STRING,
      count: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Cart",
    }
  );
  return Cart;
};

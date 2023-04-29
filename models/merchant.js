"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Merchant extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User }) {
      // define association here
      Merchant.belongsTo(User, { foreignKey: "idUser" });
    }
  }
  Merchant.init(
    {
      idUser: DataTypes.STRING,
      name: DataTypes.STRING,
      category: DataTypes.STRING,
      city: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Merchant",
    }
  );
  return Merchant;
};

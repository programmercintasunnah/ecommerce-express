"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Cart, Comment }) {
      // define association here
      Product.hasMany(Cart, {
        foreignKey: "idProduct",
        as: "cart",
      });
      Product.hasMany(Comment, {
        foreignKey: "idProduct",
        as: "comments",
      });
    }
  }
  Product.init(
    {
      name: DataTypes.STRING,
      price: DataTypes.STRING,
      img1: DataTypes.STRING,
      img2: DataTypes.STRING,
      img3: DataTypes.STRING,
      category: DataTypes.STRING,
      desc: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Product",
    }
  );
  return Product;
};

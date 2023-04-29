"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Cart, Comment, Order, Merchant }) {
      User.hasOne(Cart, {
        foreignKey: "idUser",
        as: "cart",
      });
      User.hasOne(Comment, {
        foreignKey: "idUser",
        as: "comment",
      });
      User.hasOne(Order, {
        foreignKey: "idUser",
        as: "order",
      });
      User.hasOne(Merchant, {
        foreignKey: "idUser",
        as: "merchant",
      });
    }
  }
  User.init(
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      is_merchant: DataTypes.BOOLEAN,
      phone: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};

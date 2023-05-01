const { Order } = require("../../models");

const getOrder = async (idUser) => {
  try {
    const OrderUser = await Order.findAll({
      where: {
        idUser,
      },
    });
    return OrderUser;
  } catch (err) {
    console.log(err);
  }
};

const createOrder = async (data) => {
  try {
    const newOrder = await Order.create(data);
    return newOrder;
  } catch (err) {
    console.log(err);
  }
};

const getListOrder = async () => {
  try {
    const listOrder = await Order.findAll();
    return listOrder;
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  getOrder,
  createOrder,
  getListOrder,
};

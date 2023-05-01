const express = require("express");
const {
  getOrder,
  createOrder,
  getListOrder,
} = require("../../services/orders");
const orderRouter = express.Router();

orderRouter.get("/", async (req, res) => {
  const { idUser } = req.query;

  if (idUser) {
    const user = await getOrder(idUser);
    if (!user) {
      return res.status(500).send("Can't get user Order");
    }
    res.status(200).send(user);
  } else {
    const listOrder = await getListOrder();
    if (!listOrder) {
      return res.status(500).send("Can't get list Order");
    }

    res.status(200).send(listOrder);
  }
});

orderRouter.post("/", async (req, res) => {
  const { idUser, phone, address, name, total } = req.body;

  const Order = await createOrder({
    idUser,
    name,
    phone,
    address,
    total,
  });

  if (!Order) {
    return res.status(500).send("Can't create Order");
  }

  res.status(200).send(Order);
});

module.exports = orderRouter;

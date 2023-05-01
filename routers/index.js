const express = require("express");
const cartRouter = require("./carts");
const productRouter = require("./products");
const userRouter = require("./users");

const rootRouter = express.Router();

rootRouter.use("/users", userRouter);
rootRouter.use("/products", productRouter);
rootRouter.use("/carts", cartRouter);

module.exports = rootRouter;

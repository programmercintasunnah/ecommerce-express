const express = require("express");
const cartRouter = require("./carts");
const commentRouter = require("./comments");
const orderRouter = require("./orders");
const productRouter = require("./products");
const userRouter = require("./users");

const rootRouter = express.Router();

rootRouter.use("/users", userRouter);
rootRouter.use("/products", productRouter);
rootRouter.use("/carts", cartRouter);
rootRouter.use("/comments", commentRouter);
rootRouter.use("/orders", orderRouter);

module.exports = rootRouter;

const express = require("express");
const productRouter = require("./products");
const userRouter = require("./users");

const rootRouter = express.Router();

rootRouter.use("/users", userRouter);
rootRouter.use("/products", productRouter);

module.exports = rootRouter;

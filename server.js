const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { sequelize } = require("./models");
const cookieParser = require("cookie-parser");
const path = require("path");
const app = express();

dotenv.config();

app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

const publicPathDirectory = path.join(__dirname, "public");
app.use(express.static(publicPathDirectory));

app.use(cookieParser());
app.use(express.json());

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully");
  })
  .catch((err) => {
    console.log("Unable to connect to the database", err);
  });

const port = process.env.PORT || 9000;

app.listen(port, async () => {
  console.log(`server berjalan di port ${port}`);
});

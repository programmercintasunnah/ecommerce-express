const express = require("express");
const app = express();

const port = 8000;

app.listen(port, async () => {
  console.log(`server berjalan di port ${port}`);
});

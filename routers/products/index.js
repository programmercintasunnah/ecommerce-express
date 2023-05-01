const express = require("express");
const {
  addProduct,
  getListProduct,
  getProductById,
  deleteProduct,
  updateProduct,
  getProductByCategory,
} = require("../../services/products");
const productRouter = express.Router();

productRouter.post("/", async (req, res) => {
  const { name, price, img1, img2, img3, category, desc } = req.body;
  console.log(req.body);

  const newProduct = await addProduct({
    name,
    price,
    img1,
    img2,
    img3,
    category,
    desc,
  });

  if (!newProduct) {
    return res.status(500).send("Can't add product");
  }

  res.status(200).send(newProduct);
});

productRouter.get("/:id", async (req, res) => {
  const { id } = req.params;

  const product = await getProductById(id);

  if (!product) {
    return res.status(500).send(`Can't get product id: ${id}`);
  }

  res.status(200).send(product);
});

productRouter.get("/", async (req, res) => {
  const category = req.query.category || "";
  let products;

  if (category) {
    if (category === "all") {
      products = await getListProduct();
    } else {
      products = await getProductByCategory(category);
    }
    res.status(200).send(products);
  } else {
    const products = await getListProduct();
    if (!products) {
      return res.status(500).send("Product is empty");
    }
    res.status(200).send(products);
  }
});

productRouter.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { name, price, img1, img2, img3, category, desc } = req.body;

  const isProductExist = await getProductById(id);

  if (!isProductExist) {
    return res.status(500).send(`Product ${id} is not exists in db`);
  }

  const data = {
    name,
    price,
    img1,
    img2,
    img3,
    category,
    desc,
  };

  await updateProduct(id, data);

  res.status(200).send(data);
});

productRouter.delete("/:id", async (req, res) => {
  const { id } = req.params;

  const isProductExist = await getProductById(id);
  console.log(isProductExist);

  if (!isProductExist) {
    return res.status(500).send(`Product id ${id} is not exists in db `);
  }

  await deleteProduct(id);

  res.status(200).send(`User id : ${id} successfully`);
});

module.exports = productRouter;

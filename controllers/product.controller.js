const asyncHandler = require("express-async-handler");
const { productService } = require("../services");
const { constants } = require("../utils/constants");

const getProduct = asyncHandler(async (req, res) => {
  let products = await productService.getAllProduct();
  res.status(constants.SUCCESS).send(products);
});

const getProductByAttribute = asyncHandler(async (req, res) => {
  let products = await productService.getProductByAttribute(req.body);
  res.status(constants.SUCCESS).send(products);
});

const insertProduct = async (req, res) => {
  const productData = await productService.createProduct(req.body);
  res.status(constants.CREATED).send(productData);
};

module.exports = {
  getProduct,
  insertProduct,
  getProductByAttribute,
};

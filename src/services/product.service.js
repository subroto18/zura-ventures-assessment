// const httpStatus = require("http-status");
const { Product } = require("../models");
// const ApiError = require("../utils/ApiError");
// const config = require("../config/config");

const getAllProduct = async () => {
  const allProduct = await Product.find({});
  return allProduct;
};

const getProductByAttribute = async (body) => {
  const { searchData } = body;

  const result = await Product.find({
    $or: [
      {
        name: { $regex: searchData, $options: "i" },
      },
      { description: { $regex: searchData, $options: "i" } },
      {
        brandName: { $regex: searchData, $options: "i" },
      },
    ],
  })
    .select(["name", "listOfImages"])
    .limit(10);

  return result;
};

const createProduct = async (body) => {
  const result = await Product.create(body);
  return result;
};

module.exports = {
  getAllProduct,
  createProduct,
  getProductByAttribute,
};

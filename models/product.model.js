const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    Productid: {
      type: Number,
      unique: true,
      required: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    Rating: {
      type: Number,
      required: true,
      trim: true,
    },
    Quantity: {
      type: Number,
      required: true,
      trim: true,
    },
    brandName: {
      type: String,
      required: true,
      trim: true,
    },
    listOfImages: {
      type: Array,
      required: true,
      validate: {
        validator: function (array) {
          return array.every((v) => typeof v === "string");
        },
      },
    },
    options: {
      type: [{}],
      required: true,
    },
  },

  {
    timestamps: true,
  }
);

/**
 * @typedef Product
 */

const Product = mongoose.model("Product", productSchema);

module.exports.Product = Product;

module.exports.productSchema = productSchema;
